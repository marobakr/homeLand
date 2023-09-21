import { useContext, useState } from 'react'
// import Icons

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
// import headlessui

import { Menu } from '@headlessui/react'
// import HouseContext

import { HouseContext } from './HouseContext'

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext)
  const [isOpeen, setIsOpen] = useState(false)

  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button
        className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpeen)}
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpeen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((prop, index) => {
          return (
            <Menu.Item
              as='li'
              key={index}
              onClick={() => setProperty(prop)}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {prop}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown
