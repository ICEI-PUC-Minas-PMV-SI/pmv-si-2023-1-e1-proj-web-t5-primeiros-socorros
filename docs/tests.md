# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Gerando um cadastro e fazendo login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa o ícone de login e depois clica em "Cadastre-se".<br> 2) O usuário insere as informações no formulário. <br> 3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br>
**Requisitos associados** | RF-015 & RNF-004
**Resultado esperado** | Gerar um cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Recuperar a senha**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de login e clica em "Esqueceu a senha?".<br> 2) O usuário insere o seu CPF.<br> 3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 4) O usuário insere a nova senha 5) A aplicação verifica se os dados são válidos, os amazena e direciona o usuário para a tela de login.
**Requisitos associados** | RF-012 
**Resultado esperado** | Recuperção de senha
**Dados de entrada** | Inserção de dados válidos no formulário de esqueceu a senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Acessando área de Sintomas - Parte 1*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de login e informa "nome de usuário", senha e clica no botão "Entrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>
**Requisitos associados** | RF-001 & RF-004
**Resultado esperado** | Prosseguir para a área de Sintomas.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Acessando área de Sintomas - Parte 2*
 :--------------: | ------------
**Procedimento**  | 1) Usuário(Fazendo login ou não) clica em "Guia Informativo Sobre Sintomas".<br> 2) Em seguida, clica nos ícone relacionados ao AVC, acessando então o informativo dos sintomas.<br> 3)  Em seguida, retorna ao menu principal e realiza o mesmo procedimento para as outras seções.<br>
**Requisitos associados** | RF-001 
**Resultado esperado** | Acessar a página  dos Sintomas.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Acessando área do Mapa - Parte 1*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de login e informa "nome de usuário", senha e clica no botão "Entrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>
**Requisitos associados** | RF-003, RNF-003 & RF-004
**Resultado esperado** | Prosseguir para a área do Mapa.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Pesquisando na área do Mapa - Parte 2*
 :--------------: | ------------
**Procedimento**  | 1) Usuário(Fazendo login ou não) clica em "Clique Aqui".<br>2) Usuário insere no campo de pesquisa um local, endereço, bairro, cidade, hospital, etc.<br>3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>4) A aplicação armazena os dados e direciona o usuário para a área pesquisada no mapa.
**Requisitos associados** | RF-003 & RNF-003
**Resultado esperado** | Pesquisar no campo de pesquisa do Mapa.
**Dados de entrada** | Inserção de dados válidos para pesquisa.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Navegando pela área do Mapa - Parte 3*
 :--------------: | ------------
**Procedimento**  | 1) Usuário poderá arrastar o ícone "Pegman" para uma devida área.<br>2) A aplicação disponibiliza quais áreas são possíveis. <br>3) A aplicação armazena os dados e direciona o usuário para a área pesquisada no mapa.<br>
**Requisitos associados** | RF-003 & RNF-003
**Resultado esperado** | Acessar área do Mapa.
**Dados de entrada** | Inserção de dados válidos para pesquisa.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Acessando área dos Primeiros Socorros - Parte 1*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de login e informa "nome de usuário", senha e clica no botão "Entrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>
**Requisitos associados** | RF-013, RF-004, RF-002, RF-005 & RF-008
**Resultado esperado** | Prosseguir para a área dos Pronto-Socorros.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Acessando área dos Primeiros Socorros - Parte 2*
 :--------------: | ------------
**Procedimento**  | 1) Usuário(Fazendo login ou não) clica em "Guia de Primeiros Socorros".<br>  
**Requisitos associados** | RF-002, RNF-002, RF-005, RF-013 & RF-008
**Resultado esperado** | Acessar a página  dos Primeiros Socorros.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Acessando área dos Prevenção de Acidentes Domésticos - Parte 1*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de login e informa "nome de usuário", senha e clica no botão "Entrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>
**Requisitos associados** | RF-006 & RF-004
**Resultado esperado** | Prosseguir para a área dos Pronto-Socorros.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT11 - Acessando área dos Prevenção de Acidentes Domésticos - Parte 2*
 :--------------: | ------------
**Procedimento**  | 1) Usuário(Fazendo login ou não) clica em "Previna acidentes domésticos".<br> 
**Requisitos associados** | RF-006
**Resultado esperado** | Acessar a página  dos Primeiros Socorros.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 - Acessando área dos Telefones Úteis - Parte 1*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de login e informa "nome de usuário", senha e clica no botão "Entrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>
**Requisitos associados** | RF-007 & RF-004
**Resultado esperado** | Prosseguir para a área dos Telefones Úteis.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT13 - Acessando área dos Telefones Úteis - Parte 2*
 :--------------: | ------------
