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
            $objUsuario = usuarioDao::usuarioId($id);

            if($objUsuario){

                $perfil = "../../../../../../../wp-content/uploads/avatars/".$id;
                $portada = "../../../../../../../wp-content/uploads/buddypress/members/".$id;
                $cultural = "https://conexioncultural.com.co/";
                $homeCultural = "/home/concultu/public_html/";

                if(is_dir($portada)){
                    $portada.="/cover-image";
                    $imagenPortada = glob($portada."/*");
                    if(!empty($imagenPortada)){
                        $img2 = $imagenPortada[0];
                    }else{
                        $img2 = $imagenPortada;
                    }
                    

                    if(!empty($img2)){
                        $img2 = realpath($img2).PHP_EOL;
                        $img2 = str_replace($homeCultural,$cultural,$img2);
                    }else{
                        $img2 = "$cultural"."miguel_claros/vendor/conexion_cultural/img/portada.jpeg";
                    }
                }else{
                    $img2 = "$cultural"."miguel_claros/vendor/conexion_cultural/img/portada.jpeg";
                }

                if(is_dir($perfil)){
                    $imagenPerfil = glob($perfil."/*");
                    
                    if(!empty($imagenPerfil)){
                        $img = $imagenPerfil[0];
                    }else{
                        $img = $imagenPerfil;
                    }
                    

                    if(!empty($img)){
                        $img = realpath($img).PHP_EOL;
                        $img = str_replace($homeCultural,$cultural,$img);
                    }else{
                        $img = "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png";
                    }

                }else{
                    $img = "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png";
                }

                $imagenes = array("perfil"=>$img,"portada"=>$img2);
                $success = array("message"=>"","result"=>$imagenes,"status"=>"1");
                echo json_encode($success);
                
            }else{
                $failed=array("message"=>"El identificador no pertenece a ningun usuario","result"=>"","status"=>"0");
                echo json_encode($failed);
            }
        }else{
            $failed=array("message"=>"El identificador del usuario esta vacio","result"=>"","status"=>"0");
            echo json_encode($failed);
        }
    }else{
        $failed=array("message"=>"No ha llegado los campos necesarios","result"=>"","status"=>"0");
        echo json_encode($failed);
    }

?>