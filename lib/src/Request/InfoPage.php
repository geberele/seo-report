<?php

namespace SeoReport\Request;

class InfoPage {
  var $res;

  public function __construct() {
    $this->res = 'tt';
//    $client = new GuzzleHttp\Client();
//    $this->res = $client->request('GET', 'https://www.google.com');
  }

  public function getResult() {
    return $this->res;
  }

}
