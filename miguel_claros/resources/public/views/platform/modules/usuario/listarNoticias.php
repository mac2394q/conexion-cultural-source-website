<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once ($_SERVER['DOCUMENT_ROOT'].'/miguel_claros/conf.php');

require_once(DATABASE_PATH.'DataSource.php');
require_once(PDO_PATH.'usuarioDao.php');
require_once(PDO_PATH.'mediaDao.php');
require_once(MODEL_PATH.'usuario.php');
require_once(MODEL_PATH.'media.php');
   
    $objMedia = mediaDao::listarNoticias();

    if($objMedia){
        $success=array("message"=>"noticias encontrados","result"=>$objMedia,"status"=>"1");
        echo json_encode($success);
    }else{
        $failed = array("message"=>"No se han encontrado noticias","result"=>"","status"=>"0");
        echo json_encode($failed);
    }

?>