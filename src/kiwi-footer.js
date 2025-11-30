/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `kiwi-footer`
 * Footer component
 * 
 * @demo index.html
 * @element kiwi-footer
 */
export class KiwiFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-footer";
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get properties() {
    return {
      ...super.properties,
      year: { type: Number }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-white);
        margin-top: var(--ddd-spacing-8);
      }
      .footer-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-4);
        text-align: center;
      }
      .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-4);
      }
      .social-links {
        display: flex;
        gap: var(--ddd-spacing-3);
      }
      .social-link {
        color: var(--ddd-theme-default-skyBlue);
        text-decoration: none;
        font-size: var(--ddd-font-size-l);
        transition: color 0.3s ease;
      }
      .social-link:hover {
        color: var(--ddd-theme-default-white);
      }
      .copyright {
        font-size: var(--ddd-font-size-s);
      }
    `];
  }

  render() {
    return html`
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="copyright">
            © ${this.year} Kiwi the Icer. All rights reserved.
          </div>
          <div class="social-links">
            <a href="#" class="social-link"> Facebook</a>
            <a href="#" class="social-link"> Twitter</a>
            <a href="#" class="social-link"> Instagram</a>
          </div>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiFooter.tag, KiwiFooter);
