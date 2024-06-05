import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LeafletMap = ({ center, zoom, markers }) => {
    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position}>
                    <Popup>{marker.popupText}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

const App = () => {
    const mapCenter = [51.505, -0.09];
    const mapZoom = 13;
    const mapMarkers = [
        {
            position: [51.505, -0.09],
            popupText: 'Marker 1'
        },
        {
            position: [51.515, -0.1],
            popupText: 'Marker 2'
        },
        {
            position: [51.52, -0.12],
            popupText: 'Marker 3'
        },
        {
            position: [51.521, -0.12],
            popupText: 'Marker 3'
        }
    ];

    return (
        <div className="App ">
            <h1 className="py-50 text-center">CITIES WE DELIVER TO</h1>
            <LeafletMap center={mapCenter} zoom={mapZoom} markers={mapMarkers} />
        </div>
    );
};

export default App;
