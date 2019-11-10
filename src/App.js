import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './App.css';
import Header from './components/Header';
import RentalList from './components/RentalList';
import RentalDetail from './components/RentalDetail';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
