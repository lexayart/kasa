import React from 'react'
import { createRoot } from 'react-dom/client'
import Routeur from './components/Router'
import './assets/style.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Routeur />
  </React.StrictMode>,
)
