/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./kiwi-header.js";
import "./kiwi-home.js";
import "./kiwi-schedule.js";
import "./kiwi-roster.js";
import "./kiwi-stats.js";
import "./kiwi-standings.js";
import "./kiwi-footer.js";

/**
 * `kiwi-app`
 * Main application container with routing
 * 
 * @demo index.html
 * @element kiwi-app
 */
export class KiwiApp extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-app";
  }

  constructor() {
    super();
    this.route = window.location.pathname || "/";
    this.initRouting();
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--ddd-theme-default-white);
      }
      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .content {
        flex: 1;
        padding: var(--ddd-spacing-4);
      }
    `];
  }

  initRouting() {
    // Handle initial page load
    this.route = window.location.pathname;
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.route = window.location.pathname;
    });
  }

  handleNavigation(e) {
    if (e.detail && e.detail.path) {
      this.route = e.detail.path;
      window.history.pushState({}, "", e.detail.path);
    }
  }

  renderPage() {
    switch(this.route) {
      case '/schedule':
        return html`<kiwi-schedule></kiwi-schedule>`;
      case '/roster':
        return html`<kiwi-roster></kiwi-roster>`;
      case '/stats':
        return html`<kiwi-stats></kiwi-stats>`;
      case '/standings':
        return html`<kiwi-standings></kiwi-standings>`;
      default:
        return html`<kiwi-home></kiwi-home>`;
    }
  }

  render() {
    return html`
      <div class="app-container">
        <kiwi-header 
          .currentRoute="${this.route}"
          @navigate="${this.handleNavigation}">
        </kiwi-header>
        <div class="content">
          ${this.renderPage()}
        </div>
        <kiwi-footer></kiwi-footer>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiApp.tag, KiwiApp);
