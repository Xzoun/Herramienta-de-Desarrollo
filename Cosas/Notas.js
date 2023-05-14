const contNotas = document.getElementById("nuevaNota");
const newnoteBtn = document.getElementById("newNotebtn");
const dropZone = document.getElementById("dropZone");
const dropZone1 = document.getElementById("dropZone1");
const dropZone2 = document.getElementById("dropZone2");

notas().forEach(note => {
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

export function notas() {
  return JSON.parse(localStorage.getItem("LeoBenitez-notas") || "[]");
}

function guardar(notes) {
  localStorage.setItem("LeoBenitez-notas", JSON.stringify(notes));
}

function funciones(id, content, divDestino, currentLocation, color) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.setAttribute("id", "newnote");
  element.value = content;
  element.placeholder = "Nota vacía";
  element.setAttribute("draggable", "true")
  if (color == "color5") {
    element.classList.add("color5");
  }

  element.addEventListener("dragstart", e => {
    contNotas.classList.toggle("drag");
    dropZone.classList.toggle("drag");
    dropZone1.classList.toggle("drag");
    dropZone2.classList.toggle("drag");
  })

  element.addEventListener("drag", e => {
    e.preventDefault();
    mover(id, element, divDestino, currentLocation)
  })

  element.addEventListener("dragend", e => {
    contNotas.classList.toggle("drag");
    dropZone.classList.toggle("drag");
    dropZone1.classList.toggle("drag");
    dropZone2.classList.toggle("drag");
  })

  element.addEventListener("drop", e => {
    e.preventDefault();
    const currentDiv = e.target.parentNode.id;
    mover(id, currentDiv);
    e.target.parentNode.appendChild(element);
  });

  element.addEventListener("input", () => {
    actualizar(id, element.value);
  });
  const alertas = document.getElementById("dobleclick");
  element.addEventListener("dblclick", () => {
    document.body.style.overflow = "hidden";
    alertas.style.display = "block"
    colores(id, element)

    volver.addEventListener("click", volverHandler);
    eliminarNote.addEventListener("click", eliminarHandler);

  });

  const volverHandler = () => {
    alertas.style.display = "none";
    document.body.style.overflow = "scroll";
    volver.removeEventListener("click", volverHandler);
  };

  const eliminarHandler = () => {
    eliminar(id, element);
    alertas.style.display = "none";
    document.body.style.overflow = "scroll";
    eliminarNote.removeEventListener("click", eliminarHandler);
  };

  return element;
}

const volver = document.getElementById("cancelar");
const eliminarNote = document.getElementById("eliminar");

function agregar() {
  return function () {
    const notasActuales = notas();
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
  const notasActuales = notas();
  const targetNote = notasActuales.find(note => note.id == id);

  if (targetNote) {
    targetNote.content = newContent;
    guardar(notasActuales);
  }
}

function eliminar(id, element) {

  const notasActuales1 = notas().filter(note => note.id != id);
  const notasActuales = notas();
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
  const notasActuales = notas();
  const targetNote = notasActuales.find(note => note.id === id);
  contNotas.addEventListener("dragenter", e => {
  })
  contNotas.addEventListener("dragleave", e => {
  })
  contNotas.addEventListener("dragover", e => {
    e.preventDefault();
  })
  contNotas.addEventListener("drop", e => {
    e.preventDefault();
    contNotas.appendChild(element);
    targetNote.divDestino = "nuevaNota";
    guardar(notasActuales);
    location.href = location.href;
  });

  dropZone.addEventListener("dragenter", e => {
  })
  dropZone.addEventListener("dragleave", e => {
  })
  dropZone.addEventListener("dragover", e => {
    e.preventDefault();
  })
  dropZone.addEventListener("drop", e => {
    e.preventDefault();
    if (dropZone.childElementCount <= 3) {
      dropZone.appendChild(element);
      targetNote.divDestino = "dropZone";
      guardar(notasActuales);
      location.href = location.href;
    }
  });

  dropZone1.addEventListener("dragenter", e => {
  })
  dropZone1.addEventListener("dragleave", e => {
  })
  dropZone1.addEventListener("dragover", e => {
    e.preventDefault();
  })
  dropZone1.addEventListener("drop", e => {
    e.preventDefault();
    dropZone1.appendChild(element);
    targetNote.divDestino = "dropZone1";
    guardar(notasActuales);
    location.href = location.href;
  });

  dropZone2.addEventListener("dragenter", e => {
  })
  dropZone2.addEventListener("dragleave", e => {
  })
  dropZone2.addEventListener("dragover", e => {
    e.preventDefault();
  })
  dropZone2.addEventListener("drop", e => {
    e.preventDefault();
    if (dropZone2.childElementCount <= 0) {
      dropZone2.appendChild(element);
      targetNote.divDestino = "dropZone2";
      guardar(notasActuales);
      location.href = location.href;
    }
  });
}

function colores(id, element) {
  const notasActuales = notas();
  const targetNote = notasActuales.find(note => note.id == id);
  const alertas = document.getElementById("dobleclick");
  const paletaColores = document.querySelectorAll(".paletaColor")
  let color = "";

  document.body.style.overflow = "hidden";
  alertas.style.display = "block";

  paletaColores.forEach(colorNuevo => {
    colorNuevo.addEventListener("click", () => {
      alertas.style.display = "none";
      document.body.style.overflow = "scroll";
      const selectedColor = colorNuevo.getAttribute("data-color");

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

      if (targetNote) {
        targetNote.color = color;
        guardar(notasActuales);
        location.href = location.href;
      }
    })
  })
}

// function asignarEventosDrag(element, id, divDestino) {
//   element.addEventListener("dragstart", e => {
//     contNotas.classList.add("drag");
//     dropZone.classList.add("drag");
//     dropZone1.classList.add("drag");
//     dropZone2.classList.add("drag");
//     element.classList.add("dragging");
//   });

//   element.addEventListener("dragend", e => {
//     contNotas.classList.remove("drag");
//     dropZone.classList.remove("drag");
//     dropZone1.classList.remove("drag");
//     dropZone2.classList.remove("drag");
//     element.classList.remove("dragging");
//   });

//   element.addEventListener("dblclick", () => {
//     const doDelete = confirm("Eliminar nota?");
//     if (doDelete) {
//       eliminar(id, element);
//     }
//   });

//   if (divDestino === "dropZone") {
//     element.addEventListener("drag", e => {
//       e.preventDefault();
//       mover(id, element, divDestino, "dropZone");
//     });
//   } else if (divDestino === "dropZone1") {
//     element.addEventListener("drag", e => {
//       e.preventDefault();
//       mover(id, element, divDestino, "dropZone1");
//     });
//   } else if (divDestino === "dropZone2") {
//     element.addEventListener("drag", e => {
//       e.preventDefault();
//       mover(id, element, divDestino, "dropZone2");
//     });
//   } else {
//     element.addEventListener("drag", e => {
//       e.preventDefault();
//       mover(id, element, divDestino, "nuevaNota");
//     });
//   }


// newnoteBtn.addEventListener("click", agregar());

//   guardar(notasActuales);
// }
