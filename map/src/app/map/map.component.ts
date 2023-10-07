import { NONE_TYPE } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet-wms-header';
import {Observable} from 'rxjs';

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input()
  featureColletion!: GeoJSON.FeatureCollection;

  map!: Leaflet.Map;

  markers: Leaflet.Marker[] = [];

  /*options = {
    layers: [
      Leaflet.TileLayer.wmsHeader('http://localhost:8000/ows?', {
        layers: 'SRTM30-Colored-Hillshade'
      },
      [
        { header: 'Authentication', value: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMH0.UgtZbX1R10W4JsyJA-hvHxa3wltj4jljw-6zU_a2fFY' },
      ],
      null,
      null,
      ),
    ],
    zoom: 8,
    center: { lng: 20.17579828033186, lat: 50.43817144362623 }
  }*/

  options = {
    layers: [
      Leaflet.tileLayer('http://localhost:9000/tile/{z}/{x}/{y}.png'),
    ],
    zoom: 8,
    center: { lng: 19.903266, lat: 50.052539 }
  }

  initializeData() {
    const features = this.featureColletion.features;
    for (let i = 0; i < features.length; i++) {
      const feature: GeoJSON.Feature = features[i];
      let properties = feature.properties ?? {};

      Leaflet.geoJSON(feature).addTo(this.map)
       .bindTooltip(properties['tooltip'])
       .bindPopup(`<b>${properties['description']}</b>`)
    }
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initializeData();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }

  // example of creating draggable marker
  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  // example of creating polyline
  generatePolyline() {
    var polyline = Leaflet.polyline([{ lat: 28.625485, lng: 79.821091 }, { lat: 28.625293, lng: 79.817926 }, { lat: 28.625182, lng: 79.81464 }]);
    polyline.addTo(this.map);
  }

}
