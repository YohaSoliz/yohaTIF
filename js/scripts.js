//Este es el valor de la entrada
const valorentrada=200;

//Valor de cada uno de los descuentos
var descuentoestudiante=80;
var descuentotrainee=50;
var descuentojunior=15;

//Captura de los datos de inputs y botones
nombre=document.getElementById("nombre");
apellido=document.getElementById("apellido");
correo=document.getElementById("correo");
cantidad=document.getElementById("cantidad");
categoria=document.getElementById("categoria");
botonborrar=document.getElementById("botonborrar");
botonresumen=document.getElementById("botonresumen");

//función para cálculo del total a pagar
function totalpagar()
{
    quitarClaseError()

    //verificar que los campos esten completos
    if(nombre.value==="")
    {
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    if(apellido.value==="")
    {
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    if(correo.value==="")
    {
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }
    //esto es para que además verifique que sea un mail válido (que cumpla con el formato establecido).
    const emailValido = correo => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
     }
    if(!emailValido(correo.value))
     {
        correo.classList.add("is-invalid");
        correo.focus();
        return ;
     }
    if( (cantidad.value<=0) || (isNaN(cantidad.value)))
     {
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return ;
     }
    if(categoria.value==="")
    {
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    //cuentas para conocer el valor total que debo pagar
    let totalvalorentrada=(cantidad.value*valorentrada)

    if(categoria.value==0)
    {
        totalvalorentrada=totalvalorentrada;  
    }
    if(categoria.value==1)
    {
        totalvalorentrada=totalvalorentrada-(descuentoestudiante/100 * totalvalorentrada);
    }
    if(categoria.value==2)
    {
        totalvalorentrada=totalvalorentrada-(descuentotrainee/100 * totalvalorentrada);
    }
    if(categoria.value==3)
    {
        totalvalorentrada=totalvalorentrada-(descuentojunior/100 * totalvalorentrada);
    }

    //para ingresar el resultado a continuación del texto Total a pagar: $
    textoresultado.innerHTML="Total a pagar: $"+totalvalorentrada;
}

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}

//función para borrar todo
function borrartodo()
{
    quitarClaseError();
    textoresultado.innerHTML="";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "";
}

//botón resumen
botonresumen.addEventListener("click",totalpagar);

//botón borrar
botonborrar.addEventListener("click",borrartodo);


