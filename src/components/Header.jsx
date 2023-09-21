import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo/logo.svg'
const Header = () => {
  return (
    <header className='py-6 mb-12 border-b uppercase '>
      <div className='container mx-auto flex justify-between items-center'>
        {/* {Logo } */}
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* {buttons} */}
        <div className='flex items-center gap-6 '>
          <Link className=' hover:text-violet-900 transition' to=''>
            log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white py-3 px-4 rounded-lg transition '
            to=''
          >
            sing up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
