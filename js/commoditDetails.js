$(document).ready(function() {

	$(".commodit>div:eq(0)>div").click(function() {
		$(this).addClass("commoditTianJia").siblings().removeClass("commoditTianJia");
		if($(this).index() == 1) {
			$(".commodit>div:eq(1)").hide();
			$(".commodit>div:eq(2)").show();
		} else {
			$(".commodit>div:eq(2)").hide();
			$(".commodit>div:eq(1)").show();
		}
	});
	$(".choose button").click(function() {
		if($(this).siblings().length > 1) {
			$(this).addClass("buttonTianJia").siblings().removeClass("buttonTianJia")
		}
	});

	$(".showOne").click(function() {
		$("#popup").show();
		$("#popup>div:eq(0)").show().siblings().hide();
	});
	$(".showTwo").click(function() {
		$("#popup").show();
		$("#popup>div:eq(1)").show().siblings().hide();
	});
	$(".hideOne").click(function() {
		$("#popup").hide();
	});
	$(".hideTwo").click(function() {
		$("#popup").hide();
	})
	//点击任何一处关闭
	$("#popup").click(function() {
		$("#popup").hide();
	});
	$(".popup").click(function(event) {
		event.stopPropagation();
	});
})