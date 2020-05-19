var configValor = {
  "tabelaPreco":[
    {
      "tipoPintura":"parede",
      "maoObra":8,
      "valorMaterial":[0,3.5,4.5,6]
    },
    {
      "tipoPintura":"teto",
      "maoObra":8,
      "valorMaterial":[0,3.5,4.5,6]
    },
    {
      "tipoPintura":"rodape",
      "maoObra":8,
      "valorMaterial":[0,3.5,4.5,6]
    },
    {
      "tipoPintura":"moldura",
      "maoObra":2.5,
      "valorMaterial":[0,3.5,4.5,6]
    },
    {
      "tipoPintura":"porta",
      "maoObra":200,
      "valorMaterial":100
    }
  ]
};
var configTamanho = {
  "perimetroTeto":[
    {
      "tipoComodo":"dormitorio",
      "tamanho":[9.3,11.2,13.4,16.9,20.9]
    },
    {
      "tipoComodo":"banheiro",
      "tamanho":[2.3,3.3,4.5,7.9,12.2]
    },
    {
      "tipoComodo":"sala",
      "tamanho":[20.1,23.8,27.9,38.5,50.7]
    },
    {
      "tipoComodo":"cozinha",
      "tamanho":[4.6,5.7,6.7,13.8,23.2]
    },
    {
      "tipoComodo":"halldeentrada",
      "tamanho":[2.2,3.6,5.4,9.2,13.9]
    },
    {
      "tipoComodo":"corredor",
      "tamanho":[3.3,5,6.8,10.6,14.9]
    },
    {
      "tipoComodo":"sacada",
      "tamanho":[2.3,4,12,16,25]
    },
    {
      "tipoComodo":"lavanderia",
      "tamanho":[1.7,2.6,3.6,5.7,8.4]
    }
  ],
  "perimetroMoldura":[
    {
      "tipoComodo":"dormitorio",
      "tamanho":[12.2,13.4,14.6,16.5,18.3]
    },
    {
      "tipoComodo":"banheiro",
      "tamanho":[6.1,7.3,8.5,11.3,14]
    },
    {
      "tipoComodo":"sala",
      "tamanho":[18.3,19.8,21.3,25,28.7]
    },
    {
      "tipoComodo":"cozinha",
      "tamanho":[9.1,9.8,10.4,15.1,19.8]
    },
    {
      "tipoComodo":"halldeentrada",
      "tamanho":[6.1,7.9,9.8,13.3,16.8]
    },
    {
      "tipoComodo":"corredor",
      "tamanho":[7.3,9,10.7,13.9,17.1]
    },
    {
      "tipoComodo":"sacada",
      "tamanho":[6,8,14,16,20]
    },
    {
      "tipoComodo":"lavanderia",
      "tamanho":[5.5,6.6,7.6,9.6,11.6]
    }
  ],
  "perimetroParede":[
    {
      "tipoComodo":"dormitorio",
      "tamanho":[12.19,13.41,14.63,16.46,18.29]
    },
    {
      "tipoComodo":"banheiro",
      "tamanho":[6.1,7.32,8.53,11.28,14.02]
    },
    {
      "tipoComodo":"sala",
      "tamanho":[18.29,19.81,21.34,24.99,28.65]
    },
    {
      "tipoComodo":"cozinha",
      "tamanho":[9.14,9.75,10.36,15.09,19.81]
    },
    {
      "tipoComodo":"halldeentrada",
      "tamanho":[6.10,7.92,9.75,13.26,16.76]
    },
    {
      "tipoComodo":"corredor",
      "tamanho":[7.32,8.99,10.67,13.87,17.07]
    },
    {
      "tipoComodo":"sacada",
      "tamanho":[3,4,7,8,10]
    },
    {
      "tipoComodo":"lavanderia",
      "tamanho":[5.49,6.55,7.62,9.60,11.58]
    }
  ],
  "perimetroRodape":[
    {
      "tipoComodo":"dormitorio",
      "tamanho":[12.2,13.4,14.6,16.5,18.3]
    },
    {
      "tipoComodo":"banheiro",
      "tamanho":[6.1,7.3,8.5,11.3,14]
    },
    {
      "tipoComodo":"sala",
      "tamanho":[18.3,19.8,21.3,25,28.7]
    },
    {
      "tipoComodo":"cozinha",
      "tamanho":[9.1,9.8,10.4,15.1,19.8]
    },
    {
      "tipoComodo":"halldeentrada",
      "tamanho":[6.1,7.9,9.8,13.3,16.8]
    },
    {
      "tipoComodo":"corredor",
      "tamanho":[7.3,9,10.7,13.9,17.1]
    },
    {
      "tipoComodo":"sacada",
      "tamanho":[6,8,14,16,20]
    },
    {
      "tipoComodo":"lavanderia",
      "tamanho":[5.5,6.6,7.6,9.6,11.6]
    }
  ],
  "alturaParede":[2.7,3.5,5]
};
//Sempre que adicionar um novo cupom ele tem que estar criado no ploomes, as options dentro de PloomesDeals.php tem que ser atualizadas pra só depois criar aqui
var cuponsDesconto = {
  "cuponsAtivos":[
    {
      "idCupom":"quintoandar20",
      "desconto":0.8,
      "validadeInicio":"15-08-2019",
      "validadeFinal":"30-10-2019"
    },
    {
      "idCupom":"ECM10",
      "desconto":0.9,
      "validadeInicio":"25-10-2019",
      "validadeFinal":"01-01-2029"
    },
    {
      "idCupom":"ECM15",
      "desconto":0.85,
      "validadeInicio":"25-10-2019",
      "validadeFinal":"31-12-2019"
    },
    {
      "idCupom":"CLARO10",
      "desconto":0.9,
      "validadeInicio":"30-01-2020",
      "validadeFinal":"01-01-2029"
    },
    {
      "idCupom":"VANTAGEM5A",
      "desconto":0.88,
      "validadeInicio":"19-05-2020",
      "validadeFinal":"31-12-2020"
    }
  ]
};