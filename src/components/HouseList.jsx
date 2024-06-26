import { useContext } from 'react'
// import context
import { HouseContext } from './HouseContext'
// import House
import House from './House'
// import Link
import { Link } from 'react-router-dom'
// import Icons
import { ImSpinner9 } from 'react-icons/im'
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)
  // if loading is true
  if (loading) {
    return (
      <ImSpinner9 className='mx-auto animate-spin text-violet-700 text-4xl my-[200px] ' />
    )
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 my-10  '>
        sorry no product to show
      </div>
    )
  }
  return (
    <section className='mb-20'>
      <div className='container mx-auto max-w-[1170px]'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14  '>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HouseList
