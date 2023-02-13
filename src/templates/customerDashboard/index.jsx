/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Button } from 'primereact/button'
import Logo from '../../assets/imagens/logo-min.png'
import MENU from '../../utils/constants/menu'
import { SigninContext } from '../../contexts/ SigninContext'
import Header from '../../components/header'
import MyData from '../../components/myData';
import MySubscriptions from '../../components/mySubscriptions'
import MenuMobile from '../../components/menuMobile'
import Sac from '../../components/sac'
import useToken from '../../hooks/useAuth.hook';

import './index.css'
const CustomerDashboard = ({
    user,
    notification
}) => {
    const navigate = useNavigate()
    const {removeToken } = useToken()
    const [ menuActive, setMenuActive] = useState(0)
    const [ titleHeader, setTitleHeader] = useState('')
    
    useEffect( () => {
        setTitleHeader(MENU[0].label)
    },[])

    const handleClickMenu = (item) => {
        const { index, label} = item
        if(index === 4){
            logout()
        }else{
            setMenuActive(index) 
            setTitleHeader(label)
        }
    }

    const logout = () => {
        removeToken()
    }

    const handleClickMenuHeader = (index, label) => {
            setMenuActive(index) 
            setTitleHeader(label)
        
    }
    
    const getMenu = () => {
        const menus = MENU.map((item, index) => {
            item.index = index
            return(
                <li key={index} className="pb-2">
                    <Button icon={item.icon}
                        className={`flex flex-column align-items-center justify-content-center p-button-raised p-button-text p-button-lg text-lg ${menuActive === index && 'bumblebee__p-button__active'}`} 
                        label={item.label}
                        onClick={ () => handleClickMenu(item)}/>
                </li>
            )
        }) 
        
        return(
            <ul className='bumblebee__menu-list-buttons pt-5'>
                {menus}
            </ul>
        )
    }

    const getContent = () => {
        
        switch (menuActive) {
            case 0:
                return <MySubscriptions notification={notification}/>
            case 1:
                return <MyData notification={notification}/>
            case 3:
                return <Sac notification={notification}/>
            default:
                return <h1>ERROR</h1>
        }
    }
    
    
    return(
        <section className='grid lg:h-screen mr-0 mt-0 ml-0'>
            <section className='col-1 hidden lg:block bg__black-33 py-6 px-1'>
                <section className='flex flex-column align-items-center'>
                    <div className=''>
                        <img className='bumblebee__logo_min' src={Logo} alt="logo-min"/>
                    </div>
                    <div>
                        {getMenu()}
                    </div>
                </section>
            </section>
           <section className='col-12 lg:col-11 p-0 lg:p-2'>
            <section className='py-5 lg:py-6 px-3 lg:px-5 max__1100 m-full lg:mx-auto flex flex-column '>
                <Header title={titleHeader} handleClickMenuHeader={handleClickMenuHeader}/>
                <section className='py-6'> 
                    {getContent()}
                </section>
                <MenuMobile menu={getMenu()}/>
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