<?php

//搜索周报表
if(isset($_POST['now_week_one']) && isset($_POST['now_week_two'])) {
	$now_week_one = $_POST['now_week_one'];
	$now_week_two = $_POST['now_week_two'];
	if($now_week_one == "本周" && $now_week_two == "本周") {
		$result = '{"status":0,"content":[{"xuhao":"111","order_num":"1111","sales_amount":"1111111","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","sales":"1111","zhoushu":"10","now_time":"2018-08-08","end_time":"2018-08-08"}],"heji":{"order_num":"2222","sales_amount":"22222","ke_price":"22222","new_customer_order":"22222","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","sales":"1111"}}';
	}else if($now_week_one == "本周" && $now_week_two == "上周" || $now_week_one == "上周" && $now_week_two == "本周"){
		$result = '{"status":0,"content":[{"xuhao":"222","order_num":"2222","sales_amount":"222222222","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","sales":"2222","zhoushu":"10","now_time":"2018-08-08","end_time":"2018-08-08"}],"heji":{"order_num":"33333","sales_amount":"3333333","ke_price":"33333","new_customer_order":"333333","new_customer_sales":"333333","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","sales":"1111"}}';
	}else{
		$result = '{"status":1,"content":[""],"heji":""}';
	}
}

echo $result;