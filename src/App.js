import React,{useState} from 'react'


const App = () => {
    const[city, setCity] = useState("")
    const[result, setResult] = useState("")
    const onchangeHandler = e =>{
        setCity(e.target.value);
    }
    const onsubmitHandler = e =>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e9985c32713152286761c29977a5763`).then(
            response => response.json()
        ).then(data => {
            const kelvin = data.main.temp;
            const celcius = kelvin - 273;
            setResult('Temperature at' +" " +city + " " + Math.round(celcius))
            setCity("")
            
        })
        
    }
  return (
    <div className='container'>
        <center>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>Weather App</h3><br />
                    <form onSubmit={onsubmitHandler} className="form1">
                        <input className='search' type="text" placeholder='Enter Your City' name='city' value={city} onChange={onchangeHandler}/>{" "}<br /><br />
                        <input className="temp"type='submit' value='Get Temperature' />
                    </form>
                    <h2>{result}&deg;C</h2>
                </div>
            </div>
        </center>
    </div>
  )
}

export default App