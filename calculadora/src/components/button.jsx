import React from 'react';
import '../css/button.css'

export default props => {
let classBtn = 'button '
classBtn += props.operation ? 'operation' : ''
classBtn += props.double ? 'double' : ''
classBtn += props.triple ? 'triple' : ''

return (
    <button
        onClick={e => props.click && props.click(props.label)}
        className={classBtn}>
        {props.label}
    </button>
    )
}
