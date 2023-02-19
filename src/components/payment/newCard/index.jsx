import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import LABEL from '../../../utils/constants/label';
import MESSAGE from '../../../utils/constants/message';

const NewCard = ({
    visible,
    handleOnHide
}) => {
    const formik = useFormik({
        initialValues: {
            nameTheCard: '',
            numberCard: '',
            validity:'',
            cvv: ''
        },
        validate: (data) => {
            let errors = {};
            return errors;
        },
        onSubmit: (data) => {
            
        }
    });
    return (
        <Dialog header={LABEL.ADD_NEW_CARD} 
            visible={visible} 
            onHide={() => handleOnHide()}
            breakpoints={{'960px': '95vw'}} style={{width: '30vw'}}>
            <section className='py-3 px-3'>
                <div>
                    <p>{MESSAGE.ADD_NEW_CARD_INFO_1}</p>
                    <p className='pt-3 font-semibold primary-color-text'>{MESSAGE.ADD_NEW_CARD_INFO_2}</p>
                </div>
                <div className='pt-3'>
                    <form className="p-fluid w-full" onSubmit={formik.handleSubmit}>
                        <div className="w-full">
                            <label className='text-color-secondary' htmlFor="nameTheCard">{LABEL.NAME_THE_CARD}</label>
                            <InputText 
                                id="nameTheCard" 
                                name="nameTheCard"
                                type="text"
                                value={formik.values.nameTheCard}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block`}/>
                        </div>
                        <div className="w-full pt-3">
                            <label className='text-color-secondary' htmlFor="numberCard">{LABEL.NUMBER_THE_CARD}</label>
                            <InputMask 
                                mask='9999.9999.9999.9999' 
                                id="numberCard" 
                                name="numberCard"
                                type="text"
                                value={formik.values.numberCard}
                                onChange={formik.handleChange}
                                className={`p-inputtext-lg block`}/>
                        </div>
                        <div className='flex flex-column lg:flex-row gap-5 pt-3'>
                            <div className="w-full lg:max-w-12rem">
                                <label className='text-color-secondary' htmlFor="validity">{LABEL.VALIDITY}</label>
                                <InputText 
                                    id="validity" 
                                    name="validity"
                                    type="text"
                                    value={formik.values.validity}
                                    onChange={formik.handleChange}
                                    className={`p-inputtext-lg block `}/>
                            </div>
                            <div className="w-full">
                                <label className='text-color-secondary custom-target-icon' htmlFor="cvv">{LABEL.CVV}</label>
                                <Tooltip target=".custom-target-icon" />
                                <i className="pi pi-exclamation-circle pl-1 custom-target-icon text-color-secondary pl-2" data-pr-tooltip={MESSAGE.ADD_NEW_CARD_INFO_3}></i>
                                <InputText 
                                    id="cvv" 
                                    name="cvv"
                                    type="text"
                                    value={formik.values.cvv}
                                    onChange={formik.handleChange}
                                    className={`p-inputtext-lg block `}/>
                            </div>
                        </div>
                        <div className='pt-6 flex justify-content-end'>
                            <Button label={LABEL.ADD_NEW_CARD} 
                                className="p-button-lg w-auto" 
                                type="submit" />
                        </div>
                    </form>
                </div>
            </section>

        </Dialog>
    )
}

NewCard.defaultProps = {
    visible: false,
    handleOnHide: null
}


export default NewCard