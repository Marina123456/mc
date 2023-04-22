import 'aframe';
import { Link } from "react-router-dom"; 
import './Panorama.css';

function Panorama(props) {
    return (
        <div>
            <div className='Menu'>
                <Link className='MenuLink' to={"/"}>Выбор этажа</Link>
                 <span>/</span>
                <Link className='MenuLink' to={"/"+props.floor}>
                    {(props.floor=='1floor')?'1 этаж':((props.floor=='2floor')?'2 этаж':'3 этаж')}
                </Link>
            </div>
        <a-scene ar-mode-ui="enabled: false" vr-mode-ui="enabled: false">
        <a-entity id="camera1" camera cursor="rayOrigin: mouse; fuse: false;" look-controls="magicWindowTrackingEnabled: false"></a-entity>
        <a-assets>
            <img id={props.auditorium} src={'../media/pano/'+props.floor+'/'+props.auditorium+'.jpg'} />
            
        </a-assets>
        <a-sky src={"#"+props.auditorium}></a-sky>
    </a-scene>
    </div>
    );
}

export default Panorama;