import Lightbox from 'bs5-lightbox'

document.querySelectorAll('.my-lightbox-toggle').forEach((el) =&gt; el.addEventListener('click', (e) =&gt; {
	e.preventDefault();
	const lightbox = new Lightbox(el);
	lightbox.show();
}));

