function HeroBikeViewer() {
  return (
    <div className="hero-bike-viewer">
      <model-viewer
        class="hero-model-viewer"
        src="/assets/models/ducati_panigale_v4.glb"
        alt="Ducati Panigale V4 3D model"
        auto-rotate
        camera-controls
        disable-zoom
        camera-orbit="25deg 82deg 3.7m"
        field-of-view="18deg"
        shadow-intensity="1"
        exposure="1"
      ></model-viewer>
    </div>
  );
}

export default HeroBikeViewer;