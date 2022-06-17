//crearemos un saludo ineractivo mostrando sus datos y mostrandolo en la pantalla

//seleccionar al boton que produzca un evento (ID)
document.getElementById("boton").addEventListener("click",function(){ // registra un evento a un objet especifico "addeventli..."
    //extraer los datos del usuario de html, declarando variables 
    //para obtener datos usamos propiedad value "values":significa obtengo el dato
    let nom = document.getElementById("nombre  ").value 
    let tel = document.getElementById("telefono ").value
    let edad = document.getElementById("edad    ").value
    let letra =document.getElementById("dni    ").value
    let fecha=document.getElementById("fecha    ").value
    let apellido=document.getElementById("apellido   ").value
   // let corr = document.getElementById("correo").value
   // let fecha =document.getElementById("nacimiento").value

    
    //mostrar el resultado en la pantalla: innertHTML
    document.getElementById("salida").innerHTML="Hola " + nom + " Te haz hecho acreedor de un vale de 10 soles en consumo y te llamaremos al numero " + tel +" pare decirte cómo podras recoger tu premio. "
})  