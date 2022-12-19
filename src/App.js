import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App(){
     return (
       <div className='app-container'>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
       </div>
     )  
}
 
  
          






export default App;
