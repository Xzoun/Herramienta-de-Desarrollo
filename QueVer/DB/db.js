import firebaseConfig from '../../config.js';

const app = firebase.initializeApp(firebaseConfig);
const storage = app.storage();

const grupo1Titulo = document.getElementById("grupo1Titulo"),
    grupo2Titulo = document.getElementById("grupo2Titulo"),
    grupo3Titulo = document.getElementById("grupo3Titulo"),
    grupo4Titulo = document.getElementById("grupo4Titulo");

export async function obtenerUrls(imageUrls, cont = 0) {

    try {
        const storageRef = storage.ref(imageUrls);
        const res = await storageRef.listAll();
        res.prefixes.forEach((prefix) => {
            let titulo = prefix.name.charAt(1).toUpperCase() + prefix.name.slice(2);
            const url = imageUrls + "/" + prefix.name;
            switch (cont) {
                case 0:
                    grupo1Titulo.innerText = titulo;
                    mostrarImagenesEnCarrusel(cont, url);
                    cont++;
                    break;
                case 1:
                    grupo2Titulo.innerText = titulo;
                    mostrarImagenesEnCarrusel(cont, url);
                    cont++;
                    break;
                case 2:
                    grupo3Titulo.innerText = titulo;
                    mostrarImagenesEnCarrusel(cont, url);
                    cont++;
                    break;
                case 3:
                    grupo4Titulo.innerText = titulo;
                    mostrarImagenesEnCarrusel(cont, url);
                    cont++;
                    break;
            }
        })

    } catch (error) {
        console.log("Error" + error);
    }
}

async function mostrarImagenesEnCarrusel(cont, url) {

    let contenedorActual = "",
        botonAtras = "";
    try {
        const storageRef = storage.ref(url);
        const res = await storageRef.listAll();

        const carruselInner = document.createElement("div");
        carruselInner.classList.add("carousel-inner");

        for (let i = 0; i < res.items.length; i += 4) {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item", "heigh");

            if (i === 0) {
                carouselItem.classList.add("active");
            }

            const dFlex = document.createElement("div");
            dFlex.classList.add("d-flex", "w-100");

            for (let j = i; j < i + 4 && j < res.items.length; j++) {
                const img = document.createElement("img");

                const imgUrl = await res.items[j].getDownloadURL();

                img.src = imgUrl;
                img.classList.add("d-block", "w-25", "imgCarrusel");
                dFlex.appendChild(img);
            }

            carouselItem.appendChild(dFlex);
            carruselInner.appendChild(carouselItem);

            switch (cont) {
                case 0:
                    contenedorActual = document.getElementById("grupo1");
                    botonAtras = document.getElementById("atras1");
                    break;
                case 1:
                    contenedorActual = document.getElementById("grupo2");
                    botonAtras = document.getElementById("atras2");
                    break;
                case 2:
                    contenedorActual = document.getElementById("grupo3");
                    botonAtras = document.getElementById("atras3");
                    break;
                case 3:
                    contenedorActual = document.getElementById("grupo4");
                    botonAtras = document.getElementById("atras4");
                    break;
            }

            const itemsAnteriores = contenedorActual.getElementsByClassName("carousel-inner");
            if (itemsAnteriores.length > 0) {
                contenedorActual.removeChild(itemsAnteriores[0]);
            }


            contenedorActual.insertBefore(carruselInner, botonAtras);
        }
    } catch (error) {
        console.log("Error" + error);
    }
}




