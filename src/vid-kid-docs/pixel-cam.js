export default {
	"editingNodeId": null,
	"editingPage": false,
	"selectedConnection": null,
	"connecting": null,
	"pageHTML": "<body>\n<div id=\"it\"></div>\n</body>",
	"pageCSS":
		"body {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 14pt;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tcolor: white;\n\tbackground: black;\n\ttransform: scale(1);\n}\n\n#it {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n}\n\ncanvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 1;\n}",
	"nodeUIMap": {
		"n0": { "pos": [182, 214] },
		"n1": { "pos": [477, 284] },
		"n2": {
			"pos": [355, 36],
			"control": {
				"preview": true,
				"live-capture": true,
				"height": true,
				"width": true,
				"capture": true
			}
		},
		"n3": { "pos": [91, 44] },
		"n4": {
			"pos": [737, 167],
			"control": { "capture": true, "margin-size": true, "pixel-size": true }
		},
		"n5": { "pos": [925, 521] },
		"n6": {
			"pos": [1056, 916],
			"control": { "size": true, "selector": true, "position-x": true, "position-y": true }
		},
		"n7": { "pos": [44, 536] },
		"n8": { "pos": [45, 43] },
		"n9": { "pos": [1370, 1020], "control": { "type": true } },
		"n10": { "pos": [2039, 740], "control": { "selector": true } },
		"n11": { "pos": [66, 845] },
		"n12": { "pos": [63, 416], "control": { "note-on": true, "zero-as-off": true } },
		"n13": { "pos": [347, 446], "control": { "note-on": true } },
		"n14": { "pos": [1989, 621] },
		"n15": { "pos": [939, 1058] },
		"n16": { "pos": [683, 812] },
		"n17": { "pos": [1683, 646], "control": { "type": true, "amount": true } },
		"n18": { "pos": [2162, 1027] },
		"n19": { "pos": [366, 580] },
		"n20": { "pos": [1685, 1051], "control": { "time": true } },
		"n21": { "pos": [1721, 885], "control": { "amount": true } },
		"n22": {
			"pos": [1499, 365],
			"control": { "selector": true, "position-x": true, "position-y": true }
		},
		"n23": { "pos": [167, 442], "control": { "time": true, "fn": true } },
		"n24": { "pos": [970, 239] },
		"n25": { "pos": [899, 299] },
		"n26": { "pos": [2319, 808], "control": { "time": true } },
		"n27": { "pos": [1257, 666], "control": { "time": true } },
		"n28": { "pos": [976, 589] },
		"n29": { "pos": [963, 82], "control": { "type": true, "amount": true } },
		"n30": { "pos": [1505, 136], "control": { "selector": true } },
		"n31": { "pos": [1080, 707] },
		"n32": { "pos": [1100, 727] },
		"n33": {
			"pos": [797, 249],
			"control": { "delay": true, "high-value": true, "low-value": true }
		},
		"n34": { "pos": [1620, 438], "control": { "amount": true } },
		"n35": { "pos": [641, 38], "control": { "pixel-size": true, "margin-size": true } },
		"n36": { "pos": [1692, 493], "control": { "amount": true } },
		"n37": { "pos": [1930, 671], "control": { "selector": true } },
		"n38": { "pos": [1229, 114], "control": { "amount": true, "type": true } },
		"n39": { "pos": [835, 499], "control": { "high-value": true, "low-value": true } },
		"n40": { "pos": [1452, 511], "control": { "my-input": true, "z": true } },
		"n41": { "pos": [1254, 429] },
		"n42": { "pos": [1170, 420], "control": { "time": true } },
		"n43": { "pos": [2207, 1044] },
		"n44": { "pos": [2122, 1184] },
		"n45": { "pos": [626, 567] },
		"n46": { "pos": [888, 693] }
	},
	"fullscreen": false,
	"nodeMap": {
		"nodeMap": { "n8": { "n2": 1 }, "n2": { "n35": 2 } },
		"portMap": {
			"n8.el-id": { "n2.el-id": true },
			"n2.el-id": { "n35.el-id": true },
			"n2.captured": { "n35.capture": true }
		},
		"inputsMap": {
			"n2.el-id": { "n8.el-id": true },
			"n35.el-id": { "n2.el-id": true },
			"n35.capture": { "n2.captured": true }
		},
		"nextId": 47,
		"nodeOrder": ["n8", "n2", "n35"],
		"values": {
			"n2": {
				"selector": "#it",
				"el-id": "n8.video",
				"width": 400,
				"height": 300,
				"capture": [153, 38, 80],
				"live-capture": true,
				"preview": true
			},
			"n8": {
				"device-id": "e98e54beb5efc5896549b40f2ab80256a16747a64d21020c106cd84a52e21fdb",
				"preview": true
			},
			"n35": {
				"selector": "#it",
				"el-id": "n2.canvas",
				"pixel-size": 16,
				"margin-size": 2,
				"capture": true
			}
		},
		"byId": {
			"n2": {
				"id": "n2",
				"rev": 0,
				"text":
					"class Canvas extends N {\n\tstatic get type() { return N.SCREEN }\n\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"el-id\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: null\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"width\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 640,\n\t\t\t\trestrict: Number,\n\t\t\t\tcontrol: N.range({min:1, max:2000})\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"height\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 480,\n\t\t\t\trestrict: Number,\n\t\t\t\tcontrol: N.range({min:1, max:2000})\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"capture\",\n\t\t\t\tobserve: true,\n\t\t\t\tcontrol: N.button()\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"live-capture\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: false,\n\t\t\t\trestrict: Boolean\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"preview\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: true,\n\t\t\t\trestrict: Boolean\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"el-id\", \"data-url\", \"captured\"];\n\t}\n\n\tonSelectorUpdated() {\n\t\tlet sel = this.getAttribute('selector');\n\n\t\ttry {\n\t\t\tlet el = this.screen.querySelector(sel);\n\t\t\tif(el) {\n\t\t\t\tel.appendChild(this.canvasEl)\n\t\t\t} else {\n\t\t\t\tthis.root.getElementById('container').appendChild(this.canvasEl);\n\t\t\t}\n\t\t}\n\t\tcatch(e) {\n\t\t\tthis.root.getElementById('container').appendChild(this.canvasEl);\n\t\t}\n\t}\n\n\tonOutputConnected(name) {\n\t\tswitch(name) {\n\t\t\tcase 'el-id':\n\t\t\t\tthis.send('el-id', this.elId);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\t// onInputDisconnected(name) {\n\t// \tswitch(name) {\n\t// \t\tcase 'el': {\n\t// \t\t\tthis.setAttribute('el', null);\n\t// \t\t}\n\t// \t}\n\t// }\n\n\tonReady() {\n\t\tthis.dead = false;\n\t\tthis.canvasEl = this.root.getElementById('canvas');\n\t\tthis.ctx = this.canvasEl.getContext('2d');\n\t\tthis.elId = this.registerEl('canvas', this.canvasEl);\n\t\tthis.boundOnFrame = this.onFrame.bind(this);\n\t\t//this.send('el', this.canvasEl);\n\t}\n\n\tonFrame() {\n\t\tif(this.dead) return;\n\n\t\tif(!this.extEl || !this.extEl.tagName || !this.canvasEl) return;\n\t\tthis.ctx.drawImage(this.extEl, 0, 0, this.canvasEl.width, this.canvasEl.height);\n\t\tthis.send(\"captured\", true);\n\t\tthis.send(\"data-url\", this.canvasEl.toDataURL())\n\n\t\tif(this.getAttribute('live-capture')) window.requestAnimationFrame(this.boundOnFrame);\n\t}\n\n\tonScreenUpdated() {\n\t\tthis.onSelectorUpdated()\n\t}\n\n\tonDestroy() {\n\t\tthis.dead = true;\n\t\tthis.root.getElementById('container').appendChild(this.canvasEl);\n\t}\n\n\tonOutputWillDisconnect(name, toAddr) {\n\t\tif(name === 'el-id') {\n\t\t\tthis.sendTo('el-id', toAddr, null);\n\t\t}\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch(name) {\n\t\t\tcase 'el-id':\n\t\t\t\tlet el = this.getEl(newValue);\n\t\t\t\tif(el && el.tagName) {\n\t\t\t\t\tthis.extEl = el;\n\t\t\t\t}\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\tthis.extEl = null;\n\t\t\t\t}\n\n\t\t\t\tthis.onFrame();\n\t\t\t\tbreak;\n\n\t\t\tcase 'selector':\n\t\t\t\tthis.onSelectorUpdated();\n\t\t\t\tbreak;\n\n\t\t\tcase 'width':\n\t\t\t\tthis.canvasEl.width = this.getAttribute('width');\n\t\t\t\tbreak;\n\n\t\t\tcase 'height':\n\t\t\t\tthis.canvasEl.height = this.getAttribute('height');\n\t\t\t\tbreak;\n\n\t\t\tcase 'capture':\n\t\t\t\tthis.onFrame();\n\t\t\t\tbreak;\n\n\t\t\tcase 'live-capture':\n\t\t\t\tlet liveCapture = this.getAttribute('live-capture');\n\t\t\t\tif(liveCapture) this.onFrame();\n\t\t\t\tbreak;\n\n\t\t\tcase 'preview':\n\t\t\t\tif(this.getAttribute('preview')) {\n\t\t\t\t\tthis.root.getElementById('container').style.display = 'block';\n\t\t\t\t} else {\n\t\t\t\t\tthis.root.getElementById('container').style.display = 'none';\n\t\t\t\t}\n\t\t\t\tbreak;\n\n\t\t}\n\t}\n\n}",
				"templateHTML":
					"<div id=\"container\">\n\t<canvas id=\"canvas\" width=\"640\" height=\"480\"></select>\n</div>",
				"templateCSS":
					"#container {\n\twidth: 13em;\n}\n\ncanvas {\n\twidth: 100%;\n\tmax-height: 13em;\n\tbackground: black;\n}",
				"transforms": {}
			},
			"n8": {
				"id": "n8",
				"rev": 0,
				"text":
					"class VideoDevice extends N {\n\tstatic get type() { return N.HARDWARE };\n\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: \"device-id\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: \"default\",\n\t\t\t\trestrict: String,\n\t\t\t\tvisible: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"preview\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: true,\n\t\t\t\trestrict: Boolean\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"el-id\"];\n\t}\n\n\tgetVideoDevices() {\n\t\t// Need to get permission for user media so we can get more useful info in enumerateDevices\n\t\tnavigator.getUserMedia(\n\t\t\t{ video: true },\n\t\t\tthis.onGetUserMediaSuccess.bind(this),\n\t\t\tthis.onGetUserMediaError.bind(this)\n\t\t);\n\t}\n\n\tonGetUserMediaError() {\n\t\tconsole.error(arguments);\n\t\talert(\"Unable to access video devices!\");\n\t}\n\n\tonGetUserMediaSuccess() {\n\t\tthis.createDeviceList();\n\t}\n\n\tcreateDeviceList() {\n\t\tlet select = this.root.getElementById('select')\n\t\tlet option = document.createElement(\"option\");\n\t\toption.innerText = \"Select device...\";\n\t\toption.value = \"\";\n\t\tselect.appendChild(option);\n\n\t\tconsole.log('ACC CDL', this.getAttribute('device-id'))\n\n\t\tnavigator.mediaDevices.enumerateDevices().then(devices => {\n\t\t\tdevices.forEach(device => {\n\t\t\t\tif (device.kind === \"videoinput\") {\n\t\t\t\t\tthis.devices[device.deviceId] = device;\n\n\t\t\t\t\tlet option = document.createElement(\"option\");\n\t\t\t\t\toption.innerText = device.label;\n\t\t\t\t\toption.value = device.deviceId;\n\t\t\t\t\tselect.appendChild(option);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tselect.addEventListener(\"change\", event => {\n\t\t\t\tthis.setAttribute(\"device-id\", event.target.value);\n\t\t\t});\n\n\t\t\tlet deviceId = this.getAttribute('device-id')\n\t\t\tconsole.log('ACC gotem', deviceId, select.value)\n\t\t\tif(deviceId) select.value = deviceId\n\n\t\t\tif(deviceId === 'default' && Object.keys(this.devices).length > 0) {\n\t\t\t\tthis.setAttribute('device-id', Object.keys(this.devices)[0])\n\t\t\t}\n\t\t});\n\t}\n\n\tonGetDeviceSuccess(stream) {\n\t\tconsole.log(\"GROT\", stream);\n\t\tthis.stream = stream\n\t\tthis.root.getElementById('video').srcObject = stream\n\t\tthis.root.getElementById('video').play()\n\t\tthis.root.getElementById('select').value = this.getAttribute('device-id')\n\t\tthis.send('el-id', this.elId)\n\t}\n\n\tonGetDeviceError() {\n\t\tconsole.error(arguments);\n\t\tconsole.error(\"Unable to get video stream!\");\n\t}\n\n\tselectDevice(id) {\n\t\tif(!id) return\n\n\t\tvar constraints = { deviceId: { exact: id } };\n\t\tconsole.log('select', constraints)\n\t\tnavigator.getUserMedia(\n\t\t\t{ video: constraints },\n\t\t\tthis.onGetDeviceSuccess.bind(this),\n\t\t\tthis.onGetDeviceError.bind(this)\n\t\t);\n\t}\n\n\tonReady() {\n\t\tthis.stream = null;\n\t\tthis.devices = {};\n\t\tthis.elId = this.registerEl('video', this.root.getElementById('video'));\n\n\t\tthis.getVideoDevices()\n\t}\n\n\tonOutputConnected(name) {\n\t\tif(name === 'el-id') {\n\t\t\tthis.send('el-id', this.elId)\n\t\t}\n\t}\n\n\tonOutputWillDisconnect(name, toAddr) {\n\t\tif(name === 'el-id') {\n\t\t\tthis.sendTo('el-id', toAddr, null);\n\t\t}\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tconsole.log(\"ACC\", name, oldValue, newValue);\n\n\t\tswitch(name) {\n\t\t\tcase 'device-id':\n\t\t\t\tthis.selectDevice(newValue);\n\t\t\t\tbreak;\n\n\t\t\tcase 'preview':\n\t\t\t\tif(this.getAttribute('preview')) {\n\t\t\t\t\tthis.root.getElementById('video').style.display = 'block';\n\t\t\t\t} else {\n\t\t\t\t\tthis.root.getElementById('video').style.display = 'none';\n\t\t\t\t}\n\t\t\t\tthis.selectDevice(this.getAttribute('device-id'));\n\t\t\t\tbreak;\n\t\t}\n\n\t}\n}",
				"templateHTML":
					"<div id=\"container\">\n\t<select id=\"select\"></select>\n\t<video id=\"video\"></video>\n</div>",
				"templateCSS":
					"#container {\n\twidth: 13em;\n}\n\n#select {\n\twidth: 100%;\n\tmargin-bottom: 1em;\n}\n\nvideo {\n\twidth: 100%;\n\tbackground: black;\n}",
				"transforms": {}
			},
			"n35": {
				"id": "n35",
				"rev": 0,
				"text":
					"class PixelCanvas extends N {\n\tstatic get type() { return N.SCREEN }\n\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"el-id\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: null\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"pixel-size\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 50,\n\t\t\t\trestrict: N.int(2),\n\t\t\t\tcontrol: N.range({min:2, max:400})\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"margin-size\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: N.int(0),\n\t\t\t\tcontrol: N.range({min:0, max:400})\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"capture\",\n\t\t\t\tobserve: true,\n\t\t\t\tcontrol: N.button()\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"el-id\", \"data-url\", \"captured\"];\n\t}\n\n\tonSelectorUpdated() {\n\t\tlet sel = this.getAttribute('selector');\n\n\t\ttry {\n\t\t\tlet el = this.screen.querySelector(sel);\n\t\t\tif(el) {\n\t\t\t\tel.appendChild(this.canvasEl)\n\t\t\t} else {\n\t\t\t\tthis.root.getElementById('container').appendChild(this.canvasEl);\n\t\t\t}\n\t\t}\n\t\tcatch(e) {\n\t\t\tthis.root.getElementById('container').appendChild(this.canvasEl);\n\t\t}\n\t}\n\n\tonOutputConnected(name) {\n\t\tswitch(name) {\n\t\t\tcase 'el-id':\n\t\t\t\tthis.send('el-id', this.elId);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tonOutputWillDisconnect(name, toAddr) {\n\t\tif(name === 'el-id') {\n\t\t\tthis.sendTo('el-id', toAddr, null);\n\t\t}\n\t}\n\n\tonReady() {\n\t\tthis.extCanvasEl = null;\n\t\tthis.extCanvasCtx = null;\n\t\tthis.canvasEl = this.root.getElementById('canvas');\n\t\tthis.elId = this.registerEl('canvas', this.canvasEl);\n\t\tthis.canvasCtx = this.canvasEl.getContext('2d');\n\t\tthis.boundOnFrame = this.onFrame.bind(this);\n\t}\n\n\tonDestroy() {\n\t\tif(this.canvasEl) {\n\t\t\tthis.root.getElementById('container').appendChild(this.canvasEl);\n\t\t}\n\t}\n\n\tonFrame() {\n\t\tconsole.log('of', this.extCanvasEl, this.canvasEl)\n\t\tif(!this.extCanvasEl || !this.canvasEl) return\n\n\t\tlet w = this.extCanvasEl.width;\n\t\tlet h = this.extCanvasEl.height;\n\n\t\tthis.canvasEl.width = w;\n\t\tthis.canvasEl.height = h;\n\n\t\tthis.canvasCtx.clearRect(0, 0, w, h);\n\n\t\tlet blockSize = this.getAttribute('pixel-size');\n\t\tlet marginSize = this.getAttribute('margin-size');\n\t\tlet innerBlockSize = Math.max(1, blockSize - marginSize - marginSize);\n\n\t\tlet fw = Math.ceil(w / blockSize) * blockSize;\n\t\tlet fh = Math.ceil(h / blockSize) * blockSize;\n\t\tfor (let x = -(fw - w) / 2; x < fw; x += blockSize) {\n\t\t\tfor (let y = -(fh - h) / 2; y < fh; y += blockSize) {\n\t\t\t\tlet pixel = this.extCanvasCtx.getImageData(x + blockSize / 2, y + blockSize / 2, 1, 1);\n\t\t\t\tlet d = pixel.data;\n\t\t\t\tthis.canvasCtx.fillStyle = 'rgb(' + d[0] + ',' + d[1] + ',' + d[2] + ')';\n\t\t\t\tlet diff = (blockSize - innerBlockSize) / 2;\n\t\t\t\tthis.canvasCtx.fillRect(Math.floor(x + diff), Math.floor(y + diff), innerBlockSize, innerBlockSize);\n\t\t\t}\n\t\t}\n\n\t\t// this.canvasCtx.drawImage(extEl, 0, 0, canvas.width, canvas.height);\n\t\tthis.send(\"captured\", true);\n\t\tthis.send(\"data-url\", this.canvasEl.toDataURL())\n\t}\n\n\tonScreenUpdated() {\n\t\tthis.onSelectorUpdated()\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\t// debugger;\n\t\tswitch(name) {\n\t\t\tcase 'el-id':\n\t\t\t\tlet el = this.getEl(newValue);\n\t\t\t\tif(el && el.tagName && el.tagName.toLowerCase() === 'canvas') {\n\t\t\t\t\tthis.extCanvasEl = el;\n\t\t\t\t\tthis.extCanvasCtx = this.extCanvasEl.getContext('2d');\n\t\t\t\t}\n\t\t\t\tbreak;\n\n\t\t\tcase 'selector':\n\t\t\t\tthis.onSelectorUpdated();\n\t\t\t\tbreak;\n\n\t\t\tcase 'capture':\n\t\t\t\tbreak;\n\t\t}\n\n\t\tthis.onFrame();\n\t}\n\n}",
				"templateHTML":
					"<div id=\"container\">\n\t<canvas id=\"canvas\" width=\"640\" height=\"480\"></select>\n</div>",
				"templateCSS":
					"#container {\n\twidth: 13em;\n}\n\ncanvas {\n\twidth: 100%;\n\tmax-height: 13em;\n\tbackground: black;\n}",
				"transforms": {}
			}
		},
		"chainPool": {
			"nodeIdToChainId": { "n18": "c3", "n10": "c9", "n37": "c18", "n30": "c22" },
			"nextChainId": 23,
			"pool": {
				"c3": { "id": "c3", "values": [] },
				"c9": { "id": "c9", "values": [] },
				"c18": { "id": "c18", "values": [] },
				"c22": { "id": "c22", "values": [] }
			}
		}
	}
}
