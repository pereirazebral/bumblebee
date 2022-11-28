import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { classNames } from 'primereact/utils';
import Logo from '../../assets/imagens/bumblebee-logo.png'
import LABEL from '../../utils/constants/label';
import MESSAGE from '../../utils/constants/message';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import ResetPassword from '../../components/resetPassword';
import { showNotification } from "../../utils/notification"
import './login.css'
const Login = ({
    notification
}) => {

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
            showNotification(notification, 
                'success', 
                'Login com sucesso', 
                'Seu login foi realizado com sucesso, aguaede o direcionamento', 
                3000
            )
            formik.resetForm();
        }
    });
    
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error text-xs">{formik.errors[name]}</small>;
    };

    return(
        <>
            <section className="bumblebee__login h-screen bumblebee__container flex flex-column md:flex-row justify-content-center align-items-center">
                <div className='bumblebee-login-background w-full h-full'></div>
                <div className='w-full h-full flex flex-column justify-content-center align-items-center'>
                    <img className="bumblebee__logo" src={Logo} alt="bumblebee-logo" title="Logo"/> 
                    <h1 className='bumblebee__login__title text-xl md:text-3xl mb-3'>{LABEL.LOGIN_TITLE}</h1>
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
                            className="p-button-lg mb-3"
                            onClick={() => formik.onSubmit()}/>
                    </form>

                    <Button label={LABEL.PASSWORD_RESET} 
                            className="p-button-link text-sm p-0"/>

                    <Button label={LABEL.EMAIL_FORGOT} 
                        className="p-button-link mb-5" />

                    <p className="text-xs mb-2">{LABEL.HIRE_HERE_TEXT}</p>

                    <Button label={LABEL.HIRE_HERE} 
                        className="p-button-outlined" />

                    <p className="text-xs mb-4 md:mb-2 md:flex align-items-center mt-7 text-center">Clicando em "Entrar" você concorda com nossos 
                        <Button className="p-button-link text-xs py-0 px-1">
                            Termos e condições
                        </Button>
                        <span className='text-xs'>e</span>
                        <Button className="p-button-link text-xs py-0 px-1">
                            Política de Privacidade    
                        </Button>   
                    </p>
                </div>
            </section>
            <ResetPassword/>
        </>
    )
}
Login.propTypes = {
    notification: PropTypes.object
}
Login.defaultProps = {
    notification: null
}

export default Login