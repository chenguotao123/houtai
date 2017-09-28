/*用户管理部分*/
$(function() {
    func_base();
});

function func_base() {
    //客户信息查看
    $('.btn_chakan').on('click',function() {
        // func_clear();
        $('.add_box_see').show();
    });
    //客户信息返回
    $('.button_fanhui').on('click',function() {

        func_clear();
        $('.add_box_see').hide();
    });
    //返回到客户信息编辑
    $('.button_bianji').on('click',function() {
        func_clear();
        $('.add_box_see').hide();
        $('.add_box').show();
    });
    
    //编辑
    $(document).on('click','.btn_main_update',function(e) {
        e.preventDefault();
        func_clear();
        $('.add_tit').text("编辑客户");
        $('.add_box').show();
    });
    //新增
    $('#btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加客户");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        var customer_name = $('.customer_name').val();
        var phone_one = $('.phone_one').val();
        var keshi_select = $('.keshi_select .selectLt').text();
        var customer_service = $('.customer_service_select .selectLt').text();

        var text_one_num = $('.td-one .input-text_num').val();
        var text_one_name = $('.td-one .input-text_name').val();
        var text_two_num = $('.td-two .input-text_num').val();
        var text_two_name = $('.td-two .input-text_name').val();
        var stores_add = $('#select_ui_id_stores_add .selectLt').text();
        var select_product = $('.select_product').val();
        //添加订单
        var right_ticket = $('.right_ticket').val();
        if(customer_name == ""){
            $('.customer_name-xing').show();
        }else{
            $('.customer_name-xing').hide();
        }
        /*if(phone_one == ""){
            $('.phone_one-xing').show();
        }else{
            if(phone_one == "1380013800"){
                $('.phone_one-xing').show();
                $('.phone_one-xing').html("该号码已被占用！");
            }else{
                $('.phone_one-xing').hide();
            }
        }*/
        var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
        reg = reg.test(phone_one);
        if(phone_one == ""){
            $('.phone_one-xing').show();
        }else{
            if(!reg) {
                $('.phone-tishi').hide();
                $('.phone_one-xing').show();
            }else{
                //判断号码是否存在，假设1380013800已经被添加
                if(phone_one == "13800138000"){
                    $('.phone_one-xing').show();
                    $('.phone-tishi').text("该号码已被会员ID:5503占用！");
                    $('.phone-tishi').show();
                }else{
                    $('.phone_one-xing').hide();
                    $('.phone-tishi').hide();
                }
            }  
        }

        if(keshi_select == "请选择科室..."){
            $('.keshi-xing').show();
        }else{
            $('.keshi-xing').hide();
        }
        if(customer_service == "请选择客服..."){
            $('.customer_service-xing').show();
        }else{
            $('.customer_service-xing').hide();
        }

        if(text_one_num == "" || text_one_name == "" || text_two_num == "" || text_two_name == "" || stores_add == ""){
            $('.stores_add-xing').show();
        }else{
            $('.stores_add-xing').hide();
        }
        //添加订单
        var result = $('#add_tbody td.right-chufeng-id').length > 0;
        if(!result){
            $('.select_product-xing').show();
        }else{
            $('.select_product-xing').hide();
        }
        if(right_ticket == ""){
            $('.right_ticket-xing').show();
        }else{
            $('.right_ticket-xing').hide();
        }
        if(customer_name != "" && phone_one != "" && text_one_num != "" && text_one_name != "" &&
            text_two_num != "" && text_two_name != "" && stores_add != "" && right_ticket != "" && 
            result && $('.phone-tishi').css("display") == "none" && reg){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    //添加中的客户列表
    $('.btn_customer_list').on('click',function() {
        //隐藏当前，返回到客户列表
        $('.add_box').hide();
        $('.add_box_see').hide();
    });
    //添加中的回收站
    $('.btn_add_back').on('click',function() {
        //隐藏当前，返回到客户列表显示回收站内容
        $('.add_box').hide();
        $('.add_box_see').hide();
        $('.btn_back_customer').find('span').html("全部客户");
        $('.btn_back_customer').find('i').css("background-image","url(../../images/icon_all_customer.png)");
        $('.all_mendian').html("回收站");
    });
    //查看中的新增
    $('.btn_see_add').on('click',function() {
        func_clear();
        $('.add_box_see').hide();
        $('.add_tit').text("添加客户");
        $('.add_box').show();
    });
    //清文本内容
    function func_clear() {
        //清星
        $('.customer_name-xing').hide();
        $('.phone_one-xing').hide();
        $('.keshi-xing').hide();
        $('.customer_service-xing').hide();
        $('.stores_add-xing').hide();
        $('.select_product-xing').hide();
        $('.right_ticket-xing').hide();
        $('.phone-tishi').hide();
        //清空文本框，基本信息
        $('.customer_name').val("");
        $('.phone_one').val("");
        $('.right_ticket').val("");

        $('.customer_age').val("");
        $('.phone_two').val("");
        $('.gu_phone').val("");
        $('.customer_age').val("");
        //所有的单选，多选框初始化
        $('.iradio_square-green').removeClass('checked');
        $('.icheckbox_square-green').removeClass('checked');
        $('.check').prop("checked",false);
        // $('.check').siblings('label').removeClass('selected').addClass('not_selected');
        $('check').each(function() {
            $(this).siblings('label').removeClass('selected').addClass('not_selected');
        })
        $('.customer-textarea').val("");
        $('.input-text').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);
        //症状信息
        $('.zhengzhuang-textarea').val("");
        //添加订单
        $('.tbody-box').html("");
        $('#add_table').hide();

        $('.keshi_select .selectLt').text("请选择科室...");
        $('.keshi_select .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
        $('.bingzhong_select .selectLt').text("请选择病种...");
        $('.bingzhong_select .optionsBox .optionBox').eq(0).addClass("selected").find('span').text("请选择病种...");
        $('.bingzhong_select .optionsBox .optionBox').eq(0).siblings('.optionBox').remove();
        
        $('.customer_service_select .selectLt').text("请选择客服...");
        $('.customer_service_select .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
        
        $('.stores_add_select .selectLt').text("");
        $('.stores_add_select .optionsBox .optionBox').eq(0).addClass("selected").html("").siblings(".optionBox").remove();
    }
}