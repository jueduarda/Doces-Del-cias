
/* ==================================================
   DOCES & DELÍCIAS
   CATÁLOGO COMPLETO — 60 PRODUTOS

   Aqui você altera:
   - Nome
   - Descrição
   - Ingredientes
   - Preço

   NÃO COLOQUE IMAGENS NESTE ARQUIVO.
================================================== */

window.DOCES_CATALOGO = {

  // ================================================
  // 1. CATEGORIAS DO CARDÁPIO
  // ================================================

  categories: [
    {
      id: "cafes",
      name: "Cafés",
      description: "Cafés para momentos especiais."
    },
    {
      id: "salgados",
      name: "Salgados",
      description: "Delícias para qualquer hora."
    },
    {
      id: "doces",
      name: "Doces",
      description: "Um carinho em cada pedaço."
    },
    {
      id: "artesanais",
      name: "Docinhos artesanais",
      description: "Pequenos mimos feitos com afeto."
    },
    {
      id: "paes",
      name: "Pães e folhados",
      description: "Fresquinhos e irresistíveis."
    },
    {
      id: "bebidas",
      name: "Sucos e vitaminas",
      description: "Sabores leves e refrescantes."
    },
    {
      id: "tortas",
      name: "Tortas",
      description: "Fatias para momentos especiais."
    }
  ],

  // ================================================
  // 2. PRODUTOS
  // ================================================

  products: [

    // ----------------------------------------------
    // CAFÉS — p01 até p05
    // ----------------------------------------------

    
/* =========================================
   CAFÉS — DOCES & DELÍCIAS
   5 PRODUTOS
========================================= */

{
  id: "p01",
  category: "cafes",
  name: "Latte clássico",
  description: "Uma combinação delicada de espresso encorpado e leite vaporizado, finalizada com uma camada suave de espuma cremosa e latte art. Servido quentinho em uma xícara de 240 ml.",
  ingredients: [
    "Café espresso 100% arábica",
    "Leite integral vaporizado"
  ],
  price: 13.90
},

{
  id: "p02",
  category: "cafes",
  name: "Cappuccino de canela",
  description: "Café espresso combinado com leite vaporizado e espuma aveludada, finalizado com uma delicada camada de canela em pó. Uma bebida aromática e acolhedora, servida em 200 ml.",
  ingredients: [
    "Café espresso 100% arábica",
    "Leite integral vaporizado",
    "Espuma de leite",
    "Canela em pó"
  ],
  price: 14.90
},

{
  id: "p03",
  category: "cafes",
  name: "Mocha de chocolate",
  description: "A intensidade do espresso encontra a cremosidade do chocolate em uma bebida especial. Preparado com leite vaporizado, calda de chocolate e finalizado com chantilly e raspas de chocolate. Porção de 300 ml.",
  ingredients: [
    "Café espresso 100% arábica",
    "Leite integral",
    "Chocolate meio amargo",
    "Calda de chocolate",
    "Chantilly",
    "Raspas de chocolate"
  ],
  price: 18.90
},

{
  id: "p04",
  category: "cafes",
  name: "Latte de caramelo gelado",
  description: "Espresso combinado com leite gelado, cubos de gelo e calda de caramelo. Uma bebida refrescante, cremosa e equilibrada, com finalização de caramelo. Servida em copo de 350 ml.",
  ingredients: [
    "Café espresso 100% arábica",
    "Leite integral",
    "Calda de caramelo",
    "Cubos de gelo"
  ],
  price: 17.90
},

{
  id: "p05",
  category: "cafes",
  name: "Café espresso",
  description: "Uma dose de café espresso preparada com grãos 100% arábica, extraída na hora para destacar seu aroma, corpo e sabor intenso. Servida em xícara de 40 ml.",
  ingredients: [
    "Café espresso 100% arábica",
    "Água filtrada"
  ],
  price: 7.50
},


    // ----------------------------------------------
    // SALGADOS — p06 até p15
    // ----------------------------------------------

    
/* =========================================
   SALGADOS — DOCES & DELÍCIAS
   10 PRODUTOS
========================================= */

{
  id: "p06",
  category: "salgados",
  name: "Bolinha de queijo recheada",
  description: "Salgado artesanal de casquinha dourada e crocante, com massa macia e recheio generoso de queijo derretido. Uma escolha perfeita para acompanhar o café.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Manteiga",
    "Queijo muçarela",
    "Sal",
    "Ovos",
    "Farinha de rosca",
    "Óleo vegetal"
  ],
  price: 8.50
},

{
  id: "p07",
  category: "salgados",
  name: "Coxinha de frango",
  description: "Coxinha tradicional preparada com massa macia, recheio suculento de frango desfiado e empanado crocante. Um clássico irresistível.",
  ingredients: [
    "Farinha de trigo",
    "Caldo de frango",
    "Frango desfiado",
    "Cebola",
    "Alho",
    "Tomate",
    "Óleo vegetal",
    "Sal",
    "Salsinha",
    "Farinha de rosca"
  ],
  price: 9.50
},

{
  id: "p08",
  category: "salgados",
  name: "Empada de frango",
  description: "Empada artesanal de massa amanteigada e delicada, recheada com frango desfiado e creme suave. Assada até ficar levemente dourada.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Ovos",
    "Frango desfiado",
    "Cebola",
    "Alho",
    "Tomate",
    "Requeijão cremoso",
    "Sal",
    "Salsinha"
  ],
  price: 10.00
},

