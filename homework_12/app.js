'use strict';
let rootNode = document.getElementById("root");

let headline = document.createElement("h1");
headline.innerHTML = "Most popular tanks";

rootNode.appendChild(headline);

tanks.forEach((item) => tanksList(item));

function tanksList(item){
  let tank = document.createElement("div");
  tank.classList = "tank";
  let tankDesc = document.createElement("div");
  tankDesc.classList = "tank-desc";

  let tankPreview = document.createElement("img");
  tankPreview.setAttribute('src', item.preview);
  tank.appendChild(tankPreview);

  let flag = document.createElement("img");
  flag.setAttribute('src', item.country_image);
  tankDesc.appendChild(flag);

  let tankLvl = document.createElement("p");
  tankLvl.innerHTML = item.level;
  tankDesc.appendChild(tankLvl);
  
  let tankModel = document.createElement("p");
  tankModel.innerHTML = item.model.toUpperCase();
  tankDesc.appendChild(tankModel);

  

  

  

  tank.appendChild(tankDesc);
  rootNode.appendChild(tank);

   console.log();
}



