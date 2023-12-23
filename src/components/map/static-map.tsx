import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map/use-map';
import {Icon, Marker, layerGroup} from 'leaflet';
import { ADDRESS } from '../../const';
import { URL_MARKER_CURRENT } from '../../const';

function StaticMap(): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, ADDRESS);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [23, 42],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const marker = new Marker({
        lat: ADDRESS.lat,
        lng: ADDRESS.lng
      });

      marker.setIcon(
        defaultCustomIcon
      )
        .addTo(markerLayer);
    }
  }, [map]);

  return (
    <div className="map">
      <div className="map__container" style={{height: '370px'}} ref={mapRef}/>
    </div>
  );
}

export default StaticMap;
