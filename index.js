class clientes {
    constructor(nombre, nif){
        this.nombre = nombre;
        this.nif = nif;
    }
    
}
const container = document.getElementById("container");
const menu = document.getElementById("menu");
const home = document.getElementById("home");
const reservar = document.getElementById("reservar");
const cancelar = document.getElementById("cancelar");
const opnif = document.getElementById("opnif");
const opnombre = document.getElementById("opnombre");
const listaclientes = [
    new clientes( "Nicolas Carballo","41558330"),
    new clientes("Josep","56568596f")    
];
/*
    const clientenuevo = new clientes(localStorage.getItem('nombre'),localStorage.getItem('nif'));
    listaclientes.push(clientenuevo);
*/
let botonRegistrar = document.getElementById("botonRegistrar");
let botonIniciar = document.getElementById("botonIniciar");
const cuerpo = document.getElementById("Cuerpo")
const inputNombre = document.getElementById("Nombre");
const estatus = document.getElementById("status");
const inputNif = document.getElementById("Nif");
const formulario = document.getElementById("formulario");
const btncancelareserva = document.getElementById("botonCancelareserva");
const btnreservar = document.getElementById("botonReservar");
////////////-------------------------------------------------------------------------------------------------------------------------------------------------------------------
let comprobarusuario = function(nombre,nif){
    let nifcorrecto = false;
    let nombrecorrecto = false;
    let auxnombre ="";
    
        for (const cliente of listaclientes) {            
                if(cliente.nif === nif & cliente.nombre.toLowerCase() === nombre.toLowerCase()){
                    nifcorrecto=true;
                    nombrecorrecto=true;
                    auxnombre= cliente.nombre;                           
                    sessionStorage.setItem("nifactual",cliente.nif);     
                    
                    
                }else if (cliente.nombre.toLowerCase()=== nombre.toLowerCase() & cliente.nif != nif){                   
                    nombrecorrecto=true;
                    nifcorrecto=false;
                }else if ( cliente.nombre.toLowerCase() != nombre.toLowerCase() & cliente.nif === nif){                    
                    nifcorrecto=true;
                    nombrecorrecto=false;
                }                          
        }        
        if(nifcorrecto & nombrecorrecto){
                    estatus.textContent= `Bienvenido sr/sra ${auxnombre} `;
                    return true;
        }else if(!nifcorrecto & nombrecorrecto){
            estatus.textContent="El nif introducido no coincide con el nombre del usuario";
            return false;
        }else if(nifcorrecto & !nombrecorrecto){
            estatus.textContent= "El nombre introducido no coincide con el nif del usuario";
        }else if(!nifcorrecto & !nombrecorrecto){
            estatus.textContent= "No se encontro un cliente con esos datos, por favor registrese para ingresar";
        }
}

botonIniciar.addEventListener("click", () => {
    let valorNombre = inputNombre.value;
    let valorNif = inputNif.value;      
  console.log(valorNombre,valorNif);
  if(comprobarusuario(valorNombre,valorNif)){
    formulario.style.animation="animacionlogin 1s ease 0s 1 normal forwards"
    formulario.style.display="none";
    botonIniciar.style.display="none";
    botonRegistrar.style.display="none";
    menu.style.display= "block";
        
  }
  if(valorNif === ""){
    estatus.textContent = "El campo nif no puede estar vacio"
  }
  if(valorNombre === ""){
    estatus.textContent = "El campo nombre no puede estar vacio";
  }
  if(valorNif === "" & valorNombre === ""){
    estatus.textContent="Ingrese sus datos para ingresar ";
  }
    estatus.style.display= "block";
    
});


botonRegistrar.addEventListener("click", () => {
    
    let valorNombre = inputNombre.value;
    let valorNif = inputNif.value; 
    let nombrevalido = true;
    let nifvalido = true;
    
    for (const cliente of listaclientes) {
        if(cliente.nif === valorNif & cliente.nombre.toLowerCase() === valorNombre.toLowerCase()){
            nombrevalido=false;
            nifvalido=false;    
        }else if (cliente.nombre.toLowerCase()=== valorNombre.toLowerCase() & cliente.nif != valorNif){                   
            nombrevalido=false;
        }else if ( cliente.nombre.toLowerCase() != valorNombre.toLowerCase() & cliente.nif === valorNif){                    
            nifvalido=false; 
        }        
    }   
    if(valorNif === ""){
        estatus.textContent = "El campo nif no puede estar vacio"
        nifvalido=false;
      }
      if(valorNombre === ""){
        estatus.textContent = "El campo nombre no puede estar vacio";
        nombrevalido=false;
      }
      if(valorNif === "" & valorNombre === ""){
        estatus.textContent="Ingrese sus datos para registrarse ";
        nombrevalido=false;
        nifvalido=false;
      }

    if(nombrevalido & nifvalido){
        estatus.textContent="Cliente registrado con exito";
        let nuevocliente = new clientes(valorNombre,valorNif);
        listaclientes.push(nuevocliente);
    }else if(!nombrevalido & nifvalido){
        estatus.textContent="Ya hay un cliente registrado bajo ese nombre";

    }else if(nombrevalido & !nifvalido){
        estatus.textContent="Ya hay un cliente registrado bajo ese nif"
    }else if(!nombrevalido & !nifvalido){
        estatus.textContent="Ya hay un cliente registrado bajo esos datos"
    }   
    console.log(nombrevalido,nifvalido)
    estatus.style.display= "block";

    
       
 });
