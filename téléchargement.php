<?php

$filename = "rapport de stage.docx";
$file = "site".$filename;

header('Content-type: application/octet-stream');
header("Content-Type: ".mime_content_type($file));
header("Content-Disposition: attachment; filename=".$filename);

readfile($file);
?>
