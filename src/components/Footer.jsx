import { AiFillHeart } from 'react-icons/ai'
const Footer = () => {
  const currentDate = new Date().getFullYear()

  return (
    <footer className='bg-black py-8 flex text-center text-white'>
      <div className='container flex justify-center mx-auto flex-wrap'>
        <div className='flex items-center'>
          Made With By Marwan Abubakr &copy;{' '}
          <AiFillHeart className='text-violet-700 mx-1  ' />
        </div>
        <div>{currentDate} All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
