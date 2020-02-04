import React from 'react';

export default props => 
//parsing error: Adjacent jsx elements ...

//op 3 usar array onde tambem nao retorna uma div extra 
    [
        <h1> 1 </h1> ,
        <h3>2 </h3>
    ]

// //op 2 usar react fragment onde nao retorna div extra
// <React.Fragment>
//         <h1> 1 </h1> 
//         <h3>2 </h3>
// </React.Fragment>


// //op 1 tem uma div extra 
//     <div>
//         <h1> 1 </h1> 
//         <h3>2 </h3>
//     </div>