/*用户管理部分*/
$(function() {
    func_base();
});

function func_base() { 
    //查看
    $('.btn_chakan').on('click',function() {
        $('.add_box').show();
    });
    //返回
    $('.btn_fanhui').on('click',function() {
        $('.add_box').hide();
    });
}