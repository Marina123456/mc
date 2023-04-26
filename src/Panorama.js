import 'aframe';
import { Link } from "react-router-dom"; 
import './Panorama.css';
import  { useState,useEffect } from 'react';
import dataItemsJson from './data.json';

function Panorama(props) {
    useEffect(() => {
        findItem(props.auditorium);
      }, []);
    const [isVisible, setIsVisible] = useState(true); 
    const [item, setItem] = useState({    
        id:0,
        img:"",
        name:"",
        description:""
    
    }); 
    const findItem = (auditorium)=>{
        let result = dataItemsJson.items.filter(item => item.auditorium == auditorium)[0];
        setItem(Object.assign({}, result));
      }
    return (
        <div>
            <div className="BlockInfo" style={{display: isVisible ? 'block' : 'none' }}>
                <div className='Menu'>
                    <Link className='MenuLink' to={"/"}>Выбор этажа</Link>
                    <span>/</span>
                    <Link className='MenuLink' to={"/"+props.floor}>
                        {(props.floor=='1floor')?'1 этаж':((props.floor=='2floor')?'2 этаж':'3 этаж')}
                    </Link>
                    <img className="CalcelIcon" onClick={(event)=>setIsVisible(false)} src="../media/cancel-icon.svg"/>
                </div>
                <div className="BlockInfoName">
                    <div className=""></div>
                    <div className="BlockInfoNameSpan">{item.name}</div>
                </div>
                <div className="BlockInfoDescription">{item.description}</div>
                <div className="BlockInfoAva" style={{backgroundImage:  'url( '+item.img+')'}}></div>
                <div className="BlockInfoFIO">{item.FIO} <br/> <span className="BlockInfoFIORole">ответвенное лицо</span></div>
            </div>
            <div className="BlockInfoIcon" 
                 onClick={(event)=>setIsVisible(true)}
                 style={{display: !isVisible ? 'block' : 'none' }}>
                    i
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