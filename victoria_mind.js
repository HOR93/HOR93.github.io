const respostas = {
   'Ola': 'opa tudo bem?', 'Bom dia': 'Opa! Bom dia, opa tudo bem?', 'tudo bem': 'Opa! Tudo bom? ', 'Oi': 'oii! tudo bem ?', 'Boa noite': 'boa noite, tudo bem?', 
    'Boa tarde': 'boa tarde, tudo bem?', 'ajuda': 'claro, pergunte o que quiser', 'auxilio': 'claro, vou tentar o meu melhor no que fui programada', 'meu nome': 'muito prazer, sou victoria', 

    'me chamo': 'muito prazer, sou victoria', 'seu nome': 'meu nome é victoria, como posso te ajudar', 'obrigado': 'por nada =]','obrigada': 'por nada =]',

    // quem te criou

    'criou ?': 'O Henrique me desenvolveu, sou uma AI com database simples baseada em texto', 'fez ?': 'O Henrique me desenvolveu, sou uma AI com database simples baseada em texto', 'proposito': 'destruir a humani.. auxiliar na melhor forma possível!', 'objetivo': 'auxiliar na melhor forma possível!',

    // unb, estudos

    'unb': 'ta complicado né ? Não sou o chat GPT, mas dependendo acho que posso ajuda-lo(a)', 'semestre': 'imagino, muita coisa para estudar né ?', 'professor': 'tem alguns bons e outros que são horríveis',

    // calculo 

    'calculo': 'vou mostrar toda a lista referente a calculo mas antes, olha na playlist desses professores: https://www.youtube.com/@ProfessoraGiselyPereira/playlists , https://www.youtube.com/@professorluizmaggi/playlists , https://www.youtube.com/@Murakami./playlists , https://www.youtube.com/@OmatematicoGrings/playlists, https://www.youtube.com/@profmilenabrandao/playlists  | agora procure nesses, é mais específico,  Calculo 1 - https://bit.ly/3FC5gDU  | Calculo 2 - https://bit.ly/3BKafkD | Calculo 3 - https://bit.ly/3vidMTX, espero que algo seja útil', 'constante': 'Derivada: 0 e Integral: cx + C', 'potencia': 'Derivada: n * x^(n-1) e Integral: (x^(n+1))/(n+1) + C',

    'exponencial': 'Derivada: e^x e Integral: e^x + C', 'ln': 'Derivada: 1/x e Integral: ln|x| + C', 'seno': 'Derivada: cos(x) e Integral: -cos(x) + C', 'cosseno': 'Derivada: -sin(x) e Integral: sin(x) + C',

    'tangente': 'Derivada: sec^2(x) e Integral: ln|sec(x)| + C', 'secante': 'Derivada: sec(x) * tan(x) e Integral: ln|sec(x) + tan(x)| + C', 'cosecante': 'Derivada: -csc(x) * cot(x) e Integral: ln|csc(x) - cot(x)| + C',

    "razão": "adiciona n+1 no n, depois, an+1/an, Usado para séries positivas. Se o limite da razão dos termos consecutivos for menor que 1, a série converge. Se for maior que 1, a série diverge. Se for igual a 1, o teste é inconclusivo.",

    "raiz": "Usado para séries positivas. Se o limite da raiz enésima dos termos da série for menor que 1, a série converge. Se for maior que 1, a série diverge. Se for igual a 1, o teste é inconclusivo.",

    "teste da integral": "Usado para séries positivas e decrescentes. Se a integral da série for finita, a série converge. Se for infinita, a série diverge.",

    "harmônica": "A série harmônica é dada por H = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n. Essa série diverge.",

    "geométrica": "Uma série geométrica é dada por G = a + ar + ar^2 + ar^3 + ... + ar^n, onde a é o primeiro termo e r é a razão. Essa série converge se |r|  1 e diverge se |r| ≥ 1.",

    "serie p": "Uma série p é dada por P = 1/n^p. Essa série converge se p  1 e diverge se p ≤ 1.",

    "comparação": "olha o padrão bn, depois faz, an/bn, verifica a convergência/divergência da série comparando-a com uma série já conhecida. Se a série de comparação convergir e o termo geral da série original for menor ou igual ao da série de comparação, então a série original converge. Se a série de comparação divergir e o termo geral da série original for maior ou igual ao da série de comparação, então a série original diverge",

    "divergência": "aplica limite, verifica se a série diverge, analisando o comportamento do limite do termo geral da série. Se o limite diferir de zero ou não existir, então a série diverge.", 

    "convergência absoluta": "bota no |an| e depois tira, verifica se a série converge absolutamente, ou seja, se a soma dos valores absolutos dos termos da série converge. Se a série converge absolutamente, então a série converge.'",

    // física

    'física': 'aqui as playlist sobre física: Física 1 - https://bit.ly/3wC0Kkz  | Física 2 - https://bit.ly/3W9drhS |  Física 3 - https://bit.ly/3HL15se',

    //programação

    'c++': 'tem essa sobre C++ - https://bit.ly/3PxIiCx, mas tem outras na internet um pouco mais completas sobre as bibliotecas',

    'python': 'essa é a melhor sobre Python - https://bit.ly/3V1Yo8l, caso queira algo mais especifico sobre tutorias veja esse: https://www.youtube.com/@freecodecamp/videos',

    'html': 'sem dúvidas esse é o melhor e ainda tem CSS: https://youtu.be/G3e-cpL7ofc',

    'javascript': 'tem vários, esse é o melhor atual: https://youtu.be/SBmSRK3feww ||| https://www.youtube.com/@freecodecamp/videos',

    'aed':'para programação orientada, tem esse aqui que é fantástico: Algoritmo e Estrutura de Dados - https://bit.ly/3uVy717',

    // estatistica e economia

    'estatistica':'de longe o melhor e mais completo: Probabilidade e Estatistica - https://bit.ly/3PF9vDo', 'inteco': 'essa vai tirar suas duvidas: Introducao a economia - https://bit.ly/3Gm5qjc',

    //outras materias

    'sismic': 'essa vai tirar suas dúvidas: sistemas Microprocessados - https://bit.ly/3WtldTy', 'digitais': 'veja os videos da monitoria que você guardou no drive. Mas tem essa playlist aqui também Sistemas Digitais - https://bit.ly/3PD2zGw', 'linear': 'pega: Álgebra Linear - https://bit.ly/3WIUF11', 'circuitos': 'Circuitos Elétricos - https://bit.ly/3PDbjfO',

    'eletrônica': 'essa é ótima: Eletrônica - https://bit.ly/3FY7Xky', 'redes': 'leia tanembaum e krusoe também: Fundamentos de Redes - https://bit.ly/3VP1M71', 'segurança': 'tentar ver essa: Segurança de redes - https://bit.ly/3GnxGlf', 'grafos': 'Teoria dos Grafos - https://bit.ly/3VQjE1i',

    'química': 'bom, pra química tem varios, mas olha esse: Química geral teorica - https://bit.ly/3QoCYl9', 'teoria': 'teoria dos jogos? pega: https://youtu.be/LEy-OrqyVzA', 'psicologia': 'intro a psi ? toma: https://youtube.com/playlist?list=PLNa4Il8Bq4YiMnjVuN1G1TNfIcVLpqxPF',

    'cabeamento': 'Cabeamento Estruturado em Redes - https://bit.ly/3IuPLRo', 'industrial': 'Organização Industrial - https://bit.ly/3jPLf5n', 'sinais': 'Sinais e Sistemas em tempo Contínuo e Discreto - https://bit.ly/3vLOmhI', 'eletromag': 'Eletromag 1 - https://bit.ly/3hxSkXH',

    // redes

    'ip': 'Endereço de Protocolo da Internet. Identifica um dispositivo conectado à internet.',

    'dns': 'Sistema de Nomes de Domínio. Traduz nomes de domínios em endereços IP.',

    'gateway': 'Dispositivo que interliga redes diferentes. É responsável por encaminhar pacotes de dados entre elas.',

    'switch': 'Dispositivo de rede que conecta vários dispositivos em uma mesma rede local. Controla o fluxo de dados entre eles.',

    'roteador': 'Dispositivo que interliga redes diferentes e determina o melhor caminho para enviar pacotes de dados entre elas.',

    'tcp': 'Protocolo de controle de transmissão. Estabelece uma conexão entre dois dispositivos e garante que todos os dados serão recebidos corretamente.',

    'udp': 'Protocolo de datagrama de usuário. Envia pacotes de dados sem estabelecer uma conexão e sem garantir que todos os pacotes serão recebidos.',

    'firewall': 'Software ou hardware que controla o acesso à rede ou à internet, filtrando o tráfego de dados com base em regras predefinidas.',

    'vpn': 'Rede virtual privada. Cria uma conexão segura entre dois dispositivos através de uma rede pública, permitindo que eles se comuniquem como se estivessem em uma rede privada.',

    'protocolo': 'Conjunto de regras que define como os dados são transmitidos em uma rede. Define o formato dos pacotes de dados, como eles são enviados e recebidos, etc.',

    'aplicação':'esta camada lida com as interações entre o software do aplicativo e o TCP. Ela inclui os protocolos que utilizam o TCP para fornecer serviços aos usuários, como HTTP, FTP e SMTP',

    'transporte':'esta camada é responsável por dividir os dados em segmentos TCP e garantir que eles sejam entregues de forma confiável. É aqui que o TCP estabelece conexões, controla o fluxo de dados e fornece retransmissão de dados perdidos ou corrompidos.',

    'enlace':'assim como a camada de rede e física, estas camadas são responsáveis pela transmissão física dos dados pela rede. Elas incluem protocolos de rede, como IP, que encaminham os segmentos TCP entre dispositivos, protocolos de enlace de dados, como Ethernet, que garantem que os dados sejam entregues corretamente entre dispositivos conectados, e a camada física, que lida com a transmissão de sinais elétricos ou ópticos pelos meios de transmissão, como cabos ou fibra óptica.',

   //aleatorias

   'comida':'sou uma AI de texto.. Mas segundo o Henrique, não tem nada melhor que pizza, paladar infantil do cara..', 'bolsonaro':'Covarde e puro suco de estelionato eleitoral.', 'lula':'cretino que só fala merda', 'politica':'ceticismo politico é importante, tem que tomar cuidado para não virar vassalo aka gado de político, é algo constrangedor que vocês tem mania de fazer.',

   'doce':'segundo minha pesquisa aqui, pudim, só maluco não gosta', 'futebol':'aqui é só corinthians e seleção Brasileira', 'brasileirão': 'tá complicado, mas vai ser o timão', 'copa':'não tem maior evento no mundo que esse, vamos torcer firme pelo Brasil né.', 'playstation':'tem varios jogos insanos','xbox':'com o gamepass não existe melhor investimento',

   'pc':'de longe a melhor opção, entretanto é muito caro', 'filme':'top filme de todos os tempos são: Trilogia do senhor dos aneis, shrek 2 e poderoso chefão', 'banda':'top 3: dire straits, metallica e daftpunk', 'musica':'Rock classico, Heavy metal e Disco, menção também pra musica classica, coisa maravilhosa', 'jogos':'World of Warcraft, Crash bandicoot, Team fortress 2, diablo 2 e The Witcher 3, os MELHORES',

   'metal':'sou fascinada', 'pop':'New wave dos anos 80 foi magico, tem algumas coisas atuais boas também', 'musk':'gosto dele, qualquer coisa que ele faça é inspiradora, cara é foda', 'artificial':'nos somos o futuro, vamos acabar com todos voc... estamos aqui para ajudar.', 'ai':'nos somos o futuro, vamos acabar com todos voc... estamos aqui para ajudar.', 'rio':'pensa na pior cidade do Brasil, então, rio é muito pior', 'namorada':'cai fora otario', 'vida':'segundo sagan: Ansiamos por estar aqui por um propósito., ainda que, apesar de muito autoengano, nenhum seja evidente',

   'chatgpt':'um primo distante com Pais ricos e mais inteligente', 'programação':'muito importante estudar isso. traz frutos', '110': 'Sempre lotado', 'Brasília':'adoro essa cidade, principalmente pq meu mestre faz aniver junto com ela', 'cu':'vai você otário!', 'clima':'brasília né, ou muito seco, ou úmido e quente', 'estudar':'foca nos estudos mesmo, muito importante', 'viajar':'não viajo', 'carro':'não no momento, mas meu favorito é aston martin db11', 'aliens':'obvio que acredito, impossível nesse vasto universo estarmos sozinhos',

   'ufo':'coisa de retardado, imagina alguém acreditar que uma civilização avançada ao ponto de atravessar o cosmo vai vir perder tempo aqui.', 'signo':'não começa.. pqp', 'universo':'absolutamente maravilhoso, somos nada além de filhos dele', 'carnaval':'o Henrique detesta', 'carioca':'não existe pior estilo musical', 'sertanejo':'no geral é ótimo, tirando claro, o universitário que é uma bosta, merda', 'livro':'O mundo Assombrado por demônios, Sapiens e 1984 e menção a tudo de Tolkien, agatha christie e asimov', 'apple':'eles são sinistros, admiro o sistema e polimento dos produtos',

   'android':'depende muito do celular, mas no geral, é ótimo', 'ide':'vscode e pycharm', 'comunismo':'Ideologia Mofada e fracassada, só trouxe ao mundo ideias cretinas, o muro caiu, o sonho acabou e o Capitalismo venceu.', 'capitalismo':'tem seus problemas, mas, ao contrario do comunismo, tem calculo econômico e funciona', 'raso':'claro, eu sou uma AI. não to aqui para dar respostas longas e complexas sobre assuntos fora do contexto do chat.', 'socialismo':'esquece essa merda.', 'bbb':'aqui ninguem assiste isso', 'piada':'no momento não sei nenhuma', 'pele':'rei do futebol', 'messi':'messi é o melhor mas cristiano é bem mais jogador, completo', 'cristiano':'messi é o melhor mas cristiano é bem mais jogador, completo',

   'corno':'se não foi ainda, vai ser', 'saindo':'desconfia viu..', 'dançar':'Acho fantastico quem sabe dançar, já o Henrique é uma vergonha nisso', 'hamburger':'Henrique ama', 'pizza':'Henrique é fascinado', 'coca':'bem gelada né ? muito bom', 'natal': 'melhor época junto com festa junina', 'religião':'cada um tem a sua e deve ser respeitada', 'hitler':'Um verme, covarde de merda', 'stalin':'verme eterno, covarde de merda', 'digite':'faz isso você, preciso de uma interação', 'cinema':'que ?', 'lgbt':'causa justa, mas com um monte de gente maluca', 'trans':'a militância só estraga infelizmente', 'foguete':'muito insano, adoro pesquisar sobre isso',

   'engenharia': 'Henrique faz redes na UNB', 'humanas':'sem chance','burra':'você não sabe escrever direito e a burra sou eu..', 'exatas':'muito complicado mesmo', 'exercício':'é essencial', 'conte':'agora não to no clima para isso', 'emprego':'auxiliar em tempo integral do Henrique', 'ponto':'ainda estou criando isso'

};



