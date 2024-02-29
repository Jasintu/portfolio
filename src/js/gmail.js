function enviarEmail() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const emailContent = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;

    gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
            'raw': window.btoa(unescape(encodeURIComponent(
                `From: ${email}\r\n` +
                `To: henriqueedev@gmail.com\r\n` +
                `Subject: Nova mensagem de ${nome}\r\n\r\n` +
                `${emailContent}`
            )))
        }
    }).then(function(response) {
        console.log(response);
        alert("Email enviado com sucesso!");
    }, function(error) {
        console.error(error);
        alert("Falha ao enviar o email.");
    });
}