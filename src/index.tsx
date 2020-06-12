import React from 'react';
import ReactDOM from 'react-dom';
// import Home from "./pages/Home.class";
import Home from "./pages/Home.mobx";
import {Provider} from "mobx-react";
import store from "./store/store";

export default function MobXProvider() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

ReactDOM.render(<Home store={store}/>, document.getElementById('root'));

