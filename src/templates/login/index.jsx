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
const Login = ({
    notification,
    userContext
}) => {
    const [ visibleModalResetPassword, setVisibleModalResetPassword] = useState(false)
    

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

    const setForlgata = (data) => {
        const user = {
            email: data.email,
            name: '',
            password: data.password
        }
        userContext(user)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (data) => {
            let errors = {};

            if (!data.email) {
                errors.email = MESSAGE.EMAIL_REQUIRED
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.password) {
                errors.password = MESSAGE.PASSWORD_REQUIRED
            }

            return errors;
        },
        onSubmit: (data) => {
            formik.resetForm();
            setForlgata(data)
        },
    });
    
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error text-xs">{formik.errors[name]}</small>;
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
                                id="email" 
                                name="email"
                                type="text"
                                value={formik.values.email}
                                placeholder={LABEL.EMAIL}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block ${classNames({ 'p-invalid': isFormFieldValid('email') })}`}/>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className='mb-3'>
                            <Password toggleMask 
                                id="password" 
                                name="password"
                                feedback={false} 
                                value={formik.values.password}
                                placeholder={LABEL.PASSWORD}
                                className={`p-inputtext-lg block ${classNames({ 'p-invalid': isFormFieldValid('password') })}`}
                                onChange={formik.handleChange}/>
                            {getFormErrorMessage('password')}
                        </div>
                        <Button type="submit" 
                            label={LABEL.LOGIN} 
                            className="p-button-lg mb-3"/>
                    </form>

                    <div>
                        <Button label={LABEL.PASSWORD_RESET} 
                            className="p-button-link text-sm p-0"
                            onClick={() => showPasswordReset()}/>
                    </div>
                    <div>
                        <Button label={LABEL.EMAIL_FORGOT} 
                            className="p-button-link text-sm mb-5 p-0" 
                            onClick={() => showNotificationEmailForgot()}/>
                    </div>
                    
                    <p className="text-xs mb-2">{LABEL.HIRE_HERE_TEXT}</p>

                    <Button label={LABEL.HIRE_HERE} 
                        className="p-button-outlined" />

                    <p className="text-xs mb-4 lg:mb-2 lg:flex align-items-center mt-7 text-center">Clicando em "Entrar" você concorda com nossos 
                        <Button className="p-button-link text-xs py-0 px-1" label=' Termos e condições'/>
                        <span className='text-xs'>e</span>
                        <Button className="p-button-link text-xs py-0 px-1" label='Política de Privacidade'/>
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
    setUserContext: PropTypes.func
}
Login.defaultProps = {
    notification: null,
    setUserContext: null
}

export default Login