/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./kiwi-game-card.js";

/**
 * `kiwi-schedule`
 * Schedule page displaying games
 * 
 * @demo index.html
 * @element kiwi-schedule
 */
export class KiwiSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-schedule";
  }

  constructor() {
    super();
    this.games = [
      { date: "Dec 1, 2024", opponent: "Polar Bears", location: "Home", time: "7:00 PM" },
      { date: "Dec 5, 2024", opponent: "Arctic Wolves", location: "Away", time: "8:00 PM" },
      { date: "Dec 10, 2024", opponent: "Snow Leopards", location: "Home", time: "6:30 PM" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .schedule-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--ddd-theme-default-navy80);
        font-size: var(--ddd-font-size-3xl);
        margin-bottom: var(--ddd-spacing-4);
      }
      .games-grid {
        display: grid;
        gap: var(--ddd-spacing-4);
        margin-top: var(--ddd-spacing-4);
      }
    `];
  }

  render() {
    return html`
      <div class="schedule-container">
        <h1> Game Schedule</h1>
        <div class="games-grid">
          ${this.games.map(game => html`
            <kiwi-game-card
              .date="${game.date}"
              .opponent="${game.opponent}"
              .location="${game.location}"
              .time="${game.time}">
            </kiwi-game-card>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiSchedule.tag, KiwiSchedule);
