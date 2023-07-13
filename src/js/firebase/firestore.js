import app from './firebase.config.js';
import {getFirestore, collection, getDocs, addDoc} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';











const db= getFirestore(app);
// const auth = firebase.auth();

//    variables de registro

const nombreregistro=document.getElementById('nombrereginput');
const contraseñaregistro=document.getElementById('contraseñareginput');
// const correoregistro=document.getElementById('correoreginput');
const meserocheck=document.getElementById('meserocheck');
const cajerocheck=document.getElementById('cajerocheck');
const botonregistrar=document.getElementById('botonregistrar');
const parrafo= document.getElementById('warnings')
      
      
      
      

      function validate (){
        if(cajerocheck.checked){
         return 'Cajero'
        }else if(meserocheck.checked ){
          return 'Mesero';
      }else{
        return null;
      }
    
    }
    
    
    
    
    
    
    async function getUsuarios(database){
        const usuariosCollection = collection (database, 'Usuarios');
        const result = await getDocs(usuariosCollection);
        const usuariosList= result.docs.map(doc => doc.data ());
        return usuariosList;
      };
      
      try{
               getUsuarios(db).then(response => console.log(response));
              }catch(err){
                console.log
            }
            
            
            async function createNewUser (database, userDB){
        const newUser= await addDoc (collection(database, 'Usuarios'), userDB);
        return newUser;
        
      }
      
        
        // function sendData(e ){
        //   e.preventDefault();
        //   console.log('sendData')
        //   const user={
          //     correoregistro: correoregistro.value,
        //     contraseñaregistro: contraseñaregistro.value,
        //     role:role.value,
        
        
        //   }
        // }
        
        function validarEmail(email) {
          var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);

          
        }

        function validarNombre(nombre) {
          var re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
          return re.test(nombre);
        }
        
        
        const correoregistro=document.getElementById('correoreginput');
        

        botonregistrar.addEventListener('click', () => {
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
               createNewUser(db, userObject).then(response =>{ console.log(response.id)
              nombreregistro.value= '';
              correoregistro.value='';
              contraseñaregistro.value= '';
              meserocheck.checked= false;
              cajerocheck.checked= false;
              
            })
            }catch(error){
              console.error(error);
            }
          }else {
            parrafo.innerHTML='Verifique si estan correctos los campos'
            // validarDatos()
          }
 
  
  
});

const password=document.getElementById('contraseñareginput').value;
const email=document.getElementById('correoreginput').value;
const form =document.getElementById('form')

