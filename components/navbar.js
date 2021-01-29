import Link from 'next/link';
const Navbar = ()=>{
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href='/'>
            <a className="navbar-brand">Pets</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href='/post-adoption'>
                <a className="nav-link">Post adoption</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;