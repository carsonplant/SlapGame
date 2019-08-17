let chicken = {
  health: 100,
  name: "Fighting Chicken",
  targetHits: 0,
  items: []
}

let items = {

  pan: {
    name: "Frying Pan",
    modifier: 5
  },

  bat: {
    name: "Baseball bat",
    modifier: 10,
  },

  helmet: {
    name: "Helmet",
    modifier: -10
  }

}
let modActive = false

function slap() {
  if (chicken.health >= 1) {

    let damage = 1 + addMods();
    chicken.health -= damage;
    chicken.targetHits++

  }
  update()

}
function punch() {
  if (chicken.health >= 1) {
    let damage = 5
    chicken.health -= damage;
    chicken.targetHits++
  }
  update()
}
function kick() {
  if (chicken.health >= 1) {
    let damage = 10
    chicken.health -= damage
    chicken.targetHits++
  }
  update()
}

function usePan() {
  if (modActive == false) {
    chicken.items.push(items.pan)
    modActive = true
  }
  update()
}
function addMods() {
  debugger
  var mods = 0
  for (let i = 0; i <= chicken.items.length; i++) {
    mods = chicken.items[i]
  }
  return mods
}
function update() {
  document.getElementById("name").innerText = `${chicken.name}` //+= targetName
  document.getElementById("hits").innerText = `${chicken.targetHits}` //+= targetName
  if (chicken.health <= 0) {
    document.getElementById("health").innerText = "Defeated" //+= health

  } else {
    document.getElementById("health").innerText = `${chicken.health}` //+= health
  }

}

update()
