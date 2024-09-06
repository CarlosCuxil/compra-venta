var notas = JSON.parse(localStorage.getItem('notas')) || [];
cargarNotas();

function registrarNota(){
    var titulo = document.getElementById('titulo').value;
    var contenido = document.getElementById('nota').value;
    var color = document.querySelector('input[name="color"]:checked').value;

    var fecha = new Date();
    var mes = (fecha.getMonth()+1 < 10) ? '0'+(fecha.getMonth()+1) : (fecha.getMonth()+1);

    var nota = {
        title: titulo,
        content: contenido,
        color: color,
        date: fecha.getDate() + '/' + mes + '/' + fecha.getFullYear() + ' ' + fecha.getHours() + ':'+ fecha.getMinutes()
    }

    notas.push(nota);

    localStorage.setItem('notas', JSON.stringify(notas));
    cargarNotas();

    document.getElementById('titulo').value = '';
    document.getElementById('nota').value = '';
    document.querySelector('input[name="color"]:checked').value = false;
}

function cargarNotas(){
    var lasNotas = JSON.parse(localStorage.getItem('notas')) || [];

    var cadena = '';
    for(let i = 0; i < lasNotas.length; i++){
        cadena +=   `<div class="col-md-7">
                <div class="card m-1 ${lasNotas[i].color}">
                    <div class="card-body">
                        <h5 class="card-title">${lasNotas[i].title}</h5>
                        <p>${lasNotas[i].content}</p>

                        <div class="row mt-3">
                            <div class="col-6">
                                <small><b>Creado en: </b> ${lasNotas[i].date} </small>
                            </div>
                            <div class="col-6 text-end">
                                <button type="button" class="btn btn-outline-dark btn-sm"><i class="fa fa-pencil"></i></button>
                                <button type="button" onclick="eliminarNota(${i})" class="btn btn-outline-dark btn-sm"><i class="fa fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById('listarNotas').innerHTML = cadena;
}

function eliminarNota(posicion){
    Swal.fire({
        title: "Esta seguro?",
        text: "La nota se eliminará!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, quiero eliminar!",
    }).then((result) => {
        if (result.isConfirmed) {            
            notas.splice(posicion, 1);
            localStorage.setItem('notas', JSON.stringify(notas));
            cargarNotas();

            Swal.fire({
                title: "Eliminado!",
                text: "Tu nota ha sido eliminada.",
                icon: "success",
            });
        }
    });
}

function borrarTodo(){
    Swal.fire({
        title: "Esta seguro?",
        text: "Se eliminarán todas las notas!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, quiero eliminar!",
    }).then((result) => {
        if (result.isConfirmed) {            
            notas = []
            localStorage.setItem('notas', JSON.stringify(notas));
            cargarNotas();

            Swal.fire({
                title: "Eliminado!",
                text: "Tu notas han sido eliminadas.",
                icon: "success",
            });
        }
    });
}

function editarNota(posicion){
    seleccionado = posicion;

    document.getElementById('titulo').value=notas[posicion].title;
    document.getElementById('nota').value = notas[posicion].content;
    document.querySelector("input[type=radio][value="+notas[posicion].color+"]").checked = true;
    }
