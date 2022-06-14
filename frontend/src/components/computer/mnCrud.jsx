import React, {Component} from "react";
import Main from "../template/main";

const headerProps = {
icon: 'fa fa-desktop',
title: 'Monitores',
subtitle: 'Controle de Monitores'

}

export default class mnCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
Cadastro de Monitor
            </Main>)
    }
}