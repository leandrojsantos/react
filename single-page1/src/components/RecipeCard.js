import React, {Component} from 'react';


const card = {
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
const img = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100px',
  height: '100px',
  borderRadius: '200px'
}

function Recipe({info}) {
  return (
    <div style={card}>
      <h1 style={h1}>{info.name}</h1>
      <img src={info.picture} style={img} alt='true'></img>
      <p><b>Email: </b>{info.email}</p>
      <p><b>Cell: </b>{info.cell}</p>
      <p><b>Gender: </b>{info.gender}</p>
    </div>
  );
}

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      results: {}
    };

  }

 async componentWillMount() {
  fetch('https://randomuser.me/api/?results=4')
  .then((response) => response.json())
  .then((Obj) => { this.setState({results: Obj, arr: Obj.results}); }); 
  }

  render() {
    const {arr} = this.state;

    return (
      <div style={container}>
        {arr.map(item => {
          var o = {
            name: item.name.first + ' ' + item.name.last,
            email: item.email,
            cell: item.cell,
            gender: item.gender,
            picture: item.picture.large
          };
          return <Recipe info={o} key={item.cell}/>
        })}

      </div>
    );
  }
}

export default RecipeCard;