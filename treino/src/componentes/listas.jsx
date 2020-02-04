import React from 'react'

//compnente por funcao reparar na props e props.valor
function Lista (props) {
    return  <ul>
    <li>maria</li>
    <li>joao</li>
    <li>raimunda</li>
    <li>{props.valor}</li>
    </ul>
}

export default Lista
