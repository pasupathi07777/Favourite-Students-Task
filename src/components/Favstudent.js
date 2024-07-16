import React, { useContext } from 'react'
import { data } from '../data/Context'

const Favstudent = () => {
    let { studentList, removeFavourite } = useContext(data)
    return (
        <div className=' px-[24px] py-[32px] flex flex-col gap-4'>
            {
                studentList.map((e, i) => (

                    e.favourite && <div className="box flex gap-6 items-center  " key={i}>
                        <p className='text-[20px] capitalize font-medium w-[100px]'>{e.name}</p>
                        <button type="button " className={`bg-red-500 text-[20px] font-medium px-3 py-1 text-white rounded-md `} onClick={() => removeFavourite(e.id)}>Remove Favourite</button>
                    </div>


                ))
            }
        </div>
    )
}

export default Favstudent