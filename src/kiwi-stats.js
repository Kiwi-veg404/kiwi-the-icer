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
  }

  static get properties() {
    return {
      ...super.properties,
      wins: { type: Number },
      losses: { type: Number },
      ties: { type: Number },
      goalsFor: { type: Number },
      goalsAgainst: { type: Number }
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
      h1 {
        color: var(--ddd-theme-default-navy80);
        font-size: var(--ddd-font-size-3xl);
        margin-bottom: var(--ddd-spacing-4);
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
        color: var(--ddd-theme-default-navy80);
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
        <h1> Team Statistics</h1>
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
