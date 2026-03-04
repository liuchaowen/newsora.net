import{s as a,i as r,x as i}from"./lit-language-CGmcNQo9.js";class d extends a{constructor(){super()}connectedCallback(){super.connectedCallback(),this.addEventListener("theme-changed",this.handleThemeChange),this.syncInitialTheme()}syncInitialTheme(){const e=localStorage.getItem("theme"),t=e?e==="dark":!0;this.setAttribute("data-theme",t?"dark":"light")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("theme-changed",this.handleThemeChange)}handleThemeChange=e=>{console.log(e);const{isDarkMode:t}=e.detail;this.setAttribute("data-theme",t?"dark":"light")};static styles=r`
    :host {
      display: block;
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--header-bg, #1a1a1a);
      border-bottom: 1px solid var(--header-border, #333);
      transition: all 0.3s ease;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .site-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--header-text, #ffffff);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .site-title:hover {
      color: var(--header-text-hover, #007bff);
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
      .header-container {
        padding: 0.75rem 1rem;
      }

      .site-title {
        font-size: 1.25rem;
      }
    }

    /* 深色模式样式 */
    :host([data-theme="dark"]) {
      --header-bg: #1a1a1a;
      --header-border: #333;
      --header-text: #ffffff;
      --header-text-hover: #007bff;
    }

    /* 浅色模式样式 */
    :host([data-theme="light"]) {
      --header-bg: #ffffff;
      --header-border: #e0e0e0;
      --header-text: #333333;
      --header-text-hover: #007bff;
    }
  `;render(){return i`
      <header class="header-container">
        <a href="/" class="site-title">X News</a>
        <div class="header-controls">
          <lit-theme-mode></lit-theme-mode>
          <lit-language></lit-language>
        </div>
      </header>
    `}}customElements.define("lit-header",d);
