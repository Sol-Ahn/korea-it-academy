<?php
$uploaddir = $_SERVER['DOCUMENT_ROOT'].'/upload/';
if(!is_dir($uploaddir)){
    mkdir($uploaddir);
}
$filename = $_FILES['upload']['name'];
$uploadfile = $uploaddir . basename($_FILES['upload']['name']);
$uploadfile = iconv("UTF-8", "EUC-KR", $uploadfile); 
$webPath = "http://".$_SERVER['HTTP_HOST']."/upload/".basename($_FILES['upload']['name']);
$message = "";
if (isset($_FILES['upload'])) {
    if(move_uploaded_file($_FILES['upload']['tmp_name'], $uploadfile)){
        $message="파일전송 성공";
    }else{
        $message="파일전송 실패".$uploadfile;
    }
}

//echo "{'filename' : '$filename', 'uploaded' : 1, 'url':'$webPath'}";
echo json_encode(array(
    'uploaded'=>'1',
    'fileName'=>$filename,
    'url'=>$webPath,
));


?>