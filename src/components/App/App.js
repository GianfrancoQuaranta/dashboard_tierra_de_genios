// import de react
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import css
import './App.css';

// import componentess
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import TotalesBox from '../totalesBox/TotalesBox';
import LastProductInDB from '../lastProductInDB/LastProductInDB';
import ProductsInDB from '../productsInDB/ProductsInDB';
import Table from '../table/Table';
import Error from '../error/Error';


function App() {
  return (
    <div id='div-app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/totales' component={TotalesBox} />
        <Route path='/lastProduct' component={LastProductInDB} />
        <Route path='/inDB' component={ProductsInDB} />
        <Route path='/usersTable' component={Table} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