////////////-------------------------------------------------------------------------------------------------------------------------------------------------------------------
let hotelactual = [

]
const Hotel = [
      {
        numero_de_habitacion: 101,
        piso:1,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 102,
        piso:1,
        camas:2,
        precio:100,
        reserva:null,
    },
    {
        numero_de_habitacion: 103,
        piso:1,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 104,
        piso:1,
        camas:3,
        precio:130,
        reserva:"56568596f",
        seleccionada: false,
    },
    {
        numero_de_habitacion: 105,
        piso:1,
        camas:3,
        precio:130,
        reserva:"56568596f",
        seleccionada: false,
    },
    {
        numero_de_habitacion: 106,
        piso:1,
        camas:1,
        precio:75,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 201,
        piso:2,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 202,
        piso:2,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 203,
        piso:2,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 204,
        piso:2,
        camas:3,
        precio:130,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 205,
        piso:2,
        camas:3,
        precio:130,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 206,
        piso:2,
        camas:1,
        precio:75,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 301,
        piso:3,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 302,
        piso:3,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 303,
        piso:3,
        camas:2,
        precio:100,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 304,
        piso:3,
        camas:3,
        precio:130,
        reserva:null,
        seleccionada: false,
    },
    {
        numero_de_habitacion: 305,
        piso:3,
        camas:3,
        precio:130,
        reserva:"41558330",
        seleccionada: false,
    },
    {
        numero_de_habitacion: 306,
        piso:3,
        camas:1,
        precio:75,
        reserva:null,
        seleccionada: false,
    },
]


