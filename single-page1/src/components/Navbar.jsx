import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => 

<div className="body_wrap">
  <div className="page_wrap">
    <header className="top_panel_wrap top_panel_style_1 scheme_original">
      <div className="header-bg">

        <div
          className="top_panel_wrap_inner top_panel_inner_style_1 top_panel_position_over"
          style={{
          marginTop: `10`,
          backgroundColor: '#ffff ',
          color: 'black'
        }}>
          <div className="content_wrap clearfix">
            <div className="top_panel_logo">
              <div className="logo ">
                <a href="/"><img src="images/Logo/logo.png" className="logo_main" alt="true"/></a>
              </div>
            </div>

            <div className="top_panel_contacts">
              <div className="top_panel_contacts_left">
             <img src="images/Logo/map-location.png" alt="true"/>São Paulo </div>         
            
              <div className="top_panel_contacts_right">Fone:
                <strong style={{
                  color: 'black'
                }}>
                  <i>014</i>9999999</strong>
              </div>
              <div className="cL"/>
            </div>

            <div className="top_panel_menu">
              <a
                href="navbar"
                className="Navbar.Toggle Navbar.Collapse Navbar"
                style={{
                color: 'black',
                textDecoration: 'none'
              }}></a>

              <nav >
                <ul id="menu_main" className="menu_main_nav ">
                  <li className="menu-item">
                    <Link
                      className="Home"
                      to="/"
                      style={{
                      color: 'black',
                      textDecoration: 'none'
                    }}>Home
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="RecipeCard"
                      to="/cliente"
                      style={{
                      color: 'black',
                      textDecoration: 'none'
                    }}>Lista Clientes
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="ClienteNovo"
                      to="/clientenovo"
                      style={{
                      color: 'black',
                      textDecoration: 'none'
                    }}>Cliente Novo
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="RecipeCard"
                      to="/produto"
                      style={{
                      color: 'black',
                      textDecoration: 'none'
                    }}>Lista Produtos
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="ProdutoNovo"
                      to="/produtonovo"
                      style={{
                      color: 'black',
                      textDecoration: 'none'
                    }}>Produto Novo
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      className="Teste"
                      to="/teste"
                      style={{
                      color: 'black',
                      textDecoration: 'none'
                    }}>Teste
                    </Link>
                  </li>
                </ul>
              </nav>

            </div>
            <div className="cL"/>
          </div>
        </div>
      </div>
    </header>
  </div>
</div>

export default Navbar;