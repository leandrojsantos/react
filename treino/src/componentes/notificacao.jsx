import React from 'react';
import Button from './button'

export default props => { 
    const notificaUsr = 
    mensagem => alert (`liberado ${mensagem}`)

    return (
        <div>
            <Button notificar={notificaUsr}/>
        </div>
    )
    
}