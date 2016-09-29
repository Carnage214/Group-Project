$('.trucks').on('click', function(){
  console.log('hi');
		document.getElementById("info-side").style.display = "block";
     $('#Name').text($(this).data('name'));
     var twitterHandle = $(this).data('twitter');
     console.log(twitterHandle);

     showTweets(twitterHandle);
    // WHERE TWITTER NAME WILL BE PUSHED AND PUT INTO CODE
	});

	var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}
/*/ IMAGE GALLARY FUNCTION
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
} /*/

  $('.mapIMG').on('mouseover', function () {
    $("#demo").text($(this).data('info'));

  })

  $('.mapIMG').on('mouseout', function () {
    $("#demo").text($(this).data('default'));   
  })

function showTweets (twitterHandle) {
  console.log(twitterHandle);
    document.getElementById('timeline').innerHTML="";

    twttr.widgets.createTimeline({
      sourceType: "profile",
      screenName: twitterHandle
    },
    document.getElementById('timeline'),
    {
      width: '450',
      height: '700',
      related: 'twitterdev,twitterapi'
    }).then(function (el) {
      console.log("Embedded a timeline.")
    });
  }
