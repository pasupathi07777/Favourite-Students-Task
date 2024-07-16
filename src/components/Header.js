import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/Context'

const Header = () => {
    let {headerDetails}=useContext(data)
    console.log(headerDetails)
    return (
        <div className='bg-[#BC5A5A] flex gap-4 px-[24px] py-[12px]'>
        
            {headerDetails.map((e,i)=>(
                <Link key={i} to={e.path}>  <h1 className='nav-link font-semibold text-[20px] sm:text-[24px]   text-white '>{e.name}</h1></Link>
            ))}

        </div>
    )
}

export default Header