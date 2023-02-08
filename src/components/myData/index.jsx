import { useState } from 'react';
import { useFormik } from 'formik';
import { classNames } from 'primereact/utils';
import { showNotification } from "../../utils/notification"
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';
import MESSAGE from '../../utils/constants/message';
import LABEL from '../../utils/constants/label';
import GENRES from '../../utils/constants/genre';
import CONFIG from '../../utils/constants/config';
const MyData = ({
    notification
}) => {
    
    const [ isEdit, setIsEdit ] = useState(false)
    
    const formik = useFormik({
        initialValues: {
            cpf: '12345678910',
            name: 'Garbe Solutions',
            email: 'garbesolutions@gmail.com',
            birthDate: '21012021',
            genre: 'Homem',
            phone: '11983090322'
        },
        validate: (data) => {
            let errors = {};
            
            if (!data.cpf) {
                errors.email = MESSAGE.EMAIL_REQUIRED
            }

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
                MESSAGE.UPDADE_MY_DATA,
                MESSAGE.UPDADE_MY_DATA_MESSAGE
            )
            setIsEdit(false)
        }
    });

    const handleClickEditCancel = () => {
        setIsEdit(false)
        formik.resetForm();
    }

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error text-xs">{formik.errors[name]}</small>;
    };

    return (
        <Card>
            <section className='flex align-items-center'>
                <Avatar label="G" 
                    className="mr-2" 
                    size="large"
                    style={{ backgroundColor: '#f58022', color: '#333' }} 
                    shape="circle" />
                <h2>Garbe Solutions</h2>
            </section>
            <section className='pt-5'>
                <form className="p-fluid w-full" onSubmit={formik.handleSubmit}>
                    <section className='flex flex-column lg:flex-row gap-5'>
                        <div className="w-full">
                        <label className='text-xs text-color-secondary' htmlFor="cpf">{LABEL.CPF}</label>
                            <InputMask
                                mask='999.999.999-99' 
                                id="cpf" 
                                name="cpf"
                                type="text"
                                value={formik.values.cpf}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block text-sm ${classNames({ 'p-invalid': isFormFieldValid('cpf') })}`}
                                readOnly={!isEdit}/>
                            {getFormErrorMessage('cpf')}
                        </div>
                        <div className="w-full">
                            <label className='text-xs text-color-secondary' htmlFor="name">{LABEL.NAME}</label>
                            <InputText 
                                id="name" 
                                name="name"
                                type="text"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block text-sm ${classNames({ 'p-invalid': isFormFieldValid('name') })}`}
                                readOnly={!isEdit}/>
                            {getFormErrorMessage('name')}
                        </div>
                    </section>
                    <section className='flex flex-column lg:flex-row gap-5 pt-3'>
                        <div className=" w-full">
                            <label className='text-xs text-color-secondary' htmlFor="email">{LABEL.EMAIL}</label>
                            <InputText 
                                id="email" 
                                name="email"
                                type="text"
                                value={formik.values.email}
                                placeholder={LABEL.EMAIL}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block text-sm ${classNames({ 'p-invalid': isFormFieldValid('email') })}`}
                                readOnly={!isEdit}/>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="w-full">
                            <label className='text-xs text-color-secondary' htmlFor="birthDate">{LABEL.BIRTH_DATE}</label>
                            <InputMask 
                                mask='99/99/9999'
                                id="birthDate" 
                                name="birthDate"
                                type="text"
                                value={formik.values.birthDate}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block text-sm ${classNames({ 'p-invalid': isFormFieldValid('birthDate') })}`}
                                readOnly={!isEdit}/>
                            {getFormErrorMessage('birthDate')}
                        </div>
                    </section>
                    <section className='flex flex-column lg:flex-row gap-5 pt-3'>
                        <div className=" w-full">
                            <label className='text-xs text-color-secondary' htmlFor="genre">{LABEL.GENRE}</label>
                                <Dropdown 
                                    id="genre" 
                                    name="genre"
                                    value={formik.values.genre}
                                    onChange={formik.handleChange}
                                    options={GENRES}
                                    optionLabel="name" 
                                    className={`p-dropdown-lg text-sm ${classNames({ 'p-invalid': isFormFieldValid('genre') })}`}
                                    disabled={!isEdit}/>
                                
                                {getFormErrorMessage('genre')}
                        </div>
                        <div className="w-full">
                            <label className='text-xs text-color-secondary' htmlFor="phone">{LABEL.PHONE}</label>
                            <InputMask 
                                mask='(99)99999-9999'
                                id="phone" 
                                name="phone"
                                type="text"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block text-sm ${classNames({ 'p-invalid': isFormFieldValid('phone') })}`}
                                readOnly={!isEdit}/>
                            
                            {getFormErrorMessage('phone')}
                        </div>
                    </section>
                    <section className='mt-6 flex justify-content-end'>
                        { !isEdit? 
                            <Button label={LABEL.EDIT} className="p-button-text w-auto" onClick={() => setIsEdit(true)}/>    
                        :   
                        <div className='flex gap-2'>
                             <Button label={LABEL.CANCEL} 
                                className="p-button-text w-auto" onClick={() => handleClickEditCancel()}/>  
                             <Button type="submit" 
                                label={LABEL.SAVE} 
                                className="p-button-lg w-auto"/>
                        </div>
                        
                        }
                    </section>
                </form>
            </section>
        </Card>
    )
}

export default MyData