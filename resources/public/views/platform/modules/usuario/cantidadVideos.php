<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include_once ($_SERVER['DOCUMENT_ROOT'].'/cc_imagen_privada001_warning/miguel_claros/conf.php');

    require_once(DATABASE_PATH.'DataSource.php');
    require_once(PDO_PATH.'usuarioDao.php');
    require_once(PDO_PATH.'mediaDao.php');
    require_once(MODEL_PATH.'usuario.php');
    require_once(MODEL_PATH.'media.php');

    if(isset($_POST['idUsuario'])){
        $id = $_POST['idUsuario'];
        
        if(!empty($id)){
            $objUsuario=mediaDao::cantidadVideos($id);
            if($objUsuario){
                $success=array("message"=>"Cantidad Videos","result"=>$objUsuario,"status"=>"1");
                echo json_encode($success);
            }else{
                $failed=array("message"=>"No se pudo traer la cantidad de videos","result"=>"","status"=>"0");
                echo json_encode($failed);
            }
        }else{
            $failed = array("message","El identificador del usuario esta vacio","result"=>"","status"=>"0");
            echo json_encode($failed);
        }
    }else{
        $failed = array("message","Los campos vacios","result"=>"","status"=>"0");
        echo json_encode($failed);
    }
    
    
?>