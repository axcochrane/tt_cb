import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav id='sidebar' className='flex flex-col p-4 bg-red-100 text-white h-full w-full space-y-2'>
      <Link to="/" className='py-2 px-4 rounded hover:bg-red-200 transition-colors text-red-400  hover:text-red-500'>Home</Link>
      <Link to="/patients" className='py-2 px-4 rounded hover:bg-red-200 transition-colors text-red-400 hover:text-red-500'>Patients</Link>
    </nav>
  )
}

export default Sidebar