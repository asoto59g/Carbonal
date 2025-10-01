var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Planooriginal_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Plano original<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planooriginal_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9547280.082929, 1192836.193788, -9514855.066269, 1214131.352320]
        })
    });
var format_519611968Derivados_2 = new ol.format.GeoJSON();
var features_519611968Derivados_2 = format_519611968Derivados_2.readFeatures(json_519611968Derivados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_519611968Derivados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_519611968Derivados_2.addFeatures(features_519611968Derivados_2);
var lyr_519611968Derivados_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_519611968Derivados_2, 
                style: style_519611968Derivados_2,
                popuplayertitle: '5-1961-1968 Derivados',
                interactive: true,
    title: '5-1961-1968 Derivados<br />\
    <img src="styles/legend/519611968Derivados_2_0.png" /> NO<br />\
    <img src="styles/legend/519611968Derivados_2_1.png" /> SI<br />' });
var format_519611968Reubicado_3 = new ol.format.GeoJSON();
var features_519611968Reubicado_3 = format_519611968Reubicado_3.readFeatures(json_519611968Reubicado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_519611968Reubicado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_519611968Reubicado_3.addFeatures(features_519611968Reubicado_3);
var lyr_519611968Reubicado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_519611968Reubicado_3, 
                style: style_519611968Reubicado_3,
                popuplayertitle: '5-1961-1968 Reubicado',
                interactive: true,
                title: '<img src="styles/legend/519611968Reubicado_3.png" /> 5-1961-1968 Reubicado'
            });
var format_519611968Original_4 = new ol.format.GeoJSON();
var features_519611968Original_4 = format_519611968Original_4.readFeatures(json_519611968Original_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_519611968Original_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_519611968Original_4.addFeatures(features_519611968Original_4);
var lyr_519611968Original_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_519611968Original_4, 
                style: style_519611968Original_4,
                popuplayertitle: '5-1961-1968 Original',
                interactive: true,
                title: '<img src="styles/legend/519611968Original_4.png" /> 5-1961-1968 Original'
            });
var format_DatosMunicipalidad_5 = new ol.format.GeoJSON();
var features_DatosMunicipalidad_5 = format_DatosMunicipalidad_5.readFeatures(json_DatosMunicipalidad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatosMunicipalidad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatosMunicipalidad_5.addFeatures(features_DatosMunicipalidad_5);
var lyr_DatosMunicipalidad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DatosMunicipalidad_5, 
                style: style_DatosMunicipalidad_5,
                popuplayertitle: 'Datos Municipalidad',
                interactive: true,
                title: '<img src="styles/legend/DatosMunicipalidad_5.png" /> Datos Municipalidad'
            });
var lyr_Zona1_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://siri.snitcr.go.cr/Geoservicios/wms?request%3DGetCapabilities",
                              attributions: ' ',
                              params: {
                                "LAYERS": "catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Zona 1',
                            popuplayertitle: 'Zona 1',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Zona1_6, 1]);

lyr_googlesatellitehybrid_0.setVisible(true);lyr_Planooriginal_1.setVisible(false);lyr_519611968Derivados_2.setVisible(true);lyr_519611968Reubicado_3.setVisible(false);lyr_519611968Original_4.setVisible(false);lyr_DatosMunicipalidad_5.setVisible(false);lyr_Zona1_6.setVisible(false);
var layersList = [lyr_googlesatellitehybrid_0,lyr_Planooriginal_1,lyr_519611968Derivados_2,lyr_519611968Reubicado_3,lyr_519611968Original_4,lyr_DatosMunicipalidad_5,lyr_Zona1_6];
lyr_519611968Derivados_2.set('fieldAliases', {'id': 'id', 'Finca': 'Finca', 'NoRegistra': 'NoRegistra', 'Plano': 'Plano', 'Posesoria': 'Posesoria', 'AreaHa': 'AreaHa', 'PlanoenMun': 'PlanoenMun', 'FincaMuni': 'FincaMuni', });
lyr_519611968Reubicado_3.set('fieldAliases', {'id': 'id', 'AreaHa': 'AreaHa', });
lyr_519611968Original_4.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_DatosMunicipalidad_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Identifica': 'Identifica', 'Duplicado': 'Duplicado', 'Horizontal': 'Horizontal', 'Finca': 'Finca', 'Plano': 'Plano', 'Bloque': 'Bloque', 'Predio': 'Predio', 'Parcela': 'Parcela', 'Situacion': 'Situacion', 'Condicion': 'Condicion', 'Observacio': 'Observacio', 'Expediente': 'Expediente', 'Web': 'Web', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Construido': 'Construido', 'Construi_1': 'Construi_1', 'Residencia': 'Residencia', 'Comercial': 'Comercial', 'Cantidad_d': 'Cantidad_d', 'GlobalID': 'GlobalID', });
lyr_519611968Derivados_2.set('fieldImages', {'id': 'TextEdit', 'Finca': 'TextEdit', 'NoRegistra': 'TextEdit', 'Plano': 'TextEdit', 'Posesoria': 'TextEdit', 'AreaHa': 'TextEdit', 'PlanoenMun': 'TextEdit', 'FincaMuni': '', });
lyr_519611968Reubicado_3.set('fieldImages', {'id': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_519611968Original_4.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_DatosMunicipalidad_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Identifica': 'TextEdit', 'Duplicado': 'TextEdit', 'Horizontal': 'TextEdit', 'Finca': 'TextEdit', 'Plano': 'TextEdit', 'Bloque': 'TextEdit', 'Predio': 'TextEdit', 'Parcela': 'TextEdit', 'Situacion': 'TextEdit', 'Condicion': 'TextEdit', 'Observacio': 'TextEdit', 'Expediente': 'TextEdit', 'Web': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Construido': 'TextEdit', 'Construi_1': 'TextEdit', 'Residencia': 'TextEdit', 'Comercial': 'TextEdit', 'Cantidad_d': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_519611968Derivados_2.set('fieldLabels', {'id': 'inline label - always visible', 'Finca': 'inline label - always visible', 'NoRegistra': 'inline label - always visible', 'Plano': 'inline label - always visible', 'Posesoria': 'inline label - always visible', 'AreaHa': 'inline label - always visible', 'PlanoenMun': 'inline label - always visible', 'FincaMuni': 'inline label - always visible', });
lyr_519611968Reubicado_3.set('fieldLabels', {'id': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_519611968Original_4.set('fieldLabels', {'id': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_DatosMunicipalidad_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Identifica': 'inline label - always visible', 'Duplicado': 'inline label - always visible', 'Horizontal': 'inline label - always visible', 'Finca': 'inline label - visible with data', 'Plano': 'inline label - always visible', 'Bloque': 'inline label - always visible', 'Predio': 'inline label - always visible', 'Parcela': 'inline label - always visible', 'Situacion': 'inline label - always visible', 'Condicion': 'inline label - always visible', 'Observacio': 'inline label - always visible', 'Expediente': 'inline label - always visible', 'Web': 'inline label - always visible', 'Shape__Are': 'inline label - always visible', 'Shape__Len': 'inline label - always visible', 'Construido': 'inline label - always visible', 'Construi_1': 'inline label - always visible', 'Residencia': 'inline label - always visible', 'Comercial': 'inline label - always visible', 'Cantidad_d': 'inline label - always visible', 'GlobalID': 'inline label - always visible', });
lyr_DatosMunicipalidad_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});