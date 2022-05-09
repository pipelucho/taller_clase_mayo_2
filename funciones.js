//funcion para aparecer el check de la parte 1
function desplegar (){
    let div=document.getElementById("check-si")
    
   let elemento_si=document.getElementById("flexRadioDefault1");
   if(elemento_si.checked){
       div.innerHTML=`<div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
         confirmar terminos y condiciones
       </label>
     </div>
     <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
       <label class="form-check-label" for="flexCheckChecked">
         acepto politica de tratamiento de datos
       </label>
     </div>`
   }else{
        div.innerHTML=""

   }
}
//funcion para poner en mayus el nombre
function mostrar()
{
    let nombre=document.getElementById("nombre").value;
    alert(nombre.toLocaleUpperCase());
}
//funcion para probar contraseñas
function check()
{
    let pass1=document.getElementById("").value;

}