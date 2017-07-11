
//global variables
var tag1 = "";
var UserId = '215f931814a740269bdb939d5413ca89';



var loadPic = function(response){
	
	//log the response object
	console.log(response);
	
	
	var icon = response.data[0].images.low_resolution.url;
	
	//set text of HTML elements to your variables $(selector).css({property:value, property:value, ...})
//	$('#img1').css('{background-image:url('+icon+'), url('+iconSec+')}');
$('#img2').css({'background-image':'url('+icon+')'});
//WORKING: $('#img2').css({'background-image':'url('+icon+')'});
//	$('#img2').html('<img src="' + icon + '" class="foto1">');

};
var loadPic2 = function(response){
	
	//log the response object
	console.log(response);
	
	var iconSec = response.data[0].images.low_resolution.url;
//	$('#img2').html('<img src="' + iconSec + '" class="foto2">');
//	$('#imginner').css({'background-image':'url('+iconSec+')'});
	$('#imginner').html('<img src="' + iconSec + '">');


	//set text of HTML elements to your variables $(selector).css({property:value, property:value, ...})
//	$('#img1').css('{background-image:url('+icon+'), url('+iconSec+')}');
//$('#img2').css({'background-image':'url('+icon+')'});

//WORKING:::	$('#img2').html('<br><img src="' + iconSec + '">');
//$('.img').css({'background-image':'url('+iconSec+')'});
//NOTWORKING DUNNO WHY::: $('.img').css({'background-image':'url('+icon+'),url('+iconSec+')'});
$(document).ready(function(){
 // $(".img").css({
 // 'background-image':'#url('+icon+'),url('+iconSec+')',
  //'background-blend-mode':'multiply'})
});
};


var getPic = function(){

	var thisURL = "https://api.instagram.com/v1/tags/"+tag1+"/media/recent?client_id=" + UserId 
	var thisURL2 = "https://api.instagram.com/v1/tags/"+tag2+"/media/recent?client_id=" + UserId 
	$.ajax({
		url : thisURL,
		dataType : "jsonp",
		success : function(response) {
			loadPic(response);			
		}
	});
	$.ajax({
		url : thisURL2,
		dataType : "jsonp",
		success : function(response) {
			loadPic2(response);			
		}
	});
};

var setTag = function(){
	
	
	tag1 = $('.tag1').val();
	tag2 = $('.tag2').val();	
	if(tag1 == null || tag1 == ''){
		alert('You need to list a tag!');
		return;
	};	
	getPic();

};

//init
var init = function(){
	$('#button').click(function(e){
		e.preventDefault();
		setTag();
	});
	
};


//document load listener
$( document ).ready(function() {

    init();
    
});