// .addEventListener("click", () => { });
//.filter(word => word.length > 6);


    home.addEventListener("click", () => {
        btnreservar.style.display ="none";
        btncancelareserva.style.display ="none";
        while(hotelactual.length > 0){
            hotelactual.pop();
        }

        for (const habitacion of Hotel) {
            hotelactual.push(habitacion)
        }
        mostrar(hotelactual,opcionesMostrar.deshabilitarseleccion,opcionesMostrar.nif);
        sessionStorage.setItem("home",true);
        //sessionStorage.setItem("nifactual",cliente.nif);
     });
     
     reservar.addEventListener("click", () => { 
        while(hotelactual.length > 0){
            hotelactual.pop();
        }
       hotelactual = Hotel.filter( libres => libres.reserva === null)
        btnreservar.style.display ="block";
        btncancelareserva.style.display ="none";
        if(hotelactual.length> 0){
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion);
        }else{
            container.style.display="none";
            estatus.textContent="Todas las habitaciones estan reservadas";
        }
        console.log("hoteactualcheto");
        sessionStorage.setItem("home",false);
     });
     cancelar.addEventListener("click", () => {
        while(hotelactual.length > 0){
            hotelactual.pop();
        }
        hotelactual = Hotel.filter( ocupada => ocupada.reserva === sessionStorage.getItem("nifactual"));                            
        if(hotelactual.length > 0){
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion,opcionesMostrar.nif) 
            btnreservar.style.display ="none";
            btncancelareserva.style.display ="block";
        }else{
            
            estatus.textContent="No hay reservas registradas bajo este usuario";
            container.style.display= "none";
        }
        sessionStorage.setItem("home",false);
})
     btncancelareserva.addEventListener("click", () => {
        let contadorcancelar = 0;
        while(hotelactual.length > 0){
            hotelactual.pop();
        }
        for (const habitacion of Hotel) {
            if(habitacion.seleccionada === true){
                habitacion.reserva = null;
                contadorcancelar++;
                habitacion.seleccionada = false;
             
            }
        }
        hotelactual = Hotel.filter( ocupada => ocupada.reserva === sessionStorage.getItem("nifactual"))
        
        btnreservar.style.display ="none";
        btncancelareserva.style.display ="block";
        if(hotelactual.length> 0 & contadorcancelar > 0){
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion,opcionesMostrar.nif);
            estatus.textContent="Cancelacion realizada con exito";
        }else if (hotelactual.length> 0 & contadorcancelar === 0){
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion);
            estatus.textContent="No has seleccionado ninguna habitacion";
        }else{
            container.style.display="none";
            estatus.textContent="No tienes ninguna habitacion reservada";
        }
     });
     
   
     
     

    
            
    
    const opcionesMostrar={
        habilitarseleccion : true,
        deshabilitarseleccion : false,
        nif: true,
        nombre: false,
    }
    
    btnreservar.addEventListener("click", () => {
        while(hotelactual.length > 0){
            hotelactual.pop();
        }
        let contadorresrva = 0;
        for (const habitacion of Hotel) {
            if(habitacion.seleccionada === true){
                habitacion.reserva = sessionStorage.getItem("nifactual");
                contadorresrva++;
                habitacion.seleccionada=false;
            }
        }
        hotelactual = Hotel.filter( libres => libres.reserva === null)
        
        
        if(hotelactual.length> 0 & contadorresrva > 0){
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion,opcionesMostrar.nif);
            estatus.textContent="Reserva realizada con exito";
        }else if (hotelactual.length> 0 & contadorresrva === 0){
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion,opcionesMostrar.nif);
            estatus.textContent="No has seleccionado ninguna habitacion";
        }
        else{
            container.style.display="none";
            estatus.textContent="Reserva realizada con exito, todas las habitaciones estan reservadas";
        }
        
    });


    opnif.addEventListener("click", () => { 
        if(sessionStorage.getItem("home")=== true){
            mostrar(hotelactual,opcionesMostrar.deshabilitarseleccion,opcionesMostrar.nif);
        }else{
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion,opcionesMostrar.nif);
        }
        

    });
    opnombre.addEventListener("click", () => { 
        if(sessionStorage.getItem("home")=== true){
            mostrar(hotelactual,opcionesMostrar.deshabilitarseleccion,opcionesMostrar.nombre);
        }else{
            mostrar(hotelactual,opcionesMostrar.habilitarseleccion,opcionesMostrar.nombre);
        }
        

    });
    let mostrar= function(arraydeobj,seleccion,opcliente){       
        container.style.display=("grid");
        container.innerHTML= '<div class="div1"> <p class="penunciado">Habitacion</p><p class="penunciado">num piso</p><p class="penunciado">Camas</p><p class="penunciado">precio</p><p class="penunciado">nif</p></div>'
        container.style.gridTemplateRows=`repeat(${arraydeobj.length}, 1fr ) `
        /*grid-area: 1 / 1 / 2 / 6;
            height: 50%;
            grid-template-rows: repeat(18, 1fr);
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            margin-left: 20px;
            margin-right: 20px;
        */
            var i=2;
               for (const obj of arraydeobj) {            
                const habitacion = document.createElement("div")
                container.appendChild(habitacion)
                habitacion.style.gridArea = `${i} / 1 / ${i+1} / 6`;
                habitacion.style.height = "4vh";
                habitacion.style.maxWidth = "100%";
                habitacion.style.display = "flex";
                habitacion.style.justifyContent= "space-between";
                habitacion.style.marginLeft = "20px";
                habitacion.style.marginRight = "20px";
                habitacion.style.borderRadius = "20px";
                obj.seleccionada= false;
                i++;
                for (const prop in obj) {
                    if(prop != "seleccionada"){
                        const columnas = document.createElement("p");
                        if(opcliente){
                            if(prop != "reserva"){
                                columnas.textContent = obj[prop];
                            }
                            else if(prop === "reserva" & obj[prop] != null){
                                columnas.textContent = obj[prop];
                            }else if(prop === "reserva" & obj[prop] === null){
                                columnas.textContent = "Libre";
                            }  
                        }else{
                            if(prop != "reserva"){
                                columnas.textContent = obj[prop];
                            }
                            else if(prop === "reserva" & obj[prop] != null){
                                for (const cliente of listaclientes) {
                                    if(cliente.nif === obj[prop]){
                                        columnas.textContent = cliente.nombre;
                                    }
                                }
                                
                            }else if(prop === "reserva" & obj[prop] === null){
                                columnas.textContent = "Libre";
                            } 
                            
                        }
                                  
                    habitacion.appendChild(columnas);
                    columnas.style.minWidth = "20%";                               
                    columnas.style.backgroundColor = "#AEA3B0";
                    
                    if(seleccion === opcionesMostrar.habilitarseleccion){
                        habitacion.addEventListener("click", () => {                        
                                columnas.style.backgroundColor = ("red")
                                obj.seleccionada = true;      
                                console.log(obj.seleccionada);                  
                        });
                    }
                    }                                                                
                }            
               }
               
    }






