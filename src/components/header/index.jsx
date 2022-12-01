/* eslint-disable no-mixed-operators */

import React, { useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import LABEL from '../../utils/constants/label';
import Logo from '../logo';
const Header = ({
    title,
    user,
    handleClickMenuHeader
}) => {

    const menu = useRef(null);
    const items = [
        {
            label: 'Opções',
            items: [
                {
                    label: LABEL.MY_SUBSCRIPTIONS,
                    icon: 'pi pi-file',
                    command:(e) => {
                        handleClickMenuHeader(0, LABEL.MY_SUBSCRIPTIONS)
                    }
                },

                {
                    label: LABEL.MY_DATA,
                    icon: 'pi pi-user',
                    command:(e) => {
                        handleClickMenuHeader(1, LABEL.MY_DATA)
                    }
                },

                {
                    label: LABEL.ACTIVATE_SINISTER,
                    icon: 'pi pi-check-square',
                    command:(e) => {
                        handleClickMenuHeader(2, LABEL.ACTIVATE_SINISTER)
                    }
                },

                {
                    label: LABEL.SAC,
                    icon: 'pi pi pi-phone',
                    command:(e) => {
                        handleClickMenuHeader(3, LABEL.SAC)
                    }
                }
            ]
        },
        {
            label: 'Navegação',
            items: [
                {
                    label: 'Sair',
                    icon: 'pi pi-sign-out',
                    url: 'https://reactjs.org/'
                }
            ]
        }
    ];

    
    
    return(
        <header className="flex flex-column-reverse lg:flex-row justify-content-between align-items-center">
            <section className='flex w-full justify-content-center lg:justify-content-start'>
                <h1 className='title text-2xl lg:text-4xl font-bold'>{title}</h1>
            </section>
            <section className='flex justify-content-center w-full lg:hidden'>
                <Logo/>
            </section>
            <section className='flex w-full'>
                <div className='flex flex-row-reverse lg:flex-row justify-content-between lg:justify-content-end align-items-center w-full'>
                    <div className='flex align-items-center'>
                        <div className='flex flex-column align-items-end justify-content-center pr-2'>
                            <p className='text-xs p-0'>{user && user.name || ''}</p>
                            <p className='text-xs p-0'>{user && user.email || ''}</p>
                        </div>
                        <Avatar label="G" 
                            className="mr-2" 
                            size="large"
                            style={{ backgroundColor: '#2196F3', color: '#ffffff' }} 
                            shape="circle" />
                    </div>
                    <div>
                        <Menu model={items} 
                            popup 
                            ref={menu} 
                            id="menu__user" />
                        <Button icon="pi pi-ellipsis-v" 
                            onClick={(event) => menu.current.toggle(event)} 
                            aria-controls="menu__user" 
                            aria-haspopup
                            className='p-button-rounded p-button-text' />
                    </div>
                    </div>

            </section>
            
        </header>
    )
}

Header.defaultProps = {
    title: '',
    user: {
        name: 'Garbe Solutions',
        email: 'garbesolutions@gmail.com.br'
    }
}

export default Header