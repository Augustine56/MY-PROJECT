import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThumbDetail from '../components/ThumbDetail'
import './Home.css'
// import axios from "axios";

// const http = axios.create({
//     baseURL: 'https://restcountries.com/v2'
// })

// let res 
// try {
//  res =  await fetch('https://restcountries.com/v2/all')
//  // const data = await res.json()
//  // if(res.success) {

//  // }
//  await setCountries(res.data)
// } catch (error) {
//  console.log(error)
// }

function Home() {
    const [countries, setCountries] = useState([])
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="fas fa-moon"></i> Dark Mode')

    
useEffect(() => {
    async function fetchData() {
      // You can await here
      const res =  await fetch('https://restcountries.com/v2/all')
      const data = await res.json()
      await setCountries(data)
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state


    const toggleDarkMode = () => {
        if(mode){
            document.documentElement.classList.add('dark')
            setToggleBtn('<i class="far fa-sun"></i> Light Mode')
            setMode(current => current = !current)
        }
        if(!mode) {
            document.documentElement.classList.remove('dark')
            setToggleBtn('<i class="fas fa-moon"></i> Dark Mode')
            setMode(current => current = !current)
        }
    }

    const filterByRegion = async region => {
        if(region === '') return
         const res = await fetch(`https://restcountries.com/v2/region/${region}`)
         const data = await res.json()
         await setCountries(data)
    }


    const searchCountry = async name => {
        if(name.length < 3 || name === '') return
        const res = await fetch(`https://restcountries.com/v2/name/${name}`)
        const data = await res.json()
        await console.log(data)
        await setCountries(data)
    }
    return (    
        <div className="bg-gray-100  dark:bg-gray-800 pr-3 dark:text-white">
            <div className="nav w-screen shadow-md py-6 px-3  bg-white dark:bg-gray-700 dark:text-white mb-4 lg:mb-16 md:mb-16">
                <div className="flex container md:pl-8 md:pr-11 mx-auto">
                    <h1 className="font-bold lg:font-bold md:font-bold lg:text-xl md:text-xl text-l -ml-4">Where in the world?</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={() => toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}} clasName="mr-6 ">
                        </button>
                    </div>
                </div>
            </div>
            <div className="container lg:flex  md:flex  ml-3   mt-0 lg:mb-16 md:mb-16">
                <i className="fa fa-search my-auto -mr-10 lg:-mr-20 lg:ml-14 md:-mr-17 md:ml-12 md:-mr-16 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input type="text" placeholder="Search for a country..." className="input pl-10 md:pl-10  pr-20 lg:pr-none  p-2 shadow-md rounded-md  lg:ml-9 w-2/2 lg:w-1/3 md:w-2/2  dark:bg-gray-700" onChange={ term => searchCountry(term.target.value)} />
                <select className="sec  md:h-11 h-10  lg:ml-auto lg:mr-10 md:ml-auto md:mr-14  mb-10 lg:mt-2 md:mt-2 lg:mb-0 md:mb-0 mt-1 pl-3  pr-7 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={ val => filterByRegion(val.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
                </div>
            
            <div className="container grid grid-cols-1   lg:grid-cols-4 md:grid-cols-2  lg:ml-15 mb-4  ml-11  md:ml-14 md:mx-auto">
                {countries.map( (country, index ) => <Link to={{ pathname : "details", state: country }}  key={index}><ThumbDetail 
                                                title={country.name} 
                                                image_url={country.flag} 
                                                population={country.population}
                                                region={country.region}
                                                capital={country.capital}
                                            /></Link> )}
            </div>
        </div>
    )
}

export default Home