var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'الدولة',
                interactive: true,
    title: 'الدولة<br />\
    <img src="styles/legend/_0_0.png" /> ٧٩٢ - ٢٢٠٦٦<br />\
    <img src="styles/legend/_0_1.png" /> ٢٢٠٦٦ - ١٦٣٧٢٨<br />\
    <img src="styles/legend/_0_2.png" /> ١٦٣٧٢٨ - ٥٥٥٥٨١<br />\
    <img src="styles/legend/_0_3.png" /> ٥٥٥٥٨١ - ١٢٣٥٥٨١<br />\
    <img src="styles/legend/_0_4.png" /> ١٢٣٥٥٨١ - ٢٩٩٨٨٩٤<br />' });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
cluster__1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__1
});
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:cluster__1, 
                style: style__1,
                popuplayertitle: 'عددالسكان',
                interactive: false,
    title: 'عددالسكان<br />\
    <img src="styles/legend/_1_0.png" /> ٥٠٠٠٠٠ - ١٠٠٠٠٠٠٠٠٠<br />\
    <img src="styles/legend/_1_1.png" /> ١٠٠٠٠٠٠٠ - ٣٠٠٠٠٠٠٠<br />\
    <img src="styles/legend/_1_2.png" /> ٣٠٠٠٠٠٠٠ - ٥٠٠٠٠٠٠٠<br />\
    <img src="styles/legend/_1_3.png" /> ٥٠٠٠٠٠٠٠ - ٧٠٠٠٠٠٠٠<br />\
    <img src="styles/legend/_1_4.png" /> ٧٠٠٠٠٠٠٠ - ٩٠٠٠٠٠٠٠<br />\
    <img src="styles/legend/_1_5.png" /> ٩٠٠٠٠٠٠ - ١١٠٠٠٠٠٠٠<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'حدودالدول',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> حدودالدول'
            });

lyr__0.setVisible(false);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
lyr__0.set('fieldAliases', {'Mame_AR': 'Mame_AR', 'population': 'population', 'area': 'area', 'العاص': 'العاص', });
lyr__1.set('fieldAliases', {'CURR_TYPE': 'CURR_TYPE', 'Mame_AR': 'Mame_AR', 'population': 'population', 'area': 'area', 'العاص': 'العاص', });
lyr__2.set('fieldAliases', {'FID_arbicc': 'FID_arbicc', 'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', 'Mame_AR': 'Mame_AR', 'population': 'population', 'area': 'area', });
lyr__0.set('fieldImages', {'Mame_AR': 'TextEdit', 'population': 'TextEdit', 'area': 'TextEdit', 'العاص': 'TextEdit', });
lyr__1.set('fieldImages', {'CURR_TYPE': 'TextEdit', 'Mame_AR': 'TextEdit', 'population': 'TextEdit', 'area': 'TextEdit', 'العاص': 'TextEdit', });
lyr__2.set('fieldImages', {'FID_arbicc': 'TextEdit', 'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM_CNTRY': 'TextEdit', 'SQMI_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'COLOR_MAP': 'TextEdit', 'Mame_AR': 'TextEdit', 'population': 'TextEdit', 'area': 'TextEdit', });
lyr__0.set('fieldLabels', {'Mame_AR': 'inline label - always visible', 'population': 'inline label - always visible', 'area': 'inline label - visible with data', 'العاص': 'inline label - always visible', });
lyr__1.set('fieldLabels', {'CURR_TYPE': 'no label', 'Mame_AR': 'no label', 'population': 'no label', 'area': 'no label', 'العاص': 'no label', });
lyr__2.set('fieldLabels', {'FID_arbicc': 'no label', 'FIPS_CNTRY': 'no label', 'GMI_CNTRY': 'no label', 'CNTRY_NAME': 'no label', 'SOVEREIGN': 'no label', 'POP_CNTRY': 'no label', 'SQKM_CNTRY': 'no label', 'SQMI_CNTRY': 'no label', 'CURR_TYPE': 'no label', 'CURR_CODE': 'no label', 'LANDLOCKED': 'no label', 'COLOR_MAP': 'no label', 'Mame_AR': 'no label', 'population': 'no label', 'area': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});