
import './App.css';
import "./Components/Header.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home";
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import { Footer } from './Components/Footer';
import { User } from './Components/User';




function App() {                  //here with apps1 defined and name is a prop used here hence , we pass it to app1 function as {props.name} , a javascript notation passes here
  return (
    
      <BrowserRouter>
       <Header/>
       
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "/about" element ={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path ="/User/tempId" element ={<User />} />
        
       </Routes>
       <Footer/>
            
    </BrowserRouter>   //function component and class based component
                                 //Its better to use a function based component as compared to class based as it includes newly added features such as hooks etc which makes this good.                                 // This is jsx a  mixture of javascript and html , not literally
  );
}

export default App;
