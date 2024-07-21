import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  let input = "";
  
  const getCity = () => {
    input = document.getElementById("city").value;
    console.log(input);
    if (input !== "")
      getData();
  };

  // document.getElementById("btn").onclick = getCity;

  //api call
  const getData = async () => {
    const api_url = "http://api.weatherapi.com/v1/current.json?key=6ede66afd1fa4ce3b37100104242001&q="+input+"&aqi=yes";
    const { data } = await axios.get(api_url);

    setCity(data.location.name);
    console.log(setCity);
    setTemp(data.current.temp_c);
  };

  useEffect(() => {
    getCity();
  },);

  return (
    <div>
      <div className="weather mt-4 p-5 bg-dark text-white">
        <label htmlFor="city">Enter City</label>
        <input type="text" name="city" id="city" onSubmit={getCity} placeholder="Find the Weather"/>
        <button onClick={getCity}>Check</button>

        <hr />

        <p>
          <b>City: </b>
          <i>{city}</i>
        </p>
        <p>
          <b>Temperature (in Celsius): </b>
          <i>{temp}°C</i>
        </p>
      </div>      
    </div>
  )
}

export default Weather
