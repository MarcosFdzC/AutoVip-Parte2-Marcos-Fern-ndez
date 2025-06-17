//Asociacion de elementos al DOM
const frmMarca = document.querySelector("#marca");
const frmModelo = document.querySelector("#modelo");
const frmAño = document.querySelector("#año");
const btnFiltrar = document.querySelector("#btnFiltrar");
const btnResetear = document.querySelector("#btnReset");
const contCartas = document.querySelector("#contenedorCartas");
//declaración de variables
let marca;
//declaración de funciones
//carga de tarjetas
function cargarTarjetas() {
  fetch(`https://ha-front-api-proyecto-final.vercel.app/cars`)
    .then(function (response) {
      return response.json();
    })
    .then(function (autos) {
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
}
function cargarXMarca(marca) {
  fetch(`https://ha-front-api-proyecto-final.vercel.app/cars`)
    .then(function (response) {
      return response.json();
    })
    .then(function (autos) {
      contCartas.innerHTML = "";
      for (const auto of autos) {
        if (auto.brand == marca) {
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
      }
    })
    .catch(function (error) {
      alert(error);
    });
}
function cargarXAño(año) {
  fetch(`https://ha-front-api-proyecto-final.vercel.app/cars`)
    .then(function (response) {
      return response.json();
    })
    .then(function (autos) {
      contCartas.innerHTML = "";
      for (const auto of autos) {
        if (auto.year == año) {
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
      }
    })
    .catch(function (error) {
      alert(error);
    });
}
//----------------------------------- FILTRO ---------------------------
//Carga de años
for (let i = 2026; i >= 1900; i--) {
  if (i == 2026) {
    frmAño.insertAdjacentHTML(
      "beforeend",
      `<option value="-- Seleccione un año --">-- Seleccione un año --</option>`
    );
  } else {
    frmAño.insertAdjacentHTML(
      "beforeend",
      `<option value="${i}">${i}</option>`
    );
  }
}
//Cargar marcas
function cargarMarcas() {
  fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
    .then(function (response) {
      return response.json();
    })
    .then(function (marcas) {
      let bandera = 1;
      let marca = marcas[0];
      for (const nombre of marcas) {
        if (bandera) {
          frmMarca.insertAdjacentHTML(
            "afterbegin",
            `
            <option value="${nombre}" selected>${nombre}</option>
            <option value="-- Seleccione una Marca --" selected>-- Seleccione una Marca --</option>
            `
          );
          bandera = 0;
        } else {
          frmMarca.insertAdjacentHTML(
            "afterbegin",
            `<option value="${nombre}">${nombre}</option>`
          );
        }
      }
      fetch(
        `https://ha-front-api-proyecto-final.vercel.app/models?brand=${marca}`
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
                `<option value="-- Seleccione un modelo --" selected>-- Seleccione un modelo --</option>
                  <option value="${nombre}">${nombre}</option>
                  `
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
    })
    .catch(function (error) {
      alert(error);
    });
}
cargarMarcas();
//carga de modelos
frmMarca.addEventListener("change", function () {
  if (frmMarca.value === "-- Seleccione una Marca --") {
    frmModelo.innerHTML = "";
    frmModelo.insertAdjacentHTML(
      "afterbegin",
      `<option value="-- Seleccione un modelo --" selected>-- Seleccione un modelo --</option>`
    );
  } else {
    fetch(
      `https://ha-front-api-proyecto-final.vercel.app/models?brand=${frmMarca.value}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (modelo) {
        if (modelo.length == 0) {
          frmModelo.innerHTML = "";
          frmModelo.insertAdjacentHTML(
            "afterbegin",
            `<option value="-- Seleccione un modelo --" selected>-- Seleccione un modelo --</option>`
          );
        } else {
          frmModelo.innerHTML = "";
          let bandera = 1;
          for (const nombre of modelo) {
            if (bandera) {
              bandera = 0;
              frmModelo.insertAdjacentHTML(
                "afterbegin",
                `
                <option value="${nombre}">${nombre}</option>
                <option value="-- Seleccione un modelo --" selected>-- Seleccione un modelo --</option>
                `
              );
            } else {
              frmModelo.insertAdjacentHTML(
                "afterbegin",
                `<option value="${nombre}">${nombre}</option>`
              );
            }
          }
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
});

//----------------------------------- TARJETAS -------------------------
cargarTarjetas();
//cargar de tarjetas filtradas
btnFiltrar.addEventListener("click", function () {
  contCartas.innerHTML = "";
  if (
    frmMarca.value === "-- Seleccione una Marca --" &&
    frmModelo.value === "-- Seleccione un modelo --"
  ) {
    cargarXAño(frmAño.value);
  } else if (frmModelo.value == "-- Seleccione un modelo --") {
    cargarXMarca(frmMarca.value);
  } else {
    fetch(
      `https://ha-front-api-proyecto-final.vercel.app/cars?year=2017&brand=${frmMarca.value}&model=${frmModelo.value}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (autos) {
        if (autos.length == 0) {
          console.log(autos);
          contCartas.insertAdjacentHTML(
            "afterbegin",
            `<div class="alert alert-warning" role="alert">
              No se ah encontrado ningún auto con esa marca y modelo.
            </div>`
          );
        } else {
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
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
});

//resetear carga
btnResetear.addEventListener("click", function () {
  contCartas.innerHTML = "";
  cargarTarjetas();
  cargarMarcas();
});
