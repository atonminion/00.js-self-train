const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("Current Bag Volume : ", this.volume);
    this.volume = volume;
    console.log("Updated Bag Volume : ", this.volume);
  },
};

const redPack = {
  name: "Chiansenye",
  color: "red",
  volume: 10,
  pocketNum: 5,
};

const addPack = (pack) => {
  main = document.querySelector("main");
  title = document.createElement("h1");
  title.innerText = pack.name;
  main.append(title);

  ul = document.createElement("ul");

  for (const prop in pack) {
    if (prop === "name") {
      continue;
    }

    console.log(`Type of ${prop} : ${typeof pack[prop]}`);

    if (typeof pack[prop] != "function") {
      li = document.createElement("li");
      li.innerText = `${prop} : ${pack[prop]}`;
      ul.append(li);
    }
  }

  main.append(ul);

  return "Added!";
};

console.log(addPack(greenPack));
console.log(addPack(redPack));
