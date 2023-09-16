const contNotas = document.getElementById("nuevaNota");
const newnoteBtn = document.getElementById("newNoteBtn");
const dropZone1 = document.getElementById("dropZone");
const dropZone2 = document.getElementById("dropZone1");
const dropZone3 = document.getElementById("dropZone2");
let touch = false;

function cargarNotas() {
  return JSON.parse(localStorage.getItem("LeoBenitez-notas")) || [];
}

window.onload = () => {
  const notasGuardadas = cargarNotas();

  notasGuardadas.forEach(note => {
    const noteElement = funciones(note.id, note.content, note.divDestino, note.currentLocation, note.color);
   
    switch (note.divDestino) {
      case "dropZone":
        dropZone1.appendChild(noteElement)
        break;
      case "dropZone1":
        dropZone2.appendChild(noteElement)
        break;
      case "dropZone2":
        dropZone3.appendChild(noteElement)
        break;
      default:
        contNotas.appendChild(noteElement)
        break
    }

    switch (note.color) {
      case "color1":
        noteElement.classList.add("color1");
        noteElement.classList.remove("color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9")
        break;
      case "color2":
        noteElement.classList.remove("color1", "color3", "color4", "color5", "color6", "color7", "color8", "color9")
        noteElement.classList.add("color2");
        break;
      case "color3":
        noteElement.classList.remove("color1", "color2", "color4", "color5", "color6", "color7", "color8", "color9")
        noteElement.classList.add("color3")
        break;
      case "color4":
        noteElement.classList.remove("color1", "color2", "color3", "color5", "color6", "color7", "color8", "color9")
        noteElement.classList.add("color4");
        break;
      case "color5":
        noteElement.classList.remove("color1", "color2", "color3", "color4", "color6", "color7", "color8", "color9")
        noteElement.classList.add("color5");
        break;
      case "color6":
        noteElement.classList.remove("color1", "color2", "color3", "color4", "color5", "color7", "color8", "color9")
        noteElement.classList.add("color6");
        break;
      case "color7":
        noteElement.classList.remove("color1", "color2", "color3", "color4", "color5", "color6", "color8", "color9")
        noteElement.classList.add("color7");
        break;
      case "color8":
        noteElement.classList.remove("color1", "color2", "color3", "color4", "color5", "color6", "color7", "color9")
        noteElement.classList.add("color8");
        break;
      case "color9":
        noteElement.classList.remove("color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8")
        noteElement.classList.add("color9");
        break;
    }
  });
}

newnoteBtn.addEventListener("click", agregar());
const referencias = document.getElementById("referencias");
cargarReferencias();

referencias.addEventListener("input", () => {
  guardarReferencias();
});

function guardar(notes) {
  localStorage.setItem("LeoBenitez-notas", JSON.stringify(notes));

}

