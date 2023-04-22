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
            <img id="belaya_noch" src='../media/pano/floor1/belaya_noch.jpg' />
            <img id="beliy_zal" src='../media/pano/floor1/beliy_zal.jpg' />
            <img id="sport_zal" src='../media/pano/floor1/sport_zal.jpg' />            
            <img id="tanz_zal" src='../media/pano/floor1/tanz_zal.jpg' />
            
            <img id="sphera" src='../media/pano/floor2/sphera.jpg' />
            <img id="cabinet207" src='../media/pano/floor2/cabinet207.jpg' />
            <img id="media_zal" src='../media/pano/floor2/media_zal.jpg' />
            <img id="vr" src='../media/pano/floor2/vr.jpg' />
            <img id="volonter" src='../media/pano/floor2/volonter.jpg' />
            
            <img id="middle_ages" src='../media/pano/floor3/middle_ages.jpg' />
            <img id="office-308" src='../media/pano/floor3/office-308.jpg' />
            <img id="foye" src='../media/pano/floor3/foye.jpg' />
            <img id="game_zone" src='../media/pano/floor3/game_zone.jpg' />
            <img id="severaya_dvina" src='../media/pano/floor3/severaya_dvina.jpg' />
        </a-assets>
        <a-sky src={"#"+props.auditorium}></a-sky>
    </a-scene>
    </div>
    );
}

export default Panorama;