/* eslint-disable no-mixed-operators */
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { classNames } from 'primereact/utils';
import Logo from '../../components/logo'
import LABEL from '../../utils/constants/label';
import MESSAGE from '../../utils/constants/message';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import ResetPassword from '../../components/resetPassword';
import { showNotification } from "../../utils/notification"
import './login.css'
import { useState } from 'react';
import CONFIG from '../../utils/constants/config';
import API from '../../utils/constants/api'

const Login = ({
    notification,
    setUserContext,
    setUserToken
}) => {
    const [ visibleModalResetPassword, setVisibleModalResetPassword] = useState(false)
    const [ isLoadingRequest, setLoadingRequest] = useState(false)


    const showPasswordReset = () => {
        setVisibleModalResetPassword(true)
    }

    const hidePasswordReset = () => {
        setVisibleModalResetPassword(false)
    }


    const showNotificationEmailForgot = () => {
        showNotification(notification, 
            CONFIG.SEVERITY_NOTIFICATION.INFO, 
            MESSAGE.FORGOT_YOUR_EMAIL,
            `${MESSAGE.FORGOT_YOUR_EMAIL_MESSAGE} ${process.env.REACT_APP_EMAIL_CONTACT}`,
        )
    }

    const setResutData = (data) => {
        setUserToken(data)
        // setUserContext({
        //     user: 'vinicius',
        //     password: 'ssddsdsfeweqwddqe3',
        //     email: 'viniciusp93@gmail.com'
        // })
    }

    const formik = useFormik({
        initialValues: {
            user: '',
            password: '',
        },
        validate: (data) => {
            let errors = {};

            if (!data.user) {
                errors.user = MESSAGE.USER_REQUIRED
            }
            // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            //     errors.user = 'Invalid email address. E.g. example@email.com';
            // }

            if (!data.password) {
                errors.password = MESSAGE.PASSWORD_REQUIRED
            }

            return errors;
        },
        onSubmit: (data) => {
            authLogin(data.user, data.password)
        },
    });

    const authLogin = async (user, password) => {
        setLoadingRequest(true)
        const options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': '*/*',
            },
            body: JSON.stringify({
                UserID: user,
                Password: password
            })
        }

        await fetch(API.AUTH_LOGIN, options)
            .then((response) => response.json())
            .then((data) => {
                setResutData(data)
            })
            .catch((error) => {
                console.log("error", error)
                showNotification(notification, 
                    CONFIG.SEVERITY_NOTIFICATION.ERROR, 
                    MESSAGE.ERROR_DEFAULT,
                    `${MESSAGE.ERROR_DEFAULT_MESSAGE}`,
                )
                setLoadingRequest(false)
            })
            .finally(() => {
            })
    }

    
  
    
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error ">{formik.errors[name]}</small>;
    };


    return(
        <>
            <section className="bumblebee__login lg:h-screen bumblebee__container flex flex-column lg:flex-row justify-content-center align-items-center">
                <div className='w-full lg:h-full flex flex-column lg:justify-content-start lg:justify-content-center align-items-center py-5'>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                        <h1 className='bumblebee__login__title text-xl mb-3'>{LABEL.LOGIN_TITLE}</h1>
                    </div>
                    <form className="bumblebee__login_form p-fluid w-full" onSubmit={formik.handleSubmit} >
                        <div className='mb-3'>
                            <InputText 
                                id="user" 
                                name="user"
                                type="text"
                                value={formik.values.user}
                                placeholder={LABEL.USER}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block ${classNames({ 'p-invalid': isFormFieldValid('user') })}`}
                                disabled={isLoadingRequest}/>
                            {getFormErrorMessage('user')}
                        </div>
                        <div className='mb-3'>
                            <Password toggleMask 
                                id="password" 
                                name="password"
                                feedback={false} 
                                value={formik.values.password}
                                placeholder={LABEL.PASSWORD}
                                className={`p-inputtext-lg block ${classNames({ 'p-invalid': isFormFieldValid('password') })}`}
                                onChange={formik.handleChange}
                                disabled={isLoadingRequest}/>
                            {getFormErrorMessage('password')}
                        </div>
                        <Button type="submit" 
                            label={!isLoadingRequest && LABEL.LOGIN || '' } 
                            className="p-button-lg mb-3 w-full"
                            loading={isLoadingRequest}/>
                        
                    </form>

                    <div>
                        <Button label={LABEL.PASSWORD_RESET} 
                            className="p-button-link p-0 p-button-lg"
                            onClick={() => showPasswordReset()}
                            disabled={isLoadingRequest}/>
                    </div>
                    <div>
                        <Button label={LABEL.EMAIL_FORGOT} 
                            className="p-button-link  mb-5 p-0" 
                            onClick={() => showNotificationEmailForgot()}
                            disabled={isLoadingRequest}/>
                    </div>
                    
                    <p className=" mb-2">{LABEL.HIRE_HERE_TEXT}</p>

                    <Button label={LABEL.HIRE_HERE} 
                        className="p-button-outlined" />

                    <p className=" mb-4 lg:mb-2 lg:flex align-items-center mt-7 text-center">Clicando em "Entrar" você concorda com nossos 
                        <Button className="p-button-link  py-0 px-1" label=' Termos e condições'/>
                        <span className=''>e</span>
                        <Button className="p-button-link  py-0 px-1" label='Política de Privacidade'/>
                    </p>
                </div>
            </section>
            { visibleModalResetPassword && <ResetPassword visible={visibleModalResetPassword}
                onHide={() => hidePasswordReset()}
                notification={notification}/> || <></> }
        </>
    )
}
Login.propTypes = {
    notification: PropTypes.object,
    setUserContext: PropTypes.func,
    setUserToken: PropTypes.func
}
Login.defaultProps = {
    notification: null,
    setUserContext: null,
    setUserToken: null
}

export default Login