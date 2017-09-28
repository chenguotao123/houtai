$(function() {
    func_base();
});
function func_base() {
    //编辑
    $('.btn_update').on('click',function() {
        func_clear();
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //添加
    $('#btn_add').on('click',function() {
        func_clear();
        $('.add_box').show();
    });
    //返回商品列表
    $('.btn_menidan').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //添加的回收站
    $('.btn_add_back').on('click',function() {
        func_clear();
        $('.add_box').hide();
        $('.btn_main_back span').text("全部门店");
        $('.btn_main_back .back').css("background-image","url(../../images/icon_mendian.png)");
        $('.all_mendian').html("回收站");
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        //提交submit操作
        var mendian_all_name = $('.mendian_all_name').val();
        var mendian_odd_name = $('.mendian_odd_name').val();
        var business_select = $('.business_select .selectLt').text();
        var customer_service_select = $('.customer_service_select .selectLt').text();

        if(mendian_all_name == ""){
            $('.mendian_all_name-xing').show();
        }else{
            $('.mendian_all_name-xing').hide();
        }
        if(mendian_odd_name == ""){
            $('.mendian_odd_name-xing').show();
        }else{
            $('.mendian_odd_name-xing').hide();
        }
        var business_result = true;
        if(business_select == "请选择业务..."){
            business_result = false;
            $('.business-xing').show();
        }else{
            business_result = true;
            $('.business-xing').hide();
        }
        var service_result = true;
        if(customer_service_select == "请选择客服..."){
            service_result = false;
            $('.customer_service-xing').show();
        }else{
            service_result = true;
            $('.customer_service-xing').hide();
        }

        //提交submit操作
        if(mendian_all_name != "" && mendian_odd_name != "" && business_result && service_result){
            $('#add_form').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    //清文本内容
    function func_clear() {
        //清星
        $('.mendian_all_name-xing').hide();
        $('.mendian_odd_name-xing').hide();
        $('.business-xing').hide();
        $('.customer_service-xing').hide();
        $('.mendian_all_name').val("");
        $('.mendian_odd_name').val("");
        $('.business_select .selectLt').text("请选择业务...");
        $('.business_select .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
        $('.customer_service_select .selectLt').text("请选择客服...");
        $('.customer_service_select .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
    }
}