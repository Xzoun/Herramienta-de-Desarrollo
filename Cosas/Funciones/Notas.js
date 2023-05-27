const contNotas = document.getElementById("nuevaNota");
const newnoteBtn = document.getElementById("newNoteBtn");
const dropZone = document.getElementById("dropZone");
const dropZone1 = document.getElementById("dropZone1");
const dropZone2 = document.getElementById("dropZone2");

cargarNotas().forEach(note => {
  const noteElement = funciones(note.id, note.content, note.divDestino, note.currentLocation, note.color);
  switch (note.divDestino) {
    case "dropZone":
      dropZone.appendChild(noteElement)
      break;
    case "dropZone1":
      dropZone1.appendChild(noteElement)
      break;
    case "dropZone2":
      dropZone2.appendChild(noteElement)
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

newnoteBtn.addEventListener("click", agregar());

export function cargarNotas() {
  return JSON.parse(localStorage.getItem("LeoBenitez-notas") || "[]");
}

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
    contNotas.classList.add("drag");
    dropZone.classList.add("drag");
    dropZone1.classList.add("drag");
    dropZone2.classList.add("drag");
    mover(id, element, divDestino, currentLocation)
  };
  element.addEventListener("dragstart", dragStartHandler)


  /*---------------- Modificar y Menu----------------*/

  const menu = document.getElementById("dobleclick")

  element.addEventListener("input", () => {
    actualizar(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    document.body.style.overflow = "hidden";
    menu.style.display = "block";
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
      dropZone.removeChild(element);
      break;
    case "dropZone1":
      dropZone1.removeChild(element);
      break;
    case "dropZone2":
      dropZone2.removeChild(element);
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

  const dragHandler = (e) => {
    e.preventDefault();

  };

  element.addEventListener("dragend", e => {
    contNotas.classList.remove("drag");
    dropZone.classList.remove("drag");
    dropZone1.classList.remove("drag");
    dropZone2.classList.remove("drag");

    element.removeEventListener("drag", dragHandler);

    contNotas.removeEventListener("dragover", dragOverHandler)
    contNotas.removeEventListener("dragenter", dragEnterHandler)
    contNotas.removeEventListener("drop", dropHandler);

    dropZone.removeEventListener("dragover", dragOver1Handler)
    dropZone.removeEventListener("dragenter", dragEnter1Handler)
    dropZone.removeEventListener("drop", drop1Handler);

    dropZone1.removeEventListener("dragover", dragOver2Handler)
    dropZone1.removeEventListener("dragenter", dragEnter2Handler)
    dropZone1.removeEventListener("drop", drop2Handler);

    dropZone2.removeEventListener("dragover", dragOver3Handler)
    dropZone2.removeEventListener("dragenter", dragEnter3Handler)
    dropZone2.removeEventListener("drop", drop3Handler);
  })

  const dragEnterHandler = () => {
  }
  const dragOverHandler = e => {
    e.preventDefault();
  }
  contNotas.addEventListener("dragleave", () => {
  })
  const dropHandler = e => {
    e.preventDefault();
    contNotas.appendChild(element);
    targetNote.divDestino = "nuevaNota";
    guardar(notasActuales);
  };

  const dragEnter1Handler = () => {
  }
  const dragOver1Handler = e => {
    e.preventDefault();
  }
  dropZone.addEventListener("dragleave", () => {
  })
  const drop1Handler = e => {
    e.preventDefault();

    if (dropZone.childElementCount <= 3) {
      dropZone.appendChild(element);
      targetNote.divDestino = "dropZone";
      guardar(notasActuales);
    }
  };



  const dragEnter2Handler = () => {
  }
  const dragOver2Handler = e => {
    e.preventDefault();
  };
  dropZone1.addEventListener("dragleave", () => {
  })
  const drop2Handler = e => {
    e.preventDefault();
    dropZone1.appendChild(element);
    targetNote.divDestino = "dropZone1";
    guardar(notasActuales);
  };



  const dragEnter3Handler = e => {
  }
  const dragOver3Handler = e => {
    e.preventDefault();
  };
  dropZone2.addEventListener("dragleave", e => {
  })
  const drop3Handler = e => {
    e.preventDefault();

    if (dropZone2.childElementCount <= 0) {
      dropZone2.appendChild(element);
      targetNote.divDestino = "dropZone2";
      guardar(notasActuales);

    } else {
      dropZone2.removeEventListener("drop", dropZone2Handler);
    }
  };

  element.addEventListener("drag", dragHandler)

  contNotas.addEventListener("drop", dropHandler)
  contNotas.addEventListener("dragover", dragOverHandler)
  contNotas.addEventListener("dragenter", dragEnterHandler)

  dropZone.addEventListener("drop", drop1Handler)
  dropZone.addEventListener("dragover", dragOver1Handler)
  dropZone.addEventListener("dragenter", dragEnter1Handler)

  dropZone1.addEventListener("drop", drop2Handler)
  dropZone1.addEventListener("dragover", dragOver2Handler)
  dropZone1.addEventListener("dragenter", dragEnter2Handler)

  dropZone2.addEventListener("drop", drop3Handler)
  dropZone2.addEventListener("dragover", dragOver3Handler)
  dropZone2.addEventListener("dragenter", dragEnter3Handler)
}

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

