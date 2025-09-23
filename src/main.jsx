import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Interior from './Interior.jsx'
import Exterior from './Exterior.jsx'
import Florals from './Florals-Events.jsx'
import Walls from './Living-Walls.jsx'
import Holiday from './Holiday.jsx'
import { FacebookProvider } from 'react-facebook'
import AboutUs from './AboutUs.jsx'
import Timeline from './Timeline.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FacebookProvider appId="1517286653052212">
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/florals-events" element={<Florals />} />
        <Route path="/living-walls" element={<Walls />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
    </FacebookProvider>
  </StrictMode>,
)
