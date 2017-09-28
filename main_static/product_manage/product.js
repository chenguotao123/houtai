/*回访部分*/
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
    $('.btn_product').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //添加的回收站
    $('.btn_add_back').on('click',function() {
        func_clear();
        $('.add_box').hide();
        $('.btn_main_back span').text("全部商品");
        $('.btn_main_back .back').css("background-image","url(../../images/icon_product.png)");
        $('.all_mendian').html("回收站");
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        //提交submit操作
        var keshi = $('.keshi_box .selectLt').text();
        var check = $('.check').val();

        var pro_name = $('.pro_name').val();
        var pro_guige = $('.pro_guige').val();
        var danwei_num = $('.danwei_num').val();
        var danwei = $('.danwei .selectLt').text();
        var manufacturer = $('.manufacturer').val();
        var approval_number = $('.approval_number').val();
        var effect_day = $('.effect_day').val();
        var retail_price = $('.retail_price').val();
        var result = true;
        if(keshi == "请选择科室..."){
            result = false;
            $('.keshi-xing').show();
        }else{
            result = true;
            $('.keshi-xing').hide();
        }
        if(pro_name == ""){
            $('.pro_name-xing').show();
        }else{
            $('.pro_name-xing').hide();
        }
        if(pro_guige == ""){
            $('.pro_guige-xing').show();
        }else{
            $('.pro_guige-xing').hide();
        }
        var danwei_res = true;
        if(danwei_num == "" && danwei == "请选择..."){
            danwei_res = false;
            $('.danwei-xing').show();
        }else{
            danwei_res = true;
            $('.danwei-xing').hide();
        }
        if(manufacturer == ""){
            $('.manufacturer-xing').show();
        }else{
            $('.manufacturer-xing').hide();
        }
        if(approval_number == ""){
            $('.approval_number-xing').show();
        }else{
            $('.approval_number-xing').hide();
        }
        if(effect_day == ""){
            $('.effect_day-xing').show();
        }else{
            $('.effect_day-xing').hide();
        }
        if(retail_price == ""){
            $('.retail_price-xing').show();
        }else{
            $('.retail_price-xing').hide();
        }
        /*for(var i=0;i<$('.check').length;i++){
            if($('.check').eq(i).is(':checked')){
                $('.pro_leixing-xing').hide();
                return;
            }else{
                $('.pro_leixing-xing').show();
            }
        }*/
        //提交submit操作
        if(result && pro_name != "" && pro_guige != "" && manufacturer != "" 
            && approval_number != "" && effect_day != "" && retail_price != "" && danwei_res){
            $('#add_form').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    //清文本内容
    function func_clear() {
        //清星
        $('.keshi-xing').hide();
        $('.pro_leixing-xing').hide();
        $('.pro_name-xing').hide();
        $('.pro_guige-xing').hide();
        $('.danwei-xing').hide();
        $('.manufacturer-xing').hide();
        $('.approval_number-xing').hide();
        $('.effect_day-xing').hide();
        $('.retail_price-xing').hide(); 

        $('.keshi_box .selectLt').text("请选择科室...");
        $('.keshi_box .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
        $('.bingzhong_select .selectLt').text("请选择病种...");
        $('.bingzhong_select .optionsBox .optionBox').eq(0).addClass("selected").find('span').text("请选择病种...");
        $('.bingzhong_select .optionsBox .optionBox').eq(0).siblings('.optionBox').remove();
        $('.check').eq(0).prop("checked","checked");
        $('.issale').prop("checked","checked");

        $('.pro_name').val("");
        $('.pro_guige').val("");
        $('.danwei_num').val("");
        $('.danwei .selectLt').text("请选择...");
        $('.danwei .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
        $('.manufacturer').val("");
        $('.approval_number').val("");
        $('.effect_day').val("");
        $('.retail_price').val("");
        $('.use_day').val("0");
        $('.main_pro_id').val("0");
        $('.add_sort').val("30");       

        //价格优惠以外的
        $('.discount_start').val("");
        $('.discount_odd_price').val("");
        $('.discount_all_price').val("");
        $('.discount_tit').val("");
        $('.discount_sort').val("");
        $('.promotion_price').val("");
        $('.limit_num').val("");
        $('.promotion_date_one').val("");
        $('.promotion_date_two').val("");

        $('.indication_textarea').val("");
        $('.usage_dosage_textarea').val("");
        $('.course_information_textarea').val("");
        $('.careful_textarea').val("");
        $('.selling_point_textarea').val("");
        $('.market_info_textarea').val("");
        $('.other_info_textarea').val("");
        
        //清图片
        $('.image_container img').prop("src","");
        $('#file_upload').val("");
    }
}