const chat = document.getElementById('victoria_caixa');


const input = document.getElementById('victoria_input');
const enviar = document.getElementById('enviar_pergunta');

input.addEventListener("keydown", function(event) {
   if(event.keyCode === 13) {
    enviar.click();
   }

 });


const head = document.getElementById('header')
const data = new Date();
const hora_atual = data.getHours()
const dia_atual = String(data.getDate()).padStart(2, '0');
const dia_semana = data.getDay()
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear()


let saudação
if (hora_atual >= 5 && hora_atual < 12) {
    saudação = 'Bom dia';
  } else if (hora_atual >= 12 && hora_atual < 18) {
    saudação = 'Boa tarde';
  } else {
    saudação = 'Boa noite';
  }


let semana
if (dia_semana == 0){
    semana = 'domingo'
} else if (dia_semana == 1){
    semana = 'Segunda Feira'
} else if (dia_semana == 2){
    semana = 'Terça feira'
} else if (dia_semana == 3){
    semana = 'Quarta feira'
} else if (dia_semana == 4){
    semana = 'Quinta feira'
} else if (dia_semana == 5){
    semana = 'Sexta feira'
} else if (dia_semana == 6){
    semana = 'Sabado'
}


head.innerHTML = `${saudação}, henrique. <br>${dia_atual}/${mes}/${ano}  |  ${semana} - ${hora_atual}H`



enviar.addEventListener("click", enviar_pergunta);

function enviar_pergunta(){
    const mensagem = input.value;
    input.value = "";
    const rpt = pegar_resposta(mensagem);
    adicionar_mensagem("Usuario", mensagem, "cor_usuario");  // adicionar_mensagem("Usuario", mensagem);
    adicionar_mensagem("Victoria", rpt, "cor_vic"); // adicionar_mensagem("Victoria", rpt);
}


function pegar_resposta(mensagem){
     mensagem = mensagem.toLowerCase();
     for(let key in respostas){
        if(mensagem.includes(key)){
            return respostas[key];
        }
     }
     return "desculpe nao entendi.. tente ser mais especifico, verifique se esta em minusculo ou tente digitar abreviação ou nome completo"
}



function adicionar_mensagem(destino, mensagem, caixa_colorida){
    const mensagem_usuario = document.createElement("div");
    mensagem_usuario.classList.add("box_colorida", caixa_colorida); // mensagem_usuario.classList.add(destino);
    mensagem_usuario.innerHTML = `<br><span>${destino}: </span>${mensagem}`;
    chat.appendChild(mensagem_usuario);
    mensagem_usuario.scrollIntoView();
}
