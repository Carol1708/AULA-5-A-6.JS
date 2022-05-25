const cepForm = document.querySelector('#cep-form')

cepForm.addEventListener('submit', (event) => {
    event.preventDefault() // vê se ta funcionando antes de executar. impede q o formulario seja enviado
    event.stopPropagation() // impede que esse envento chame outro evento

    const inputCep = event.target[0] //criou uma varuavel q vai guaradar o input e acessar o target

    const cep = inputCep.value

    fetch(`https://viacep.com.br/ws/${cep}/json` , { //string informando o url q o fetch tem q pegar
      method: 'GET'
    }).then(function(resposta) {
        return resposta.json()
    }).then(function(dados) {
        return 
    }
    
    // event.targed.submit() // continua o envio do formulario
})