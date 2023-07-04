
const crear = document.getElementById('crear');
const container = document.getElementById('registro');
const iniciar= document.getElementById('iniciar');
const registrar= document.getElementById('botonregistrar')

// Evento para abrir form de registro
crear.addEventListener('click', () =>{

  container.classList.toggle('show');
  iniciar.classList.toggle('close');
}

);

// Evento para regresar al form de iniciar sesión
registrar.addEventListener('click', () =>{
  
  container.classList.remove('show');
  iniciar.classList.remove('close')
}
);
