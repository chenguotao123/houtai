<?php

//搜索顾客
if(isset($_POST['customer_value'])) {
	$customer_value = $_POST['customer_value'];
	if($customer_value == "顾客") {
		$result = '{"status":0,"content":["顾客1-13888888888","顾客2-13666666666","顾客3-1399999999","顾客4-1399999999"]}';
	}else if($customer_value == "顾客2"){
		$result = '{"status":0,"content":["顾客4-13886546888","顾客5-1385465468888","顾客6-13232328888"]}';
	}else if($customer_value == "顾客3"){
		$result = '{"status":0,"content":["顾客7-13823238888","顾客8-138222222888","顾客9-13888888888"]}';
	}else{
		$result = '{"status":0,"content":[""]}';
	}
}


echo $result;