import { getCurrentTime } from "pigeon-mode-game-framework";
import { knockbackDuration } from "../constants/knockbackDuration";
import { state } from "../state";

export const isTakingKnockback = (): boolean =>
  state.values.playerHit !== null &&
  getCurrentTime() < state.values.playerHit.time + knockbackDuration;
