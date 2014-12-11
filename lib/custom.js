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
	});

	$(".enterExit-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["enterExit"]);
	});

	$(".hope-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["hope"]);
	});

	$(".lines-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["lines"]);
	});

	$(".psychedelicStairs-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["psychedelicStairs"]);
	});

	$(".mood-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["mood"]);
	});

	$(".dirtyFingaaz-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["dirtyFingaaz"]);
	});

	$(".people-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["people"]);
	});

	$(".surreal-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["surreal"]);
	});

	$(".recit-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["recit"]);
	});

	$(".twoD-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["twoD"]);
	});

	$(".props-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["props"]);
	});

	$(".mentalRayScene-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["mentalRayScene"]);
	});

	$(".udkProject-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["udkProject"]);
	});

	$(".video-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["video"]);
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