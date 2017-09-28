<?php

$user = 123;
$pwd = 123;
$yanzheng = 123;
if($_POST['username'] && $_POST['password'] && $_POST['yanzhengcode']){
	$username = $_POST['username'];
	$password = $_POST['password'];
	$yanzhengcode = $_POST['yanzhengcode'];
	if($username == $user && $password == $pwd && $yanzhengcode == $yanzheng){
		$result = '{"status":0,"code":"0"}';
	}else{
		$result = '{"status":0,"code":"1"}';
	}
}

echo $result;