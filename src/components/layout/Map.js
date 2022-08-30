import React, { useState } from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {FeatureGroup, Marker, Popup, useMapEvents} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

function Map() {
    const defaultPos = {
        lat: -22.0985498,
        lng: -51.4170715,
        name: 'Estádio Prudentão',
    };

    const centerMap = defaultPos;
    const markers = [defaultPos];

    // Descobrir a posição e redirecionar para o local
    function LocationMarker() {
        const [position, setPosition] = useState(null);

        const map = useMapEvents({
            click() {
                map.locate();
            },
            locationfound(e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
            },
        });

        return position === null ? null : (
            <p>
                Latitude: {position.lat.toFixed(2)}, longitude: {position.lng.toFixed(2)}{' '}
            </p>
        )
    }

    function displayMarkersNames() {
        return markers.map((marker, index) => {
            return <span key={index}>{marker.name}</span>
        })
    }


    // Definindo contantes para os eventos

    const _onCreated = e => {
        console.log(e, '_onCreated');
    };

    const _onEdited = e => {
        console.log(e, '_onEdited');
    };

    const _onDeleted = e => {
        console.log(e, '_onDeleted');
    };

    return (
        <div>
            <h1>{centerMap.name}</h1>
            <p>Latitude: { centerMap.lat.toFixed(2) }, Longitude: { centerMap.lng.toFixed(2) }</p>

            <div className="markers">
                <strong>Markers: </strong>
                {displayMarkersNames()}
            </div>

            <MapContainer
                center={centerMap}
                zoom={15}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={centerMap} alt="Marker">
                    <Popup>You are here</Popup>
                </Marker>
                <LocationMarker className="markers" />

                <FeatureGroup>
                    <EditControl
                        position = 'topright'
                        onCreated = {_onCreated}
                        onEdited = {_onEdited}
                        onDeleted = {_onDeleted}
                        draw = {{
                            rectangle : false,
                            polyline : false,
                            circle : false,
                            circlemarker : false,
                            marker : false,
                        }}
                    />
                </FeatureGroup>
            </MapContainer>
        </div>
    )
}

export default Map;
