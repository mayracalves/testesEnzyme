import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import API from '../api';

const Home: React.FC = () => {

  const [cooperativas, setCooperativas] = useState([]);
  const [cooperativa, setCooperativa] = useState(null);
  const [agencias, setAgencias] = useState([]);
  const [agencia, setAgencia] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    Promise
      .all([API.buscarAgencias(), API.buscarCooperativas()])
      .then(([agencias, cooperativas]: any) => {
        setAgencias(agencias);
        setCooperativas(cooperativas);
        setAgencia(agencias[0].value);
        setCooperativa(cooperativas[0].value);
      })
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  if (erro) {
    return (
      <div data-testid="home_erro">Ocorreu um erro ao carregar dados da aplicação. Tente novamente mais tarde.</div>
    );
  }

  if (carregando) {
    return (
      <div data-testid="home_carregando">Carregando...</div>
    )
  }

  return (
    <div>
      <Header
        titulo="Home"
        possuiRetorno={false}
        itensAgencia={agencias}
        itensCooperativa={cooperativas}
        onChangeCooperativa={c => setCooperativa(c)}
        onChangeAgencia={(c) => setAgencia(c)}
        exibirAgencia
        exibirCooperativa
      />
      <div>
        <div data-testid="home_cooperativa_selecionada">Cooperativa Selecionada: {cooperativa}</div>
        <div data-testid="home_agencia_selecionada">Agencia Selecionada: {agencia}</div>
      </div>
    </div>
  );
};

export default Home;