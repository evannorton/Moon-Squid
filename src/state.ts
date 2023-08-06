import { Arrow } from "./types/Arrow";
import { Direction, YDirection } from "./types/Direction";
import { Monster } from "./types/Monster";
import { State } from "pigeon-mode-game-framework";
import { Sword } from "./types/Sword";

interface StateSchema {
  arrows: Map<string, Arrow>;
  direction: Direction;
  isAtTitle: boolean;
  monsters: Map<string, Monster<string>>;
  playerEntityID: string | null;
  shotArrowAt: number | null;
  swords: Map<string, Sword>;
  swungSwordAt: number | null;
}
const defaultState: StateSchema = {
  arrows: new Map(),
  direction: YDirection.Down,
  isAtTitle: true,
  monsters: new Map(),
  playerEntityID: null,
  shotArrowAt: null,
  swords: new Map(),
  swungSwordAt: null,
};

export const state: State<StateSchema> = new State(defaultState);
