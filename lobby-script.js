import * as mm from '/home/demiler/projects/imaginarium/modules/my-module.js'

playersReady = 0;

playersReady += 2;

function ImReady() {
  mm.hell();
  playersReady++;
  let elm = document.getElementById("ready");
  elm.innerHTML = Number(elm.innerHTML) + 1;
}