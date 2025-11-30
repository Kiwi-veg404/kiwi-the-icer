/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `kiwi-player-card`
 * Player profile card component
 * 
 * @demo index.html
 * @element kiwi-player-card
 */
export class KiwiPlayerCard extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-player-card";
  }

  constructor() {
    super();
    this.name = "Player Name";
    this.number = "00";
    this.position = "Position";
  }

  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      number: { type: String },
      position: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .card {
        background: linear-gradient(135deg, var(--ddd-theme-default-navy80) 0%, var(--ddd-theme-default-skyBlue) 100%);
        color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: transform 0.2s ease;
        text-align: center;
      }
      .card:hover {
        transform: scale(1.05);
      }
      .jersey-number {
        font-size: var(--ddd-font-size-4xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-2);
      }
      .player-name {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-medium);
        margin-bottom: var(--ddd-spacing-1);
      }
      .position {
        font-size: var(--ddd-font-size-m);
        opacity: 0.9;
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="jersey-number">#${this.number}</div>
        <div class="player-name">${this.name}</div>
        <div class="position">${this.position}</div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiPlayerCard.tag, KiwiPlayerCard);
