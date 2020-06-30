function input() {

	const inputArea = document.getElementById('main');

	inputArea.addEventListener('submit', function (e) {
		e.preventDefault();
		const inputNumber = ['inputNumber'].map(
			name => inputArea.querySelector(`[name="${name}"]`).value
		);

		var linkWpp = `https://api.whatsapp.com/send?phone=${inputNumber}`;
		const p = document.getElementById('link');
		
		p.innerHTML = `<a target="_blank" href=${linkWpp}><i class="fas fa-external-link-alt"></i> Ir para WhatsApp!</a>`;
	});

};