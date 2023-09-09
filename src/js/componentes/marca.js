// Aqui creo una plantilla para cada una de las marcas que van dentro de
// las marcas con las que ha trabajado el influencer.

export function creaMarca(nombreMarca, srcImagen) {
  const nuevaMarca = document.createElement("div");
  nuevaMarca.classList.add("publicaciones__marcasTrabajado--marcas-marca");

  const imagen = document.createElement("img");
  imagen.src = srcImagen;
  imagen.alt = "Logo de" + nombreMarca;

  const textoMarca = document.createTextNode(nombreMarca);

  nuevaMarca.appendChild(imagen);
  nuevaMarca.appendChild(textoMarca);

  return nuevaMarca;
}
