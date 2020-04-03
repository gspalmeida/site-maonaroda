<?php

require_once ($_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php') ;
//require_once ( '/home/newton/git/sites/site-maonaroda/vendor/autoload.php') ;

class PloomesContacts
{
  private $contact = [];

  private $ploomesConfig;

  public function __construct()
  {
    $this->ploomesConfig = new PloomesConfig();
  }

  public static function getOrigem($origem)
  {
    switch ($origem)
    {
      case 'Quinto Andar':
        $retorno = 91477;
        break;
      case 'Em Canto Meu':
        $retorno = 92648;
        break;
      case 'Suvinil':
        $retorno = 108424;
        break;
      case 'WeWork':
        $retorno = 109023;
        break;
      case 'Orgânico':
        $retorno = 120222;
        break;
      case 'Indicação':
        $retorno = 56875;
        break;
      default:
        $retorno = 120222; // Orgânico
    }

    return $retorno;
  }

  private function setContactData($data)
  {
    $this->contact = [];
    $this->contact['TypeId'] = 2; // Pessoa Física

    if (!empty($data['id']))
      $this->contact['Id'] = $data['id'];

    if (!empty($data['name']))
      $this->contact['Name'] = $data['name'];

    $this->contact['StatusId'] = 51792; // Prospecção

    if (!empty($data['email']))
      $this->contact['Email'] = $data['email'];

    if (!empty($data['zipcode']))
      $this->contact['ZipCode'] = PloomesConfig::removeFormat($data['zipcode']);

    if (!empty($data['origin']))
      $this->contact['OriginId'] = self::getOrigem($data['origin']);

    if (!empty($data['phone']))
    {
      list($phonePrefix,$phone) = explode(' ', $data['phone'],2);
      $phonePrefix = '(' . PloomesConfig::removeFormat($phonePrefix) . ')';
      $phone = PloomesConfig::removeFormat($phone);
      $phone = PloomesConfig::formatPhoneNumber($phone);

      $phone = $phonePrefix . ' ' . $phone;
      if (strlen($phone) >= 15)
        $typeId = 2; // Celular
      else
        $typeId = 1; // Comercial

      $phones = ['PhoneNumber' => $phone, 'TypeId' => $typeId, 'CountryId' => 72];
      $this->contact['Phones'][] = $phones;
    }

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
    if (!empty($data['other_properties']))
      $this->contact['OtherProperties'] = $data['other_properties'];
  }

  public function insertContact($data)
  {
    $this->setContactData($data);
    $response = $this->ploomesConfig->ODataObject
                                    ->from('Contacts')
                                    ->expand('Phones')
                                    ->post($this->contact);
    $response = ($response);
    return $response;
  }

  public function updateContact($contactId, $data)
  {
    $this->setContactData($data);
    $response = $this->ploomesConfig->ODataObject
                                    ->from('Contacts')
                                    ->whereKey($contactId)
                                    ->expand('Phones')
                                    ->patch($this->contact);

    return $response;
  }

  /**
   * Remover um contato Ploomes ...
   *
   * @param $contactId
   *
   * @return bool
   */
  public function deleteContact($contactId)
  {
    $response = $this->ploomesConfig->ODataObject
                                    ->from('Contacts')
                                    ->whereKey($contactId)
                                    ->delete();

    return $response;
  }

  /**
   * Pesquisar um contato ...
   *
   * @param $contactId
   *
   * @return array|stdClass|null
   */
  public function findContact($contactId)
  {
    return $this->ploomesConfig->ODataObject
                               ->from('Contacts')
                               ->where('Id',$contactId)
                               ->expand('Phones')
                               ->first();
  }

  /**
   * Efetua a pesquisa em Contacts, conforme os parâmetros passados segundo padrão OData
   *
   * @param $column
   * @param $value
   *
   * @return array|stdClass|null
   */
  public function searchContacts(string $column, string $value)
  {
    return $this->ploomesConfig->ODataObject
                               ->from('Contacts')
                               ->where($column,$value)
                               ->first();
  }
}
