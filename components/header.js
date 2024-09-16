class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: start;
          background-color: #0a0a23;
          font-family: "Courier";
          color: #fff;
        }
        
        h1 {
          margin: 0 10px 0 20px;
        }
        
        ul {
          padding: 0;
        }
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }

        li {
          display: inline
        }
      </style>
      <header>
        <nav>
        <h1><a href="/site">SMCS Coding Club</a>
          </h1>
          <ul>
            <li><a href="https://discord.gg/Yg8yutjpP6">Discord</a></li></ul>
            <li><a href="https://github.com/SMCS-Coding-Club">Github</a></li></ul>
            <li>Next Meeting: Wednesday September 19, 12:15, Computer Lab</ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
