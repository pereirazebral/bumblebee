import { useFormik } from 'formik';
import { classNames } from 'primereact/utils';
import { Dialog } from 'primereact/dialog';
import MESSAGE from '../../utils/constants/message';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import LABEL from '../../utils/constants/label';
import { showNotification } from "../../utils/notification"
import CONFIG from '../../utils/constants/config';
const ResetPassword = ({
    onHide,
    visible,
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

            return errors;
        },
        onSubmit: (data) => {
            showNotification(notification, 
                CONFIG.SEVERITY_NOTIFICATION.SUCCESS, 
                MESSAGE.RECOVER_ACCESS_SUCESS,
                MESSAGE.RECOVER_ACCESS_SUCESS_MESSAGE
            )
            formik.resetForm();
            onHide()
        }
    });
    
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error ">{formik.errors[name]}</small>;
    };

    return(
        <Dialog header={MESSAGE.FORGOT_YOUR_PASSWORD} 
            visible={visible} 
            onHide={() => onHide()} 
            breakpoints={{'960px': '95vw'}}
            style={{width: '50vw'}}>
                <section className='my-3'>
                    <h3 className='text-center'>{MESSAGE.FORGOT_YOUR_PASSWORD_MESSAGE}</h3>
                    <form className="bumblebee__login_form p-fluid w-full" onSubmit={formik.handleSubmit}>
                        <div className='mb-3 mt-3 lg:px-5'>
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
                        <div className='mb-3 lg:px-5'>
                            <Button label={LABEL.RECOVER_ACCESS} 
                                className="p-button-lg"/>
                        </div>
                    </form>
                </section>
        </Dialog>
    )
}

ResetPassword.defaultProps = {
    onHide: () => null,
    visible: false,
    notification: null
}
export default ResetPassword