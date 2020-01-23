//@ts-nocheck
import {action, observable} from "mobx";
import API from "../api";

export class Store {
  @observable agencias = [];
  @observable cooperativas = [];
  @observable erro = false;
  @observable carregando = true;
  @observable agencia = null;
  @observable cooperativa = null;

  @action
  setAgencia(agencia) {
    this.agencia = agencia
  }

  @action
  setCooperativa(cooperativa) {
    this.cooperativa = cooperativa;
  }

  @action
  async carregarElementos() {
    try {
      this.agencias = await API.buscarAgencias();
      this.agencia = this.agencias[0].value;
      this.cooperativas = await API.buscarCooperativas();
      this.cooperativa = this.cooperativas[0].value;
    } catch (e) {
      this.erro = true;
    } finally {
      this.carregando = false;
    }
  }
}

export default new Store();