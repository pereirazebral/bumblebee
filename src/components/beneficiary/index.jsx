import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import LABEL from '../../utils/constants/label';
import MESSAGE from '../../utils/constants/message';
const Beneficiary = ({
    visible,
    handleOnHide
}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: '',
        },
        validate: (data) => {
            let errors = {};
            return errors;
        },
        onSubmit: (data) => {
            
        }
    });
    return (
        <Dialog header={LABEL.ADD_BENEFICIARY} 
            visible={visible} 
            onHide={() => handleOnHide()}
            breakpoints={{'960px': '95vw'}} style={{width: '30vw'}}>
            <section className='py-3 px-3'>
                <div>
                    <p>{MESSAGE.ADD_BENEFICIARY_INFO_1}</p>
                    <p className='pt-3 font-semibold text-color-secondary'>{MESSAGE.ADD_BENEFICIARY_INFO_2}</p>
                </div>
                <div className='pt-3'>
                <form className="p-fluid w-full" onSubmit={formik.handleSubmit}>
                    <div className="w-full">
                        <label className='text-color-secondary' htmlFor="name">{LABEL.NAME}</label>
                        <InputText 
                            id="name" 
                            name="name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className={`p-inputtext-lg block`}/>
                    </div>
                    <div className="w-full pt-3">
                        <label className='text-color-secondary' htmlFor="cep">{LABEL.CPF}</label>
                        <InputMask 
                            mask='999.999.999-99' 
                            id="cpf" 
                            name="cpf"
                            type="text"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            className={`p-inputtext-lg block`}/>
                    </div>
                    <div className='pt-6 flex justify-content-end'>
                        <Button label={LABEL.SAVE_NEW_BENEFICIARY} 
                            className="p-button-lg w-auto" 
                            type="submit" />
                    </div>
                </form>
                </div>
            </section>

        </Dialog>
    )
}

Beneficiary.defaultProps = {
    visible: false,
    handleOnHide: null
}

export default Beneficiary