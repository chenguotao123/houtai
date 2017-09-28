<?php

//搜索月报表
if(isset($_POST['now_month_one']) && isset($_POST['now_month_two'])) {
	$now_month_one = $_POST['now_month_one'];
	$now_month_two = $_POST['now_month_two'];
	if($now_month_one == "本月" && $now_month_two == "本月") {
		$result = '{"status":0,"content":[{"order_num":"1111","sales_amount":"本月商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","zhoushu":"1111","start_time":"2018-08-08","end_time":"2018-08-18"}],"heji":{"ke_price":"22222","new_customer_order":"2222222","new_customer_sales":"222222","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_month_one == "上月" && $now_month_two == "本月"){
		$result = '{"status":0,"content":[{"order_num":"22222","sales_amount":"上月商品","ke_price":"22222","new_customer_order":"2222","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","zhoushu":"1111","start_time":"2018-08-08","end_time":"2018-08-18"}],"heji":{"ke_price":"22222","new_customer_order":"2222222","new_customer_sales":"222222","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}


echo $result;