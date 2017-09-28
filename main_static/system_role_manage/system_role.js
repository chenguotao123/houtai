//角色管理部分
$(function() {
    func_base();
});

function func_base() {
    //编辑部分
    $(document).on('click','.btn_update',function(e) {
        e.preventDefault();
        /*var jiaose_name = $(this).parents('tr').find('td').eq(1).html();
        var jiaose_desc = $(this).parents('tr').find('td').eq(2).html();
        $('.jiaose_name input').val(jiaose_name);
        $('.jiaose_desc textarea').val(jiaose_desc);*/
        $('.add_tit').text("编辑角色");
        $('.add_box').show();
    });
    //添加按钮部分
    $('.btn_add').on('click',function() {
        $('.input-xing').hide();
        $('.textarea-xing').hide();
        //清空文本框
        $('.jiaose_name input').val("");
        $('.jiaose_desc textarea').val("");
        $('.add_tit').text("添加角色");
        $('.add_box').show();
    });
    //取消
    $('.btn_quxiao').on('click',function() {
        $('.input-xing').hide();
        $('.textarea-xing').hide();
        //清空文本框
        $('.jiaose_name input').val("");
        $('.jiaose_desc textarea').val("");
        $('#allcheck').prop("checked",false);
        $('.check').each(function() {  
            this.checked = false;
        });
        $('.add_box').hide();
    });
    
    //确定验证部分
    $('.btn_queding').on('click',function() {
        var jiaose_name = $('.jiaose_name input').val();
        var jiaose_desc = $('.jiaose_desc textarea').val();
        if(jiaose_name == ""){
            $('.jiaose_name-xing').show();
        }else{
            $('.jiaose_name-xing').hide();
        }
        if(jiaose_desc == ""){
            $('.jiaose_desc-xing').show();
        }else{
            $('.jiaose_desc-xing').hide();
        }
        
        if(jiaose_name != "" && jiaose_desc != ""){
            $('#form_tijiao').submit();
            //提交完，清星,清文本
            
            $('.add_box').hide();
        }
    });

    /*首面总的全选*/
    $('#allcheck').on('click',function() {
        if ($(this).is(':checked')) {  
            $('.check').each(function() {
                this.checked = true;  
            });  
        }else {  
            $('.check').each(function() {  
                this.checked = false;  
            });
        }  
    });
    //全选/取消全选方法  
    function swapCheck(obj,str) {  
        if (obj.is(':checked')) {  
            $(str).each(function() {  
                this.checked = true;  
            });  
        }else {  
            $(str).each(function() {  
                this.checked = false;  
            });  
        }  
    } 
    function oddCheck(obj) {  
        if (obj.is(':checked')) {  
            obj.parents('.td-tit').siblings('td').find(".check").each(function() {  
                this.checked = true;
            });  
        }else {
         obj.parents('.td-tit').siblings('td').find(".check").each(function() {  
            this.checked = false;  
        });  
     }
 } 
    //客户管理部分
    $("#kehu_all").click(function() {
        swapCheck($(this),".kehu-check");
    });
    //客户管理二级调用全选的方法
    $(".customer-tit").click(function() {
        oddCheck($(this));
    });
    //系统管理部分
    $("#check_system").click(function() {
        swapCheck($(this),".system_check");
    });
    //系统管理二级调用全选的方法
    $(".system_tit").click(function() {
        oddCheck($(this));
    });

    //判断至少一个选中
    function CheckBoxChs(obj) {
        var objYN=false; 
        var check = $(obj);
        for(var i = 0; i<check.length;i++) {
            if(check.eq(i).is(':checked')) {
                objYN = true;  
                break;  
            }  
        }
        return objYN;  
    }
    function CheckOne(obj01,obj02) {
        if(CheckBoxChs(obj02) == true) {
            // alert("至少选择一个.");
            $(obj01).prop("checked",true);
        }else{
            $(obj01).prop("checked",false);
        }
    }
    //客户管理调用上方法
    $(".customer-cont .check").on("click",function() {
        CheckOne("#customer_manage",".customer-cont .check");
    });
    $(".visit-cont .check").on("click",function() {
        CheckOne("#visit_manage",".visit-cont .check");
    });
    $(".do-cont .check").on("click",function() {
        CheckOne("#do_manage",".do-cont .check");
    });
    $("#kehu_trans").on("click",function() {
        CheckOne("#kefu_trans","#kehu_trans");
    });
    $("#kehu_merge").on("click",function() {
        CheckOne("#kefu_merge","#kehu_merge");
    });
    //系统管理调用上方法
    $(".manage-cont .check").on("click",function() {
        CheckOne("#system_manage",".manage-cont .check");
    });
    $(".jiaose-cont .check").on("click",function() {
        CheckOne("#jiaose_manage",".jiaose-cont .check");
    });
    //判断全部选中
    function CheckBoxAll(obj) {
        var objYN=[]; 
        var check = $(obj);
        for(var i = 0; i<check.length;i++) {
            if(check.eq(i).is(':checked')) {
                objYN.push(i);
            }  
        }
        return objYN;  
    }
    function CheckAll(str01,str02,num) {
        if(CheckBoxAll(str02).length >= num){
            $(str01).prop("checked",true);
        }else{
            $(str01).prop("checked",false);
        }
    }
    //客户管理调用上面方法
    $('.customer-tit').on('click',function() {
        CheckAll("#kehu_all",".all-cont .check",20);
    });
    $('.all-cont .check').on('click',function() {
        CheckAll("#kehu_all",".all-cont .check",20);
    });
    //系统管理调用上面方法
    $('.system_tit').on('click',function() {
        CheckAll("#check_system",".system-cont .check",6);
    });
    $('.system-cont .check').on('click',function() {
        CheckAll("#check_system",".system-cont .check",6);
    });
}