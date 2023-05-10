const contNotas = document.getElementById("nuevaNota");
const newnoteBtn = document.getElementById("newNotebtn");
const dropZone = document.getElementById("dropZone");
const dropZone1 = document.getElementById("dropZone1");
const dropZone2 = document.getElementById("dropZone2");

notas().forEach(note => {
  const noteElement = crear(note.id, note.content, note.divDestino, note.currentLocation);
  if (note.divDestino == "dropZone") { dropZone.appendChild(noteElement) }
  else if (note.divDestino == "dropZone1") { dropZone1.appendChild(noteElement) }
  else if (note.divDestino == "dropZone2") { dropZone2.appendChild(noteElement) }
  else { contNotas.appendChild(noteElement) }
});

newnoteBtn.addEventListener("click", agregar());

export function notas() {
  return JSON.parse(localStorage.getItem("LeoBenitez-notas") || "[]");
}

function guardar(notes) {
  localStorage.setItem("LeoBenitez-notas", JSON.stringify(notes));
}

function crear(id, content, divDestino, currentLocation) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.setAttribute("id", "newnote");
  element.value = content;
  element.placeholder = "Nota vacía";
  element.setAttribute("draggable", "true")

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

  element.addEventListener("input", () => {
    actualizar(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm("Eliminar nota?");
    if (doDelete) {
      eliminar(id, element);
    }
  });

  return element;
}

function agregar() {
  return function () {
    const notasActuales = notas();
    const noteObject = {
      id: Math.floor(Math.random() * 100000000000),
      content: "",
      divDestino: "",
      currentLocation: ""
    };
    const noteElement = crear(noteObject.id, noteObject.content, noteObject.divDestino, noteObject.currentLocation);
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
  if (targetNote.divDestino == "dropZone") {
    dropZone.removeChild(element);
  } else if (targetNote.divDestino == "dropZone1") {
    dropZone1.removeChild(element);
  } else if (targetNote.divDestino == "dropZone2") {
    dropZone2.removeChild(element);
  } else {
    contNotas.removeChild(element);
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
    element = notasActuales
    guardar(notasActuales);
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
    if (dropZone.childElementCount<=3){   
    dropZone.appendChild(element);
    targetNote.divDestino = "dropZone";  
    guardar(notasActuales); 
    }
    element = notasActuales   
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
    element = notasActuales
    guardar(notasActuales);
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
    if (dropZone2.childElementCount<=0){    
    dropZone2.appendChild(element);
    targetNote.divDestino = "dropZone2";  
    guardar(notasActuales); 
    }
    element = notasActuales    
  });
}


