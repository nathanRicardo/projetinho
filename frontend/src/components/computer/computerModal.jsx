import React from "react";


export default class compuaterModal extends Component {

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
                    <label>Dhcp ou Fixo</label>
                    <input type="text" className="form-control"
                        name="dhcpoufixo"
                        value={this.state.computadores.DhcpouFixo}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite se o Ip é DHCP ou Fixado..." />
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
                        name="dhcpoufixo"
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
}