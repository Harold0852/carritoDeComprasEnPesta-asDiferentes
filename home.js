document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { nombre: "CHAQUETA SFTL ROMPEVIENTOS", precio: 10.00 },
        { nombre: "CHAQUETA GDR ROMPEVIENTOS", precio: 20.00 },
        { nombre: "CHAQUETA FILA ROMPEVIENTOS", precio: 30.00 },
    ];

    const botonesComparar = document.querySelectorAll("button[id^='producto']");

    botonesComparar.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            agregarAlCarrito(productos[index]);
        });
    });

    function agregarAlCarrito(producto) {
        // Obtener productos del almacenamiento local
        const productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

        // Agregar el producto al carrito
        productosEnCarrito.push(producto);

        // Guardar los productos actualizados en el almacenamiento local
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
    }
});
