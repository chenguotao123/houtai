<?php

//搜索日报表
if(isset($_POST['start_time']) && isset($_POST['end_time'])) {
	$start_time = $_POST['start_time'];
	$end_time = $_POST['end_time'];
	if($start_time == "2017-09-15" && $end_time == "2017-09-16") {
		$result = '{"status":0,"content":[{"xuhao":"1","order_num":"1111","sales_amount":"1111","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","now_time":"2018-08-08"}]}';

		// $result = '{"status":0,"content":["顾客1-13888888888","顾客2-13666666666","顾客3-1399999999","顾客4-1399999999"]}';
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}


echo $result;