{
  id: "p09",
  category: "salgados",
  name: "Pão de queijo artesanal",
  description: "Pão de queijo com casquinha levemente crocante, interior macio e sabor marcante de queijo. Ideal para saborear quentinho.",
  ingredients: [
    "Polvilho azedo",
    "Polvilho doce",
    "Queijo meia cura",
    "Leite",
    "Ovos",
    "Óleo vegetal",
    "Sal"
  ],
  price: 6.50
},

{
  id: "p10",
  category: "salgados",
  name: "Torrada gratinada com queijo",
  description: "Fatias de pão artesanal levemente tostadas, cobertas com queijo derretido e gratinadas até atingir uma superfície dourada e irresistível.",
  ingredients: [
    "Pão artesanal",
    "Queijo muçarela",
    "Manteiga",
    "Orégano",
    "Sal"
  ],
  price: 12.00
},

{
  id: "p11",
  category: "salgados",
  name: "Quibe recheado com carne",
  description: "Quibe artesanal preparado com trigo para quibe, carne bovina e especiarias. Crocante por fora, macio por dentro e cheio de sabor.",
  ingredients: [
    "Trigo para quibe",
    "Carne bovina moída",
    "Cebola",
    "Alho",
    "Hortelã",
    "Pimenta-do-reino",
    "Sal",
    "Óleo vegetal"
  ],
  price: 9.50
},

{
  id: "p12",
  category: "salgados",
  name: "Risole de presunto e queijo",
  description: "Risole de massa delicada com recheio cremoso de presunto e queijo. Empanado e frito até ficar dourado e crocante.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Manteiga",
    "Presunto",
    "Queijo muçarela",
    "Sal",
    "Ovos",
    "Farinha de rosca",
    "Óleo vegetal"
  ],
  price: 9.00
},

{
  id: "p13",
  category: "salgados",
  name: "Sanduíche natural de frango",
  description: "Sanduíche de pão integral com recheio cremoso de frango desfiado, alface e cenoura fresca. Uma opção leve e saborosa para qualquer momento.",
  ingredients: [
    "Pão de forma integral",
    "Frango desfiado",
    "Maionese",
    "Cenoura",
    "Alface",
    "Sal",
    "Salsinha"
  ],
  price: 15.90
},

{
  id: "p14",
  category: "salgados",
  name: "Tapioca de frango cremoso",
  description: "Tapioca preparada na hora, com massa macia e recheio generoso de frango desfiado e requeijão cremoso. Uma combinação delicada e saborosa.",
  ingredients: [
    "Goma de tapioca hidratada",
    "Frango desfiado",
    "Requeijão cremoso",
    "Cebola",
    "Alho",
    "Sal",
    "Salsinha"
  ],
  price: 14.90
},

