import { Monster } from "../../classes/Monster";

export const startPhase1 = (): void => {
  const squidHead: Monster = new Monster({
    imagePath: "monsters/squid-head",
    movementSpeed: 16,
    x: 8 * 16,
    y: 3 * 16,
  });
  const squidArms: Monster[] = [
    new Monster({
      imagePath: "monsters/squid-arm",
      movementSpeed: 32,
      x: 6 * 16,
      y: 3 * 16,
    }),
    new Monster({
      imagePath: "monsters/squid-arm",
      movementSpeed: 32,
      x: 7 * 16,
      y: 3 * 16,
    }),
    new Monster({
      imagePath: "monsters/squid-arm",
      movementSpeed: 32,
      x: 9 * 16,
      y: 3 * 16,
    }),
    new Monster({
      imagePath: "monsters/squid-arm",
      movementSpeed: 32,
      x: 10 * 16,
      y: 3 * 16,
    }),
  ];
  squidHead.wander(squidHead.id, 1, 0.5);
  for (const squidArm of squidArms) {
    squidArm.wander(squidHead.id, 2, 0);
  }
};
