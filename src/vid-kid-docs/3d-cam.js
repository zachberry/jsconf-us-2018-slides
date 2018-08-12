export default {
	"editingNodeId": null,
	"editingPage": false,
	"selectedConnection": null,
	"connecting": null,
	"pageHTML": "<body>\n<div id=\"it\"></div>\n</body>",
	"pageCSS":
		"body {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 14pt;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tcolor: white;\n\tbackground: black;\n\ttransform: scale(1);\n}\n\n#it {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    perspective: 1000px;\n}\n\ncanvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 1;\n  \n  transform: rotateX(50deg);\n}\ncanvas:last-child {\n    opacity:.8;\n}",
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
				"capture": true,
				"selector": true
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
		"n35": {
			"pos": [641, 38],
			"control": { "selector": true, "pixel-size": true, "margin-size": true }
		},
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
		"nodeMap": {
			"n8": { "n2": 1 },
			"n12": { "n13": 1 },
			"n13": { "n39": 1, "n2": 1, "n33": 1, "n42": 1, "n46": 1 },
			"n33": { "n29": 1 },
			"n2": { "n35": 2 },
			"n29": { "n38": 1 },
			"n38": { "n30": 1 },
			"n39": { "n38": 1 },
			"n42": { "n40": 1 },
			"n46": { "n40": 1 }
		},
		"portMap": {
			"n8.el-id": { "n2.el-id": true },
			"n12.note-on": { "n13.note-on": true },
			"n33.out": { "n29.amount": true },
			"n2.el-id": { "n35.el-id": true },
			"n29.chain-id": { "n38.chain-id": true },
			"n38.chain-id": { "n30.chain-id": true },
			"n2.captured": { "n35.capture": true },
			"n13.SD": { "n39.in": true, "n2.capture": true, "n42.in": true, "n46.in": true },
			"n39.out": { "n38.amount": true },
			"n13.BD": { "n33.in": true },
			"n42.out": { "n40.my-input": true },
			"n46.out": { "n40.z": true }
		},
		"inputsMap": {
			"n2.el-id": { "n8.el-id": true },
			"n13.note-on": { "n12.note-on": true },
			"n29.amount": { "n33.out": true },
			"n35.el-id": { "n2.el-id": true },
			"n38.chain-id": { "n29.chain-id": true },
			"n30.chain-id": { "n38.chain-id": true },
			"n35.capture": { "n2.captured": true },
			"n39.in": { "n13.SD": true },
			"n38.amount": { "n39.out": true },
			"n2.capture": { "n13.SD": true },
			"n33.in": { "n13.BD": true },
			"n40.my-input": { "n42.out": true },
			"n40.z": { "n46.out": true },
			"n42.in": { "n13.SD": true },
			"n46.in": { "n13.SD": true }
		},
		"nextId": 47,
		"nodeOrder": [
			"n8",
			"n2",
			"n35",
			"n12",
			"n13",
			"n29",
			"n38",
			"n30",
			"n46",
			"n33",
			"n39",
			"n42",
			"n40"
		],
		"values": {
			"n2": {
				"selector": "#it",
				"el-id": "n8.video",
				"width": 400,
				"height": 300,
				"capture": [153, 38, 80],
				"live-capture": false,
				"preview": true
			},
			"n8": {
				"device-id": "e98e54beb5efc5896549b40f2ab80256a16747a64d21020c106cd84a52e21fdb",
				"preview": true
			},
			"n12": {
				"device-id": "-486371328",
				"channel": 0,
				"message": false,
				"realtime": false,
				"beat": "quarter note",
				"note-on": true,
				"note-off": false,
				"cc": false,
				"zero-as-off": false
			},
			"n13": { "note-on": [153, 51, 80] },
			"n29": { "chain-id": "", "type": "brightness", "amount": 100 },
			"n30": { "chain-id": "c10", "selector": "body" },
			"n33": { "in": [153, 36, 80], "high-value": 200, "low-value": 100, "delay": 100 },
			"n35": {
				"selector": "#it",
				"el-id": "n2.canvas",
				"pixel-size": 14,
				"margin-size": 3,
				"capture": true
			},
			"n38": { "chain-id": "c10", "type": "grayscale", "amount": 100 },
			"n39": { "in": [153, 38, 80], "high-value": 0, "low-value": 100, "delay": 200 },
			"n42": { "in": 0.8076876566529796, "time": 200, "fn": "Quadratic.InOut" },
			"n46": { "in": 0.22549658146592555, "time": 1000, "fn": "Quadratic.InOut" },
			"n40": { "my-input": 32.307506266119184, "z": 90.19863258637022 }
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
			"n12": {
				"id": "n12",
				"rev": 0,
				"text":
					"class MIDIDevice extends N {\n\tstatic get type() { return N.HARDWARE };\n\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: \"device-id\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: \"\",\n\t\t\t\trestrict: String,\n\t\t\t\tvisible: false\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"channel\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: N.int(0, 16),\n\t\t\t\tcontrol: N.range()\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"message\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: false,\n\t\t\t\trestrict: Boolean\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"realtime\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: false,\n\t\t\t\trestrict: Boolean\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"beat\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: \"quarter note\",\n\t\t\t\trestrict: N.set([\"24ppqn\", \"quarter note\", \"bar\", \"4 bars\"])\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"note-on\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: false,\n\t\t\t\trestrict: Boolean\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"note-off\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: false,\n\t\t\t\trestrict: Boolean\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"cc\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: false,\n\t\t\t\trestrict: Boolean\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"zero-as-off\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: true,\n\t\t\t\trestrict: Boolean\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"message\", \"start\", \"stop\", \"continue\", \"clock\", \"note-on\", \"note-off\", \"cc\", \"bpm\"];\n\t}\n\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tsetInput(id) {\n\t\tconsole.log('SET INPUT', id);\n\t\tif(!this.inputs) return;\n\n\t\tthis.removeMIDIListeners();\n\n\t\tif (id !== \"\") {\n\t\t\tlet input = this.inputs.get(id);\n\t\t\tif (input) {\n\t\t\t\tinput.addEventListener(\"midimessage\", this.boundOnMIDIMessage);\n\t\t\t}\n\t\t}\n\n\t\tthis.root.getElementById('select').value = id;\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tconsole.log('ACC', name, oldValue, newValue);\n\t\tthis.setInput(newValue);\n\t}\n\n\tremoveMIDIListeners() {\n\t\tif (!this.inputs) return;\n\t\tfor (let input of this.inputs.values()) {\n\t\t\tinput.removeEventListener(\"midimessage\", this.boundOnMIDIMessage);\n\t\t}\n\t}\n\n\tonMIDIMessage(event) {\n\t\tlet data = Array.from(event.data);\n\t\tlet channel = this.getAttribute('channel');\n\t\tlet allowMessage = this.getAttribute('message');\n\t\tlet allowRealTime = this.getAttribute('realtime');\n\t\tlet allowNoteOn = this.getAttribute('note-on');\n\t\tlet allowNoteOff = this.getAttribute('note-off');\n\t\tlet allowCC = this.getAttribute('cc');\n\t\tlet transformNoteOnVelocityZeroAsNoteOff = this.getAttribute('zero-as-off');\n\t\tlet sendClockPerBeat = this.getAttribute('beat');\n\n\t\tif(allowMessage) this.send(\"message\", data)\n\n\t\t//// console.log('got midi', data, channel, allowRealTime, allowNoteOn, allowNoteOff, allowCC)\n\n\t\t// Clock:\n\t\tif(data[0] === 0xFA && allowRealTime) { //start\n\t\t\tthis.sendClock = true;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send('start', data);\n\t\t}\n\t\tif(data[0] === 0xFC && allowRealTime) { //stop\n\t\t\tthis.sendClock = false;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send('stop', data);\n\t\t}\n\t\tif(data[0] === 0xFB && allowRealTime) { //continue\n\t\t\treturn this.send('continue', data);\n\t\t}\n\t\tif(data[0] === 0xF8 && allowRealTime && this.sendClock) {\n\t\t\tif(this.clock % 24 === 0) {\n\t\t\t\tlet now = Date.now()\n\t\t\t\tif(this.lastClock) this.send('bpm', 60000 / (now - this.lastClock))\n\t\t\t\tthis.lastClock = now;\n\t\t\t}\n\n\t\t\tlet shouldSendBeat = false;\n\t\t\tswitch(sendClockPerBeat) {\n\t\t\t\tcase \"24ppqn\":\n\t\t\t\t\tshouldSendBeat = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase \"quarter note\":\n\t\t\t\t\tshouldSendBeat = this.clock % 24 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase \"bar\":\n\t\t\t\t\tshouldSendBeat = this.clock % 96 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase \"4 bars\":\n\t\t\t\t\tshouldSendBeat = this.clock === 0;\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tif(shouldSendBeat) this.send('clock', data);\n\t\t\tthis.clock = (this.clock + 1) % 384; //24ppqn * 4 quarter notes * 4 bars\n\t\t}\n\n\t\t// Channel messages:\n\t\tif(channel === 0 || channel === (data[0] & 0x0F) + 1) {\n\t\t\tlet type = data[0] >> 4;\n\n\t\t\tif(type === 0x9 && data[2] === 0 && transformNoteOnVelocityZeroAsNoteOff) {\n\t\t\t\ttype = 0x8\n\t\t\t}\n\n\t\t\tif(type === 0x9 && allowNoteOn) return this.send('note-on', data);\n\t\t\tif(type === 0x8 && allowNoteOff) return this.send('note-off', data);\n\t\t\tif(type === 0xB && allowCC) return this.send('cc', data);\n\t\t}\n\t}\n\n\tonMIDISuccess(midiAccess) {\n\t\tconsole.log('MIDI SUCCESS', midiAccess);\n\t\tthis.inputs = midiAccess.inputs;\n\t\tlet select = this.root.getElementById(\"select\");\n\n\t\tlet option = document.createElement(\"option\");\n\t\toption.innerText = \"Select device...\";\n\t\toption.value = \"\";\n\t\tselect.appendChild(option);\n\n\t\tfor (let input of this.inputs.values()) {\n\t\t\tconsole.log(input);\n\t\t\toption = document.createElement(\"option\");\n\t\t\toption.innerText = input.manufacturer + \" \" + input.name;\n\t\t\toption.value = input.id;\n\t\t\tselect.appendChild(option);\n\t\t}\n\n\t\t// let deviceId = this.getAttribute('device-id');\n\t\t// select.value = deviceId;\n\n\t\tselect.addEventListener(\"change\", event => {\n\t\t\tconsole.log(\"you did it\", event.target.value);\n\t\t\tthis.setAttribute(\"device-id\", event.target.value);\n\t\t});\n\n\t\t// Force listener to listen:\n\t\tthis.setInput(this.getAttribute('device-id'));\n\t}\n\n\tonMIDIFailure() {\n\t\talert(\"Unable to obtain MIDI access!\");\n\t}\n\n\tonReady() {\n\t\tconsole.log(\"MIDIDEVICE READY!\");\n\n\t\tthis.boundOnMIDIMessage = this.onMIDIMessage.bind(this);\n\t\tnavigator\n\t\t\t.requestMIDIAccess()\n\t\t\t.then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this));\n\t}\n\n\tonDestroy() {\n\t\tconsole.error(\"MIDIDEVICE DESTROY!\");\n\t\tthis.removeMIDIListeners();\n\t}\n}",
				"templateHTML": "<div>\n\t<select id=\"select\"></select>\n</div>",
				"templateCSS": null,
				"transforms": {}
			},
			"n13": {
				"id": "n13",
				"rev": 3,
				"text":
					"class TR8SDrumMap extends N {\n\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: \"note-on\",\n\t\t\t\tobserve: true\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"BD\", \"SD\", \"LT\", \"MT\", \"HT\", \"RS\", \"HC\", \"CH\", \"OH\", \"CC\", \"RC\"];\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tconsole.log('ACC', name, oldValue, newValue);\n\t\t\n\t\tlet midiData = this.getAttribute('note-on');\n\n\t\tif(!(midiData instanceof Array)) return;\n\n\t\t\n\t\tlet noteNum = parseInt(midiData[1], 10);\n\n\t\tswitch(noteNum) {\n\t\t\tcase 0x24: this.send(\"BD\", midiData); break;\n\t\t\tcase 0x26: this.send(\"SD\", midiData); break;\n\t\t\tcase 0x2B: this.send(\"LT\", midiData); break;\n\t\t\tcase 0x2F: this.send(\"MT\", midiData); break;\n\t\t\tcase 0x32: this.send(\"HT\", midiData); break;\n\t\t\tcase 0x25: this.send(\"RS\", midiData); break;\n\t\t\tcase 0x27: this.send(\"HC\", midiData); break;\n\t\t\tcase 0x2A: this.send(\"CH\", midiData); break;\n\t\t\tcase 0x2E: this.send(\"OH\", midiData); break;\n\t\t\tcase 0x31: this.send(\"CC\", midiData); break;\n\t\t\tcase 0x33: this.send(\"RC\", midiData); break;\n\t\t}\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n29": {
				"id": "n29",
				"rev": 0,
				"text":
					"class CSSFilter extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'chain-id',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'type',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 'grayscale',\n\t\t\t\trestrict: N.set(['blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'opacity', 'saturate', 'sepia'])\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'amount',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t}\n\t\t]\n\t}\n\n\tstatic get outputs() {\n\t  return ['chain-id']\n\t}\n\n\tgetCSSRule(type, amount) {\n\t\tswitch(type)\n\t\t{\n\t\t\tcase 'blur': return \"blur(\" + amount + \"px)\"\n\t\t\tcase 'brightness': return \"brightness(\" + amount + \"%)\"\n\t\t\tcase 'contrast': return \"contrast(\" + amount + \"%)\"\n\t\t\tcase 'grayscale': return \"grayscale(\" + amount + \"%)\"\n\t\t\tcase 'hue-rotate': return \"hue-rotate(\" + amount + \"deg)\"\n\t\t\tcase 'invert': return \"invert(\" + amount + \"%)\"\n\t\t\tcase 'opacity': return \"opacity(\" + amount + \"%)\"\n\t\t\tcase 'saturate': return \"saturate(\" + amount + \"%)\"\n\t\t\tcase 'sepia': return \"sepia(\" + amount + \"%)\"\n\t\t\tdefault: return null\n\t\t}\n\t}\n\n\tonInputDisconnected(name) {\n\t\tif(name === 'chain-id')\n\t\t{\n\t\t\tthis.releaseChain(this.getAttribute('chain-id'))\n\t\t\tthis.setAttribute('chain-id', '')\n\t\t}\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet rule = this.getCSSRule(this.getAttribute('type'), this.getAttribute('amount'))\n\t\tif(!rule) return\n\n\t\tlet chain = this.getChain(this.getAttribute('chain-id'))\n\t\tchain.set(this.id, rule);\n\n\t\tthis.send('chain-id', chain.id);\n\t}\n\n\tonDestroy() {\n\t\tthis.releaseChain(this.getAttribute('chain-id'))\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n30": {
				"id": "n30",
				"rev": 0,
				"text":
					"class CSSFilterElement extends N {\n\tstatic get type() { return N.SCREEN }\n\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: \"chain-id\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: \"\",\n\t\t\t\trestrict: String\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"selector\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: \"body\",\n\t\t\t\trestrict: String\n\t\t\t}\n\t\t];\n\t}\n\n\tgetEl(selector) {\n\t\ttry {\n\t\t\treturn this.screen.querySelector(selector);\n\t\t} catch (e) {\n\t\t\treturn null;\n\t\t}\n\t}\n\n\tsetFilter(selector, filterText) {\n\t\tlet el = this.getEl(selector);\n\t\tif (el) el.style.filter = filterText;\n\t}\n\n\tonInputDisconnected(name) {\n\t\tif(name === 'chain-id')\n\t\t{\n\t\t\tthis.setAttribute('chain-id', '')\n\t\t}\n\t}\n\n\tgetCSSFilterString(chainId) {\n\t\tlet chain = this.getChain(chainId);\n\t\tif(!chain) return ''\n\n\t\treturn chain.get().join(' ')\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase \"selector\":\n\t\t\t\tthis.setFilter(oldValue, '');\n\t\t\t\tthis.setFilter(newValue, this.getCSSFilterString(this.getAttribute(\"chain-id\")));\n\t\t\t\tbreak;\n\n\t\t\tcase \"chain-id\":\n\t\t\t\tthis.setFilter(this.getAttribute('selector'), this.getCSSFilterString(newValue));\n\t\t\t\tbreak;\n\t\t}\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n33": {
				"id": "n33",
				"rev": 0,
				"text":
					"class DelayValue extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'in',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: null,\n\t\t\t\trestrict: null,\n\t\t\t\tcontrol: N.button()\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'high-value',\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 1,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'low-value',\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'delay',\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 200,\n\t\t\t\trestrict: N.int(0),\n\t\t\t\tcontrol: N.range({ min:0, max:10000, step:10})\n\t\t\t}\n\t\t]\n\t}\n\n\tstatic get outputs() {\n\t  return ['out']\n\t}\n\n\tonDestroy() {\n\t\twindow.clearTimeout(this.timeoutId);\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet high = this.getAttribute('high-value')\n\t\tlet low = this.getAttribute('low-value')\n\t\tlet delay = this.getAttribute('delay')\n\n\t\twindow.clearTimeout(this.timeoutId);\n\n\t\tthis.send('out', high);\n\t\tthis.timeoutId = setTimeout(() => {\n\t\t\tthis.send('out', low)\n\t\t}, delay)\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
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
			},
			"n38": {
				"id": "n38",
				"rev": 0,
				"text":
					"class CSSFilter extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'chain-id',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'type',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 'grayscale',\n\t\t\t\trestrict: N.set(['blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'opacity', 'saturate', 'sepia'])\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'amount',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t}\n\t\t]\n\t}\n\n\tstatic get outputs() {\n\t  return ['chain-id']\n\t}\n\n\tgetCSSRule(type, amount) {\n\t\tswitch(type)\n\t\t{\n\t\t\tcase 'blur': return \"blur(\" + amount + \"px)\"\n\t\t\tcase 'brightness': return \"brightness(\" + amount + \"%)\"\n\t\t\tcase 'contrast': return \"contrast(\" + amount + \"%)\"\n\t\t\tcase 'grayscale': return \"grayscale(\" + amount + \"%)\"\n\t\t\tcase 'hue-rotate': return \"hue-rotate(\" + amount + \"deg)\"\n\t\t\tcase 'invert': return \"invert(\" + amount + \"%)\"\n\t\t\tcase 'opacity': return \"opacity(\" + amount + \"%)\"\n\t\t\tcase 'saturate': return \"saturate(\" + amount + \"%)\"\n\t\t\tcase 'sepia': return \"sepia(\" + amount + \"%)\"\n\t\t\tdefault: return null\n\t\t}\n\t}\n\n\tonInputDisconnected(name) {\n\t\tif(name === 'chain-id')\n\t\t{\n\t\t\tthis.releaseChain(this.getAttribute('chain-id'))\n\t\t\tthis.setAttribute('chain-id', '')\n\t\t}\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet rule = this.getCSSRule(this.getAttribute('type'), this.getAttribute('amount'))\n\t\tif(!rule) return\n\n\t\tlet chain = this.getChain(this.getAttribute('chain-id'))\n\t\tchain.set(this.id, rule);\n\n\t\tthis.send('chain-id', chain.id);\n\t}\n\n\tonDestroy() {\n\t\tthis.releaseChain(this.getAttribute('chain-id'))\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n39": {
				"id": "n39",
				"rev": 0,
				"text":
					"class DelayValue extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'in',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: null,\n\t\t\t\trestrict: null,\n\t\t\t\tcontrol: N.button()\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'high-value',\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 1,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'low-value',\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'delay',\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 200,\n\t\t\t\trestrict: N.int(0),\n\t\t\t\tcontrol: N.range({ min:0, max:10000, step:10})\n\t\t\t}\n\t\t]\n\t}\n\n\tstatic get outputs() {\n\t  return ['out']\n\t}\n\n\tonDestroy() {\n\t\twindow.clearTimeout(this.timeoutId);\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet high = this.getAttribute('high-value')\n\t\tlet low = this.getAttribute('low-value')\n\t\tlet delay = this.getAttribute('delay')\n\n\t\twindow.clearTimeout(this.timeoutId);\n\n\t\tthis.send('out', high);\n\t\tthis.timeoutId = setTimeout(() => {\n\t\t\tthis.send('out', low)\n\t\t}, delay)\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n42": {
				"id": "n42",
				"rev": 0,
				"text":
					"class Tween extends N {\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: \"in\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"time\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 1000,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"fn\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: \"Quadratic.InOut\",\n\t\t\t\trestrict: N.set([\"Linear\", \"Quadratic.In\", \"Quadratic.Out\", \"Quadratic.InOut\", \"Cubic.In\", \"Cubic.Out\", \"Cubic.InOut\", \"Quartic.In\", \"Quartic.Out\", \"Quartic.InOut\", \"Quintic.In\", \"Quintic.Out\", \"Quintic.InOut\", \"Sinusoidal.In\", \"Sinusoidal.Out\", \"Sinusoidal.InOut\", \"Exponential.In\", \"Exponential.Out\", \"Exponential.InOut\", \"Circular.In\", \"Circular.Out\", \"Circular.InOut\", \"Elastic.In\", \"Elastic.Out\", \"Elastic.InOut\", \"Back.In\", \"Back.Out\", \"Back.InOut\", \"Bounce.In\", \"Bounce.Out\", \"Bounce.InOut\"])\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"out\"];\n\t}\n\n\tonReady() {\n\t\tthis.boundOnUpdate = this.onUpdate.bind(this);\n\t}\n\n\tonDestroy() {\n\t\tif (this.tween) this.tween.stop();\n\t}\n\n\tonUpdate() {\n\t\tTWEEN.update();\n\t\tthis.send(\"out\", this.target.v);\n\n\t\tif(this.tween.isPlaying()) window.requestAnimationFrame(this.boundOnUpdate);\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tif (name !== \"in\") return;\n\n\t\tlet tweenMethod = this.getAttribute(\"fn\");\n\t\tlet tokens = tweenMethod ? tweenMethod.split(\".\") : [\"Quadratic\", \"InOut\"];\n\n\t\tthis.target = { v: oldValue };\n\t\tthis.tween = new TWEEN.Tween(this.target)\n\t\t\t.to({ v: newValue }, this.getAttribute(\"time\"))\n\t\t\t.easing(TWEEN.Easing[tokens[0]][tokens[1]])\n\t\t\t.start();\n\t\t\tconsole.log('tweeeeeen', this.tween, TWEEN)\n\t\twindow.requestAnimationFrame(this.boundOnUpdate);\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": { "in": "Math.random()" }
			},
			"n46": {
				"id": "n46",
				"rev": 0,
				"text":
					"class Tween extends N {\n\tstatic get inputs() {\n\t\treturn [\n\t\t\t{\n\t\t\t\tname: \"in\",\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"time\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: 1000,\n\t\t\t\trestrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"fn\",\n\t\t\t\tobserve: false,\n\t\t\t\tdefaultValue: \"Quadratic.InOut\",\n\t\t\t\trestrict: N.set([\"Linear\", \"Quadratic.In\", \"Quadratic.Out\", \"Quadratic.InOut\", \"Cubic.In\", \"Cubic.Out\", \"Cubic.InOut\", \"Quartic.In\", \"Quartic.Out\", \"Quartic.InOut\", \"Quintic.In\", \"Quintic.Out\", \"Quintic.InOut\", \"Sinusoidal.In\", \"Sinusoidal.Out\", \"Sinusoidal.InOut\", \"Exponential.In\", \"Exponential.Out\", \"Exponential.InOut\", \"Circular.In\", \"Circular.Out\", \"Circular.InOut\", \"Elastic.In\", \"Elastic.Out\", \"Elastic.InOut\", \"Back.In\", \"Back.Out\", \"Back.InOut\", \"Bounce.In\", \"Bounce.Out\", \"Bounce.InOut\"])\n\t\t\t}\n\t\t];\n\t}\n\n\tstatic get outputs() {\n\t\treturn [\"out\"];\n\t}\n\n\tonReady() {\n\t\tthis.boundOnUpdate = this.onUpdate.bind(this);\n\t}\n\n\tonDestroy() {\n\t\tif (this.tween) this.tween.stop();\n\t}\n\n\tonUpdate() {\n\t\tTWEEN.update();\n\t\tthis.send(\"out\", this.target.v);\n\n\t\tif(this.tween.isPlaying()) window.requestAnimationFrame(this.boundOnUpdate);\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tif (name !== \"in\") return;\n\n\t\tlet tweenMethod = this.getAttribute(\"fn\");\n\t\tlet tokens = tweenMethod ? tweenMethod.split(\".\") : [\"Quadratic\", \"InOut\"];\n\n\t\tthis.target = { v: oldValue };\n\t\tthis.tween = new TWEEN.Tween(this.target)\n\t\t\t.to({ v: newValue }, this.getAttribute(\"time\"))\n\t\t\t.easing(TWEEN.Easing[tokens[0]][tokens[1]])\n\t\t\t.start();\n\t\t\tconsole.log('tweeeeeen', this.tween, TWEEN)\n\t\twindow.requestAnimationFrame(this.boundOnUpdate);\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": { "in": "Math.random()" }
			},
			"n40": {
				"id": "n40",
				"rev": 10,
				"text":
					"class Perspective extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'my-input',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 0,\n\t\t\t\trestrict: N.float(0, 10000)\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'z',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t}\n\t\t]\n\t}\n\n\tstatic get outputs() {\n\t  return ['my-output']\n\t}\n\n\tonReady() {\n\t\t// Called when component is on the DOM\n\t}\n\n\tonDestroy() {\n\t\t// Called when component will be removed from the DOM\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t  this.screen.querySelector('canvas').style.transform = 'rotateX(' + this.getAttribute('my-input') + 'deg)'\n\t  this.screen.querySelector('canvas:last-child').style.transform = 'rotateX(' + this.getAttribute('my-input') + 'deg) translateZ(' + this.getAttribute('z') + 'px)'\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": { "my-input": "x*40", "z": "x*400" }
			}
		},
		"chainPool": {
			"nodeIdToChainId": { "n18": "c3", "n10": "c9", "n29": "c10", "n37": "c18" },
			"nextChainId": 21,
			"pool": {
				"c3": { "id": "c3", "values": [] },
				"c9": { "id": "c9", "values": [] },
				"c10": {
					"id": "c10",
					"values": [
						{ "id": "n29", "v": "brightness(100%)" },
						{ "id": "n38", "v": "grayscale(100%)" }
					]
				},
				"c18": { "id": "c18", "values": [] }
			}
		}
	}
}
