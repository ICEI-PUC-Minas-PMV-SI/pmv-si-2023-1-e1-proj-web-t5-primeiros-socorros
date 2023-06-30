# Programação de Funcionalidades

https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-1-e1-proj-web-t5-primeiros-socorros/src/

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve disponibilizar um informativo sobre sintomas de infarto,AVC, ansiedade e queimaduras para usuários cadastrados ou visitantes. | Letícia  | paginasintomas.html |
|RF-002| A aplicação deve disponibilizar guia prático sobre como agir em casos de emergências, para usuários cadastrados ou visitantes. | Pedro | primeiros-socorros.html |
|RF-003| A aplicação deve disponibilizar um mapa mostrando os hospitais mais próximos, para usuários cadastrados ou visitantes. | Lorena | index.html |
|RF-004| A aplicação deve permitir que o usuário cadastrado tenha acesso a funcionalidades específicas do site. | | cadastro-noticia.html |
|RF-005| A aplicação deve permitir uma lupa de busca abaixo do mapa, possibilitando a procura por hospitais e clínicas próximas. | Lorena | index.html |
|RF-006| A aplicação deve fornecer um guia de primeiros socorros para usuários visitantes e cadastrados. | Pedro | primeiros-socorros.html |
|RF-007| A aplicação deve fornecer informações detalhadas e relevantes sobre como prevenir acidentes domésticos para usuários visitantes e cadastrados.	| Felipe | prevencaodeacidentes.html |	
|RF-008| A aplicação deve disponibilizar números telefônicos destinados a casos de emergência para usuários visitantes e cadastrados. | Letícia | telefonesuteis.html |
|RF-009| A aplicação deve instruir o usuário cadastrado ou visitante a realizar curativos paliativos.	|Pedro| cadastro-noticia.html |
|RF-010| A aplicação deve encaminhar chamadas a centros de aconselhamentos, a fim de evitar tentativas de suícidio para usuários visitantes e cadastrados. || cadastro-noticia.html |
|RF-011| A aplicação deve permitir que o usuário cadastrado faça login utilizando seu e-mail e senha para ter acesso ao "Relatório de Glicemia.	| Lucas | paginicialglicemia.html |
|RF-012| A aplicação deve produzir um relatório com as informações de glicemia inseridas somente pelo usuário cadastrado.	| Lucas | relatorioglicemia.html |	
|RF-013| A aplicação deverá disponibilizar um botão de logout na página de "Registro de Glicemia" caso o usuário cadastrado deseje sair da página. | Lucas | paginicialglicemia.html |
|RF-014| A aplicação deverá disponibilizar a alteração da senha por meio da verificação do CPF do usuário cadastrado.	|Lorena| esqueceusuasenha.html |	
|RF-015| A aplicação deve permitir que o usuário visitante ou cadastrado acesse o guia de emergência, sem ter que fazer cadastro.	|| cadastro-noticia.html |	
|RF-016| A aplicação deve utilizar um registro que permita que o usuário cadastrado realize o login para que tenha acesso diaramente ao registro dos níveis de glicose	| Lucas |  paginicialglicemia.html |

## Descrição das estruturas:

## Login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador de usuário                  | 002                                            |
| Nome           | Texto             | User do usuário                           | @lorenasoarys                                  |
| Conteúdo       | E-mail            | E-mail do usuário                         |      exemplo78@gmail.com                       |
| Id do usuário  | Numero (Inteiro)  | senha do usuário                          |   ******  (secreto)                            |

## Cadastro
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador de usuário                  | 002                                            |
| Nome           | Texto             | Nome do usuário                           | Lorena Soares                                  |
| Conteúdo       | E-mail            | E-mail do usuário                         |      exemplo78@gmail.com                       |
| Id do usuário  | Numero (Inteiro)  | Cadastro de senha                         |   ******  (secreto)                            |





