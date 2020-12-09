<?php 

    header("Access-Control-Allow-Origin: *");   
    header("Content-Type: application/json; charset=UTF-8");
    date_default_timezone_set('America/Bogota');

    include_once ($_SERVER['DOCUMENT_ROOT'].'/cc_imagen_privada001_warning/miguel_claros/conf.php');

    require_once(DATABASE_PATH.'DataSource.php');
    require_once(PDO_PATH.'usuarioDao.php');
    require_once(PDO_PATH.'actividadDao.php');
    require_once(PDO_PATH.'mediaDao.php');
    require_once(MODEL_PATH.'media.php');
    require_once(MODEL_PATH.'actividad.php');
    require_once(MODEL_PATH.'usuario.php');

    if(isset($_POST['idUsuario']) && isset($_FILES['file'])){
        $id = $_POST['idUsuario'];
        $fechaRegistro =  date('Y-m-d H:i:s');
        if(!empty($id)){
            $directorio = "../../../../../../../wp-content/uploads/rtMedia/users/".$id;
            $año = date('Y');
            $mes = date('m');
            
            if(evaluarDirectorio($directorio)){
                $directorio.="/".$año;
                if(evaluarDirectorio($directorio)){
                    $directorio.="/".$mes;
                    if(evaluarDirectorio($directorio)){

                        $encript = hash("crc32",$id);

                        $temp_name = $_FILES['file']['tmp_name'];
                        $name = basename($_FILES['file']['name']);
                        $tamaño = $_FILES['file']['size'];
                        $video = $directorio.'/'.$name;
                        $archivo = move_uploaded_file($temp_name,$video);

                        
                            if($archivo){

                                $idAlbum = 0;
                                $descripcion = '';
                                if(isset($_POST['idAlbum'])){
                                    $idAlbum = $_POST['idAlbum'];

                                    if(!empty($idAlbum)){
                                        $actividadDao1 = mediaDao::consultarIdAlbum($idAlbum);
                                        if($actividadDao1){
                                            $parent = $actividadDao1;
                                        }
                                    }
                                }
                                if(isset($_POST['descripcion'])){
                                    $descripcion = $_POST['descripcion'];
                                }
                                $nombre = str_replace('.mp4','',$name);
                                if(isset($_POST['nombre'])){
                                    $nombre = $_POST['nombre'];
                                }

                                $ruta = 'https://conexioncultural.com.co/wp-content/uploads/rtMedia/users/'.$id.'/'.$año.'/'.$mes.'/'.$name;
                                $objActividad = new actividad(
                                    $id,
                                    $fechaRegistro,
                                    $descripcion,
                                    $nombre,
                                    $parent,
                                    $ruta,
                                    'attachment',
                                    'video/mp4'
                                );
                                $actividadDao = actividadDao::registrarActividad($objActividad);
                                if($actividadDao){
                                    
                                    $idmedia = actividadDao::ultimoIdActividad();

                                    $objmedia = new media(
                                        $idmedia,
                                        $id,
                                        $nombre,
                                        $idAlbum,
                                        'video',
                                        'profile',
                                        $id,
                                        $fechaRegistro,
                                        $tamaño
                                    );

                                    $mediaDao = mediaDao::registrarMedia($objmedia);
                                    if($mediaDao){

                                        $rtmedia = 'rtMedia/users/'.$id.'/'.$año.'/'.$mes.'/'.$name;
                                        $string = 'a:10:{s:8:"filesize";i:1811759;s:9:"mime_type";s:9:"video/mp4";
                                            s:6:"length";i:21;s:16:"length_formatted";s:4:"0:21";
                                            s:5:"width";i:1280;s:6:"height";i:720;s:10:"fileformat";
                                            s:3:"mp4";s:10:"dataformat";s:9:"quicktime";
                                            s:5:"audio";a:7:{s:10:"dataformat";s:3:"mp4";
                                            s:5:"codec";s:19:"ISO/IEC 14496-3 AAC";s:11:"sample_rate";d:44100;
                                            s:8:"channels";i:2;s:15:"bits_per_sample";i:16;s:8:"lossless";b:0;
                                            s:11:"channelmode";s:6:"stereo";}s:17:"created_timestamp";i:1535075994;}';


                                            $postmeta = actividadDao::registrarPostMeta($idmedia,'_wp_attached_file',$rtmedia);
                                            $postmeta2 = actividadDao::registrarPostMeta($idmedia,'_wp_attachment_metadata',$string);
                                        
                                            $success = array("message"=>"video subido correctamente","result"=>"","status"=>"1");
                                            echo json_encode($success);
                                    }else{
                                        $failed = array("message"=>"Error al registrar en tabla media","result"=>"","status"=>"0");
                                        echo json_encode($failed);
                                    }
                                    
                                }else{
                                    $failed = array("message"=>"Error al subir el video","result"=>"","status"=>"0");
                                    echo json_encode($failed);
                                }
                            }else{
                                $failed = array("message"=>"Error al subir el video","result"=>"","status"=>"0");
                                echo json_encode($failed);
                            }
                    }
                }
            }
            
        }else{
            $failed = array("message"=>"El identificador del usuario esta vacio","result","status"=>"0");   
            echo json_encode($failed);
        }
    }else {
        $failed = array("message"=>"No han llegado los campos necesarios","result","status"=>"0");   
        echo json_encode($failed);
    }
    
    function evaluarDirectorio($directorio){
        if(!is_dir($directorio)){
            if(!mkdir($directorio,0777,true)){
                $failed = array("message","fallo al crear la carpeta donde ira el archivo","result"=>"0","status"=>"0");
                echo json_encode($failed);
            }else{
                return true;
            }
        }else{
            return true;
        }
    }
?>