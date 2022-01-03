import style from './Header.module.css'

const Header = () => {
    return ( 
        <div className={`${style.header}`}>
            <div className={`${style.headerLogo}`}>
                LOGO
            </div>
            <div className={`${style.headerMenu}`}>
                MENU
            </div>
        </div>
     );
}
 
export default Header;