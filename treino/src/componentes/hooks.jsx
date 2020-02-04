import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(0)
    const [parImpar, setParImpar] = useState('Par')
    
    useEffect(() => {
        contador % 2 === 0 ? setParImpar('par') : setParImpar('impar')
    }, [contador])
    
    return (
        <div>
            <h1>{contador} => {parImpar}</h1>
            <button onClick={() => setContador(contador - 1)}>MENOS 1</button>
            <button onClick={() => setContador(contador + 1)}>MAIS 1</button>
        </div>
    )
}