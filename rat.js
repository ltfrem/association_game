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
  tree: ["palm", "show", "house"],
  ball: ["basket", "eight", "snow"],
  cart: ["wheel", "hand", "shopping"],
  copy: ["right", "cat", "carbon"],
  sick: ["home", "sea", "bed"],
  family: ["nuclear", "feud", "album"],
  club: ["sandwich", "house", "golf"],
  bow: ["cross", "rain", "tie"],
  brush: ["sage", "paint", "hair"],
  horn: ["french", "car", "shoe"],
  camp: ["boot", "summer", "ground"],
  gas: ["chamber", "mask", "natural"],
  saw: ["mill", "tooth", "dust"],
  street: ["main", "sweeper", "light"],
  turn: ["pike", "coat", "signal"],
  box: ["office", "mail", "hat"],
  paper: ["fly", "clip", "wall"],
  stone: ["age", "mile", "sand"],
  dog: ["catcher", "food", "hot"],
  station: ["wagon", "break", "radio"],
  top: ["tank", "hill", "secret"],
  care: ["health", "taker", "less"],
  face: ["lift", "card", "mask"],
  sun: ["dress", "dial", "flower"],
  air: ["force", "line", "mail"],
  fall: ["guy", "rain", "down"],
  figure: ["right", "skate", "stick"],
  mark: ["down", "question", "check"],
  pack: ["animal", "back", "rat"],
  petty: ["officer", "cash", "larceny"],
  apple: ["pine", "crab", "sauce"],
  green: ["house", "thumb", "pepper"],
  red: ["carpet", "alert", "ink"],
  ring: ["master", "toss", "finger"],
  head: ["hammer", "gear", "hunter"],
  pen: ["knife", "light", "pal"],
  play: ["foul", "ground", "mate"],
  short: ["change", "circuit", "cake"],
  walk: ["way", "board", "sleep"],
  check: ["blank", "list", "mate"],
  gate: ["tail", "water", "flood"],
  grand: ["marshal", "child", "piano"],
  under: ["cover", "arm", "wear"],
  acid: ["rain", "test", "stomach"],
  full: ["time", "blown", "nelson"],
  stock: ["pile", "market", "room"],
  trap: ["mouse", "bear", "sand"],
  call: ["cat", "number", "phone"],
  powder: ["keg", "puff", "room"],
  field: ["trip", "house", "goal"],
  pitch: ["fork", "dark", "man"],
  post: ["fence", "card", "master"],
  road: ["test", "runner", "map"],
  sky: ["dive", "light", "rocket"],
  super: ["man", "glue", "star"],
  sweet: ["tooth", "potato", "heart"],
  terminal: ["illness", "bus", "computer"],
  writer: ["type", "ghost", "screen"],
  black: ["mail", "board", "lung"],
  false: ["teeth", "arrest", "start"],
  steam: ["iron", "shovel", "engine"],
  suit: ["wet", "law", "business"],
  tow: ["rope", "truck", "line"],
  base: ["off", "military", "first"],
  table: ["spoon", "cloth", "card"],
  cold: ["cut", "cream", "war"],
  key: ["note", "chain", "master"],
  after: ["shock", "shave", "taste"],
  clock: ["wise", "work", "tower"],
  crab: ["grass", "king", "meat"],
  shower: ["baby", "spring", "cap"],
  coffee: ["break", "bean", "cake"],
  battle: ["cry", "front", "ship"],
  foot: ["hold", "print", "stool"],
  jelly: ["roll", "bean", "fish"],
  race: ["horse", "human", "drag"],
  salad: ["oil", "bar", "tuna"],
  bell: ["bottom", "curve", "hop"],
  cherry: ["tomato", "bomb", "picker"],
  nut: ["pea", "shell", "chest"],
  punch: ["line", "fruit", "drunk"],
  goose: ["bump", "egg", "step"],
  gun: ["fight", "control", "machine"],
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
