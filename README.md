# Mentioned Arena Tactical Simulator 🏟️⚡

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://img.shields.io/badge/Tests-3%2F3%20Passed-brightgreen)](tests/arena.test.js)
[![Superteam Earn](https://img.shields.io/badge/Superteam-Ireland%20Bounty%20%24500-purple)](https://superteam.fun/earn/listing/create-x-content-on-mentioneds-team-trading-competition)
[![Live Simulator](https://img.shields.io/badge/Live%20Simulator-GitHub%20Pages-success)](https://liutingqiu.github.io/mentioned-arena-tactical-simulator/)

**Tactical 2-Person Squad Profit Calculator, AMM/Majority Consensus Payout Engine, and Grand Prix ($70) Single-Trade Profit Tracker for Mentioned Prediction Markets on Solana.**

Submitted to the **Superteam Ireland • Mentioned Team Trading Competition Bounty ($500 USDG Prize Pool)**.

---

## 🌟 Overview

[Mentioned](https://mentioned.market) is Solana's premier social prediction market platform. In **Arena Season 3**, pairs of traders team up to compete for a share of **$1,000 USD** and 8 specialized medals—most notably the **Grand Prix ($70)** for the largest single-market profit.

**Mentioned Arena Tactical Simulator** provides:
1. **Mathematical Payout Modeling:** Computes exact share sizing and net returns across entry prices from $0.01 to $0.99.
2. **2-Person Squad Synergy:** Aggregates individual trades and volume into team-level PnL.
3. **Grand Prix Optimization:** Highlights asymmetric payout opportunities to compete for the single-trade medal.
4. **Interactive Live Web Studio:** Responsive simulator deployed on GitHub Pages.

---

## 🌐 Live Interactive Simulator

Try the live trading calculator and squad simulator online:  
👉 **[https://liutingqiu.github.io/mentioned-arena-tactical-simulator/](https://liutingqiu.github.io/mentioned-arena-tactical-simulator/)**

---

## 📦 Quick Start & Usage

```bash
git clone https://github.com/liutingqiu/mentioned-arena-tactical-simulator.git
cd mentioned-arena-tactical-simulator
npm install
npm test
```

### TypeScript / ESM Example

```typescript
import { MentionedArenaEngine } from 'mentioned-arena-tactical-simulator';

// 1. Calculate trade outcome for binary prediction
const trade = MentionedArenaEngine.calculateTradeOutcome({
  marketId: 'mkt_sol_ath',
  title: 'Will SOL break ATH this month?',
  marketType: 'AMM',
  entryPriceUSDC: 0.35, // 35 cents entry price
  exitPriceUSDC: 1.00,  // Resolves YES
  tradeSizeUSDC: 100.0  // $100 committed
});

console.log(`Shares: ${trade.sharesAcquired}`);
console.log(`Gross Payout: $${trade.payoutUSDC} USDC`);
console.log(`Net Profit: +$${trade.netProfitUSDC} USDC (+${trade.roiPct}%)`);
```

---

## 🧪 Automated Test Suite

```bash
node --test tests/arena.test.js
```

Output:
```text
✔ 1. calculateTradeOutcome accurately models Mentioned binary market mechanics (0.7ms)
✔ 2. calculateTradeOutcome rejects invalid entry prices outside (0, 1) (0.7ms)
✔ 3. evaluateTeamSeason aggregates 2-person squad profits and tracks Grand Prix leader (0.5ms)

ℹ pass 3
ℹ fail 0
```

---

## 📖 Competition Documentation

Read the complete tactical strategy guide and squad manual:  
👉 **[PITCH_DECK.md](PITCH_DECK.md)**

---

## 📄 License

Released under the [MIT License](LICENSE).
