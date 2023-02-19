import { useState } from 'react';
import { useFormik } from 'formik';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import LABEL from '../../utils/constants/label';
import MESSAGE from '../../utils/constants/message';
import FORMAT_PRICE from '../../utils/format/price';
import NewCard from './newCard'
import './index.css'

const Payment = ({
    planValue,
    planRenovation,
    cardName,
    cardNumberEnd
}) => {

    const [isOpenModalChangePayment, setisOpenModalChangePayment] = useState(false)
    const [isOpenModalNewCard, setisOpenModalNewCard] = useState(false)

    const formik = useFormik({
        initialValues: {
            cardSelected: ''
        },
        validate: (data) => {
            let errors = {};
            return errors;
        },
        onSubmit: (data) => {
            
        }
    });


    const handleOnClickChangePayment = () => {
        setisOpenModalChangePayment(true)
    }

    const handleOnClickHideModalChangePayment = () => {
        setisOpenModalChangePayment(false)
    }

    const handleOnClickNewCard = () => {
        setisOpenModalNewCard(true)
        setisOpenModalChangePayment(false)
    }

    const handleOnClickHideNewCard = () => {
        setisOpenModalNewCard(false)
    }

    return(
        <>
            <section className='flex flex-column py-3 h-full justify-content-between'>
                <div className='flex align-items-center'>
                    <h2 className=' font-semibold'>{LABEL.PAYMENT}</h2>
                </div>
                <div className='pt-2 md:pt-0'>
                    <p className='text-color-secondary'>{MESSAGE.MONTHLY_PLAN} <span className='primary-color-text'>{FORMAT_PRICE(planValue)}</span></p>
                    <p>{`${MESSAGE.AUTOMATIC_RENOVATION} ${planRenovation}`}</p>
                </div>
                <div className='pt-2 md:pt-1 pb-2 md:pb-0'>
                    <p className='text-color-secondary text-xs font-italic bumblebee__message-progamed-payment'>{`${MESSAGE.PROGRAMED_PAYMENT} ${cardName} ${LABEL.WITH_END} ${cardNumberEnd}`}</p>
                </div>
                <div className=''>
                    <Button className="p-button-text p-0  font-semibold"
                        onClick={() => handleOnClickChangePayment()}>
                        {LABEL.CHANGE_PAYMENT}
                    </Button>
                </div>
            </section>
            <Dialog header={LABEL.CHANGE_PAYMENT} 
                    visible={isOpenModalChangePayment} 
                    onHide={() => handleOnClickHideModalChangePayment()}
                    breakpoints={{'960px': '95vw'}} style={{width: '35vw'}}>

                    <section className='py-3 px-3'>
                        <div>
                            <p className='text-color-secondary font-semibold'>{MESSAGE.CHANGE_PAYMENT_INFO_1}</p>
                        </div>
                        <div className='pt-3'>
                            <form className="p-fluid w-full" onSubmit={formik.handleSubmit}>
                                <div className="w-full">
                                    <Dropdown id="cardSelected" 
                                        placeholder={LABEL.CARD_SELECTED}
                                        name="cardSelected"
                                        value={formik.values.cardSelected}
                                        onChange={formik.handleChange}
                                        options={[]}
                                        optionLabel="cardSelected"
                                        className={`p-dropdown-lg`}/>
                                </div>
                                <div className="pt-3 flex">
                                    <Button 
                                        label={LABEL.ADD_NEW_CARD} 
                                        className="p-button-text w-auto" 
                                        icon="pi pi-plus"
                                        onClick={() => handleOnClickNewCard()}
                                        type="button"/>
                                </div>
                                <div className='pt-3 flex justify-content-end'>
                                    <Button label={LABEL.CHANGE_CARD} 
                                        className="p-button-lg w-auto" 
                                        type="submit" />
                                </div>
                            </form>
                        </div>
                    </section>
            </Dialog>
            <NewCard visible={isOpenModalNewCard} handleOnHide={handleOnClickHideNewCard}/>
        </>
    )
}

Payment.defaultProps = {
    planValue: 1,
    planRenovation: 25,
    cardName: 'MasterCard',
    cardNumberEnd: 3366

}

export default Payment