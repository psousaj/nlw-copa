const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)
let bg = document.querySelector("body")

c(".active").classList.remove("active")

const createGame = function createGame(
  player1,
  hour,
  player2,
  result1,
  result2
) {
  if (result1 === undefined || result2 === undefined) {
    result1 = "-"
    result2 = "-"
  }
  return `
    <li>
      <a class="image">
        <img src="./assets/images/selecoes/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <span class="info">${player1}</span>
      </a>
        <div class="result"><h4>${result1}</h4></div>
        <strong>${hour}</strong>
        <div class="result"><h4>${result2}</h4></div>
      <a class="image">
        <img src="./assets/images/selecoes/icon-${player2}.svg" alt="Bandeira da ${player2}">
        <span class="info">${player2}</span>
      </a>
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

var execute =
  (document.querySelector("#cards").innerHTML =
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "QUINTA",
      createGame("brasil", "07:00", "camarões") +
        createGame("sérvia", "16:00", "suiça"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("camarões", "07:00", "sérvia") +
        createGame("brasil", "13:00", "suiça"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("camarões", "16:00", "brasil") +
        createGame("sérvia", "16:00", "suiça"),
      "3ª Rodada"
    ))

let grupoA = document.querySelector("#GrupoA")

grupoA.addEventListener("click", () => {
  // document.querySelector("#GrupoA").onclick = () => {
  //   document.body.classList.toggle("isActive")
  // }
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "20/11",
      "domingo",
      createGame("catar", "13:00", "equador", 0, 2),
      "1ª Rodada"
    ) +
    createCard(
      "21/11",
      "segunda",
      createGame("senegal", "13:00", "holanda", 0, 2),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("catar", "10:00", "senegal") +
        createGame("holanda", "13:00", "equador"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("holanda", "12:00", "catar") +
        createGame("equador", "12:00", "senegal"),
      "3ª Rodada"
    )
})

let grupoB = document.querySelector("#GrupoB")
grupoB.addEventListener("click", () => {
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "21/11",
      "segunda",
      createGame("inglaterra", "10:00", "irã", 6, 2) +
        createGame("estados unidos", "16:00", "gales", 1, 1),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("gales", "07:00", "irã") +
        createGame("inglaterra", "16:00", "estados unidos"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("irã", "16:00", "estados unidos") +
        createGame("gales", "16:00", "inglaterra"),
      "3ª Rodada"
    )
})
let grupoC = document.querySelector("#GrupoC")
grupoC.addEventListener("click", () => {
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "terça",
      createGame("argentina", "07:00", "arábia saudita", 1, 2) +
        createGame("méxico", "13:00", "polônia", 0, 0),
      "1ª Rodada"
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("polônia", "10:00", "arábia saudita") +
        createGame("argentina", "16:00", "méxico"),
      "2ª Rodada"
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("polônia", "16:00", "argentina") +
        createGame("arábia saudita", "16:00", "méxico"),
      "3ª Rodada"
    )
})
let grupoD = document.querySelector("#GrupoD")
grupoD.addEventListener("click", () => {
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "terça",
      createGame("dinamarca", "10:00", "tunísia", 0, 0) +
        createGame("frança", "16:00", "austrália", 4, 1),
      "1ª Rodada"
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("tunísia", "07:00", "austrália") +
        createGame("frança", "13:00", "dinamarca"),
      "2ª Rodada"
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("tunísia", "12:00", "frança") +
        createGame("austrália", "12:00", "dinamarca"),
      "3ª Rodada"
    )
})
let grupoE = document.querySelector("#GrupoE")
grupoE.addEventListener("click", () => {
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("alemanha", "10:00", "japão", 1, 2) +
        createGame("espanha", "13:00", "costa rica", 7, 0),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("japão", "07:00", "costa rica") +
        createGame("espanha", "16:00", "alemanha"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("japão", "16:00", "espanha") +
        createGame("costa rica", "16:00", "alemanha"),
      "3ª Rodada"
    )
})
let grupoF = document.querySelector("#GrupoF")
grupoF.addEventListener("click", () => {
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("marrocos", "07:00", "croácia", 0, 0) +
        createGame("bélgica", "16:00", "canadá", 1, 0),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("bélgica", "10:00", "marrocos") +
        createGame("croácia", "13:00", "canadá"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("croácia", "12:00", "bélgica") +
        createGame("canadá", "12:00", "marrocos"),
      "3ª Rodada"
    )
})
let grupoG = document.querySelector("#GrupoG")
grupoG.addEventListener("click", () => {
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "quinta",
      createGame("suiça", "07:00", "camarões") +
        createGame("sérvia", "16:00", "brasil"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("camarões", "07:00", "sérvia") +
        createGame("brasil", "13:00", "suiça"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("camarões", "16:00", "brasil") +
        createGame("sérvia", "16:00", "suiça"),
      "3ª Rodada"
    )
})
let grupoH = document.querySelector("#GrupoH")
grupoH.addEventListener("click", () => {
  delay = -0.2
  execute = document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "QUINTA",
      createGame("uruguai", "10:00", "coreia do sul") +
        createGame("portugal", "13:00", "gana"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("coreia do sul", "10:00", "gana") +
        createGame("portugal", "16:00", "uruguai"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("coreia do sul", "12:00", "portugal") +
        createGame("gana", "12:00", "uruguai"),
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

// ================ particles ================

window.onload = function () {
  Particles.init({
    selector: ".background",
    sizeVariations: "4",
    color: ["#48F2E3", "#2c3e50", "#95a5a6", "#7f8c8d"],
    connectParticles: true,
    minDistance: 150,
    speed: 0.7,
  })
}
Particles.init({
  // normal options
  selector: ".background",
  maxParticles: 450,
  // options for breakpoints
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 200,
        connectParticles: true,
      },
    },
    {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: true,
      },
    },
    {
      breakpoint: 320,
      options: {
        maxParticles: 30,

        // disables particles.js
      },
    },
  ],
})
