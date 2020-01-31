<?php

require_once ($_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php') ;
//require_once ( '/home/newton/git/sites/site-maonaroda/vendor/autoload.php') ;

class PloomesDeals
{
  const CAMPOS_ADICIONAIS =
    [
      'comodos'            => [ 'options' => false, 'fieldKey' => 'deal_EA36AEF5-EA50-4AEC-B7AF-BFB9237DEB7A', 'fieldType' => 'BigStringValue'],
      'observacoes'        => [ 'options' => false, 'fieldKey' => 'deal_A9580C0E-30CD-42BC-B233-3C30D2DB545D', 'fieldType' => 'BigStringValue'],
      'briefingDoCliente'  => [ 'options' => false, 'fieldKey' => 'deal_2BCFB607-C75A-4AD2-AA7A-29C53AACA9E3', 'fieldType' => 'BigStringValue'],
      'meioContato'        => [ 'options' => false, 'fieldKey' => 'deal_19A298CE-F964-4786-846C-1CC103FB8854', 'fieldType' => 'BigStringValue'],
      'valorOrcado'        => [ 'options' => false, 'fieldKey' => 'deal_F3301037-1BFC-45AC-8599-E4E02B234C11', 'fieldType' => 'DecimalValue'],
      'valorDesconto'      => [ 'options' => false, 'fieldKey' => 'deal_19626A2C-2D75-42F5-BDBE-280EC287ADA8', 'fieldType' => 'DecimalValue'],
      'coefDesconto'       => [ 'options' => false, 'fieldKey' => 'deal_C348AF39-FCC8-49CB-89F8-60B6870CE0AA', 'fieldType' => 'DecimalValue'],
      'nomeDaPagina'       => [ 'options' => false, 'fieldKey' => 'deal_65F301E0-1448-4C1C-871F-C91F55D04FF0', 'fieldType' => 'StringValue'],
      'zipcode'            => [ 'options' => false, 'fieldKey' => 'deal_658B1E0B-1BAF-4CB7-848D-BC9B2D252AF7', 'fieldType' => 'StringValue'],
      //Sempre que for adicionado um novo cupom ele deve ser adicionado tbm as options abaixo
      'cupomDesconto'      => [ 'options' => true,  'fieldKey' => 'deal_AE209A6A-95AD-46D0-9664-0B0C82E5A165', 'fieldType' => 'IntegerValue'],
      'tipoImovel'         => [ 'options' => true,  'fieldKey' => 'deal_08B06064-CD82-416D-B6E2-3D0C57845495', 'fieldType' => 'IntegerValue'],
      'tipoPintura'        => [ 'options' => true,  'fieldKey' => 'deal_A65E8BF6-98DF-48F2-8F04-2774ABFCA018', 'fieldType' => 'IntegerValue'],
//      'meioContato'        => [ 'options' => true,  'fieldKey' => 'deal_19A298CE-F964-4786-846C-1CC103FB8854', 'fieldType' => 'IntegerValue'],
      'dataInicio'         => [ 'options' => true,  'fieldKey' => 'deal_8ACCDE88-AD83-4967-83F9-BDE2BEA017D0', 'fieldType' => 'IntegerValue'],
      'canal'              => [ 'options' => true,  'fieldKey' => 'deal_49544915-6DEB-424E-B32D-6FA80FBE599A', 'fieldType' => 'IntegerValue'],
      'tamanhoImovel'      => [ 'options' => true,  'fieldKey' => 'deal_3F81B4C6-FBF2-4849-A978-E48DCAA6E31D', 'fieldType' => 'IntegerValue'],
      'alturaParede'       => [ 'options' => true,  'fieldKey' => 'deal_080FC833-40DB-4714-85AD-08E6443EEA47', 'fieldType' => 'IntegerValue'],
      'tipoMaterial'       => [ 'options' => true,  'fieldKey' => 'deal_ADCCC4F7-E4DF-4BF2-AB06-C379EA53DEC2', 'fieldType' => 'IntegerValue'],

    ];
  const OPCOES =
    [
      'tamanhoImovel' => [
                      [
                        "Id" => 167616,
                        "TableId" => 10617,
                        "Name" => "Até 50m²",
                      ],
                      [
                        "Id" => 167617,
                        "TableId" => 10617,
                        "Name" => "Até 75m²",
                      ],
                      [
                        "Id" => 167618,
                        "TableId" => 10617,
                        "Name" => "Até 100m²",
                      ],
                      [
                        "Id" => 167619,
                        "TableId" => 10617,
                        "Name" => "Até 150m²",
                      ],
                      [
                        "Id" => 167620,
                        "TableId" => 10617,
                        "Name" => "Maior que 150m²",
                      ],
                    ],
      'alturaParede' =>
                    [
                      [
                        "Id" => 167695,
                        "TableId" => 10622,
                        "Name" => "Até 2,70m",
                      ],
                      [
                        "Id" => 167696,
                        "TableId" => 10622,
                        "Name" => "Até 4,5m",
                      ],
                      [
                        "Id" => 167697,
                        "TableId" => 10622,
                        "Name" => "Acima de 4,50m",
                      ],
                    ],
      'tipoMaterial' =>
                    [
                      [
                        "Id" => 167701,
                        "TableId" => 10623,
                        "Name" => "Tinta 1 - Clássica",
                      ],
                      [
                         "Id" => 167702,
                         "TableId" => 10623,
                         "Name" => "Tinta 2 - Fosco Completo",
                      ],
                      [
                         "Id" => 167703,
                         "TableId" => 10623,
                         "Name" => "Tinta 3 - Toque de Seda",
                      ],
                      [
                         "Id" => 167704,
                         "TableId" => 10623,
                         "Name" => "Não desejo  material",
                      ],
                    ],
      'dataInicio' =>
                    [
                      [
                        "Id" => 165891,
                        "TableId" => 10319,
                        "Name" => "Estou apenas cotando no momento",
                      ],
                      [
                        "Id" => 165892,
                        "TableId" => 10319,
                        "Name" => "Dentro dos próximos 30 dias",
                      ],
                      [
                        "Id" => 165893,
                        "TableId" => 10319,
                        "Name" => "O mais rápido possível",
                      ],
                    ],
//      'meioContato' =>
//                    [
//                      [
//                        "Id" => 173942,
//                        "TableId" => 11135,
//                        "Name" => "Telefone",
//                      ],
//                      [
//                        "Id" => 173941,
//                        "TableId" => 11135,
//                        "Name" => "Whatsapp",
//                      ],
//                      [
//                        "Id" => 173943,
//                        "TableId" => 11135,
//                        "Name" => "E-mail",
//                      ],
//                    ],
      'tipoPintura' =>
                    [
                      [
                        "Id" => 130869,
                        "TableId" => 8142,
                        "Name" => "Interna e Externa",
                      ],
                      [
                        "Id" => 130870,
                        "TableId" => 8142,
                        "Name" => "Externa",
                      ],
                      [
                        "Id" => 130871,
                        "TableId" => 8142,
                        "Name" => "Interna",
                      ],
                    ],
//  !!!IMPORTANTE!!!     Sempre adicionar o name do cupom com as letras maiúsculas, intependente de como está cadastrado lá no ploomes
      'cupomDesconto' =>
                    [
                      [
                        "Id" => 165900,
                        "TableId" => 10322,
                        "Name" => "ECM15",
                      ],
                      [
                        "Id" => 165901,
                        "TableId" => 10322,
                        "Name" => "ecm10",
                      ],
                      [
                        "Id" => 165902,
                        "TableId" => 10322,
                        "Name" => "QUINTO20",
                      ],
                      [
                        "Id" => 814836,
                        "TableId" => 10322,
                        "Name" => "ECM10",
                      ],
                      [
                        "Id" => 860318,
                        "TableId" => 10322,
                        "Name" => "CUPOMPARATRACKING",
                      ],
                      [
                        "Id" => 1148775,
                        "TableId" => 10322,
                        "Name" => "CLARO10",
                      ],
                    ],
      'tipoImovel' =>
                    [
                      [
                        "Id" => 130874,
                        "TableId" => 8144,
                        "Name" => "Comercial", //No Ploomes o André renomeou isso para Loja, porém como em toda a estrutura já está comercial, mantive comercial para não precisar ajustar também no front inteiro
                      ],
                      [
                        "Id" => 130875,
                        "TableId" => 8144,
                        "Name" => "Apartamento",
                      ],
                      [
                        "Id" => 130876,
                        "TableId" => 8144,
                        "Name" => "Casa",
                      ],
                      [
                        "Id" => 602136,
                        "TableId" => 8144,
                        "Name" => "Outros",
                      ],
                      [
                        "Id" => 179759,
                        "TableId" => 8144,
                        "Name" => "Escritório",
                      ],
                    ],
      'canal' =>
                    [
                      [
                        "Id" => 186957,
                        "TableId" => 11662,
                        "Name" => "Site",
                      ],
                    ],
    ];

  private $deals = [];

  private $ploomesConfig;


  public function __construct()
  {
    $this->ploomesConfig = new PloomesConfig();
  }

  public function getFieldData($dataType)
  {
    if (isset(self::CAMPOS_ADICIONAIS[$dataType]))
      return self::CAMPOS_ADICIONAIS[$dataType];

    return false;
  }

  public function findOptionId($optionType,$option)
  {
    if (isset(self::CAMPOS_ADICIONAIS[$optionType]))
    {
      if (self::CAMPOS_ADICIONAIS[$optionType]['options'])
      {
        $itens = self::OPCOES[$optionType];
        $key = array_search($option,array_column($itens,'Name'));
        return isset($itens[$key]['Id']) ? $itens[$key]['Id'] : false  ;
      }
    }

    return false;
  }

  public function createOtherProperties($properties)
  {
    $otherProperties = [];
    foreach ($properties as $index => $property)
    {
      if (!empty($property))
      {
        $fieldData = $this->getFieldData($index);
        if ($fieldData)
        {
          $optionId = false;
          if ($fieldData['options'])
          {
            $optionId = $this->findOptionId($index,$property);
          }

          $otherProperties[] = [
            'FieldKey' => $fieldData['fieldKey'],
            $fieldData['fieldType'] => ($optionId) ? $optionId : $property,
          ];
        }
      }
    }

    return $otherProperties;
  }

  private function setDealData($data)
  {
    if (isset($data['title']))
      $this->deals['Title'] = $data['title'];

    if (isset($data['contactId']))
      $this->deals['ContactId'] = $data['contactId'];

    $this->deals['PipelineId'] = 13729; // 'Funil de Vendas'

    $this->deals['StageId'] = 65520; // 'Lead'

    $this->deals['StatusId'] = 1; // 'Em Aberto'

    if (!empty($data['origin']))
      $this->deals['OriginId'] = PloomesContacts::getOrigem($data['origin']);

    $this->deals['OwnerId'] = 53012; //Bruna Lodi


  /*  todo Para OtherProperties teremos uma lista de valores de propriedades que os campos adicionais no Ploomes possuem,
           conforme o exemplo abaixo:
                    "Id": 8226664,
                    "FieldKey": "deal_C3C5FA19-7111-4852-8BB9-158948B1823E",
                    "DealId": 1376790,
                    "DeletedDeal": null,
                    "StringValue": null,
                    "BigStringValue": null,
                    "IntegerValue": 130873,
                    "DecimalValue": null,
                    "DateTimeValue": null,
                    "BoolValue": null,
                    "ObjectValueId": 130873,
                    "ObjectValueName": "Sim, mão de obra e material",
                    "UserValueId": null,
                    "UserValueName": null,
                    "UserValueAvatarUrl": null,
                    "ProductValueId": null,
                    "ProductValueName": null,
                    "AttachmentValueId": null,
                    "AttachmentValueName": null,
                    "ContactValueId": null,
                    "ContactValueName": null,
                    "ContactValueTypeId": null,
                    "ContactValueRegister": null
  */
    if (!empty($data['otherProperties']))
      $this->deals['OtherProperties'] = $data['otherProperties'];
  }

  public function insertDeal($data)
  {
    $this->setDealData($data);
    $response = $this->ploomesConfig->ODataObject
                                    ->from('Deals')
                                    ->expand('OtherProperties')
                                    ->post($this->deals);
    return $response;
  }

  public function updateDeal($dealId, $data)
  {
    $this->setDealData($data);
    $response = $this->ploomesConfig->ODataObject
                                    ->from('Deals')
                                    ->whereKey($dealId)
                                    ->expand('OtherProperties')
                                    ->patch($this->deals);

    return $response;
  }

  public function deleteDeal($dealId)
  {
    $response = $this->ploomesConfig->ODataObject
                                    ->from('Deals')
                                    ->whereKey($dealId)
                                    ->delete();

    return $response;
  }

  public function findDeal($dealId)
  {
    return $this->ploomesConfig->ODataObject
                               ->from('Deals')
                               ->whereKey($dealId)
                               ->expand('OtherProperties')
                               ->first();
  }

  public function searchDeal(string $column, string $value)
  {
    return $this->ploomesConfig->ODataObject
                               ->from('Deals')
                               ->where($column,$value)
                               ->first();
  }
}
