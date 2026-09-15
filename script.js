function abrirFormulario() {
    const modal = document.getElementById('passo-1');
    if (modal) {
        modal.style.display = 'flex';
    }
    document.body.classList.add("modal-aberto");
}

function fecharFormulario() {
    const modal = document.getElementById('passo-1');
    if (modal) {
        modal.style.display = 'none';
    }

    document.body.classList.remove("modal-aberto");

    const formulario = document.getElementById("meuFormulario");
    if (formulario) {
        formulario.reset();
    }
}

document.getElementById("meuFormulario").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const form = event.target;
    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("Obrigado! Seu feedback foi enviado com sucesso.");
            fecharFormulario(); 
        } else {
            alert("Ocorreu um erro ao enviar seu feedback. Tente novamente.");
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua rede e tente novamente.");
    }
});

window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
        fecharFormulario();
    }
});