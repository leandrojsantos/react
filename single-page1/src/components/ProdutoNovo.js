import React, { Component } from 'react';
import axios from 'axios';

export default class ProdutoNovo extends Component {

    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeValor = this.onChangeValor.bind(this);
        this.onChangeDescricao = this.onChangeDescricao.bind(this);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: '',
            valor: '',
            descricao: ` `,
            duedate: ``
        }
    }
    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }
    onChangeValor(e) {
        this.setState({
            valor: e.target.value
        });
    }
    onChangeDescricao(e) {
        this.setState({
            descricao: e.target.value
        });
    }
    onChangeDuedate(e) {
        this.setState({
            duedate: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const produto = {
            id: this.state.id,
            nome: this.state.nome,
            valor: this.state.valor,
            descricao: this.state.descricao,
            duedate: this.state.duedate
        }
        axios.post('http://localhost:5000/produtos/addp', produto)
        .then(res => console.log(res.data));
        
        this.setState({
            id: '',
            nome: '',
            pordutoid: '',
            ficha: ` `
        });
        
    }

    render() {
        return (
            <div style={{margin: 80}}>
                <h3>Produto Novo</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="string" className="form-control" value={this.state.nome}  onChange={this.onChangeNome}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Valor: </label>
                        <input type="tinyint" className="form-control" value={this.state.valor}  onChange={this.onChangeValor}/>
                    
                    </div> <div className="form-group">
                        <label>Descrição: </label>
                        <input type="text" className="form-control" value={this.state.descricao}  onChange={this.onChangeDescricao}/>
                    </div>
                    
                     <div className="form-group">
                        <label>Data cadastramento: </label>
                        <input type="date" className="form-control" value={this.state.duedate}  onChange={this.onChangeDuedate}/>
                    </div>
                
                    <div className="form-group">
                        <input type="submit" value="Adicinar produto" className="btn btn-primary"/>
                    </div>
                 
                </form>
            </div>
        )
    }
}