

const inputCep = document.getElementById('js-input-cep')
console.log(inputCep)
const btnbuscar = document.getElementById('js-btn-buscar')

const inputBairro = document.getElementById('js-input-bairro')
const inputCepDados = document.getElementById('js-input-cep-dados')
const inputLogradouro = document.getElementById('js-input-logradouro')
const inputEstado = document.getElementById('js-input-estado')

const areaDados = document.querySelector('.js-dados')
const msgErro = document.querySelector('.js-error')

console.log(msgErro)





btnbuscar.addEventListener('click', () => {
    if(inputCep.value !== ''){

    
         axios({
             method: 'GET',
             url: `https://viacep.com.br/ws/${inputCep.value}/json/`
         })
         .then( response  => {
             let data = response.data
             inputBairro.value = data.bairro;
             inputCepDados.value = data.cep;
             inputLogradouro.value = data.logradouro;
             inputEstado.value = data.uf;
         })

        msgErro.style.display = 'none'
        areaDados.style.display = 'block'
    }
    else{
        msgErro.style.display = 'block'
        areaDados.style.display = 'none'
    }
})























// const h1 = document.querySelector('h1')

// const api = fetch('https://viacep.com.br/ws/01001000/json/')

// api.then(response => response.json()).then(json => h1.innerText = json.localidade)




// / async function fetchAimals(url){
    //     const animalsResponse = await fetch(url)
    //     const responsejson = await animalsResponse.json()
    //     const numerosGrid = document.querySelector('.numeros-grid')
    //     console.log(responsejson)
    //     responsejson.forEach(result => {
    //         const divAnimal = createAnimal(result)
    //         numerosGrid.appendChild(divAnimal)
    //     })
    // }
    