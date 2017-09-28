<?php

//搜索月报表
if(isset($_POST['now_month_one']) && isset($_POST['now_month_two'])) {
	$now_month_one = $_POST['now_month_one'];
	$now_month_two = $_POST['now_month_two'];
	if($now_month_one == "本月" && $now_month_two == "本月") {
		$result = '{"status":0,"content":[{"xuhao":"1","order_num":"1111","sales_amount":"1111","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","buy_customer":"1111111","now_time":"8"}],"heji":{"order_num":"222222","sales_amount":"222222","ke_price":"222222","new_customer_order":"222222","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"222222","sales_mendian":"10","sales_clerk":"1111","buy_customer":"2222221"}}';
	}else if($now_month_one == "本月" && $now_month_two == "上月" || $now_month_one == "上月" && $now_month_two == "本月"){
		$result = '{"status":0,"content":[{"xuhao":"2","order_num":"2222","sales_amount":"2222","ke_price":"2222","new_customer_order":"2222","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","buy_customer":"1111111","now_time":"11"}],"heji":{"order_num":"333333","sales_amount":"333333","ke_price":"333333","new_customer_order":"333333","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"333333","sales_mendian":"10","sales_clerk":"1111","buy_customer":"3333331"}}';
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}

echo $result;