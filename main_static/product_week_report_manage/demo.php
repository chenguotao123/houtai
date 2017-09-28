<?php

//搜索周报表
if(isset($_POST['now_week_one']) && isset($_POST['now_week_two'])) {
	$now_week_one = $_POST['now_week_one'];
	$now_week_two = $_POST['now_week_two'];
	//测试4个数据
	if($now_week_one == "本周" && $now_week_two == "本周") {
		$result = '{"status":0,"content":[{"order_num":"1111","sales_amount":"本周商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","zhoushu":"1111","start_time":"2018-08-08","end_time":"2018-08-18"}],"heji":{"ke_price":"22222","new_customer_order":"2222222","new_customer_sales":"222222","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_week_one == "上周" && $now_week_two == "本周"){
		$result = '{"status":0,"content":[{"order_num":"2222","sales_amount":"上周商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","zhoushu":"1111","start_time":"2018-08-08","end_time":"2018-08-18"}],"heji":{"ke_price":"22222","new_customer_order":"2222222","new_customer_sales":"222222","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_week_one == "第1周" && $now_week_two == "本周"){
		$result = '{"status":0,"content":[{"order_num":"3333","sales_amount":"第1周商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","zhoushu":"1111","start_time":"2018-08-08","end_time":"2018-08-18"}],"heji":{"ke_price":"22222","new_customer_order":"2222222","new_customer_sales":"222222","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
	}else if($now_week_one == "第2周" && $now_week_two == "本周"){
		$result = '{"status":0,"content":[{"order_num":"4444","sales_amount":"第2周商品","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","zhoushu":"1111","start_time":"2018-08-08","end_time":"2018-08-18"}],"heji":{"ke_price":"22222","new_customer_order":"2222222","new_customer_sales":"222222","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111"}}';
		//以此类推...
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}


echo $result;