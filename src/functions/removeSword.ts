import { Sword } from "../types/Sword";
import { removeEntity } from "pixel-pigeon";
import { state } from "../state";

export const removeSword = (swordEntityID: string): void => {
  const swordIndex: number = state.values.swords.findIndex(
    (swordInState: Sword): boolean => swordInState.entityID === swordEntityID,
  );
  if (swordIndex === -1) {
    throw new Error("An attempt was made to remove a non-existent sword.");
  }
  const sword: Sword = state.values.swords[swordIndex];
  removeEntity(sword.entityID);
  state.values.swords.splice(swordIndex, 1);
};
