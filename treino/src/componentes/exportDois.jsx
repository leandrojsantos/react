import React from 'react'

const ComponenteA = props =>
    <h1>Primeiro diz : {props.valor}</h1>


const ComponenteB = props => 
    <h1>Segundo diz : {props.valor}</h1>

//op 3 export no meio do codigo ao inves do final
export const ComponenteC = props => 
    <h1>Terceiro diz : {props.valor}</h1>  

//op 2 export atraves de funcao anonima com arroy function 
export default props => {
    return <h1>Quarto diz : {props.valor}</h1>
}

//export para dois componentes juntos sempre sem ser defaulf 
export {ComponenteA, ComponenteB}



