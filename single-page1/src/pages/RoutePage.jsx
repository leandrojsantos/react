import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Teste from './Teste';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClienteNovo from '../components/ClienteNovo';
import ProdutoNovo from '../components/ProdutoNovo';
import RecipeCard from '../components/RecipeCard';
import RecipeCliente from '../components/RecipeCliente';
import RecipeProduto from '../components/RecipeProduto';

const RoutePage = () =>{
  return (
    <div className="content">
        <BrowserRouter>
        <div>
          <Navbar/>
            <Switch>  
            <Route exact path="/" component={Home} />
            
            <Route exact path="/clientenovo" component={ClienteNovo} />

            <Route exact path="/produtonovo" component={ProdutoNovo} />
            
            <Route exact path="/produto" component={RecipeProduto} />
            
            <Route exact path="/cliente" component={RecipeCliente} />

            <Route exact path="/teste" component={RecipeCard}/>
            
            </Switch>
        </div>
        </BrowserRouter>
      <Footer/>
    </div>  
      );
    }
  
  export default RoutePage;
  