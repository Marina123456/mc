import './Floor.css';
import { Link } from "react-router-dom"; 
function SecondFloor() {
    return (
      <svg version="1.1" id="Слой_1" 
	 viewBox="0 0 202.2 142.7" >

<image  width="2157" height="1520" href="./media/2floor.jpg"  transform="matrix(9.378767e-02 0 0 9.378767e-02 0 0)">
</image>
<Link to="./sphera">
  <polygon id="sphera" className="st0" points="112.4,69.2 123,69.2 123,67.2 125.4,67.2 125.4,69.2 135.1,69.2 135.1,67.4 137.4,67.3 
	137.4,69.2 147.9,69.2 148.2,51 112.4,51 "/>
  </Link>
<Link to="./vr-zone">
  <path id="VR" className="st0" d="M162.1,75.4c-3.8,0-7.6,0-11.4,0c0,0.7,0,1.3,0,2c-0.9,0-1.8,0-2.7,0c0-0.7,0-1.4,0-2.1
	c-3.6,0-7.3,0.1-10.9,0.1v18.8h25V75.4z"/>
</Link>
<Link to="./media-center">
  <path id="media" className="st0" d="M123.8,75.6c4.2,0,8.4,0.1,12.6,0.1c-0.1,6.2-0.1,12.4-0.2,18.6h-12.5
	C123.7,88,123.7,81.8,123.8,75.6z"/>
</Link>
<Link to="./office-207">
  <path id="cabinet207" className="st0" d="M88,75.6H98v1.8h2.7v-2h10.5l0,18.6c-7.7,0-15.5,0.1-23.2,0.1C88,87.9,88,81.7,88,75.6z"/>
</Link>
<Link to="./it-club">
  <path id="it-club" className="st0" d="M50,75.8c3.5,0,7.1-0.1,10.6-0.1c0,0.6,0,1.3,0,1.9l2.5,0v-1.9l9.9,0v1.9c0.8,0,1.7,0,2.5,0
	c0-0.6,0-1.2,0-1.8c3.6,0,7.2,0,10.8,0c0,6,0.1,12,0.1,18H50C50,87.7,50,81.7,50,75.8z"/>
</Link>
<Link to="./volunteer-center">
<polygon id="volonter" className="st0" points="13.4,75.7 23.6,75.7 23.6,77.6 26.4,77.6 26.4,75.7 37.2,75.7 37.2,94.3 13.4,94.3 "/>
</Link>
</svg>
    );
  }
  
  export default SecondFloor;