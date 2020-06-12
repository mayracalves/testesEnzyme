import { inject, observer } from "mobx-react";
import { Store } from '../store/store'
import React, { Component } from "react";
import Header from "../components/Header/Header";

@inject('store')
@observer
export default class Home extends Component<{ store?: Store }> {
  componentDidMount() {
    this.props.store?.carregarElementos();
  }

  render() {
    if (this.props.store?.carregando) {
      return (
        <div data-testid="home_carregando">Carregando...</div>
      );
    }

    if (this.props.store?.erro) {
      return (
        <div data-testid="home_erro">Ocorreu um erro ao carregar dados da aplicação. Tente novamente mais tarde.</div>
      )
    }

    return (
      <div style={{width: '50%', margin: '0 auto'}}>
        <Header
          titulo="Home"
          possuiRetorno={false}
          itensAgencia={this.props.store?.agencias}
          itensCooperativa={this.props.store?.cooperativas}
          onChangeCooperativa={(c) => this.props.store?.setCooperativa(c)}
          onChangeAgencia={(c) => this.props.store?.setAgencia(c)}
          exibirAgencia
          exibirCooperativa
        />
        <div>
          <div data-testid="home_cooperativa_selecionada">Cooperativa Selecionada: {this.props.store?.cooperativa}</div>
          <div data-testid="home_agencia_selecionada">Agencia Selecionada: {this.props.store?.agencia}</div>
        </div>
      </div>
    );
  }
}
