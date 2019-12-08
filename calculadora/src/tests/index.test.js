import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../main/calculator';


it('t1Renderizar Calculator', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
