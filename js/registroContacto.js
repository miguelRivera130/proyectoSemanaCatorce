const nombre = document.getElementById('nombreAggContacto');
const telefono = document.getElementById('telefonoAggContacto');

const agg = document.getElementById('agregar');
const homePage = document.getElementById('noContacto');

const database = firebase.database();
const auth = firebase.auth();

registrarContacto = () => {

    auth.onAuthStateChanged(

        (user) => {

            if (user !== null) {

                database.ref('usuarios/' + user.uid).once(

                    'value',

                    (data) => {

                        let userData = data.val();

                        console.log(userData.id);

                        let n = nombre.value;
                        let t = telefono.value;

                        if (n == '' || t == '') {

                            alert('completa toda la informacion pedida para registrar un contacto');
                            return;

                        }

                        let objContacto = {

                            id: database.ref('ontactos/' + userData.id).push().key,
                            nombre: n,
                            telefono: t

                        }

                        database.ref('contactos/' + userData.id).push().set(objContacto);

                        nombre.value = '';
                        telefono.value = '';

                        alert('usuario registrado');

                    }

                );

            } else {

                window.location.href = 'login.html';

            }

        }

    );

}
agg.addEventListener('click', registrarContacto);

regresoHomepage = () => {

    window.location.href = 'index.html';

}
homePage.addEventListener('click', regresoHomepage);