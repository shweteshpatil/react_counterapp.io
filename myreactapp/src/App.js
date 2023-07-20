import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './Navbar';
// import UncontrolledExample from './Component/Carousel';
// import DasicExample from './Component/card';
// import Home from './Component/Home';
// import Login from './Component/Login';

// import Contactus from "./Component/contactus";

// import Navbar from "./componenet1/Navbar";
// import Services from "./componenet1/Services";
// import About from "./componenet1/About";
// import Contactus from "./componenet1/Contactus";
// import Home from "./componenet1/Home";

// import Gym from "./comp3/Gym";
// import Biceps from "./comp3/Biceps";
// import Shoulder from "./comp3/Shoulder";
// import Abs from "./comp3/Abs";
// import Tricep from "./comp3/Tricep";


import Movies from "./moviecomponent/Movies";
import Services from "./moviecomponent/Services";
import Home from "./Home";
import BasicExample from './moviecomponent/Navbar';
import Countdown from './moviecomponent/Countdown';
import Form from './moviecomponent/Form';




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parents from './moviecomponent/Parents';

function App() {
  return (
    <>
      <Router>
      <BasicExample/>
      
      <Routes>
     <Route path="/home" element={<Home/>}/>
     <Route path="/form" element={<Form/>}/>
<Route path="/movies" element={<Movies/>}/>
     <Route path="/services" element={<Services/>}/>
     <Route path="/parent" element={<Parents/>}/>
     <Route path="/countdown" element={<Countdown/>}/>
     

      
      
      </Routes>
      </Router>
      </>
      );
    }
    
    // <BasicExample/>




    // <Gym />
    // <Route path="/shoulder" element={<Shoulder/>}/>
    // <Route path="/abs" element={<Abs/>}/>
    // <Route path="/tricep" element={<Tricep/>}/>
    



    // <Navbar />

// <Route path="" />
// <Route path="/services" element = {<Services/>}/>
// <Route path="/about" element = {<About/>}/>
// <Route path="/contactus" element = {<Contactus/>}/>
// <Route path="/home" element = {<Home/>}/>

// <UncontrolledExample/>
// <DasicExample/>
//     // if(user==="felix" && password===123){
//     //  return <Home/>
//     // }else{
//     //  return <Login/>
//     // }
//     // <div className="App">
//     //   <header className="App-header">
//     //     {/* <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a> */}
//     //   </header>
//     // </div>

// }

export default App;
