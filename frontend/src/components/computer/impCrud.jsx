import React, {Component} from "react";
import Main from "../template/main";
import axios from 'axios';
const headerProps = {
icon: 'print',
title: 'Impressoras',
subtitle: 'Controle de Impressoras'

}

const baseUrl = 'http://localhost:3001/impressoras'
const initialState = {
    impressoras: {
    ID:'',
      Nome: '',
     Setor:'',
     Trafo:'',
     IP:'',
     Modelo:'',
     Quemusa:''},
     list: []
}

export default class impCrud extends Component {
    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ impressoras: initialState.impressoras })
    }

    save() {
        const impressoras = this.state.impressoras
        const method = impressoras.ID ? 'put' : 'post'
        const url = impressoras.ID ? `${baseUrl}/${impressoras.ID}` : baseUrl
        axios[method](url, impressoras)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.impressoras, list })
            })
    }

    getUpdatedList(impressoras, add = true) {
        const list = this.state.list.filter(i => i.ID !== impressoras.ID)
        if(add) list.unshift(impressoras)
        return list
    }

    updateField(event) {
        const impressoras = { ...this.state.impressoras }
        impressoras[event.target.name] = event.target.value
        this.setState({ impressoras })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.impressoras.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Setor</label>
                            <input type="text" className="form-control"
                                name="Setor"
                                value={this.state.impressoras.Setor}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o setor..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Trafo</label>
                            <input type="text" className="form-control"
                                name="Trafo"
                                value={this.state.impressoras.Trafo}
                                onChange={e => this.updateField(e)}
                                placeholder="..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>IP</label>
                            <input type="text" className="form-control"
                                name="IP"
                                value={this.state.impressoras.IP}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o IP..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Modelo</label>
                            <input type="text" className="form-control"
                                name="Modelo"
                                value={this.state.impressoras.Modelo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Modelo..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Quem Usa</label>
                            <input type="text" className="form-control"
                                name="Quemusa"
                                value={this.state.impressoras.Quemusa}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o setor..." />
                        </div>
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

    load(impressora) {
        this.setState({ impressora })
    }

    remove(impressora) {
        axios.delete(`${baseUrl}/${impressora.ID}`).then(resp => {
            const list = this.getUpdatedList(impressora, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        
                        <th>Nome</th>
                        <th>Setor</th>
                        <th>Trafo</th>
                        <th>IP</th>
                        <th>Modelo</th>
                        <th>Quem Usa</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(impressoras => {
            return (
                <tr key={impressoras.ID}>
                    <td>{impressoras.Nome}</td>
                    <td>{impressoras.Setor}</td>
                    <td>{impressoras.Trafo}</td>
                    <td>{impressoras.IP}</td>
                    <td>{impressoras.Modelo}</td>
                    <td>{impressoras.Quemusa}</td>
                    
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(impressoras)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(impressoras)}>
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
{this.renderForm()}
            </Main>)
    }
}