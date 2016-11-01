var linkNumbers = {
	darkRoom: 0,
	enterExit: 16,
	hope: 27,
	lines: 32,
	psychedelicStairs:40,
	mood:48,
	dirtyFingaaz:60,
	people:65,
	surreal:81,
	recit:90,
	refais:95,
	lesions:105,
	twoD:113,
	cuir:124,
	props:130,
	CompleteScenes:135,
	udkProject:137,
	video:144
};


$(function(){
	resizeMainWindow();
	hideWindows();
	resizeImages();
	$(".gallery").show();

	$("#galleryCarousel").on('slid.bs.carousel',function(){
		lazyLoad();
	});

	eventCheck();

	$(window).resize(function(){
		resizeMainWindow();
		resizeImages();
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

	$(".refais-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["refais"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".lesions-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["lesions"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".twoD-gen-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["twoD"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".cuir-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["cuir"]);
		$(".about").hide();
		$(".contact").hide();

	});
	
	$(".props-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["props"]);
		$(".about").hide();
		$(".contact").hide();
	});

	$(".CompleteScenes-link").click(function(){
		$("#galleryCarousel").carousel(linkNumbers["CompleteScenes"]);
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



	//Hover
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

	$(".twoD-link").hover(function(){
		$('.twoD-menu').show();
	},function(){
		$('.twoD-menu').hide();
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

function resizeImages(){
	var height = $(window).height()-$("#header").height()-40;
	$(".carouselImage").each(function(){
		$(this).css("max-height", height);
	});
}
