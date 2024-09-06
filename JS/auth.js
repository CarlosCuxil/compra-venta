function login (){
    var usuario = document.getElementById('usuario').value
    var usuario = document.getElementById('contrasena').value

    if (usuario == 'admin' && contrasena === 'admin.1'){
        localStorage.setItem('sesion', 'si');
        Swal.fire({
            title: "Bienvenido",
            text: "Has iniciado sesion!!",
            icon: "success"
        }).then(( => {
            window.location.href='index.html';
        });
        return;

        )
                
        

    } else {
        Swal.fire ({
            title: "Error!",
            text: "Las credenciales no son validas!",
            icon: "error"
        }).then(() => {
            window.location.href= "login.html";
        })
        return;
        
    }
}

function logout (){
    Swal.fire({
        title: "Esta seguro?",
        tgext: "Saldra de la sesion",
        icon: "warning",
        showCancelButton: true;
        
    }


    )
}