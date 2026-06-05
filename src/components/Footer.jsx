import { profile } from '../data/portfolio'

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
    </footer>
  )
}

export default Footer
