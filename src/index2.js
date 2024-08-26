document.addEventListener('DOMContentLoaded', function() {
  const listaAlunos = document.getElementById('listaAlunos');
  
  if (listaAlunos) {
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    
    // Função para atualizar a lista no DOM
    function atualizarLista() {
      listaAlunos.innerHTML = ''; // Limpa a lista existente
      alunos.forEach(function(aluno, index) {
        const li = document.createElement('li');
        li.innerHTML = `
          <div class="all">
            <p class="name">Nome: ${aluno.nome}</p>
            <p class="age">Idade: ${aluno.idade}</p>
            <p class="month">Mês de Nascimento: ${aluno.mesNascimento}</p>
            <p class="year">Ano de nascimento: ${aluno.anoNascimento}</p>
            <span class="material-symbols-outlined delete-icon" data-index="${index}">delete</span>
          </div>
        `;
        listaAlunos.appendChild(li);
      });

      // Adiciona event listeners aos ícones de exclusão
      document.querySelectorAll('.delete-icon').forEach(function(icon) {
        icon.addEventListener('click', function() {
          const index = this.getAttribute('data-index');
          alunos.splice(index, 1); // Remove o item do array
          localStorage.setItem('alunos', JSON.stringify(alunos)); // Atualiza o localStorage
          atualizarLista(); // Atualiza a lista no DOM
        });
      });
    }

    atualizarLista(); // Inicializa a lista
  } else {
    console.error('Elemento com ID "listaAlunos" não encontrado no DOM.');
  }
});