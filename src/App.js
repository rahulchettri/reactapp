import './App.css';

//new
import Navbar from './components/Navbar';
import News from './components/News';
import React, {useState} from 'react';

export default function App() {


  return (
    <div>
<Navbar title="NewsMonkey"/>
<News psize="3" />



    </div>
  )
}
