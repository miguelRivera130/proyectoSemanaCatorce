const nombre = document.getElementById('nombreRegistro');
const telefono = document.getElementById('telefonoRegistro');
const correo = document.getElementById('correoRegistro');
const contraseña = document.getElementById('contraseñaRegistro');
const confirmacionContraseña = document.getElementById('confirmacionContraseña');

const cambioLog = document.getElementById('tengoCuenta');
const registrar = document.getElementById('registrar');

const database = firebase.database();
const auth = firebase.auth();


registrarCuenta = () => {

    let n = nombre.value;
    let t = telefono.value;
    let cr = correo.value;
    let cn = contraseña.value;
    let ccn = confirmacionContraseña.value;

    if (n == '' || t == '' || cr == '' || cn == '' || ccn == '') {

        alert('completa toda la informacion pedida para registrarte');
        return;

    }

    if (cn !== ccn) {

        alert('las contraseñas no coinciden');
        return;

    }

    auth.createUserWithEmailAndPassword(correo.value, contraseña.value).then(

        (data) => {

            let user = {

                id: data.user.uid,
                nombre: n,
                telefono: t,
                correo: cr,
                contraseña: cn

            }

            database.ref('usuarios/' + user.id).set(user);
            window.location.href = 'index.html';

        }

    ).catch(

        (error) => {

            alert('correo ya registrado anteriormente');

        }

    );

}
registrar.addEventListener('click', registrarCuenta);

ingresoLog = () => {

    window.location.href = 'login.html';

}
cambioLog.addEventListener('click', ingresoLog);