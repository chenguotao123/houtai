/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var stage_name = $(this).parents('tr').find('td').eq(1).html();
        var stage_desc = $(this).parents('tr').find('td').eq(2).html();
        var sort = $(this).parents('tr').find('td').eq(3).html();
        var jinyong = $(this).parents('tr').find('td').eq(4).html();
        $('.stage_name input').val(stage_name);
        $('.stage_desc textarea').val(stage_desc);
        $('.sort input').val(sort);
        if(jinyong == "是"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
        }else{
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
        }*/
        $('.add_tit').text("编辑阶段名称");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加阶段名称");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        var stage_name = $('.stage_name input').val();
        var stage_desc = $('.stage_desc textarea').val();
        var sort = $('.sort input').val();
        if(stage_name == ""){
            $('.stage_name-xing').show();
        }else{
            $('.stage_name-xing').hide();
        }
        if(stage_desc == ""){
            $('.stage_desc-xing').show();
        }else{
            $('.stage_desc-xing').hide();
        }
        if(sort == ""){
            $('.sort-xing').show();
        }else{
            $('.sort-xing').hide();
        }
        
        if(stage_name != "" && stage_desc != "" && sort != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.stage_name-xing').hide();
        $('.stage_desc-xing').hide();
        $('.sort-xing').hide();
        //清空文本框
        $('.stage_name input').val("");
        $('.stage_desc textarea').val("");
        $('.sort input').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);
    }
}