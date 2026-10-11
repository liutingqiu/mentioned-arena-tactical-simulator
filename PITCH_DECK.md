# Mentioned Arena Prediction Market Tactical Simulator 🏟️⚡

> **Submitted to Superteam Earn • Mentioned Team Trading Competition Bounty ($500 USDG Prize Pool)**  
> **Platform & Competition:** Mentioned Arena Season 3 on Solana ([mentioned.market/arena](https://mentioned.market/arena))  
> **Live Interactive Simulator:** [https://liutingqiu.github.io/mentioned-arena-tactical-simulator/](https://liutingqiu.github.io/mentioned-arena-tactical-simulator/)  
> **Open Source GitHub Repository:** [https://github.com/liutingqiu/mentioned-arena-tactical-simulator](https://github.com/liutingqiu/mentioned-arena-tactical-simulator)  
> **Author & Lead Engineer:** Tingqiu Liu (`@liutingqiu`, `tianqi689@gmail.com`)

---

## 🎯 Executive Summary & The Problem

Prediction markets on Solana have entered the competitive era with **Mentioned Arena Season 3**—a 2-week team trading tournament where pairs of traders team up to compete for a **$1,000 USD prize pool** and **8 distinct achievement medals**, including the prestigious **Grand Prix ($70)** for the highest profit on a single market.

However, traders frequently struggle with:
1. **Mathematical Odds vs. Return Asymmetry:** How binary shares scale payout ($1.00 per winning share) against fluctuating entry prices (e.g. buying at $0.25 yields 300% profit).
2. **Squad Profit Coordination:** Tracking cumulative 2-trader portfolio returns across AMM and majority consensus markets.
3. **Grand Prix Targeting:** Strategically sizing positions to maximize single-market dollar profit without catastrophic downside.

---

## 💡 The Solution: Mentioned Arena Tactical Simulator

**Mentioned Arena Tactical Simulator** is an open-source analytics toolkit and interactive web terminal engineered specifically for Mentioned Arena traders.

### Core Architectural Features:

### 1. High-Precision Binary Market Payout Engine
- Implements exact Mentioned settlement mathematics:
  $$\text{Shares} = \frac{\text{Capital}}{\text{Price}_{\text{entry}}}$$
  $$\text{Payout} = \text{Shares} \times \text{Price}_{\text{exit}}$$
  $$\text{Net Profit} = \text{Payout} - \text{Capital}$$
- Supports both AMM liquidity pools and majority-consensus resolution formats.

### 2. 2-Person Squad Aggregate Tracking
- Seamlessly pairs two traders into a unified Arena team squad.
- Tracks individual volumes, trade frequencies, and aggregate squad PnL.

### 3. $70 Grand Prix Medal Profit Targeter
- Evaluates individual trade scenarios against the Grand Prix benchmark (biggest single-market profit) to identify high-conviction, asymmetrical payout opportunities.

### 4. Interactive Live Terminal & Visualizer
- Deployed on **GitHub Pages** with live capital sliders, odds calculators, and instant execution simulation.

---

## 🛠️ Architecture & Tech Stack

```text
mentioned-arena-tactical-simulator/
├── src/
│   ├── types.ts                   # Market scenarios, squads, Grand Prix types
│   ├── engine/
│   │   └── arena.ts               # Mentioned binary payout & squad aggregation engine
│   └── index.ts                   # Library entrypoint
├── tests/
│   └── arena.test.js              # 3 automated unit tests (binary math, validation, squad logic)
├── index.html                     # Live interactive web simulator on GitHub Pages
├── PITCH_DECK.md                  # Hackathon submission document & educational guide
└── README.md                      # Developer documentation & quickstart
```

- **Runtime:** Node.js (ESM), TypeScript 5.6
- **Test Suite:** `node:test` + `node:assert/strict` (3/3 passed, 100% green)
- **Frontend:** Pure HTML5/CSS/JS (Solana Green & Mentioned Pink/Purple aesthetic)
- **Blockchain Ecosystem:** Solana Mainnet, Mentioned Market AMM / Majority pools

---

## 🔬 Test Suite Verification

```text
✔ 1. calculateTradeOutcome accurately models Mentioned binary market mechanics (0.7ms)
✔ 2. calculateTradeOutcome rejects invalid entry prices outside (0, 1) (0.7ms)
✔ 3. evaluateTeamSeason aggregates 2-person squad profits and tracks Grand Prix leader (0.5ms)

ℹ pass 3
ℹ fail 0
```

---

## 🏆 Project Deliverables & Links

- **Live Interactive Simulator:** [https://liutingqiu.github.io/mentioned-arena-tactical-simulator/](https://liutingqiu.github.io/mentioned-arena-tactical-simulator/)
- **GitHub Repository:** [https://github.com/liutingqiu/mentioned-arena-tactical-simulator](https://github.com/liutingqiu/mentioned-arena-tactical-simulator)
- **Author Contact:** Tingqiu Liu (`tianqi689@gmail.com`) / GitHub: `liutingqiu`

---
*Built with ❤️ for Mentioned, Superteam Ireland, and the Global Solana Community.*
