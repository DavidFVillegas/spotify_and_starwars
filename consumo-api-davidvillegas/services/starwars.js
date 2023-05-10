// La peticion. Esta es la URL de la cual deseamos obtener la información
let personasUrl = "https://swapi.dev/api/people/";
let planetasUrl = "https://swapi.dev/api/planets/";

// Obtener el nombre de una persona dado su ID
function getNombrePersona(id) {
  return fetch(personasUrl + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.name;
    });
}


async function mostrarNombres() {
  let names = [];
  for (let i = 1; i <= 10; i++) {
    const name = await getNombrePersona(i);
    names.push(name);
  }

  let p = document.getElementById("personasTexto");
  console.log(names);
  p.innerHTML = names.join(", ");
}

// Obtener el nombre de un planeta dado su ID
function getNombrePlaneta(id) {
  return fetch(planetasUrl + id)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      return data.name;
    });
}

async function mostrarNombrePlaneta() {
  let nombrePlaneta = [];
  for (let i = 1; i <= 10; i++) {
    const name = await getNombrePlaneta(i);
    nombrePlaneta.push(name);
  }

  let p = document.getElementById("planetasTexto");
  console.log(nombrePlaneta);
  p.innerHTML = nombrePlaneta.join(", ");
}

// Invocación
mostrarNombrePlaneta();
mostrarNombres();

