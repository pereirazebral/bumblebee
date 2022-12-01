import LogoDesktop from '../../assets/imagens/logo-desktop.png'
import { ReactComponent as LogoMobile } from '../../assets/imagens/logo-mobile.svg'

const Logo = () => {
    return(
        <section>
            <div className='hidden lg:block'>
                <img className="bumblebee__logo bumblebee__logo__small" src={LogoDesktop} alt="bumblebee-logo " title="Logo"/>
            </div>
            <div className='block lg:hidden'>
                <LogoMobile/>
            </div>
        </section>
    )
}

export default Logo