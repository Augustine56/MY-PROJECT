// import React from 'react'

// function Details() {
//   return (
//     <div>
//         <h1>Load from details</h1>
//     </div>
//   )
// }

// export default Details

import React, { useState } from 'react'
import {useLocation } from 'react-router'
import { Link } from 'react-router-dom'

function Details() {
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')

    let {country} = useLocation()
    

    const toggleDarkMode = () => {
        if(mode){
            document.documentElement.classList.add('dark')
            setToggleBtn('<i class="fas fa-moon"></i> Dark Mode')
            setMode(current => current = !current)
        }
        if(!mode) {
            document.documentElement.classList.remove('dark')
            setToggleBtn('<i class="far fa-sun"></i> Light Mode')
            setMode(current => current = !current)
        }
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={() => toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mb-16">
            <Link to = "/">
                <button className="px-8 py-2 ml-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg">
                    <i className="fa fa-arrow-left"></i> Back
                </button>
                </Link>
            </div>
            {/* <div className="container flex mx-auto p-8 pl-0 pr-0">
                <img src={country.flag} className="w-1/2 pr-8" alt={country.name} />
                <div className="p-8 pl-8">
                    <h2 className="font-bold text-2xl mb-8">{country.name}</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p>Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.nativeName}</span></p>
                        <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.population}</span></p>
                        <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.region}</span></p>
                    <p>Sub Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.subregion}</span></p>
                    <p>Capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.capital}</span></p>
                    <p>Top Level Domain: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.topLevelDomain[0]}</span></p>
                    <p>Currencies: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.currencies.map(cur => cur.name)}</span></p>
                   <p>Languages: <span className="dark:text-gray-400 text-gray-700 text-sm">{country.languages.map(lang => lang.name+', ')}</span></p>
                    </div>
                    <div className="flex mt-16">
                        <p className="font-bold">Border Countries: </p>
                    </div>
                </div>
            </div>*/}
        </div> 
    )
}

export default Details