**Procedimento**  | 1) Usuário(Fazendo login ou não) clica em "Emergência".<br> 
**Requisitos associados** | RF-007
**Resultado esperado** | Acessar a página  dos Telefones Úteis.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT14 - Acessando área do Relatório de Glicemia*
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na área de "Controle Glicêmico".<br>2) Usuário acessa a área da página inicial, acessa a área de login de login e informa "nome de usuário", senha e clica no botão "Entrar".<br> 3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 4) O usuário retorna ao menu e clica em "Gerar relatório Glicêmico".
**Requisitos associados** | RF-014, RF-009 & RF-004
**Resultado esperado** | Prosseguir para a área "Relatório Glicemia".
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT15 - Editando os registros de glicemia - Parte 1*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de relatório.<br> 2) Usuário clica no botão de "editar" e altera as informações inseridas através do modal.<br> 3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>   
**Requisitos associados** | RF-010 & RF-014
**Resultado esperado** | Edição dos registros de glicemia.
**Dados de entrada** | Inserção de dados válidos nos formulários de Data, Hora e Índice.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT16 - Editando os registros de glicemia - Parte 2*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de relatório.<br> 2) Usuário clica no botão de "deletar".<br>  
**Requisitos associados** | RF-010
**Resultado esperado** | Exclusão dos registros de glicemia.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT17 - Botão de Log out*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a área de relatório.<br> 2) Usuário clica no botão de "log out" e sai da página.<br>   
**Requisitos associados** | RF-011
**Resultado esperado** | Fazer log out na página relatório de glicemia.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT18 - Dsipositivo móvel*
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a aplicação por meio de um dispositivo móvel.<br>    
**Requisitos associados** | RNF-001
**Resultado esperado** | Visualização do site.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |* CT01 - Gerando um cadastro e fazendo login* |
|---|---|
|Requisito Associado | RF-015 & RNF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-primeiros-socorros/assets/128104293/bc31927a-43d8-4d35-9cf3-8d04cc7fbcca|

|*Caso de Teste**                                       | **CT02 - Recuperar a senha**|
|---|---|

|Requisito Associado |  RF-012 
|Link do video do teste realizado |


|*Caso de Teste*                                 |*CT03 - Acessando área de Sintomas - Parte 1* |
|---|---|
|Requisito Associado | RF-001 & RF-004 - Disponibilizar um informativo sobre sintomas de infarto,AVC, ansiedade e queda de glicemia para usuários cadastrados.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-primeiros-socorros/assets/128104293/8242f464-7ad9-4889-8e4f-5ff00c42f146| 

 |*Caso de Teste*                                 |*CT04 - Acessando área de Sintomas - Parte 2* |
|---|---|
|Requisito Associado | RF-001 - Disponibilizar um informativo sobre sintomas de infarto,AVC, ansiedade e queda de glicemia para usuários não cadastrados.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-primeiros-socorros/assets/128104293/afd9c3fd-cd2d-4aaa-896e-c80ef57ade5c| 

 |*Caso de Teste*                                 |*CT08 - Acessando área dos Primeiros Socorros* |
|---|---|
|Requisito Associado | RNF-002, RF-013, RF-004, RF-002, RF-005 & RF-008 - Disponibilizar um informativo sobre sintomas de infarto,AVC, ansiedade e queda de glicemia para usuários não cadastrados.|
|Link do vídeo do teste realizado: | | 

|*Caso de Teste*                                 |*CT05 & CT06- Acessando área do Mapa - Parte 1* |
|---|---|
|Requisito Associado | RF-003, RNF-003 & RF-004 -  Disponibilizar um mapa mostrando os hospitais mais próximos, para usuários cadastrados ou visitantes.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-primeiros-socorros/assets/128104293/c41e1f89-1f8b-453c-afae-6f9da0532c00| 

|*Caso de Teste*                                 |*CT07 - Navegando pela área do Mapa - Parte 2* |
|---|---|
|Requisito Associado | RF-003, RNF-003 & RF-004 -  Usuário poderá arrastar o ícone "Pegman" para uma devida área, tanto para usuários cadastrados ou visitantes.|
|Link do vídeo do teste realizado: | | 

|*Caso de Teste*                                 |*CT10 - Acessando área dos Prevenção de Acidentes Domésticos - Parte 1* |
|---|---|
|Requisito Associado | RF-006 & RF-004 - A aplicação deve fornecer informações detalhadas e relevantes sobre como prevenir acidentes domésticos para usuários cadastrados.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-primeiros-socorros/assets/128104293/319e0807-68cf-4656-a131-4db87fe23119|

|*Caso de Teste*                                 |*CT11 - Acessando área dos Prevenção de Acidentes Domésticos - Parte 2* |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve fornecer informações detalhadas e relevantes sobre como prevenir acidentes domésticos para usuários não cadastrados.|
|Link do vídeo do teste realizado: |https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t5-primeiros-socorros/assets/128104293/bc0b314f-a732-40a1-a2cb-dcec14767635|


## Avaliação dos Testes de Software

