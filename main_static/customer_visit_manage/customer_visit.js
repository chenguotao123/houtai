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
    //确定验证部分
    $('.btn_queding').on('click',function() {
        //提交submit操作
        var huifang_style = $('#select_ui_name_huifang_style .selectLt').text();
        var huifang_textarea = $('.huifang_textarea').val();
        var huifang_time = $('.huifang_time').val();
        var huifang_service = $('#select_ui_name_huifang_service .selectLt').text();
        if(huifang_style == "请选择..."){
            $('.huifang_style-xing').show();
        }else{
            $('.huifang_style-xing').hide();
        }
        if(huifang_textarea == ""){
            $('.huifang_textarea-xing').show();
        }else{
            $('.huifang_textarea-xing').hide();
        }
        if(huifang_time == ""){
            $('.huifang_time-xing').show();
        }else{
            $('.huifang_time-xing').hide();
        }
        if(huifang_service == "请选择客服..."){
            $('.huifang_service-xing').show();
        }else{
            $('.huifang_service-xing').hide();
        }
        //提交submit操作
        if(huifang_style != "请选择..."  && huifang_textarea != "" && huifang_time != "" && huifang_service != "请选择客服..."){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            clear_huifang();
            $('.add_box').hide();
        }
    });
    //清文本内容
    function func_clear() {
        //清星
        $('.huifang_style-xing').hide();
        $('.huifang_textarea-xing').hide();
        $('.huifang_time-xing').hide();
        $('.huifang_service-xing').hide();
        $('.huifang_textarea').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);   

        $('.huifang_style_select .selectLt').text("请选择...");
        $('.huifang_style_select .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
        $('.huifang_service_select .selectLt').text("请选择客服...");
        $('.huifang_service_select .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
    }
}