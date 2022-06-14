import React, {Component} from "react";
import Main from "../template/main";

const headerProps = {
icon: 'fa fa-desktop',
title: 'Impressoras',
subtitle: 'Controle de Impressoras'

}

export default class cpCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
Cadastro de Impressora
            </Main>)
    }
}