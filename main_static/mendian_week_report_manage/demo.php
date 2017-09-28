<?php

//查询中科组
if(isset($_POST['department'])) {
	$department = $_POST['department'];
	if($department == 1) {
		$result = '{"status":0,"content":["病种11111","病种22222","病种33333"]}';
	}else if($department == 2){
		$result = '{"status":0,"content":["病种44444","病种555555","病种66666"]}';
	}else if($department == 3){
		$result = '{"status":0,"content":["病种77777","病种99999","病种1111111"]}';
	}else{
		$result = '{"status":0,"content":["==病种=="]}';
	}
}

//查询中科组
if(isset($_POST['keshi'])) {
	$keshi = $_POST['keshi'];
	if($keshi == 1) {
		$result = '{"status":0,"content":["病种11111","病种22222","病种33333"]}';
	}else if($keshi == 2){
		$result = '{"status":0,"content":["病种44444","病种555555","病种66666"]}';
	}else if($keshi == 3){
		$result = '{"status":0,"content":["病种77777","病种99999","病种1111111"]}';
	}else{
		$result = '{"status":0,"content":["请选择病种..."]}';
	}
}


echo $result;