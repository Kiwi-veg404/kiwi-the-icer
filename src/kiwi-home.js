/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./kiwi-game-card.js";

/**
 * `kiwi-home`
 * Home page content display
 * 
 * @demo index.html
 * @element kiwi-home
 */
export class KiwiHome extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-home";
  }

  constructor() {
    super();
    this.teamName = "Kiwi Ice Hawks";
    this.season = "2024-2025";
  }

  static get properties() {
    return {
      ...super.properties,
      teamName: { type: String },
      season: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .home-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .hero {
        background: linear-gradient(135deg, var(--ddd-theme-default-navy80) 0%, var(--ddd-theme-default-skyBlue) 100%);
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-8);
        border-radius: var(--ddd-radius-lg);
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
      }
      .hero h1 {
        font-size: var(--ddd-font-size-4xl);
        margin-bottom: var(--ddd-spacing-2);
      }
      .hero p {
        font-size: var(--ddd-font-size-xl);
      }
      .welcome-section {
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-limestoneLight);
        border-radius: var(--ddd-radius-md);
        margin-bottom: var(--ddd-spacing-4);
      }
      h2 {
        color: var(--ddd-theme-default-navy80);
        font-size: var(--ddd-font-size-2xl);
        margin-bottom: var(--ddd-spacing-3);
      }
    `];
  }

  render() {
    return html`
      <div class="home-container">
        <div class="hero">
          <h1> ${this.teamName}</h1>
          <p>Season ${this.season}</p>
        </div>
        
        <div class="welcome-section">
          <h2>Welcome to Kiwi the Icer</h2>
          <p>
            Your ultimate destination for all things hockey! Follow our team's journey 
            through the season with live updates, player stats, schedules, and more.
          </p>
        </div>

        <h2>Upcoming Games</h2>
        <kiwi-game-card></kiwi-game-card>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiHome.tag, KiwiHome);
