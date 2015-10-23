<?php
$loader = require __DIR__ . '/vendor/autoload.php';
//$loader->add('SeoReport\\', __DIR__ . '/src/');
print_r($loader);

//require "src/InfoPage.php";
//$test = new \SeoReport\Request\InfoPage();

use SeoReport\Request\InfoPage;

$report = new InfoPage();
//
$data = array($report->getResult());
//header('Content-Type: application/json');
//echo json_encode($report);
