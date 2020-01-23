import React, {useEffect, useState} from 'react';

const App: React.FC = () => {

    const [valor, setarValor] = useState(0);

    useEffect(() => {
        console.log('executou o useEffects');
    }, [valor]);

    return (
        <div className="App" onClick={() => setarValor(valor + 1)}>
          olá mundo {valor}
        </div>
      );
};

export default App;
