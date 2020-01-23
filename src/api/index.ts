import { itensAgencia, itensCooperativa } from "../components/Header/Header.constants";

export default {
    buscarAgencias() {
        return Promise.resolve(itensAgencia);
    },
    buscarCooperativas() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(itensCooperativa), 2000);
        });
    },
};