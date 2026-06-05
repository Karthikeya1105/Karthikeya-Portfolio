import { profile } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tag">{profile.tagline}</span>
        <h1 className="title">{profile.name}</h1>
        <p className="subtitle">{profile.subtitle}</p>
        <div className="cta">
          <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.links.email}`}>Email</a>
        </div>
      </div>
      <img
        className="avatar"
        src={profile.avatar}
        alt={`${profile.name} profile`}
        onError={(e) => {
          e.currentTarget.src =
            'data:image/svg+xml,' +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="#1e293b" width="200" height="200"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="16">Photo</text></svg>',
            )
        }}
      />
    </section>
  )
}

export default Hero
