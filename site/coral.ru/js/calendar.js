import {hostReactAppReady} from "../../common/js/utils";

hostReactAppReady().then(() => {
	if (location.origin.includes('backoffice')) return;

	const monthesNamesArr = ['Январь – Март', 'Апрель – Июнь', 'Июль – Сентябрь', 'Октябрь – Декабрь']
	const prevBtn = document.querySelector('.slider-nav-btn-prev');
	const nextBtn = document.querySelector('.slider-nav-btn-next');
	const monthElements = document.querySelectorAll('.month');
	let currentIdx = 0;

	function hideElementsExceptRange(index, elements, range = 3) {
		elements.forEach((element, i) => {
			if (i >= index * range && i < (index + 1) * range) {
				element.style.display = 'block';
			} else {
				element.style.display = 'none';
			}
		});
	}

	function toogleMonth(idx) {
		const monthesNavNames = document.querySelector('.monthes-nav-names');
		monthesNavNames.textContent = monthesNamesArr[idx]
	}

	prevBtn.addEventListener('click', () => {
		if (currentIdx > 0) {
			currentIdx--
			hideElementsExceptRange(currentIdx, monthElements);
			toogleMonth(currentIdx)
		}
	})

	nextBtn.addEventListener('click', () => {
		if (currentIdx >= 0 && currentIdx < 3) {
			currentIdx++
			hideElementsExceptRange(currentIdx, monthElements);
			toogleMonth(currentIdx)
		}
	})
})