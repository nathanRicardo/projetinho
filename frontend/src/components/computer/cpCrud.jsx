import React, {Component} from "react";
import Main from "../template/main";

const headerProps = {
icon: 'keyboard',
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