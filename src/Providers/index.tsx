import React from 'react'

interface ProviderProps {
    children: JSX.Element[] | JSX.Element
}

export default function Providers({children}: ProviderProps) {
  return (
    <>
        {children}
    </>
  )
}
