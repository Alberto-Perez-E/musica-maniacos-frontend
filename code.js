//Definición de variables
const url3 = 'http://localhost:3000/musica-maniacos-backend/articulos/'
const url = 'http://localhost/cursos/practica/musica-maniacos-backend/'
const url2 = 'http://localhost/cursos/practica/musica-maniacos-backend/?id='
 
const contenedor = document.querySelector('tbody')
let resultados = ''

// const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
// const formArticulo = document.querySelector('form')
// const descripcion = document.getElementById('descripcion')
// const precio = document.getElementById('precio')
// const stock = document.getElementById('stock')

const modalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'))
const formUsuario = document.querySelector('form')
const usuario = document.getElementById('usuario')
const correo = document.getElementById('correo')
const contrasena = document.getElementById('contrasena')
const nacimiento = document.getElementById('nacimiento')
const foto = document.getElementById('foto')
var opcion = ''

// btnCrear2.addEventListener('click', ()=>{
//     descripcion.value = ''
//     precio.value = ''
//     stock.value = ''
//     modalArticulo.show()
//     opcion = 'crear'
// })
// ----
btnCrear.addEventListener('click', ()=>{
    usuario.value = ''
    correo.value = ''
    contrasena.value = ''
    nacimiento.value = ''
    foto.value = ''
    modalUsuario.show()
    opcion = 'crear'
})

//funcion para mostrar los resultados
// const mostrar2 = (articulos) => {
//     articulos.forEach(articulo => {
//         resultados += `<tr>
//                             <td>${articulo.id}</td>
//                             <td>${articulo.descripcion}</td>
//                             <td>${articulo.precio}</td>
//                             <td>${articulo.stock}</td>
//                             <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
//                        </tr>
//                     `    
//     })
//     contenedor.innerHTML = resultados
    
// }
// ---
const mostrar = (usuarios) => {
    usuarios.forEach(usuario => {
        resultados += `<tr>
                            <td>${usuario.id}</td>
                            <td>${usuario.usuario}</td>
                            <td>${usuario.correo}</td>
                            <td>${usuario.contrasena}</td>
                            <td>${usuario.nacimiento}</td>
                            <td>${usuario.foto}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `    
    })
    contenedor.innerHTML = resultados
    
}

//Procedimiento Mostrar
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log("Errosito"+error))

  
const on = (element, event, selector, handler) => {
    //console.log(element)
    //console.log(event)
    //console.log(selector)
    //console.log(handler)
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

//Procedimiento Borrar
// on2(document, 'click', '.btnBorrar', e => {
//     const fila = e.target.parentNode.parentNode
//     const id = fila.firstElementChild.innerHTML
//     alertify.confirm("This is a confirm dialog.",
//     function(){
//         fetch(url+id, {
//             method: 'DELETE'
//         })
//         .then( res => res.json() )
//         .then( ()=> location.reload())
//         //alertify.success('Ok')
//     },
//     function(){
//         alertify.error('Cancel')
//     })
// })
// 
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    console.log(id)
    alertify.confirm("This is a confirm dialog.",
    function(){
        fetch(url2+id, {
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( ()=> location.reload())
        //alertify.success('Ok')
    },
    function(){
        alertify.error('Cancel')
    })
})

//Procedimiento Editar
// on2(document, 'click', '.btnEditar', e => {    
    //     const fila = e.target.parentNode.parentNode
    //     idForm = fila.children[0].innerHTML
    //     const descripcionForm = fila.children[1].innerHTML
    //     const precioForm = fila.children[2].innerHTML
    //     const stockForm = fila.children[3].innerHTML
    //     descripcion.value =  descripcionForm
    //     precio.value =  precioForm
    //     stock.value =  stockForm
    //     opcion = 'editar'
    //     modalArticulo.show()
    
    // })
    // ----
let idForm = 0
on(document, 'click', '.btnEditar', e => {  
    console.log("EDITADo")  
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const usuarioForm = fila.children[1].innerHTML
    const correoForm = fila.children[2].innerHTML
    const contrasenaForm = fila.children[3].innerHTML
    const nacimientoForm = fila.children[4].innerHTML
    const fotoForm = fila.children[5].innerHTML
    usuario.value =  usuarioForm
    correo.value =  correoForm
    contrasena.value =  contrasenaForm
    nacimiento.value =  nacimientoForm
    foto.value =  fotoForm
    opcion = 'editar'
    modalUsuario.show()
     
})

//Procedimiento para Crear y Editar
// formArticulo2.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     if(opcion=='crear'){        
//         //console.log('OPCION CREAR')
//         fetch(url, {
//             method:'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify({
//                 descripcion:descripcion.value,
//                 precio:precio.value,
//                 stock:stock.value
//             })
//         })
//         .then( response => response.json() )
//         .then( data => {
//             const nuevoArticulo = []
//             nuevoArticulo.push(data)
//             mostrar(nuevoArticulo)
//         })
//     }
//     if(opcion=='editar'){    
//         //console.log('OPCION EDITAR')
//         fetch(url+idForm,{
//             method: 'PUT',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify({
//                 descripcion:descripcion.value,
//                 precio:precio.value,
//                 stock:stock.value
//             })
//         })
//         .then( response => response.json() )
//         .then( response => location.reload() )
//     }
//     modalArticulo.hide()
// })
// ----
formUsuario.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        //console.log('OPCION CREAR')
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                usuario:usuario.value,
                correo:correo.value,
                contrasena:contrasena.value,
                nacimiento:nacimiento.value,
                foto:foto.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoUsuario = []
            nuevoUsuario.push(data)
            mostrar(nuevoUsuario)
        })
    }
    if(opcion=='editar'){    
        //console.log('OPCION EDITAR')
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id:idForm,
                usuario:usuario.value,
                correo:correo.value,
                contrasena:contrasena.value,
                nacimiento:nacimiento.value,
                foto:foto.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )
    }
    modalUsuario.hide()
})

