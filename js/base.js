$(function() {
	//表格升降序
	func_sort();
	//表格hover样式
	func_hover();
	//表格分页
	func_page();
	//检测ie浏览器
	if(navigator.userAgent.indexOf("MSIE")>0){   
		if(navigator.userAgent.indexOf("MSIE 6.0")>0){   
			// alert("ie6");    
		}   
		if(navigator.userAgent.indexOf("MSIE 7.0")>0){  
			// alert("ie7");  
		}   
		if(navigator.userAgent.indexOf("MSIE 8.0")>0 && !window.innerWidth){
			// alert("ie8");
			// func_radio();
			func_placeholder();
		}   
		if(navigator.userAgent.indexOf("MSIE 9.0")>0){  
			// alert("ie9");
			func_placeholder();
		}
  	}
});

//获取当前时间
function getNowFormatDateTime() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var Hours = date.getHours();
	var Minutes = date.getMinutes();
	var Seconds = date.getSeconds();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (Hours >= 1 && Hours <= 9) {
		Hours = "0" + Hours;
	}
	if (Minutes >= 0 && Minutes <= 9) {
		Minutes = "0" + Minutes;
	}
	if (Seconds >= 1 && Seconds <= 9) {
		Seconds = "0" + Seconds;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	+ " " + Hours + seperator2 + Minutes + seperator2 + Seconds;
	return currentdate;
}
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
	return currentdate;
}

//美化的radio和checkbox兼容
/*function func_radio() {
    //radio单选框,兼容ie8
    $('.radioFour').on('click',function() {
    	if(!$(this).find('input').is(':checked')){
    		//当没被选中时
    		$(this).find('input').prop('checked',true);
    		$(this).siblings('.radioFour').find('input').prop('checked',false);
    		$(this).find('label').removeClass('not_selected').addClass('selected');
    		$(this).siblings('.radioFour').find('label').removeClass('selected').addClass('not_selected');
    	}
    });
	//checkbox单选框,兼容ie8
	$('.checkFour').on('click',function() {
		if($(this).find('input').is(':checked')){
	        //当多选框为选中时
	        $(this).find('input').prop('checked',false);
	        $(this).find('label').removeClass('selected').addClass('not_selected');
	    }else{
	        //当多选框为没被选中时
	        $(this).find('input').prop('checked',true);
	        $(this).find('label').removeClass('not_selected').addClass('selected');
	    }
	});
}*/

//placeholder
function func_placeholder() {
	var doc=document,
    inputs=doc.getElementsByTagName('input'),
    supportPlaceholder='placeholder'in doc.createElement('input'),
    
    placeholder=function(input){
     var text=input.getAttribute('placeholder'),
     defaultValue=input.defaultValue;
     if(defaultValue==''){
        input.value=text
     }
     input.onfocus=function(){
        if(input.value===text)
        {
            this.value=''
        }
      };
     input.onblur=function(){
        if(input.value===''){
            this.value=text
        }
      }
  };
  if(!supportPlaceholder){
     for(var i=0,len=inputs.length;i<len;i++){
          var input=inputs[i],
          text=input.getAttribute('placeholder');
          if(input.type==='text'&&text){
             placeholder(input)
          }
      }
  }
}

