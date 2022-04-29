import React from 'react';
import { Provider } from 'react-redux';
import CardList from './components/cardList/CardList';
import ComponentContainer from './components/componentContainer/ComponentContainer';
import Formulario from './components/formulario/Formulario';
import Menu from './components/menu/Menu';
import ModalComponent from './components/modal/Modal';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <div className="container">
        <h1>iAmSebastian</h1>
        <CardList />
      </div>
      {/* <ModalComponent>
        <Formulario />
      </ModalComponent> */}
      <ComponentContainer />
    </Provider>
  );
};

export default App;
