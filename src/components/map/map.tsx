import 'leaflet/dist/leaflet.css';
import {useRef, useEffect, memo} from 'react';
import useMap from '../../hooks/use-map/use-map';
import {Icon, Marker, featureGroup} from 'leaflet';
import { CityPoint } from '../../const';
import { Point } from '../../types/types';
import { UrlMarker } from '../../const';

type MapProps = {
  points: Point[];
  selectedPointId: string | null;
  clickHandler: (point: string) => void;
}

function MapComponent({points, selectedPointId, clickHandler}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, CityPoint);

  const defaultCustomIcon = new Icon({
    iconUrl: UrlMarker.UrlMarkerDefault,
    iconSize: [23, 42],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: UrlMarker.UrlMarkerCurrent,
    iconSize: [23, 42],
    iconAnchor: [20, 40],
  });

  const handleMarkerClick = (pointId: string) => clickHandler(pointId);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
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
            .on('click', () => handleMarkerClick(point.id))
            .addTo(markerLayer);
        });
      }
    }

    return () => {
      isMounted = false;
    };
  }, [map, points, selectedPointId]);

  return (
    <div className="map">
      <div className="map__container" style={{height: '529px'}} ref={mapRef}/>
    </div>
  );
}

export const Map = memo(MapComponent);


