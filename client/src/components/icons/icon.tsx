import { DirIcon } from 'components/icons/dir-icon'
import { FileIcon } from 'components/icons/file-icon'
import { FC } from 'react'
import { TFileType } from 'types'

type IconProps = {
  type: TFileType
}

export const Icon: FC<IconProps> = ({ type }) => {
  switch (type) {
    case 'dir':
      return <DirIcon />
    case 'file':
      return <FileIcon />
    default:
      return null
  }
}
