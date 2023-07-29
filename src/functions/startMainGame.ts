import { MoblinAnimation, moblinSpriteID } from "../game/main/sprites";
import { Monster } from "../types/Monster";
import { YDirection } from "../types/Direction";
import {
  createSpriteInstance,
  goToLevel,
  lockCameraToEntity,
  spawnEntity,
} from "pigeon-mode-game-framework";
import { playerSpriteInstanceID } from "../game/main/spriteInstances";
import { state } from "../state";

export const startMainGame = (): void => {
  state.setValues({ isAtTitle: false });
  goToLevel("test_level");
  const playerEntityID: string = spawnEntity({
    entityID: "player",
    height: 16,
    layerID: "entities",
    spriteInstanceID: playerSpriteInstanceID,
    width: 16,
    x: 0,
    y: 0,
    zIndex: 1,
  });
  state.setValues({
    playerEntityID,
  });
  lockCameraToEntity(playerEntityID);
  const monsters: Map<string, Monster<string>> = new Map<
    string,
    Monster<string>
  >(state.values.monsters);
  const moblinSpriteInstanceID: string = createSpriteInstance({
    spriteID: moblinSpriteID,
  });
  const moblinEntityID: string = spawnEntity({
    entityID: "moblin",
    height: 16,
    layerID: "entities",
    spriteInstanceID: moblinSpriteInstanceID,
    width: 16,
    x: 64,
    y: 64,
    zIndex: 0,
  });
  monsters.set(moblinEntityID, {
    direction: YDirection.Down,
    entityID: moblinEntityID,
    idleDownAnimationID: MoblinAnimation.IdleDown,
    idleLeftAnimationID: MoblinAnimation.IdleLeft,
    idleRightAnimationID: MoblinAnimation.IdleRight,
    idleUpAnimationID: MoblinAnimation.IdleUp,
    spriteInstanceID: moblinSpriteInstanceID,
  });
  state.setValues({ monsters });
};