{
  id: "p15",
  category: "salgados",
  name: "Misto quente na chapa",
  description: "Pão douradinho na chapa com manteiga, presunto e queijo muçarela derretido. Um clássico das cafeterias, servido quentinho.",
  ingredients: [
    "Pão de forma",
    "Presunto",
    "Queijo muçarela",
    "Manteiga"
  ],
  price: 13.90
},


    // ----------------------------------------------
    // DOCES — p16 até p25
    // ----------------------------------------------

   /* =========================================
   DOCES — DOCES & DELÍCIAS
   10 PRODUTOS
========================================= */

{
  id: "p16",
  category: "doces",
  name: "Brownie de chocolate com ganache",
  description: "Brownie artesanal de chocolate com textura macia por dentro, casquinha delicada por fora e finalização com ganache de chocolate.",
  ingredients: [
    "Chocolate meio amargo",
    "Manteiga",
    "Açúcar",
    "Ovos",
    "Farinha de trigo",
    "Cacau em pó",
    "Creme de leite"
  ],
  price: 12.90
},

{
  id: "p17",
  category: "doces",
  name: "Cinnamon roll de canela",
  description: "Massa macia e amanteigada enrolada com açúcar e canela, finalizada com cobertura doce e delicada.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Manteiga",
    "Açúcar",
    "Fermento biológico",
    "Canela em pó",
    "Cobertura de açúcar"
  ],
  price: 11.90
},

{
  id: "p18",
  category: "doces",
  name: "Cookie com gotas de chocolate",
  description: "Cookie grande, levemente crocante por fora e macio no centro, preparado com gotas e pedaços de chocolate.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Açúcar mascavo",
    "Açúcar refinado",
    "Ovos",
    "Gotas de chocolate",
    "Essência de baunilha"
  ],
  price: 9.90
},

{
  id: "p19",
  category: "doces",
  name: "Cupcake de morango",
  description: "Bolinho de massa leve e fofinha, coberto com chantilly de morango e finalização especial para deixar a pausa ainda mais doce.",
  ingredients: [
    "Farinha de trigo",
    "Açúcar",
    "Ovos",
    "Leite",
    "Manteiga",
    "Fermento químico",
    "Chantilly",
    "Cobertura sabor morango"
  ],
  price: 14.90
},

{
  id: "p20",
  category: "doces",
  name: "Donut de morango",
  description: "Donut macio e delicado, coberto com glacê sabor morango e finalização decorativa.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Açúcar",
    "Manteiga",
    "Ovos",
    "Fermento biológico",
    "Cobertura sabor morango",
    "Confeitos"
  ],
  price: 12.90
},

{
  id: "p21",
  category: "doces",
  name: "Éclair de chocolate",
  description: "Massa leve e delicada recheada com creme e finalizada com cobertura de chocolate, em versão inspirada na clássica bomba de chocolate.",
  ingredients: [
    "Massa choux",
    "Leite",
    "Ovos",
    "Manteiga",
    "Farinha de trigo",
    "Creme confeiteiro",
    "Chocolate"
  ],
  price: 13.90
},

{
  id: "p22",
  category: "doces",
  name: "Mousse de maracujá",
  description: "Sobremesa cremosa, leve e refrescante, com sabor marcante de maracujá e textura aerada.",
  ingredients: [
    "Leite condensado",
    "Creme de leite",
    "Suco de maracujá",
    "Polpa de maracujá"
  ],
  price: 10.90
},

{
  id: "p23",
  category: "doces",
  name: "Petit gâteau de chocolate",
  description: "Bolo quente de chocolate com interior cremoso e sabor intenso, ideal para quem ama sobremesas mais marcantes.",
  ingredients: [
    "Chocolate meio amargo",
    "Manteiga",
    "Ovos",
    "Açúcar",
    "Farinha de trigo",
    "Cacau em pó"
  ],
  price: 18.90
},

{
  id: "p24",
  category: "doces",
  name: "Pudim de leite condensado",
  description: "Clássico pudim de leite condensado, cremoso e suave, com cobertura de calda caramelizada.",
  ingredients: [
    "Leite condensado",
    "Leite",
    "Ovos",
    "Açúcar"
  ],
  price: 9.90
},

{
  id: "p25",
  category: "doces",
  name: "Waffle com morangos",
  description: "Waffle dourado e macio servido com morangos frescos e cobertura doce, perfeito para um momento especial.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Ovos",
    "Manteiga",
    "Açúcar",
    "Fermento químico",
    "Morangos",
    "Cobertura doce"
  ],
  price: 19.90
},


