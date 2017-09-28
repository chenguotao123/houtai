<?php

//搜索日报表
if(isset($_POST['start_time']) && isset($_POST['end_time'])) {
	$start_time = $_POST['start_time'];
	$end_time = $_POST['end_time'];
	if($start_time == "2017-09-15" && $end_time == "2017-09-16") {
		$result = '{"status":0,"content":[{"xuhao":"1","order_num":"1111","sales_amount":"1111","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","buy_customer":"1111111","now_time":"2018-08-08"}],"heji":{"order_num":"合计222222","sales_amount":"222222","ke_price":"222222","new_customer_order":"222222","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"222222","sales_mendian":"10","sales_clerk":"1111","buy_customer":"2222221"}}';
	}else{
		$result = '{"status":1,"content":[""],"heji":""}';
	}
}

echo $result;