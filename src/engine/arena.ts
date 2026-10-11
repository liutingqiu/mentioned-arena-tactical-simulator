// SPDX-License-Identifier: MIT
import {
  ArenaTeam,
  ArenaTeamMember,
  MentionMarketScenario,
  GrandPrixSimulationResult
} from '../types.js';

export class MentionedArenaEngine {
  /**
   * Calculates profit for a single binary prediction trade on Mentioned.
   * On Mentioned AMM / majority pools, buying shares at entryPrice P (e.g. $0.40)
   * pays out $1.00 upon successful resolution.
   */
  public static calculateTradeOutcome(scenario: MentionMarketScenario): {
    sharesAcquired: number;
    payoutUSDC: number;
    netProfitUSDC: number;
    roiPct: number;
  } {
    if (scenario.entryPriceUSDC <= 0 || scenario.entryPriceUSDC >= 1.0) {
      throw new Error('Entry price must be strictly between 0 and 1.00');
    }
    if (scenario.tradeSizeUSDC <= 0) {
      throw new Error('Trade size must be strictly positive');
    }

    const sharesAcquired = scenario.tradeSizeUSDC / scenario.entryPriceUSDC;
    const payoutUSDC = sharesAcquired * scenario.exitPriceUSDC;
    const netProfitUSDC = payoutUSDC - scenario.tradeSizeUSDC;
    const roiPct = (netProfitUSDC / scenario.tradeSizeUSDC) * 100;

    return {
      sharesAcquired: parseFloat(sharesAcquired.toFixed(4)),
      payoutUSDC: parseFloat(payoutUSDC.toFixed(4)),
      netProfitUSDC: parseFloat(netProfitUSDC.toFixed(4)),
      roiPct: parseFloat(roiPct.toFixed(2))
    };
  }

  /**
   * Evaluates team performance for the Arena Season 3 competition,
   * tracking aggregate team profit and single-market Grand Prix medal eligibility.
   */
  public static evaluateTeamSeason(
    teamName: string,
    member1: ArenaTeamMember,
    member2: ArenaTeamMember,
    trades: Array<{ memberId: string; scenario: MentionMarketScenario }>
  ): {
    team: ArenaTeam;
    grandPrixLeader: GrandPrixSimulationResult;
  } {
    let bestProfit = 0;
    let grandPrixRecord: GrandPrixSimulationResult = {
      trader: member1.username,
      marketId: 'none',
      capitalCommittedUSDC: 0,
      netProfitUSDC: 0,
      roiPct: 0,
      qualifiesGrandPrixMedal: false
    };

    for (const trade of trades) {
      const outcome = this.calculateTradeOutcome(trade.scenario);
      const isM1 = trade.memberId === member1.memberId;
      const targetMember = isM1 ? member1 : member2;

      targetMember.tradesPlaced += 1;
      targetMember.totalVolumeUSDC += trade.scenario.tradeSizeUSDC;
      targetMember.totalNetProfitUSDC += outcome.netProfitUSDC;

      if (outcome.netProfitUSDC > bestProfit) {
        bestProfit = outcome.netProfitUSDC;
        grandPrixRecord = {
          trader: targetMember.username,
          marketId: trade.scenario.marketId,
          capitalCommittedUSDC: trade.scenario.tradeSizeUSDC,
          netProfitUSDC: outcome.netProfitUSDC,
          roiPct: outcome.roiPct,
          qualifiesGrandPrixMedal: outcome.netProfitUSDC > 0
        };
      }
    }

    const team: ArenaTeam = {
      teamName,
      seasonId: 'ARENA_SEASON_3',
      members: [member1, member2],
      aggregateTeamProfitUSDC: parseFloat((member1.totalNetProfitUSDC + member2.totalNetProfitUSDC).toFixed(4)),
      bestSingleMarketProfitUSDC: parseFloat(bestProfit.toFixed(4))
    };

    return {
      team,
      grandPrixLeader: grandPrixRecord
    };
  }
}
