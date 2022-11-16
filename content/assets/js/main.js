const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)
let bg = document.querySelector("body")

c(".active").classList.remove("active")

const createGame = function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/images/selecoes/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/images/selecoes/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

var delay = -0.3
const createCard = function createCard(date, day, games, rodada) {
  delay = delay + 0.4
  return `
     <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>
                 <h4> ${rodada}</h4>
                <ul>
                   ${games}
                </ul>
            </div>
  `
}

document.querySelector("#cards").innerHTML = document.querySelector(
  "#cards"
).innerHTML =
  createCard(
    "24/11",
    "QUINTA",
    createGame("brazil", "07:00", "cameroon") +
      createGame("serbia", "16:00", "switzerland"),
    "1ª Rodada"
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland"),
    "2ª Rodada"
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("cameroon", "16:00", "brazil") +
      createGame("serbia", "16:00", "switzerland"),
    "3ª Rodada"
  )

let grupoA = document.querySelector("#GrupoA")

grupoA.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "20/11",
      "domingo",
      createGame("qatar", "13:00", "ecuador"),
      "1ª Rodada"
    ) +
    createCard(
      "21/11",
      "segunda",
      createGame("senegal", "13:00", "netherlands"),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("netherlands", "12:00", "qatar") +
        createGame("ecuador", "12:00", "senegal"),
      "3ª Rodada"
    )
})

let grupoB = document.querySelector("#GrupoB")
grupoB.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "21/11",
      "segunda",
      createGame("england", "10:00", "iran") +
        createGame("united states", "16:00", "wales")+
          createGame('united states', '16:00', 'wales'),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("wales", "07:00", "iran") +
        createGame("england", "16:00", "united states"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("iran", "16:00", "united states") +
        createGame("wales", "16:00", "england"),
      "3ª Rodada"
    )
})
let grupoC = document.querySelector("#GrupoC")
grupoC.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "07:00", "cameroon") +
        createGame("serbia", "16:00", "brazil"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("cameroon", "07:00", "serbia") +
        createGame("brazil", "13:00", "switzerland"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("cameroon", "16:00", "brazil") +
        createGame("serbia", "16:00", "switzerland"),
      "3ª Rodada"
    )
})
let grupoD = document.querySelector("#GrupoD")
grupoD.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "terça",
      createGame("denmark", "10:00", "tunisia") +
        createGame("france", "16:00", "australia"),
      "1ª Rodada"
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("tunisia", "07:00", "australia") +
        createGame("france", "13:00", "denmark"),
      "2ª Rodada"
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("tunisia", "12:00", "france") +
        createGame("australia", "12:00", "denmark"),
      "3ª Rodada"
    )
})
let grupoE = document.querySelector("#GrupoE")
grupoE.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("germany", "10:00", "japan") +
        createGame("spain", "13:00", "costa rica"),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("japan", "07:00", "costa rica") +
        createGame("spain", "16:00", "germany"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("japan", "16:00", "spain") +
        createGame("costa rica", "16:00", "germany"),
      "3ª Rodada"
    )
})
let grupoF = document.querySelector("#GrupoF")
grupoF.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("morocco", "07:00", "croatia") +
        createGame("belgium", "16:00", "canada"),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("belgium", "10:00", "morocco") +
        createGame("croatia", "13:00", "canada"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("croatia", "12:00", "belgium") +
        createGame("canada", "12:00", "morocco"),
      "3ª Rodada"
    )
})
let grupoG = document.querySelector("#GrupoG")
grupoG.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "07:00", "cameroon") +
        createGame("serbia", "16:00", "brazil"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("cameroon", "07:00", "serbia") +
        createGame("brazil", "13:00", "switzerland"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("cameroon", "16:00", "brazil") +
        createGame("serbia", "16:00", "switzerland"),
      "3ª Rodada"
    )
})
let grupoH = document.querySelector("#GrupoH")
grupoH.addEventListener("click", () => {
  delay = -0.2
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "QUINTA",
      createGame("uruguay", "10:00", "south korea") +
        createGame("portugal", "13:00", "ghana"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("south korea", "10:00", "ghana") +
        createGame("portugal", "16:00", "uruguay"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("south korea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay"),
      "3ª Rodada"
    )
})

const newLocal = (document.querySelector(".blue").onclick = () => {
  document.body.classList.toggle("blue")
  document.body.classList.remove("green", "yellow")
})

themeChange()
function themeChange() {
  document.querySelector(".green").onclick = () => {
    document.body.classList.toggle("green")
    document.body.classList.remove("blue", "yellow")
  }

  document.querySelector(".yellow").onclick = () => {
    document.body.classList.toggle("yellow")
    document.body.classList.remove("green", "blue")
  }
}
