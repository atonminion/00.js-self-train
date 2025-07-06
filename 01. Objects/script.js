const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  strapLength: {
    left: "26",
    right: "26,",
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
console.log("The backpack object: ", backpack);
console.log("The backpack name: ", backpack.name);
/*Dot notation access Property */
console.log("The backpack Strap length Left: ", backpack.strapLength.left);
/*Bracket access Property */
const props = "volume";
console.log("The backpack Volume: ", backpack[props]);
