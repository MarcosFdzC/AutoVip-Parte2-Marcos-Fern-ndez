//asociacion de elementos al DOM
const frmMarca = document.querySelector("#marca");
const frmModelo = document.querySelector("#modelo");
const frmAño = document.querySelector("#año");
const btnFiltrar = document.querySelector("#btnFiltrar");
const contCartas = document.querySelector("#contenedorCartas");
//declaración de variables

//Carga de años
let año = 2026;
for (let i = 126; i > 0; i--) {
  año--;
  frmAño.insertAdjacentHTML(
    "beforeend",
    `<option value="${año}">${año}</option>`
  );
}
//Cargar marcas
fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
  .then(function (response) {
    return response.json();
  })
  .then(function (marca) {
    let bandera = 1;
    for (const nombre of marca) {
      if (bandera) {
        frmMarca.insertAdjacentHTML(
          "afterbegin",
          `<option value="${nombre}" selected>${nombre}</option>`
        );
        bandera = 0;
      } else {
        frmMarca.insertAdjacentHTML(
          "afterbegin",
          `<option value="${nombre}">${nombre}</option>`
        );
      }
    }
  })
  .catch(function (error) {
    alert(error);
  });
//carga de modelos
frmMarca.addEventListener("change", function () {
  fetch(
    `https://ha-front-api-proyecto-final.vercel.app/models?brand=${frmMarca.value}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (modelo) {
      frmModelo.innerHTML = "";
      for (const nombre of modelo) {
        let bandera = 1;
        if (bandera) {
          bandera = 0;
          frmModelo.insertAdjacentHTML(
            "afterbegin",
            `<option value="${nombre}" selected>${nombre}</option>`
          );
        } else {
          frmModelo.insertAdjacentHTML(
            "afterbegin",
            `<option value="${nombre}">${nombre}</option>`
          );
        }
      }
    })
    .catch(function (error) {
      alert(error);
    });
});
//cargar las tarjetas filtradas
btnFiltrar.addEventListener("click", function () {
  fetch(
    `https://ha-front-api-proyecto-final.vercel.app/cars?year=2017&brand=${frmMarca.value}&model=${frmModelo.value}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (autos) {
      contCartas.innerHTML = "";
      for (const auto of autos) {
        contCartas.insertAdjacentHTML(
          "beforeend",
          `
          <div class="card mb-3 border-top-0 border-end-0 border-start-0">
              <div class="row g-0">
                <div class="col-md-4 col-xs-12 position-relative">
                  <img
                    src="${auto.image}"
                    class="img-fluid rounded-1 border border-2 p-1"
                    alt="${auto.brand + auto.model}"
                  />
                  <span
                    class="badge nuevo text-light text-bg-warning position-absolute"
                    >Nuevo</span
                  >
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">${
                        auto.brand + " " + auto.model
                      }</h5>
                      <p>
                        ${auto.year} | USD ${auto.price_usd} | 
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i></i>
                      </p>
                    </div>
                    <p class="card-text">
                      ${auto.description}
                    </p>
                    <div>
                      <button class="btn btn-success">
                        <i class="fa-solid fa-cart-shopping"></i> 
                        Comprar
                      </button>
                      <button class="btn border border-2 round-1">
                        <i class="fa-solid fa-plus"></i> 
                        Más información
                      </button>
                      <button class="btn border border-2 round-1">
                        <i class="fa-solid fa-share-from-square"></i> Compartir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
        );
      }
    })
    .catch(function (error) {
      alert(error);
    });
});
