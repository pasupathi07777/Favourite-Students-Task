import React, { createContext, useState } from 'react'



let data = createContext()

const Context = ({ children }) => {

    let headerDetails = [
        {
            path: "/",
            name: "List of Students"
        },
        {
            path: "/favourite",
            name: "Favourite Student"
        }
    ]

    let [studentList, setstudentList] = useState([
        {
            id: 1,
            name: "Bharath",
            favourite: false
        },
        {
            id: 2,
            name: "Preveen",
            favourite: true
        },
        {
            id: 3,
            name: "Kumar",
            favourite: false
        },
        {
            id: 4,
            name: "Ramya",
            favourite: false
        },
        {
            id: 5,
            name: "Monica",
            favourite: true
        },
    ])


    let handleClick = (res) => {
        let fff=studentList.map((e, i) =>
            e.id === res ? { ...e, favourite: true } : e

        )
        setstudentList(fff)

    }
    let removeFavourite=(res)=>{
        console.log(res)

        let fff=studentList.map((e,i)=>
            e.id===res?{...e,favourite:false}:e
        )
        setstudentList(fff)

    }
 




    return (
        <data.Provider value={{
            headerDetails, studentList, handleClick,removeFavourite

        }}>
            {children}

        </data.Provider>
    )
}


export default Context
export { data }