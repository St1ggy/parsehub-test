import { Page } from 'components'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'router'

export const HomePage: FC = () => (
  <Page title="Home page">
    <Link to={Route.BROWSER}>To Browser</Link>
  </Page>
)
