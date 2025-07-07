class Backpack {
  constructor(
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
      strapLengthL: strapLengthL,
      strapLengthR: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  toggleLid(lidStatus) {
    this.lidStatus = lidStatus;
  }

  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.strapLengthL = lengthLeft;
    this.strapLength.strapLengthR = lengthRight;
  }
}

export default Backpack;
