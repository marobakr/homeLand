import { useState, useEffect, createContext } from 'react'
import { housesData } from '../data'
// create context
export const HouseContext = createContext()
// eslint-disable-next-line react/prop-types
const HouseContextprovider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setcountry] = useState('location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperies] = useState([])
  const [price, setPrice] = useState('price range (any)')
  const [loading, setLoading] = useState(false)

  // retunr allCountries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    })
    // remove duplicatea from an array
    const uniqueCountries = ['location (any)', ...new Set(allCountries)]
    // set countries state
    setCountries(uniqueCountries)
  }, [])

  // retunr properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type
    })
    // remove duplicatea from an array
    const uniqueProerties = ['location (any)', ...new Set(allProperties)]
    // set countries state
    setProperies(uniqueProerties)
  }, [])
  // handleClick func to make fillters
  // الفانكش لما بدوس عليها
  const handleClick = () => {
    setLoading(true)
    // create a function that check if the option has a value "any" becouse this "any" will to show all houses wethout fillter
    const isDefult = (str) => {
      return str.split(' ').includes('(any)')
    }

    // get the frist value of price and convert it to number
    const mainPrice = parseInt(price.split(' ')[0])

    // get the second value of price which is the maximum price and convert it to number
    const maxPrice = parseInt(price.split(' ')[2])

    // create filter about your optin you will choosen
    //! ideleted housesData instaed of houses
    /*
    there i can't use houses instaed of housesData 
    becuse the house state when i make filter in it ! 
    ويكون مافيش عناصر عشان تظهر ف بتالي هيه الاستات فاضيه مهمها اعمل ولازم اعمل ريفريش عشان ارجع العناصر تاني ف هنا احتفظت ب قيمه الاستات زي م هيه وخليت الفيلتر علي الداتا ديركت
    */
    const newHouses = housesData.filter((house) => {
      // convert house of price string to number
      const housePrice = parseInt(house.price)

      // if all value are selected
      if (
        house.country === country &&
        house.type === property &&
        house.price >= mainPrice &&
        house.price <= maxPrice
      ) {
        return house
      }

      // if all value are defult
      if (isDefult(country) && isDefult(property) && isDefult(price)) {
        return house
      }

      // if country is not defult
      if (!isDefult(country) && isDefult(property) && isDefult(price)) {
        return house.country === country
      }
      // if property is not defult
      if (!isDefult(property) && isDefult(country) && isDefult(price)) {
        return house.property === property
      }

      // if price is not defult
      if (!isDefult(price) && isDefult(country) && isDefult(property)) {
        if (housePrice >= mainPrice && housePrice <= maxPrice) {
          return house
        }
      }
      // if country & property are not defult
      if (!isDefult(country) && !isDefult(property) && isDefult(price)) {
        return house.country === country && house.type === property
      }

      //*! هنا انا حطيت && عشان انا عاوز ان يكون سعر المنزل اكبر من السعر الاولاني واصغر من التاني ولو كنت حطيت || ف هيجبلي كل العنصار لان اي حاجه من الشرطين هتتحقق هيجبهالك وبكده لو المنزل سعره 3000 ف في حاله || هيقارنه بسعر الاولاني لولقاه اكبر تمام ملقهوش اكب هيلاقي اكيد اصغر

      // if country & price are not defult
      if (!isDefult(country) && !isDefult(price) && isDefult(property)) {
        if (house.price >= mainPrice && house.price <= maxPrice)
          return house.country === country
      }
      // if property & price are not defult
      if (!isDefult(property) && !isDefult(price) && isDefult(country)) {
        if (house.price >= mainPrice && house.price <= maxPrice)
          return house.type === property
      }
    })
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      )
    }, 1000)
  }
  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        country,
        setcountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperies,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextprovider
