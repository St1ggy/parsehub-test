import { BrowserPage, HomePage } from 'pages'
import { Route as CRoute, Routes } from 'react-router-dom'

export enum Route {
  HOME = '/',
  BROWSER = 'browser',
}

export const Router = () => (
  <Routes>
    <CRoute path={Route.HOME} element={<HomePage />} />
    <CRoute path={`${Route.BROWSER}/*`} element={<BrowserPage />}></CRoute>
  </Routes>
)
