import { useState, useRef } from 'react'
import axios from 'axios';
import './App.css'
import WeatherInformation from './components/WeatherInformation';
import WeatherInformation5Days from './components/WeatherInformation5Days';

function App() {                    /*coloquei o useState vazio pra ele considerar como NULO ao inves de um objeto vazio*/
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState();

  const inputRef = useRef();

  const searchCity = async () => {

    const url5Days = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current.value}&appid=4f3b27c36d8106be91b628d2b4d2e477&units=metric&lang=pt_br`)

    const url = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&appid=4f3b27c36d8106be91b628d2b4d2e477&units=metric&lang=pt_br`)

    setWeather(url.data)
    setWeather5Days(url5Days.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>
      <div className='div-input'>
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
      </div>

      {/* fazendo um if else pq a aplicação tava quebrando */}
      {weather && <WeatherInformation weather={weather} />}

      {weather5Days && <WeatherInformation5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
