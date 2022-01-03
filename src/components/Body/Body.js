import Main from './Main/Main';
import style from './Body.module.css';
import LeftSidePanel from './SidePanels/LeftSidePanel';
import RighSidePanel from './SidePanels/RightSidePanel';


const Body = () => {
    return ( 
        <div className={`${style.body}`}>
            <LeftSidePanel/>
            <Main/>
            <RighSidePanel/>
        </div>
     );
}
 
export default Body;