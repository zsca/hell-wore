$(document).ready(function() {
	$(".classify li").click(function() {
		$(this).addClass("liAdd").siblings().removeClass("liAdd")
	});
	$(".box div button").click(function() {
		if($(this).is(".icon-49") == true) {
			$(this).removeClass("icon-49").addClass("icon-48")
		} else {
			$(this).removeClass("icon-48").addClass("icon-49")
		}
	});
	//	滚动条事件

	$(window).scroll(function() {
		var scrollhight
		scrollhight = document.body.scrollTop;
		if(scrollhight > 300) {
			$(".classIFY").addClass("screenTop")

		} else {
			$(".classIFY").removeClass("screenTop")

		}
	});
	$(".pullDownLeft ul li").click(function() {
		var Number = $(this).index()
		if($(this).index() == 0) {
			$(".pullDownRight ul").show();
		} else {
			Number = --Number;
			$(".pullDownRight ul:eq(" + Number + ")").show().siblings().hide();
		}
		$(this).addClass("pullDownLeftAdd").siblings().removeClass("pullDownLeftAdd")
	});
	$(".pullDownRight").click(function() {
		$("#pullDown").hide();
		$("#clickPullDown").removeClass("icon-9").addClass("icon-10")
		$(".classIFY").removeClass("screenTop")
	});
	$("#clickPullDown").click(function() {
		if($(this).is(".icon-10")) {
			$(".classIFY").addClass("screenTop")
			$("#pullDown").show();
			$("#clickPullDown").removeClass("icon-10").addClass("icon-9")
		} else {
			$("#pullDown").hide();
			$("#clickPullDown").removeClass("icon-9").addClass("icon-10")

			if(scrollhight < 300) {
				$(".classIFY").removeClass("screenTop")
			} else {
				$(".classIFY").addClass("screenTop")
			}

		}
	});
	$(".panel-body>button").click(function(){
		if ($(this).is(".bg-color")==true) {
			$(this).removeClass("bg-color f-white").addClass("fb-color")
		} else{
			$(this).addClass("bg-color f-white")
			
		}
	})
		//分享
	$(function() {
		$(document).on('swipe', '#item .weui_cell', function() {

			$('.delete').hide()
			$('.delete', this).show();
		})
		$(document).on('tap', '.delete', function() {
			$(this).parent().parent('.weui_cell').remove();
		})

	});

})