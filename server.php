<?php
$_POST = json_decode(file_get_contents('php://input'), 1);
echo var_dump($_POST);

?>