$(function() {
    func_base();
});
function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        func_clear();
        /*var abbreviation =  $(this).parents('tr').find('td').eq(1).html();
        var full_name =  $(this).parents('tr').find('td').eq(2).html();
        var owned_business =  $(this).parents('tr').find('td').eq(7).html();
        var customer_service =  $(this).parents('tr').find('td').eq(8).html();
        $('.full_name input').val(full_name);
        $('.abbreviation input').val(abbreviation);
        $(".owned_business option[value='"+ owned_business +"']").prop("selected", true);
        $(".customer_service option[value='"+ customer_service +"']").prop("selected", true);*/
        $('.add_tit').text("编辑门店");
        $('.add_box').show();
    });
    //添加
    $('.btn_add').on('click',function() {
        func_clear();
        $('.add_tit').text("添加门店");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        var full_name = $('.full_name input').val();
        var abbreviation = $('.abbreviation input').val();
        var owned_business = $('.owned_business .selectLt').text();
        var customer_service = $('.customer_service .selectLt').text();
        console.log(customer_service);
        if(full_name == ""){
            $('.full_name-xing').show();
        }else{
            $('.full_name-xing').hide();
        }
        if(abbreviation == ""){
            $('.abbreviation-xing').show();
        }else{
            $('.abbreviation-xing').hide();
        }
        if(owned_business == "请选择业务..."){
            $('.owned_business-xing').show();
        }else{
            $('.owned_business-xing').hide();
        }
        if(customer_service == "请选择客服..."){
            $('.customer_service-xing').show();
        }else{
            $('.customer_service-xing').hide();
        }
        if(full_name != "" && abbreviation != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    })
    function func_clear() {
        //清星
        $('.full_name-xing').hide();
        $('.abbreviation-xing').hide();
        $('.owned_business-xing').hide();
        $('.customer_service-xing').hide();
        //清空文本框
        $('.full_name input').val("");
        $('.abbreviation input').val("");

        $('.owned_business .selectLt').text("请选择业务...");
        $('.owned_business .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
        $('.customer_service .selectLt').text("请选择客服...");
        $('.customer_service .optionsBox .optionBox').eq(0).addClass("selected").siblings(".optionBox").removeClass("selected");
    }
}