/*回访部分*/
$(function() {
    func_base();
});
function func_base() {
    //编辑
    $('.btn_update').on('click',function() {
        func_clear();
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        func_clear();
        $('.add_box').hide();
    });
    //确定验证部分
    $('.btn_queding').on('click',function() {
        //提交submit操作
        var daiban_textarea = $('.daiban_textarea').val();
        var daiban_time = $('.daiban_time').val();
        if(daiban_textarea == ""){
            $('.daiban_textarea-xing').show();
        }else{
            $('.daiban_textarea-xing').hide();
        }
        if(daiban_time == ""){
            $('.daiban_time-xing').show();
        }else{
            $('.daiban_time-xing').hide();
        }
        //提交submit操作
        if(daiban_textarea != "" && daiban_time != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            func_clear();
            $('.add_box').hide();
        }
    });
    //清文本内容
    function func_clear() {
        //清星
        $('.daiban_textarea-xing').hide();
        $('.daiban_time-xing').hide();

        $('.daiban_textarea').val("");  
    }
}