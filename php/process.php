<?php

ob_start();
  $fname = filter_input(INPUT_POST, 'fname');
  $lname = filter_input(INPUT_POST, 'lname');
  $email = filter_input(INPUT_POST, 'email');
  $comments = filter_input(INPUT_POST, 'comments');

  try{
      require_once('connect.php');
      $query = "INSERT INTO visitor_info (fname, lname, email, comments) VALUES (:fname, :lname, :email, :comments);";
      $statement = $db->prepare($query);
      $statement->bindValue(':fname', $fname);
      $statement->bindValue(':lname', $lname);
      $statement->bindValue(':email', $email);
      $statement->bindValue(':comments', $comments);
      $statement->execute();
      $statement->closeCursor();
      header('location: ../contact_me/contact_me.html');
    }catch(PDOException $e){
      echo "$e->getMessage()";
    }

ob_flush();
?>
