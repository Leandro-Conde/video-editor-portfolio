import perfil from '../assets/images/perfil.jpg'

function Hero() {
  return (
    <section className="hero">

<div className="profile-photo">
  <img src={perfil} alt="Leandro - Editor de Vídeo" />
</div>

      <p className="hero-label">
        PORTFÓLIO DE EDIÇÃO
      </p>

      <h1>
        Leandro
      </h1>

      <h2>
        Editor de Vídeo
      </h2>

      <p className="hero-description">
        Edição criativa e moderna para YouTube,
        com foco em ritmo, entretenimento e identidade.
      </p>

      <a href="#videos" className="hero-button">
        Ver meus trabalhos
      </a>

    </section>
  )
}

export default Hero