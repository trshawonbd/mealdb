import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar container navbar-primary bg-primary">
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pricing">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</nav>

        </div>
    );
};

export default Header;