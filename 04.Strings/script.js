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

const content = `
    <h1>${everdayPack.name}</h1>
    <ul>
      <li>Volume : ${everdayPack.volume}</li>
      <li>Color : ${everdayPack.color}</li>
      <li>Number of Pockets : ${everdayPack.pocketNum}</li>
      <li>Left strap length : ${everdayPack.strapLength.strapLengthL}</li>
      <li>Right strap length :${everdayPack.strapLength.strapLengthR} </li>
      <li>Lid Status : ${everdayPack.lidOpen}</li>
    </ul>
`;

document.body.innerHTML = content;

console.log("Everyday Pack Object :", everdayPack);
console.log("The pocket num value:", everdayPack.pocketNum);
console.log("Age of the backpack : ", everdayPack.ageOfBackpack());
