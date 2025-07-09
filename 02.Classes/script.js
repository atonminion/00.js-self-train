import Backpack from "./Backpack.js";

const everdayPack = new Backpack(
  "Everyday Pack",
  30,
  "green",
  10,
  26,
  26,
  false,
  "5 Dec 2024 18:00:09 PST"
);

console.log("Everyday Pack Object :", everdayPack);
console.log("The pocket num value:", everdayPack.pocketNum);
console.log("Age of the backpack : ", everdayPack.ageOfBackpack());
