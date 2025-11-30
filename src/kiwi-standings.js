/**
 * Copyright 2025 Junyu Zhao
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `kiwi-standings`
 * League standings table
 * 
 * @demo index.html
 * @element kiwi-standings
 */
export class KiwiStandings extends DDDSuper(LitElement) {

  static get tag() {
    return "kiwi-standings";
  }

  constructor() {
    super();
    this.teams = [
      { rank: 1, name: "Kiwi Ice Hawks", wins: 12, losses: 5, ties: 2, points: 26 },
      { rank: 2, name: "Polar Bears", wins: 11, losses: 6, ties: 2, points: 24 },
      { rank: 3, name: "Arctic Wolves", wins: 10, losses: 7, ties: 2, points: 22 },
      { rank: 4, name: "Snow Leopards", wins: 8, losses: 9, ties: 2, points: 18 }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      teams: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .standings-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--ddd-theme-default-navy80);
        font-size: var(--ddd-font-size-3xl);
        margin-bottom: var(--ddd-spacing-4);
      }
      .standings-list {
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        box-shadow: var(--ddd-boxShadow-md);
        overflow: hidden;
      }
      .standings-header {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr 1fr 1fr;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-3);
        background-color: var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
      }
      .team-row {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr 1fr 1fr;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-3);
        border-bottom: var(--ddd-border-sm);
        border-color: var(--ddd-theme-default-limestoneLight);
        color: var(--ddd-theme-default-navy80);
        transition: background-color 0.2s ease;
      }
      .team-row:hover {
        background-color: var(--ddd-theme-default-limestoneLight);
      }
      .team-row.highlight {
        background-color: var(--ddd-theme-default-skyBlue);
        font-weight: var(--ddd-font-weight-bold);
      }
      .rank {
        text-align: center;
        font-weight: var(--ddd-font-weight-bold);
      }
    `];
  }

  render() {
    return html`
      <div class="standings-container">
        <h1> League Standings</h1>
        <div class="standings-list">
          <div class="standings-header">
            <div class="rank">Rank</div>
            <div>Team</div>
            <div>W</div>
            <div>L</div>
            <div>T</div>
            <div>PTS</div>
          </div>
          ${this.teams.map(team => html`
            <div class="team-row ${team.rank === 1 ? 'highlight' : ''}">
              <div class="rank">${team.rank}</div>
              <div>${team.name}</div>
              <div>${team.wins}</div>
              <div>${team.losses}</div>
              <div>${team.ties}</div>
              <div>${team.points}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(KiwiStandings.tag, KiwiStandings);
