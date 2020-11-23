const nombreUser = document.getElementById('username');
const listaContactos = document.getElementById('listaContactos');
const cerrar = document.getElementById('cerrarSesion');

const agregar = document.getElementById('mas');

const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(

    (user) => {

        if (user !== null) {

            database.ref('usuarios/' + user.uid).once(

                'value',

                (data) => {

                    let info = data.val();
                    nombreUser.innerHTML = 'Bienvenido' + ' ' + info.nombre;

                    database.ref('contactos/' + info.id).on('value', function (data) {

                        listaContactos.innerHTML = '';

                        data.forEach(

                            contact => {

                                let valor = contact.val();
                                let act = new Homepage(valor);
                                listaContactos.appendChild(act.render());

                            }

                        );

                    });

                }

            )

        } else {

            window.location.href = 'login.html';

        }

    }

);

registrarContacto = () => {

    window.location.href = 'registroContacto.html';

}
agregar.addEventListener('click', registrarContacto);

close = () => {

    auth.signOut().then(

        () => {

            window.location.href = 'login.html';

        }

    ).catch(
        (error) => {

            alert('error al salir de cuenta');

        }
    );

}
cerrar.addEventListener('click', close);