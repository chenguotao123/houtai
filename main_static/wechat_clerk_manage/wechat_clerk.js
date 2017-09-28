$(function() {
    func_base();
});
function func_base() {
    //编辑
    $('.btn_update').on('click',function() {
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //返回商品列表
    $('.btn_clerk').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //添加的回收站
    $('.btn_add_back').on('click',function() {
        $('.add_box').hide();
        $('.btn_main_back span').text("微信店员");
        $('.btn_main_back .back').css("background-image","url(../../images/icon_all_customer.png)");
        $('.all_mendian').html("回收站");
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
    	var register_name = $('.register_name').val();
    	var register_phone = $('.register_phone').val();
    	var input_store = $('.input_store').val();
        var store_select = $('.store_select .selectLt').text();
    	var bind_clerk_num = $('.bind_clerk_num').val();
    	var bind_clerk_name = $('.bind_clerk_name').val();
    	if(register_name == ""){
    		$('.register_name-xing').show();
    	}else{
    		$('.register_name-xing').hide();
    	}
    	if(register_phone == ""){
    		$('.register_phone-xing').show();
    	}else{
    		$('.register_phone-xing').hide();
    	}
    	if(input_store == "" || store_select == ""){
    		$('.store-xing').show();
    	}else{
    		$('.store-xing').hide();
    	}
    	if(bind_clerk_num == "" || bind_clerk_name == ""){
    		$('.bind_clerk-xing').show();
    	}else{
    		$('.bind_clerk-xing').hide();
    	}
        //提交submit操作
        if(register_name != "" && register_phone != "" && input_store != "" && store_select != "" && bind_clerk_num != "" && bind_clerk_name != ""){
            $('#add_form').submit();
            //提交完，清星,清文本
    		func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
       //提交完，清星,清文本
       $('.register_name-xing').hide();
       $('.register_phone-xing').hide();
       $('.store-xing').hide();
       $('.bind_clerk-xing').hide();
       $('.register_name').val("");
       $('.register_phone').val("");
       $('.input_store').val("");
       $('.bind_clerk_num').val("");
       $('.bind_clerk_name').val("");

       $('.store_select .selectLt').text("");
       $('.store_select .optionsBox .optionBox').eq(0).addClass("selected").html("").siblings('.optionBox').remove();
       $('#check1').prop("checked",true);
       $('#check2').prop("checked",false);
    }
}