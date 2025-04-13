import React, { useCallback, useMemo, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Rectangle,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const position = [-1.29,36.82 ]

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

const BOUNDS_STYLE = { weight: 1 };


const MinimapBounds = ({ parentMap, zoom }) => {
  const minimap = useMap();

  // Click handler to center main map when clicking minimap
  const onClick = useCallback(
    (e) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap]
  );
  useMapEvents({ click: onClick });

  // State and effect to keep bounds synchronized
  const [bounds, setBounds] = useState(parentMap.getBounds());
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

 
  const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [onChange]);
  useMapEvents(handlers);

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
};

// MinimapControl is the actual minimap component
const MinimapControl = ({ position = 'topright', zoom = 0 }) => {
  const parentMap = useMap();

  const minimap = useMemo(
    () => (
      <MapContainer
        style={{ height: 60, width: 70 }}
        center={parentMap.getCenter()}
        zoom={zoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={zoom} />
      </MapContainer>
    ),
    [parentMap, zoom]
  );

  return (
    <div className={POSITION_CLASSES[position]}>
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  );
};

// Main Map component with minimap
const MapWithMinimap = ({ 
  center = [-1.29,36.82 ], 
  zoom = 10, 
  minimapPosition = 'topright',
  minimapZoom = 9
}) => {
  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height: '60vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
 
 
      <MinimapControl position={minimapPosition} zoom={minimapZoom} />
    </MapContainer>
  );
};

export default MapWithMinimap;