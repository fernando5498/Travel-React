import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Resumen from './routes/Resumen'
import SingUp from './routes/SingUp'
import Page404 from "./componets/404/Page404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/resumen/:title' element={<Resumen />}></Route>
        <Route path='/singup' element={<SingUp />}></Route>
        <Route path='/*' element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
