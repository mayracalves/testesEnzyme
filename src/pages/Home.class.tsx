import React, { Component } from "react";
import API from '../../src/api';
import Header from "../components/Header/Header";

export default class Home extends Component {
    state = {
      cooperativas: [],
      agencias: [],
      tipoOperacoes: [],
      agenciaSelecionada: null,
      cooperativaSelecionada: null,
      erroAoCarregar: false,
      estaCarregando: true,
    };

    componentDidMount(): void {
        this.carregarElementos();
    }

    async carregarElementos() {
        try {
            const agencias = await API.buscarAgencias();
            const cooperativas = await API.buscarCooperativas();
            // @ts-ignore
            const cooperativaSelecionada = cooperativas[0].value;
            const agenciaSelecionada = agencias[0].value;
            this.setState({
                agencias,
                cooperativas,
                cooperativaSelecionada,
                agenciaSelecionada,
            });
        } catch (e) {
            this.setState({
                erroAoCarregar: true,
            })
        } finally {
            this.setState({
                estaCarregando: false,
            })
        }

    }

    gerenciarTrocaDeCooperativa(cooperativaSelecionada) {
        this.setState({
            cooperativaSelecionada,
        });
    }

    gerenciarTrocaDeAgencia(agenciaSelecionada) {
        this.setState({
            agenciaSelecionada,
        });
    }

    render() {
        if (this.state.estaCarregando) {
            return (
                <div>Carregando...</div>
            );
        }

        if(this.state.erroAoCarregar) {
            return (
                <div>Ocorreu um erro ao carregar dados da aplicação. Tente novamente mais tarde.</div>
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
                    <div>Cooperativa Selecionada: {this.state.cooperativaSelecionada}</div>
                    <div>Agencia Selecionada: {this.state.agenciaSelecionada}</div>
                </div>
            </div>
        );
    }
}