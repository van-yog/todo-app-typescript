import React from "react"

 const Navbar: React.FC = () => {
    return  <nav>
    <div className="nav-wrapper purple darken-1 px1">
      <a href="#" className="brand-logo left">React + TypeScript</a>
      <ul  className="right hide-on-med-and-down">
        <li><a href="/">Todo list</a></li>
        <li><a href="/">About</a></li>
        
      </ul>
    </div>
  </nav>
}

export default Navbar