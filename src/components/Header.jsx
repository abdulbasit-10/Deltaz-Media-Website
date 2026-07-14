import { useState } from 'react'

const links = ['Home', 'About Us', 'Services', 'How We Work', 'Projects', 'Contact']

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#" aria-label="Deltaz Media home">
          <img className="brand-logo" src="/deltaz-logo.png" alt="Deltaz Media" className="w-100" />
        </a>

        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>{link}</a>)}
        </nav>

        <a className="audit-button" href="#contact">Book Your Free Audit</a>
      </div>
    </header>
  )
}

export default Header
