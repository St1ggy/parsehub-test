import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

import { Title } from './title'

type PageProps = PropsWithChildren<{
  title: string
}>

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  overflow: hidden;
`

export const Page: FC<PageProps> = ({ children, title }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
)
