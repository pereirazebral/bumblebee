import { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { InputSwitch } from 'primereact/inputswitch';
import LABEL from '../../utils/constants/label';
import MESSAGE from '../../utils/constants/message';
import './index.css'
const Assists = () => {
    
    const [checkedEletroassist, setCheckedEletroassist] = useState(false);

    const onChangeEletroassist = (value) => {
        setCheckedEletroassist(value)
    }

    const [checkedHelpDesk, setCheckedHelpDesk] = useState(false);

    const onChangeHelpDesk = (value) => {
        setCheckedHelpDesk(value)
    }

    const [checkedPet, setCheckedPet] = useState(false);

    const onChangePet = (value) => {
        setCheckedPet(value)
    }

    return(
        <section className='flex flex-column py-3 h-full bumblebee__assists-container-section justify-content-between'>
            
                <div className='flex align-items-center'>
                    <Tooltip target=".custom-target-icon" />
                    <h2 className=' font-semibold'>{LABEL.ASSISTS}</h2>
                    <i className="pi pi-exclamation-circle pl-1 custom-target-icon" data-pr-tooltip={MESSAGE.MESSAGE_ASSISTS}></i>
                </div>
                
                <div className='flex align-items-center justify-content-between pt-2 md:pt-0'>
                    <p className='text-color-secondary'>{LABEL.ELETROASSIST}</p>
                    <InputSwitch checked={checkedEletroassist} 
                        onChange={(e) => onChangeEletroassist(e.value)}/>
                </div>
                <div className='flex align-items-center justify-content-between pt-3'>
                    <p className='text-color-secondary'>{LABEL.HELP_DESK}</p>
                    <InputSwitch checked={checkedHelpDesk} 
                        onChange={(e) => onChangeHelpDesk(e.value)}/>
                </div>
                <div className='flex align-items-center justify-content-between pt-3'>
                    <p className='text-color-secondary'>{LABEL.PET}</p>
                    <InputSwitch checked={checkedPet} 
                        onChange={(e) => onChangePet(e.value)}/>
                </div>
                <div className='flex align-items-center justify-content-between pt-3'>
                    <p className='text-color-secondary font-bold'>{LABEL.EMERGENCY}*</p>
                    <p className='text-color-secondary text-xs font-italic'>{MESSAGE.INCLUDED_THE_PACKAGE}</p>
                </div>
                
            
        </section>
    )
}

export default Assists