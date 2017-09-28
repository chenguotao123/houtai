<?php

//搜索年报表
if(isset($_POST['now_year_one']) && isset($_POST['now_year_two'])) {
	$now_year_one = $_POST['now_year_one'];
	$now_year_two = $_POST['now_year_two'];
	if($now_year_one == "今年" && $now_year_two == "今年"){
		$result = '{"status":0,"content":[{"order_num":"1111","sales_amount":"今年商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","year":"1111"}],"heji":{"ke_price":"20111111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_year_one == "去年" && $now_year_two == "今年"){
		$result = '{"status":0,"content":[{"order_num":"2222","sales_amount":"去年商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","year":"1111"}],"heji":{"ke_price":"202222222","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_year_one == "2012" && $now_year_two == "今年"){
		$result = '{"status":0,"content":[{"order_num":"33333","sales_amount":"2012商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","year":"1111"}],"heji":{"ke_price":"20233333333","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_year_one == "2013" && $now_year_two == "今年"){
		$result = '{"status":0,"content":[{"order_num":"4444","sales_amount":"2013商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","year":"1111"}],"heji":{"ke_price":"20244444444","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_year_one == "2014" && $now_year_two == "今年"){
		$result = '{"status":0,"content":[{"order_num":"5555","sales_amount":"2014商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","year":"1111"}],"heji":{"ke_price":"2025555555","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_year_one == "2015" && $now_year_two == "今年"){
		$result = '{"status":0,"content":[{"order_num":"6666","sales_amount":"2015商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","year":"1111"}],"heji":{"ke_price":"2026666666","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}


echo $result;