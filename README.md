# Modelo Completo (front-end, back-end e deploy, +testes) de Formulário Responsivo, Multi-Step e sem custo.

Este projeto está em desenvolvimento na disciplina LabXP 2022.2/IME/USP.

Seguindo este tutorial, você será capaz de criar um formulário (para qualquer uso) que contemplará todas as etapas para funcionamento com custo zero.

# Tutorial
Siga o tutorial abaixo para criar seu formulário.

##  Material necessário

Editor de texto de sua preferência (recomendação VS Code);
Conta no Google.

##  Tecnologias utilizadas

**Tecnologias obrigatórias para este projeto:**
Tecnologias utilizadas para o front-end: HTML5, CSS, JS, Bootstrap.
Tecnologias utilizadas para coleta dos dados: GoogleScript.
Plataformas utilizada para armazenamento dos dados: Google Sheets.

**Tecnologias recomendadas para deploy do projeto:**
Plataforma para domínio gratuito:  Freenom.
Plataforma para hospedagem gratuita: Netlify.
Método para deploy automático: webhook do GitHub.

**Tecnologias opcionais para realização de testes do formulário:**
Tecnologia utilizada para testes automatizados: Selenium IDE.
Tecnologia utilizada para CI/CD: Github Action (Generic Workflow).

## Construindo o Front-end

O Front-end deste projeto utiliza Bootstrap para responsividade, HTML5 para sua estrutura, CSS para estilo, JavaScript para ações. 

Um modelo de formulário pode ser encontrado na pasta formulários. Cada tipo de input de dados está blocado de forma identificável, somente é preciso editar o textos das perguntas e suas respectivas ids e names. Para adicionar uma pergunta, basta somente procurar um bloco do mesmo tipo e replicá-lo. Para exclusão, basta excluir o bloco da pergunta. 

## Construindo o Back-end

**Setando a planilha e a conta Google:** 
1. Crie uma conta no Google;
2. Altere o idioma padrão da conta para inglês (necessário para o interpretador do GS Script funcionar corretamente);
3. Acesse o Google Sheets e crie os campos de sua planilha de forma vertical;
4. Selecione "Extensions"->"Apps Script";
5. Cole o script  da pasta "backend" deste projeto no campo "gs script";
6. Salve o script e execute a função "initialSetup";
7. Adicione um trigger ao script com as seguinte configurações ;
-   doPost
-  Head
-  From spreadsheet
-  On form submit

8. Faça o deploy  do script e copie o a url gerada;

**Fazendo as alterações necessárias no formulário:** 
O nome de cada campo da planilha deve corresponder a uma pergunta.
	9. Na página HTML do formulário adicione um atributo "name" para cada input de dados com o exato mesmo nome utilizado na coluna da planilha;
	10. Adicione a url gerada no script ao final do formulário;
	11. Pronto, a planilha estará recebendo as respostas.

## Validação 
A validação do formulário é do tipo "preenchimento obrigatório" e acontece de forma generalizada, através do JavaScript.

## Deploy

Para deploy do formulário:
1. Utilize Freenom para obter um domínio gratuito;
2. Hospede o projeto gratuitamente utilizando Netlify.

# Metodologia, Aprendizados e Dificuldades no Projeto (você, usuário, não precisa ler isso kk)

**O projeto e a primeira decisão**

A demanda: um grupo de pesquisadores do Instituto de Biologia (IB) da USP trouxeram a necessidade da criação de um formulário (survey) para coletar informações sobre profissionais de museus de ciência na América Latina. 

O problema estava no fato que o Google Forms (ferramenta gratuita) tem um design  padrão inflexível e sem recursos interessantes.

Outras plataformas que resolviam o problema (Typeform, SurveyMonkey...) teriam um custo médio de $40 mensais para atender os requisitos dos clientes. 

Ao recebermos o projeto, primeiro foi necessário decidir se iríamos implementar uma solução de plataforma para criar formulários ou então criar um formulário (da cliente). 

Observando a necessidade do cliente, notamos que ao optar por criar uma plataforma correríamos alto risco de não atender as necessidades da cliente, já que provavelmente o produto entregue ao final seria um protótipo de uma plataforma e não o formulário necessário para a pesquisa da cliente, devido a alta complexidade do projeto, que possui players milionários fazendo plataformas com o mesmo propósito (não seria viável para o escopo de tempo, dedicação e recurso).

Tomando que iríamos fazer um formulário específico, pensamos em como poderíamos contribuir para a comunidade de uma forma geral. 

A ideia foi estruturar o projeto para ser replicável para múltiplos usos, ao trilhar a jornada de conhecimento necessário para o projeto, encapsular isso para outras pessoas. Criando um modelo hard-coded, onde pessoas com um conhecimento intermediário de tecnologia web possa utilizar para fazer formulários a vontade e sem custo. 

**Onde chegamos até agora (onde foi possível chegar)**
Estrutura responsiva dos formulário funcionando.
Validação do formulário funcionando.
Coleta e armazenamento das respostas funcionando.  
Deploy (dev).
O formulário está funcional.
*mostrar o formulário

**No que estamos trabalhando** 
Ajustes de estilo, replicação do formulário. 
Deploy para o domínio do cliente.
Escrita do modelo de replicação. 
 As aulas acabaram, mas o projeto, não. Responsabilidade com o cliente. 

**Maiores dificuldades**
Falta de um coach com experiência de desenvolvimento. 
Falta de um membro com conhecimento avançado em tecnologia web. 

**Maiores aprendizados**
A utilização de métodos ágeis, mesmo em cenários não ideais (sem coach e sem especialista técnico) proporcionou e impulsionou a capacidade de adaptação em múltiplos aspectos, levando não só uma adaptação do time como também do próprio projeto (sem custos). 
A entrega contínua e definição de objetivos possibilitou um melhor entendimento sobre o projeto e caminhos de aprendizado a serem seguidos.

**Conclusão** (em uma frase)
Os princípios associados aos métodos ágeis não ajudam somente na gestão de um projeto, mas também no aprimoramento das capacidades humanas, podendo ser transportados para múltiplos âmbitos da vida. 