Levando em consideração todos os pontos possíveis, discorre-se que os testes em geral foram bem eficientes, com muitos pontos positivos apresentados e poucas observações a serem feitas. Além disso, foram feitos em um tempo razoável e de forma rápida. 
Os pontos positivos foram vários, com a aplicação funcionando de forma eficiente em todas funcionalidades. O registro de glicemia foi bem estruturado com uma tabela para adição, edição e exlusão dos registros, sendo que os mesmos serão armazenados no cadastro de usuário.
Além disso, as estruturas estáticas apresentam uma fácil funcionalidade em sua navegação.
Nos pontos negativos, podem-se observar que o design poderia ter sido mais inovador e um pouco menos rústico, o usuário pode se sentir um pouco perdido ao voltar no menu principal, pois não há um botão de retorno explícito nas telas (apesar dessa função realmente existir e ser nada menos do que a logo do app). 


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja se cadastrar na aplicação. Faça seu cadastro e posteriormente o login. |
| 2             | Você é uma pessoa que está viajando e deseja encontrar um hospital em sua localidade. Encontre a função Mapa e faça a busca pelo hospital. |
| 3             | Você é uma pessoa que sofre de crises de ansiedade. Localize na aplicação a função Emergência para ter acesso ao número de telefone do Centro de Valorização da Vida. |
| 4             | Você é uma pessoa que é portadora de diabetes e realiza medições de sua glicemia diariamente. Encontre na aplicação a função Controle Glicêmico e registre seu nível glicêmico. | 
| 5             | Você é uma pessoa que trabalha cuidando de idosos e quer ter acesso a um guia de primeiros socorros. Acesse a aplicação e encontre a função Guia de Primeiros Socorros.| 


|     Usuário   | Idade            | Uso de internet (1 a 5, sendo 1 raramente faz uso e 5 usa constantemente)|
|---------------|------------------|--------------------------------------------------------------------------|
| Marcelo     | Idade: 33 anos   |  5|
| Tião        | Idade: 50 anos   |  3|
| Roberto     | Idade: 51 anos   |  2|

## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja se cadastrar na aplicação. Faça seu cadastro e posteriormente o login.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Marcelo      | SIM             | 5                    | 55.15 segundos                  |
| Tião         | SIM             | 5                    | 60.20 segundos                  |
| Roberto      | SIM             | 5                    | 90 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 68.45 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 45 segundos |


    Comentários dos usuários: Marcelo: Gostou da interface e achou a aplicação didática. O layout é visível e com fácil localização dos campos a serem preenchidos. Gostaria de receber e-mail com a confirmação para finalizar o cadastro.
                              Tião: Achou a página dinâmica e de fácil entendimento.
                              Roberto: Gostei e achei a página tranquila.



Cenário 2: Você é uma pessoa que está viajando e deseja encontrar um hospital em sua localidade. Encontre a função Mapa e faça a busca pelo hospital.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Marcelo       | SIM             | 5                    | 28.55 segundos                          |
| Tião      | SIM             | 5                |  26.72 segundos                          |
| Roberto      | SIM             | 4                  | 30.02 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4,66                |  28.43 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 20 segundos |


    Comentários dos usuários: Marcelo: Gostaria que as opções em inglês estivessem em português.
                              Tião: Achou a busca simples e fácil. A função de filtrar o "lugar" ganhou um
destaque.
                              Roberto: Gostaria da tela maior na versão mobile.





Cenário 3: Você é uma pessoa que sofre de crises de ansiedade. Localize na aplicação a função Emergência para ter acesso ao número de telefone do Centro de Valorização da Vida.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Marcelo       | SIM             | 5                    | 6.85 segundos                          |
| Tião      | SIM             | 5                    | 7.01 segundos                          |
| Roberto      | SIM             | 5                    | 8.05 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 7.30 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 3.50 segundos |


    Comentários dos usuários: Marcelo: Foi fácil e intuitivo.
                              Tião: Simples e de fácil acesso.
                              Roberto: Bom e fácil de acessar.



Cenário 4: Você é uma pessoa que é portadora de diabetes e realiza medições de sua glicemia diariamente. Encontre na aplicação a função Controle Glicêmico e registre seu nível glicêmico.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Marcelo    | SIM             | 5                    | 71 segundos                          |
| Tião       | SIM             | 5                    | ? segundos                          |
| Roberto    | SIM             | 5                    | ? segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: Marcelo: Sugestão de colocar uma opção para inserir comentários sobre sintomas sentidos naquele dia da medição da glicemia. 



Cenário 5: Você é uma pessoa que trabalha cuidando de idosos e quer ter acesso a um guia de primeiros socorros. Acesse a aplicação e encontre a função Guia de Primeiros Socorros.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Marcelo      | SIM             | 5             | 5.87 segundos                  |
| Tião     | SIM             | 5                 | 6.05 segundos                  |
| Roberto      | SIM             | 5                    | 5 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 5.64 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 3.22 segundos |


    Comentários dos usuários: Marcelo: Foi tranquilo.
                              Tião: Achou simples e fácil.
                              Roberto: Acho fácil e prático.




## Avaliação dos Testes de Usabilidade

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes funcionais, no ambiente de produção no dia 02 de julho de 2023 às 14h00.

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



