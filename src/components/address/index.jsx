import { useState } from 'react';
import { useFormik } from 'formik';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import LABEL from '../../utils/constants/label';

const Address = () => {
    const [visible, setVisible] = useState(false)
    
    const formik = useFormik({
        initialValues: {
            cep: '',
            street: '',
            number: '',
            neighborhood: '',
            complement: '',
            city: '',
            state: ''
        },
        validate: (data) => {
            let errors = {};
            return errors;
        },
        onSubmit: (data) => {
            
        }
    });

    
    
    const handleOnClickChangeAddress = () => {
        setVisible(true)
    }

    const handleOnHide = () => {
        setVisible(false)
    }


    return(
       <>
            <section className='flex flex-column py-3 h-full'>
                <div>
                    <div>
                        <h2 className='text-xs font-semibold'>{LABEL.ADDRESS}</h2>
                    </div>
                    <div className='pt-2'>
                        <p className='text-xs text-color-secondary max-w-12rem'>Rua Serra da Mantiqueira 78 Jardim Planalto Carapicuíba, SP</p>
                    </div>
                </div>
                <div className='py-2 h-full flex align-items-end'>
                    <Button className="p-button-text p-0 text-sm font-semibold"
                        onClick={() => handleOnClickChangeAddress()}>
                        {LABEL.CHANGE_ADDRESS}
                    </Button>
                </div>
            </section>
            <section className='bumblebee__container_modal'>
                <Dialog header={LABEL.EDIT_MY_ADDRESS} 
                    visible={visible} 
                    onHide={() => handleOnHide()}>
                    <section className='flex lg:px-3 pt-3'>
                        <p className='text-center lg:text-left'>{LABEL.CURRENT_ADDRESS}</p>
                    </section>
                    <section className='flex lg:px-3 pt-1'>
                        <p className='text-xs text-color-secondary lg:max-w-12rem text-left'>Rua Serra da Mantiqueira 78 Jardim Planalto Carapicuíba, SP</p>
                    </section>
                    <section className='pt-5 lg:px-3'>
                        <form className="p-fluid w-full" onSubmit={formik.handleSubmit}>
                            <section className='flex flex-column lg:flex-row gap-5'>
                                <div className="w-full lg:max-w-12rem">
                                    <label className='text-xs text-color-secondary' htmlFor="cep">{LABEL.CEP}</label>
                                    <InputText 
                                        id="cep" 
                                        name="cep"
                                        type="text"
                                        value={formik.values.cep}
                                        onChange={formik.handleChange}
                                        className={`p-inputtext-lg block text-sm`}/>
                                </div>
                            </section>
                            <section className='flex flex-column lg:flex-row gap-5 pt-3'>
                                <div className="w-full">
                                    <label className='text-xs text-color-secondary' htmlFor="street">{LABEL.STREET}</label>
                                    <InputText 
                                        id="street" 
                                        name="street"
                                        type="text"
                                        value={formik.values.street}
                                        onChange={formik.handleChange}
                                        className={`p-inputtext-lg block text-sm`}/>
                                </div>
                            </section>
                            <section className='flex flex-column lg:flex-row gap-5 pt-3'>
                                <div className="w-full lg:max-w-12rem">
                                    <label className='text-xs text-color-secondary' htmlFor="number">{LABEL.NUMBER}</label>
                                    <InputText 
                                        id="number" 
                                        name="number"
                                        type="text"
                                        value={formik.values.number}
                                        onChange={formik.handleChange}
                                        className={`p-inputtext-lg block text-sm`}/>
                                </div>
                                <div className="w-full">
                                    <label className='text-xs text-color-secondary' htmlFor="complement">{LABEL.COMPLEMENT}</label>
                                    <InputText 
                                        id="complement" 
                                        name="complement"
                                        type="text"
                                        value={formik.values.complement}
                                        onChange={formik.handleChange}
                                        className={`p-inputtext-lg block text-sm`}/>
                                </div>
                            </section>
                            <section className='flex flex-column lg:flex-row gap-5 pt-3'>
                                <div className="w-full">
                                    <label className='text-xs text-color-secondary' htmlFor="neighborhood">{LABEL.NEIGHBORHOOD}</label>
                                    <InputText 
                                        id="neighborhood" 
                                        name="neighborhood"
                                        type="text"
                                        value={formik.values.neighborhood}
                                        onChange={formik.handleChange}
                                        className={`p-inputtext-lg block text-sm`}/>
                                </div>
                            </section>
                            <section className='flex flex-column lg:flex-row gap-5 pt-3'>
                                <div className="w-full">
                                    <label className='text-xs text-color-secondary' htmlFor="city">{LABEL.CITY}</label>
                                    <InputText 
                                        id="city" 
                                        name="city"
                                        type="text"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        className={`p-inputtext-lg block text-sm`}/>
                                </div>
                                <div className="w-full lg:max-w-12rem">
                                    <label className='text-xs text-color-secondary' htmlFor="state">{LABEL.STATE}</label>
                                    <InputText 
                                        id="state" 
                                        name="state"
                                        type="text"
                                        value={formik.values.state}
                                        onChange={formik.handleChange}
                                        className={`p-inputtext-lg block text-sm`}/>
                                </div>
                            </section>
                            <section className='mt-6 flex justify-content-end'>
                                <Button label={LABEL.SAVE_NEW_ADDRESS} 
                                    className="p-button-lg w-auto" 
                                    type="submit" />
                            </section>
                        </form>
                    </section>
                </Dialog>
            </section>

        </>
    )
}
export default Address