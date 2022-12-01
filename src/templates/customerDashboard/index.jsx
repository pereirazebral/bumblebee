/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button'
import Logo from '../../components/logo'
import MENU from '../../utils/constants/menu'
import Header from '../../components/header'
import MyData from '../../components/myData';
import './index.css'
const CustomerDashboard = ({
    user,
    notification
}) => {
    
    const [ menuActive, setMenuActive] = useState(0)
    const [ titleHeader, setTitleHeader] = useState('')
    
    useEffect( () => {
        setTitleHeader(MENU[0].label)
    },[])

    const handleClickMenu = (item) => {
        const { index, label} = item
        setMenuActive(index) 
        setTitleHeader(label)
    }

    const handleClickMenuHeader = (index, label) => {
        setMenuActive(index) 
        setTitleHeader(label)
    }
    
    const getMenu = () => {
        const menus = MENU.map((item, index) => {
            item.index = index
            return(
                <li key={index} className="pb-3">
                    <Button icon={item.icon}
                        className={`p-button-raised p-button-text p-button-lg text-lg ${menuActive === index && 'p-button__active'}`} 
                        label={item.label}
                        onClick={ () => handleClickMenu(item)}/>
                </li>
            )
        }) 
        
        return(
            <ul className='menu-list-buttons pt-5'>
                {menus}
            </ul>
        )
    }

    const getContent = () => {
        
        switch (menuActive) {
            case 0:
                return <h1>{titleHeader}</h1>
            case 1:
                return <MyData notification={notification}/>
            default:
                return <h1>ERROR</h1>
        }
    }
    
    
    return(
        <section className='grid lg:h-screen'>
            <section className='col-3 hidden lg:block  bg__gray-1 py-4 px-4'>
                <section className='flex flex-column align-items-end'>
                    <div>
                        <Logo/> 
                    </div>
                    <div>
                        {getMenu()}
                    </div>
                </section>
            </section>
           
            <section className='col-12 lg:col-9 py-5 lg:py-6 px-3 lg:px-5 max__1100 m-full md:mx-auto flex flex-column'>
                <Header title={titleHeader} handleClickMenuHeader={handleClickMenuHeader}/>
                <section className='py-6'> 
                    {getContent()}
                </section>
            </section>
        </section>
       
    )
}
CustomerDashboard.propTypes = {
    user: PropTypes.object,
}

CustomerDashboard.defauProps ={
    user: null
}

export default CustomerDashboard