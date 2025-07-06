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
