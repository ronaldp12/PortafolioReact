import { SpeedInsights } from "@vercel/speed-insights/react"
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/components/Pages/TechnicalSkills/TechnicalSkills.css'
import '../src/components/Pages/SocialSkills/SocialSkills.css'
import '../src/components/Pages/Experience/Experience.css'
import '../src/components/Pages/Studies/Studies.css'
import {App} from './App.jsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
