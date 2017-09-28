<?php

//查询中科室
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


//查询中所属门店
if(isset($_POST['store'])) {
	$store = $_POST['store'];
	if($store == 1) {
		$result = '{"status":0,"content":["店员11111","店员22222","店员33333"]}';
	}else if($store == 2){
		$result = '{"status":0,"content":["店员44444","店员555555","店员66666"]}';
	}else if($store == 3){
		$result = '{"status":0,"content":["店员77777","9店员9999","店员1111111"]}';
	}else{
		$result = '{"status":0,"content":["==所属店员=="]}';
	}
}

//添加中选择科室
if(isset($_POST['keshi'])) {
	$keshi = $_POST['keshi'];
	if($keshi == "1") {
		$result = '{"status":0,"content":["病种11111","病种22222","病种33333"]}';
	}else if($keshi == "2"){
		$result = '{"status":0,"content":["病种44444","病种555555","病种66666"]}';
	}else if($keshi == "3"){
		$result = '{"status":0,"content":["病种77777","病种88888","病种99999"]}';
	}else{
		$result = '{"status":0,"content":["请选择病种..."]}';
	}
}

//添加中根据店员搜索门店
if(isset($_POST['dianyuan'])) {
	$dianyuan = $_POST['dianyuan'];
	if($dianyuan == "1") {
		$result = '{"status":0,"content":["门店11111","门店22222","门店33333"]}';
	}else if($dianyuan == "2"){
		$result = '{"status":0,"content":["门店44444","门店555555","门店66666"]}';
	}else if($dianyuan == "3"){
		$result = '{"status":0,"content":["门店77777","门店88888","门店99999"]}';
	}else{
		$result = '{"status":0,"content":[""]}';
	}
}


echo $result;