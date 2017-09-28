/*用户管理部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var salesman =  $(this).parents('tr').find('td').eq(1).html();
        var xingji =  $(this).parents('tr').find('td').eq(2).html();
        var sales_between =  $(this).parents('tr').find('td').eq(3).html();
        var arr=sales_between.split('-');
        var sort =  $(this).parents('tr').find('td').eq(4).html();
        var jinyong =  $(this).parents('tr').find('td').eq(5).html();
        $('.salesman input').val(salesman);
        $('.xingji input').val(xingji);
        $('input.sales_between_one').val(arr[0]);
        $('input.sales_between_two').val(arr[1]);
        $('.sort input').val(sort);
        if(jinyong == "是"){
            $('#check1').prop("checked", true);
            $('#check2').prop("checked", false);
        }else{
            $('#check1').prop("checked", false);
            $('#check2').prop("checked", true);
        }*/
        $('.add_tit').text("编辑店员等级");
        $('.add_box').show();
    });
    //添加角色部分
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加店员等级");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //判断销售范围
    $('.btn_queding').on('click',function() {
        var salesman = $('.salesman input').val();
        var xingji = $('.xingji input').val();
        var sales_between_one = $('.sales_between_one').val();
        var sales_between_two = $('.sales_between_two').val();
        var sort = $('.sort input').val();
        if(salesman == ""){
            $('.salesman-xing').show();
        }else{
            $('.salesman-xing').hide();
        }
        if(xingji == ""){
            $('.xingji-xing').show();
        }else{
            $('.xingji-xing').hide();
        }
        if(sales_between_one == "" || sales_between_two == ""){
            $('.sales_between-xing').show();
            $('.sales_between-xing').html("*");
        }else{
            $('.sales_between-xing').hide();
            $('.sales_between-xing').html("");
        }
        if(sort == ""){
            $('.sort-xing').show();
        }else{
            $('.sort-xing').hide();
        }
        
        if(sales_between_one != "" && sales_between_two != ""){
            if(parseInt(sales_between_one) >= parseInt(sales_between_two)){
                $('.sales_between-xing').show();
                $('.sales_between-xing').html("第一个销售额需小于第二个");
            }else{
                $('.sales_between-xing').hide();
                $('.sales_between-xing').html("*");
            }
        }
        var result = (parseInt(sales_between_one) >= parseInt(sales_between_two));
        if(salesman != "" && xingji != "" && sales_between_one != "" && sales_between_two != "" 
            && sort != "" && !result){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    function func_clear() {
        //清星
        $('.salesman-xing').hide();
        $('.xingji-xing').hide();
        $('.sales_between-xing').hide();
        $('.sort-xing').hide();
        //清空文本框
        $('.salesman input').val("");
        $('.xingji input').val("");
        $('.sales_between_one').val("");
        $('.sales_between_two').val("");
        $('.sort input').val("");
        $('#check1').prop("checked",false);
        $('#check2').prop("checked",true);
    }
}