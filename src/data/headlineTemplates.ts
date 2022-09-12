const HeadlineTemplates = [
	{
		id: 'comodesejodeumamaneirarapidaefacilmesmosemobjecao',
		formula:
			'Como <div id="main" class="1">{Desejo}</div> de uma maneira rápida e fácil mesmo sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'Como {Desejo} de uma maneira rápida e fácil mesmo sem {Objeção}',
		variables: [1, 4],
		premium: false,
	},
	{
		id: 'tudooquevoceprecisasaberparadesejousandoapenasproduto',
		formula:
			'Tudo o que você precisa saber para <div id="main" class="1">{Desejo}</div> usando apenas <div id="main" class="7">{Produto}</div>',
		formulaRaw:
			'Tudo o que você precisa saber para {Desejo} usando apenas {Produto}',
		variables: [1, 7],
		premium: false,
	},
	{
		id: 'aquiestaamaneiranumeroumdedesejosemobjecao',
		formula:
			'Aqui está a maneira número um de <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw: 'Aqui está a maneira número um de {Desejo} sem {Objeção}',
		variables: [1, 4],
		premium: false,
	},
	{
		id: 'autoridaderevelaossegredosparadesejomesmosemobjecao',
		formula:
			'<div id="main" class="5">{Autoridade}</div> revela os segredos para <div id="main" class="1">{Desejo}</div> mesmo sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'{Autoridade} revela os segredos para {Desejo} mesmo sem {Objeção}',
		variables: [5, 1, 4],
		premium: false,
	},
	{
		id: 'comomumautoridadedescobriuumasolucaosemobjecao',
		formula:
			'Como um(a) <div id="main" class="5">{Autoridade}</div> descobriu uma <div id="main" class="3">{Solução}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw: 'Como um(a) {Autoridade} descobriu uma {Solução} sem {Objeção}',
		variables: [5, 3, 4],
		premium: false,
	},
	{
		id: 'autoridadedescobrecomodesejosolucao',
		formula:
			'<div id="main" class="5">{Autoridade}</div> descobre como <div id="main" class="1">{Desejo}</div> <div id="main" class="3">{Solução}</div>',
		formulaRaw: '{Autoridade} descobre como {Desejo} {Solução}',
		variables: [5, 1, 3],
		premium: false,
	},
	{
		id: 'manualdoautoridadetudooquevoceprecisasaberantesdedesejo',
		formula:
			'Manual do <div id="main" class="5">{Autoridade}</div>: Tudo o que você precisa saber antes de <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'Manual do {Autoridade}: Tudo o que você precisa saber antes de {Desejo}',
		variables: [5, 1],
		premium: false,
	},
	{
		id: 'oqueumaautoridadefazquandotemproblema',
		formula:
			'O que uma <div id="main" class="5">{Autoridade}</div>faz quando tem<div id = "main" class="6">{ Problema }< /div>',
		formulaRaw: 'O que uma {Autoridade} faz quando tem {Problema}',
		variables: [5, 6],
		premium: false,
	},

	{
		id: 'quandovoceperguntaraumaautoridadesobreprodutoeissoqueelevairesponder',
		formula:
			'Quando você perguntar a um(a) <div id="main" class="5">{Autoridade}</div> sobre  <div id="main" class="7">{Produto}</div> é isso que ele(a) vai responder!',
		formulaRaw:
			'Quando você perguntar a um(a) {Autoridade} sobre {Produto} é isso que ele(a) vai responder!',
		variables: [5, 7],
		premium: false,
	},
	{
		id: 'especialistaemautoridadedescobreosegredoparadesejosemobjecao',
		formula:
			'Especialista em <div id="main" class="5">{Autoridade}</div> descobre o segredo para <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'Especialista em {Autoridade} descobre o segredo para {Desejo} sem {Objeção}',
		variables: [5, 1, 4],
		premium: false,
	},
	{
		id: 'esseeotruquequeautoridadesestaousandoparadesejo',
		formula:
			'Esse é o truque que <div id="main" class="5">{Autoridade}</div>s estão usando para <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Esse é o truque que {Autoridade}s estão usando para {Desejo}',
		variables: [5, 1],
		premium: false,
	},
	{
		id: 'especialistaemautoridadedescobreosegredodedesejoemperiodo',
		formula:
			'Especialista em <div id="main" class="5">{Autoridade}</div> descobre o segredo de <div id="main" class="1">{Desejo}</div> em <div id="main" class="2">{Período}</div>',
		formulaRaw:
			'Especialista em {Autoridade} descobre o segredo de {Desejo} em {Período}',
		variables: [5, 1, 2],
		premium: true,
	},
	{
		id: 'alicaomaisimportantequeaprendicomautoridade',
		formula:
			'A lição mais importante que aprendi com <div id="main" class="5">{Autoridade}</div>',
		formulaRaw: 'A lição mais importante que aprendi com {Autoridade}',
		variables: [5],
		premium: true,
	},
	{
		id: 'oqueumautoridademeensinousobreproblema',
		formula:
			'O que um(a) <div id="main" class="5">{Autoridade}}</div> me ensinou sobre <div id="main" class="6">{Problema}}</div>',
		formulaRaw: 'O que um(a) {Autoridade} me ensinou sobre {Problema}',
		variables: [5, 6],
		premium: true,
	},
	{
		id: 'paraaudienciaquequeremdesejo',
		formula:
			'Para <div id="main" class="0">{Audiência}</div> que querem <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Para {Audiência} que querem {Desejo}',
		variables: [0, 1],
		premium: true,
	},
	{
		id: 'desejoemperiodosemobjecao',
		formula:
			' <div id="main" class="1">{Desejo}}</div> em  <div id="main" class="2">{Periodo}}</div> sem  <div id="main" class="4">{Objeção}}</div>',
		formulaRaw: '{Desejo} em {Periodo} sem {Objeção}',
		variables: [1, 2, 4],
		premium: true,
	},
	{
		id: 'numeropassosparaeliminaroproblemaemmenosdeperiodo',
		formula:
			'<div id="main" class="8">{Número}</div> passos para eliminar a(o) <div id="main" class="6">{Problema}</div>  em menos de <div id="main" class="2">{Período}</div>',
		formulaRaw:
			'{Número} passos para eliminar a(o) {Problema} em menos de {Período}',
		variables: [8, 6, 2],
		premium: true,
	},
	{
		id: 'osolucaoquepodeseramelhorsolucaoparaproblema',
		formula:
			'O(A) <div id="main" class="3">{Solução}</div> que pode ser a melhor solução para <div id="main" class="6">{Problema}</div>',
		formulaRaw: 'O(A) {Solução} que pode ser a melhor solução para {Problema}',
		variables: [3, 6],
		premium: true,
	},
	{
		id: 'desejoemnumeropassossimples',
		formula:
			'<div id="main" class="1">{Desejo}</div> em <div id="main" class="8">{Número}</div> passos simples',
		formulaRaw: '{Desejo} em {Número} passos simples',
		variables: [1, 8],
		premium: true,
	},
	{
		id: 'agoravocepodeterdesejodeumamaneirarapidaefacil',
		formula:
			'Agora você pode ter <div id="main" class="1">{Desejo}</div> de uma maneira rápida e fácil',
		formulaRaw: 'Agora você pode ter {Desejo} de uma maneira rápida e fácil',
		variables: [1],
		premium: true,
	},
	{
		id: 'superfacilnumeromaneirassimplesqueautoridadeusamparadesejo',
		formula:
			'Super fácil: <div id="main" class="8">{Número}</div> maneiras simples que <div id="main" class="5">{Autoridade}</div> usam para <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'Super fácil: {Número} maneiras simples que {Autoridade} usam para {Desejo}',
		variables: [8, 5, 1],
		premium: true,
	},
	{
		id: 'valeapenagastardinheirocomsolucaomesmosemobjecao',
		formula:
			'Vale a pena gastar dinheiro com <div id="main" class="3">{Solução}</div> mesmo sem <div id="main" class="4">{Objeção}</div>?',
		formulaRaw:
			'Vale a pena gastar dinheiro com {Solução} mesmo sem {Objeção}?',
		variables: [3, 4],
		premium: true,
	},
	{
		id: 'guiadefinitivoparadesejo',
		formula: 'Guia definitivo para <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Guia definitivo para {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'oguiadefinitivoparadesejosemobjecao',
		formula:
			'O Guia Definitivo para <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw: 'O Guia Definitivo para {Desejo} sem {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'comoproblemaestaacabandocomdesejo',
		formula:
			'Como <div id="main" class="6">{Problema}</div> está acabando com <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Como {Problema} está acabando com {Desejo}',
		variables: [6, 1],
		premium: true,
	},
	{
		id: 'porqueeupareidesolucaoeporquevocetambemdeveriaparar',
		formula:
			'Porque eu parei de <div id="main" class="6">{Solução}</div> - E porque você também deveria parar',
		formulaRaw:
			'Porque eu parei de {Solução} - E porque você também deveria parar',
		variables: [3],
		premium: true,
	},
	{
		id: 'porquesolucaoeapiorcoisaquevocepoderiafazerparaeoquefazeremvezdisso',
		formula:
			'Por que <div id="main" class="3">{Solução}</div> é a pior coisa que você poderia fazer para<div id="main" class="1"> {Desejo}</div> - E o que fazer em vez disso',
		formulaRaw:
			'Por que {Solução} é a pior coisa que você poderia fazer para {Desejo} - E o que fazer em vez disso',
		variables: [3, 1],
		premium: true,
	},
	{
		id: 'vocedesejadesejosemobjecaoentaosigaestesnumeropassossimples',
		formula:
			'Você deseja <div id="main" class="1">{desejo}</div> sem <div id="main" class="4">{Objeção}</div>? Então siga estes <div id="main" class="8">{Número}</div> passos simples',
		formulaRaw:
			'Você deseja {desejo} sem {Objeção}? Então siga estes {Número} passos simples',
		variables: [1, 4, 8],
		premium: true,
	},
	{
		id: 'porquetodomundoquersabersobresolucao',
		formula:
			'Por que todo mundo que saber sobre <div id="main" class="3">{Solução}</div>',
		formulaRaw: 'Por que todo mundo que saber sobre {Solução}',
		variables: [3],
		premium: true,
	},
	{
		id: 'querendosabercomodesejoleiaisto',
		formula:
			'Querendo saber como <div id="main" class="1">{desejo}</div>? Leia isto!',
		formulaRaw: 'Querendo saber como {desejo}? Leia isto!',
		variables: [1],
		premium: true,
	},
	{
		id: 'voceprecisagerarmaisdesejoparaoseuprodutoentaovoceprecisaleristo',
		formula:
			'Você precisa gerar mais <div id="main" class="1">{desejo}</div> para o seu <div id="main" class="7">{produto}</div>? Então você precisa ler isto!',
		formulaRaw:
			'Você precisar gerar mais {desejo} para o seu {produto}? Então você precisa ler isto!',
		variables: [1, 7],
		premium: true,
	},
	{
		id: 'numerotecnicasquevocepodeutilizarparadesejosemobjecao',
		formula:
			'<div id="main" class="8">{Número}</div> técnicas que você pode utilizar para <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'{Número} técnicas que você pode utilizar para {Desejo} sem {Objeção}',
		variables: [8, 1, 4],
		premium: true,
	},
	{
		id: 'asnumeromaneiramaisrapidasdedesejo',
		formula:
			'As <div id="main" class="8">{Número}</div> maneiras mais rápidas de <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'As {Número} maneiras mais rápidas de {Desejo}',
		variables: [1, 8],
		premium: true,
	},
	{
		id: 'numerorazoesparavocesolucao',
		formula:
			'<div id="main" class="8">{Número}</div> razões para você <div id="main" class="3">{Solução}</div>',
		formulaRaw: '{Número} razões para você {Solução}',
		variables: [8, 3],
		premium: true,
	},
	{
		id: 'numeromaneirasdedesejoemapenasperiodo',
		formula:
			'<div id="main" class="8">{Número}</div> maneiras de <div id="main" class="1">{Desejo}</div> em apenas <div id="main" class="2">{Periodo}</div>',
		formulaRaw: '{Número} maneiras de {Desejo} em apenas {Periodo}',
		variables: [8, 1, 2],
		premium: true,
	},
	{
		id: 'numeromaneirasdedesejoemapenasperiododiarios',
		formula:
			'<div id="main" class="8">{Número}</div> maneiras de <div id="main" class="1">{Desejo}</div> em apenas <div id="main" class="2">{Periodo}</div> diários',
		formulaRaw: '{Número} maneiras de {Desejo} em apenas {Periodo} diários',
		variables: [8, 1, 2],
		premium: true,
	},
	{
		id: 'numerotiposdeaudienciaqualoseutipo',
		formula:
			'<div id="main" class="8">{Nùmero}</div> tipos de <div id="main" class="0">{Audiência}</div>. Qual o seu tipo?',
		formulaRaw: '{Nùmero} tipos de {Audiência}. Qual o seu tipo?',
		variables: [8, 0],
		premium: true,
	},
	{
		id: 'numerodicasdesolucaoquevocepodeterperdidoaproveiteagora',
		formula:
			'<div id="main" class="8">{Número}</div> dicas de <div id="main" class="3">{Solução}</div> que você pode ter perdido - Aproveite agora!',
		formulaRaw:
			'{Número} dicas de {Solução} que você pode ter perdido - Aproveite agora!',
		variables: [8, 3],
		premium: true,
	},
	{
		id: 'numerosobreproblemaquevocequisfazer',
		formula:
			'<div id="main" class="8">{Numero}</div> sobre <div id="main" class="6">{Problema}</div> que você sempre quis fazer',
		formulaRaw: '{Numero} sobre {Problema} que você sempre quis fazer',
		variables: [8, 6],
		premium: true,
	},
	{
		id: 'tenhadesejosemobjecaohoje',
		formula:
			'Tenha <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{objeção}</div> hoje!',
		formulaRaw: 'Tenha {Desejo} sem {objeção} hoje!',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'nuncamaisdeixededesejotenhaproduto',
		formula:
			'Nunca mais deixe de <div id="main" class="1">{Desejo}</div>, tenha <div id="main" class="7">{Produto}</div>',
		formulaRaw: 'Nunca mais deixe de {Desejo}, tenha {Produto}',
		variables: [1, 7],
		premium: true,
	},
	{
		id: 'paraaudienciacansadosdesofrercomproblema',
		formula:
			'Para <div id="main" class="0">{Audiência}</div> cansados de sofrer com <div id="main" class="7">{Problema}</div>',
		formulaRaw: 'Para {Audiência} cansados de sofrer com {Problema} ',
		variables: [0, 7],
		premium: true,
	},
	{
		id: 'aoportunidadeunicaparaqueaudienciatenhaacessoadesejo',
		formula:
			'A oportunidade única para que <div id="main" class="0">{Audiência}</div> tenha acesso a <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'A oportunidade única para que {Audiência} tenha acesso a {Desejo}',
		variables: [0, 1],
		premium: true,
	},
	{
		id: 'aformamaissimplesdeatingir',
		formula:
			'A forma mais simples de atingir <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'A forma mais simples de atingir {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'amelhormaneiradeaudienciaparardesofrercomproblema',
		formula:
			'A melhor maneira de <div id="main" class="0">{Audiência}</div> parar de sofrer com <div id="main" class="7">{Problema}</div>',
		formulaRaw: 'A melhor maneira de {Audiência} para de sofrer com {Problema}',
		variables: [0, 7],
		premium: true,
	},
	{
		id: 'osegredoqueautoridadenaocontamsobrecomoatingirdesejo',
		formula:
			'O segredo que <div id="main" class="5">{Autoridade}</div> não contam sobre como atingir <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'O segredo que {Autoridade} não contam sobre como atingir {Desejo} ',
		variables: [5, 1],
		premium: true,
	},
	{
		id: 'desejousandoproduto',
		formula:
			'<div id="main" class="1">{Desejo}</div> usando <div id="main" class="7">{Produto}</div>',
		formulaRaw: '{Desejo} usando {Produto}',
		variables: [1, 7],
		premium: true,
	},
	{
		id:
			'diferentedevoceoutrosaudiencianaosofremcomproblemacomotendoacessoasolucao',
		formula:
			' Diferente de você, outros <div id="main" class="0">{audiência}</div> não sofrem com <div id="main" class="6">{problema}</div>! Como? Tendo acesso a <div id="main" class="3">{Solução}</div>',
		formulaRaw:
			' Diferente de você, outros {audiência} não sofrem com {problema}! Como? Tendo acesso a {Solução}',
		variables: [0, 6, 3],
		premium: true,
	},
	{
		id: 'aformamaisrapidadeatingirdesejo',
		formula:
			'A forma mais rápida de atingir <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'A forma mais rápida de atingir {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'aformamaisbaratadeatingirdesejo',
		formula:
			'A forma mais barata de atingir <div id="main" class="1">{Desejo}}</div>',
		formulaRaw: 'A forma mais barata de atingir {Desejo} ',
		variables: [1],
		premium: true,
	},
	{
		id: 'comoumaudienciapodedesejo',
		formula:
			'Como um  <div id="main" class="0">{Audiência}</div> pode  <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Como um {Audiência} pode {Desejo}',
		variables: [0, 1],
		premium: true,
	},
	{
		id: 'oseuproblemavaimatarsuaempresa',
		formula:
			'O seu <div id="main" class="6">{Problema}</div> vai matar sua empresa',
		formulaRaw: 'O seu {Problema} vai matar sua empresa',
		variables: [6],
		premium: true,
	},
	{
		id: 'paredesofrercomproblemausesolucaohoje',
		formula:
			'Pare de sofrer com <div id="main" class="6">{Problema}</div>, use <div id="main" class="3"{Solução}</div> hoje!',
		formulaRaw: 'Pare de sofrer com {Problema}, use {Solução} hoje!',
		variables: [6, 3],
		premium: true,
	},
	{
		id: 'cansadodesofrercomproblemaaudienciausaprodutoparaatingirdesejo',
		formula:
			' Cansado de sofrer com <div id="main" class="6">{Problema}</div>? <div id="main" class="0">{Audiência}</div> usa <div id="main" class="7">{Produto}</div> para atingir <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'Cansado de sofrer com {Problema}? {Audiência} usa {Produto} para atingir {Desejo}',
		variables: [6, 0, 7, 1],
		premium: true,
	},
	{
		id: 'agoravocevaiterdesejousandoproduto',
		formula:
			'> Agora você vai ter <div id="main" class="1">{Desejo}</div> usando <div id="main" class="7">{Produto}</div>',
		formulaRaw: '> Agora você vai ter {Desejo} usando {Produto}',
		variables: [1, 7],
		premium: true,
	},
	{
		id: 'sofrerporproblemanaofazmaissentido',
		formula:
			'Sofrer por <div id="main" class="6">{Problema}</div> não faz mais sentido!',
		formulaRaw: 'Sofrer por {Problema} não faz mais sentido!',
		variables: [6],
		premium: true,
	},
	{
		id:
			'sevoceeumaudienciaesofrecomproblemaconhecaprodutohojeeatinjadesejohojeainda',
		formula:
			'Se você é um(a) <div id="main" class="0">{Audiência}</div> e sofre com <div id="main" class="6">{Problema}</div>, conheça <div id="main" class="7">{Produto}</div> hoje e atinja <div id="main" class="1">{Desejo}</div> hoje ainda',
		formulaRaw:
			'Se você é um(a) {Audiência} e sofre com {Problema}, conheça {Produto} hoje e atinja {Desejo} hoje ainda',
		variables: [0, 6, 7, 1],
		premium: true,
	},
	{
		id: 'desejosemsepreocuparcomobjecao',
		formula:
			'<div id="main" class="1">{Desejo}</div> sem se preocupar com <div id="main" class="4">{Objeção}</div>',
		formulaRaw: '{Desejo} sem se preocupar com {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'aoportunidadeparadesejosemobjecao',
		formula:
			'A oportunidade para <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{objeção}</div>',
		formulaRaw: 'A oportunidade para {Desejo} sem {objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'comodesejodeumamaneiraquevocenuncaviu',
		formula:
			'Como <div id="main" class="1">{Desejo}</div> de uma maneira que você nunca viu',
		formulaRaw: 'Como {Desejo} de uma maneira que você nunca viu',
		variables: [1],
		premium: true,
	},
	{
		id: 'aformamaisinteligentededesejo',
		formula:
			'A forma mais inteligente de <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'A forma mais inteligente de {Desejo} ',
		variables: [1],
		premium: true,
	},
	{
		id: 'trespassossimplesparadesejo',
		formula: '7 passos simples para <div id="main" class="1">{Desejo}</div>',
		formulaRaw: '7 passos simples para {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'quemsofrecomproblemavaisairdomercadosenaobuscarporsolucoes',
		formula:
			'Quem sofre com <div id="main" class="6">{Problema}</div>, vai sair do mercado se não buscar por soluções',
		formulaRaw:
			'Quem sofre com {Problema}, vai sair do mercado se não buscar por soluções',
		variables: [6],
		premium: true,
	},
	{
		id: 'comodesejoemperiodo',
		formula:
			'Como <div id="main" class="1">{Desejo}</div> em <div id="main" class="2">{período}</div>?',
		formulaRaw: 'Como {Desejo} em {período}?',
		variables: [1, 2],
		premium: true,
	},
	{
		id: 'ossegredosparaterdesejorapido',
		formula:
			'Os segredos para ter <div id="main" class="1">{Desejo}</div> rápido',
		formulaRaw: 'Os segredos para ter {Desejo} rápido',
		variables: [1],
		premium: true,
	},
	{
		id: 'autoridadequerteensinaranuncamaissofrercomproblema',
		formula:
			'<div id="main" class="5">{Autoridade}</div> quer te ensinar a nunca mais sofrer com <div id="main" class="6">{Problema}</div>',
		formulaRaw:
			'{Autoridade} quer te ensinar a nunca mais sofrer com {Problema}',
		variables: [5, 6],
		premium: true,
	},
	{
		id: 'autoridadequerteensinaracomoatingirdesejomaisrapido',
		formula:
			' <div id="main" class="5">{Autoridade}</div> quer te ensinar a como atingir <div id="main" class="1">{Desejo}</div> mais rápido',
		formulaRaw:
			' {Autoridade} quer te ensinar a como atingir {Desejo} mais rápido',
		variables: [5, 1],
		premium: true,
	},
	{
		id: 'autoridadecontacomoseprepararparanaosofrercomproblema',
		formula:
			'<div id="main" class="5">{Autoridade}</div> conta: como se preparar para não sofrer com <div id="main" class="6">{Problema}</div>',
		formulaRaw:
			'{Autoridade} conta: como se preparar para não sofrer com {Problema}',
		variables: [5, 6],
		premium: true,
	},
	{
		id:
			'audienciacontaqualoprincipalproblemaquetodosaudienciapassampelomenosumaveznavida',
		formula:
			'<div id="main" class="5">{Autoridade}</div> conta: Qual o principal problema que todos <div id="main" class="0">{Audiência}</div> passam pelo menos uma vez na vida',
		formulaRaw:
			'{Autoridade} conta: qual o principal problema que todos {Audiência} passam pelo menos uma vez na vida',
		variables: [5, 0],
		premium: true,
	},
	{
		id: 'numeromaneirasparavocepoderobtermaisdesejocomprovado',
		formula:
			'<div id="main" class="8">{Número}</div> maneiras para você poder obter mais <div id="main" class="1">{Desejo}</div> - Comprovado!',
		formulaRaw:
			'{Número} maneiras para você poder obter mais {Desejo} - Comprovado!',
		variables: [8, 1],
		premium: true,
	},
	{
		id: 'numerodicasincriveisparavocedesejosemobjecao',
		formula:
			'<div id="main" class="8">{Número}</div> dicas incríveis para você <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw: '{Número} dicas incríveis para você {Desejo} sem {Objeção}',
		variables: [8, 1, 4],
		premium: true,
	},
	{
		id: 'descubrahojemesmocomodesejoemapenasperiodo',
		formula:
			'Descubra hoje mesmo como <div id="main" class="1">{Desejo}</div> em apenas <div id="main" class="2">{Periodo}</div>',
		formulaRaw: 'Descubra hoje mesmo como {Desejo} em apenas {Periodo}',
		variables: [1, 2],
		premium: true,
	},
	{
		id: 'descubracomoeudesejoemperiodo',
		formula:
			'Descubra como eu  <div id="main" class="1">{Desejo}</div> em  <div id="main" class="2">{Periodo}</div>',
		formulaRaw: 'Descubra como eu {Desejo} em {Periodo}',
		variables: [1, 2],
		premium: true,
	},
	{
		id: 'comoessanovadescobertapodeteajudaradesejo',
		formula:
			'Como essa nova descoberta pode te ajudar a <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Como essa nova descoberta pode te ajudar a {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'descubracomosolucaomesmosemobjecao',
		formula:
			'Descubra como <div id="main" class="3">{Solução}</div> mesmo sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw: 'Descubra como {Solução} mesmo sem {Objeção}',
		variables: [3, 4],
		premium: true,
	},
	{
		id: 'saibaagoraminhasnumerosestrategiasparadesejo',
		formula:
			'Saiba agora minhas <div id="main" class="8">{Números}</div> estratégias para <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Saiba agora minhas {Números} estratégias para {Desejo}',
		variables: [8, 1],
		premium: true,
	},
	{
		id: 'asuabuscapordesejo',
		formula: `A sua busca por <div id="main" class="1">Desejo</div> termina aqui`,
		formulaRaw: 'A sua busca por {Desejo} termina aqui',
		variables: [1],
		premium: true,
	},
	{
		id: 'cansadodeproblemacomecesolucao',
		formula:
			'Cansado de <div id="main" class="6">{Problema}</div>? Comece a <div id="main" class="3">{Solução}</div> hoje mesmo!',
		formulaRaw: 'Cansado de {Problema}? Comece a {Solução} hoje mesmo!',
		variables: [6, 3],
		premium: true,
	},
	{
		id: 'numeroideiasroubardeinfluencers',
		formula:
			'<div id="main" class="8">{Número}</div> ideias que você pode roubar de <div id="main" class="5">{Autoridades}</div>',
		formulaRaw: '{Número} ideias que você pode roubar de {Autoridades}',
		variables: [8, 5],
		premium: true,
	},
	{
		id: 'querdesejocomecesolucaoagora',
		formula:
			'Quer <div id="main" class="1">{Desejo}</div>? Comece a <div id="main" class="3">{Solução}</div> agora!',
		formulaRaw: 'Quer {Desejo}? Comece a {Solução} agora!',
		variables: [1, 3],
		premium: true,
	},
	{
		id: 'amelhorformaautoridadedesejo',
		formula:
			'<div id="main" class="8">{Número}</div> passos para eliminar a(o) <div id="main" class="6">{Problema}</div> em menos de <div id="main" class="2">{Período}</div>',
		formulaRaw:
			'{Número} passos para eliminar a(o) {Problema} em menos de {Período}',
		variables: [8, 6, 2],
		premium: true,
	},
	{
		id: 'omaioremelhorsegradodesejo',
		formula:
			'O maior (e melhor) segredo para <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'O maior (e melhor) segredo para {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'naocometaessesnumeroerrosproblema',
		formula:
			'Não cometa esses <div id="main" class="8">{Número}</div> erros de <div id="main" class="6">{Problema}</div>',
		formulaRaw: 'Não cometa esses {Número} erros de {Problema}',
		variables: [8, 6],
		premium: true,
	},
	{
		id: 'amaneira100garantidadesejomesmosemobjecao',
		formula:
			'A maneira 100% garantida de <div id="main" class="1">{Desejo}</div>, mesmo sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw: 'A maneira 100% garantida de {Desejo}, mesmo sem {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'finalmenteumamaneiradesejosemobjecao',
		formula:
			'Finalmente uma maneira 100% comprovada de <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'Finalmente uma maneira 100% comprovada de {Desejo} sem {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'comocriarumdesejonumeroemesmosemobjecao',
		formula:
			'Como criar um <div id="main" class="1">{Desejo}</div> em menos de <div id="main" class="8">{Número}</div> e mesmo sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'Como criar um {Desejo} em menos de {Número} e mesmo sem {Objeção}',
		variables: [1, 8, 4],
		premium: true,
	},
	{
		id: 'comoemperiodoeuconseguidesejocomsolucao',
		formula:
			'Como em <div id="main" class="2">{Período}</div> eu consegui <div id="main" class="1">{Desejo}</div> com <div id="main" class="3">{Solução}</div>',
		formulaRaw: 'Como em {Período} eu consegui {Desejo} com {Solução}',
		variables: [2, 1, 3],
		premium: true,
	},
	{
		id: 'finalmentesemobjecaovocepodedesejo',
		formula:
			'Finalmente: Sem <div id="main" class="4">{Objeção}</div> você pode <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Finalmente: Sem {Objeção} você pode {Desejo}',
		variables: [4, 1],
		premium: true,
	},
	{
		id: 'manualdoaudienciatudoquevoceprecisaantesdedesejo',
		formula:
			'Manual do(a) <div id="main" class="0">{Audiência}</div>: Tudo o que você precisa saber antes de <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'Manual do(a) {Audiência}: Tudo o que você precisa saber antes de {Desejo}',
		variables: [0, 1],
		premium: true,
	},
	{
		id: 'apliqueestasnumerotecnicassecretasedesejo',
		formula:
			'Aplique estas <div id="main" class="8">{Número}</div> técnicas secretas e <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Aplique estas {Número} técnicas secretas e {Desejo}',
		variables: [8, 1],
		premium: true,
	},
	{
		id: 'estesolucaoestaajudandoaudienciaadesejo',
		formula:
			'Este <div id="main" class="3">{Solução}</div> está ajudando <div id="main" class="0">{Audiência}</div> a <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Este {Solução} está ajudando {Audiência} a {Desejo}',
		variables: [3, 0, 1],
		premium: true,
	},
	{
		id: 'finalmenteumamaneira100compravadadedesejosemobjecao',
		formula:
			'Finalmente uma maneira 100% comprovada de <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'Finalmente uma maneira 100% comprovada de {Desejo} sem {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'descubradeformasimplesepraticacomodesejo',
		formula:
			'Descubra de forma simples e prática como <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Descubra de forma simples e prática como {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'depoisdediversastentativasdescobrioquepoderiameajudaradesejo',
		formula:
			'Depois de diversas tentativas descobri o que poderia me ajudar a <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'Depois de diversas tentativas descobri o que poderia me ajudar a {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'comonumeroclientesconseguiramdesejoemapenasperiodo',
		formula:
			'Como <div id="main" class="8">{Número}</div> clientes conseguiram {Desejo} em apenas <div id="main" class="2">{Periodo}</div>',
		formulaRaw:
			'Como {Número} clientes conseguiram {Desejo} em apenas {Periodo}',
		variables: [8, 2],
		premium: true,
	},
	{
		id: 'comessatecnicaeumelhoreimeuproblemaemnumeroemapenas',
		formula:
			'Com essa técnica eu melhorei meu(minha) <div id="main" class="6">{Problema) em <div id="main" class="8">{Número}% em apenas <div id="main" class="2">{Período}',
		formulaRaw:
			'Com essa técnica eu melhorei meu(minha) {Problema) em {Número}% em apenas {2 dias}',
		variables: [6, 8, 2],
		premium: true,
	},
	{
		id: 'ometodoqueajudoumaisdenumeroalunosaconseguiremdesejomesmosemobjecao',
		formula:
			'O método que ajudou mais de <div id="main" class="8">{Número}</div>  alunos a conseguirem <div id="main" class="1">{Desejo}</div> mesmo sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw:
			'O método que ajudou mais de {Número} alunos a conseguirem {Desejo} mesmo sem {Objeção}',
		variables: [8, 1, 4],
		premium: true,
	},
	{
		id: 'somentehojetodasastecnicasdesolucaoreveladasemprimeiramao',
		formula:
			'Somente hoje - Todas as técnicas de <div id="main" class="3"> {Solução}</div> reveladas em primeira mão',
		formulaRaw:
			'Somente hoje - Todas as técnicas de {Solução} reveladas em primeira mão',
		variables: [3],
		premium: true,
	},
	{
		id: 'vocecometeesteserrosbasicosemdesejo',
		formula:
			'Você comete estes erros básicos em <div id="main" class="1">{Desejo}</div>?',
		formulaRaw: 'Você comete estes erros básicos em {Desejo}?',
		variables: [1],
		premium: true,
	},
	{
		id: 'comoselivrardoperigodeumproblemadeumamaneirarapidaefacil',
		formula:
			'Como se livrar do perigo de um <div id="main" class="6">{Problema}</div> de uma maneira rápida e fácil',
		formulaRaw:
			'Como se livrar do perigo de um {Problema} de uma maneira rápida e fácil',
		variables: [6],
		premium: true,
	},
	{
		id: 'essepequenoerrocomummecustou',
		formula:
			'Esse pequeno erro comum me custou <div id="main" class="8">{Número}</div>',
		formulaRaw: 'Esse pequeno erro comum me custou {Número}',
		variables: [8],
		premium: true,
	},
	{
		id: 'comovocesesentiriasepudessedesejosemobjecao',
		formula:
			'Como você se sentiria se pudesse <div id="main" class="8">{Desejo} sem {Objeção}',
		formulaRaw: 'Como você se sentiria se pudesse {Desejo} sem {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'facaodownloadgratuitodesteprodutoeacabacomproblema',
		formula:
			'Faça o download gratuito deste <div id="main" class="7">{Produto}</div> e acaba com <div id="main" class="6">{Problema}</div>',
		formulaRaw:
			'Faça o download gratuito deste {Produto} e acaba com {Problema}',
		variables: [7, 6],
		premium: true,
	},
	{
		id: 'emprimeiramaorevelandocomoeudesejocomsolucao',
		formula:
			'Em primeira mão! Revelando como eu <div id="main" class="1">{Desejo}</div> com <div id="main" class="3">{Solução}</div>',
		formulaRaw: 'Em primeira mão! Revelando como eu {Desejo} com {Solução}',
		variables: [1, 3],
		premium: true,
	},
	{
		id: 'baixe100gratuitooprodutomaiscompletojafeitoparaaudiencia',
		formula:
			' Baixe 100% gratuito o <div id="main" class="6">{Produto}</div> mais completo já feito para <div id="main" class="0">{Audiência}</div>',
		formulaRaw:
			' Baixe 100% gratuito o {Produto} mais completo já feito para {Audiência}',
		variables: [6, 0],
		premium: true,
	},
	{
		id: 'voceachavaimpossiveldesejosemobjecao',
		formula:
			'Você achava impossível <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>?',
		formulaRaw: 'Você achava impossível {Desejo} sem {Objeção}?',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'umamaneira100garantidadedesejosemobjecao',
		formula:
			'Uma maneira 100% garantida de <div id="main" class="1">{Desejo}</div> sem <div id="main" class="4">{Objeção}</div>',
		formulaRaw: 'Uma maneira 100% garantida de {Desejo} sem {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'atinjadesejoagoramesmocomaajudadeautoridade',
		formula:
			'Atinja <div id="main" class="1">{Desejo}</div> agora mesmo com a ajuda de <div id="main" class="5">{Autoridade}</div>',
		formulaRaw: 'Atinja {Desejo} agora mesmo com a ajuda de {Autoridade}',
		variables: [1, 5],
		premium: true,
	},
	{
		id: 'nuncamaislidecomproblemasuachanceunicadedesejo',
		formula:
			'Nunca mais lide com <div id="main" class="6">{Problema}</div>, sua chance única de <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Nunca mais lide com {Problema}, sua chance única de {Desejo}',
		variables: [6, 1],
		premium: true,
	},
	{
		id: 'produtolancaamaneiramaissimplesdedesejo',
		formula:
			' <div id="main" class="7">{Produto}</div> lança: A maneira mais simples de <div id="main" class="1">{Desejo}</div>',
		formulaRaw: '{Produto} lança: A maneira mais simples de {Desejo}',
		variables: [7, 1],
		premium: true,
	},
	{
		id: 'voceestaprontoparadesejo',
		formula:
			'Você está pronto(a) para <div id="main" class="1">{Desejo}</div>?',
		formulaRaw: 'Você está pronto(a) para {Desejo}?',
		variables: [1],
		premium: true,
	},
	{
		id: 'umplanoineditoparavocedesejo',
		formula:
			'Um plano inédito para você <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'Um plano inédito para você {Desejo}',
		variables: [1],
		premium: true,
	},
	{
		id: 'agoraeahoraultimachanceparaaudienciaatingirdesejo',
		formula:
			'Agora é a hora! Última chance para <div id="main" class="0"> {Audiência}</div> atingir <div id="main" class="1">{Desejo}</div>!',
		formulaRaw:
			'Agora é a hora! Última chance para {Audiência} atingir {Desejo}!',
		variables: [0, 1],
		premium: true,
	},
	{
		id: 'oportunidadeunicaparaosprimeirosnumeroaudienciaquerendodesejo',
		formula:
			'Oportunidade única para os primeiros <div id="main" class="8">{Número}</div>  <div id="main" class="0">{Audiência}</div>  querendo <div id="main" class="1">{Desejo}</div>',
		formulaRaw:
			'Oportunidade única para os primeiros {Número} {Audiência} querendo {Desejo}',
		variables: [8, 0, 1],
		premium: true,
	},
	{
		id: 'desejodeumamaneiraquevocenuncaviu',
		formula:
			'<div id="main" class="1">{Desejo}</div> de uma maneira que você nunca viu',
		formulaRaw: '{Desejo} de uma maneira que você nunca viu',
		variables: [1],
		premium: true,
	},
	{
		id: 'amaneirasimpleseincomumdenuncamaissofrecomproblema',
		formula:
			'A maneira simples e incomum de nunca mais sofrer com <div id="main" class="6">{Problema}</div>',
		formulaRaw:
			'A maneira simples e incomum de nunca mais sofrer com {Problema}',
		variables: [6],
		premium: true,
	},
	{
		id: 'conviteexclusivoparaaudienciacansadosdepassarporproblema',
		formula:
			' Convite exclusivo para <div id="main" class="0">{Audiência}</div> cansados de passar por <div id="main" class="6">{Problema}</div> ',
		formulaRaw:
			' Convite exclusivo para {Audiência} cansados de passar por {Problema} ',
		variables: [0, 6],
		premium: true,
	},
	{
		id: 'tenhadesejosemsepreocuparcomobjecao',
		formula:
			'Tenha <div id="main" class="1">{Desejo}</div> sem se preocupar com <div id="main" class="4">{Objeção}</div>',
		formulaRaw: 'Tenha {Desejo} sem se preocupar com {Objeção}',
		variables: [1, 4],
		premium: true,
	},
	{
		id: 'produtoestaaquiparateajudaranuncamaispassarporproblema',
		formula:
			'<div id="main" class="7">{Produto}</div> está aqui para te ajudar a nunca mais passar por <div id="main" class="6">{Problema}</div>',
		formulaRaw:
			'{Produto} está aqui para te ajudar a nunca mais passar por {Problema}',
		variables: [7, 6],
		premium: true,
	},
	{
		id: 'produtoasolucaoquevoceprecisaparadesejo',
		formula:
			'<div id="main" class="7">{Produto}</div>, a solução que você precisa para <div id="main" class="1">{Desejo}</div>',
		formulaRaw: '{Produto}, a solução que você precisa para {Desejo}',
		variables: [7, 1],
		premium: true,
	},
	{
		id: 'aformamaissolidaeconsistentedeatingirdesejo',
		formula:
			'A forma mais sólida e consistente de atingir <div id="main" class="1">{Desejo}</div>',
		formulaRaw: 'A forma mais sólida e consistente de atingir {Desejo}',
		variables: [1],
		premium: true,
	},
];

export default HeadlineTemplates;
