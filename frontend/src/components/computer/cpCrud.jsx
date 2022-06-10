import React, {Component} from "react";
import Main from "../template/main";

const headerProps = {
icon: 'computadores',
title: 'Computadores',
subtitle: 'Controle de Máquinas Ativas'

}

export default class cpCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
Cadastro de PC
            </Main>)
    }
}