// 确认删除部分
function confirm1() {
	//显示删除的提示框
    $('.del_tishi .del-box-cont span',window.parent.document).text("你确定要删除吗？");
	$('.mask_del',window.parent.document).show();
	// 提示框中的取消按钮
	$('.del_tishi .btn_close',window.parent.document).on('click',function() {
		$('.mask_del',window.parent.document).hide();
	});
	$('.del_tishi .dialog_close',window.parent.document).on('click',function() {
		$('.mask_del',window.parent.document).hide();
	});
	// 提示框中的确认按钮
	$('.del_tishi .btn_ok',window.parent.document).on('click',function() {
	    //在里面执行删除操作
	    /*$ajax({
	    	url:"",
	    	data:"",
	    	dataType:"",
	    	type:"",
	    	success:function(data) {
	    		if(data == 1){
	    			$('.del-box-cont i').css("background-position","0 0");
	    			$('.del-box-cont span').html("删除成功！");
	    		}else {
	    			$('.del-box-cont .result-question').css('background-position','-100px 0');
	    			$('.del-box-cont span').html("删除失败！");
	    		}
	    	},
	    	error:function(data) {
	    		$('.del-box-cont .result-question').css('background-position','-100px 0');
	    		$('.del-box-cont span').html("删除失败！");
	    	}
	    });*/
	    //成功后显示隐藏当前的框，显示结果框
	    $('.del_result .del-box-cont .result-question',window.parent.document).css("background-position","0 0");
	    $('.del_result .del-box-cont span',window.parent.document).html("删除成功！");
	    /*如果失败，则用这句
	    $('.del-box-cont .result-question').css('background-position','-100px 0');
	    $('.del-box-cont span').html("删除失败！");*/
	    $('.del_tishi',window.parent.document).hide();
	    $('.del_result',window.parent.document).show();
	});

	//结果框部分，关闭
	$('.del_result .dialog_close',window.parent.document).on('click',function() {
	    $('.del_result .del-box-cont .result-question',window.parent.document).css("background-position","0 0");
	    $('.del_result .del-box-cont span',window.parent.document).html("删除成功！");
		$('.del_result',window.parent.document).hide();
		$('.mask_del',window.parent.document).hide();
		$('.del_tishi',window.parent.document).show();
		window.location.reload();
	});
	$('.del_result .button_ok',window.parent.document).on('click',function() {
	    $('.del_result .del-box-cont .result-question',window.parent.document).css("background-position","0 0");
	    $('.del_result .del-box-cont span',window.parent.document).html("删除成功！");
		$('.del_result',window.parent.document).hide();
		$('.mask_del',window.parent.document).hide();
		$('.del_tishi',window.parent.document).show();
		window.location.reload();
	});
}

//表格升降序
function func_sort() {
	$('.th-sort').on('click',function() {
	    // alert($(this).text());
	    if($(this).find('.th-icon-sort').attr("src") == "../../images/sort_bot.png"){
	    	$(this).find('.th-icon-sort').prop("src","../../images/sort_top.png");
	        //升序
	        $.ajax({
	        	url: "demo.php",
	        	data: {"sort":"asc"},
	        	dataType: "json",
	        	type: "post",
	        	success: function(data) {

	        	},
	        	error: function(data) {

	        	}
	        });
	    }else if($(this).find('.th-icon-sort').attr("src") == "../../images/sort_top.png"){
	    	$(this).find('.th-icon-sort').prop("src","../../images/sort_bot.png");
	        //降序
	        $.ajax({
	        	url: "demo.php",
	        	data: {"sort":"desc"},
	        	dataType: "json",
	        	type: "post",
	        	success: function(data) {

	        	},
	        	error: function(data) {

	        	}
	        });
	    }
	});
}

