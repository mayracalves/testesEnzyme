import {inject, observer, Provider} from "mobx-react";
import store, {Store} from '../store/store'
import React, {Component} from "react";
import Header from "../components/Header/Header";

export default function MobXProvider() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

@inject('store')
@observer
export class Home extends Component<{ store?: Store }> {
  componentDidMount() {
    this.props.store?.carregarElementos();
  }

  render() {
    if (this.props.store?.carregando) {
      return (
        <div>Carregando...</div>
      );
    }

    if (this.props.store?.erro) {
      return (
        <div>Ocorreu um erro ao carregar dados da aplicação. Tente novamente mais tarde.</div>
      )
    }

    return (
      <div>
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