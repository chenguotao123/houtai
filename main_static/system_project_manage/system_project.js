/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var project_name =  $(this).parents('tr').find('td span').eq(0).html();

        var input_check =  $(this).parents('tr').find('td').eq(3).html();
        var single_check =  $(this).parents('tr').find('td').eq(4).html();
        var add_check =  $(this).parents('tr').find('td').eq(5).html();
        var jinyong_check =  $(this).parents('tr').find('td').eq(6).html();

        $('.project_name input').val(project_name);
        if(input_check == "单选"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
            $('#check3').prop("checked", false);
        }else if(input_check == "多选"){
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
            $('#check3').prop("checked", false);
        }else{
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", false);
            $('#check3').prop("checked", true);
        }
        if(single_check == "是"){
            $('#check4').prop("checked", true);
            $('#check5').prop("checked", false);
        }else if(single_check == "否"){
            $('#check4').prop("checked", false);
            $('#check5').prop("checked", true);
        }
        if(add_check == "是"){
            $('#check6').prop("checked", true);
            $('#check7').prop("checked", false);
        }else if(add_check == "否"){
            $('#check6').prop("checked", false);
            $('#check7').prop("checked", true);
        }
        if(jinyong_check == "是"){
            $('#check8').prop("checked", true);
            $('#check9').prop("checked", false);
        }else if(jinyong_check == "否"){
            $('#check8').prop("checked", false);
            $('#check9').prop("checked", true);
        }*/
        $('.add_tit').text("编辑项目");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加项目");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        var project_name = $('.project_name input').val();
        if(project_name == ""){
            $('.project_name-xing').show();
        }else{
            $('.project_name-xing').hide();
        }
        
        if(project_name != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.top_project-xing').hide();
        $('.project_name-xing').hide();
        //清空文本框
        $('.project_name input').val("");
        $('#check1').prop("checked",true);
        $('#check2').prop("checked",false);
        $('#check3').prop("checked",false);

        $('#check4').prop("checked",false);
        $('#check5').prop("checked",true);

        $('#check6').prop("checked",true);
        $('#check7').prop("checked",false);

        $('#check8').prop("checked",false);
        $('#check9').prop("checked",true);
    }
}