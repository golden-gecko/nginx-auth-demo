import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mapCenter = { lng: 20.17579828033186, lat: 50.43817144362623 }
  
  inputData: GeoJSON.FeatureCollection = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "tooltip": "Point A",
          "description": "description Point A",
        },
        "geometry": {
          "coordinates": [
            20.695046327909182,
            50.17479144407329
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "tooltip": "Point B",
          "description": "description Point B"
        },
        "geometry": {
          "coordinates": [
            20.197143044413565,
            50.074256632096024
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "tooltip": "Point C",
          "description": "description Point C",
        },
        "geometry": {
          "coordinates": [
            20.36790115706583,
            50.682243960994896
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "tooltip": "Point D",
          "description": "description Point D",
        },
        "geometry": {
          "coordinates": [
            20.17579828033186,
            50.43817144362623
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "tooltip": "Line A",
          "description": "description Line A",
        },
        "geometry": {
          "coordinates": [
            [
              20.69714708640683,
              50.17433786141996
            ],
            [
              20.20153607583316,
              50.07378417621186
            ],
            [
              20.172259476052375,
              50.442780794798864
            ],
            [
              20.548672901805162,
              50.27468037680964
            ]
          ],
          "type": "LineString"
        }
      }
    ]
  }

}
