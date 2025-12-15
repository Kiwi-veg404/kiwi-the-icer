/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `kiwi-header`
 * Navigation header with routing
 * 
 * @demo index.html
 * @element kiwi-header
 */
export class KiwiHeader extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-header";
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.navItems = [
      { path: "/", label: "Home" },
      { path: "/schedule", label: "Schedule" },
      { path: "/roster", label: "Roster" },
      { path: "/stats", label: "Stats" },
      { path: "/standings", label: "Standings" }
    ];
    this.logoUrl = "https://ih1.redbubble.net/image.832603374.6820/st,small,507x507-pad,600x600,f8f8f8.u5.jpg";
  }

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String },
      navItems: { type: Array },
      logoUrl: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-white);
        box-shadow: var(--ddd-boxShadow-md);
      }
      .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-4);
        max-width: 1200px;
        margin: 0 auto;
      }
      .logo {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-skyBlue);
      }
      .logo-img {
        height: 80px; 
        width: auto;
        max-width: 200px;
        object-fit: contain;
      }
      nav {
        display: flex;
        gap: var(--ddd-spacing-4);
      }
      .nav-link {
        text-decoration: none;
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-sm);
        transition: background-color 0.3s ease;
        font-weight: var(--ddd-font-weight-medium);
      }
      .nav-link:hover {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
      }
      .nav-link.active {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
      }
    `];
  }

  handleClick(e, path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="header-wrapper">
        <img 
          src="${this.logoUrl}" 
          alt="Kiwi the Icer Logo" 
          class="logo-img"
          @click="${(e) => this.handleClick(e, '/')}">
        <nav>
          ${this.navItems.map(item => html`
            <a 
              href="${item.path}"
              class="nav-link ${this.currentRoute === item.path ? 'active' : ''}"
              @click="${(e) => this.handleClick(e, item.path)}">
              ${item.label}
            </a>
          `)}
        </nav>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiHeader.tag, KiwiHeader);
