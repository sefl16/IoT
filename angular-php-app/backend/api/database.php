<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allo-Headers: Origin, X-Requsted-With, Content-Type, Accept");
define('DB_HOST', 'localhost');
define('DB_USER' 'root');
define('DB_pass', 'testpass');
define('DB_NAME', 'grupptest');

function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();
 ?>
