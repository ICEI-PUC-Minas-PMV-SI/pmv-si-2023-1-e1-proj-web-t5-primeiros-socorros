# Especificações do Projeto


# Personas #
![Marcela](https://user-images.githubusercontent.com/105678089/227963189-98671a00-9992-4850-9c1a-a124252fdd2e.png)

![geralda](https://user-images.githubusercontent.com/105678089/229358111-76bcd120-4ead-4345-a320-7c9c871d15c1.png)

![tião](https://user-images.githubusercontent.com/105678089/227963241-4fe7a81d-854e-4f86-9a06-bc7d118848f7.png)


![paulo](https://user-images.githubusercontent.com/105678089/229290387-71c24b7d-e7e1-4c13-913d-d9fa773f9396.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|   EU COMO... `PERSONA`    | QUERO/PRECISO ... `FUNCIONALIDADE`                   | PARA ... `MOTIVO/VALOR`                                        |
|---------------------------|------------------------------------------------------|----------------------------------------------------------------|
|Marcela (usuário-cliente)  |Guia prático para casos de crise                      |Conseguir lidar com as crises sozinha                           |
|Marcela (usuário-cliente)  |Orientações factuais sobre a doença                   |Conscientizar acerca de seus perigos e sintomas                 | 
|Tião (usuário-cliente)     |Precisa de um cronograma                              |Organizar sua dieta alimentar e exercícios físicos              |
|Tião (usuário-cliente)     |Forma de registrar e gerenciar o histórico da glicemia|Evitar crises de hipoglicemia                                   |
|Geralda (usuário-cliente)  |Informativo sobre sintomas de AVC                     |Estar consciente de leves sinais que podem indicar um acidente  |
|Geralda (usuário-cliente)  |Guia prático sobre como agir em casos emergenciais    |Saber o que faze em caso de uma emergência                      |
|Paulo (usuário-cliente)    |Guia prático sobre sintomas de infarto                |Saber qual medida tomar em caso de infarto                      |
|Paulo (usuário-cliente)    |Localização do hospital mais próximo                  |Já ter mãos um local de emergências e seu status                |


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve disponibilizar um informativo sobre sintomas de infarto e AVC | ALTA | |
|RF-002| A aplicação deve disponibilizar guia prático sobre como agir em casos de emergências | ALTA | |
|RF-003| A aplicação deve disponibilizar o local de onde as informações foram retiradas | ALTA | |
|RF-004| A aplicação deve disponibilizar um mapa mostrando os hospitais mais próximos | ALTA | |
|RF-005| A aplicação deve permitir que o usuário cadastrado tenha acesso a funcionalidades específicas do site | ALTA | |
|RF-006| A aplicação deve permitir a busca por prestadores de serviços de forma rápida, eficaz e precisa | ALTA | |
|RF-007| A aplicação deve fornecer um guia de primeiros socorros | ALTA | |
|RF-008| A aplicação deve fornecer informações detalhadas e relevantes sobre como prevenir acidentes domésticos | ALTA | |
|RF-009| A aplicação deve disponibilizar números telefônicos destinados a casos de emergência | ALTA | |
|RF-010| A aplicação deve instruir o usuário a realizar curativos paliativos | ALTA | |
|RF-011|  A aplicação deve encaminhar chamadas a centros de aconselhamentos, a fim de evitar tentativas de suícidio | MÉDIA | | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve visualizar o site em dispositivos móveis| ALTA | | 
|RNF-002| A aplicação deve permitir que o usuário visitante acesse o guia de emergência sem ter que fazer cadastro | ALTA | |
|RNF-003| A aplicação deve encaminhar chamadas a centros de aconselhamentos, a fim de evitar tentativas de suícidio | MÉDIA | |
|RNF-004| A aplicação deve utilizar uma API que conecte o usuário ao google maps| ALTA | |
|RNF-005| A aplicação deve solicitar o cadastro para efetuar o registro do usuário visitante | ALTA | |
|RNF-006| A aplicação deve utilizar uma API que permita que o usuário cadastrado realize o login para que tenha acesso diaramente ao registro dos níveis de glicose | ALTA | |
|RNF-007| A aplicação deve produzir um relatório com as informações de glicemia inseridas pelo usuário cadastrado| ALTA | |
|RNF-008| A aplicação deve utilizar uma API que permita que o usuário cadastrado tenha acesso a funcionalidades específicas do site | ALTA | |
|RNF-009| A aplicação deve utilizar uma API que permita a busca de conteúdo atraves do campo de pesquisa | ALTA | |
|RNF-010| A aplicação deve utilzar uma API de acessibilidade que leia o conteúdo da página para pessoas cegas e que não saibam ler | ALTA | |
|RNF-011| A aplicação deve permitir que o usuário visitante realize seu cadastro com seu e-mail | ALTA | |
|RNF-012| A aplicação deve permitir que o usuário faça login utilizando seu e-mail e senha | ALTA | |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação não substitui atendimento médico.          |
|02| Não é possivel agendar consulta médica diretamente no site. |
|03| Não é possivel prescrever medicamentos. |
|04| Conteúdos do site não devem ser ilícitos e não podem promover violência, discurso de ódio, discriminação ou ter caráter sexual. |
|05| As fontes não podem ser cópias ilegais ou vindas de sites não credenciados. |
|06| O projeto deverá ser finalizado até 12/07. |
|07| Não será possível efetuar pagamentos pelo site. |
|08| Cada usuário poderá cadastrar no máximo 1 conta por endereço de e-mail. |
|09| O grupo que desenvolverá esta aplicação será composto por 5 pessoas. |
|10| O projeto não contempla o objetivo de substitui o serviço de pronto-socorro. |
|11| Não pode conter anúncio de empresas privadas. |
|12| Não foi utilizado nenhum módulo de Back-End. |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
