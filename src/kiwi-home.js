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
    this.heroImage = "https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/0/8e/08ef144e-db92-11ef-b05c-270cbd90b390/6795a5dd55a63.image.jpg?resize=1333%2C888";
  }

  static get properties() {
    return {
      ...super.properties,
      teamName: { type: String },
      season: { type: String },
      heroImage: { type: String }
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
        color: white;
        padding: var(--ddd-spacing-8);
        border-radius: var(--ddd-radius-lg);
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        background-color: var(--ddd-theme-default-navyBlue);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
      }
      
      .hero h1,
      .hero p {
        position: relative;
        z-index: 2;
        margin: 0;
      }
      
      .hero h1 {
        font-size: var(--ddd-font-size-4xl);
        margin-bottom: var(--ddd-spacing-2);
        font-weight: bold;
      }
      
      .hero p {
        font-size: var(--ddd-font-size-xl);
        font-weight: 500;
      }
      
      .welcome-section {
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-limestoneLight);
        border-radius: var(--ddd-radius-md);
        margin-bottom: var(--ddd-spacing-4);
      }
      
      h2 {
        color: var(--ddd-theme-default-pughBlue);
        font-size: var(--ddd-font-size-2xl);
        margin-bottom: var(--ddd-spacing-3);
      }
      
      .color-black {
        color: var(--ddd-theme-default-coalyGray);
      }
    `];
  }

  render() {
    return html`
      <div class="home-container">
        <div class="hero" style="background-image: url('${this.heroImage}');">
          <h1>${this.teamName}</h1>
          <p>Season ${this.season}</p>
        </div>
        
        <div class="welcome-section">
          <h2>Welcome to Kiwi the Icer</h2>
          <p class="color-black">
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