//分页部分
function func_page() {
	//选择页码
	$('.page-num').bind('keydown', function (e) {
		var key = e.which;
		if (key == 13) {
			e.preventDefault();
			var all_page = parseInt($(this).parents('.pagination').find('.span_text i').html());
			var page_num = parseInt($(this).val());
			if(page_num == 0){
				$(this).val("1");
				page_num = 1;
			}
			if(page_num > all_page){
				$(this).val(all_page);
				page_num = all_page;
			}
			//左右边箭头样式判断
			if(page_num <= 1){
				$(this).siblings('.left-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
				$(this).siblings('.left-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			}else{
				$(this).siblings('.left-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
				$(this).siblings('.left-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			}
			if(page_num >= all_page){
				$(this).siblings('.right-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
				$(this).siblings('.right-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			}else{
				$(this).siblings('.right-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
				$(this).siblings('.right-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			}
	        // console.log(page_num);
	        //传送的页数为page_num
	        /*$.ajax({
	            url:"demo.php",
	            data:{pagenum:page_num},
	            dataType:"json",
	            type:"post",
	            success:function(data) {
	                console.log(data);
	            },
	            error:function(data) {
	                console.log(data);
	            }
	        });*/
    	}
	});
	$(".pagination-list").change(function(){
		var opt_value=$(this).val();
	    console.log(opt_value);
	    // $(this).find("option[value='"+opt_value+"']").attr("selected","selected");
	});
	
	$('.left-btn').on('click',function() {
		var page_num = parseInt($(this).parents('.pagination').find('.page-num').val());
		var all_page = parseInt($(this).parents('.pagination').find('.span_text i').html());
		if(!$(this).hasClass("current") && page_num > 1){
			page_num--;
			$(this).parents('.pagination').find('.page-num').val(page_num);
		}
		//左右边箭头样式判断
		if(page_num <= 1){
			$(this).addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).siblings('.left-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).siblings('.left-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
		if(page_num >= all_page){
			$(this).siblings('.right-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).siblings('.right-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).siblings('.right-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).siblings('.right-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
	});

	$('.right-btn').on('click',function() {
		var page_num = parseInt($(this).parents('.pagination').find('.page-num').val());
		var all_page = parseInt($(this).parents('.pagination').find('.span_text i').html());
		if(!$(this).hasClass("current") && page_num < all_page){
			page_num++;
			$(this).parents('.pagination').find('.page-num').val(page_num);
		}
		//左右边箭头样式判断
		if(page_num <= 1){
			$(this).siblings('.left-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).siblings('.left-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).siblings('.left-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).siblings('.left-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
		if(page_num >= all_page){
			$(this).addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).siblings('.right-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).siblings('.right-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
	});

	$('.left-btn-all').on('click',function() {
		$(this).parents('.pagination').find('.page-num').val("1");
		var page_num = parseInt($(this).parents('.pagination').find('.page-num').val());
		var all_page = parseInt($(this).parents('.pagination').find('.span_text i').html());
		//左右边箭头样式判断
		if(page_num <= 1){
			$(this).siblings('.left-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).siblings('.left-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
		if(page_num >= all_page){
			$(this).siblings('.right-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).siblings('.right-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).siblings('.right-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).siblings('.right-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
	});

	$('.right-btn-all').on('click',function() {
		var all_page = $(this).parents('.pagination').find('.span_text i').html();
		$(this).parents('.pagination').find('.page-num').val(all_page);
		var page_num = parseInt($(this).parents('.pagination').find('.page-num').val());
		var all_page = parseInt($(this).parents('.pagination').find('.span_text i').html());
		//左右边箭头样式判断
		if(page_num <= 1){
			$(this).siblings('.left-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).siblings('.left-btn-all').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).siblings('.left-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).siblings('.left-btn-all').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
		if(page_num >= all_page){
			$(this).siblings('.right-btn').addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
			$(this).addClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons_disabeld.png)");
		}else{
			$(this).siblings('.right-btn').removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
			$(this).removeClass("current").css({'background':'#fff','border-color':'#aaa'}).find("i").css("background-image","url(../../images/pagination_icons.png)");
		}
	});
};

//表格hover时的样式
function func_hover() {
	//页数hover样式变化
	$('.pagination a').mouseenter(function() {
		var index = $(this).index();
		if(!$(this).hasClass("current")){
			switch(index){
				case 1:
				$(this).css({
					'background':'#1da02b',
					'border-color':'#1da02b'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons_hover.png)");
				break;
				case 2:
				$(this).css({
					'background':'#1da02b',
					'border-color':'#1da02b'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons_hover.png)");
				break;
				case 6:
				$(this).css({
					'background':'#1da02b',
					'border-color':'#1da02b'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons_hover.png)");
				break;
				case 7:
				$(this).css({
					'background':'#1da02b',
					'border-color':'#1da02b'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons_hover.png)");
				break;
				case 8:
				$(this).css({
					'background':'#1da02b',
					'border-color':'#1da02b'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons_hover.png)");
				break;
			}
		}
	}).mouseleave(function() {
		var index = $(this).index();
		if(!$(this).hasClass("current")){
			switch(index){
				case 1:
				$(this).css({
					'background':'#ffffff',
					'border-color':'#aaa'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons.png)");
				break;
				case 2:
				$(this).css({
					'background':'#ffffff',
					'border-color':'#aaa'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons.png)");
				break;
				case 6:
				$(this).css({
					'background':'#ffffff',
					'border-color':'#aaa'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons.png)");
				break;
				case 7:
				$(this).css({
					'background':'#ffffff',
					'border-color':'#aaa'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons.png)");
				break;
				case 8:
				$(this).css({
					'background':'#ffffff',
					'border-color':'#aaa'
				});
				$(this).find('i').css("background-image","url(../../images/pagination_icons.png)");
				break;
			}
		}
	});
}