import React from 'react';
import ReactDOM from 'react-dom';
// import Home from "./pages/Home.class";
// import Home from "./pages/Home.hooks";
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

ReactDOM.render(<MobXProvider/>, document.getElementById('root'));

