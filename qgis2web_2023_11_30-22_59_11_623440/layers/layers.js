var wms_layers = [];

var format_drivedownload20231123T021201Z001SHP3Kecamatan_0 = new ol.format.GeoJSON();
var features_drivedownload20231123T021201Z001SHP3Kecamatan_0 = format_drivedownload20231123T021201Z001SHP3Kecamatan_0.readFeatures(json_drivedownload20231123T021201Z001SHP3Kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drivedownload20231123T021201Z001SHP3Kecamatan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drivedownload20231123T021201Z001SHP3Kecamatan_0.addFeatures(features_drivedownload20231123T021201Z001SHP3Kecamatan_0);
var lyr_drivedownload20231123T021201Z001SHP3Kecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drivedownload20231123T021201Z001SHP3Kecamatan_0, 
                style: style_drivedownload20231123T021201Z001SHP3Kecamatan_0,
                interactive: true,
                title: '<img src="styles/legend/drivedownload20231123T021201Z001SHP3Kecamatan_0.png" /> drive-download-20231123T021201Z-001 — SHP 3 Kecamatan'
            });
var format_drivedownload20231123T021201Z001ShapefileLine_1 = new ol.format.GeoJSON();
var features_drivedownload20231123T021201Z001ShapefileLine_1 = format_drivedownload20231123T021201Z001ShapefileLine_1.readFeatures(json_drivedownload20231123T021201Z001ShapefileLine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drivedownload20231123T021201Z001ShapefileLine_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drivedownload20231123T021201Z001ShapefileLine_1.addFeatures(features_drivedownload20231123T021201Z001ShapefileLine_1);
var lyr_drivedownload20231123T021201Z001ShapefileLine_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drivedownload20231123T021201Z001ShapefileLine_1, 
                style: style_drivedownload20231123T021201Z001ShapefileLine_1,
                interactive: true,
                title: '<img src="styles/legend/drivedownload20231123T021201Z001ShapefileLine_1.png" /> drive-download-20231123T021201Z-001 — Shapefile Line'
            });
var format_drivedownload20231123T021201Z001PLMUGOKENEK2_2 = new ol.format.GeoJSON();
var features_drivedownload20231123T021201Z001PLMUGOKENEK2_2 = format_drivedownload20231123T021201Z001PLMUGOKENEK2_2.readFeatures(json_drivedownload20231123T021201Z001PLMUGOKENEK2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drivedownload20231123T021201Z001PLMUGOKENEK2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drivedownload20231123T021201Z001PLMUGOKENEK2_2.addFeatures(features_drivedownload20231123T021201Z001PLMUGOKENEK2_2);
var lyr_drivedownload20231123T021201Z001PLMUGOKENEK2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drivedownload20231123T021201Z001PLMUGOKENEK2_2, 
                style: style_drivedownload20231123T021201Z001PLMUGOKENEK2_2,
                interactive: true,
                title: '<img src="styles/legend/drivedownload20231123T021201Z001PLMUGOKENEK2_2.png" /> drive-download-20231123T021201Z-001 — PL MUGO KENEK 2'
            });
var format_drivedownload20231123T021201Z001PLMUGOKENEK_3 = new ol.format.GeoJSON();
var features_drivedownload20231123T021201Z001PLMUGOKENEK_3 = format_drivedownload20231123T021201Z001PLMUGOKENEK_3.readFeatures(json_drivedownload20231123T021201Z001PLMUGOKENEK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drivedownload20231123T021201Z001PLMUGOKENEK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drivedownload20231123T021201Z001PLMUGOKENEK_3.addFeatures(features_drivedownload20231123T021201Z001PLMUGOKENEK_3);
var lyr_drivedownload20231123T021201Z001PLMUGOKENEK_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drivedownload20231123T021201Z001PLMUGOKENEK_3, 
                style: style_drivedownload20231123T021201Z001PLMUGOKENEK_3,
                interactive: true,
                title: '<img src="styles/legend/drivedownload20231123T021201Z001PLMUGOKENEK_3.png" /> drive-download-20231123T021201Z-001 — PL MUGO KENEK'
            });

lyr_drivedownload20231123T021201Z001SHP3Kecamatan_0.setVisible(true);lyr_drivedownload20231123T021201Z001ShapefileLine_1.setVisible(true);lyr_drivedownload20231123T021201Z001PLMUGOKENEK2_2.setVisible(true);lyr_drivedownload20231123T021201Z001PLMUGOKENEK_3.setVisible(true);
var layersList = [lyr_drivedownload20231123T021201Z001SHP3Kecamatan_0,lyr_drivedownload20231123T021201Z001ShapefileLine_1,lyr_drivedownload20231123T021201Z001PLMUGOKENEK2_2,lyr_drivedownload20231123T021201Z001PLMUGOKENEK_3];
lyr_drivedownload20231123T021201Z001SHP3Kecamatan_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_drivedownload20231123T021201Z001ShapefileLine_1.set('fieldAliases', {'id': 'id', });
lyr_drivedownload20231123T021201Z001PLMUGOKENEK2_2.set('fieldAliases', {'id': 'id', 'PL': 'PL', 'Luas': 'Luas', });
lyr_drivedownload20231123T021201Z001PLMUGOKENEK_3.set('fieldAliases', {'id': 'id', 'PL': 'PL', });
lyr_drivedownload20231123T021201Z001SHP3Kecamatan_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_drivedownload20231123T021201Z001ShapefileLine_1.set('fieldImages', {'id': '', });
lyr_drivedownload20231123T021201Z001PLMUGOKENEK2_2.set('fieldImages', {'id': '', 'PL': '', 'Luas': '', });
lyr_drivedownload20231123T021201Z001PLMUGOKENEK_3.set('fieldImages', {'id': '', 'PL': '', });
lyr_drivedownload20231123T021201Z001SHP3Kecamatan_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_drivedownload20231123T021201Z001ShapefileLine_1.set('fieldLabels', {'id': 'no label', });
lyr_drivedownload20231123T021201Z001PLMUGOKENEK2_2.set('fieldLabels', {'id': 'no label', 'PL': 'no label', 'Luas': 'no label', });
lyr_drivedownload20231123T021201Z001PLMUGOKENEK_3.set('fieldLabels', {'id': 'no label', 'PL': 'no label', });
lyr_drivedownload20231123T021201Z001PLMUGOKENEK_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});