import React from 'react';
import CardWidget from './CardWidget';
import CardLogo from './CardLogo';

const NavBs = () => {

return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">AdornaHome</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Nosotros</a>
        </li>
      </ul>
      <span className="navbar-text">
        0
      </span>
    </div>
  </div>
  <CardWidget/>
</nav>

)
};

export default NavBs;
