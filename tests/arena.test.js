// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { MentionedArenaEngine } from '../dist/index.js';

test('1. calculateTradeOutcome accurately models Mentioned binary market mechanics', () => {
  const scenario = {
    marketId: 'mkt_sol_ath',
    title: 'Will SOL reach ATH by end of October 2026?',
    marketType: 'AMM',
    entryPriceUSDC: 0.40, // 40 cents entry
    exitPriceUSDC: 1.00,  // Resolves YES ($1.00)
    tradeSizeUSDC: 100.0
  };

  const outcome = MentionedArenaEngine.calculateTradeOutcome(scenario);
  assert.equal(outcome.sharesAcquired, 250.0);
  assert.equal(outcome.payoutUSDC, 250.0);
  assert.equal(outcome.netProfitUSDC, 150.0);
  assert.equal(outcome.roiPct, 150.0);
});

test('2. calculateTradeOutcome rejects invalid entry prices outside (0, 1)', () => {
  assert.throws(() => {
    MentionedArenaEngine.calculateTradeOutcome({
      marketId: 'err',
      title: 'Err',
      marketType: 'AMM',
      entryPriceUSDC: 1.05,
      exitPriceUSDC: 1.00,
      tradeSizeUSDC: 50
    });
  }, /Entry price must be strictly between 0 and 1.00/);
});

test('3. evaluateTeamSeason aggregates 2-person squad profits and tracks Grand Prix leader', () => {
  const member1 = {
    memberId: 'm1',
    username: 'liutingqiu',
    tradesPlaced: 0,
    totalVolumeUSDC: 0,
    totalNetProfitUSDC: 0
  };

  const member2 = {
    memberId: 'm2',
    username: 'sol_trader_partner',
    tradesPlaced: 0,
    totalVolumeUSDC: 0,
    totalNetProfitUSDC: 0
  };

  const trades = [
    {
      memberId: 'm1',
      scenario: {
        marketId: 'mkt_01',
        title: 'Fed Rate Decision November',
        marketType: 'AMM',
        entryPriceUSDC: 0.25, // 25 cents entry
        exitPriceUSDC: 1.00,  // Wins
        tradeSizeUSDC: 50.0   // Payout = 200, Profit = 150
      }
    },
    {
      memberId: 'm2',
      scenario: {
        marketId: 'mkt_02',
        title: 'Solana Breakpoint Attendance Record',
        marketType: 'MAJORITY_CONSENSUS',
        entryPriceUSDC: 0.50,
        exitPriceUSDC: 1.00,
        tradeSizeUSDC: 100.0  // Payout = 200, Profit = 100
      }
    }
  ];

  const result = MentionedArenaEngine.evaluateTeamSeason('Apex Alpha Squad', member1, member2, trades);

  assert.equal(result.team.teamName, 'Apex Alpha Squad');
  assert.equal(result.team.seasonId, 'ARENA_SEASON_3');
  assert.equal(result.team.aggregateTeamProfitUSDC, 250.0);
  assert.equal(result.team.bestSingleMarketProfitUSDC, 150.0);
  assert.equal(result.grandPrixLeader.trader, 'liutingqiu');
  assert.equal(result.grandPrixLeader.netProfitUSDC, 150.0);
  assert.equal(result.grandPrixLeader.qualifiesGrandPrixMedal, true);
});
