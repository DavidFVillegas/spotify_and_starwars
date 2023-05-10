export async function buscarCanciones(token){


    const URL="https://api.spotify.com/v1/artists/7t0rwkOPGlDPEhaOcVtOt9/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{
            "Authorization":token
        }
    }

    let respuesta=await fetch(URL,PETICION)
    let cancionesEntregadas=await respuesta.json()
    return cancionesEntregadas

}