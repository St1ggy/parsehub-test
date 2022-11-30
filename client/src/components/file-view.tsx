import { FC } from 'react'
import styled from 'styled-components'

type FileViewProps = {
  name: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FileView: FC<FileViewProps> = ({ name }) => <Wrapper>THIS IS FILE: {name}</Wrapper>
