import './Floor.css';
import './Panorama.css';
import { Link } from "react-router-dom"; 

function ThirdFloor() {
    
    return (
      <div>
        <div className='Menu'>
                <Link className='MenuLink' to="/">Выбор этажа</Link>
        </div>
      <svg className="floorSVG" version="1.1" viewBox="0 0 1942.8 1369">

      <image  width="2157" height="1520" href="./media/3floor.jpg"  transform="matrix(0.9007 0 0 0.9007 0 0)">
      </image>
      <Link to="./middle-ages">
        <polygon id="srednevekovie" className="st0" points="550.8,601.4 652.4,601.4 652.4,584.5 673.3,584.5 673.3,601.4 764.7,601.4 
	  764.7,584.5 786.2,584.5 786.2,603.4 885.2,603.4 885.2,430.3 553.8,430.3 "/>
     </Link>
     <Link to="./office-308">
        <polygon id="cabinet308" className="st0" points="1133.4,603.4 1233.5,603.4 1233.5,583.5 1257,583.5 1257,603.4 1347.9,603.4 
	    1347.9,585.5 1369.8,585.5 1369.8,603.4 1466.9,603.4 1468.4,430.3 1133.4,430.3 "/>
    </Link>
    <Link to="./northern-dvina">
        <polygon id="severnaya_x5F_dvine" className="st0" points="1130.3,667.2 1227.4,667.2 1227.4,684.5 1249.3,684.5 1249.3,667.2 
	1341.2,667.2 1341.2,684.5 1363.7,684.5 1363.7,667.2 1464.3,667.2 1464.3,837.8 1130.3,837.8 "/>
    </Link>
    <Link to="./balkon">
    <polygon id="balkon" className="st0" points="913.8,673.4 999.6,673.4 999.6,691.2 1021.1,691.2 1021.1,673.4 1108.9,673.4 
	1108.9,830.6 913.8,830.6 "/>
    </Link>
    <Link to="./game-zone">
    <polygon id="game_x5F_zone" className="st0" points="1591.6,663.9 1687.6,663.9 1687.6,683.3 1712.4,683.3 1712.4,663.9 1812.2,663.9 
	1812.2,842.3 1591.6,842.3 "/>
    </Link>
</svg>
</div>
    );
  }
  
  export default ThirdFloor;