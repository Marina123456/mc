import './App.css';
import FirstPlan from './FirstPlan.js';
import FirstFloor from './FirstFloor.js';
import SecondFloor from './SecondFloor.js';
import ThirdFloor from './ThirdFloor.js';
import Panorama from './Panorama.js';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <Router basename={'/mc1'}>
    <Routes >
        <Route path='/' element={<FirstPlan/>} /> 
        <Route path='/1floor' element={<FirstFloor/>} />
        <Route path='/2floor' element={<SecondFloor/>} />
        <Route path='/3floor' element={<ThirdFloor/>} />

        <Route path='/1floor/white-hall' element={<Panorama auditorium="beliy_zal" floor="1floor"/>} />
        <Route path='/1floor/dance-hall' element={<Panorama auditorium="tanz_zal" floor="1floor"/>} />
        <Route path='/1floor/sport-hall' element={<Panorama auditorium="sport_zal" floor="1floor"/>} />
        <Route path='/1floor/white-night' element={<Panorama auditorium="belaya_noch" floor="1floor"/>} />

        <Route path='/2floor/sphera' element={<Panorama auditorium="sphera" floor="2floor"/>} />
        <Route path='/2floor/vr-zone' element={<Panorama auditorium="vr" floor="2floor"/>} />
        <Route path='/2floor/media-center' element={<Panorama auditorium="media_zal" floor="2floor"/>} />
        <Route path='/2floor/office-207' element={<Panorama auditorium="cabinet207" floor="2floor"/>} /> 
        <Route path='/2floor/it-club' element={<Panorama auditorium="no_it" floor="2floor"/>} />  
        <Route path='/2floor/volunteer-center' element={<Panorama auditorium="volonter" floor="2floor"/>} />

        <Route path='/3floor/middle-ages' element={<Panorama auditorium="middle_ages" floor="3floor"/>} />
        <Route path='/3floor/office-308' element={<Panorama auditorium="office-308" floor="3floor"/>} />
        <Route path='/3floor/northern-dvina' element={<Panorama auditorium="severaya_dvina" floor="3floor"/>} />
        <Route path='/3floor/balkon' element={<Panorama auditorium="foye" floor="3floor"/>} /> 
        <Route path='/3floor/game-zone' element={<Panorama auditorium="game_zone" floor="3floor"/>} />   
    </Routes >
 </Router>
  );
}

export default App;