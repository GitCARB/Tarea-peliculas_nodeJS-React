import React from 'react';
import { Link } from 'react-router-dom';

const BaseLayout = ({ children }) => {

    return (
        <div>
            <body>
                <div className="navbar container">
                
                    {/* Logo Image */}
                    <Link to ="/">
                    <img src="./logo.png" alt="Logo" className="navbar-logo" />
                    </Link>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">APPeliculas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Genero">Genero</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Director">Director</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Otras Categorias
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Productora</Link></li>
            <li><Link className="dropdown-item" to="/">Tipo</Link></li>
            <li><Link className="dropdown-item" to="/">Media</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
                </div>
                <main id="app">
                    {children}
                </main>
                {/* Bootstrap script and any other necessary scripts ... */}
                
            </body>
        </div>
    );
}

export default BaseLayout;
