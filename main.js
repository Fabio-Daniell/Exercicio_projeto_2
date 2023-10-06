const form = document.getElementById('Form-contato');

const ArrayContato = [];
const ArrayNumero = [];

let linhas = '';

mensagerConatato('none');

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
})

function adicionaLinha(){
    const inputContato = document.getElementById('contato');
    const inputNumero = document.getElementById('numero');

    if(ArrayContato.includes(inputContato.value)){
        mensagerConatato('block')

        inputContato.value = '';
        inputNumero.value = '';
    }else{
        mensagerConatato('none');

        ArrayContato.push(inputContato.value);
        ArrayNumero.push(parseInt(inputNumero.value));

        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</td>`;

        linhas += linha;

        inputContato.value = '';
        inputNumero.value = '';
    }
}

function atualizaLinha(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function mensagerConatato(x){
    const mensagError = document.getElementById('repeated-contact');
    mensagError.style.display = x ;
}