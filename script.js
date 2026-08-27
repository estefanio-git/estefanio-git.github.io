document.addEventListener("DOMContentLoaded", () => {
    const copyBtn = document.getElementById("copy-btn");
    const emailText = document.getElementById("email-text").innerText;

    // Função que copia o e-mail para a área de transferência ao clicar no botão
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(emailText).then(() => {
            const textOriginal = copyBtn.innerText;
            
            copyBtn.innerText = "Copiado! ";
            copyBtn.style.backgroundColor = "#28a745";

            setTimeout(() => {
                copyBtn.innerText = textOriginal;
                copyBtn.style.backgroundColor = "#007bff";
            }, 2000);
        });
    });
});
