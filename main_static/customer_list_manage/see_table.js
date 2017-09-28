//待办、回访、购买记录表格部分
$(function() {
	//待办部分
	func_daiban();
	//回访部分
	func_huifang();
	//购买部分
	func_goumai();
});

//待办部分
function func_daiban() {
	//点击进入
	$('.btn_daiban_add').on('click',function() {
		//隐藏查看的基本信息等兄弟部分,显示当前表格
		clear_daiban();
		$('.daiban-tabs-box').show().siblings().hide();
	});
	//返回按钮
	$('.daiban_fanhui').on('click',function() {
		clear_daiban();
		$('.daiban-tabs-box').hide();
		$('.see-tabs-box').show();
	});
	//确定提交按钮
	$('.daiban_queding').on('click',function() {
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
			$('#daiban_form').submit();
            //提交完，清星,清文本
            clear_daiban();
            $('.daiban-tabs-box').hide();
            $('.see-tabs-box').show();
        }
	});
	//编辑
	$('.btn_daiban_update').on('click',function() {
		clear_daiban();
		$('.daiban-tabs-box').show().siblings().hide();
	});
}
function clear_daiban() {
	$('.daiban_textarea-xing').hide();
	$('.daiban_time-xing').hide();
	$('.daiban_service-xing').hide();
	$('.daiban_textarea').val("");
}

//回访部分
function func_huifang() {
	//新建部分
	$('.btn_huifang_add').on('click',function() {
		//隐藏查看的基本信息等兄弟部分,显示当前表格
		clear_huifang();
		$('.huifang-tabs-box').show().siblings().hide();
	});
	//新建中的返回按钮
	$('.huifang_fanhui').on('click',function() {
		//清除
		clear_huifang();
		$('.huifang-tabs-box').hide();
		$('.see-tabs-box').show();
	});
	//新建中的确定按钮
	$('.huifang_queding').on('click',function() {
		//提交submit操作
		var huifang_style = $('#select_ui_name_huifang_style .selectLt').text();
		var huifang_textarea = $('.huifang_textarea').val();
		var huifang_time = $('.huifang_time').val();
		var huifang_service = $('#select_ui_name_huifang_service .selectLt').text();
		if(huifang_style == "请选择..."){
			$('.huifang_style-xing').show();
		}else{
			$('.huifang_style-xing').hide();
		}
		if(huifang_textarea == ""){
			$('.huifang_textarea-xing').show();
		}else{
			$('.huifang_textarea-xing').hide();
		}
		if(huifang_time == ""){
			$('.huifang_time-xing').show();
		}else{
			$('.huifang_time-xing').hide();
		}
		if(huifang_service == "请选择客服..."){
			$('.huifang_service-xing').show();
		}else{
			$('.huifang_service-xing').hide();
		}
		//提交submit操作
		if(huifang_style != "请选择..."  && huifang_textarea != "" && huifang_time != "" && huifang_service != "请选择客服..."){
			$('#huifang_form').submit();
            //提交完，清星,清文本
            clear_huifang();
            $('.huifang-tabs-box').hide();
            $('.see-tabs-box').show();
        }
	});
	//编辑
	$('.btn_huifang_update').on('click',function() {
		clear_huifang();
		$('.huifang-tabs-box').show().siblings().hide();
	});
}
function clear_huifang() {
	$('.huifang_style-xing').hide();
	$('.huifang_textarea-xing').hide();
	$('.huifang_time-xing').hide();
	$('.huifang_service-xing').hide();
	$('.huifang_textarea').val("");
	$('#check120').prop("checked",false);
	$('#check121').prop("checked",true);

	//回访跟进
	$('.genjin_check').prop('checked',false);
	$('.genjin_textarea').val("");
	// $('.genjin_time').val("");
}

