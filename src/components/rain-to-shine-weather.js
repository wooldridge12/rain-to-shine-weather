import React from 'react';

const api = {
    key: "ca85eab17bb6900a1c3e20485e66491f",
    base: "https://api.openweathermap.org/data/2.5/"
}

function RainToShine() {

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
        <div className="rainToShine">
            <main>
                <div className="searchBox">
                    <input type="text" className="searchBar" placeholder="Search..." />
                </div>
                <div className="locationBox">
                    <div className="location">Richmond, KY, US</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weatherBox">
                    {/* To make degrees symbol Mac. Press Option-Shift-8. */}
                    <div className="temp">32°F</div>
                    <div className="weather">Sunny</div>
                </div>

            </main>
        </div>
    );
}

export default RainToShine;