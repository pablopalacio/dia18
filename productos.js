const products = [
  {
    id: 1,
    nombre: "Waffle con frutas",
    precio: 6.5,
    categoria: "Waffle",
    img: "https://storage.googleapis.com/avena-recipes-v2/2024/11/1732571753472.jpeg",
  },
  {
    id: 2,
    nombre: "Crème Brûlée",
    precio: 7.0,
    categoria: "Postre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPC3qZs8od5d7z_kOPOQhgZF_3V4IyOSsTA&s",
  },
  {
    id: 3,
    nombre: "Mix de Macarons (5)",
    precio: 8.0,
    categoria: "Macaron",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4jPMBagClOg2gi89fda6BcAAy0AK-yPhJw&s",
  },
  {
    id: 4,
    nombre: "Tiramisú clásico",
    precio: 5.5,
    categoria: "Tiramisú",
    img: "https://www.paulinacocina.net/wp-content/uploads/2020/01/receta-de-tiramisu-facil-y-economico-1740483918-1200x900.jpg",
  },
  {
    id: 5,
    nombre: "Baklava de pistacho",
    precio: 4.0,
    categoria: "Baklava",
    img: "https://content-cocina.lecturas.com/medio/2022/12/22/baklava_7baf2e94_1200x1200.jpg",
  },
  {
    id: 6,
    nombre: "Panna Cotta de fresa",
    precio: 8.5,
    categoria: "Panna Cotta",
    img: "https://dgari.com/wp-content/uploads/2022/03/panna-cotta-con-jarabe-de-fresa.png",
  },
];

let contenedor = document.querySelector("#contenedor-productos");

for (let i = 0; i < productos.length; i++) {
  contenedor.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="" ${productos[i].img} class= "rounded 2xl h-36">    
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${productos[i].nombre}</h5>
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <p class="font-normal text-gray-700 dark:text-gray-400">Precio: ${productos[i].categoria}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Stock: ${productos[i].precio}</p>
                <button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none">Comprar</button>

            </a>
            `;
}
