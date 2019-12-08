import React, { Component } from 'react';
import axios from 'axios';

export default class ClienteNovo extends Component {

    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeProdutoid = this.onChangeProdutoid.bind(this);
        this.onChangeFicha = this.onChangeFicha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: '',
            pordutoid: '',
            ficha: ` `
        }
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }
    onChangeProdutoid(e) {
        this.setState({
            pordutoid: e.target.value
        });
    }
    onChangeFicha(e) {
        this.setState({
            ficha: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const cliente = {
            nome: this.state.nome,
            pordutoid: this.state.pordutoid,
            ficha: this.state.ficha
        }
        axios.post('http://localhost:5000/clientes/addc', cliente)
        .then(res => console.log(res.data));
        
        this.setState({
            nome: '',
            pordutoid: '',
            ficha: ` `
        });
        
    }

    render() {
        return (
            <div style={{margin: 80}}>
                <h3>Cliente Novo</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="string" className="form-control" value={this.state.nome}  onChange={this.onChangeNome}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Produto: </label>
                        <input type="interger" className="form-control" value={this.state.pordutoid}  onChange={this.onChangeProdutoid}/>
                    
                    </div> <div className="form-group">
                        <label>Tem cadastro?: </label>
                        <input type="boolean" className="form-control" value={this.state.ficha}  onChange={this.onChangeFicha}/>
                    </div>
                    
                  
                    <div className="form-group">
                        <input type="submit" value="Adicinar cliente" className="btn btn-primary column-2_4"/>
                    </div>
                 
                </form>
            </div>
        )
    }
}
