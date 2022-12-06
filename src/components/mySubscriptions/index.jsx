import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import LABEL from '../../utils/constants/label';
import Coverage from '../coverage';

const __MOCK__ = [
    {
        subscriptionsTitle: "Plano de Garbe Solutions 01"
    },
    {
        subscriptionsTitle: "Plano de Garbe Solutions 02"
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
                            <h2 className='text-xl font-semibold'>{item.subscriptionsTitle}</h2>
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
                        <section>
                            <Coverage/>
                        </section>
                    </Card>
                </section>
            )
        })}
       
        </>
    )
}

export default MySubscriptions