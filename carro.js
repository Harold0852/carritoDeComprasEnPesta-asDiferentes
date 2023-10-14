document.addEventListener("DOMContentLoaded", function () {
    const carritoItems = document.getElementById("carrito-items");
    const totalElement = document.getElementById("total");

    // Recuperar productos del almacenamiento local
    const productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function actualizarCarrito() {
        carritoItems.innerHTML = "";
        let total = 0;

        productosEnCarrito.forEach((producto, index) => {
            const listItem = document.createElement("div");
            listItem.innerHTML = `${producto.nombre} - ${producto.precio.toFixed(2)}`;
            
            // Agrega un botón "Eliminar" con un atributo de datos (data-index) para rastrear el índice del producto
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.setAttribute("data-index", index);
            deleteButton.addEventListener("click", eliminarProducto);
            
            listItem.appendChild(deleteButton);
            carritoItems.appendChild(listItem);

            total += producto.precio;
        });

        totalElement.textContent = total.toFixed(2);
    }

    function eliminarProducto(event) {
        const index = event.target.getAttribute("data-index");
        productosEnCarrito.splice(index, 1); // Eliminar el producto del arreglo
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito)); // Actualizar el almacenamiento local
        actualizarCarrito(); // Actualizar la interfaz
    }

    // Mostrar los productos en el carrito al cargar la página
    actualizarCarrito();
});
