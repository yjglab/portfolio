import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import NavBar from '../../components/NavBar';
import Activities from '../../pages/Activities';
import Footer from '../../components/Footer';
import Project from '../../components/Project';
import Activity from '../../components/Activity';
import Projects from '../../pages/Projects';
import Brand from '../../pages/Brand';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:name' element={<Project />} />
      <Route path='/activities' element={<Activities />} />
      <Route path='/activities/:name' element={<Activity />} />
      <Route path='/brand' element={<Brand />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
