import React from 'react';

const aprovados = ['peter', 'tony', 'rock', ]

export default props => {
    let numero = Math.random()
    const gerarItens = item =>{
        return item.map(item => <li>{item}</li>)
    }

    return( 
        <ul>
        {numero}
        {gerarItens(aprovados)}
        </ul>
    )
}