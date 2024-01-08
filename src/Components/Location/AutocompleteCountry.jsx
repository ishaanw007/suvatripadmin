import React from 'react'
import { usePlacesWidget } from "react-google-autocomplete";

function AutocompleteCountry({selectedCountry, setSelectedCountry, setCountryValue}) {

    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: 'AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0',
        onPlaceSelected: (place) => {
            setCountryValue(place.address_components[0].long_name);
            setSelectedCountry(place.address_components[0].long_name);
        },
        options: {
            types: ["country"]
        },
    });

    return (

        <input
            type="text"
            name="country"
            placeholder="Enter your Country"
            value={selectedCountry}
            ref={ref}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400"
        />

    )
}

export default AutocompleteCountry