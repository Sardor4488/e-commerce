let products = [
  {
    name: "Household",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7k6w-OlJCMEZ8jg2VY07V_3DcR-l4MC5x0Q&usqp=CAU",
  },
  {
    name: "Sardor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7k6w-OlJCMEZ8jg2VY07V_3DcR-l4MC5x0Q&usqp=CAU",
  },
  {
    name: " Get fit at home",
    img: "https://cdn.mos.cms.futurecdn.net/CAJeRUErxAgTFRuhaTb8q6-1200-80.jpg",
  },
  {
    name: " Explore home bedding",
    img: "https://au.koala.com/images/Home/pillow_mobile.jpg",
  },
  {
    name: "clothing",
    img: "http://newsroom.unl.edu/announce/files/file41039.jpg",
  },
  {
    name: "Beauty picks ",
    img: "https://images.unsplash.com/photo-1521837670401-2bd439d49e6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJlYXV0eSUyMHBpY2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Furnitures",
    img: "https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Beauty picks",
    img: "https://images.unsplash.com/photo-1607473128383-0cf6c96f0689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  },
];

console.log(products);

const setProducts = () => {
  let boss = document.getElementById("boss");
  boss.innerHTML = " ";
  products.map((value, index) => {
    const newelement = document.createElement("div");
    newelement.className = " col-12 col-sm-6 col-md-4 col-lg-3";
    newelement.innerHTML = `
    <div data-aos="zoom-in" class="card">
    <h4 class="text-center productName py-2">${value.name}</h4>
    <div class="imgDiv">
      <img
      class="imgProducts w-100"
      src="${value.img}"
      alt=""
    />
    </div>
    <a href="#" class=" opacity py-2">See More</a>
             
    </div>
    `;
    boss.appendChild(newelement);
  });
};
setProducts();
