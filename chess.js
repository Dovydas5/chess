const chess = document.querySelector(".chess");
const rowCount = 8;
const columsCount = 8;
const firstColor = "#fff";
const secondColor = "#000";

let HTML = "";
chess.innerHTML = HTML;

for (let y = 1; y <= rowCount; y++) {
  HTML += `<div class="row" style="height: calc(100% / ${rowCount});">`;

  for (let x = 1; x <= columsCount; x++) {
    if ((x + y) % 2 === 0) {
      color = firstColor;
    } else {
      color = secondColor;
    }

    HTML += `<div class="cell" style="background-color: ${color}; width: calc(100% / ${columsCount});"></div>`;
  }
  HTML += `</div>`;
}
chess.innerHTML += HTML;

