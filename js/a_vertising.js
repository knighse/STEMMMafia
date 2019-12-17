// WEBSITE BY SAM KNIGHT

function dllogo() {
	fetch('./images/logo.png')
		.then(resp => resp.blob())
		.then(blob => {
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = url;
			a.download = 'logo-512.png';
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		})
		.catch(() => alert('Download failed.'));
}

function redir(link) {
	window.location.href = link;
}

document.addEventListener("scroll", () => {
	let sections = document.getElementsByClassName("section-inner");
	for (let i = 0; i < sections.length; i++) {
		if (isElementInViewport(sections[i])) {
			sections[i].classList.add("fade-in");
		}
	}
});

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= (window.innerHeight - (el.clientHeight/1.5) || document.documentElement.clientHeight - (el.clientHeight/1.5)));
}