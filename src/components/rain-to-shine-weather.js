import React from 'react';

const api = {
    key: "ca85eab17bb6900a1c3e20485e66491f",
    base: "https://api.openweathermap.org/data/2.5/"
}

function RainToShine() {
    return (
        <div className="rainToShine">
            <main>
                <div className="searchBox">
                    <input type="text" className="searchBar" placeholder="Search..." />
                </div>

            </main>
        </div>
    );
}

export default RainToShine;