import { ArenaTeam, ArenaTeamMember, MentionMarketScenario, GrandPrixSimulationResult } from '../types.js';
export declare class MentionedArenaEngine {
    /**
     * Calculates profit for a single binary prediction trade on Mentioned.
     * On Mentioned AMM / majority pools, buying shares at entryPrice P (e.g. $0.40)
     * pays out $1.00 upon successful resolution.
     */
    static calculateTradeOutcome(scenario: MentionMarketScenario): {
        sharesAcquired: number;
        payoutUSDC: number;
        netProfitUSDC: number;
        roiPct: number;
    };
    /**
     * Evaluates team performance for the Arena Season 3 competition,
     * tracking aggregate team profit and single-market Grand Prix medal eligibility.
     */
    static evaluateTeamSeason(teamName: string, member1: ArenaTeamMember, member2: ArenaTeamMember, trades: Array<{
        memberId: string;
        scenario: MentionMarketScenario;
    }>): {
        team: ArenaTeam;
        grandPrixLeader: GrandPrixSimulationResult;
    };
}
