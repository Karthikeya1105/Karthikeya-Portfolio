import { certificates } from '../data/portfolio'

function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certificates</h2>
      <div className="grid cols-2">
        {certificates.map((cert) => (
          <article key={cert.title} className="card cert-card">
            <div className="cert-icon" aria-hidden="true">
              ✓
            </div>
            <div>
              <h3>{cert.title}</h3>
              <p className="muted">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