/* ==========================================
   DOCINHOS ARTESANAIS — 10 PRODUTOS
========================================== */


/* ==========================================
   DOCINHOS ARTESANAIS — DOCES & DELÍCIAS
   10 PRODUTOS
========================================== */

{
  id: "p26",
  category: "artesanais",
  name: "Beijinho de coco",
  description: "Docinho tradicional de textura macia e cremosa, preparado com coco ralado e leite condensado, finalizado com coco e um delicado cravo-da-índia.",
  ingredients: [
    "Leite condensado",
    "Coco ralado",
    "Manteiga",
    "Coco para cobertura",
    "Cravo-da-índia"
  ],
  price: 4.00
},

{
  id: "p27",
  category: "artesanais",
  name: "Bicho de pé",
  description: "Docinho artesanal de morango, com textura cremosa e sabor delicado, envolvido em açúcar cristal rosa.",
  ingredients: [
    "Leite condensado",
    "Manteiga",
    "Preparado sabor morango",
    "Açúcar cristal rosa"
  ],
  price: 4.00
},

{
  id: "p28",
  category: "artesanais",
  name: "Bombom de morango",
  description: "Morango fresco envolvido em creme branco e coberto com chocolate, combinando a doçura do recheio com o frescor da fruta.",
  ingredients: [
    "Morango fresco",
    "Leite condensado",
    "Manteiga",
    "Chocolate ao leite",
    "Creme de leite"
  ],
  price: 7.50
},

{
  id: "p29",
  category: "artesanais",
  name: "Brigadeiro gourmet",
  description: "Brigadeiro artesanal de chocolate nobre, com textura cremosa e cobertura de granulado de chocolate. Um clássico da confeitaria brasileira.",
  ingredients: [
    "Leite condensado",
    "Chocolate meio amargo",
    "Creme de leite",
    "Manteiga",
    "Granulado de chocolate"
  ],
  price: 4.50
},

{
  id: "p30",
  category: "artesanais",
  name: "Cajuzinho de amendoim",
  description: "Docinho tradicional preparado com amendoim torrado e chocolate, finalizado com açúcar cristal e decorado com amendoim.",
  ingredients: [
    "Amendoim torrado",
    "Leite condensado",
    "Chocolate em pó",
    "Manteiga",
    "Açúcar cristal"
  ],
  price: 4.00
},

{
  id: "p31",
  category: "artesanais",
  name: "Camafeu de nozes",
  description: "Doce fino de nozes com interior macio e sabor marcante, envolvido em uma delicada cobertura de fondant e decorado com nozes.",
  ingredients: [
    "Nozes trituradas",
    "Leite condensado",
    "Manteiga",
    "Açúcar de confeiteiro",
    "Água",
    "Nozes para decoração"
  ],
  price: 6.50
},

{
  id: "p32",
  category: "artesanais",
  name: "Casadinho gourmet",
  description: "A combinação perfeita entre brigadeiro tradicional e brigadeiro branco, unidos em um docinho de textura cremosa e sabor equilibrado.",
  ingredients: [
    "Leite condensado",
    "Manteiga",
    "Chocolate meio amargo",
    "Chocolate branco",
    "Creme de leite",
    "Açúcar cristal"
  ],
  price: 4.50
},

{
  id: "p33",
  category: "artesanais",
  name: "Olho de sogra",
  description: "Doce tradicional que combina a suavidade do beijinho de coco com o sabor marcante da ameixa seca, criando uma sobremesa delicada.",
  ingredients: [
    "Ameixa seca sem caroço",
    "Leite condensado",
    "Coco ralado",
    "Manteiga",
    "Açúcar cristal"
  ],
  price: 5.00
},

{
  id: "p34",
  category: "artesanais",
  name: "Palha italiana artesanal",
  description: "Quadradinhos de brigadeiro cremoso com pedaços crocantes de biscoito maisena, finalizados com uma delicada camada de açúcar.",
  ingredients: [
    "Leite condensado",
    "Chocolate em pó",
    "Manteiga",
    "Biscoito maisena",
    "Açúcar de confeiteiro"
  ],
  price: 6.00
},

