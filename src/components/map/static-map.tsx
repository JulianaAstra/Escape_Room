import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map/use-map';
import {Icon, Marker, layerGroup} from 'leaflet';
import { AddressPoint } from '../../const';
import { UrlMarker } from '../../const';

function StaticMap(): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, AddressPoint);

  const defaultCustomIcon = new Icon({
    iconUrl: UrlMarker.UrlMarkerCurrent,
    iconSize: [23, 42],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (map) {
        const markerLayer = layerGroup().addTo(map);
        const marker = new Marker({
          lat: AddressPoint.lat,
          lng: AddressPoint.lng
        });

        marker.setIcon(
          defaultCustomIcon
        )
          .addTo(markerLayer);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [map]);

  return (
    <div className="map">
      <div className="map__container" style={{height: '370px'}} ref={mapRef}/>
    </div>
  );
}

export default StaticMap;
