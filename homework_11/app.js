var rootNode = document.getElementById("root");

var tree = document.createElement("div");

(function growTree(structure, node){
  var uList = document.createElement('ul');
  node.appendChild(uList);

  for (var i = 0; i < structure.length; i++){
    var list = document.createElement('li');
    uList.appendChild(list);

    var div = document.createElement('div');
    list.append(div);

    var icon = document.createElement('i');
    icon.classList.add('material-icons');

    div.appendChild(icon);
    div.append(structure[i].title);

    if (structure[i].folder) {
      div.setAttribute('onclick','toggleShow(this)');
      icon.classList.add('folder');
      icon.innerHTML = "folder";

      if (structure[i].children) {
        growTree(structure[i].children, list);
      } else {
        var uList = document.createElement('ul');
        list.appendChild(uList);
        var list = document.createElement('li');
        list.innerHTML = '<em>Folder is empty</em>';

        uList.appendChild(list);
      }
    } else {
      icon.innerHTML = "insert_drive_file";
    }
  }
})(structure, tree);

function toggleShow(element){
  if (element.childNodes[0].innerHTML === "folder") {
    element.childNodes[0].innerHTML = "folder_open";
  } else {
    element.childNodes[0].innerHTML = "folder";
  }
  element.parentElement.childNodes[1].classList.toggle('show');
}

rootNode.appendChild(tree);