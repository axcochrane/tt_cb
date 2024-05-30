function Navbar() {
  return(
    <nav id="navbar" className='fixed top-0 left-0 w-screen h-16 flex justify-between items-center bg-red-100 px-2 text-red-500'>
      <h2 className="font-bold">Carebit</h2>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A12.12 12.12 0 0112 15c2.5 0 4.846.655 6.879 1.804M12 12a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    </nav>
  )
}

export default Navbar 