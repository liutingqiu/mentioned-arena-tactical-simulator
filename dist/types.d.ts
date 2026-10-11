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
    members: [ArenaTeamMember, ArenaTeamMember];
    aggregateTeamProfitUSDC: number;
    bestSingleMarketProfitUSDC: number;
}
export interface MentionMarketScenario {
    marketId: string;
    title: string;
    marketType: MarketResolutionType;
    entryPriceUSDC: number;
    exitPriceUSDC: number;
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
