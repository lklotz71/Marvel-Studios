console.log(document);

var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')

    console.log(nome, email, turma, motivo, mensagem);
    paragrafo.innerHTML = `
    <b>${nome}</b>, sua mensagem foi enviada com sucesso!
    `
        formulario.append(paragrafo)
})