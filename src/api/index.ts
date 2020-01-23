import { itensAgencia, itensCooperativa } from "../components/UnicredHeader/UnicredHeader.constants";

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