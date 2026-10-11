// SPDX-License-Identifier: MIT

export type MarketResolutionType = 'AMM' | 'MAJORITY_CONSENSUS';

export interface ArenaTeamMember {
  memberId: string;
  username: string;
  tradesPlaced: number;
  totalVolumeUSDC: number;
  totalNetProfitUSDC: number;
}

export interface ArenaTeam {
  teamName: string;
  seasonId: 'ARENA_SEASON_3';
  members: [ArenaTeamMember, ArenaTeamMember]; // 2-person squad structure
  aggregateTeamProfitUSDC: number;
  bestSingleMarketProfitUSDC: number; // Evaluated for Grand Prix ($70)
}

export interface MentionMarketScenario {
  marketId: string;
  title: string;
  marketType: MarketResolutionType;
  entryPriceUSDC: number; // e.g. 0.40 (implied 40% probability)
  exitPriceUSDC: number;  // 1.00 if correctly resolved Yes, 0.00 if No
  tradeSizeUSDC: number;
}

export interface GrandPrixSimulationResult {
  trader: string;
  marketId: string;
  capitalCommittedUSDC: number;
  netProfitUSDC: number;
  roiPct: number;
  qualifiesGrandPrixMedal: boolean;
}
