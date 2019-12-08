import React from 'react';
import Comp1 from './comp1'

//mostra que um componente pode usa o outro
export default props =>
<div>
    <Comp1 nome='rambo'  sobrenome={props.sobrenome}/>  
    <Comp1 nome='chaves' sobrenome='chapolin'/>
    <Comp1 nome='hulk' sobrenome={props.sobrenome}/>
    <Comp1 nome='rock' sobrenome={props.sobrenome}/>

</div>