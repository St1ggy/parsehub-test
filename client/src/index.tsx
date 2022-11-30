import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'router'

import 'styles/normalize.css'
import 'styles/fonts.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
)
