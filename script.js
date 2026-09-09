// Abre o modal e trava o fundo
function abrirFormulario() {
    const modal = document.getElementById('passo-1');
    if (modal) {
        modal.style.display = 'flex';
    }
    document.body.classList.add("modal-aberto");
}

// Esconde o modal, libera a rolagem e reseta os campos
function fecharFormulario() {
    const modal = document.getElementById('passo-1');
    if (modal) {
        modal.style.display = 'none';
    }

    // Libera a rolagem do fundo
    document.body.classList.remove("modal-aberto");

    // Limpa todos os rádios e campos de texto
    const formulario = document.getElementById("meuFormulario");
    if (formulario) {
        formulario.reset();
    }
}

// Captura o envio do formulário (funciona pelo botão e pela tecla Enter)
document.getElementById("meuFormulario").addEventListener("submit", async function(event) {
    event.preventDefault(); // Impede o redirecionamento para a página externa do Formspree

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
            fecharFormulario(); // Fecha o modal e limpa tudo automaticamente
        } else {
            alert("Ocorreu um erro ao enviar seu feedback. Tente novamente.");
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua rede e tente novamente.");
    }
});

// Garante que o formulário feche limpo ao usar o botão 'Voltar' do navegador
window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
        fecharFormulario();
    }
});