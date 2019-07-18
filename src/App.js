import React, { Fragment, useEffect } from 'react';

import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';
import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Initializes Materialize JS
    M.AutoInit();
  })
  return (
    <Fragment className="App">
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <AddTechModal />
        <EditLogModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  )
}

export default App;