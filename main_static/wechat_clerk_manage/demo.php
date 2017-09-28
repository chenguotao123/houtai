<?php


//添加，编辑select搜索门店部分
if(isset($_POST['store_name'])){
	$store_name = $_POST['store_name'];
	if($store_name == 1){
		$result = '{"status":0,"content":["11111","22222","33333"]}';
	}else if($store_name == 2){
		$result = '{"status":0,"content":["33333","444444","555555"]}';
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}

echo $result;

