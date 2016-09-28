/*/$('#buttons').on('click', function(){
		document.getElementById("info-side").style.visibility = "visible";
	});
  /*/

	var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}
/*/
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
/*/ function mouseOut() {
    $("#demo").text("What Area Are You Looking For?");
} /*/ 
function showTweets (twitterHandle) {
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

  document.getElementById('showNewTweets').onclick = function () {
    var twitterHandle = document.getElementById('twitter-handle').value;
    showTweets(twitterHandle)
  } 