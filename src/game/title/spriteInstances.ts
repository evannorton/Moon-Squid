import { TitleAnimation, titleSpriteID } from "./sprites";
import { createSpriteInstance } from "pixel-pigeon";
import { isAtTitle } from "./conditions";

export const titleSpriteInstanceID: string = createSpriteInstance({
  coordinates: {
    condition: isAtTitle,
    x: 0,
    y: 0,
  },
  getAnimationID: (): TitleAnimation => TitleAnimation.Title,
  spriteID: titleSpriteID,
});
