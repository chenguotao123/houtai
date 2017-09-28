/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var customer =  $(this).parents('tr').find('td').eq(1).html();
        var integral_between =  $(this).parents('tr').find('td').eq(2).html();
        var arr=integral_between.split('-');
        var sort =  $(this).parents('tr').find('td').eq(3).html();
        var jinyong =  $(this).parents('tr').find('td').eq(4).html();
        $('.customer input').val(customer);
        $('input.integral_between_one').val(arr[0]);
        $('input.integral_between_two').val(arr[1]);
        $('.sort input').val(sort);
        if(jinyong == "是"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
        }else{
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
        }*/
        $('.add_tit').text("编辑客户等级");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加客户等级");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //判断积分范围
    $('.btn_queding').on('click',function() {
        var customer = $('.customer input').val();
        var integral_between_one = $('.integral_between_one').val();
        var integral_between_two = $('.integral_between_two').val();
        var sort = $('.sort input').val();
        if(customer == ""){
            $('.customer-xing').show();
        }else{
            $('.customer-xing').hide();
        }
        if(integral_between_one == "" || integral_between_two == ""){
            $('.integral_between-xing').show();
            $('.integral_between-xing').html("*");
        }else{
            $('.integral_between-xing').hide();
            $('.integral_between-xing').html("");
        }
        if(sort == ""){
            $('.sort-xing').show();
        }else{
            $('.sort-xing').hide();
        }
        
        if(integral_between_one != "" && integral_between_two != ""){
            if(parseInt(integral_between_one) >= parseInt(integral_between_two)){
                $('.integral_between-xing').show();
                $('.integral_between-xing').html("第一个积分需小于第二个");
            }else{
                $('.integral_between-xing').hide();
                $('.integral_between-xing').html("*");
            }
        }
        var result = (parseInt(integral_between_one) >= parseInt(integral_between_two));
        if(customer != "" && integral_between_one != "" && integral_between_two != "" 
            && sort != "" && !result){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.customer-xing').hide();
        $('.integral_between-xing').hide();
        $('.sort-xing').hide();
        //清空文本框
        $('.customer input').val("");
        $('.integral_between input').val("");
        $('.sort input').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);
    }
}