// Importar os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');

// Inicializar o aplicativo Express
const app = express();

// Configurar o body-parser para tratar requisições com o corpo JSON
app.use(bodyParser.json());

// Rota para verificar o CPF
app.post('/verificar-cpf', (req, res) => {
  const { cpf } = req.body;
  
  // Remover caracteres especiais do CPF
  const cpfDigitsOnly = cpf.replace(/[^\d]+/g, '');
  
  // Verificar se o CPF possui 11 dígitos
  if (cpfDigitsOnly.length !== 11) {
    return res.json({ valid: false });
  }
  
  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpfDigitsOnly)) {
    return res.json({ valid: false });
  }
  
  // Realizar a lógica de verificação do CPF no banco de dados ou onde for necessário
  // Aqui implementar a lógica para verificar o CPF no seu sistema
  // e retornar { valid: true } se o CPF for válido ou { valid: false } se não for
  
  // Exemplo de verificação fictícia
  const validCPF = '12345678909'; // CPF válido fictício para exemplo
  
  if (cpfDigitsOnly === validCPF) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
