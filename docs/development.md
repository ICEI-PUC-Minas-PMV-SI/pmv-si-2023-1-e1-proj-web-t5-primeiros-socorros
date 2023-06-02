# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve disponibilizar um informativo sobre sintomas de infarto,AVC, ansiedade e queimaduras para usuários cadastrados ou visitantes. | Letícia  | index.html |
|RF-002| A aplicação deve disponibilizar guia prático sobre como agir em casos de emergências, para usuários cadastrados ou visitantes. |  | cadastro-noticia.html |
|RF-003| A aplicação deve disponibilizar um mapa mostrando os hospitais mais próximos, para usuários cadastrados ou visitantes. | | cadastro-noticia.html |
|RF-004| A aplicação deve permitir que o usuário cadastrado tenha acesso a funcionalidades específicas do site. | | cadastro-noticia.html |
|RF-005| A aplicação deve permitir uma lupa de busca abaixo do mapa, possibilitando a procura por hospitais e clínicas próximas. | | cadastro-noticia.html |
|RF-006| A aplicação deve fornecer um guia de primeiros socorros para usuários visitantes e cadastrados. | | cadastro-noticia.html |
|RF-007| A aplicação deve fornecer informações detalhadas e relevantes sobre como prevenir acidentes domésticos para usuários visitantes e cadastrados.	| | cadastro-noticia.html |	
|RF-008| A aplicação deve disponibilizar números telefônicos destinados a casos de emergência para usuários visitantes e cadastrados. | Letícia | cadastro-noticia.html |
|RF-009| A aplicação deve instruir o usuário cadastrado ou visitante a realizar curativos paliativos.	|| cadastro-noticia.html |
|RF-010| A aplicação deve encaminhar chamadas a centros de aconselhamentos, a fim de evitar tentativas de suícidio para usuários visitantes e cadastrados. || cadastro-noticia.html |
|RF-011| A aplicação deve permitir que o usuário cadastrado faça login utilizando seu e-mail e senha para ter acesso ao "Relatório de Glicemia.	| Lucas | cadastro-noticia.html |
|RF-012| A aplicação deve produzir um relatório com as informações de glicemia inseridas somente pelo usuário cadastrado.	| Lucas | cadastro-noticia.html |	
|RF-013| A aplicação deverá disponibilizar um botão de logout na página de "Registro de Glicemia" caso o usuário cadastrado deseje sair da página. | Lucas | cadastro-noticia.html |
|RF-014| A aplicação deverá disponibilizar a recuperação da senha por meio de envio com instruções para o e-mail do usuário cadastrado.	|| cadastro-noticia.html |	
|RF-015| A aplicação deve permitir que o usuário visitante ou cadastrado acesse o guia de emergência, sem ter que fazer cadastro.	|| cadastro-noticia.html |	
|RF-016| A aplicação deve utilizar um registro que permita que o usuário cadastrado realize o login para que tenha acesso diaramente ao registro dos níveis de glicose	| Lucas | cadastro-noticia.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

