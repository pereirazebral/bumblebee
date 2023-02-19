import { useFormik } from 'formik';
import { classNames } from 'primereact/utils';
import { showNotification } from "../../utils/notification"
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import MESSAGE from '../../utils/constants/message';
import CONFIG from '../../utils/constants/config';
const Sac = ({
    notification
}) => {
    
    const formik = useFormik({
        initialValues: {
            roof: '',
            address: '',
            subject: '',
            message: '',
        },
        validate: (data) => {
            let errors = {};
            
            if (!data.roof) {
                errors.roof = MESSAGE.ROOF_REQUIRED
            }

            if (!data.address) {
                errors.address = MESSAGE.ADDRESS_REQUIRED
            }

            if (!data.subject) {
                errors.address = MESSAGE.SUBJECT_REQUIRED
            }

            return errors;
        },
        onSubmit: (data) => {
            showNotification(notification, 
                CONFIG.SEVERITY_NOTIFICATION.SUCCESS, 
                MESSAGE.SAC_SUCESS,
                MESSAGE.SAC_SUCESS_MESSAGE
            )
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error ">{formik.errors[name]}</small>;
    };

    return(
        <section>        
            <h3 className='text-lg text-color-secondary'>{MESSAGE.SAC_TITLE}</h3>
            <p className=' text-color-secondary'>{MESSAGE.SAC_SUB_TITLE}</p>
            <div className='mt-4'>
                <Card>
                    <form className="p-fluid w-full" onSubmit={formik.handleSubmit}>
                        <section className='flex flex-column lg:flex-row'>
                            <div className="w-full">
                                <Dropdown id="roof" 
                                    placeholder={MESSAGE.ROOF_SELECT}
                                    name="roof"
                                    value={formik.values.roof}
                                    onChange={formik.handleChange}
                                    options={[]}
                                    optionLabel="roof" 
                                    className={`p-dropdown-lg  ${classNames({ 'p-invalid': isFormFieldValid('roof') })}`}/>
                                    
                                {getFormErrorMessage('roof')}
                            </div>
                        </section>
                        <section className='flex flex-column lg:flex-row mt-4'>
                            <div className="w-full">
                                <Dropdown id="address" 
                                    placeholder={MESSAGE.ADDRESS_BY_ROOF}
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    options={[]}
                                    optionLabel="address" 
                                    className={`p-dropdown-lg  ${classNames({ 'p-invalid': isFormFieldValid('address') })}`}/>
                                    
                                {getFormErrorMessage('address')}
                            </div>
                        </section>
                        <section className='flex flex-column lg:flex-row mt-4'>
                            <div className="w-full">
                                <Dropdown id="subject" 
                                    placeholder={MESSAGE.SUBJECT_BY_CONTACT}
                                    name="subject"
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                    options={[]}
                                    optionLabel="subject" 
                                    className={`p-dropdown-lg  ${classNames({ 'p-invalid': isFormFieldValid('subject') })}`}/>
                                    
                                {getFormErrorMessage('subject')}
                            </div>
                        </section>
                        <section className='flex flex-column lg:flex-row mt-4'>
                            <div className="w-full">
                                <InputTextarea id="message" 
                                    placeholder={MESSAGE.MESSAGE_ABOUT}
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    rows={8} 
                                    cols={60} 
                                    autoResize />
                            </div>
                        </section>
                        
                    </form>
                </Card>
            </div>
        </section>

        
    )
}
export default Sac