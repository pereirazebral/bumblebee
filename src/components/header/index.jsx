/* eslint-disable no-mixed-operators */

import React from 'react';
import { Avatar } from 'primereact/avatar';
import Logo from '../logo';
const Header = ({
    title,
    user
}) => {

    return(
        <header className="flex flex-column-reverse lg:flex-row justify-content-between align-items-center">
            <section className='flex w-full justify-content-center lg:justify-content-start'>
                <h1 className='title text-2xl lg:text-4xl font-bold'>{title}</h1>
            </section>
            <section className='flex justify-content-center w-full lg:hidden'>
                <Logo/>
            </section>
            <section className='flex w-full'>
                <div className='flex flex-row justify-content-start lg:justify-content-end align-items-center w-full'>
                    <div className='flex flex-row-reverse md:flex-row align-items-center'>
                        <div className='flex flex-column align-items-start md:align-items-end justify-content-center pr-2'>
                            <p className='p-0'>{user && user.name || ''}</p>
                            <p className='p-0 text-color-secondary text-xs'>{user && user.email || ''}</p>
                        </div>
                        <Avatar label="G" 
                            className="mr-2" 
                            size="large"
                            style={{ backgroundColor: '#f58022', color: '#333' }} 
                            shape="circle" />
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