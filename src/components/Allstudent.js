import React, { useContext } from 'react'
import { data } from '../data/Context'

const Allstudent = () => {
    let {studentList,handleClick}=useContext(data)
  return (
    <div className=' px-[24px] py-[32px] flex flex-col gap-4'>
        {studentList.map((e,i)=>(
            <div className="box flex gap-6 items-center  " key={i}>
                <p className='text-[20px] capitalize font-medium w-[100px]'>{e.name}</p>
                <button disabled={e.favourite} type="button " className={`bg-black text-[20px] font-medium px-3 py-1 text-white rounded-md ${e.favourite?"opacity-70":"bg-opacity-100"}`} onClick={()=>handleClick(e.id)}>Add to Favourite</button>
            </div>

        ))}
    </div>
  )
}

export default Allstudent