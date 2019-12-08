import React from 'react';

/**
 * usa props do componente pai
 */
export function propsComp (props) {
    return React.Children.map (props.children, child => {
        return React.cloneElemtent (child, {...props})
    })
}