import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map/use-map';
import {Icon, Marker, featureGroup} from 'leaflet';
import { CITY } from '../../const';
import { Point } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  points: Point[];
  selectedPointId: string;
  clickHandler: (point: string) => void;
}

function Map({points, selectedPointId, clickHandler}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [23, 42],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [23, 42],
    iconAnchor: [20, 40],
  });

  const onMarkerClick = (pointId: string) => clickHandler(pointId);

  useEffect(() => {
    if (map) {
      const markerLayer = featureGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location['coords'][0],
          lng: point.location['coords'][1]
        });

        marker.setIcon(
          selectedPointId !== undefined && point.id === selectedPointId ? currentCustomIcon : defaultCustomIcon
        )
          .on('click', () => onMarkerClick(point.id))
          .addTo(markerLayer);
      });

    }
  }, [map, points, selectedPointId]);

  return (
    <div className="map">
      <div className="map__container" style={{height: '529px'}} ref={mapRef}/>
    </div>
  );
}

export default Map;

