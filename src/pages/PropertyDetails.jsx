// import Data
import { housesData } from '../data'
// import use params
import { useParams } from 'react-router-dom'
// import Icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
// import Link
import { Link } from 'react-router-dom'
const PropertyDetails = () => {
  // Get the id param from the URL.
  const { id } = useParams()
  // get the house based on the id
  const house = housesData.find((item) => {
    // check the item.id === the id from useParams
    return item.id === parseInt(id)
  })
  const {
    id: index,
    type,
    name,
    imageLg,
    country,
    address,
    price,
    bedrooms,
    bathrooms,
    surface,
    description,
    agent: { image },
    agent: { name: nameInstacotr },
  } = house
  return (
    <section>
      <div className='container mx-auto mb-14 '>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <h3 className='text-lg mb-4'>{address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>
              {type}
            </div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>
              {country}
            </div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>
            $ {price}
          </div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={imageLg} alt='' />
            </div>
            {/* Start Icons */}
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2'>
                <BiBed className='text-2xl items-center' />
                <div>{bedrooms}</div>
              </div>
              <div className='flex gap-x-2'>
                <BiBath className='text-2xl items-center' />
                <div>{bathrooms}</div>
              </div>
              <div className='flex gap-x-2'>
                <BiArea className='text-2xl items-center' />
                <div>{surface}</div>
              </div>
            </div>
            {/* End Icons */}
            <div>{description}</div>
          </div>

          <div className='capitalize w-full bg-white mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={image} alt='' />
              </div>
              <div>
                <div className='font-bold text-lg'>{nameInstacotr}</div>
                <Link to='' className='text-violet-700 text-sm'>
                  view listing
                </Link>
              </div>
            </div>
            {/* Start Fomr */}
            <form className=' flex flex-col gap-y-4 '>
              <input
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                type='text'
                placeholder='*Name'
              />
              <input
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                type='text'
                placeholder='*Email'
              />
              <input
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
                type='text'
                placeholder='*Phone'
              />
              <textarea
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-36 text-sm text-gray-400'
                placeholder='*Message'
                defaultValue='Hello , Iam intersted in [Modern apartment]'
              ></textarea>
              <div className='flex gap-x-2 '>
                <button
                  className='bg-violet-700 hover:bg-violet-800 text-white
               rounded p-4 text-sm w-full transition'
                >
                  Send message
                </button>
                <button
                  className='
              border border-violet-700 textviolet700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition
              '
                >
                  Call
                </button>
              </div>
            </form>
            {/* End Fomr */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
