/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var store_name =  $(this).parents('tr').find('td').eq(1).html();
        var jinyong =  $(this).parents('tr').find('td').eq(4).html();
        $('.store_name input').val(store_name);
        if(jinyong == "是"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
        }else{
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
        }*/
        $('.add_tit').text("编辑体质");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加体质");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });

    //确定验证部分
    $('.btn_queding').on('click',function() {
        var store_name = $('.store_name input').val();
        if(store_name == ""){
            $('.store_name-xing').show();
        }else{
            $('.store_name-xing').hide();
        }
        if(store_name != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.store_name-xing').hide();
        //清空文本框
        $('.store_name input').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);
    }
}