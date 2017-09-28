/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
       /* var mode =  $(this).parents('tr').find('td').eq(1).html();
        var sort =  $(this).parents('tr').find('td').eq(2).html();
        var jinyong =  $(this).parents('tr').find('td').eq(3).html();
        $('.mode input').val(mode);
        $('.sort input').val(sort);
        if(jinyong == "是"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
        }else{
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
        }*/
        $('.add_tit').text("编辑回访");
        $('.add_box').show();
    });
    //添加
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加回访");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        var mode = $('.mode input').val();
        var sort = $('.sort input').val();
        if(mode == ""){
            $('.mode-xing').show();
        }else{
            $('.mode-xing').hide();
        }
        if(sort == ""){
            $('.sort-xing').show();
        }else{
            $('.sort-xing').hide();
        }
        
        if(mode != "" && sort != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.mode-xing').hide();
        $('.sort-xing').hide();
        //清空文本框
        $('.mode input').val("");
        $('.sort input').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);
    }
}