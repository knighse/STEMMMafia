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