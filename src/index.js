// redirecionar para a página de listagem após dar o submit
const form = document.getElementById('formAluno');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const mesNascimento = document.getElementById('mesNascimento').value;
    const anoNascimento = document.getElementById('anoNascimento').value;

    // Cria um objeto aluno
    const aluno = {
      nome: nome,
      idade: idade,
      mesNascimento: mesNascimento,
      anoNascimento: anoNascimento
    };

    // Armazena o aluno no localStorage
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));

    form.reset();
    // Redireciona para a página de listagem
    window.location.href = 'listagemAlunos.html';
  });
