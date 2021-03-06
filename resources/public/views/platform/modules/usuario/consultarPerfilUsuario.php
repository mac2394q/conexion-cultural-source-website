<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include_once ($_SERVER['DOCUMENT_ROOT'].'/cc_imagen_privada001_warning/miguel_claros/conf.php');

    require_once(DATABASE_PATH.'DataSource.php');
    require_once(PDO_PATH.'usuarioDao.php');
    require_once(PDO_PATH.'profileDataDao.php');
    require_once(MODEL_PATH.'usuario.php');
    require_once(MODEL_PATH.'profileData.php');

    if(isset($_POST['idUsuario'])){
    $id = $_POST['idUsuario'];

        if(!empty($id)){
            $objProfile=profileDataDao::profileId($id);
            if(!empty($objProfile)){
                #print_r($objProfile);
                #echo "<br/> <br/> <br/>";
                #$respuesta = array("message"=>"Perfil Del Usuario","result"=>$objProfile,"status"=>"1");
                #echo "esto es una prueba de que el usuario se encontro";
                #print_r($objProfile);
                $arr = array('message' => "Perfil del Usuario", 'result'=>$objProfile, 'status' => '1');

                echo json_encode($arr);
                #$respuesta = array("result"=>$objProfile);
                #echo json_encode($respuesta);
            }else{
                $failed = array("message"=>"usuario no encontrado","result"=>"","status"=>"0");
                echo json_encode($failed);
            }
        }else{
            $failed = array("message"=>"El identificador no fue recibido","result"=>"","status"=>"0");
            echo json_encode($failed);
        }
    }
?>