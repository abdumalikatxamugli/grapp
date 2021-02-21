import React, { useState } from 'react';
import { Main } from './screens';
import { Sidemenu } from './components';
import { Contract21 } from "./screens";
import './assets/style.css';
import './assets/dogovor.css';
import './assets/login.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import WithAuth from "./hocs/withAuth.js";

function App() {

  const [menu, setMenu] = useState(21);
  const changeMenu = (idx) => {
    document.getElementsByTagName("body")[0].classList.add('closed-sidemenu');
    setMenu(idx);
  }
  return (
    <Provider store={store}>
      <WithAuth>
        <Sidemenu setMenu={changeMenu} />
        {menu === 0 && <Main />}
        {menu === 21 && <Contract21 />}
      </WithAuth>
    </Provider>
  );
}

export default App;