{
  id: "p35",
  category: "artesanais",
  name: "Trufa de chocolate",
  description: "Trufa artesanal preparada com ganache de chocolate meio amargo, envolvida em uma fina camada de chocolate e finalizada com decoração delicada.",
  ingredients: [
    "Chocolate meio amargo",
    "Creme de leite",
    "Chocolate para cobertura",
    "Cacau em pó"
  ],
  price: 5.50
},



    // ----------------------------------------------
    // PÃES E FOLHADOS — p36 até p40
    // ----------------------------------------------

   
/* ==========================================
   PÃES E FOLHADOS — DOCES & DELÍCIAS
   5 PRODUTOS
========================================== */

{
  id: "p36",
  category: "paes",
  name: "Croissant tradicional",
  description: "Clássico croissant francês preparado com massa folhada e manteiga, assado até atingir uma casquinha dourada e crocante, com interior leve e delicado. Ideal para acompanhar um café.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Leite",
    "Água",
    "Açúcar",
    "Fermento biológico",
    "Sal",
    "Ovos para pincelar"
  ],
  price: 12.90
},

{
  id: "p37",
  category: "paes",
  name: "Pão francês",
  description: "Pão tradicional de padaria, com casquinha dourada e crocante e miolo leve e macio. Uma escolha clássica para o café da manhã ou lanche da tarde. Vendido por unidade.",
  ingredients: [
    "Farinha de trigo",
    "Água",
    "Fermento biológico",
    "Sal",
    "Melhorador de farinha"
  ],
  price: 2.50
},

{
  id: "p38",
  category: "paes",
  name: "Pão integral multigrãos",
  description: "Pão artesanal de textura macia e casca rústica, preparado com farinha integral e uma combinação de sementes e grãos. Vendido inteiro, ideal para fatiar e compartilhar.",
  ingredients: [
    "Farinha de trigo integral",
    "Farinha de trigo",
    "Água",
    "Fermento biológico",
    "Aveia",
    "Linhaça",
    "Gergelim",
    "Sementes de girassol",
    "Óleo vegetal",
    "Açúcar mascavo",
    "Sal"
  ],
  price: 17.90
},

{
  id: "p39",
  category: "paes",
  name: "Baguete francesa",
  description: "Baguete artesanal de formato alongado, com casca dourada e crocante e miolo leve e aerado. Perfeita para acompanhar manteiga, queijos ou preparar sanduíches.",
  ingredients: [
    "Farinha de trigo",
    "Água",
    "Fermento biológico",
    "Sal"
  ],
  price: 13.90
},

{
  id: "p40",
  category: "paes",
  name: "Brioche amanteigado",
  description: "Pão artesanal de massa delicadamente adocicada, enriquecida com manteiga, ovos e leite. Possui textura extremamente macia e superfície dourada, ideal para acompanhar cafés e bebidas quentes.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Ovos",
    "Leite integral",
    "Açúcar",
    "Fermento biológico",
    "Sal"
  ],
  price: 11.90
},


    // ----------------------------------------------
    // SUCOS E VITAMINAS — p41 até p50
    // ----------------------------------------------

    
/* ==========================================
   SUCOS E VITAMINAS — DOCES & DELÍCIAS
   10 PRODUTOS
========================================== */

{
  id: "p41",
  category: "bebidas",
  name: "Suco de abacaxi com hortelã",
  description: "Suco refrescante preparado com abacaxi e folhas frescas de hortelã. Uma combinação tropical, levemente cítrica e aromática. Servido gelado em copo de 300 ml.",
  ingredients: [
    "Abacaxi fresco",
    "Folhas de hortelã",
    "Água filtrada",
    "Gelo"
  ],
  price: 12.90
},

{
  id: "p42",
  category: "bebidas",
  name: "Suco de laranja natural",
  description: "Suco preparado com laranjas frescas, espremidas na hora para preservar o sabor natural da fruta. Refrescante e servido gelado em copo de 300 ml.",
  ingredients: [
    "Laranja fresca",
    "Gelo"
  ],
  price: 11.90
},

{
  id: "p43",
  category: "bebidas",
  name: "Suco de maracujá",
  description: "Suco tropical preparado com polpa de maracujá, equilibrando o sabor marcante da fruta com uma refrescância especial. Servido gelado em copo de 300 ml.",
  ingredients: [
    "Polpa de maracujá",
    "Água filtrada",
    "Açúcar",
    "Gelo"
  ],
  price: 12.90
},

