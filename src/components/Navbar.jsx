import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav className="bg-gray-800">
    <div className="flex justify-between items-center px-4 py-6" >
     

      <h1 className="text-white font-bold" >El Salvador</h1>
      <ul className="flex">
        <li >
            <Link to="/" className="text-white hover:text-gray-400 px-4 py-2">Inicio</Link>
        </li>
        <li>
            <Link to="/about" className="text-white hover:text-gray-400 px-4 py-2">Acerca</Link>
        </li>

        <li>
            <Link to="/patients" className="text-white hover:text-gray-400 px-4 py-2">pacientes</Link>
        </li>

        <li>
            <Link to="/create" className="text-white hover:text-gray-400 px-4 py-2">nuevo</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}





