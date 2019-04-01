
function buscandoCep(){

    const cep = document.getElementById("cep").value;


    fetch(`http://viacep.com.br/ws/${cep}/json`)
    .then(response =>{

        return response.json();

})
.then(data => {
    var cidade = document.getElementById("cidade");
    var bairro = document.getElementById("bairro");
    var rua = document.getElementById("rua");
    var uf = document.getElementById("uf");
    
    cidade.value=data.localidade;
    bairro.value = data.bairro;
    rua.value = data.logradouro;
    uf.value = data.uf;
    
    
})


};

document.getElementById("imprimir").addEventListener("click",function(){

    var curriculo = document.write("Warleson Candido da Silva");
    curriculo += "Nascido e Criado no Gueto";
    
});


