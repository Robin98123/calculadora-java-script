const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('after');
});

function numeros(valor){
    document.getElementById('resultado').value += valor;
}

function operacion(){
    var opera = document.getElementById('resultado').value;
    if(opera == 0){
        document.getElementById('resultado').value = "sin operacion";
    } else{
        document.getElementById('resultado').value = eval(opera);
    }
}

function resetear(){
    document.getElementById("resultado").value="";
}