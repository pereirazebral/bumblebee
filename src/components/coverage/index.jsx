import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import MESSAGE from '../../utils/constants/message';
import LABEL from '../../utils/constants/label';
import FORMAT_PRICE from '../../utils/format/price';
import __MOCK__ from './__mock__';
import './index.css'
import { useEffect } from 'react';

const Coverage = () => {
    
    const [visible, setVisible] = useState(false)
    const [coverageActive, setCoverageActive] = useState(null)
    const [coverageSelect, setCoverageSelect] = useState(null)

    useEffect(() => {
        setCoverageActive(__MOCK__[0])
        setCoverageSelect(__MOCK__[0])
    }, [])

    const handleOnClickChangeLimit = () => {
        setVisible(true)
    }

    const handleOnHide = () => {
        setVisible(false)
        setCoverageSelect(coverageActive)
        
    }

    const handleSelectCoverare = (item) => {
        setCoverageSelect(item)
    }

    const handleSetNewCoverare = () => {
        setCoverageActive(coverageSelect)
        setVisible(false)
    }
    
    return(
        <>
            <section className='flex flex-column py-3'>
                <div>
                    <h2 className='text-xs font-semibold'>{LABEL.COVERAGE}</h2>
                </div>
                <div className='pt-2'>
                    <p className='text-xs text-color-secondary'>{LABEL.COVERAGE_LIMIT}</p>
                </div>
                <div className='pt-0'>
                    <span className='text-primary text-xl font-semibold'>{FORMAT_PRICE(coverageActive?.price)}</span>
                </div>
                <div className='pt-2'>
                    <p className='text-xs text-color-secondary'>{LABEL.COVERAGE_LABEL_01} <span className="font-semibold text-xs text-color">${FORMAT_PRICE(coverageActive?.price_cov01)}</span></p>
                    <p className='text-xs text-color-secondary'>{LABEL.COVERAGE_LABEL_02} <span className="font-semibold text-xs text-color">${FORMAT_PRICE(coverageActive?.price_cov02)}</span></p>
                </div>
                <div className='py-2'>
                    <Button className="p-button-text p-0 text-sm font-semibold"
                        onClick={() => handleOnClickChangeLimit()}>
                        {LABEL.CHANGE_LIMIT}
                    </Button>
                </div>
            </section>
            <Dialog header={MESSAGE.COVERAGE_TITLE} 
                visible={visible} 
                onHide={() => handleOnHide()} 
                breakpoints={{'960px': '95vw'}}
                style={{width: '50vw'}}>
                <section className='flex px-3 py-3'>
                    <p className='text-center md:text-left'>{MESSAGE.COVERAGE_DESCRIPTION}</p>
                </section>
                <section className='flex py-3'>
                    <ul className='flex justify-content-around flex-wrap gap-2 px-3 md:px-0'>
                        {
                            __MOCK__.map((item, index) => {
                                return(
                                    <li key={index}
                                        className={`flex flex-column justify-content-start align-items-center card__coverage px-3 py-3 ${item.id === coverageSelect?.id && "active"}`}
                                        onClick={() => handleSelectCoverare(item)}>
                                            <div className='h-3rem'>
                                                <img src={item.icon} alt='icon'/>
                                            </div>
                                            <div className='pt-1'>
                                                <span className='text-xs'>até</span>
                                            </div>
                                            <div>
                                                <span className='text-lg font-semibold text-300 text-color-secondary price'>R$ {item.priceLabel}</span>
                                            </div>
                                            <div className='w-full mb-2'>
                                                <hr className='w-full'/>
                                            </div>
                                            <div>
                                            <span className='text-xs text-color-secondary'>{LABEL.COVERAGE_LABEL_01} <span className='text-xs font-semibold'>{FORMAT_PRICE(item.price_cov01)}</span></span>
                                            </div>
                                            <div>
                                                <span className='text-xs text-color-secondary'>{LABEL.COVERAGE_LABEL_02} <span className='text-xs font-semibold'>{FORMAT_PRICE(item.price_cov02)}</span></span>
                                            </div>
                                            <div className='w-full mt-2 mb-1'>
                                                <hr/>
                                            </div>
                                            <div>
                                                <span className='text-xs text-color-secondary'>{`${FORMAT_PRICE(item.priceMonth)}/mês`}</span>
                                            </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                { coverageSelect !== coverageActive &&
                    <section className='flex justify-content-end align-items-center'>
                        <Button label={LABEL.CONFIRM_CHANGE}
                            className="p-button-sm"  
                            onClick={() => handleSetNewCoverare()}/>
                    </section>
                }
            </Dialog>
        </>
    )
}

export default Coverage