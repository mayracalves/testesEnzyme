import React, {useEffect, useState} from "react";

const Home: React.FC = () => {

    const [valor, setarValor] = useState(0);

    useEffect(() => {

    }, [valor]);

    return (
        <div className="App" onClick={() => setarValor(valor + 1)}>
            olá mundo {valor}
        </div>
    );
};

export default Home;