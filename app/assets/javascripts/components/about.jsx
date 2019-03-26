const CITY_ZOOM = 12

const mapSize = {width: '100%', height: '100vh'}
const About = () => <div style={mapSize}>
  <GoogleMapReact 
    defaultCenter={{lat: 32.6138837, lng: -115.5203308}}
    defaultZoom={CITY_ZOOM}
  />
</div>