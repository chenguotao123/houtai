/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var category_name =  $(this).parents('tr').find('td span').eq(0).html();

        var add_check =  $(this).parents('tr').find('td').eq(3).html();
        var jinyong_check =  $(this).parents('tr').find('td').eq(4).html();
        $('.category_name input').val(category_name);
        if(add_check == "是"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
        }else if(add_check == "否"){
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
        }
        if(jinyong_check == "是"){
            $('#check3').prop("checked", true);
            $('#check4').prop("checked", false);
        }else if(jinyong_check == "否"){
            $('#check3').prop("checked", false);
            $('#check4').prop("checked", true);
        }*/
        $('.add_tit').text("编辑病种分类");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加病种分类");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        var category_name = $('.category_name input').val();
        if(category_name == ""){
            $('.category_name-xing').show();
        }else{
            $('.category_name-xing').hide();
        }
        
        if(category_name != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.category_name-xing').hide();
        //清空文本框
        $('.category_name input').val("");

        $('#check1').prop("checked",true);
        $('#check2').prop("checked",false);

        $('#check3').prop("checked",false);
        $('#check4').prop("checked",true);
    }
}