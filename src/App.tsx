import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './style/theme';
import './style/HomePageTheme.css'
import { HomePage } from './pages/Home';
import About from './pages/About'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from './pages/Contact';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
