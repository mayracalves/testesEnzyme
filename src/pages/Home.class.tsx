// @ts-nocheck
import React, {Component} from "react";
import API from '../../src/api';
import Header from "../components/Header/Header";

export default class Home extends Component {
  state = {
    cooperativas: [],
    agencias: [],
    tipoOperacoes: [],
    agencia: null,
    cooperativa: null,
    erro: false,
    carregando: true,
  };

  componentDidMount(): void {
    this.carregarElementos();
  }

  async carregarElementos() {
    try {
      const agencias = await API.buscarAgencias();
      const cooperativas = await API.buscarCooperativas();
      const cooperativa = cooperativas[0].value;
      const agencia = agencias[0].value;
      this.setState({
        agencias,
        cooperativas,
        cooperativa,
        agencia,
      });
    } catch (e) {
      this.setState({
        erro: true,
      })
    } finally {
      this.setState({
        carregando: false,
      })
    }

  }

  gerenciarTrocaDeCooperativa(cooperativa) {
    this.setState({
      cooperativa,
    });
  }

  gerenciarTrocaDeAgencia(agencia) {
    this.setState({
      agencia,
    });
  }

  render() {
    if (this.state.carregando) {
      return (
        <div data-testid="home_carregando">Carregando...</div>
      );
    }

    if (this.state.erro) {
      return (
        <div data-testid="home_erro">Ocorreu um erro ao carregar dados da aplicação. Tente novamente mais tarde.</div>
      )
    }
    return (
      <div>
        <Header
          titulo="Home"
          possuiRetorno={false}
          itensAgencia={this.state.agencias}
          itensCooperativa={this.state.cooperativas}
          onChangeCooperativa={(c) => this.gerenciarTrocaDeCooperativa(c)}
          onChangeAgencia={(c) => this.gerenciarTrocaDeAgencia(c)}
          exibirAgencia
          exibirCooperativa
        />
        <div>
          <div data-testid="home_cooperativa_selecionada">Cooperativa Selecionada: {this.state.cooperativa}</div>
          <div data-testid="home_agencia_selecionada">Agencia Selecionada: {this.state.agencia}</div>
        </div>
      </div>
    );
  }
}