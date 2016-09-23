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
//置顶

$(document).ready(function() {
	$(window).scroll(function() {
		var scrollhight = document.body.scrollTop;
		if(scrollhight > 210) {
			$(".screen").addClass("screenTop")

		} else {
			$(".screen").removeClass("screenTop")

		}
	})
})