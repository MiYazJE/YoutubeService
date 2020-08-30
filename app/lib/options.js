module.exports = {
    puppeteerArgs: [
		'--no-sandbox', 
		'--disable-setuid-sandbox',
		'--disable-canvas-aa', 
		'--disable-2d-canvas-clip-aa', 
		'--disable-gl-drawing-for-tests', 
		'--disable-dev-shm-usage', 
		'--no-zygote', 
		'--use-gl=swiftshader',
		'--enable-webgl',
		'--hide-scrollbars',
		'--mute-audio',
		'--no-first-run',
		'--disable-infobars',
		'--disable-breakpad',
	]
}