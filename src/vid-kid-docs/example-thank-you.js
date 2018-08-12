export default {
	editingNodeId: null,
	editingPage: false,
	selectedConnection: null,
	connecting: null,
	pageHTML:
		'<body>\n    <div id="bg"></div>\n<div id="center">\n    <span id="msg">THANK YOU!</span>\n</div>\n</body>',
	pageCSS:
		"body {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: white;\n\tbackground: black;\n\tfont-family: 'League Spartan';\n\tfont-size: 10em;\n}\n\n#bg {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: #ea4600;\n}\n\n#center {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n#msg {\n    display: inline-block;\n    transform-origin: center center;\n}",
	nodeUIMap: {
		n0: { pos: [207, 265] },
		n1: { pos: [86, 99], control: { 'smooth-const': true } },
		n2: { pos: [598, 160] },
		n3: { pos: [607, 295] },
		n4: { pos: [761, 341], control: { selector: true } },
		n5: { pos: [466, 260], control: { type: true } }
	},
	isCablesMuted: true,
	fullscreen: false,
	zoomLevel: 1,
	nodeMap: {
		nodeMap: { n1: { n5: 1, n2: 1 }, n5: { n4: 1 } },
		portMap: {
			'n1.rms-volume': { 'n5.amount': true, 'n2.in': true },
			'n5.chain-id': { 'n4.chain-id': true }
		},
		inputsMap: {
			'n4.chain-id': { 'n5.chain-id': true },
			'n5.amount': { 'n1.rms-volume': true },
			'n2.in': { 'n1.rms-volume': true }
		},
		nextId: 6,
		nodeOrder: ['n1', 'n4', 'n5', 'n2'],
		values: {
			n1: {
				'device-id': 'default',
				'fft-size': '256',
				'smooth-const': 0.8,
				filter: false,
				'cutoff-freq': 400
			},
			n4: { 'chain-id': 'c1', selector: '#bg' },
			n5: { 'chain-id': '', type: 'brightness', amount: 142.83927082712776 },
			n2: { in: 0.4283927082712776 }
		},
		byId: {
			n1: {
				id: 'n1',
				rev: 0,
				text:
					'class AudioDevice extends N {\n\tstatic get type() {\n\t\treturn N.HARDWARE;\n\t}\n\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "device-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "default",\n\t\t\trestrict: String,\n\t\t\tvisible: false\n\t\t}, {\n\t\t\tname: "fft-size",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "256",\n\t\t\trestrict: N.set(["128", "256", "512", "1024", "2048", "4096", "8192", "16384"])\n\t\t}, {\n\t\t\tname: "smooth-const",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: 0.1,\n\t\t\trestrict: N.float(0, 1),\n\t\t\tcontrol: N.range({\n\t\t\t\tstep: 0.1\n\t\t\t})\n\t\t}, {\n\t\t\tname: "filter",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: false\n\t\t}, {\n\t\t\tname: "cutoff-freq",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: 400,\n\t\t\trestrict: Number\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["rms-volume", "trigger"];\n\t}\n\n\tgetFFTSize() {\n\t\treturn parseInt(this.getAttribute("fft-size"));\n\t}\n\n\tlisten(stream) {\n\t\tthis.context = new AudioContext();\n\t\tthis.analyser = this.context.createAnalyser();\n\t\tthis.analyser.smoothingTimeConstant = this.getAttribute("smooth-const");\n\t\tthis.analyser.fftSize = this.getFFTSize();\n\t\tthis.node = this.context.createScriptProcessor(this.analyser.fftSize * 2, 1, 1);\n\t\tthis.node.addEventListener("audioprocess", this.boundOnAudioProcess);\n\t\tthis.input = this.context.createMediaStreamSource(stream);\n\t\tthis.input.connect(this.analyser);\n\t\tthis.analyser.connect(this.node);\n\t\tthis.node.connect(this.context.destination);\n\t}\n\n\tonAudioProcess() {\n\t\tthis.spectrum = new Uint8Array(this.analyser.frequencyBinCount);\n\t\tthis.analyser.getByteFrequencyData(this.spectrum);\n\t\tthis.vol = this.getRMS(this.spectrum);\n\t\tthis.send("rms-volume", this.vol);\n\t\tthis.send("trigger", this.vol / 128 > 1);\n\t}\n\n\tgetRMS(spectrum) {\n\t\tlet rms = 0;\n\n\t\tfor (let i = 0, len = spectrum.length; i < len; i++) {\n\t\t\trms += spectrum[i] * spectrum[i];\n\t\t}\n\n\t\trms /= spectrum.length;\n\t\trms = Math.sqrt(rms);\n\t\treturn rms;\n\t}\n\n\tgetAudioDevices() {\n\t\t// Need to get permission for microphone so we can get more useful info in enumerateDevices\n\t\tnavigator.getUserMedia({\n\t\t\taudio: true\n\t\t}, this.onGetUserMediaSuccess.bind(this), this.onGetUserMediaError.bind(this));\n\t}\n\n\tonGetUserMediaError() {\n\t\tconsole.error(arguments);\n\t\tconsole.error("Unable to access audio devices!");\n\t}\n\n\tonGetUserMediaSuccess() {\n\t\tthis.createDeviceList();\n\t}\n\n\tcreateDeviceList() {\n\t\tlet select = this.root.getElementById("select");\n\t\tlet option = document.createElement("option");\n\t\toption.innerText = "Select device...";\n\t\toption.value = "";\n\t\tselect.appendChild(option);\n\t\tnavigator.mediaDevices.enumerateDevices().then(devices => {\n\t\t\tdevices.forEach(device => {\n\t\t\t\tif (device.kind === "audioinput") {\n\t\t\t\t\tthis.devices[device.deviceId] = device;\n\t\t\t\t\tlet option = document.createElement("option");\n\t\t\t\t\toption.innerText = device.label;\n\t\t\t\t\toption.value = device.deviceId;\n\t\t\t\t\tselect.appendChild(option);\n\t\t\t\t}\n\t\t\t});\n\t\t\tselect.addEventListener("change", event => {\n\t\t\t\tthis.setAttribute("device-id", event.target.value);\n\t\t\t});\n\t\t\tlet deviceId = this.getAttribute("device-id");\n\t\t\tif (deviceId) select.value = deviceId;\n\t\t});\n\t}\n\n\tonGetDeviceSuccess(stream) {\n\t\tthis.stream = stream;\n\t\tthis.listen(stream);\n\t}\n\n\tonGetDeviceError() {\n\t\tconsole.error(arguments);\n\t\tconsole.error("Unable to get audio stream!");\n\t}\n\n\tselectDevice(id) {\n\t\tif (!id) return;\n\t\tvar constraints = {\n\t\t\tdeviceId: {\n\t\t\t\texact: id\n\t\t\t}\n\t\t};\n\t\tnavigator.getUserMedia({\n\t\t\taudio: constraints\n\t\t}, this.onGetDeviceSuccess.bind(this), this.onGetDeviceError.bind(this));\n\t}\n\n\tstopAudioProcessing() {\n\t\tif (this.node) this.node.removeEventListener("audioprocess", this.boundOnAudioProcess);\n\t}\n\n\tonReady() {\n\t\tthis.context = null;\n\t\tthis.analyser = null;\n\t\tthis.node = null;\n\t\tthis.spectrum = null;\n\t\tthis.vol = null;\n\t\tthis.stream = null;\n\t\tthis.devices = {};\n\t\tthis.boundOnAudioProcess = this.onAudioProcess.bind(this);\n\t\tthis.getAudioDevices();\n\t}\n\n\tonDestroy() {\n\t\tthis.stopAudioProcessing();\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase "device-id":\n\t\t\t\tthis.stopAudioProcessing();\n\t\t\t\tthis.selectDevice(newValue);\n\n\t\t\tcase "fft-size":\n\t\t\t\tthis.stopAudioProcessing();\n\t\t\t\tif (this.stream) this.listen(this.stream);\n\t\t\t\tbreak;\n\n\t\t\tcase "smooth-const":\n\t\t\t\tif (this.analyser) this.analyser.smoothingTimeConstant = parseFloat(newValue);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n}',
				templateHTML: '<div id="container">\n\t<select id="select"></select>\n</div>',
				templateCSS: '#container {\n\twidth: 13em;\n}\n\n#select {\n\twidth: 100%;\n}',
				transforms: {}
			},
			n4: {
				id: 'n4',
				rev: 0,
				text:
					'class CSSFilterElement extends N {\n\tstatic get type() {\n\t\treturn N.SCREEN;\n\t}\n\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "chain-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String\n\t\t}, {\n\t\t\tname: "selector",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "body",\n\t\t\trestrict: String\n\t\t}];\n\t}\n\n\tgetEl(selector) {\n\t\ttry {\n\t\t\treturn this.screen.querySelector(selector);\n\t\t} catch (e) {\n\t\t\treturn null;\n\t\t}\n\t}\n\n\tsetFilter(selector, filterText) {\n\t\tlet el = this.getEl(selector);\n\t\tif (el) el.style.filter = filterText;\n\t}\n\n\tonInputDisconnected(name) {\n\t\tif (name === "chain-id") {\n\t\t\tthis.setAttribute("chain-id", "");\n\t\t}\n\t}\n\n\tgetCSSFilterString(chainId) {\n\t\tlet chain = this.getChain(chainId);\n\t\tif (!chain) return "";\n\t\treturn chain.get().join(" ");\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase "selector":\n\t\t\t\tthis.setFilter(oldValue, "");\n\t\t\t\tthis.setFilter(newValue, this.getCSSFilterString(this.getAttribute("chain-id")));\n\t\t\t\tbreak;\n\n\t\t\tcase "chain-id":\n\t\t\t\tthis.setFilter(this.getAttribute("selector"), this.getCSSFilterString(newValue));\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: {}
			},
			n5: {
				id: 'n5',
				rev: 0,
				text:
					'class CSSFilter extends N {\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "chain-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String\n\t\t}, {\n\t\t\tname: "type",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "grayscale",\n\t\t\trestrict: N.set(["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"])\n\t\t}, {\n\t\t\tname: "amount",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: 0,\n\t\t\trestrict: Number\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["chain-id"];\n\t}\n\n\tgetCSSRule(type, amount) {\n\t\tswitch (type) {\n\t\t\tcase "blur":\n\t\t\t\treturn "blur(" + amount + "px)";\n\n\t\t\tcase "brightness":\n\t\t\t\treturn "brightness(" + amount + "%)";\n\n\t\t\tcase "contrast":\n\t\t\t\treturn "contrast(" + amount + "%)";\n\n\t\t\tcase "grayscale":\n\t\t\t\treturn "grayscale(" + amount + "%)";\n\n\t\t\tcase "hue-rotate":\n\t\t\t\treturn "hue-rotate(" + amount + "deg)";\n\n\t\t\tcase "invert":\n\t\t\t\treturn "invert(" + amount + "%)";\n\n\t\t\tcase "opacity":\n\t\t\t\treturn "opacity(" + amount + "%)";\n\n\t\t\tcase "saturate":\n\t\t\t\treturn "saturate(" + amount + "%)";\n\n\t\t\tcase "sepia":\n\t\t\t\treturn "sepia(" + amount + "%)";\n\n\t\t\tdefault:\n\t\t\t\treturn null;\n\t\t}\n\t}\n\n\tonInputDisconnected(name) {\n\t\tif (name === "chain-id") {\n\t\t\tthis.releaseChain(this.getAttribute("chain-id"));\n\t\t\tthis.setAttribute("chain-id", "");\n\t\t}\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet rule = this.getCSSRule(this.getAttribute("type"), this.getAttribute("amount"));\n\t\tif (!rule) return;\n\t\tlet chain = this.getChain(this.getAttribute("chain-id"));\n\t\tchain.set(this.id, rule);\n\t\tthis.send("chain-id", chain.id);\n\t}\n\n\tonDestroy() {\n\t\tthis.releaseChain(this.getAttribute("chain-id"));\n\t}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: { amount: '100+x' }
			},
			n2: {
				id: 'n2',
				rev: 19,
				text:
					'class Node extends N {\n\t// Here is a comment\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "in",\n\t\t\tobserve: true\n\t\t}];\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tnewValue = parseFloat(newValue);\n\t\tthis.screen.getElementById(\'msg\').style.transform = `translate(0, -${newValue}em) scale(${1+newValue})`\n\t}\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: { in: 'x/100' }
			}
		},
		chainPool: {
			nodeIdToChainId: { n5: 'c1' },
			nextChainId: 2,
			pool: { c1: { id: 'c1', values: [{ id: 'n5', v: 'brightness(142.83927082712776%)' }] } }
		}
	}
}
