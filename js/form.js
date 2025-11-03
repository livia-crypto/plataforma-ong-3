const form = document.querySelector('form');

if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault(); // Evita enviar se houver erro
        let errors = [];

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const cpf = form.cpf.value.trim();
        const telefone = form.telefone.value.trim();
        const cep = form.cep.value.trim();

        // Validação simples
        if(nome.length < 3) errors.push("Nome deve ter ao menos 3 letras");
        if(!email.includes('@')) errors.push("Email inválido");
        if(!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) errors.push("CPF inválido");
        if(!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) errors.push("Telefone inválido");
        if(!/^\d{5}-\d{3}$/.test(cep)) errors.push("CEP inválido");

        // Mostra os erros
        const alertaExistente = document.querySelector('.alert');
        if(alertaExistente) alertaExistente.remove();

        if(errors.length > 0){
            const alertDiv = document.createElement('div');
            alertDiv.classList.add('alert', 'erro');
            alertDiv.innerHTML = errors.join('<br>');
            form.prepend(alertDiv);
        } else {
            alert("Cadastro enviado com sucesso!");
            form.reset();
        }
    });
}
