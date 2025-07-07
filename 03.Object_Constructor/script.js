/* This is the old way to create something similar like class
Use class in the new code. You may encounter this in the old code base*/

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };

  this.lidOpen = lidOpen;

  this.toogleLidOpen = function (lidStatus) {
    this.lidOpen = lidStatus;
  };

  this.newStrapLength = function (strapLengthL, strapLengthR) {
    this.strapLength.left = strapLengthL;
    this.strapLength.right = strapLengthR;
  };
}

const everdayPack = new Backpack(
  "Everyday Pack",
  30,
  "grey",
  15,
  26,
  26,
  false
);