function func_goumai() {
	//新建部分
	$('.btn_goumai_add').on('click',function() {
		//隐藏查看的基本信息等兄弟部分,显示当前表格
		clear_goumai();
		$('.goumai-tabs-box').show().siblings().hide();
	});
	//新建中的返回按钮
	$('.goumai_fanhui').on('click',function() {
		//清除
		clear_goumai();
		$('.goumai-tabs-box').hide();
		$('.see-tabs-box').show();
	});
	//新建中的确定按钮
	$('.goumai_queding').on('click',function() {
		//提交submit操作
		var goumai_xiaopiao = $('.goumai_xiaopiao').val();
		var goumai_service = $('#select_ui_name_goumai_service .selectLt').text();
		var goumai_xiaopiao = $('.goumai_xiaopiao').val();

		var text_one_num = $('.goumai_td-one .input-goumai_num').val();
		var text_one_name = $('.goumai_td-one .input-goumai_name').val();
		var text_two_num = $('.goumai_td-two .input-goumai_num').val();
		var text_two_name = $('.goumai_td-two .input-goumai_name').val();
		var stores_goumai_select = $('#select_ui_id_stores_goumai_select .selectLt').text();
		if(goumai_xiaopiao == ""){
			$('.goumai_xiaopiao-xing').show();
		}else{
			$('.goumai_xiaopiao-xing').hide();
		}
		if(goumai_service == "请选择客服..."){
			$('.goumai_service-xing').show();
		}else{
			$('.goumai_service-xing').hide();
		}
		if(text_one_num == "" || text_one_name == "" || text_two_num == "" || text_two_name == "" || stores_goumai_select == ""){
			$('.stores_goumai-xing').show();
		}else{
			$('.stores_goumai-xing').hide();
		}
		var result = $('#goumai_tbody td.goumai_right-chufeng-id').length > 0;
        if(!result){
            $('.goumai_select_product-xing').show();
        }else{
            $('.goumai_select_product-xing').hide();
        }
		//提交submit操作
		if(goumai_xiaopiao != "" && goumai_service != "请选择客服..." && text_one_num != "" && 
			text_one_name != "" && text_two_num != "" && text_two_name != "" && stores_goumai_select != "" && result){
			$('#huifang_form').submit();
            //提交完，清星,清文本
            clear_goumai();
			$('.goumai-tabs-box').hide();
			$('.see-tabs-box').show();
        }
	});
}
function clear_goumai() {
	$('.goumai_select_product-xing').hide();
	$('.goumai_xiaopiao-xing').hide();
	$('.goumai_service-xing').hide();
	$('.stores_goumai-xing').hide();
	$('.goumai_xiaopiao').val("");
	$('.goumai_textarea').val("");
	$('.goumai_td-one .input-goumai_num').val("");
	$('.goumai_td-one .input-goumai_name').val("");
	$('.goumai_td-two .input-goumai_num').val("");
	$('.goumai_td-two .input-goumai_name').val("");
	$('.stores_goumai_select_box .selectLt').html("");
	//添加订单
    $('#goumai_tbody').html("");
    $('#goumai_table').hide();
}

//订单添加中根据店员搜索门店的select
$('.btn_goumai_sou').on('click',function() {
	var dianyuan = $('.goumai_td-two .input-goumai_name').val();
    // $(".stores_select option").remove();
    $.ajax({
    	url: "demo.php", 
    	data:{'dianyuan':dianyuan},
    	type:"post",  
    	dataType:"json",
    	success: function(data){
    		if(data != null && data.status == 0){ 
    			var str = "";
    			str += "<select id='stores_goumai_select' name='stores_goumai_select' class='beautify_input'>"; 
    			for(var i=0;i<data.content.length;i++){
    				if(i==0){
    					str += "<option value ='"+ i +"' selected='true'>"+ data.content[i] +"</option>";
    				}else{
    					str += "<option value ='"+ i +"'>"+ data.content[i] +"</option>";
    				}
    			}
    			str += "</select>";
    			$(".stores_goumai_select_box").html("");
    			$('.stores_goumai_select_box').append(str); 
    			$('.beautify_input').cssSelect();
    		}
    	}
    });
});

//订单中的添加中的添加
$('.button_goumai_add').on('click',function() {
	var select_val = parseInt($('.goumai_select_product option:selected').val());
	var select_product = $('.goumai_select_product option:selected').text();
	var arr = select_product.split("-");
	var price = arr[arr.length-1];
	var srt = "";
	switch(select_val){
		case 0:
		if(parseInt($('.goumai_right-chufeng-id').text()) != 1){                 
			srt += "<tr>";
			srt += "<td class='goumai_right-chufeng-id'>"+ (select_val+1) +"</td>";
			srt += "<td>"+ select_product +"</td>";
			srt += "<td>"+ price +"</td>";
			srt += "<td>";
			srt += "<input name='select_chufnegjing_num' type='text' class='input-right input-right-num' value='1'";
			srt += "</td>";
			srt += "<td>";
			srt += "<input name='select_chufnegjing_price' type='text' class='input-right input-right-price' value='"+ price +"'>";
			srt += "</td>";
			srt += "<td>";
			srt += "<a class='table_del' href='javascript:void(0);'><img src='../../images/icon_table_del.png' alt=''></a>";
			srt += "</td>";
			srt += "</tr>";
			$('#goumai_tbody').append(srt);
		}
		break;     
		case 1:
		if($('.goumai_right-chufengzeng-id').text() != 2){ 
			srt += "<tr>";
			srt += "<td class='goumai_right-chufengzeng-id'>"+ (select_val+1) +"</td>";
			srt += "<td><i class='zengpin'>[赠品]</i>雏凤精-10ml*10支-山东宏济堂-0</td>";
			srt += "<td>"+ price +"</td>";
			srt += "<td>";
			srt += "<input name='select_chufnegjing_num' type='text' class='input-right input-right-num' value='1'>";
			srt += "</td>";
			srt += "<td>";
			srt += "<input name='select_chufnegjing_price' type='text' class='input-right input-right-price' value='"+ price +"'>";
			srt += "</td>";
			srt += "<td>";
			srt += "<a class='table_del' href='javascript:void(0);'><img src='../../images/icon_table_del.png' alt=''></a>";
			srt += "</td>";
			srt += "</tr>";
			$('#goumai_tbody').append(srt);
		}
		break;
	}
	$('#goumai_table').show();
});