$(document).ready(function(){
	
	const goHTML = $('#price .owl-nav .owl-next')
		.clone(true)
		.text('')
		.addClass('sending-button')
		.css({display: 'none', backgroundImage: 'none'})
		.append('<a href="thank.html" style="color: #000">Отправить</a>');
	
	$('#price .owl-nav').append(goHTML);
	const owlPrev = $('#price .owl-nav .owl-next').not('.sending-button');
	
	$( "#date" ).datepicker();
	
$('.timepicker').timepicker({
    timeFormat: 'h:mm',
    interval: 60,
    minTime: '10:00',
    maxTime: '20:00',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});
	
	if ($(window).width() < 1500) {
		$('#price .owl-prev').attr('disabled','disabled');
	}
	
	$('#price .owl-prev').css('background-color', '#ccc');

	

	
	
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

$('.select-selected').on('click',function(){
	  	$('.owl-nav').toggleClass('active-nav');
	  	$('.select-span').toggleClass('select-span-active');
	  	$('.custom-select').toggleClass('active-select');
	  	if($('.select-selected').not('select-arrow-active')){
			$('.select-selected').css({
	  			color:"#000"
	  		});
	  	}
	})
	
	
$('body').click(function(){
	if($('.select-selected').hasClass('select-arrow-active')){
			$('.owl-nav').removeClass('active-nav');
	  	$('.select-span').removeClass('select-span-active');
	  	$('.custom-select').removeClass('active-select');
	}
});
	
	
$('.select-selected').on('click',function(){
if($('.select-items div').not('same-as-selected')){
	  			$('.select-selected').css({
	  			color:"#ccc"
	  		});
	  	}
	})
	
$('.select-selected').on('click',function(){
if($('.select-items div').hasClass('same-as-selected')){
	  			$('.select-selected').css({
	  			color:"#000"
	  		});
	  	}
	})

	$('#date').on('focus',function(){
	  	var w = $('#date').outerWidth();
		$('#ui-datepicker-div').outerWidth(w);
	})

	
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 120){
			$('header').css({ backgroundColor: 'rgba(0,0,0, 0.9)', height: '60px' })
		}else{
			$('header').css({ backgroundColor: 'rgba(0,0,0, 0)', height: '110px' })
		}
	})
	
	$('.share-on-social p').on('click', function(){
		$(this).parent().toggleClass('shared');
		
		if($(this).parent().hasClass('shared')){
			$(this).find('svg').attr('data-icon','times');
		}else{
			$(this).find('svg').attr('data-icon','share-alt');
		}
	})
	
	
	$('#backToTop').on('click', function(){
		$('html, body').animate({ scrollTop : '0px' }, 800);
	})
	
	
	$("header .menu-item1").on('click',function() {
    $('html, body').animate({
        scrollTop: $('#works').offset().top - 80
    }, 800, $.bez([.75,.09,.87,.63]));
	});
	
	$("header .menu-item2").on('click',function() {
    $('html, body').animate({
        scrollTop: $('#price').offset().top - 70
    }, 700, $.bez([.75,.09,.87,.63]));
	});
	
	$("header .menu-item3").on('click',function() {
    $('html, body').animate({
        scrollTop: $('#faq').offset().top - 55
    }, 700, $.bez([.75,.09,.87,.63]));
	});
	
	$("header .menu-item4").on('click',function() {
    $('html, body').animate({
        scrollTop: $('#footer').offset().top - 80
    }, 700, $.bez([.75,.09,.87,.63]));
	});
	
	$(".main-banner .scroll-down").on('click',function() {
    $('html, body').animate({
        scrollTop: $('#twin-sections').offset().top - 70
    }, 700, $.bez([.75,.09,.87,.63]));
	});
	$(".main-banner .book-online").on('click',function() {
    $('html, body').animate({
        scrollTop: $('#price').offset().top - 70
    }, 700, $.bez([.75,.09,.87,.63]));
	});
	
	$('header nav ul li').on('click', function(){
		$('header nav ul li').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.right-side .currency span, .right-side .language span').on('click', function(){
		$(this).parent().find('span').removeClass('active');
		$(this).addClass('active');
	})

	
	$('.order-slider .owl-nav').removeClass('disabled');
	
	$('.order-slider .owl-item.active:lt(1)').addClass('activated');
	
	$('.order-slider .owl-nav button').on('click', function(e){
		
		if($(window).width() < 1500){
			$('.order-slider .owl-item').removeClass('activated');
			$('.order-slider .owl-item.active:lt(1)').addClass('activated');			
		}
		else if($(window).width() >= 1500){
			if(e.target.classList.contains('owl-next') && $('.order-slider .owl-item.activated').index() < 4){
				
				$('.order-section .for-border').css({zIndex: 2})
				$('.order-slider .owl-item.activated').next().addClass('activated');
				$('.order-slider .owl-item.activated:lt(1)').addClass('completed').removeClass('activated');
				$('.order-slider .owl-nav button').css({backgroundColor: '#FFD810'});
				
				
				const divOffset = $('.order-slider .owl-item.activated').position(),
							divWidth = $('.order-slider .owl-item.activated').width(),
							absoluteWidth = $('.order-section .wrapper .for-absolute').width()
				
				$('.order-slider .owl-nav').animate({left: divOffset.left + 11}, 200);
				$('.order-section .for-border').animate({left: divOffset.left}, 200);
				$('.order-section .wrapper .for-absolute').animate({left: divOffset.left + divWidth - absoluteWidth - 13}, 200);
				
				
				if($('.order-slider .owl-item.activated').index() == 4){
					$(this).css({backgroundColor: '#ccc'});
					$('.order-slider .owl-nav button.-owl-prev').css({backgroundColor: '#FFD810'});
				}
				
				$('.order-section .for-border').animate({zIndex: 1}, 300)
			}else
		if(e.target.classList.contains('owl-prev') && $('.order-slider .owl-item.activated').index() > 0){
				$('.order-section .for-border').css({zIndex: 2})
				$('.order-slider .owl-item.activated:lt(1)').prev().addClass('activated');
				$('.order-slider .owl-item.activated').eq(1).removeClass('completed').removeClass('activated');
				$('.order-slider .owl-nav button').css({backgroundColor: '#FFD810'});
			
				
				const divOffset = $('.order-slider .owl-item.activated').position(),
							divWidth = $('.order-slider .owl-item.activated').width(),
							absoluteWidth = $('.order-section .wrapper .for-absolute').width()
			
				$('.order-slider .owl-nav').animate({left: divOffset.left + 11}, 200);
				$('.order-section .for-border').animate({left: divOffset.left}, 200);
				$('.order-section .wrapper .for-absolute').animate({left: divOffset.left + divWidth - absoluteWidth - 13}, 200);
				
			
			
				if($('.order-slider .owl-item.activated').index() == 0){
					$(this).css({backgroundColor: '#ccc'})
				}
				
				$('.order-section .for-border').animate({zIndex: 1}, 300)
			}
			
		}
	})

	
	if($(window).width() < 1500){
		$('#price .owl-next').click(function(){
				$('#price .owl-prev').removeAttr('disabled');
				$('.owl-item.cloned.active').addClass('completed');
				if($('.step-five').parent().hasClass('activated')){
					$('#price .owl-next').attr('disabled','disabled');
					$('#price .owl-next').css('background-color', '#ccc');
					goHTML.css({display: 'inline-block',backgroundColor: '#FFD810'});
					owlPrev.css({display: 'none'});
				}
				else if($('.step-one').parent().hasClass('activated')){
					$('#price .owl-prev').removeAttr('disabled');
							$('#price .owl-prev').css('background-color', '#FFD810');
				}
				else if($('.step-two').parent().hasClass('activated')){
					$('#price .owl-prev').removeAttr('disabled');
							$('#price .owl-prev').css('background-color', '#FFD810');
				}
				else if($('.step-three').parent().hasClass('activated')){
					$('#price .owl-prev').removeAttr('disabled');
							$('#price .owl-prev').css('background-color', '#FFD810');
				}else if($('.step-four').parent().hasClass('activated')){
					$('#price .owl-prev').removeAttr('disabled');
					$('#price .owl-prev').css('background-color', '#FFD810');
				}
				else{
					$('#price .owl-prev').attr('disabled','disabled');
					$('#price .owl-prev').css('background-color', '#FFD810');
				}
			});


		$('#price .owl-prev').click(function(){
			goHTML.css({display: 'none',backgroundColor: '#FFD810'});
			owlPrev.css({display: 'inline-block'});
			if($('.step-one').parent().hasClass('activated')){
				$('#price .owl-prev').attr('disabled','disabled');
				$('#price .owl-prev').css('background-color', '#ccc');
			}else if($('.step-two').parent().hasClass('activated')){
				$('#price .owl-next').removeAttr('disabled');
				$('#price .owl-next').css('background-color', '#FFD810');
			}
			else if($('.step-three').parent().hasClass('activated')){
				$('#price .owl-next').removeAttr('disabled');
				$('#price .owl-next').css('background-color', '#FFD810');
			}
			else if($('.step-four').parent().hasClass('activated')){
				$('#price .owl-next').removeAttr('disabled');
				$('#price .owl-next').css('background-color', '#FFD810');
			}
			else if($('.step-five').parent().hasClass('activated')){
				$('#price .owl-next').removeAttr('disabled');
				$('#price .owl-next').css('background-color', '#FFD810');
			}
			else{
				$('#price .owl-next').attr('disabled','disabled');
				$('#price .owl-next').css('background-color', '#FFD810');
			}
		});
	}
	
	$('#price .owl-next').on('click', function(){
		if($('#price .owl-item.activated').index() === 5){
			
			if($('#price .step-one .select-date.hasDatepicker').val() === ''){
				$('#price .owl-prev').trigger('click');
				alert('Заполните ето поле')
			}else
			if($('.step-one .select-time.timepicker').val() === ''){
				$('#price .owl-prev').trigger('click');
				alert('Заполните ето поле')
			}
		}
	})
	
	
	
	$('.map-section').on('click',function(){
		
		$('.map-section #map').removeClass('possible').css({zIndex: 0});
	})
	
	
	
	var button = $('.questions-group .question-item .item-title'),
      animateTime = 100;

    $(button).click(function () {
      $('.questions-group .question-item .item-title span').css({transform: 'rotate(0)'})
			reset(animateTime);

			var text = $(this).parent();
			if (text.height() < 60) {
				$('.questions-section .questions-group .question-item .item-title').addClass('hasAccordion');
				autoHeightAnimate(text, animateTime);
				$(this).find('span').css({transform: 'rotate(-45deg)'})
			} else {
				text.stop().animate({ height: '57px' }, animateTime);
				$('.questions-section .questions-group .question-item .item-title').removeClass('hasAccordion');
				$('.questions-group .question-item .item-title span').css({transform: 'rotate(0)'});
			}
    });
	
	
	
	function autoHeightAnimate(element, time) {
		var curHeight = element.height(), // Get Default Height
				autoHeight = element.css('height', 'auto').height(); // Get Auto Height
		element.height(curHeight); // Reset to Default Height
		element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
   }
	function reset(time){
		$('.questions-group .question-item').animate({'height':'57px'}, time);
	}
	
})