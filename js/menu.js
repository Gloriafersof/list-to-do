const button = document.getElementById("menu-hambur");
const options= document.getElementById("productos-abiertos");


button.addEventListener("click", () => {
    button.classList.toggle("close");
    options.classList.toggle("show");
   
});

// options.addEventListener("click", e =>{
//     if (nose.id === "options"){
//         options.classList.remove("show");
//         button.classList.remove("close")

       
//     }
// })



const targets= document.querySelectorAll('[data-target]');
const content=document.querySelectorAll('[data-content]')

targets.forEach(target =>{
    target.addEventListener('click', ()=>{

        content.forEach(c=>{
            c.classList.remove('active')
        })

        const t =document.querySelector(target.dataset.target)
        t.classList.add('active')
    })
})


// CLICK MESAS




const butomesa = document.getElementById("data-boton");
const optionmesa1= document.getElementById("informacion-mesa1");
const optionmesa2= document.getElementById("informacion-mesa2");
const optionmesa3=document.getElementById("informacion-mesa3");
const optionmesa4=document.getElementById("informacion-mesa4");
const optionmesa5=document.getElementById("informacion-mesa5");
const optionmesa6=document.getElementById("informacion-mesa6");
const optionmesa7=document.getElementById("informacion-mesa7");



// MESA1

const mesa1 = document.getElementById('data-boton')

mesa1.addEventListener('click',() =>{

    butomesa.classList.toggle("quita");
    optionmesa1.classList.toggle("muestra");
    optionmesa2.classList.remove('muestra');
    optionmesa3.classList.remove('muestra');
    optionmesa4.classList.remove("muestra");
    optionmesa5.classList.remove('muestra'); 
    optionmesa6.classList.remove('muestra');
    optionmesa7.classList.remove('muestra');

        

})

// MESA2

const mesa2 = document.getElementById('data-boton2')

mesa2.addEventListener('click',() =>{

    butomesa.classList.toggle("quita");
    optionmesa2.classList.toggle("muestra");
    optionmesa1.classList.remove('muestra')
    optionmesa3.classList.remove('muestra')
    optionmesa4.classList.remove("muestra");
    optionmesa5.classList.remove('muestra'); 
    optionmesa6.classList.remove('muestra');
    optionmesa7.classList.remove('muestra');

        

})

const mesa3 = document.getElementById('data-boton3')

mesa3.addEventListener('click',() =>{

    butomesa.classList.toggle("quita");
    optionmesa3.classList.toggle("muestra");
    optionmesa1.classList.remove('muestra');
    optionmesa2.classList.remove('muestra');
    optionmesa4.classList.remove("muestra");
    optionmesa5.classList.remove('muestra'); 
    optionmesa6.classList.remove('muestra');
    optionmesa7.classList.remove('muestra');
        

})

const mesa4 = document.getElementById('data-boton4')

mesa4.addEventListener('click',() =>{

    butomesa.classList.toggle("quita");
    optionmesa4.classList.toggle("muestra");
    optionmesa3.classList.remove("muestra");
    optionmesa1.classList.remove('muestra');
    optionmesa2.classList.remove('muestra');
    optionmesa5.classList.remove('muestra'); 
    optionmesa6.classList.remove('muestra');
    optionmesa7.classList.remove('muestra');
        

})

const mesa5 = document.getElementById('data-boton5')

mesa5.addEventListener('click',() =>{

    butomesa.classList.toggle("quita");
    optionmesa5.classList.toggle("muestra");
    optionmesa3.classList.remove("muestra");
    optionmesa1.classList.remove('muestra');
    optionmesa2.classList.remove('muestra');
    optionmesa4.classList.remove('muestra');   
    optionmesa6.classList.remove('muestra'); 
    optionmesa7.classList.remove('muestra');  
})



const mesa6 = document.getElementById('data-boton6')

mesa6.addEventListener('click',() =>{

    butomesa.classList.toggle("quita");
    optionmesa6.classList.toggle("muestra");
    optionmesa3.classList.remove("muestra");
    optionmesa1.classList.remove('muestra');
    optionmesa2.classList.remove('muestra');
    optionmesa4.classList.remove('muestra');   
    optionmesa5.classList.remove('muestra'); 
    optionmesa7.classList.remove('muestra');

    
})


const mesa7 = document.getElementById('data-boton7')

mesa7.addEventListener('click',() =>{

    butomesa.classList.toggle("quita");
    optionmesa7.classList.toggle("muestra");
    optionmesa3.classList.remove("muestra");
    optionmesa1.classList.remove('muestra');
    optionmesa2.classList.remove('muestra');
    optionmesa4.classList.remove('muestra');   
    optionmesa5.classList.remove('muestra'); 
    optionmesa6.classList.remove('muestra'); 
})