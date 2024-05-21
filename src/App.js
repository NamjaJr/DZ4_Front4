import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {useEffect, useState} from "react";


function App() {
  const [value,setValue] = useState({name:'',lastname:''})
  useEffect(() => {
    const userName = prompt('Введите ваше имя')
    const userLastname = prompt('Введите вашу фамилию')
    if (userName !== null && userLastname !== null){
      setValue({name: userName,lastname: userLastname})
    }
  }, []);


  if (value.name === 'John' && value.lastname === 'Johns'){
    return(
        <MainPage user={value}/>
    )
  }else {
    return(
        <ErrorPage user={value}/>
    )
  }
}

export default App;
