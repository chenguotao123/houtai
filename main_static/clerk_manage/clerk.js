/*用户管理部分*/
$(function() {
    func_base();
});

function func_base() {
    //编辑
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        $('.add_tit').text("编辑店员");
        $('.add_box').show();
    });
    $('.tab-bianji').on('click',function(e) {
        e.preventDefault();
        $('.add_box_cat').hide();
        func_clear();
        $('.add_tit').text("编辑店员");
        $('.add_box').show();
    });

    //添加
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加店员");
        $('.add_box').show();
    });
    //单店员信息详情
    $('.btn_clerk').on('click',function() {
        $('.add_box_cat').show();
    });
    $('.btn_jifen').on('click',function() {
        $('.add_box_jifen').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    $('.btn_fanhui').on('click',function() {
        $('.add_box_cat').hide();
    });
    $('.jifen_back').on('click',function() {
        $('.huan_price').val(""); 
        $('.dui_jifen').val(""); 
        $('.over_jifen').val("");
        $('.huan_price-xing').hide();
        $('.dui_jifen-xing').hide();
        $('.over_jifen-xing').hide();
         //关闭
        $('.add_box_jifen').hide();
    });

    //select搜索部分
    $('.btn_sou').on('click',function() {
        var store_name = $('.store_name').val();
        $.ajax({
            url: "demo.php",
            data: {"store_name":store_name},
            dataType: "json",
            type: "post",
            success: function(data) {
                if(data.status == 0){
                    var str="";
                    str += "<select id='store' name='store' class='beautify_input'>";
                    for(var i=0;i<data.content.length;i++){
                        if(i==0){
                            str += "<option value ='0' selected='true'>"+ data.content[i] +"</option>";
                        }else{
                            str += "<option value ='"+i+"'>"+ data.content[i] +"</option>";
                        }
                    }
                    str += "</select>";
                    $('.store_select').html("");
                    $('.store_select').append(str);
                    $('.beautify_input').cssSelect();
                }else if(data.status == 1){
                    $('.stores_owned-xing').show();
                }else{
                    $('.stores_owned-xing').show();
                    $('.stores_owned-xing').html("服务器开小差...");
                }        
            },
            error: function() {
                $('.stores_owned-xing').show();
                $('.stores_owned-xing').html("服务器开小差...");
            }
        });
    });

    //积分兑换部分
    $('.jifen_queding').on('click',function() {
        var huan_price = $('.huan_price').val(); 
        var dui_jifen = $('.dui_jifen').val(); 
        var over_jifen = $('.over_jifen').val(); 
        if(huan_price == ""){
            $('.huan_price-xing').show();
        }else {
            $('.huan_price-xing').hide();
        }
        if(dui_jifen == ""){
            $('.dui_jifen-xing').show();
        }else {
            $('.dui_jifen-xing').hide();
        }
        if(over_jifen == ""){
            $('.over_jifen-xing').show();
        }else {
            $('.over_jifen-xing').hide();
        }
        if(huan_price !="" && dui_jifen !="" && over_jifen != ""){
            //提交表单
            $('.form_jifen').submit();
            //清空表单
            $('.huan_price').val(""); 
            $('.dui_jifen').val(""); 
            $('.over_jifen').val("");
            $('.huan_price-xing').hide();
            $('.dui_jifen-xing').hide();
            $('.over_jifen-xing').hide();
            //关闭
            $('.add_box_jifen').hide();
        }
    });

    //确定验证部分
    $('.btn_queding').on('click',function() {
        var clerk_name = $('.clerk_name').val();
        var clerk_phone = $('.clerk_phone').val();
        var store_num = $('.store_num').val();
        var store_name = $('.store_name').val();
        var store_select = $('.store_select .selectLt').text();
        var subordinate_role_select = $('.subordinate_role_select .selectLt').text();
        if(clerk_name == ""){
            $('.clerk_name-xing').show();
        }else{
            $('.clerk_name-xing').hide();
        }
        if(clerk_phone == ""){
            $('.clerk_phone-xing').show();
        }else{
            if(clerk_phone == "13888888888"){
                $('.clerk_phone-xing').show();
                $('.phone-tishi').show();
            }else{
                $('.phone-tishi').hide();
                $('.clerk_phone-xing').hide();
            }
        }
        if(store_num == "" || store_name == "" || store_select == ""){
            $('.stores_owned-xing').show();
        }else{
            $('.stores_owned-xing').hide();
        }
        if(subordinate_role_select == "请选择..."){
            $('.subordinate_role-xing').show();
        }else{
            $('.subordinate_role-xing').hide();
        }
        if(clerk_name != "" && clerk_phone != "" && store_num != "" && store_name != "" && store_select != "" &&  $('.phone-tishi').css("display") == "none"
             && subordinate_role_select != "请选择..."){
            $('#form_add').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    //添加、查看中的所有店员
    $('.btn_all_clerk').on('click',function() {
        //隐藏当前，显示所有店员列表
        $('.add_box').hide();
        $('.add_box_cat').hide();
        $('.add_box_jifen').hide();
    });
    //添加、查看中的回收站
    $('.btn_add_back').on('click',function() {
        //隐藏当前，显示所有店员列表
        $('.add_box').hide();
        $('.add_box_cat').hide();
        $('.add_box_jifen').hide();
        $('.btn_main_back').find('span').html("全部店员");
        $('.btn_main_back').find('i').css("background-image","url(../../images/icon_all_customer.png)");
        $('.all_mendian').html("回收站");
    });
    //查看中的新增
    $('.btn_add_clerk').on('click',function() {
        $('.add_box_cat').hide();
        $('.add_box_jifen').hide();
        func_clear();
        $('.add_tit').text("添加店员");
        $('.add_box').show();
    });
    function func_clear() {
        //清星
        $('.clerk_name-xing').hide();
        $('.clerk_phone-xing').hide();
        $('.stores_owned-xing').hide();
        $('.subordinate_role-xing').hide();
        //清空文本框
        $('.clerk_name').val("");
        $('.clerk_phone').val("");
        $('.store_num').val("");
        $('.store_name').val("");
        $('.stores_owned').val("");
        $('.store_select .selectLt').text("");
        $('.store_select .optionsBox .optionBox').eq(0).addClass("selected").html("").siblings('.optionBox').remove();
        $('.subordinate_role_select .selectLt').text("请选择...");
        $('.subordinate_role_select .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
    }
}