{
  id: "p44",
  category: "bebidas",
  name: "Suco de melancia",
  description: "Suco leve e refrescante preparado com melancia fresca, perfeito para os dias mais quentes. Servido gelado em copo de 300 ml.",
  ingredients: [
    "Melancia fresca",
    "Gelo"
  ],
  price: 11.90
},

{
  id: "p45",
  category: "bebidas",
  name: "Suco de morango",
  description: "Suco preparado com morangos selecionados, proporcionando sabor frutado e uma textura delicada. Servido gelado em copo de 300 ml.",
  ingredients: [
    "Morangos frescos",
    "Água filtrada",
    "Açúcar",
    "Gelo"
  ],
  price: 13.90
},

{
  id: "p46",
  category: "bebidas",
  name: "Vitamina de abacate",
  description: "Vitamina cremosa preparada com abacate fresco e leite gelado, resultando em uma bebida suave e de textura aveludada. Servida em copo de 350 ml.",
  ingredients: [
    "Abacate fresco",
    "Leite integral",
    "Açúcar",
    "Gelo"
  ],
  price: 16.90
},

{
  id: "p47",
  category: "bebidas",
  name: "Vitamina de banana com aveia",
  description: "Combinação de banana madura, leite gelado e aveia em flocos, preparada para proporcionar uma textura cremosa e sabor delicado. Servida em copo de 350 ml.",
  ingredients: [
    "Banana madura",
    "Leite integral",
    "Aveia em flocos",
    "Mel",
    "Gelo"
  ],
  price: 15.90
},

{
  id: "p48",
  category: "bebidas",
  name: "Vitamina de banana com chocolate",
  description: "Vitamina cremosa preparada com banana madura, leite gelado e chocolate, finalizada com raspas de chocolate. Uma combinação irresistível servida em copo de 350 ml.",
  ingredients: [
    "Banana madura",
    "Leite integral",
    "Chocolate em pó",
    "Calda de chocolate",
    "Raspas de chocolate",
    "Gelo"
  ],
  price: 17.90
},

{
  id: "p49",
  category: "bebidas",
  name: "Vitamina de mamão",
  description: "Vitamina preparada com mamão maduro e leite gelado, oferecendo sabor suave e textura cremosa. Servida em copo de 350 ml.",
  ingredients: [
    "Mamão papaia",
    "Leite integral",
    "Mel",
    "Gelo"
  ],
  price: 15.90
},

{
  id: "p50",
  category: "bebidas",
  name: "Vitamina de morango",
  description: "Vitamina cremosa preparada com morangos frescos e leite gelado, com sabor delicado e frutado. Servida em copo de 350 ml.",
  ingredients: [
    "Morangos frescos",
    "Leite integral",
    "Açúcar",
    "Gelo"
  ],
  price: 16.90
},


    // ----------------------------------------------
    // TORTAS — p51 até p60
    // ----------------------------------------------

    
/* ==========================================
   TORTAS DOCES E SALGADAS — DOCES & DELÍCIAS
   10 PRODUTOS | FATIAS INDIVIDUAIS
========================================== */

{
  id: "p51",
  category: "tortas",
  name: "Torta banoffee",
  description: "Torta artesanal com base crocante de biscoito, doce de leite cremoso, rodelas de banana e uma generosa camada de chantilly, finalizada com canela. Servida em fatia individual.",
  ingredients: [
    "Biscoito maisena",
    "Manteiga",
    "Doce de leite",
    "Banana",
    "Creme de leite fresco",
    "Açúcar",
    "Canela em pó"
  ],
  price: 17.90
},

{
  id: "p52",
  category: "tortas",
  name: "Cheesecake de morango",
  description: "Cheesecake de textura delicada e cremosa, preparado com base amanteigada de biscoito e creme de cream cheese, finalizado com calda de morangos e frutas frescas. Servido em fatia individual.",
  ingredients: [
    "Biscoito maisena",
    "Manteiga",
    "Cream cheese",
    "Creme de leite",
    "Açúcar",
    "Ovos",
    "Baunilha",
    "Morangos frescos",
    "Geleia de morango"
  ],
  price: 19.90
},

