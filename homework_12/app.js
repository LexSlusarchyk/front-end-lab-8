'use strict';
const rootNode = document.getElementById("root");
const tankPreview = document.createElement("div");

const headline = document.createElement("h1");
headline.innerHTML = "Most popular tanks";
tankPreview.appendChild(headline);

const tanksColection = document.createElement("div");
tanksColection.classList = "tanksColection";

tanks.forEach((item) => tanksList(item));

tankPreview.appendChild(tanksColection);
rootNode.appendChild(tankPreview);        

function tanksList(item){
  const tank = document.createElement("div");
  tank.classList = "tank";
  tank.addEventListener('click', () => location.hash = item.model); //Change hash

  const tankPreview = document.createElement("img");
  tankPreview.setAttribute('src', item.preview);
  tank.appendChild(tankPreview);

  const tankDesc = document.createElement("div");
  tankDesc.classList = "tank-desc";

  const flag = document.createElement("img");
  flag.setAttribute('src', item.country_image);
  tankDesc.appendChild(flag);

  const mainInfo = document.createElement("h4");
  mainInfo.innerHTML = `${item.level}  ${item.model.toUpperCase()}`;
  tankDesc.appendChild(mainInfo);
  
  tank.appendChild(tankDesc);
  tanksColection.appendChild(tank);
}

const tankDetails = document.createElement("div");
function detailsView(){

  const model = location.hash.slice(1);
  const tank = tanks.find((item) => item.model === model ? item : null);

  const description = document.createElement("div");

  const flag = document.createElement("img");
  flag.setAttribute('src', tank.country_image);
  description.appendChild(flag);
  const mainInfo = document.createElement("h4");
  mainInfo.innerHTML = `${tank.model.toUpperCase()} (level ${tank.level})`;
  description.appendChild(mainInfo);

  tankDetails.appendChild(description);

  const preview = document.createElement("h4");
  preview.innerHTML = "Preview";
  tankDetails.appendChild(preview);

  const tankImg = document.createElement("img");
  tankImg.setAttribute('src', tank.preview);
  tankDetails.appendChild(tankImg);


  //Table Characteristic
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.innerHTML = "Characteristic";
  table.appendChild(caption);
  for (let prop in tank.details){
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const tdProp = document.createElement("td");
    tdProp.innerHTML = prop;
    tr.appendChild(tdProp);
    const tdValue = document.createElement("td");
    tdValue.innerHTML = tank.details[prop];
    tr.appendChild(tdValue);
  }
  tankDetails.appendChild(table);
  
  const back = document.createElement("a");
  back.innerHTML = "Back to list view";
  back.setAttribute("href", "");

  tankDetails.appendChild(back);

  rootNode.replaceChild(tankDetails, tankPreview);   
}

//differentiate which content to render 
window.addEventListener('hashchange',
  () => {location.hash ? detailsView() : rootNode.replaceChild(tankPreview, tankDetails)}
);
