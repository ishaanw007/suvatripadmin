import React, { useRef, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useFormContext } from '../../context/contextStore';

const MapComponent = (props) => {
  const mapRef = useRef(null);
  const autocompleteInput = useRef(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  let autocomplete = null;
  const { state, dispatch } = useFormContext();

  useEffect(() => {
    autocomplete = new window.google.maps.places.Autocomplete(autocompleteInput.current);
    autocomplete.addListener('place_changed', onPlaceChanged);

    const map = mapRef.current.map;
    let clickListener = null;
  
    if (map) {
      // Add event listener for map click
      if(state.latitude!=='' && state.longitude!=='') {
        setClickedLocation({
          lat: state.latitude,
          lng: state.longitude,
        });
      }
      clickListener = map.addListener('click', (event) => {
        const newLocation = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        props.setLatitude(event.latLng.lat());
        props.setLongitude(event.latLng.lng());
        setSelectedPlace(null);
        setClickedLocation(newLocation);
        // zoomToPlace(newLocation);
      });
    }
  
    return () => {
      // Remove event listener when component unmounts
      if (clickListener && map) {
        window.google.maps.event.removeListener(clickListener);
      }
    };
  }, []);


  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      setSelectedPlace(place);
      setClickedLocation(null);
      zoomToPlace(place.geometry.location);
    }
  };

  // const onMapClick = (mapProps, map, clickEvent) => {
  //   console.log(clickEvent, 'ccc');
  //   const newLocation = {
  //     lat: clickEvent.latLng.lat(),
  //     lng: clickEvent.latLng.lng(),
  //   };
  //   setSelectedPlace(null);
  //   setClickedLocation(newLocation);
  //   zoomToPlace(newLocation);
  // };

  const zoomToPlace = (location) => {
    const map = mapRef.current.map;
    map.setCenter(location);
    map.setZoom(12); // You can adjust the zoom level as needed
  };

  return (
    <div style={{ height: '400px', width: '100%', border: '1px solid #ccc', position: 'relative' }}>
      <input
        ref={autocompleteInput}
        placeholder="Search for a place"
        type="text"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <Map
        google={props.google}
        zoom={10}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        initialCenter={{
          lat: state.latitude ? state.latitude : 40.7128, // Default latitude
          lng: state.longitude ? state.longitude : -74.0060 // Default longitude
        }}
        ref={mapRef}
      >
        {selectedPlace && (
          <Marker position={selectedPlace.geometry.location} />
        )}
        {clickedLocation && (
          <Marker position={clickedLocation} />
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0'
})(MapComponent);
