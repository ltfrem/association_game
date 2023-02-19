const content = {
  cheese: ["cottage", "swiss", "cake"],
  ice: ["cream", "skate", "water"],
  sore: ["loser", "throat", "spot"],
  boat: ["show", "life", "row"],
  watch: ["night", "wrist", "stop"],
  bill: ["duck", "fold", "dollar"],
  chair: ["rocking", "wheel", "high"],
  honey: ["dew", "comb", "bee"],
  soda: ["fountain", "baking", "pop"],
  forest: ["preserve", "ranger", "tropical"],
  band: ["aid", "rubber", "wagon"],
  snow: ["flake", "mobile", "cone"],
  fire: ["cracker", "fly", "fighter"],
  pin: ["safety", "cushion", "point"],
  sugar: ["cane", "daddy", "plum"],
  day: ["dream", "break", "light"],
  gold: ["fish", "mine", "rush"],
  party: ["political", "surprise", "line"],
  tape: ["measure", "worm", "video"],
  school: ["high", "district", "house"],
  court: ["district", "high", "house"], //potential future bug
  common: ["sense", "courtesy", "place"],
  book: ["worm", "shelf", "end"],
  game: ["piece", "mind", "dating"],
  girl: ["flower", "friend", "scout"],
  bank: ["river", "note", "account"],
  blue: ["print", "berry", "bird"],
  pot: ["pie", "luck", "belly"],
  blind: ["date", "alley", "fold"],
  soap: ["opera", "hand", "dish"],
  space: ["cadet", "capsule", "ship"],
  coat: ["fur", "rack", "tail"],
  match: ["stick", "maker", "point"],
  blood: ["hound", "pressure", "shot"],
  hole: ["fox", "man", "peep"],
  bag: ["sleeping", "bean", "trash"],
  bowl: ["dust", "cereal", "fish"],
  candle: ["light", "birthday", "stick"],
  fast: ["food", "forward", "break"],
  moon: ["shine", "beam", "struck"],
  pit: ["peach", "arm", "tar"],
  salt: ["water", "mine", "shaker"],
};

const keys = Object.keys(content);
const values = Object.values(content);

function generate_new() {
  //get number of keys in the dictionary
  const length = Object.keys(content).length;
  const num = Math.floor(Math.random() * length);
  let random_key = keys[num];
  return content[random_key];
}

let main_div = document.getElementById("words");
let selection = generate_new();
main_div.textContent = selection.toString().replaceAll(",", "\n");
console.log(selection);

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

let usr_input = document.getElementById("usr_input");
let button = document.getElementById("submit");
let reset = document.getElementById("reset");
reset.style.display = "none"; //do not display as default

button.addEventListener("click", function () {
  if (usr_input.value == getKeyByValue(content, selection)) {
    main_div.style.backgroundColor = "#A5CBB2";
    reset.style.display = "block";
  } else {
    let tries = document.getElementById("tries");
    let li = document.createElement("li");
    tries.appendChild(document.createTextNode(usr_input.value));
    tries.appendChild(li);
  }
});

reset.addEventListener("click", function () {
  location.reload();
});
