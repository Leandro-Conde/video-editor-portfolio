function Videos() {
  return (
    <section id="videos" className="videos-section">
      <div className="section-title">
        <span>01</span>
        <h2>Vídeos</h2>
      </div>

      <div className="videos-grid">
        <div className="video-card">
          <div className="video-placeholder">
          <iframe
  width="560"
  height="315"
 src="https://www.youtube.com/embed/BCMTUP97oKc"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="origin"
  allowFullScreen
></iframe>
          </div>

          <h3>Vídeo para YouTube</h3>
          <p>Edição • YouTube</p>
        </div>

        <div className="video-card">
          <div className="video-placeholder">
            <span>Projeto 02</span>
          </div>

          <h3>Vídeo para YouTube</h3>
          <p>Edição • YouTube</p>
        </div>
      </div>
    </section>
  )
}

export default Videos