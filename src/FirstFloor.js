import './Floor.css';
import { Link } from "react-router-dom"; 
function FirstFloor() {
    return (
      <div>
        <div className='MenuPlan'>
        <Link className='MenuPlanLink' to="..">Выбор этажа</Link>
        </div>
		<svg className="floorSVG" viewBox="0 0 402.8 283.9" >
   
   <image  width="2157" height="1520" href="./media/1floor.jpg"  transform="matrix(0.1868 0 0 0.1868 0 0)">
   </image>
    <Link to="./white-hall">
      <polygon id="beliy_x5F_zal" className="st0" points="108.8,129.3 130.1,129.3 130.1,125.4 134.9,125.4 134.9,130 154.3,130 154.3,126.1 
	    159,126.1 159,130 180.3,130 180.3,93.9 108.8,93.9 "/>
    </Link>
    <Link to="./dance-hall">
      <path id="tanz_x5F_zal" className="st0" d="M231.6,129.3h19.8v-3.7c1.4,0,2.9,0,4.3,0c0,1.4,0,2.7-0.1,4.1c6.3,0,12.6-0.1,18.8-0.1
	    c0-1.1,0-2.3,0-3.4h4c0,1.2,0,2.4,0.1,3.6c6.9,0.1,13.8,0.2,20.7,0.2V93.9h-67.7V129.3z"/>
    </Link>
    <Link to="./sport-hall">
      <path id="sport_x5F_zal" className="st0" d="M231,141.9c6.7,0,13.4,0.1,20,0.1v3.9h4.9v-3.9h18.9v3.9h5v-3.9h18.6v3.9h5v-3.9h21.4v36.6
	    h-93.7C231,166.3,231,154.1,231,141.9z"/>
    </Link>
    <Link to="./white-night">
      <polygon id="belaya_x5F_noch" className="st0" points="84.9,142.7 105.4,142.7 105.8,146 110.9,146 110.9,142.7 129.8,142.7 129.8,146 
	    135,146 135,142.7 153.8,142.7 153.8,146 159,146 159,142.7 179.6,142.7 179.6,178.4 84.9,178.4 "/>
    </Link>
   </svg>
	</div>


    );
  }
  
  export default FirstFloor;