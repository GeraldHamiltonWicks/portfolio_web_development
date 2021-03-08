var numero_de_produtos_no_carrinho = 0;
var valor_total = 0;

var produtos_info = [
  [
    [0                         , 0                        , 0                          ],//Quantity
    [15                        , 20                       , 25                         ],//Price
    ["Camisa Branca"           , "Camisa Preta"           , "Camisa Amarela"           ],//Name
    ["White T-shirt(s)"        , "Black T-shirt(s)"        , "Yellow T-shirt"        ],//Name plural
    ["images/camisa_branca.jpg", "images/camisa_preta.jpg", "images/camisa_amarela.jpg"],//Local
    ["100% Algodão"            , "100% Algodão"           , "100% Algodão"             ],//description
    ["White%20T-shirt(s)"      , "Black%20T-shirt(s)"      , "Yellow%20T-shirt(s)"      ]//wpp_text
  ],


  [
    [0                       , 0                      , 0                       ],//Quantity
    [25                      , 30                     , 35                      ],//Price
    ["Short Preto"           , "Short Azul"           , "Short Verde"           ],//Name
    ["Black Short(s)"        , "Blue Short(s)"        , "Green Short(s)"        ],//Name plural
    ["images/short_preto.jpg", "images/short_azul.jpg", "images/short_verde.jpg"],//Local
    ["100% Confortável"      , "100% Confortável"     , "100% Confortável"      ],//description
    ["Black%20Short(s)"      , "Blue%20Short(s)"      , "Green%20Short(s)"      ]//wpp_text


  ],
  [
    [0                        , 0                        , 0                         , 0                      ],//Quantity
    [3                        , 5                        , 7                         , 9                      ],//Price
    ["Sapato Verde"           , "Sapato Preto"           , "Sapato Branco"           , "Sapato Amarelo"       ],//Name
    ["Green Shoes"            , "Black Shoes"            , "White Shoes"             , "Yellow Shoes"         ],//Name plural
    ["images/sapato_verde.jpg", "images/sapato_preto.jpg", "images/sapato_branco.jpg", "images/sapato_amarelo"],//Local
    ["Leve e confortável"     , "Leve e confortável"     , "Leve e confortável"      , "Leve e confortável"   ],//description
    ["Green%20Shoes"          , "Black%20Shoes"          , "White%20Shoes"           , "Yellow%20Shoes"         ]//wpp_text
  ]

];