{
  id: "p53",
  category: "tortas",
  name: "Torta de chocolate meio amargo",
  description: "Torta de base crocante e recheio aveludado de ganache de chocolate meio amargo, finalizada com raspas de chocolate. Uma sobremesa intensa e cremosa. Servida em fatia individual.",
  ingredients: [
    "Biscoito de chocolate",
    "Manteiga",
    "Chocolate meio amargo",
    "Creme de leite",
    "Açúcar",
    "Raspas de chocolate"
  ],
  price: 18.90
},

{
  id: "p54",
  category: "tortas",
  name: "Torta de limão com merengue",
  description: "Torta com massa amanteigada, recheio cremoso de limão e cobertura de merengue delicadamente dourado. Uma combinação equilibrada entre o doce e o cítrico. Servida em fatia individual.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Açúcar",
    "Leite condensado",
    "Creme de leite",
    "Suco de limão",
    "Raspas de limão",
    "Claras de ovos"
  ],
  price: 16.90
},

{
  id: "p55",
  category: "tortas",
  name: "Torta de morango com creme",
  description: "Torta artesanal com base crocante e recheio suave de creme confeiteiro, coberta com morangos frescos e uma delicada geleia de brilho. Servida em fatia individual.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Açúcar",
    "Leite integral",
    "Ovos",
    "Amido de milho",
    "Baunilha",
    "Morangos frescos",
    "Geleia de brilho"
  ],
  price: 18.90
},

{
  id: "p56",
  category: "tortas",
  name: "Torta salgada de presunto e queijo",
  description: "Torta assada com massa dourada e macia, recheada com presunto, queijo muçarela e creme suave. Uma opção saborosa para acompanhar cafés e bebidas. Servida em fatia individual.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Ovos",
    "Óleo vegetal",
    "Fermento químico",
    "Presunto",
    "Queijo muçarela",
    "Requeijão cremoso",
    "Sal",
    "Orégano"
  ],
  price: 15.90
},

{
  id: "p57",
  category: "tortas",
  name: "Torta salgada de carne moída",
  description: "Torta artesanal de massa levemente dourada, recheada com carne bovina moída e temperos selecionados. Uma combinação de textura macia e sabor caseiro. Servida em fatia individual.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Ovos",
    "Óleo vegetal",
    "Fermento químico",
    "Carne bovina moída",
    "Cebola",
    "Alho",
    "Tomate",
    "Salsinha",
    "Sal",
    "Pimenta-do-reino"
  ],
  price: 16.90
},

{
  id: "p58",
  category: "tortas",
  name: "Torta de espinafre com ricota",
  description: "Torta salgada de massa dourada e recheio cremoso de espinafre refogado com ricota. Uma combinação suave e aromática, servida em fatia individual.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Ovos",
    "Leite",
    "Espinafre",
    "Ricota",
    "Cebola",
    "Alho",
    "Creme de leite",
    "Sal",
    "Noz-moscada"
  ],
  price: 16.90
},

{
  id: "p59",
  category: "tortas",
  name: "Torta salgada de frango",
  description: "Torta artesanal com massa macia e dourada, recheada com frango desfiado, requeijão cremoso e temperos caseiros. Servida quentinha em fatia individual.",
  ingredients: [
    "Farinha de trigo",
    "Leite",
    "Ovos",
    "Óleo vegetal",
    "Fermento químico",
    "Frango desfiado",
    "Requeijão cremoso",
    "Cebola",
    "Alho",
    "Tomate",
    "Salsinha",
    "Sal"
  ],
  price: 15.90
},

{
  id: "p60",
  category: "tortas",
  name: "Torta cremosa de palmito",
  description: "Torta salgada de massa delicada e dourada, recheada com palmito e creme suave, temperado com cebola e ervas. Servida em fatia individual.",
  ingredients: [
    "Farinha de trigo",
    "Manteiga",
    "Ovos",
    "Leite",
    "Palmito",
    "Creme de leite",
    "Requeijão cremoso",
    "Cebola",
    "Alho",
    "Salsinha",
    "Sal",
    "Pimenta-do-reino"
  ],
  price: 17.90
},

  ]
};
