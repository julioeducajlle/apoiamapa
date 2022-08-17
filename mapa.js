let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -26.30128151361678, lng: -48.84448119884812 },
    mapTypeId: "roadmap",
    styles: [{
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [{"visibility": "off"}]},
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{"visibility": "off"}]},
  {
    "featureType": "poi.business",
    "stylers": [{"visibility": "off"}]},
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [{"visibility": "off"}]},
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{"visibility": "off"}]}],
    
    });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    radius: 23,
  });

  ctaLayer = new google.maps.KmlLayer({
    url: 'Unidades13072021.kml',
    map: map,
    preserveViewport: true,
  });

document
    .getElementById("toggle-Kml")
    .addEventListener("click", toggleKml);
  
}

function toggleKml() {
  ctaLayer.setMap(ctaLayer.getMap() ? null : map);
}

function getPoints() {
  return [
    {location: new google.maps.LatLng(-26.34389306876083, -48.77287303499676), weight: 93},
{location: new google.maps.LatLng(-26.33917905350211, -48.770310473027344), weight: 68},
{location: new google.maps.LatLng(-26.338813282866923, -48.7705540325483), weight: 60},
{location: new google.maps.LatLng(-26.32860095004003, -48.83798214437338), weight: 60},
{location: new google.maps.LatLng(-26.248973540831486, -48.797345384672525), weight: 37},
{location: new google.maps.LatLng(-26.36874269526849, -48.82361795953383), weight: 33},
{location: new google.maps.LatLng(-26.33587199324327, -48.811687259534565), weight: 30},
{location: new google.maps.LatLng(-26.327886885104938, -48.90697948837028), weight: 30},
{location: new google.maps.LatLng(-26.286849922683302, -48.903354409262526), weight: 30},
{location: new google.maps.LatLng(-26.265015197017174, -48.809068144193), weight: 29},
{location: new google.maps.LatLng(-26.323805657943254, -48.79906981535647), weight: 25},
{location: new google.maps.LatLng(-26.260890646200394, -48.80457377302897), weight: 22},
{location: new google.maps.LatLng(-26.332254063055984, -48.797819888370135), weight: 21},
{location: new google.maps.LatLng(-26.33072329497071, -48.81425950186315), weight: 21},
{location: new google.maps.LatLng(-26.32988516803824, -48.83141348652062), weight: 21},
{location: new google.maps.LatLng(-26.276297793509176, -48.804087719056554), weight: 20},
{location: new google.maps.LatLng(-26.345194777597357, -48.80451552884904), weight: 20},
{location: new google.maps.LatLng(-26.317526124212474, -48.81358923100817), weight: 19},
{location: new google.maps.LatLng(-26.25233556192897, -48.799630290221344), weight: 19},
{location: new google.maps.LatLng(-26.286862312638224, -48.917080544192785), weight: 18},
{location: new google.maps.LatLng(-26.28460035386336, -48.89897973069995), weight: 16},
{location: new google.maps.LatLng(-26.211728297783168, -48.824657688372525), weight: 15},
{location: new google.maps.LatLng(-26.280805005609107, -48.78616867487828), weight: 15},
{location: new google.maps.LatLng(-26.36004793140738, -48.80784960001302), weight: 14},
{location: new google.maps.LatLng(-26.23827079278974, -48.80789358837208), weight: 14},
{location: new google.maps.LatLng(-26.33737655020845, -48.80398921720586), weight: 14},
{location: new google.maps.LatLng(-26.362990662073795, -48.82258977302689), weight: 14},
{location: new google.maps.LatLng(-26.271681653840634, -48.8390720443747), weight: 13},
{location: new google.maps.LatLng(-26.345041536717517, -48.79287057302741), weight: 12},
{location: new google.maps.LatLng(-26.264440423051347, -48.80097573070019), weight: 11},
{location: new google.maps.LatLng(-26.367968355774345, -48.82797180186257), weight: 11},
{location: new google.maps.LatLng(-26.317665164523575, -48.814949288370556), weight: 11},
{location: new google.maps.LatLng(-26.224326819544064, -48.80792163070104), weight: 11},
{location: new google.maps.LatLng(-26.340687085979777, -48.81465765953443), weight: 11},
{location: new google.maps.LatLng(-26.360762232535482, -48.81276780186258), weight: 11},
{location: new google.maps.LatLng(-26.3031363764939, -48.8132642644319), weight: 10},
{location: new google.maps.LatLng(-26.280425008249566, -48.793856765084335), weight: 10},
{location: new google.maps.LatLng(-26.331903498984865, -48.81060904234238), weight: 9},
{location: new google.maps.LatLng(-26.141779699531742, -48.90174569751557), weight: 9},
{location: new google.maps.LatLng(-26.360934821302415, -48.806022878549285), weight: 9},
{location: new google.maps.LatLng(-26.34018055533219, -48.82376517302732), weight: 9},
{location: new google.maps.LatLng(-26.341436713238007, -48.81404418467065), weight: 8},
{location: new google.maps.LatLng(-26.282612527393564, -48.88212734419278), weight: 8},
{location: new google.maps.LatLng(-26.29940499061158, -48.81675793624848), weight: 8},
{location: new google.maps.LatLng(-26.205959462691585, -48.82992600186575), weight: 8},
{location: new google.maps.LatLng(-26.267867902453126, -48.924375886521716), weight: 7},
{location: new google.maps.LatLng(-26.252954618317766, -48.841783328850774), weight: 7},
{location: new google.maps.LatLng(-26.33507957912453, -48.90713480937418), weight: 7},
{location: new google.maps.LatLng(-26.21879373385312, -48.81071662885146), weight: 7},
{location: new google.maps.LatLng(-26.273181435362535, -48.81308354419287), weight: 7},
{location: new google.maps.LatLng(-26.339770540432575, -48.79395631965427), weight: 6},
{location: new google.maps.LatLng(-26.270005289431342, -48.88938743070004), weight: 6},
{location: new google.maps.LatLng(-26.26246709891882, -48.818842659535996), weight: 6},
{location: new google.maps.LatLng(-26.3302270214176, -48.83650893254844), weight: 6},
{location: new google.maps.LatLng(-26.277057960250577, -48.90665854419306), weight: 6},
{location: new google.maps.LatLng(-26.31908925011339, -48.87450784049285), weight: 6},
{location: new google.maps.LatLng(-26.352542091802135, -48.84451973069852), weight: 6},
{location: new google.maps.LatLng(-26.244670263708684, -48.812312815357764), weight: 5},
{location: new google.maps.LatLng(-26.338463482285885, -48.840113528849), weight: 5},
{location: new google.maps.LatLng(-26.339016238206106, -48.83298214604142), weight: 5},
{location: new google.maps.LatLng(-26.347482768765545, -48.83529371350618), weight: 5},
{location: new google.maps.LatLng(-26.240489596646327, -48.80126487117962), weight: 5},
{location: new google.maps.LatLng(-26.351830018430867, -48.820102301862704), weight: 5},
{location: new google.maps.LatLng(-26.282601551821973, -48.81858611720686), weight: 5},
{location: new google.maps.LatLng(-26.345629923095423, -48.791823001862895), weight: 4},
{location: new google.maps.LatLng(-26.348691541872405, -48.83274727487691), weight: 4},
{location: new google.maps.LatLng(-26.312455939103213, -48.840544378576965), weight: 4},
{location: new google.maps.LatLng(-26.34282416016356, -48.85330373069861), weight: 4},
{location: new google.maps.LatLng(-26.3192189669738, -48.875726946041716), weight: 4},
{location: new google.maps.LatLng(-26.30051253748348, -48.90315994419251), weight: 4},
{location: new google.maps.LatLng(-26.214565123788073, -48.90083527302984), weight: 4},
{location: new google.maps.LatLng(-26.34620076633482, -48.87854851535602), weight: 4},
{location: new google.maps.LatLng(-26.264787481218015, -48.88590633070007), weight: 4},
{location: new google.maps.LatLng(-26.379010873041423, -48.831669630698045), weight: 3},
{location: new google.maps.LatLng(-26.371794349962034, -48.84065645953398), weight: 3},
{location: new google.maps.LatLng(-26.27539519791726, -48.88586264604265), weight: 3},
{location: new google.maps.LatLng(-26.323667273989354, -48.832403288370365), weight: 3},
{location: new google.maps.LatLng(-26.200501321276157, -48.932128930701445), weight: 3},
{location: new google.maps.LatLng(-26.143225396663595, -49.001306646045), weight: 3},
{location: new google.maps.LatLng(-26.325419857416886, -48.80891797302777), weight: 3},
{location: new google.maps.LatLng(-26.282398871062618, -48.79909580001463), weight: 3},
{location: new google.maps.LatLng(-26.356245716873197, -48.842684420904696), weight: 3},
{location: new google.maps.LatLng(-26.31564187663082, -48.803797500014035), weight: 3},
{location: new google.maps.LatLng(-26.204328012323977, -48.90974150186579), weight: 2},
{location: new google.maps.LatLng(-26.18142400130733, -48.91059992184964), weight: 2},
{location: new google.maps.LatLng(-26.244962018435434, -48.81748853070053), weight: 2},
{location: new google.maps.LatLng(-26.38287233340668, -48.820461930697874), weight: 2},
{location: new google.maps.LatLng(-26.272626191014304, -48.81333827302873), weight: 2},
{location: new google.maps.LatLng(-26.287055600409605, -48.9224354306997), weight: 2},
{location: new google.maps.LatLng(-26.134073756328412, -48.884535330702676), weight: 2},
{location: new google.maps.LatLng(-26.29212588648252, -48.909934715357174), weight: 2},
{location: new google.maps.LatLng(-26.383452315437847, -48.821704107411136), weight: 2},
{location: new google.maps.LatLng(-26.168283208513405, -48.89692308652367), weight: 2},
{location: new google.maps.LatLng(-26.301909003521466, -48.76305000186381), weight: 2},
{location: new google.maps.LatLng(-26.206974594105866, -48.82951545953708), weight: 1},
{location: new google.maps.LatLng(-26.2773710809117, -48.90330454604253), weight: 1},
{location: new google.maps.LatLng(-26.324123325997196, -48.82872863069901), weight: 1},
{location: new google.maps.LatLng(-26.253621541561635, -48.814890501864696), weight: 1},
{location: new google.maps.LatLng(-26.361369820351953, -48.81273014234175), weight: 1},
{location: new google.maps.LatLng(-26.29032455951859, -48.870360744192666), weight: 1},
{location: new google.maps.LatLng(-26.357842047317778, -48.81677864419139), weight: 1},
{location: new google.maps.LatLng(-26.32271508884324, -48.858479803713166), weight: 1},
{location: new google.maps.LatLng(-26.202927983959892, -48.918962073030066), weight: 1},
{location: new google.maps.LatLng(-26.341786687806454, -48.99048854419165), weight: 1},
{location: new google.maps.LatLng(-26.29063860290861, -48.87051481535705), weight: 1},
{location: new google.maps.LatLng(-26.288529999411857, -48.96602873069977), weight: 1},
  ];
}
