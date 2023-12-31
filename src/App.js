
import './App.scss';
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import Contact from './components/contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}></Route>
        <Route path='about'  element={<About/>}></Route>
        <Route path='contact'  element={<Contact/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
