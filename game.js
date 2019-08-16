let health = 100;
let targetName = "Fighting Chicken";
let targetHits = 0;

function hitCounter() {
  targetHits++
}

function slap() {
  health--
  alert(health)
  update()

}
function punch() {
  health -= 5
  alert(health)
  update()
}
function kick() {
  health -= 10
  alert(health)
  update()
}

function update() {
  document.getElementById("health").innerText //+= health
  document.getElementById("name").innerText //+= targetName

}

update()
