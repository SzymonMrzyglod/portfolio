import style from './SidePanel.module.css';


const LeftSideMenu = () => {
    return ( 
        <div className={`${style.leftPanel}`}>
             <div className={`${style.links}`}>
                <a href="https://github.com/SzymonMrzyglod" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/szymon-mrzygłód" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/szymon.mr" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>  
            </div>
        </div>
     );
}
 
export default LeftSideMenu;