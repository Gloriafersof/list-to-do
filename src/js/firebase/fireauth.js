import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import{
    initializeApp
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import {getDatabase} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';




function validate (){
    if(cajerocheck.checked){
     return 'Cajero'
    }else if(meserocheck.checked ){
      return 'Mesero';
  }else{
    return null;
  }

}

 
function validarEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);

    
  }

  function validarNombre(nombre) {
    var re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return re.test(nombre);
  }

const firebaseConfig = {
    apiKey: "AIzaSyBIU9zjVB7PvAUJSpROLbae_dJ3rDZKT5I",
    authDomain: "mariperez-62d8f.firebaseapp.com",
    projectId: "mariperez-62d8f",
    storageBucket: "mariperez-62d8f.appspot.com",
    messagingSenderId: "754110032936",
    appId: "1:754110032936:web:f46366b10556082581591d"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


const nombreregistro=document.getElementById('nombrereginput');
const contraseñaregistro=document.getElementById('contraseñareginput');
const correoregistro=document.getElementById('correoreginput');
const meserocheck=document.getElementById('meserocheck');
const cajerocheck=document.getElementById('cajerocheck');
const botonregistrar=document.getElementById('botonregistrar');
const parrafo= document.getElementById('warnings')

botonregistrar.addEventListener('click', () => {

    const correo = document.getElementById('correoreginput').value;
    const contra = document.getElementById('contraseñareginput').value;

    if ((correoregistro.value != '' && validarEmail(correoregistro.value)) && ((contraseñaregistro.value != '' && contraseñaregistro.value.length > 6))&&(validarNombre(nombreregistro.value))) {
      try{ 
        //  validarDatos(correoregistro,contraseñaregistro)
          const role= validate();
          const userObject= {
          nombreregistro: nombreregistro.value,
          correoregistro:correoregistro.value,
          contraseñaregistro: contraseñaregistro.value,
          role: validate()
        }
        createUserWithEmailAndPassword(auth, correo, contra)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          alert('user created')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert('error mssage')
          // ..
        });
      
      }catch(error){
        console.error(error);
      }
    }else {
      parrafo.innerHTML='Verifique si estan correctos los campos'
      // validarDatos()
    }



});













const email= document.getElementById('emailIniciar');
const contraseña= document.getElementById('contraseñaIniciar');
const botoniniciar= document.getElementById('loginBoton');
botoniniciar.addEventListener('click', (e)=>{
    e.preventDefault();


    signInWithEmailAndPassword(auth, email.value, contraseña.value)

    .then((userCredential) => {
        
        // form.reset();
        console.log('funcionó');
        // Signed in 
        const user = userCredential.user; 
        console.log(user);
        console.log(user.email);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})



