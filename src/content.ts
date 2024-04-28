(async () => {
	const src = (window as any).chrome.runtime.getURL('inject.js');
	await inject(src);
})();

async function inject(src: string): Promise<void> {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.addEventListener('load', () => {
			script.remove();
			resolve();
		});

		document.head.prepend(script);
	});
}
