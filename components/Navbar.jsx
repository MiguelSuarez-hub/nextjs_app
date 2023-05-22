import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary display-6">
      <div className="container-fluid">
        <Link className="navbar-brand display-5" href="/"><h3>Next-Users App</h3></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;