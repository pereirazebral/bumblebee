import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import LABEL from '../../utils/constants/label';
import Coverage from '../coverage';
import Address from '../address';
import Assists from '../assists';
import './index.css'
import { ReactComponent as Company } from '../../assets/imagens/company.svg'
const __MOCK__ = [
    {
        subscriptionsTitle: "Plano 1201201201"
    },
    {
        subscriptionsTitle: "Plano 1201203201"
    }
]



const MySubscriptions = () => {

    const menu = useRef(null);
    const items = [
        {
            label: LABEL.DOCUMENTS,
            items: [
                {
                    label: LABEL.GENERAL_COVERAGE_CONDITIONS,
                    icon: 'pi pi-file',
                    command:(e) => console.log(e)
                },

                {
                    label: LABEL.PLAN_CERTIFICATE,
                    icon: 'pi pi-file',
                    command:(e) => console.log(e)
                },

                {
                    label: LABEL.SERVICE_MANUAL,
                    icon: 'pi pi-file',
                    command:(e) => console.log(e)
                }
            ]
        },
        {
            label: LABEL.ABOUT_THE_PLAN,
            items: [
                {
                    label: LABEL.CANCEL_PLAN,
                    icon: 'pi pi-power-off',
                    command:(e) => console.log(e)
                }
            ]
        }
    ];

    return(
       <>
        {__MOCK__.map((item, index) => {
            return(
                <section key={index} className='flex flex-column py-3'>
                    <Card>
                        <section className='flex justify-content-between align-items-center'>
                            <div className='flex gap-2 align-items-center'>
                                <h2 className='text-xl font-semibold'>{item.subscriptionsTitle}</h2>
                                <Company/>
                                </div>
                            <div>
                                <Menu model={items} 
                                    popup 
                                    ref={menu} 
                                    id="menu__subscription" />
                                <Button icon="pi pi-ellipsis-v" 
                                    onClick={(event) => menu.current.toggle(event)} 
                                    aria-controls="menu__subscription" 
                                    aria-haspopup
                                    className='p-button-rounded p-button-text'/>
                            </div>
                        </section>
                        <section className='flex flex-column lg:flex-row align-items-top pt-3'>
                            <Coverage/>
                            <div className='bumblebee__container-section ml-0 pl-0 lg:ml-3 lg:pl-3'>
                                <Address/>
                            </div>
                            <div className='bumblebee__container-section ml-0 pl-0 lg:ml-3 lg:pl-3'>
                                <Assists/>
                            </div>
                        </section>
                    </Card>
                </section>
            )
        })}
       
        </>
    )
}

export default MySubscriptions