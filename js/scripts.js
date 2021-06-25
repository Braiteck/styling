$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000
	})


	// Товары
	$('.products .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        1024:{
	            items: 2,
	            margin: 20
	        },
	        1280:{
	            items: 2,
	            margin: 30
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				setHeight($(event.target).find('.product .info'))
			}, 100)
		},
		onResized: function(event){
			$(event.target).find('.product .info').height('auto')

			setTimeout(function(){
				setHeight($(event.target).find('.product .info'))
			}, 100)
		}
	})


	// Наши партнеры
	$('.partners .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 3000,
		responsive: {
	        0:{
	            items: 2
	        },
	        480:{
	            items: 3
	        },
	        768:{
	            items: 4
	        },
	        1024:{
	            items: 6
	        },
	        1280:{
	            items: 8
	        }
		}
	})


	// Категории
	$('.cats_wall .slider').owlCarousel({
		items: 1,
		margin: 20,
		nav: false,
		dots: false,
		loop: true,
		smartSpeed: 500,
		mouseDrag: false
	})

	$('.cats_wall .item').mouseover(function(){
		let itemSlider = $(this).find('.main .slider')

		itemSlider.trigger('play.owl.autoplay', [2000, 750])
	})

	$('.cats_wall .item').mouseleave(function(){
		let itemSlider = $(this).find('.main .slider')

		itemSlider.trigger('stop.owl.autoplay')
	})


	// Карусель подкатегорий
	$('.cat_sub_cats .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		responsive: {
	        0:{
	            items: 2,
	            margin: 15
	        },
	        480:{
	            items: 3,
	            margin: 15
	        },
	        768:{
	            items: 4,
	            margin: 15
	        },
	        1024:{
	            items: 5,
	            margin: 15
	        },
	        1280:{
	            items: 6,
	            margin: 16
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				$(event.target).find('.owl-nav button').css(
					'top', ($(event.target).find('.thumb').outerHeight() / 2)
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				$(event.target).find('.owl-nav button').css(
					'top', ($(event.target).find('.thumb').outerHeight() / 2)
				)
			}, 100)
		}
	})


	// Карусель в тексте
	$('.carousel_in_text .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		responsive: {
	        0:{
	            items: 2,
	            margin: 15
	        },
	        768:{
	            items: 3,
	            margin: 15
	        },
	        1024:{
	            items: 4,
	            margin: 20
	        },
	        1280:{
	            items: 4,
	            margin: 30
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				$(event.target).find('.owl-nav button').css(
					'top', ($(event.target).find('.thumb').outerHeight() / 2)
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				$(event.target).find('.owl-nav button').css(
					'top', ($(event.target).find('.thumb').outerHeight() / 2)
				)
			}, 100)
		}
	})


	// Товар в избранное
	$('.product .favorite_link, .product_info .favorite_link').click(function(e){
		e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
		} else {
			$(this).addClass('active')
		}
	})


	// Статьи
	$hiddenArticles = ''
	$('.articles .more > *').click(function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.articles').find('.flex')

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')

	    	$hiddenArticles.fadeOut(200)
	    } else {
	    	$hiddenArticles = parent.find(':hidden')

	    	$(this).addClass('active')

	    	parent.find(':hidden').fadeIn(300)
	    }
	})


	// Боковая колонка
	$('aside .mob_cats_link').click(function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})

	$('aside .cats a.sub_link').click(function(e) {
		e.preventDefault()

		let cats = $(this).parent('div').parent('div')

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			cats.find('.sub_link').removeClass('active')
			cats.find('.sub_cats').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Фильтр
	$('body').on('click', 'aside .mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Спойлер в тексте
	$('.filter .more').click(function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.item')

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')

	    	parent.find('.hide').slideUp(500)
	    } else {
	    	$(this).addClass('active')

	    	parent.find('.hide').slideDown(500)
	    }
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
        type     : 'double',
        min      : 0,
        max      : 10000,
        from     : 75,
        to       : 3500,
        step     : 0.01,
        onChange : function (data) {
            $('.filter .price_range input.from').val( data.from.toLocaleString(undefined, {minimumFractionDigits: 2}).replace(/,/, '.') )
            $('.filter .price_range input.to').val( data.to.toLocaleString(undefined, {minimumFractionDigits: 2}).replace(/,/, '.') )
        }
    }).data("ionRangeSlider")

    $('.filter .price_range .input').keyup(function() {
        $priceRange.update({
            from : parseFloat( $('.filter .price_range input.from').val().replace(/\s+/g, '') ),
            to : parseFloat( $('.filter .price_range input.to').val().replace(/\s+/g, '') )
        })
    })


    $('.filter .reset_btn').click(function(){
		$('.filter input').removeAttr('checked')

		$priceRange.reset()
	})


	// Товар
	$('.product_info .images .big .slider').owlCarousel({
		items: 1,
		margin: 20,
		loop: false,
		smartSpeed: 500,
		dots: false,
		nav: false,
	    onTranslate: function(event){
	    	let parent = $(event.target).closest('.images')

	    	parent.find('.thumbs .slide > *').removeClass('active')
	    	parent.find('.thumbs .slide:eq('+ event.item.index +') > *').addClass('active')

	    	$('.product_info .images iframe').each(function(){
				this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
			})
	    }
	})

	$('.product_info .images .thumbs .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		margin: 20,
		responsive: {
	        0:{
	            items: 2
	        },
	        480:{
	            items: 2
	        }
		}
	})

	$('.product_info .images .thumbs .slide > *').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.images')

		parent.find('.thumbs .slide > *').removeClass('active')
	    parent.find('.big .slider').trigger('to.owl.carousel', $(this).data('slide-index'))

	    $(this).addClass('active')
	})


	// Корзина - удаление товара
	$('.cart_info .product .del button').click(function(e){
		e.preventDefault()

		$(this).closest('.product').remove()
		updateCartPrice()
	})


	// Личный кабинет
	$('.lk_info .edit_info_link').click(function(e){
	    e.preventDefault()

	    let parent = $(this).closest('.lk_info')

	    parent.find('.links button, .links a').removeClass('active')
	    $(this).addClass('active')

	    parent.find('.personal, .pass_form').hide()
	    parent.find('.info_form').fadeIn()
	})

	$('.lk_info .edit_pass_link').click(function(e){
	    e.preventDefault()

	    let parent = $(this).closest('.lk_info')

	    parent.find('.links button, .links a').removeClass('active')
	    $(this).addClass('active')

	    parent.find('.personal, .info_form').hide()
	    parent.find('.pass_form').fadeIn()
	})

	$('.lk_info .form .cancel_link').click(function(e){
	    e.preventDefault()

	    let parent = $(this).closest('.lk_info')

	    parent.find('.links button, .links a').removeClass('active')

	    parent.find('.info_form, .pass_form').hide()
	    parent.find('.personal').fadeIn()
	})


	// Личный кабинет - история
	$('.lk_info .history .item .head').click(function(e){
	    e.preventDefault()

	    let parent = $(this).closest('.item')

	    if( parent.hasClass('active') ){
	    	parent.removeClass('active').find('.data').slideUp(300)
	    }else{
	    	$('.lk_info .history .data').slideUp()
	    	$('.lk_info .history .item').removeClass('active')

	    	parent.addClass('active').find('.data').slideDown(300)
	    }
	})


	// Оформление заказа
	$('#delivery_method').change(function(){
		let _self = $(this)

		setTimeout(function(){
			let delivery = _self.val()

			$('.checkout_info .form .delivery_method').hide()
			$('.checkout_info .form .delivery_method'+ delivery).fadeIn(300)
		}, 10)
	})

	$('#payment_method').change(function(){
		let _self = $(this)

		setTimeout(function(){
			let payment = _self.val()

			$('.checkout_info .form .payment_method').hide()
			$('.checkout_info .form .payment_method'+ payment).fadeIn(300)
		}, 10)
	})


	// Всплыващка заявки
	$('#order_modal #type').change(function(){
		let _self = $(this)

		setTimeout(function(){
			let type = _self.val()

			$('#order_modal .form .type').hide()
			$('#order_modal .form .type'+ type).fadeIn(300)
		}, 10)
	})

	$('#order_modal .material_select').change(function(){
		let _self = $(this)
		let parent = _self.closest('.type')
		let id = _self.attr('id')

		setTimeout(function(){
			let material = _self.val()

			parent.find('.type_material').hide()
			parent.find('.type_material'+ material).fadeIn(300)
		}, 10)
	})

	$('#order_modal .form_select').change(function(){
		let _self = $(this)
		let parent = _self.closest('.type')
		let id = _self.attr('id')

		setTimeout(function(){
			let material = _self.val()

			parent.find('.type_form').hide()
			parent.find('.type_form'+ material).fadeIn(300)
		}, 10)
	})

	$('#order_modal .type_form .diameter label').click(function(){
		let _self = $(this)
		let parent = _self.closest('.type_form')

		setTimeout(function(){
			parent.find('.hole').fadeIn(300)
		}, 10)
	})


	// Мои запросы - удаление товара
	$('.requests .product .del button').click(function(e){
		e.preventDefault()

		$(this).closest('.product').remove()
		updateCartPrice()
	})


	// Спойлер в тексте
	$('body').on('click', '.text_block .spoler_link', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.text_block')

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')

	    	parent.find('.hide').slideUp(500)
	    } else {
	    	$(this).addClass('active')

	    	parent.find('.hide').slideDown(500)
	    }
	})


	// Отправка форм
	$('body').on('submit', '.form.custom_submit', function(e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : '#success_modal',
			type : 'inline',
      		btnTpl: {
				smallBtn:
					'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small"">' +
					'<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>' +
					'</button>'
			},
			afterShow : function( instance, current ) {
				setTimeout(function(){
					$.fancybox.close()
				}, 2000)
			}
		})
	})


	$('.subscribe form').submit(function(e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : '#subscribe_success_modal',
			type : 'inline',
      		btnTpl: {
				smallBtn:
					'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small"">' +
					'<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>' +
					'</button>'
			},
			afterShow : function( instance, current ) {
				setTimeout(function(){
					$.fancybox.close()
				}, 2000)
			}
		})
	})
})


$(window).load(function(){
	// Выравнивание элементов в сетке
	$('.products .flex').each(function(){
		productsHeight($(this), parseInt($(this).css('--products_count')))
	})
})


$(window).resize(function(){
	// Выравнивание элементов в сетке
	$('.products .flex').each(function(){
		productsHeight($(this), parseInt($(this).css('--products_count')))
	})
})


// Выравнивание товаров
function productsHeight(context, step){
	let start = 0
	let finish = step
	let products = context.find('.product')

	products.find('.info').height('auto')

	for( let i = 0; i < products.length; i++ ){
		let obj = products.slice(start, finish).find('.info')

		setHeight( obj )

		start = start+step
		finish = finish+step
	}
}