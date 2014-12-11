var linkNumbers = {
	darkRoom: 0,
	enterExit: 16,
	hope: 27,
	lines: 31,
	psychedelicStairs:38,
	mood:45,
	dirtyFingaaz:57,
	people:62,
	surreal:78,
	recit:87,
	twoD:92,
	props:102,
	mentalRayScene:107,
	udkProject:109,
	video:116
};


$(function(){
	resizeMainWindow();
	hideWindows();
	$(".gallery").show();

	$("#galleryCarousel").on('slid.bs.carousel',function(){
		lazyLoad();
	});

	eventCheck();

	$(window).resize(function(){
		resizeMainWindow();
	});
});

function resizeMainWindow(){
	$(".main-window").height($(window).height()-$("#header").height())
}

function hideWindows(){
	$(".window").each(function(){
		$(this).hide();
	});
}

function eventCheck(){

	// Checking links
	$(".darkRoom-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["darkRoom"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".enterExit-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["enterExit"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".hope-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["hope"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".lines-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["lines"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".psychedelicStairs-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["psychedelicStairs"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".mood-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["mood"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".dirtyFingaaz-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["dirtyFingaaz"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".people-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["people"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".surreal-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["surreal"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".recit-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["recit"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".twoD-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["twoD"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".props-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["props"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".mentalRayScene-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["mentalRayScene"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".udkProject-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["udkProject"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".video-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["video"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".about-link").click(function(){
		$(".about").slideDown();
		$(".contact").hide();
	});

	$(".contact-link").click(function(){
		$(".contact").slideDown();
		$(".about").hide();
	});






	$(".photography-link").hover(function(){
		$(".photography-menu").show();
	},function(){
		$(".photography-menu").hide();
	});

	$(".3d-link").hover(function(){
		$(".3d-menu").show();
	},function(){
		$(".3d-menu").hide();
	});
}

function lazyLoad(){
	$(".carousel-inner").find('.active').each(function(){
		var img = $(this).find('span').find('img');
		var nextImg = $(this).next().find('span').find('img');
		var prevImg = $(this).prev().find('span').find('img');
		img.attr('src',img.attr('data-src'));
		nextImg.attr('src',nextImg.attr('data-src'));
		prevImg.attr('src',prevImg.attr('data-src'));
	});
}