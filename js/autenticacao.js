
import { hex_sha256 } from "./sha256-min.mjs";

const target = 'c5bee83daac345dbf747e4a3946865ba3f0d114e383189ced0ba5f88e14c9896';
const incremento = 'glorioso';
const mensagem =  document.getElementById('mensagem')

document.getElementById('entrar').onclick = () =>{
    const entrada = document.getElementById('inputpassword').value;
    if (hex_sha256(entrada + incremento) === target){
        sessionStorage.setItem('logado', '1');
        window.location.href = 'home.html';

    }else{
        mensagem.innerHTML = 'Senha incorreta';
    }
}