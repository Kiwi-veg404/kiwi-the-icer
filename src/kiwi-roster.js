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
    this.heroImage = "https://gopsusports.com/imgproxy/Igb4TbukbhInr7eLiHgplT9nKVmXryPtnDF-rt4UEsA/rs:fit:1980:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvcHN1c3BvcnRzLXByb2QvMjAyNC8wNy8xMC9ycTg2cnJ3S2xkRzJaRFJWOWRFaHNWYW5Ja0k4RHNlc3JhVmFnekNULmpwZw.jpg";
  }

  static get properties() {
    return {
      ...super.properties,
      players: { type: Array },
      heroImage: { type: String }
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
      .hero {
        color: white;
        padding: var(--ddd-spacing-8);
        border-radius: var(--ddd-radius-lg);
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
        min-height: 200px;
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
        <div class="hero" style="background-image: url('${this.heroImage}');">
          <h1>Team Roster</h1>
        </div>
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