import React, {Component} from "react";
import Main from "../template/main";
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
const headerProps = {
icon: 'keyboard-o',
title: 'Computadores',
subtitle: 'Controle de Máquinas Ativas'

}
 
const baseUrl = 'http://localhost:3001/computadores'
const initialState = {
    computadores: {
    id:'',
      Nome: '',
      usuario: '',
      setor:'',
      nomePc:'',
      IP: '',
      AnyDesk:'',
    Processador: '',
      RAM:'',
      Armazenamento:'',
      DhcpouFixo: '',
      Domínio:'',
      SO:''},
      list: []
}
export default class cpCrud extends Component {
   
   state = {...initialState}

   componentWillMount(){
    axios(baseUrl).then(resp => {
        this.setState({list: resp.data})
    })
   }
   clear(){
    this.setState({computadores: initialState.computadores})
   }

   save(){
    const computadores = this.state.computadores
    const method = computadores.id ? 'put' :
'post'
const url = computadores.id ? `${baseUrl}/${computadores.id}` : baseUrl
axios[method](url, computadores)
.then(resp => {
    const list = this.getUpdatedList(resp.data)
    this.setState({computadores: initialState.computadores, list})
})
}
getUpdatedList(computadores, add=true){
    const list = this.state.list.filter( c => c.id !== computadores.id)
    if(add) list.unshift(computadores)
    return list 
}
updateField (event){
    const computadores = {...this.state.computadores}
    computadores[event.target.name] = event.target.value
    this.setState({computadores})
}

load(computadores) {
    this.setState({computadores })
}

remove(computadores) {
    axios.delete(`${baseUrl}/${computadores.id}`).then(resp => {
        const list = this.getUpdatedList(computadores, false)
        this.setState({ list })
    })
}
renderButton(){
    return(
        <button className="fa fa-plus"aria-hidden="true"
    >
        

    </button>
    )
}

renderForm(){
    return(

        <div className="form">
        <div className="row">
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control"
                        name="name"
                        value={this.state.computadores.name}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o nome..." />
                </div>
            </div>

            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Usuário</label>
                    <input type="text" className="form-control"
                        name="usuario"
                        value={this.state.computadores.usuario}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o usuário..." />
                </div>
                
            </div>
        </div>
        <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Setor</label>
                    <input type="text" className="form-control"
                        name="setor"
                        value={this.state.computadores.setor}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o Setor..." />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Nome Do Computador</label>
                    <input type="text" className="form-control"
                        name="nomePc"
                        value={this.state.computadores.nomePc}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o Nome do Computador..." />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>IP</label>
                    <input type="text" className="form-control"
                        name="IP"
                        value={this.state.computadores.IP}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o IP..." />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Any Desk</label>
                    <input type="text" className="form-control"
                        name="AnyDesk"
                        value={this.state.computadores.AnyDesk}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o id do Any Desk..." />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Processador</label>
                    <input type="text" className="form-control"
                        name="Processador"
                        value={this.state.computadores.Processador}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o Processador..." />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>RAM</label>
                    <input type="text" className="form-control"
                        name="RAM"
                        value={this.state.computadores.RAM}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite a Memória RAM..." />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Armazenamento</label>
                    <input type="text" className="form-control"
                        name="Armazenamento"
                        value={this.state.computadores.Armazenamento}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o Armazenamento..." />
                </div>
                
            </div>
           
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Domínio</label>
                    <input type="text" className="form-control"
                        name="Domínio"
                        value={this.state.computadores.Domínio}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o Domínio do Computador..." />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
                <div className="form-group">
                    <label>Sistema Operacional</label>
                    <input type="text" className="form-control"
                        name="SO"
                        value={this.state.computadores.SO}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o SO da Máquina..." />
                </div>
                
            </div>
        <hr />
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary"
                    onClick={e => this.save(e)}>
                    Salvar
                </button>

                <button className="btn btn-secondary ml-2"
                    onClick={e => this.clear(e)}>
                    Cancelar
                </button>
            </div>
        </div>
    </div>




    )

    }
renderTable() {
    return (
        <table className="table sm-2">
            <thead>
                <tr>
                    
                    <th>Nome</th>
                    <th>Usuário</th>
                    <th>Setor</th>
                    <th>Nome Do PC</th>
                    <th>IP</th>
                    <th>Any Desk</th>
                    <th>Processador</th>
                    <th>RAM</th>
                    <th>Armazenamento</th>
                    <th>Domínio</th>
                    <th>SO</th>
                    
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>
    )
}

renderRows() {
    return this.state.list.map(computadores => {
        return (
            
            <tr key={computadores.id}>
                <td>{computadores.Nome}</td>
                <td>{computadores.usuario}</td>
                <td>{computadores.setor}</td>
                <td>{computadores.nomePc}</td>
                <td>{computadores.IP}</td>
                <td>{computadores.AnyDesk}</td>
                <td>{computadores.Processador}</td>
                <td>{computadores.RAM}</td>
                <td>{computadores.Armazenamento}</td>
                
                <td>{computadores.Domínio}</td>
                <td>{computadores.SO}</td>
                <td>
                    <button className="btn btn-warning"
                        onClick={() => this.load(computadores)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-1"
                        onClick={() => this.remove(computadores)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}








    render(){
        return(
            <Main {...headerProps}>
                {this.renderButton()}
                {this.renderTable()}
               
            </Main>)
    }
}