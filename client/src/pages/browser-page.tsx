import { Breadcrumbs, FileLink, FileList, FileView, Page } from 'components'
import { FC, MouseEventHandler, useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Route } from 'router'
import { TFileType } from 'types'

const cleanPathname = (pathname: string) => pathname.replace(`/${Route.BROWSER}`, '')

type TStructure = Record<string, TFileType>

type TData =
  | {
      structure: string
      type: 'file'
    }
  | {
      structure: TStructure
      type: 'dir'
    }

export const BrowserPage: FC = () => {
  const [data, setData] = useState<TData>({ structure: {}, type: 'dir' })
  const [linkDisabled, setLinkDisabled] = useState(false)

  const location = useLocation()

  const currentPath = useMemo(() => cleanPathname(location.pathname), [location.pathname])

  useEffect(() => {
    fetch(`/path?path=${currentPath}`)
      .then((res) => res.json())
      .then(({ data: response }) => {
        setData(response)
        setLinkDisabled(false)
      })
  }, [currentPath])

  const onClickLink = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      if (!linkDisabled) setLinkDisabled(true)
      else {
        e.preventDefault()
        e.stopPropagation()
      }
    },
    [linkDisabled],
  )

  return (
    <Page title="Browser page" key={currentPath}>
      <Breadcrumbs breadcrumbs={currentPath.split('/')} />

      {data.type === 'file' ? (
        <FileView name={data.structure} />
      ) : (
        <FileList>
          {(Object.entries(data.structure) as [string, TFileType][]).map(([name, type]) => (
            <FileLink key={name} name={name} type={type} onClick={onClickLink} relative="path" to={name} />
          ))}
        </FileList>
      )}
    </Page>
  )
}
