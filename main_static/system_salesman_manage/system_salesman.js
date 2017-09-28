/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var salesman_name =  $(this).parents('tr').find('td').eq(1).html();
        var jinyong =  $(this).parents('tr').find('td').eq(4).html();
        $('.salesman_name input').val(salesman_name);
        if(jinyong == "是"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
        }else if(jinyong == "否"){
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
        }*/
        $('.add_tit').text("编辑业务员");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加业务员");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });

    //确定验证部分
    $('.btn_queding').on('click',function() {
        var salesman_name = $('.salesman_name input').val();
        if(salesman_name == ""){
            $('.salesman_name-xing').show();
        }else{
            $('.salesman_name-xing').hide();
        }
        if(salesman_name != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    })
  
    //判断输入框是否为空
    /*$('.number input').bind('input propertychange', function() {  
        if($(this).val() != ""){
            $('.number-xing').hide();
        }else{
            $('.number-xing').show();
        }
    });
    $('.pwd input').bind('input propertychange', function() {  
        if($(this).val() != ""){
            $('.pwd-xing').hide();
        }else{
            $('.pwd-xing').show();
        }
    });
    $('.confirm_pwd input').bind('input propertychange', function() {  
        if($(this).val() != ""){
            $('.confirm_pwd-xing').hide();
        }else{
            $('.confirm_pwd-xing').show();
        }
    });
    $('.name input').bind('input propertychange', function() {  
        if($(this).val() != ""){
            $('.name-xing').hide();
        }else{
            $('.name-xing').show();
        }
    });
    $('.code input').bind('input propertychange', function() {  
        if($(this).val() != ""){
            $('.code-xing').hide();
        }else{
            $('.code-xing').show();
        }
    });*/
    function func_clear() {
        //清星
        $('.salesman_name-xing').hide();
        //清空文本框
        $('.salesman_name input').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);
    }
}