import { Button } from 'primereact/button';
import LABEL from '../../utils/constants/label';
import MESSAGE from '../../utils/constants/message';
import FORMAT_PRICE from '../../utils/format/price';
import './index.css'
const Payment = ({
    planValue,
    planRenovation,
    cardName,
    cardNumberEnd
}) => {

    const handleOnClickChangePayment = () => {

    }

    return(
        <section className='flex flex-column py-3 h-full justify-content-between'>
            
                <div className='flex align-items-center'>
                    <h2 className='text-sm font-semibold'>{LABEL.PAYMENT}</h2>
                </div>
                <div className='pt-2 md:pt-0'>
                    <p className='text-color-secondary'>{MESSAGE.MONTHLY_PLAN} <span className='primary-color-text'>{FORMAT_PRICE(planValue)}</span></p>
                    <p>{`${MESSAGE.AUTOMATIC_RENOVATION} ${planRenovation}`}</p>
                </div>
                <div className='pt-2 md:pt-1 pb-2 md:pb-0'>
                    <p className='text-color-secondary text-xs font-italic bumblebee__message-progamed-payment'>{`${MESSAGE.PROGRAMED_PAYMENT} ${cardName} ${LABEL.WITH_END} ${cardNumberEnd}`}</p>
                </div>
                <div className=''>
                    <Button className="p-button-text p-0 text-sm font-semibold"
                        onClick={() => handleOnClickChangePayment()}>
                        {LABEL.CHANGE_PAYMENT}
                    </Button>
                </div>
            
        </section>
    )
}

Payment.defaultProps = {
    planValue: 1,
    planRenovation: 25,
    cardName: 'MasterCard',
    cardNumberEnd: 3366

}

export default Payment