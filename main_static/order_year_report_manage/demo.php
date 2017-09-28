<?php

//搜索年报表
if(isset($_POST['now_year_one']) && isset($_POST['now_year_two'])) {
	$now_year_one = $_POST['now_year_one'];
	$now_year_two = $_POST['now_year_two'];
	if($now_year_one == "今年" && $now_year_two == "今年") {
		$result = '{"status":0,"content":[{"xuhao":"1","order_num":"1111","sales_amount":"1111","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","buy_customer":"1111111","now_time":"2017"}],"heji":{"order_num":"222222","sales_amount":"222222","ke_price":"222222","new_customer_order":"222222","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"222222","sales_mendian":"10","sales_clerk":"1111","buy_customer":"2222221"}}';
	}else if($now_year_one == "今年" && $now_year_two == "去年" || $now_year_one == "去年" && $now_year_two == "今年"){
		$result = '{"status":0,"content":[{"xuhao":"2","order_num":"2222","sales_amount":"2222","ke_price":"2222","new_customer_order":"2222","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","buy_customer":"1111111","now_time":"2017"}],"heji":{"order_num":"333333","sales_amount":"333333","ke_price":"333333","new_customer_order":"333333","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"333333","sales_mendian":"10","sales_clerk":"1111","buy_customer":"3333331"}}';
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}

echo $result;