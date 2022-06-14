import React, {Component} from "react";
import Main from "../template/main";
import axios from 'axios'
const headerProps = {
icon: 'fa fa-computer',
title: 'Computadores',
subtitle: 'Controle de Máquinas Ativas'

}
 
const baseUrl = 'http://localhost:3001/computadores'
const initialState = {
    computadores: {
    
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

renderTable() {
    return (
        <table className="table mt-3">
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
                    <th>DHCP Ou Fixo</th>
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
    return this.state.list.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
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
 
                {this.renderTable()}
            </Main>)
    }
}