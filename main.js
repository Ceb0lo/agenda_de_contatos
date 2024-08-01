const formTelefone = document.getElementById('form_agenda');
const atividades = [];
const notas = [];
let addLinha = '';


formTelefone.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTable()
})

function adicionarLinha(){
    const inputNomeContato = document.getElementById('nome_contato');
    const inputNumeroContato = document.getElementById('numero_contato');

    if(atividades.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já está na sua agenda`)
    }else{
        atividades.push(inputNomeContato.value);
        notas.push(parseFloat(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;
    
        addLinha += linha;
    }
    inputNumeroContato.value = '';
    inputNomeContato.value = '';

}

function atualizaTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = addLinha;
}
