/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();

        func_clear();
        /*var name = $(this).parents('tr').find('td').eq(1).html();
        var number =  $(this).parents('tr').find('td').eq(2).html();
        var code =  $(this).parents('tr').find('td').eq(3).html();
        var role =  $(this).parents('tr').find('td').eq(4).html();
        var many_login =  $(this).parents('tr').find('td').eq(8).html();
        $('.name input').val(name);
        $('.number input').val(number);
        $('.number input').attr('disabled',true);
        $('.code input').val(code);
        if(many_login == "是"){
            $('#check').prop("checked", true);
        }else{
            $('#check').prop("checked", false);
        }*/
        $('.add_tit').text("编辑用户");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加用户");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });

    //确定验证部分
    $('.btn_queding').on('click',function() {
        var number = $('.number input').val();
        var pwd = $('.pwd input').val();
        var confirm_pwd = $('.confirm_pwd input').val();
        var name = $('.name input').val();
        var code = $('.code input').val();
        if(number == ""){
            $('.number-xing').show();
        }else{
            $('.number-xing').hide();
        }
        if(pwd == ""){
            $('.pwd-xing').show();
        }else{
            $('.pwd-xing').hide();
        }
        if(pwd == ""){
            $('.pwd-xing').show();
        }else{
            $('.pwd-xing').hide();
        }
        if(confirm_pwd == ""){
            $('.confirm_pwd-xing').show();
        }else{
            $('.confirm_pwd-xing').hide();
        }
        if(name == ""){
            $('.name-xing').show();
        }else{
            $('.name-xing').hide();
        }
        if(code == ""){
            $('.code-xing').show();
        }else{
            $('.code-xing').hide();
        }
        
        if(pwd != "" && confirm_pwd != ""){
            if(pwd != confirm_pwd){
                $('.confirm_pwd-xing').show();
                $('.confirm_pwd-xing').html("两次输入的密码不一致");
            }else{
                $('.confirm_pwd-xing').hide();
                $('.confirm_pwd-xing').html("*");
            }
        }
        var result = (pwd == confirm_pwd);
        if(number != "" && pwd != "" && confirm_pwd != "" && name != "" && code != "" && result){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.number-xing').hide();
        $('.pwd-xing').hide();
        $('.confirm_pwd-xing').hide();
        $('.name-xing').hide();
        $('.code-xing').hide();
        //清空文本框
        $('.number input').attr("disabled",false);
        $('.number input').val("");
        $('.pwd input').val("");
        $('.confirm_pwd input').val("");
        $('.name input').val("");
        $('.code input').val("");
        $('#check').prop("checked",false);
        $(".role .selectLt").text("超级管理员");
        $('.role .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
    }
}