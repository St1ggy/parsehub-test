import { ChevronRightIcon } from 'components/icons'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type BreadcrumbsProps = {
  breadcrumbs: string[]
}

type BreadcrumbsLinksProps = {
  breadcrumbs: string[]
  prevPath?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.5em;
`

const Breadcrumb = styled(Link)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`

const BreadcrumbsLinks: FC<BreadcrumbsLinksProps> = ({ breadcrumbs, prevPath }) => {
  const rest = [...breadcrumbs]
  const current = rest.shift()
  if (current === undefined) return null

  const path = `${prevPath ? `${prevPath}/${current}` : current}`

  return (
    <>
      <Breadcrumb key={path} to={path}>
        {current || 'root'}
      </Breadcrumb>
      {rest.length ? (
        <>
          <ChevronRightIcon />
          <BreadcrumbsLinks breadcrumbs={rest} prevPath={path} />
        </>
      ) : null}
    </>
  )
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => (
  <Wrapper>
    <BreadcrumbsLinks breadcrumbs={breadcrumbs} />
  </Wrapper>
)
