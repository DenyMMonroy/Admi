const btn_crear = document.getElementById('btn_crear');
const input_name = document.getElementById ('input_name');


const crear =async (input_name) =>{
    console.log (input_name)
    alert(input_name)
}

btn_crear.addEventListener("click", crear)