import React from 'react'


/*

-la forma de poner props.name ya no es tan habitual de usar
- Desestructuración de props es el mas usado actualmente haciéndolo dentro del argumento de la función como un objeto */


const Person = ({name, age})=>{


    return (
        
        <p>Soy {name} y tengo {age} años</p>
    )
}

export default Person