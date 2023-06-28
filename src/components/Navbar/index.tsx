import React from 'react'

const Navbar = (): React.ReactElement => {
  return (
    <nav className="bg-white px-6 py-4 flex">
      <h1 className="text-branding font-bold text-lg">Shiori &amp; Friends</h1>
      <div className="ml-auto">
        <a target="_blank" href="https://shiorilabs.id" rel="noopener noreferrer" className="no-underline hover:underline text-base">Kembali ke shiorilabs.id</a>
      </div>
    </nav>
  )
}

export default Navbar
