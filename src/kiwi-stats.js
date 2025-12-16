/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `kiwi-stats`
 * Statistics dashboard
 * 
 * @demo index.html
 * @element kiwi-stats
 */
export class KiwiStats extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-stats";
  }

  constructor() {
    super();
    this.wins = 12;
    this.losses = 5;
    this.ties = 2;
    this.goalsFor = 45;
    this.goalsAgainst = 32;
    this.heroImage = "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gettyimages-2207243648-67eca4e0e8a7c.jpg?crop=1.00xw:1.00xh;0,0&resize=900:*";
  }

  static get properties() {
    return {
      ...super.properties,
      wins: { type: Number },
      losses: { type: Number },
      ties: { type: Number },
      goalsFor: { type: Number },
      goalsAgainst: { type: Number },
      heroImage: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .stats-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .hero {
        color: white;
        padding: var(--ddd-spacing-8);
        border-radius: var(--ddd-radius-lg);
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
        min-height: 240px;
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
      
      .hero h1 {
        position: relative;
        z-index: 2;
        margin: 0;
        font-size: var(--ddd-font-size-4xl);
        font-weight: bold;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--ddd-spacing-4);
        margin-top: var(--ddd-spacing-4);
      }
      .stat-card {
        background-color: var(--ddd-theme-default-skyBlue);
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-md);
        text-align: center;
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .stat-value {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-pughBlue);
      }
      .stat-label {
        font-size: var(--ddd-font-size-m);
        color: var(--ddd-theme-default-coalyGray);
        margin-top: var(--ddd-spacing-2);
      }
    `];
  }

  render() {
    return html`
      <div class="stats-container">
        <div class="hero" style="background-image: url('${this.heroImage}');">
          <h1>Team Statistics</h1>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${this.wins}</div>
            <div class="stat-label">Wins</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.losses}</div>
            <div class="stat-label">Losses</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.ties}</div>
            <div class="stat-label">Ties</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.goalsFor}</div>
            <div class="stat-label">Goals For</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.goalsAgainst}</div>
            <div class="stat-label">Goals Against</div>
          </div>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiStats.tag, KiwiStats);