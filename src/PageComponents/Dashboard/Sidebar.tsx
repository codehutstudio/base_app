import React from 'react'
import { useRecoilValue } from 'recoil'
import { appRoutesAtom, appStateAtom } from '../../AppState'
import NavList from '../../Components/Lists/NavList'

export default function Sidebar() {
  const appState = useRecoilValue(appStateAtom)
  return (
    <>
      <NavList links={appState.links.sidebar}/>
    </>
  )
}
