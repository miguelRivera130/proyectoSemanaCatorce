const correo = document.getElementById('correoLogin');
const contraseña = document.getElementById('contraseñaLogin');

const cambioReg = document.getElementById('noTengoCuenta');
const logear = document.getElementById('logear');

const database = firebase.database();
const auth = firebase.auth();


logearCuenta = () => {

    if (correo.value == '' || contraseña.value == '') {

        alert('completa toda la informacion requerida');
        return;

    }

    auth.signInWithEmailAndPassword(correo.value, contraseña.value).then(

        (data) => {

            window.location.href = 'index.html';

        }

    ).catch(

        (error) => {

            alert('datos de cuenta incorrectos');

        }

    );

}
logear.addEventListener('click', logearCuenta);

ingresoReg = () => {

    window.location.href = 'registro.html';

}
cambioReg.addEventListener('click', ingresoReg);
