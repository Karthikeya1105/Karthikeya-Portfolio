import { education } from '../data/portfolio'

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="grid cols-1">
        {education.map((item) => (
          <article key={item.degree} className="card">
            <h3>{item.degree}</h3>
            <p className="card-meta">
              {item.institution} · {item.location}
            </p>
            <p className="muted">
              {item.period} · {item.score}
            </p>
            <p className="muted">Relevant coursework: {item.coursework}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
