$(document).ready(function() {
//	/加载完成后隐藏多选和删除按钮/
	$("#checkall").hide();
	$(".delete").hide()
	
//	/按下全选按钮后,多选按钮被选中/
	$("#checkall").click(function() {
		$("input[name='checkname[]']").each(function() {
			$(this).attr("checked", true);
		});
	});
	
//	/当有选项选中时，出现全选和删除按钮/
	$("input").click(function() {
				$("#checkall").show();
				$(".delete").show();
	});
	
//	/确认完成后弹出完成提示/
	$("#toast").hide();
	$("#commodity_delete").click(function() {

		$("#toast").show()
		$("#toast .weui_toast").addClass("weui_dialog_confirm_tianjia").fadeOut(2000);
		$("#toast").fadeOut(1000)
	});
	
//	/资料修改后出现保存和取消按钮/
	$(".weui_btn_area").hide()
	$("#user_home_useralter input").focus(function() {
		$(".weui_btn_area").show()
	});
	
//	按下保存按钮时弹出确认保持或取消
	$("#showTooltips").click(function() {
		$(".weui_dialog_confirm div").addClass("weui_dialog_confirm_tianjia")
	});
	//不管确定或取消都移除样式
	$("#user_home_useralter .weui_dialog_confirm  .weui_dialog .weui_dialog_ft a").click(function() {
		$("#user_home_useralter .weui_dialog_confirm div").removeClass("weui_dialog_confirm_tianjia")
	});
	
//	/提示操作状态为成功/
	$("#user_home_useralter .weui_dialog_confirm  .weui_dialog .weui_dialog_ft .primary").click(function() {

		$("#toast").show()
		$("#toast .weui_toast").addClass("weui_dialog_confirm_tianjia").fadeOut(2000);
		$("#toast").fadeOut(1000)
	});

})