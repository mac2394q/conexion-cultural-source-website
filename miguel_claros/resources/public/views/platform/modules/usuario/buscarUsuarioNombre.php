<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include_once ($_SERVER['DOCUMENT_ROOT'].'/miguel_claros/conf.php');

    require_once(DATABASE_PATH.'DataSource.php');
    require_once(PDO_PATH.'usuarioDao.php');
    require_once(PDO_PATH.'profileDataDao.php');
    require_once(MODEL_PATH.'usuario.php');
    require_once(MODEL_PATH.'profileData.php');

    $nombre = $_POST['nombre'];

    if(!empty($nombre)){
        if($objProfile=profileDataDao::listarUsuarioNombre($nombre)){
        
            $respuesta = array("message"=>"Listado de usuarios","result"=>$objProfile,"status"=>"1");
            echo json_encode($respuesta);
        }else{
            $failed = array("message"=>"usuario no encontrado","result"=>"","status"=>"0");
            echo json_encode($failed);
        }
    }else{
        $failed = array("message"=>"El nombre no fue recibido","result"=>"","status"=>"0");
        echo json_encode($failed);
    }
?>