(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();


const d = document;

//! funcion de registro trabajando con el event submit
const registroUsuario = (event) => {
    //console.log(event);
    event.preventDefault();

    let nombreCompleto = d.getElementById("regName").value;

    //console.log(nombreCompleto);
    
    let apellido = d.getElementById("regLastName").value;

    //console.log(apellido);
    
    let genero = d.querySelector('input[ name = "sexo"]:checked').value;
    //console.log(genero);


    let telefono = d.getElementById("regPhone").value;
    //console.log(telefono);


    let correo = d.getElementById("regEmail").value;
    //console.log(correo);
    
    let departamento = d.getElementById("regCity").value;
    //console.log(departamento);
    

    // 1er. paso traer los valores de los inputs
    let nombre = d.getElementById("regUser").value.toLowerCase();
    //console.log(nombre);
    let contraseña = d.getElementById("regPassword").value.toLowerCase();
    //console.log(contraseña);

    //Validacion para no enviar campos en blanco

    if (nombre.trim() === "" || contraseña.trim() === "") {
        alert("Necesitas llenar todos los campos en blanco");
        return;
    }

let administrador = nombre === "admin" ? true: false;

    // 2do paso guardar el nombre y contraseña en un objeto
    const usuario = {
        nombreCompleto,
        apellido,
        genero,
        telefono,
        correo,
        departamento,
        nombre,
        contraseña,
        administrador,
    };
    //console.log(usuario);
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    //console.log(usuarios);

    // 3do paso comparacion de nombre ingresado por input y del nombre que guardamos en nuestro array

    // let usuarioEncontrado = false;

    // for (let i = 0; i < usuarios.length; i++) {
    //   if (usuarios[i].nombre === nombre) {
    //     usuarioEncontrado = true;
    //     break;
    //   }
    // }

    // usuarios.forEach((usuario) => {
    //   if (usuario.nombre === nombre) {
    //     usuarioEncontrado = true;
    //   }
    // });

    let usuarioEncontrado = usuarios.some((usuario) => usuario.nombre === nombre);

    //console.log(usuarioEncontrado);

    // 4to paso condicional que guarda o alerta que el usuario ya esta registrado

    // // if (usuarioEncontrado) {
    //     alert("Usuario ya existe");
    // } else {
    //     usuarios.push(usuario);
    //     localStorage.setItem("usuarios", JSON.stringify(usuarios));
    //     //console.log(usuarios);
    //     alert("Registro exitoso!!!");
    // }

    //limpieza de los inputs
    d.getElementById("registerForm").reset();
};

//! en un paso
d.getElementById("registerForm").addEventListener("submit", registroUsuario);
//! en dos pasos
// traer la etiqueta con el id registerForm
//const registerForm = d.getElementById("registerForm");
//console.log(registerForm);
// a la variable donde guardo la etiqueta le asigno el evento submit y llamo a la funcion registro usuario.
//registerForm.addEventListener("submit", registroUsuario);