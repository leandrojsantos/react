import React, {Component} from 'react';


const cliente = {
  margin: '1rem',
  background: 'white',
  boxShadow: '2px 4px 25px rgba(0, 0, 0, .1)',
  borderRadius: '12px',
  overflow: 'hidden',
  minWidth: '300px',
  transition: 'all .2s linear'
}
const container = {
  display: 'flex',
  flexWrap: 'wrap'
}
const h1 = {
  textAlign: 'center',
  padding: '1.5rem 2.5rem',
  backgroundImage: 'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)',
  margin: '0 0 2rem 0',
  fontSize: '1.5rem',
  color: 'white'

}


function Recipe({info}) {
  return (
    <div style={cliente}>
      <h1 style={h1}>{info.nome}</h1>
      <p><b>Nome: </b>{info.nome}</p>
      <p><b>Produto: </b>{info.produtoid}</p>
      <p><b>Cadastro: </b>{info.ficha}</p>
    </div>
  );
}

class RecepiCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

 async componentWillMount() {
  fetch('http://localhost:5000/clientes/c')
  .then(res => res.json())
  .then(json => {
      this.setState({
          isLoaded: true,
          items: json.data
      })
  });
}

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <div className="RecipeCliente">
            
            <ul>
                {items.map(item => (
                    <li key="{item.produtoid}">
                    Nome: {item.nome},
                    Produto: {item.produtoid}
                           
                    </li>
                ))}
            </ul>
        </div>
    );
}
}

export default RecepiCliente;