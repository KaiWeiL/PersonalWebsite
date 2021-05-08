<?php

  $dsn = 'mysql:host=localhost;dbname=id12580088_personal_blog';

  try{

    $db = new PDO($dsn, 'id12580088_kai_db', '>trsYl&qg+^)Lr7M');

  }catch(PDOException $e){

    echo "Error: ".($e->getMessage());

  }

?>
