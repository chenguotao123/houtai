<?php

//搜索日报表
if(isset($_POST['start_time']) && isset($_POST['end_time'])) {
	$start_time = $_POST['start_time'];
	$end_time = $_POST['end_time'];
    //测试数据为，9月15日到9月16日有数据
	if($start_time == "2017-09-15" && $end_time == "2017-09-16") {
		$result = '{"status":0,"content":[{"order_num":"1111","sales_amount":"商品名字","ke_price":"1111","new_customer_order":"11111","new_customer_sales":"1111","new_customer_price":"10","purchase_order":"10","purchase_sales":"1111","purchase_price":"111111","sales_mendian":"10","sales_clerk":"1111","now_time":"2018-08-08"}],"heji":{"ke_price":"222222","new_customer_order":"2222222","new_customer_sales":"2222222","new_customer_price":"10","purchase_order":"10","purchase_sales":"222222","purchase_price":"22222","sales_mendian":"10","sales_clerk":"1111"}}';
	}else{
		$result = '{"status":1,"content":[""]}';
	}
}


echo $result;