/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./kiwi-player-card.js";

/**
 * `kiwi-roster`
 * Team roster display
 * 
 * @demo index.html
 * @element kiwi-roster
 */
export class KiwiRoster extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-roster";
  }

  constructor() {
    super();
    this.players = [
      { name: "John Smith", number: "17", position: "Forward" },
      { name: "Sarah Johnson", number: "23", position: "Defense" },
      { name: "Mike Wilson", number: "1", position: "Goalie" },
      { name: "Emily Davis", number: "8", position: "Forward" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      players: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .roster-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--ddd-theme-default-pughBlue);
        font-size: var(--ddd-font-size-3xl);
        margin-bottom: var(--ddd-spacing-4);
      }
      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--ddd-spacing-4);
        margin-top: var(--ddd-spacing-4);
      }
    `];
  }

  render() {
    return html`
      <div class="roster-container">
        <h1> Team Roster</h1>
        <div class="players-grid">
          ${this.players.map(player => html`
            <kiwi-player-card
              .name="${player.name}"
              .number="${player.number}"
              .position="${player.position}">
            </kiwi-player-card>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiRoster.tag, KiwiRoster);
