import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map/use-map';
import {Icon, Marker, layerGroup} from 'leaflet';
import { CITY } from '../../const';
import { Point } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  points: Point[];
  selectedPoint: Point | undefined;
}

function Map({points, selectedPoint}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location['coords'][0],
          lng: point.location['coords'][1]
        });

        marker.setIcon(
          selectedPoint !== undefined && point.id === selectedPoint.id ? currentCustomIcon : defaultCustomIcon
        )
          .addTo(markerLayer);
      });

    }
  }, [map, points]);

  return (
    <div className="map">
      <div className="map__container" style={{height: '529px'}} ref={mapRef}/>
    </div>
  );
}

export default Map;

