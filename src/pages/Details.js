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
import './Detail.css'

function Details() {
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="fas fa-moon"></i> Dark Mode')

    let {state} = useLocation()
    

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

    return (
        <div className="bg-white dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md  py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-10 lg:mb-16 md:mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold lg:font-bold md:font-bold lg:text-xl md:text-xl text-l lg:pl-8">Where in the world?</h1>
                    <div className="ml-auto font-medium mr-4 lg:mr-9">
                        <button onClick={() => toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mb-16">
            <Link to = "/">
                <button className="px-8 py-2 ml-8 lg:ml-9  bg-white text-gray-600 shadow-lg dark:bg-gray-700 dark:text-white rounded-md">
                    <i className="fa fa-arrow-left"></i> Back
                </button>
                </Link>
            </div>
            <div className="container lg:flex md:flex-none -mt-7  mx-auto p-8 pl-0 pr-0">
                <img src={state.flag} className="w-80  lg:w-1/2 md:w2/2 md:ml-10 md:h-80 px-auto shadow-md dark:shadow-none ml-8 h-60 lg:h-80 rounded-md rounded-br-md rounded-tr-md mr-1 lg:mr-none md:mr-2 lg:mx-none md:mx-2 lg:pr-8" alt={state.name} />
                <div className="p-8 pl-8">
                    <h2 className="font-bold text-2xl mb-6">{state.name}</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-0 gap-x-20 gap-y-4">
<p className="state-prop font-bold ">Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.nativeName}</span></p>
<p className="state-prop font-bold">Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.population}</span></p>
<p className="state-prop font-bold">Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.region}</span></p>
<p className="state-prop font-bold">Sub Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.subregion}</span></p>
<p className="state-prop font-bold">Capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.capital}</span></p>
<p className="state-prop font-bold mt-10 lg:mt-0 md:mt-0">Top Level Domain: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.topLevelDomain[0]}</span></p>
<p className="state-prop font-bold">Currencies: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.currencies.map(cur => cur.name)}</span></p>
<p className="state-prop font-bold">Languages: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.languages.map(lang => lang.name+', ')}</span></p>
                    </div>
                    <div className=" lg:flex md:flex mt-14">
                        <p className="font-bold mb-2 lg:mb-0 md:mb-0">Border Countries: </p>
                        <p><span className=' gap-3 py-auto cursor-pointer  ml-2'>{state.borders.map(borders => borders+', ')}</span></p>
                    </div>
                </div>
            </div>
            
        </div>
       
    )
}

export default Details