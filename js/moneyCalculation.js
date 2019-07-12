$(function () {

	const kun = $('.order-item.step-four .set-date');
	const	vaqt = $('.order-item.step-four .set-time');
	const odam = $('.order-item.step-four .set-people');
	const	tur = $('.order-item.step-four .set-type');
	const	option = $('.order-item.step-four .set-options');
	const	summa = $('.order-item.step-four .total-price span');
	var doimiySumma = 1;

//	$('.order-slider .step-two #r1 label').addClass("checked-first");

	$('.order-slider .order-item.step-one  input.select-date').on('change', function () {
		myDate($(this).val(), kun);
	})

	$('.order-slider .order-item.step-one  input.select-time').on('change', function () {
		myTime($(this).val(), vaqt);
	})

		var oldNumbers = 1;
		
	$('.order-slider .order-item.step-one .custom-select .select-items > div').on('click', function () {
		
//		var oldMoney = parseInt($('#uyut').text(), 10) - (oldNumbers * 100);
		var jamiPul = parseInt($(this).text(), 10) * 100;
		var umumiy = jamiPul;
		
		summa.text(umumiy.toString());
		$('.order-section .for-absolute #total').text(umumiy);
		
		myClient($(this).text(), odam);
		
		oldNumbers = parseInt($(this).text(), 10);
		doimiySumma = oldNumbers / 100;
		
		$('.order-slider .order-item.step-two  input').prop('checked', false);
		$('.order-slider .order-item.step-three  input').prop('checked', false);
		
		const percent = parseInt($('.order-item.step-five #deposit').val())
		umumiy = parseInt($('#uyut').text(), 10);
		
		$('.order-item.step-five #discount').text(umumiy - (umumiy * percent) / 100);
	
		
	})

	$('.order-slider .order-item.step-two  input').on('change', function () {
		$('.order-slider .step-two label.checked-first').removeClass("checked-first");
		
		const checked = $('.order-slider .order-item.step-two  input:checked');
		myChoice(checked, tur);
		
		$('.order-slider .order-item.step-three  input').prop('checked', false);
		
		$('.order-section .for-absolute #total').text(oldNumbers * parseInt(checked.attr('data-value'), 10));
		summa.text(oldNumbers * parseInt(checked.attr('data-value'), 10));
		
		const percent = parseInt($('.order-item.step-five #deposit').val());
		const umumiy = oldNumbers * parseInt(checked.attr('data-value'), 10);
		
		$('.order-item.step-five #discount').text(umumiy - (umumiy * percent) / 100);
		
	});

	$('.order-slider .order-item.step-three  input').on('click', function () {
		
		var inputs = '';
		
		$('.order-slider .order-item.step-three input:checked').each(function(){
			inputs += $(this).parent().find('p').text() + ', ';
		})
		
		
		option.text('');
		option.text(inputs);
		
		if( $(this).parent().find('input').prop('checked') == true ){
			const newMoney = parseInt($(this).parent().find('span').text(), 10)
			const oldMoney = parseInt($('#uyut').text(), 10);
			const umumiy = oldMoney + newMoney;
			summa.text('0');
			summa.text(umumiy.toString());
			$('.order-section .for-absolute #total').text(umumiy);
			
			const percent = parseInt($('.order-item.step-five #deposit').val(),10);

			$('.order-item.step-five #discount').text(parseInt(umumiy - (umumiy * percent) / 100));
			
			doimiySumma = umumiy / 100;
		}else
		if( $(this).parent().find('input').prop('checked') == false ){
			const newMoney = parseInt($(this).parent().find('span').text(), 10)
			const oldMoney = parseInt($('#uyut').text(), 10);
			const umumiy = oldMoney - newMoney;
			summa.text(umumiy.toString());
			$('.order-section .for-absolute #total').text(umumiy);
			
			const percent = parseInt($('.order-item.step-five #deposit').val(),10);

			$('.order-item.step-five #discount').text(parseInt(umumiy - (umumiy * percent) / 100));
			
			doimiySumma = umumiy / 100;
		}
		
		
		
	});
	
	
		const percent = parseInt($('.order-item.step-five #deposit').val())
		const umumiy = parseInt($('#uyut').text(), 10);
		
		$('.order-item.step-five #discount').text(umumiy - (umumiy * percent) / 100);
	
		$('.order-item.step-five #deposit').change(function(){
		
		const percent = parseInt($(this).val())
		const umumiy = parseInt($('#uyut').text(), 10);
		
		$('.order-item.step-five #discount').text(parseInt(umumiy - (umumiy * percent) / 100));
		
	})
	
	
	
	
	function myDate(qiymat, reciever) {
		var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";

		const d = new Date(qiymat);
		const m = month[d.getMonth()];
		const k = d.getDate()
		reciever.text(k + ' ' + m);
	}

	function myTime(qiymat, reciever) {
		reciever.text(qiymat);
	}

	function myClient(qiymat, reciever) {
		reciever.text(qiymat);
	}

	function myChoice(qiymat, receiver) {
		receiver.text(qiymat.parent().find('label').text());
	}





})