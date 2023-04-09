import React, { useEffect } from "react";
import { loadModules } from "esri-loader";

const MapView = () => {
  useEffect(() => {
    const options = {
      css: true,
    };

    loadModules(
      [
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/widgets/BasemapToggle",
        "esri/widgets/BasemapGallery",
      ],
      options
    ).then(([esriConfig, Map, MapView, BasemapToggle, BasemapGallery]) => {
      esriConfig.apiKey =
        "AAPK29cb7298524d4222a5831ca5571e40e0Vwik9FcsyG9CTix_j9NFMzVBlZ2RHWrDVI_eFH0wLIscXR-aFCIwhum_PV9FBEuR";

      const map = new Map({
        basemap: "arcgis-topographic",
      });

      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.80543, 34.027],
        zoom: 13,
      });

      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery",
      });

      view.ui.add(basemapToggle, "bottom-right");

      const basemapGallery = new BasemapGallery({
        view: view,
        source: {
          query: {
            title: '"World Basemaps for Developers" AND owner:esri',
          },
        },
      });

      view.ui.add(basemapGallery, "top-right");
    });
  }, []);

  return (
    <div
      id="viewDiv"
      style={{
        height: "100vh",
      }}
    ></div>
  );
};

export default MapView;
