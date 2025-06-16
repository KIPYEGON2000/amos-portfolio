import React, { useState } from 'react';
import './Map.css'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import * as turf from '@turf/turf';
import 'leaflet/dist/leaflet.css';

const InteractionLayer = ({ mode, points, setPoints, buffers, setBuffers }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      if (mode === 'point') {
        setPoints((prev) => [...prev, { lat, lng }]);
      } else if (mode === 'buffer') {
        const point = turf.point([lng, lat]);
        const buffer = turf.buffer(point, 0.5, { units: 'kilometers' });
        setBuffers((prev) => [...prev, buffer]);
      }
    },
  });
  return null;
};

const MapWithTurf = () => {
  const [points, setPoints] = useState([]);
  const [buffers, setBuffers] = useState([]);
  const [mode, setMode] = useState('point');

  const distance =
    points.length >= 2
      ? turf.distance(
          turf.point([points[0].lng, points[0].lat]),
          turf.point([points[1].lng, points[1].lat]),
          { units: 'kilometers' }
        ).toFixed(2)
      : null;

  const exportGeoJSON = () => {
    const geojson = turf.featureCollection(buffers);
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(geojson))}`;
    triggerDownload(dataStr, 'buffers.geojson');
  };

  const exportPointsGeoJSON = () => {
    const features = points.map((pt, i) =>
      turf.point([pt.lng, pt.lat], { id: i + 1 })
    );
    const geojson = turf.featureCollection(features);
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(geojson))}`;
    triggerDownload(dataStr, 'points.geojson');
  };

  const exportPointsCSV = () => {
    const csvHeader = 'id,latitude,longitude\n';
    const csvRows = points.map((pt, idx) => `${idx + 1},${pt.lat},${pt.lng}`).join('\n');
    const csvData = `data:text/csv;charset=utf-8,${csvHeader}${csvRows}`;
    triggerDownload(csvData, 'points.csv');
  };

  const triggerDownload = (dataStr, filename) => {
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <MapContainer center={[-1.29, 36.82]} zoom={10} style={{ height: '60vh' }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <InteractionLayer
          mode={mode}
          points={points}
          setPoints={setPoints}
          buffers={buffers}
          setBuffers={setBuffers}
        />

        {points.map((pt, idx) => (
          <Marker key={idx} position={[pt.lat, pt.lng]}>
            <Popup>
              <strong>Point #{idx + 1}</strong>
              <br />
              Lat: {pt.lat.toFixed(5)}, Lng: {pt.lng.toFixed(5)}
            </Popup>
          </Marker>
        ))}

        {buffers.map((buffer, idx) => (
          <GeoJSON key={idx} data={buffer} style={{ color: 'blue', weight: 2 }} />
        ))}
      </MapContainer>

      <div style={{ padding: '1rem' }}>
        <button onClick={() => setMode('point')} style={{ marginRight: '0.5rem' }}>
          ➕ Add Point
        </button>
        <button onClick={() => setMode('buffer')} style={{ marginRight: '0.5rem' }}>
          ⭕ Add Buffer
        </button>
        <button onClick={exportPointsCSV} style={{ marginRight: '0.5rem' }}>
          📄 Export Points CSV
        </button>
        <button onClick={exportPointsGeoJSON} style={{ marginRight: '0.5rem' }}>
          🌐 Export Points GeoJSON
        </button>
        <button onClick={exportGeoJSON}>🗂️ Export Buffers GeoJSON</button>

        {distance && (
          <p style={{ marginTop: '1rem' }}>
            Distance between first 2 points: <strong>{distance} km</strong>
          </p>
        )}
      </div>
    </>
  );
};

export default MapWithTurf;
