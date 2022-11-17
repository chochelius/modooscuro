let boton = document.getElementById("darkMode")
let botonNew = document.getElementById("tipoModo")
let boton2 = document.getElementById("lightMode")


let modoClaro = () => {
  boton2.innerHTML = ``;
  document.querySelectorAll('.bg-dark').forEach((element) => {
    element.className = element.className.replace(/bg-dark/g, 'bg-light');
  });
  document.querySelectorAll('.text-white').forEach((element) => {
    element.className = element.className.replace(/text-white/g, 'text-black')
  })
  document.querySelectorAll('.btn-dark').forEach((element) => {
    element.className = element.className.replace(/btn-dark/g, 'btn-light')
  })

};



boton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("boton")
  console.log(boton.classList)

  document.querySelectorAll('.bg-light').forEach((element) => {
    element.className = element.className.replace(/bg-light/g, 'bg-dark');
  });
  document.querySelectorAll('.text-black').forEach((element) => {
    element.className = element.className.replace(/text-black/g, 'text-white')
  })
  document.querySelectorAll('.btn-light').forEach((element) => {
    element.className = element.className.replace(/btn-light/g, 'btn-dark border-white')
  })

  botonNew.innerHTML = `
  <button class="btn btn-light ms-lg-auto" id="lightMode">
  Modo Claro
  </button>
  `

 

});

boton2.addEventListener("click", (e) => {
  e.preventDefault();
  modoClaro()
});


//agregar hide-show para solucionar