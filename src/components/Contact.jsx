import { profile } from '../data/portfolio'

function Contact() {
  const { email, phone, location } = profile.contact

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="card contact-card">
        <p>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
      </div>
    </section>
  )
}

export default Contact
