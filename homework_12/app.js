'use strict';
const rootNode = document.getElementById("root");

const tanksPreview = document.createElement("div");

const headline = document.createElement("h1");
headline.innerHTML = "Most popular tanks";
tanksPreview.appendChild(headline);

const tanksColection = document.createElement("div");
tanksColection.classList = "tanksColection";
tanksPreview.appendChild(tanksColection);

rootNode.appendChild(tanksPreview); 

const getTanks = () => {tanks.forEach((item) => tanksList(item))}       

function tanksList(item){
  const tank = document.createElement("div");
  tank.classList = "tank";
  tank.setAttribute('title', "Click to details");

  const hash = item.model.replace(/ /gi, "-").toLowerCase(); 
  tank.addEventListener('click', () => location.hash = hash); //Change hash

  const tankImg = document.createElement("img");
  tankImg.setAttribute("src", item.preview);
  tankImg.setAttribute("title", item.model);
  tank.appendChild(tankImg);

  const tankDesc = document.createElement("div");
  tankDesc.classList = "tank-desc";

  const flag = document.createElement("img");
  flag.setAttribute("src", item.country_image);
  flag.setAttribute("title", item.country);
  tankDesc.appendChild(flag);

  const mainInfo = document.createElement("h4");
  const span = document.createElement("span");
  span.innerHTML = (` ${item.model.toUpperCase()}`);
  const model = document.createTextNode(item.level);

  mainInfo.appendChild(model);
  mainInfo.appendChild(span);
  tankDesc.appendChild(mainInfo);
  
  tank.appendChild(tankDesc);
  tanksColection.appendChild(tank);  
}

const tankDetails = document.createElement("div");  
function detailsView(){
  //Delete old details (container)
  tankDetails.childNodes[0] ? tankDetails.removeChild(tankDetails.childNodes[0]) : null
  
  const model = location.hash.slice(1);
  const tank = tanks.find(
  	(item) => item.model.replace(/ /gi, "-").toLowerCase() === model ? item : null
  );

  const containerDetails = document.createElement("div");

  const description = document.createElement("div");
  description.classList = "description";

  const flag = document.createElement("img");
  flag.setAttribute('src', tank.country_image);
  flag.setAttribute("title", tank.country);
  description.appendChild(flag);
  const mainInfo = document.createElement("h1");
  mainInfo.innerHTML = `${tank.model.toUpperCase()} (level ${tank.level})`;
  description.appendChild(mainInfo);

  containerDetails.appendChild(description);

  const containerGrid = document.createElement("div");
  containerGrid.classList = "containerGrid";

  const leftBlock = document.createElement("div");

  const preview = document.createElement("h2");
  preview.innerHTML = "Preview";
  leftBlock.appendChild(preview);

  const tankImg = document.createElement("img");
  tankImg.setAttribute('src', tank.preview);
  leftBlock.appendChild(tankImg);

  const back = document.createElement("a");
  back.innerHTML = "Back to list view";
  back.setAttribute("href", "");
  leftBlock.appendChild(back);

  containerGrid.appendChild(leftBlock);
  containerDetails.appendChild(containerGrid);

   //Table Characteristic
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.innerHTML = "Characteristic";
  table.appendChild(caption);
  for (let prop in tank.details){
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const tdProp = document.createElement("td");
    tdProp.innerHTML = prop.replace(/_/gi, " ");
    tr.appendChild(tdProp);
    const tdValue = document.createElement("td");
    tdValue.innerHTML = tank.details[prop];
    tr.appendChild(tdValue);
  }
  containerGrid.appendChild(table);

  tankDetails.appendChild(containerDetails);
  rootNode.replaceChild(tankDetails, tanksPreview);   
}

//differentiate which content to render
!location.hash ? getTanks() : detailsView()

window.addEventListener('hashchange',
  () => { 
  	if(location.hash){
      detailsView();
    } else {			 
      !tanksColection.childNodes[0] ? getTanks() : false //get tanks list if page reloaded
      rootNode.replaceChild(tanksPreview, tankDetails);
    }  
  }
);
