import React from 'react'

import Navbar from '../components/Navbar'

interface Props {
  children: React.ReactNode
}

const Default = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Navbar />
      <div className="px-6 py-12">
        { children }
      </div>
    </>
  )
}

export default Default
