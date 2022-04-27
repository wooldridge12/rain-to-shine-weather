import React, { useState } from 'react';


const api = {
    key: "ca85eab17bb6900a1c3e20485e66491f",
    base: "https://api.openweathermap.org/data/2.5/"
}

function RainToShine() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
        }
    }

    // THIS FUNCTION WILL GET TODAYS DATE AND RETURN IN ON THE PAGE!!!
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className={
            (typeof weather.main != "undefined") 
                ? ((weather.main.temp > 16) 
                ? 'rainToShine warm' 
                : 'rainToShine') 
                : 'rainToShine'}>
            <main>
                <div className="searchBox">
                    <input type="text" 
                    className="searchBar" 
                    placeholder="Search..." 
                    onChange={e => setQuery(e.target.value)} 
                    value={query}
                    onKeyPress={search} />
                </div>
                {(typeof weather.main != "undefined") ? (
            <div>
                <div className="locationBox">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weatherBox">
                    {/* To make degrees symbol Mac. Press Option-Shift-8. */}
                    <div className="temp">{Math.round(weather.main.temp)}°C</div>
                    <div className="weather">{weather.weather[0].main}</div> 
            </div>     

                    <br/><br/><br/>

                    {/* &nbsp;  Is very helpful it is none breakspace. puts a space between elements in jsx. */}
            <div className='converterLink'> For a Celsius to Fahrenheit coverter &nbsp;
                <a rel="noopener noreferrer" className="linkLook" target="_blank" href="https://www.google.com/search?q=c+to+f&bih=671&biw=1197&hl=en&sxsrf=APq-WBtLzEAbFpau-eOE2U_HmK0x8uBZJQ%3A1651047440089&ei=EPxoYoSOBcja0PEPkIG6yA0&ved=0ahUKEwiE1rGB57P3AhVILTQIHZCADtkQ4dUDCA4&uact=5&oq=c+to+f&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBQgAEIAEMgQIABBDMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOggIABCABBCxAzoLCC4QgAQQxwEQ0QM6EQguEIAEELEDEIMBEMcBENEDOgoIABCxAxCDARBDOgsIABCABBCxAxCDAToWCC4QgAQQhwIQsQMQgwEQxwEQ0QMQFDoQCC4QgAQQhwIQsQMQgwEQFDoICAAQsQMQgwE6CggAEIAEEIcCEBRKBAhBGABKBAhGGABQAFiPCGC3DGgAcAF4AIABb4gB8gSSAQMyLjSYAQCgAQHAAQE&sclient=gws-wiz">Click Here</a>
            </div>

                </div>
                ) : ('')}
                
            </main>
        </div>
        
    );
}

export default RainToShine;