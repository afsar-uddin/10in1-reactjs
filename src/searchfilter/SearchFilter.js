import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .catch(err => console.log(err))
        .then(res=> {
            setData(res.data)
            setSearchData(res.data)
        })
    }, [])

    const filter = (event) => {
        setSearchData(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
  return (
    <div>
        <input type="text" onChange={filter} placeholder='Search by name'/>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    searchData.map((d,i)=>(
                    // data.map((d,i)=>(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default SearchFilter