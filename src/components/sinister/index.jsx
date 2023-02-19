import { Message } from 'primereact/message';
import MESSAGE from '../../utils/constants/message';
const Sinister = () => {
    return(
        <section className='flex justify-content-center pt-6'>
            <Message severity="success" text={MESSAGE.SINISTER_OPEN} />
        </section>
    )
}

export default Sinister