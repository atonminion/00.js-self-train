class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
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
    this.dateAcquired = dateAcquired;
  }

  toggleLid(lidStatus) {
    this.lidStatus = lidStatus;
  }

  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.strapLengthL = lengthLeft;
    this.strapLength.strapLengthR = lengthRight;
  }
  ageOfBackpack() {
    const curDate = new Date();
    const acqDate = new Date(this.dateAcquired);
    const ageMil = curDate - acqDate;
    return Math.round(ageMil / (1000 * 3600 * 24));
  }
}

export default Backpack;
