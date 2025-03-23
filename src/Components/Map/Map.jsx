import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import * as shapefile from 'shapefile';

const GeoJSONLayer = ({ data }) => {
  const map = useMap();

  // Fit the map to the GeoJSON bounds
  useEffect(() => {
    if (data) {
      const bounds = L.geoJSON(data).getBounds();
      map.fitBounds(bounds);
    }
  }, [data, map]);

  return <GeoJSON data={data} />;
};

const Map = () => {
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    // Load and parse the shapefile
    shapefile.open("/amos-portfolio/beacons/beacons.shp")
      .then((source) => source.read()
        .then((result) => {
          if (result.done) return;
          setGeojson(result.value); // Parse GeoJSON
        })
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <MapContainer
      style={{ height: "500px", width: "100%" }}
      center={[0, 0]} // Placeholder center
      zoom={2} // Default zoom
      scrollWheelZoom={true} // Enable zoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {geojson && <GeoJSONLayer data={geojson} />}
    </MapContainer>
  );
};

export default Map;
