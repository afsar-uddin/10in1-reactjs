import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Meal() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get("http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
            setItem(res.data.meals);
            // console.log(res.data.meals);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    const foodList = item.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <>
                <div>
                <img src={strMealThumb} alt={idMeal}/>
                <p>{strMeal}</p>
                <p><strong>Meal Id</strong> : {idMeal}</p>
                </div>
            </>
        )
    })

    return <div>{foodList}</div>
}

export default Meal