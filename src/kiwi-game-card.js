/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `kiwi-game-card`
 * Individual game card component
 * 
 * @demo index.html
 * @element kiwi-game-card
 */
export class KiwiGameCard extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-game-card";
  }

  constructor() {
    super();
    this.date = "TBD";
    this.opponent = "Opponent";
    this.location = "TBD";
    this.time = "TBD";
  }

  static get properties() {
    return {
      ...super.properties,
      date: { type: String },
      opponent: { type: String },
      location: { type: String },
      time: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .card {
        background-color: var(--ddd-theme-default-white);
        border: var(--ddd-border-md);
        border-color: var(--ddd-theme-default-navy80);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .card:hover {
        transform: translateY(-2px);
        box-shadow: var(--ddd-boxShadow-md);
      }
      .game-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--ddd-spacing-3);
      }
      .date {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
      }
      .location-badge {
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-medium);
      }
      .opponent {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: var(--ddd-spacing-2);
      }
      .time {
        font-size: var(--ddd-font-size-m);
        color: var(--ddd-theme-default-potentialMidnight);
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="game-header">
          <div class="date">${this.date}</div>
          <div class="location-badge">${this.location}</div>
        </div>
        <div class="opponent">vs ${this.opponent}</div>
        <div class="time"> ${this.time}</div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiGameCard.tag, KiwiGameCard);
