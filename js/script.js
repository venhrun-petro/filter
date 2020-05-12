window.onload = function(){


	let clearText = document.querySelectorAll('.news_general_items_cont_decription');
	let test = 'Beim Bau fa    von Räumen mit einer großen Personenkapazität nach entsprechender Versammlungs-stättenverordnung müssen Unterdecken und Verkleidungen an Decken aus schwerentflammbaren Baustoffen bestehen. Lignotrend führt darum auf Anfrage seit einigen Jahren seine bewährten';
	console.log(test.split('').length);
	if (clearText) {
		let symbolLenght = 268;
		clearText.forEach(function (el){
			if(el.innerHTML.split('').length >= symbolLenght){
				el.innerHTML = el.innerHTML.split('',symbolLenght).join('') + '...';
			}
		});
	}
	let filterYearClear = document.querySelectorAll('.news_general_items');
	if (filterYearClear) {
		filterYearClear.forEach(function (el){
			let filterYearArray = [];
			let filterYearArrayNew = [];
			filterYearArray = el.getAttribute('data-filteryear').split('.');
			for (let i = 0; i < filterYearArray.length; i++) {
				if(i = filterYearArray.length - 1){
					filterYearArrayNew.push(filterYearArray[i]);
					el.setAttribute('data-filteryear', filterYearArrayNew);
				}
			}
		});
	}
    /* FILTER SLIDER */
		let filterCont = document.querySelector('.filter--slider');
		if (filterCont) {
			let filter = document.querySelector('.filter--slider_right_title');
			filter.addEventListener('click' , function(){
                this.classList.toggle('filter--slider_right_title_active');
				this.nextSibling.classList.toggle('filter--slider_right_cont_active');
				let windowWidth = window.screen.availWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
				if (windowWidth <= 576){
					let subFilter = document.querySelectorAll('.filter--slider .filter--slider_right_cont_list');
					subFilter.forEach(function (el){
						el.addEventListener('click' , function(){
							el.classList.toggle('filter--slider_right_cont_list_active');
							el.children[1].classList.toggle('filter--slider_right_cont_list_form_active');
						});
					});
				}
			});
			let checkedValue = null; 
			let rememberFilter = [];
			let myClass = [];
            let inputList = document.querySelectorAll('.filter--slider_right_cont_list_form');
            let slider = document.querySelectorAll('.f-slide');
			inputList.forEach(function (el){
				let inputListitems = el.querySelectorAll("label");
				inputListitems.forEach(function (el){
					el.querySelector('input').onchange = function() {
                        slider.forEach(function (el){
                            el.classList.add('hide');
                        });
						if(this.checked == true){
							if (!rememberFilter.includes(this.value)){
								rememberFilter.push(this.value);
							}
							checkedValue = this.value;
							slider.forEach(function (el){
								if(el.classList.contains(checkedValue)){
									el.classList.add('active');
								}
							});
						}else{
							if (rememberFilter.includes(this.value)){
								rememberFilter.splice(rememberFilter.findIndex(element => element === this.value),1);
							}
							function isIntersect(arr1, arr2) {
								const isArr = (arr) => Array.isArray(arr);
                                const isInter = () => !!arr1.filter(val => arr2.includes(val)).length;  
								return (isArr(arr1) && isArr(arr2)) && isInter();
							}
							checkedValue = this.value;
							slider.forEach(function (el){
								if(el.classList.contains(checkedValue)){
									myClass = [...el.classList];
									let res = isIntersect(myClass, rememberFilter);
									if(!res==true){
										el.classList.remove('active');
										if(!rememberFilter.length){
											slider.forEach(function (el){
												el.classList.remove('hide');
											});
										 }
									} 
								}
							});
						}
					};
				});
			});

		}
		/* FILTER SLIDER */ 
}