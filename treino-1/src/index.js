///import React so quando se usa jsx
import React from 'react'
//import reactdom quando se que renderizacao
import ReactDOM from 'react-dom'

import Listas from './componentes/listas'
import  { ComponenteA, ComponenteB, ComponenteC } from './componentes/exportDois'
import ComponenteD from './componentes/exportDois'
import MultiElementos from './componentes/multiElemento'
import Comp2 from './componentes/comp2'
import ComFuncoes from './componentes/comFuncoes'
import Notificacao from './componentes/notificacao'
import Hooks from './componentes/hooks';


const elemento = document.getElementById(`root`)
ReactDOM.render(
    //reparar na chamada dos componentes daqui eles sao encapulados como queremos apos eviado para const elemento que por sua vez chama a div principal root 
    <div>
        <Listas valor = 'pedro'/>
        <ComponenteA valor = 'eai'/>
        <ComponenteB valor = 'dboa'/>
        <MultiElementos/>
        <ComponenteC valor = 'dboa tmb'/>
        <ComponenteD valor = 'atrasado mas cheguei'/>
        <Comp2 sobrenome='balboa'/>
        <ComFuncoes/>
        <Notificacao/>
        <Hooks/>

    </div>

, elemento)