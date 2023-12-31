import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useFormContext } from '../../context/contextStore';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FydGhhazIwMDEiLCJhIjoiY2xxbW03OGdjMnp4NTJpbm1rczc5dHU2MyJ9.FKA-q4xOhqxLkJu_edMkTA';

const Map = ({ setLatitude, setLongitude }) => {
    const { state, dispatch } = useFormContext();
    let currentMarker = null;
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const initializeMap = () => {
            const newMap = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-74.5, 40],
                zoom: 9,
            });

            const geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
                marker: false,
            });

            newMap.addControl(geocoder);

            newMap.on('load', () => {
                setMap(newMap);
            });

            newMap.on('zoomend', () => {
                dispatch({ type: 'SET_ZOOM', payload: newMap.getZoom() });
            });
        };

        if (!map) initializeMap();

        if (map) {
            map.on('click', handleMapClick)
            if (state.latitude !== '' && state.longitude !== '') {
                const newMarker = new mapboxgl.Marker()
                    .setLngLat([state.longitude, state.latitude])
                    .addTo(map);

                currentMarker = newMarker;
            }
            if(state.zoom>0 && state.latitude !== '' && state.longitude !== '') {
                map.flyTo({
                    center: [state.longitude, state.latitude],
                    zoom: state.zoom,
                });
            }
        }
    }, [map]);


    const handleMapClick = (e) => {
        const { lng, lat } = e.lngLat;

        if (map) {
            if (currentMarker) {
                currentMarker.remove();
            }

            const newMarker = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map);

            currentMarker = newMarker;

            setLatitude(lat)
            setLongitude(lng)
        }
    };

    return (
        <div>
            <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
        </div>
    );
};

export default Map;