function funciones(id, content, divDestino, currentLocation, color) {

  /*---------------- Propiedades de cada Nota ----------------*/

  const element = document.createElement("textarea");

  element.classList.add("note");
  element.setAttribute("id", "newnote");
  element.value = content;
  element.placeholder = "Nota vacía";
  element.setAttribute("draggable", "true")
  if (color == "color5") {
    element.classList.add("color5");
  }

  /*---------------- Drag and Drop ----------------*/

  const dragStartHandler = e => {
    contClass()
    mover(id, element, divDestino, currentLocation)
  };

  const touchDragHandler = (e) => {
    contClass()
    console.log("inicio de escucha de evento touch Drag")
    mover(id, element, divDestino, currentLocation)
  }

  if ('ontouchstart' in window) {
    element.addEventListener("touchstart", touchDragHandler)
    touch = true;
    console.log("inicio de escucha de evento touch Start")
  } else {
    element.addEventListener("dragstart", dragStartHandler)
  }

  function contClass() {
    contNotas.classList.add("drag");
    dropZone1.classList.add("drag");
    dropZone2.classList.add("drag");
    dropZone3.classList.add("drag");
  }
  /*---------------- Modificar y Menu----------------*/

  const menu = document.getElementById("dobleclick")

  element.addEventListener("input", () => {
    actualizar(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    document.body.style.overflow = "hidden";
    menu.style.display = "flex";
    colores(id, element);
  });

  return element;
}

function agregar() {
  return function () {
    const notasActuales = cargarNotas();
    const noteObject = {
      id: Math.floor(Math.random() * 100000000000),
      content: "",
      divDestino: "nuevaNota",
      currentLocation: "",
      color: "color5"
    };
    const noteElement = funciones(noteObject.id, noteObject.content, noteObject.divDestino, noteObject.currentLocation, noteObject.color);
    contNotas.insertBefore(noteElement, newnoteBtn);
    notasActuales.push(noteObject);
    guardar(notasActuales);
  };
}

function actualizar(id, newContent) {
  const notasActuales = cargarNotas();
  const targetNote = notasActuales.find(note => note.id == id);

  if (targetNote) {
    targetNote.content = newContent;
    guardar(notasActuales);
  }
}

function eliminar(id, element) {

  const notasActuales1 = cargarNotas().filter(note => note.id != id);
  const notasActuales = cargarNotas();
  const targetNote = notasActuales.find(note => note.id == id);

  switch (targetNote.divDestino) {
    case "dropZone":
      dropZone1.removeChild(element);
      break;
    case "dropZone1":
      dropZone2.removeChild(element);
      break;
    case "dropZone2":
      dropZone3.removeChild(element);
      break;
    default:
      contNotas.removeChild(element);
      break;
  }

  guardar(notasActuales1);
}

function mover(id, element, divDestino, currentLocation) {
  const notasActuales = cargarNotas();
  const targetNote = notasActuales.find(note => note.id === id);

  /*---------------- Eventos Contenedor Main ----------------*/

  const dragEnterHandler = () => {
  }

  const dragOverHandler = e => {
    e.preventDefault();
  }

  const dropHandler = e => {
    e.preventDefault();
    contNotas.appendChild(element);
    targetNote.divDestino = "nuevaNota";
    guardar(notasActuales);
  };

  /*---------------- Eventos DropZone 1 ----------------*/

  const dragEnter1Handler = () => {
  }

  const dragOver1Handler = e => {
    e.preventDefault();
  }

  const drop1Handler = e => {
    e.preventDefault();

    if (dropZone1.childElementCount <= 3) {
      dropZone.appendChild(element);
      targetNote.divDestino = "dropZone";
      guardar(notasActuales);
    }
  };

  /*---------------- Eventos DropZone 2 ----------------*/

  const dragEnter2Handler = () => {
  }

  const dragOver2Handler = e => {
    e.preventDefault();
  };

  const drop2Handler = e => {
    e.preventDefault();
    dropZone2.appendChild(element);
    targetNote.divDestino = "dropZone1";
    guardar(notasActuales);
  };

  /*---------------- Eventos DropZone 3 ----------------*/

  const dragEnter3Handler = e => {
  }

  const dragOver3Handler = e => {
    e.preventDefault();
  };

  const drop3Handler = e => {
    e.preventDefault();

    if (dropZone3.childElementCount <= 0) {
      dropZone3.appendChild(element);
      targetNote.divDestino = "dropZone2";
      guardar(notasActuales);
    }
  };

  /*---------------- Eventos Move & Drag ----------------*/

  const dragHandler = (e) => {
    e.preventDefault();
  };

  const touchMoveHandler = (e) => {
    e.preventDefault();
  }

  /*---------------- Eventos MoveEND & DragEND ----------------*/

  const dragEndHandler = e => {
    contNotas.classList.remove("drag");
    dropZone1.classList.remove("drag");
    dropZone2.classList.remove("drag");
    dropZone3.classList.remove("drag");
    element.removeEventListener("drag", dragHandler);
    removeEvents()
  }

  const touchEndHandler = e => {
    console.log("escucha de evento touch end")
    contNotas.classList.remove("drag");
    dropZone1.classList.remove("drag");
    dropZone2.classList.remove("drag");
    dropZone3.classList.remove("drag");
    remove()
  }

  /*---------------- Escuchas ----------------*/

  contNotas.addEventListener("drop", dropHandler)
  contNotas.addEventListener("dragover", dragOverHandler)
  contNotas.addEventListener("dragenter", dragEnterHandler)

  dropZone1.addEventListener("drop", drop1Handler)
  dropZone1.addEventListener("dragover", dragOver1Handler)
  dropZone1.addEventListener("dragenter", dragEnter1Handler)

  dropZone2.addEventListener("drop", drop2Handler)
  dropZone2.addEventListener("dragover", dragOver2Handler)
  dropZone2.addEventListener("dragenter", dragEnter2Handler)

  dropZone3.addEventListener("drop", drop3Handler)
  dropZone3.addEventListener("dragover", dragOver3Handler)
  dropZone3.addEventListener("dragenter", dragEnter3Handler)

  if (touch == true) {
    element.addEventListener("touchmove", touchMoveHandler)
    element.addEventListener("touchend", touchEndHandler)

  } else {
    element.addEventListener("drag", dragHandler)
    element.addEventListener("dragend", dragEndHandler)
  }

  function removeEvents() {
    contNotas.removeEventListener("dragover", dragOverHandler)
    contNotas.removeEventListener("dragenter", dragEnterHandler)
    contNotas.removeEventListener("drop", dropHandler);

    dropZone1.removeEventListener("dragover", dragOver1Handler)
    dropZone1.removeEventListener("dragenter", dragEnter1Handler)
    dropZone1.removeEventListener("drop", drop1Handler);

    dropZone2.removeEventListener("dragover", dragOver2Handler)
    dropZone2.removeEventListener("dragenter", dragEnter2Handler)
    dropZone2.removeEventListener("drop", drop2Handler);

    dropZone3.removeEventListener("dragover", dragOver3Handler)
    dropZone3.removeEventListener("dragenter", dragEnter3Handler)
    dropZone3.removeEventListener("drop", drop3Handler);
  }

}

/*---------------- Colores ----------------*/

function colores(id, element) {
  const notasActuales = cargarNotas();
  const targetNote = notasActuales.find(note => note.id == id);
  const menu = document.getElementById("dobleclick");
  const paletaColores = document.querySelectorAll(".paletaColor")
  const volver = document.getElementById("cancelar")
  const eliminarNote = document.getElementById("eliminar")
  let color = "";

  document.body.style.overflow = "hidden";
  menu.style.display = "block";

  volver.addEventListener("click", () => {
    eliminarNote.removeEventListener("click", eliminarHandler);
    paletaColores.forEach(colorNuevo => {
      colorNuevo.removeEventListener("click", colorHandler)
    });
    menu.style.display = "none";
    document.body.style.overflow = "scroll";
  });

  const eliminarHandler = (e) => {
    eliminar(id, element);
    menu.style.display = "none";
    document.body.style.overflow = "scroll";
  };

  const colorHandler = (e) => {
    menu.style.display = "none";
    document.body.style.overflow = "scroll";
    const selectedColor = e.target.getAttribute("data-color");

    switch (selectedColor) {
      case "colorOne":
        element.classList.add("color1");
        element.classList.remove("color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9")
        color = "color1";
        break;
      case "colorTwo":
        element.classList.remove("color1", "color3", "color4", "color5", "color6", "color7", "color8", "color9")
        element.classList.add("color2");
        color = "color2";
        break;
      case "colorThree":
        element.classList.remove("color1", "color2", "color4", "color5", "color6", "color7", "color8", "color9")
        element.classList.add("color3");
        color = "color3";
        break;
      case "colorFour":
        element.classList.remove("color1", "color2", "color3", "color5", "color6", "color7", "color8", "color9")
        element.classList.add("color4");
        color = "color4";
        break;
      case "colorFive":
        element.classList.remove("color1", "color2", "color3", "color4", "color6", "color7", "color8", "color9")
        element.classList.add("color5");
        color = "color5";
        break;
      case "colorSix":
        element.classList.remove("color1", "color2", "color3", "color4", "color5", "color7", "color8", "color9")
        element.classList.add("color6");
        color = "color6";
        break;
      case "colorSeven":
        element.classList.remove("color1", "color2", "color3", "color4", "color5", "color6", "color8", "color9")
        element.classList.add("color7");
        color = "color7";
        break;
      case "colorEight":
        element.classList.remove("color1", "color2", "color3", "color4", "color5", "color6", "color7", "color9")
        element.classList.add("color8");
        color = "color8";
        break;
      case "colorNine":
        element.classList.remove("color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8")
        element.classList.add("color9");
        color = "color9";
        break;
    }

    paletaColores.forEach(colorNuevo => {
      colorNuevo.removeEventListener("click", colorHandler)
    });
    eliminarNote.removeEventListener("click", eliminarHandler);

    if (targetNote) {
      targetNote.color = color;
      guardar(notasActuales);
    }

  }

  eliminarNote.addEventListener("click", eliminarHandler);
  paletaColores.forEach(colorNuevo => {
    colorNuevo.addEventListener("click", colorHandler);
  });
}

function cargarReferencias() {
  var inputsJSON = localStorage.getItem('notesReferencias');

  if (inputsJSON) {
    var referenciasVar = JSON.parse(inputsJSON);

    document.getElementById('color1').value = referenciasVar.color1;
    document.getElementById('color2').value = referenciasVar.color2;
    document.getElementById('color3').value = referenciasVar.color3;
    document.getElementById('color4').value = referenciasVar.color4;
    document.getElementById('color5').value = referenciasVar.color5;
    document.getElementById('color6').value = referenciasVar.color6;
    document.getElementById('color7').value = referenciasVar.color7;
    document.getElementById('color8').value = referenciasVar.color8;
    document.getElementById('color9').value = referenciasVar.color9;

  }
}

function guardarReferencias() {

  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  var color3 = document.getElementById('color3').value;
  var color4 = document.getElementById('color4').value;
  var color5 = document.getElementById('color5').value;
  var color6 = document.getElementById('color6').value;
  var color7 = document.getElementById('color7').value;
  var color8 = document.getElementById('color8').value;
  var color9 = document.getElementById('color9').value;

  var notesReferencias = {
    color1: color1,
    color2: color2,
    color3: color3,
    color4: color4,
    color5: color5,
    color6: color6,
    color7: color7,
    color8: color8,
    color9: color9
  };
  var inputsJSON = JSON.stringify(notesReferencias);
  localStorage.setItem('notesReferencias', inputsJSON);
}



