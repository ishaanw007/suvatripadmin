import React from 'react'
import { usePlacesWidget } from "react-google-autocomplete";

function AutocompleteCity({ selectedCity, setSelectedCity, setCityValue }) {

    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: 'AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0',
        onPlaceSelected: (place) => {
            setCityValue(place.address_components[0].long_name);
            setSelectedCity(place.address_components[0].long_name);
        },
        options: {
            types: ["(cities)"]
        },
    });

    return (

        <input
            type="text"
            name="city"
            placeholder="Enter your City"
            value={selectedCity}
            ref={ref}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400"
        />

    )
}

export default AutocompleteCity