import './index.css'

const MenuMobile = ({
    menu
}) => {
    return(
        <section className="w-full fixed left-0 bottom-0 block lg:hidden bumblebee__container-menu-mobile px-4 py-2">
            {menu}
        </section>
    )
}

export default MenuMobile