import store from './store';
import API from '../api';

describe('Unit Test: Store', () => {
  it('deve inicializar com valores default', () => {
    expect(store.agencia).toEqual(null);
    expect(store.cooperativa).toEqual(null);
    expect(store.cooperativas).toEqual([]);
    expect(store.agencias).toEqual([]);
    expect(store.carregando).toEqual(true);
    expect(store.erro).toEqual(false);
  });

  it('deve alterar valor de agencia', () => {
    store.setAgencia('mockAgencia');
    expect(store.agencia).toEqual('mockAgencia');
  });

  it('deve alterar valor de cooperativa', () => {
    store.setCooperativa('mockCooperativa');
    expect(store.cooperativa).toEqual('mockCooperativa');
  });

  describe('carregarElementos()', () => {
    beforeEach(() => {
      const mockCooperativa = {value: 'mockCooperativa'};
      const mockAgencia = {value: 'mockAgencia'};
      API.buscarAgencias = jest.fn().mockResolvedValue([mockAgencia]);
      API.buscarCooperativas = jest.fn().mockResolvedValue([mockCooperativa]);
    });

    it('deve chamar buscarAgencias, buscarCooperativas e definir agencia e cooperativa e carregando', async () => {
      await store.carregarElementos();
      expect(API.buscarAgencias).toHaveBeenCalled();
      expect(API.buscarCooperativas).toHaveBeenCalled();
      expect(store.carregando).toEqual(false);
    });

    it('deve definir erro como true quando buscarAgencias falhar e definir carregando', async () => {
      API.buscarAgencias = jest.fn().mockRejectedValue({});
      await store.carregarElementos();
      expect(store.erro).toEqual(true);
      expect(store.carregando).toEqual(false);
    });

    it('deve definir erro como true quando buscarCooperativas falhar e definir carregando', async () => {
      API.buscarCooperativas = jest.fn().mockRejectedValue({});
      await store.carregarElementos();
      expect(store.erro).toEqual(true);
      expect(store.carregando).toEqual(false);
    });
  });
});