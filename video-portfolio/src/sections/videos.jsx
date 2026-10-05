function Videos() {
  const videos = [
    {
      id: 'BCMTUP97oKc',
      title: 'Vídeo para YouTube',
      category: 'Edição • YouTube',
    },
    {
      id: 'c-klxxd7wV0',
      title: 'Vídeo para YouTube',
      category: 'Edição • YouTube',
    },
    {
      id: 'a_AHASL4EiM',
      title: 'Vídeo para YouTube',
      category: 'Edição • YouTube',
    },
    {
      id: 'q1Xh7zh2tv4',
      title: 'Vídeo para YouTube',
      category: 'Edição • YouTube',
    },
  ]

  return (
    <section id="videos" className="videos-section">

      <div className="section-title">
        <span>02</span>
        <h2>Vídeos</h2>
      </div>

      <div className="videos-grid">

        {videos.map((video, index) => (
          <div className="video-card" key={video.id}>

            <div className="video-placeholder">

              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="origin"
                allowFullScreen
              />

            </div>

            <div className="video-info">
              <span>Projeto {String(index + 1).padStart(2, '0')}</span>

              <h3>{video.title}</h3>

              <p>{video.category}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Videos