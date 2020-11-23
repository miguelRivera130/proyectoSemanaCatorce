class Homepage {

    constructor(contact) {

        this.contact = contact;

    }

    render = () => {

        var contacto = document.createElement('div');
        contacto.className = 'contacto';

        var nomCon = document.createElement('div');
        nomCon.innerHTML = this.contact.nombre;
        nomCon.className = 'nameContact'

        var telCom = document.createElement('div');
        telCom.innerHTML = this.contact.telefono;

        var del = document.createElement('button');
        del.className = 'delButton';

        contacto.appendChild(nomCon);
        contacto.appendChild(telCom);
        contacto.appendChild(del);

        //eliminar contacto
        const deleteContact = () => {

            auth.onAuthStateChanged(

                (user) => {

                    database.ref('usuarios/' + user.uid).once(

                        'value',

                        (data) => {

                            let info = data.val();

                            var accionDel = this.contact;
                            database.ref('contactos/' + info.id + '/' + accionDel.id).set(null);

                        }

                    )

                }

            );

        }
        del.addEventListener('click', deleteContact);

        return contacto;

    }

}