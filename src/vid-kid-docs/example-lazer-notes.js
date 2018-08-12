export default {
	editingNodeId: null,
	editingPage: false,
	selectedConnection: null,
	connecting: null,
	pageHTML:
		'<body>\n<div id="grid"></div>\n<div id="notes"></div>\n<div id="notes-2"></div>\n</body>',
	pageCSS:
		'body {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 14pt;\n\tfont-family: Arial, Helvetica, sans-serif;\n\tcolor: white;\n\tbackground: black;\n}\n\ndiv {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\ncanvas {\n    width: 100%;\n    height: 100%;\n    \n}\n\n#notes {\n    opacity: .5;\n    top: 10vh;\n}\n#notes canvas {\n    height: 10vh;\n}\n#notes-2 {\n    opacity: .2;\n}',
	nodeUIMap: {
		n0: { pos: [515, 181] },
		n1: { pos: [247, 119] },
		n2: { pos: [325, 24] },
		n3: { pos: [648, 178] },
		n4: { pos: [34, 30], control: { 'note-on': true, channel: true } },
		n5: { pos: [649, 231] },
		n6: { pos: [650, 286] },
		n7: { pos: [375, 376], control: { capture: true, selector: true, width: true } },
		n8: { pos: [731, 448] },
		n9: { pos: [816, 482] },
		n10: { pos: [821, 487] },
		n11: { pos: [778, 570] },
		n12: { pos: [805, 570] },
		n13: { pos: [791, 508] },
		n14: { pos: [774, 446], control: { color: true } },
		n15: { pos: [688, 461], control: { color: true } },
		n16: {
			pos: [1104, 570],
			control: { selector: true, 'left-wall': true, 'invert-bg': true, 'tween-bg': true }
		},
		n17: { pos: [706, 444], control: { 'lowest-note': true, 'highest-note': true, color: true } },
		n18: { pos: [1258, 377], control: { selector: true, width: true } },
		n19: { pos: [1569, 413], control: { 'lowest-note': true, 'highest-note': true, color: true } },
		n20: { pos: [1263, 214], control: { delay: true } },
		n21: { pos: [1096, 52] },
		n22: { pos: [1020, 70], control: { selector: true } },
		n23: { pos: [715, 12], control: { amount: true, type: true } },
		n24: { pos: [411, 250] },
		n25: { pos: [379, 384] },
		n26: { pos: [137, 445], control: { channel: true, 'note-on': true } },
		n27: { pos: [187, 752], control: { channel: true, 'note-on': true } },
		n28: { pos: [439, 463] },
		n29: { pos: [884, 768] },
		n30: { pos: [488, 678], control: { 'value-1': true, 'value-2': true, state: true } },
		n31: { pos: [356, 300], control: { channel: true, 'note-on': true } },
		n32: { pos: [80, 575], control: { channel: true, 'note-on': true } },
		n33: { pos: [1138, 854], control: { type: true, amount: true } },
		n34: { pos: [1109, 428] },
		n35: { pos: [1357, 486], control: { time: true } },
		n36: { pos: [803, 718] },
		n37: { pos: [1053, 537], control: { 'high-value': true, delay: true } },
		n38: { pos: [407, 870] },
		n39: { pos: [799, 865] },
		n40: { pos: [670, 963] },
		n41: { pos: [805, 361], control: { 'high-value': true, 'low-value': true } }
	},
	isCablesMuted: false,
	fullscreen: false,
	zoomLevel: 1,
	nodeMap: {
		nodeMap: {
			n2: { n3: 1, n5: 1, n6: 1, n23: 1 },
			n23: { n22: 1 },
			n32: { n30: 1 },
			n4: { n2: 1 },
			n30: { n16: 1 },
			n31: { n16: 3 }
		},
		portMap: {
			'n2.number': { 'n3.in': true, 'n23.amount': true },
			'n2.velocity': { 'n5.in': true },
			'n2.both': { 'n6.in': true },
			'n23.chain-id': { 'n22.chain-id': true },
			'n32.note-on': { 'n30.in': true },
			'n4.note-on': { 'n2.note-on': true },
			'n30.out': { 'n16.invert-bg': true },
			'n31.note-on': { 'n16.left-wall': true, 'n16.right-wall': true, 'n16.tween-light': true }
		},
		inputsMap: {
			'n3.in': { 'n2.number': true },
			'n5.in': { 'n2.velocity': true },
			'n6.in': { 'n2.both': true },
			'n22.chain-id': { 'n23.chain-id': true },
			'n23.amount': { 'n2.number': true },
			'n2.note-on': { 'n4.note-on': true },
			'n30.in': { 'n32.note-on': true },
			'n16.invert-bg': { 'n30.out': true },
			'n16.left-wall': { 'n31.note-on': true },
			'n16.right-wall': { 'n31.note-on': true },
			'n16.tween-light': { 'n31.note-on': true }
		},
		nextId: 42,
		nodeOrder: ['n2', 'n3', 'n4', 'n5', 'n6', 'n22', 'n23', 'n31', 'n32', 'n16', 'n30'],
		values: {
			n2: { 'note-on': [144, 61, 55] },
			n3: { in: 61 },
			n4: {
				'device-id': '607674038',
				channel: 0,
				message: false,
				realtime: false,
				beat: 'quarter note',
				'note-on': true,
				'note-off': false,
				cc: false,
				'zero-as-off': true
			},
			n5: { in: 55 },
			n6: { in: [61, 55] },
			n22: { 'chain-id': 'c7', selector: 'body' },
			n23: { 'chain-id': '', type: 'hue-rotate', amount: 0 },
			n30: { in: [144, 36, 100], state: false, 'value-1': 1, 'value-2': 0 },
			n31: {
				'device-id': '1793395692',
				channel: 0,
				message: false,
				realtime: false,
				beat: 'quarter note',
				'note-on': true,
				'note-off': false,
				cc: false,
				'zero-as-off': true
			},
			n32: {
				'device-id': '173186657',
				channel: 0,
				message: false,
				realtime: false,
				beat: 'quarter note',
				'note-on': true,
				'note-off': false,
				cc: false,
				'zero-as-off': true
			},
			n16: {
				selector: '#grid',
				speed: 1,
				'left-wall': [144, 36, 100],
				'right-wall': [144, 36, 100],
				'tween-bg': true,
				'tween-light': [144, 36, 100],
				'invert-bg': false
			}
		},
		byId: {
			n2: {
				id: 'n2',
				rev: 0,
				text:
					'class MIDINoteOn extends N {\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "note-on",\n\t\t\tobserve: true\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["number", "velocity", "both"];\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet midiData = this.getAttribute("note-on");\n\t\tif (!(midiData instanceof Array)) return;\n\t\tlet noteNum = parseInt(midiData[1], 10);\n\t\tlet noteVel = parseInt(midiData[2], 10);\n\t\tthis.send("number", noteNum);\n\t\tthis.send("velocity", noteVel);\n\t\tthis.send("both", [noteNum, noteVel]);\n\t}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: {}
			},
			n3: {
				id: 'n3',
				rev: 0,
				text:
					'class Node extends N {\n\t// Here is a comment\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "in",\n\t\t\tobserve: true\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["out"];\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase "in":\n\t\t\t\tthis.send("out", newValue);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tonReady() {}\n\n\tonDestroy() {}\n\n\tonScreenDestroy() {}\n\n\tonScreenUpdated() {}\n\n\tonInputConnected(name, toAddress) {}\n\n\tonOutputConnected(name, fromAddress) {}\n\n\tonInputWillDisconnect(name, fromAddress) {}\n\n\tonOutputWillDisconnect(name, toAddress) {}\n\n\tonInputDisconnected(name, numConnections, numNodeConnections) {}\n\n\tonOutputDisconnected(name, numConnections, numNodeConnections) {}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: {}
			},
			n4: {
				id: 'n4',
				rev: 0,
				text:
					'class MIDIDevice extends N {\n\tstatic get type() {\n\t\treturn N.HARDWARE;\n\t}\n\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "device-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String,\n\t\t\tvisible: false\n\t\t}, {\n\t\t\tname: "channel",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: 0,\n\t\t\trestrict: N.int(0, 16),\n\t\t\tcontrol: N.range()\n\t\t}, {\n\t\t\tname: "message",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "realtime",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "beat",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: "quarter note",\n\t\t\trestrict: N.set(["24ppqn", "quarter note", "bar", "4 bars"])\n\t\t}, {\n\t\t\tname: "note-on",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "note-off",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "cc",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "zero-as-off",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: true,\n\t\t\trestrict: Boolean\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["message", "start", "stop", "continue", "clock", "note-on", "note-off", "cc", "bpm"];\n\t}\n\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tsetInput(id) {\n\t\tif (!this.inputs) return;\n\t\tthis.removeMIDIListeners();\n\n\t\tif (id !== "") {\n\t\t\tlet input = this.inputs.get(id);\n\n\t\t\tif (input) {\n\t\t\t\tinput.addEventListener("midimessage", this.boundOnMIDIMessage);\n\t\t\t}\n\t\t}\n\n\t\tthis.root.getElementById("select").value = id;\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tthis.setInput(newValue);\n\t}\n\n\tremoveMIDIListeners() {\n\t\tif (!this.inputs) return;\n\n\t\tfor (let input of this.inputs.values()) {\n\t\t\tinput.removeEventListener("midimessage", this.boundOnMIDIMessage);\n\t\t}\n\t}\n\n\tonMIDIMessage(event) {\n\t\tlet data = Array.from(event.data);\n\t\tlet channel = this.getAttribute("channel");\n\t\tlet allowMessage = this.getAttribute("message");\n\t\tlet allowRealTime = this.getAttribute("realtime");\n\t\tlet allowNoteOn = this.getAttribute("note-on");\n\t\tlet allowNoteOff = this.getAttribute("note-off");\n\t\tlet allowCC = this.getAttribute("cc");\n\t\tlet transformNoteOnVelocityZeroAsNoteOff = this.getAttribute("zero-as-off");\n\t\tlet sendClockPerBeat = this.getAttribute("beat");\n\t\tif (allowMessage) this.send("message", data); // Clock:\n\n\t\tif (data[0] === 0xfa && allowRealTime) {\n\t\t\t//start\n\t\t\tthis.sendClock = true;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send("start", data);\n\t\t}\n\n\t\tif (data[0] === 0xfc && allowRealTime) {\n\t\t\t//stop\n\t\t\tthis.sendClock = false;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send("stop", data);\n\t\t}\n\n\t\tif (data[0] === 0xfb && allowRealTime) {\n\t\t\t//continue\n\t\t\treturn this.send("continue", data);\n\t\t}\n\n\t\tif (data[0] === 0xf8 && allowRealTime && this.sendClock) {\n\t\t\tif (this.clock % 24 === 0) {\n\t\t\t\tlet now = Date.now();\n\t\t\t\tif (this.lastClock) this.send("bpm", 60000 / (now - this.lastClock));\n\t\t\t\tthis.lastClock = now;\n\t\t\t}\n\n\t\t\tlet shouldSendBeat = false;\n\n\t\t\tswitch (sendClockPerBeat) {\n\t\t\t\tcase "24ppqn":\n\t\t\t\t\tshouldSendBeat = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "quarter note":\n\t\t\t\t\tshouldSendBeat = this.clock % 24 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "bar":\n\t\t\t\t\tshouldSendBeat = this.clock % 96 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "4 bars":\n\t\t\t\t\tshouldSendBeat = this.clock === 0;\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tif (shouldSendBeat) this.send("clock", data);\n\t\t\tthis.clock = (this.clock + 1) % 384; //24ppqn * 4 quarter notes * 4 bars\n\t\t} // Channel messages:\n\n\n\t\tif (channel === 0 || channel === (data[0] & 0x0f) + 1) {\n\t\t\tlet type = data[0] >> 4;\n\n\t\t\tif (type === 0x9 && data[2] === 0 && transformNoteOnVelocityZeroAsNoteOff) {\n\t\t\t\ttype = 0x8;\n\t\t\t}\n\n\t\t\tif (type === 0x9 && allowNoteOn) return this.send("note-on", data);\n\t\t\tif (type === 0x8 && allowNoteOff) return this.send("note-off", data);\n\t\t\tif (type === 0xb && allowCC) return this.send("cc", data);\n\t\t}\n\t}\n\n\tonMIDISuccess(midiAccess) {\n\t\tthis.inputs = midiAccess.inputs;\n\t\tlet select = this.root.getElementById("select");\n\t\tlet option = document.createElement("option");\n\t\toption.innerText = "Select device...";\n\t\toption.value = "";\n\t\tselect.appendChild(option);\n\n\t\tfor (let input of this.inputs.values()) {\n\t\t\toption = document.createElement("option");\n\t\t\toption.innerText = input.manufacturer + " " + input.name;\n\t\t\toption.value = input.id;\n\t\t\tselect.appendChild(option);\n\t\t}\n\n\t\tselect.addEventListener("change", event => {\n\t\t\tthis.setAttribute("device-id", event.target.value);\n\t\t}); // Force listener to listen:\n\n\t\tthis.setInput(this.getAttribute("device-id"));\n\t}\n\n\tonMIDIFailure() {\n\t\talert("Unable to obtain MIDI access!");\n\t}\n\n\tonReady() {\n\t\tthis.boundOnMIDIMessage = this.onMIDIMessage.bind(this);\n\t\tnavigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this));\n\t}\n\n\tonDestroy() {\n\t\tthis.removeMIDIListeners();\n\t}\n\n}',
				templateHTML: '<div>\n\t<select id="select"></select>\n</div>',
				templateCSS: null,
				transforms: {}
			},
			n5: {
				id: 'n5',
				rev: 0,
				text:
					'class Node extends N {\n\t// Here is a comment\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "in",\n\t\t\tobserve: true\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["out"];\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase "in":\n\t\t\t\tthis.send("out", newValue);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tonReady() {}\n\n\tonDestroy() {}\n\n\tonScreenDestroy() {}\n\n\tonScreenUpdated() {}\n\n\tonInputConnected(name, toAddress) {}\n\n\tonOutputConnected(name, fromAddress) {}\n\n\tonInputWillDisconnect(name, fromAddress) {}\n\n\tonOutputWillDisconnect(name, toAddress) {}\n\n\tonInputDisconnected(name, numConnections, numNodeConnections) {}\n\n\tonOutputDisconnected(name, numConnections, numNodeConnections) {}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: {}
			},
			n6: {
				id: 'n6',
				rev: 0,
				text:
					'class Node extends N {\n\t// Here is a comment\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "in",\n\t\t\tobserve: true\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["out"];\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase "in":\n\t\t\t\tthis.send("out", newValue);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tonReady() {}\n\n\tonDestroy() {}\n\n\tonScreenDestroy() {}\n\n\tonScreenUpdated() {}\n\n\tonInputConnected(name, toAddress) {}\n\n\tonOutputConnected(name, fromAddress) {}\n\n\tonInputWillDisconnect(name, fromAddress) {}\n\n\tonOutputWillDisconnect(name, toAddress) {}\n\n\tonInputDisconnected(name, numConnections, numNodeConnections) {}\n\n\tonOutputDisconnected(name, numConnections, numNodeConnections) {}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: {}
			},
			n22: {
				id: 'n22',
				rev: 0,
				text:
					'class CSSFilterElement extends N {\n\tstatic get type() {\n\t\treturn N.SCREEN;\n\t}\n\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "chain-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String\n\t\t}, {\n\t\t\tname: "selector",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "body",\n\t\t\trestrict: String\n\t\t}];\n\t}\n\n\tgetEl(selector) {\n\t\ttry {\n\t\t\treturn this.screen.querySelector(selector);\n\t\t} catch (e) {\n\t\t\treturn null;\n\t\t}\n\t}\n\n\tsetFilter(selector, filterText) {\n\t\tlet el = this.getEl(selector);\n\t\tif (el) el.style.filter = filterText;\n\t}\n\n\tonInputDisconnected(name) {\n\t\tif (name === "chain-id") {\n\t\t\tthis.setAttribute("chain-id", "");\n\t\t}\n\t}\n\n\tgetCSSFilterString(chainId) {\n\t\tlet chain = this.getChain(chainId);\n\t\tif (!chain) return "";\n\t\treturn chain.get().join(" ");\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase "selector":\n\t\t\t\tthis.setFilter(oldValue, "");\n\t\t\t\tthis.setFilter(newValue, this.getCSSFilterString(this.getAttribute("chain-id")));\n\t\t\t\tbreak;\n\n\t\t\tcase "chain-id":\n\t\t\t\tthis.setFilter(this.getAttribute("selector"), this.getCSSFilterString(newValue));\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: {}
			},
			n23: {
				id: 'n23',
				rev: 0,
				text:
					'class CSSFilter extends N {\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "chain-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String\n\t\t}, {\n\t\t\tname: "type",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "grayscale",\n\t\t\trestrict: N.set(["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"])\n\t\t}, {\n\t\t\tname: "amount",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: 0,\n\t\t\trestrict: Number\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["chain-id"];\n\t}\n\n\tgetCSSRule(type, amount) {\n\t\tswitch (type) {\n\t\t\tcase "blur":\n\t\t\t\treturn "blur(" + amount + "px)";\n\n\t\t\tcase "brightness":\n\t\t\t\treturn "brightness(" + amount + "%)";\n\n\t\t\tcase "contrast":\n\t\t\t\treturn "contrast(" + amount + "%)";\n\n\t\t\tcase "grayscale":\n\t\t\t\treturn "grayscale(" + amount + "%)";\n\n\t\t\tcase "hue-rotate":\n\t\t\t\treturn "hue-rotate(" + amount + "deg)";\n\n\t\t\tcase "invert":\n\t\t\t\treturn "invert(" + amount + "%)";\n\n\t\t\tcase "opacity":\n\t\t\t\treturn "opacity(" + amount + "%)";\n\n\t\t\tcase "saturate":\n\t\t\t\treturn "saturate(" + amount + "%)";\n\n\t\t\tcase "sepia":\n\t\t\t\treturn "sepia(" + amount + "%)";\n\n\t\t\tdefault:\n\t\t\t\treturn null;\n\t\t}\n\t}\n\n\tonInputDisconnected(name) {\n\t\tif (name === "chain-id") {\n\t\t\tthis.releaseChain(this.getAttribute("chain-id"));\n\t\t\tthis.setAttribute("chain-id", "");\n\t\t}\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet rule = this.getCSSRule(this.getAttribute("type"), this.getAttribute("amount"));\n\t\tif (!rule) return;\n\t\tlet chain = this.getChain(this.getAttribute("chain-id"));\n\t\tchain.set(this.id, rule);\n\t\tthis.send("chain-id", chain.id);\n\t}\n\n\tonDestroy() {\n\t\tthis.releaseChain(this.getAttribute("chain-id"));\n\t}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: { amount: 'x*1000' }
			},
			n30: {
				id: 'n30',
				rev: 0,
				text:
					'class FlipFlop extends N {\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "in",\n\t\t\tobserve: true,\n\t\t\tcontrol: N.button()\n\t\t}, {\n\t\t\tname: "state",\n\t\t\tobserve: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "value-1",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: 0,\n\t\t\trestrict: Number\n\t\t}, {\n\t\t\tname: "value-2",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: 1,\n\t\t\trestrict: Number\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["out"];\n\t}\n\n\tupdateAndSendValue() {\n\t\tlet value = this.getAttribute("value");\n\t\tlet isAscending = this.getAttribute("ascending");\n\t\tlet byAmount = this.getAttribute("by-amount");\n\t\tlet loopAtMax = this.getAttribute("loop-at-max");\n\t\tlet max = this.getAttribute("max");\n\t\tlet operator = this.getAttribute("operator");\n\t\tif (!isAscending) byAmount *= -1;\n\n\t\tswitch (operator) {\n\t\t\tcase "add":\n\t\t\t\tvalue += byAmount;\n\t\t\t\tbreak;\n\n\t\t\tcase "multiply":\n\t\t\t\tvalue *= byAmount;\n\t\t\t\tbreak;\n\n\t\t\tcase "divide":\n\t\t\t\tvalue /= byAmount;\n\t\t\t\tbreak;\n\t\t}\n\n\t\tif (loopAtMax) {\n\t\t\tif (isAscending && value > max || !isAscending && value < max) {\n\t\t\t\tvalue = this.getAttribute("start");\n\t\t\t}\n\t\t}\n\n\t\tthis.setAttribute("value", value);\n\t\tthis.send("out", value);\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tlet v1 = this.getAttribute("value-1");\n\t\tlet v2 = this.getAttribute("value-2");\n\t\tlet shouldSendValue2 = this.getAttribute("state");\n\t\tthis.send("out", shouldSendValue2 ? v2 : v1);\n\t\tthis.setAttribute("state", !shouldSendValue2);\n\t}\n\n}',
				templateHTML: null,
				templateCSS: null,
				transforms: {}
			},
			n31: {
				id: 'n31',
				rev: 0,
				text:
					'class MIDIDevice extends N {\n\tstatic get type() {\n\t\treturn N.HARDWARE;\n\t}\n\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "device-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String,\n\t\t\tvisible: false\n\t\t}, {\n\t\t\tname: "channel",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: 0,\n\t\t\trestrict: N.int(0, 16),\n\t\t\tcontrol: N.range()\n\t\t}, {\n\t\t\tname: "message",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "realtime",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "beat",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: "quarter note",\n\t\t\trestrict: N.set(["24ppqn", "quarter note", "bar", "4 bars"])\n\t\t}, {\n\t\t\tname: "note-on",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "note-off",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "cc",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "zero-as-off",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: true,\n\t\t\trestrict: Boolean\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["message", "start", "stop", "continue", "clock", "note-on", "note-off", "cc", "bpm"];\n\t}\n\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tsetInput(id) {\n\t\tif (!this.inputs) return;\n\t\tthis.removeMIDIListeners();\n\n\t\tif (id !== "") {\n\t\t\tlet input = this.inputs.get(id);\n\n\t\t\tif (input) {\n\t\t\t\tinput.addEventListener("midimessage", this.boundOnMIDIMessage);\n\t\t\t}\n\t\t}\n\n\t\tthis.root.getElementById("select").value = id;\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tthis.setInput(newValue);\n\t}\n\n\tremoveMIDIListeners() {\n\t\tif (!this.inputs) return;\n\n\t\tfor (let input of this.inputs.values()) {\n\t\t\tinput.removeEventListener("midimessage", this.boundOnMIDIMessage);\n\t\t}\n\t}\n\n\tonMIDIMessage(event) {\n\t\tlet data = Array.from(event.data);\n\t\tlet channel = this.getAttribute("channel");\n\t\tlet allowMessage = this.getAttribute("message");\n\t\tlet allowRealTime = this.getAttribute("realtime");\n\t\tlet allowNoteOn = this.getAttribute("note-on");\n\t\tlet allowNoteOff = this.getAttribute("note-off");\n\t\tlet allowCC = this.getAttribute("cc");\n\t\tlet transformNoteOnVelocityZeroAsNoteOff = this.getAttribute("zero-as-off");\n\t\tlet sendClockPerBeat = this.getAttribute("beat");\n\t\tif (allowMessage) this.send("message", data); // Clock:\n\n\t\tif (data[0] === 0xfa && allowRealTime) {\n\t\t\t//start\n\t\t\tthis.sendClock = true;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send("start", data);\n\t\t}\n\n\t\tif (data[0] === 0xfc && allowRealTime) {\n\t\t\t//stop\n\t\t\tthis.sendClock = false;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send("stop", data);\n\t\t}\n\n\t\tif (data[0] === 0xfb && allowRealTime) {\n\t\t\t//continue\n\t\t\treturn this.send("continue", data);\n\t\t}\n\n\t\tif (data[0] === 0xf8 && allowRealTime && this.sendClock) {\n\t\t\tif (this.clock % 24 === 0) {\n\t\t\t\tlet now = Date.now();\n\t\t\t\tif (this.lastClock) this.send("bpm", 60000 / (now - this.lastClock));\n\t\t\t\tthis.lastClock = now;\n\t\t\t}\n\n\t\t\tlet shouldSendBeat = false;\n\n\t\t\tswitch (sendClockPerBeat) {\n\t\t\t\tcase "24ppqn":\n\t\t\t\t\tshouldSendBeat = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "quarter note":\n\t\t\t\t\tshouldSendBeat = this.clock % 24 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "bar":\n\t\t\t\t\tshouldSendBeat = this.clock % 96 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "4 bars":\n\t\t\t\t\tshouldSendBeat = this.clock === 0;\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tif (shouldSendBeat) this.send("clock", data);\n\t\t\tthis.clock = (this.clock + 1) % 384; //24ppqn * 4 quarter notes * 4 bars\n\t\t} // Channel messages:\n\n\n\t\tif (channel === 0 || channel === (data[0] & 0x0f) + 1) {\n\t\t\tlet type = data[0] >> 4;\n\n\t\t\tif (type === 0x9 && data[2] === 0 && transformNoteOnVelocityZeroAsNoteOff) {\n\t\t\t\ttype = 0x8;\n\t\t\t}\n\n\t\t\tif (type === 0x9 && allowNoteOn) return this.send("note-on", data);\n\t\t\tif (type === 0x8 && allowNoteOff) return this.send("note-off", data);\n\t\t\tif (type === 0xb && allowCC) return this.send("cc", data);\n\t\t}\n\t}\n\n\tonMIDISuccess(midiAccess) {\n\t\tthis.inputs = midiAccess.inputs;\n\t\tlet select = this.root.getElementById("select");\n\t\tlet option = document.createElement("option");\n\t\toption.innerText = "Select device...";\n\t\toption.value = "";\n\t\tselect.appendChild(option);\n\n\t\tfor (let input of this.inputs.values()) {\n\t\t\toption = document.createElement("option");\n\t\t\toption.innerText = input.manufacturer + " " + input.name;\n\t\t\toption.value = input.id;\n\t\t\tselect.appendChild(option);\n\t\t}\n\n\t\tselect.addEventListener("change", event => {\n\t\t\tthis.setAttribute("device-id", event.target.value);\n\t\t}); // Force listener to listen:\n\n\t\tthis.setInput(this.getAttribute("device-id"));\n\t}\n\n\tonMIDIFailure() {\n\t\talert("Unable to obtain MIDI access!");\n\t}\n\n\tonReady() {\n\t\tthis.boundOnMIDIMessage = this.onMIDIMessage.bind(this);\n\t\tnavigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this));\n\t}\n\n\tonDestroy() {\n\t\tthis.removeMIDIListeners();\n\t}\n\n}',
				templateHTML: '<div>\n\t<select id="select"></select>\n</div>',
				templateCSS: null,
				transforms: {}
			},
			n32: {
				id: 'n32',
				rev: 0,
				text:
					'class MIDIDevice extends N {\n\tstatic get type() {\n\t\treturn N.HARDWARE;\n\t}\n\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "device-id",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String,\n\t\t\tvisible: false\n\t\t}, {\n\t\t\tname: "channel",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: 0,\n\t\t\trestrict: N.int(0, 16),\n\t\t\tcontrol: N.range()\n\t\t}, {\n\t\t\tname: "message",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "realtime",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "beat",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: "quarter note",\n\t\t\trestrict: N.set(["24ppqn", "quarter note", "bar", "4 bars"])\n\t\t}, {\n\t\t\tname: "note-on",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "note-off",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "cc",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}, {\n\t\t\tname: "zero-as-off",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: true,\n\t\t\trestrict: Boolean\n\t\t}];\n\t}\n\n\tstatic get outputs() {\n\t\treturn ["message", "start", "stop", "continue", "clock", "note-on", "note-off", "cc", "bpm"];\n\t}\n\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tsetInput(id) {\n\t\tif (!this.inputs) return;\n\t\tthis.removeMIDIListeners();\n\n\t\tif (id !== "") {\n\t\t\tlet input = this.inputs.get(id);\n\n\t\t\tif (input) {\n\t\t\t\tinput.addEventListener("midimessage", this.boundOnMIDIMessage);\n\t\t\t}\n\t\t}\n\n\t\tthis.root.getElementById("select").value = id;\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tthis.setInput(newValue);\n\t}\n\n\tremoveMIDIListeners() {\n\t\tif (!this.inputs) return;\n\n\t\tfor (let input of this.inputs.values()) {\n\t\t\tinput.removeEventListener("midimessage", this.boundOnMIDIMessage);\n\t\t}\n\t}\n\n\tonMIDIMessage(event) {\n\t\tlet data = Array.from(event.data);\n\t\tlet channel = this.getAttribute("channel");\n\t\tlet allowMessage = this.getAttribute("message");\n\t\tlet allowRealTime = this.getAttribute("realtime");\n\t\tlet allowNoteOn = this.getAttribute("note-on");\n\t\tlet allowNoteOff = this.getAttribute("note-off");\n\t\tlet allowCC = this.getAttribute("cc");\n\t\tlet transformNoteOnVelocityZeroAsNoteOff = this.getAttribute("zero-as-off");\n\t\tlet sendClockPerBeat = this.getAttribute("beat");\n\t\tif (allowMessage) this.send("message", data); // Clock:\n\n\t\tif (data[0] === 0xfa && allowRealTime) {\n\t\t\t//start\n\t\t\tthis.sendClock = true;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send("start", data);\n\t\t}\n\n\t\tif (data[0] === 0xfc && allowRealTime) {\n\t\t\t//stop\n\t\t\tthis.sendClock = false;\n\t\t\tthis.clock = 0;\n\t\t\treturn this.send("stop", data);\n\t\t}\n\n\t\tif (data[0] === 0xfb && allowRealTime) {\n\t\t\t//continue\n\t\t\treturn this.send("continue", data);\n\t\t}\n\n\t\tif (data[0] === 0xf8 && allowRealTime && this.sendClock) {\n\t\t\tif (this.clock % 24 === 0) {\n\t\t\t\tlet now = Date.now();\n\t\t\t\tif (this.lastClock) this.send("bpm", 60000 / (now - this.lastClock));\n\t\t\t\tthis.lastClock = now;\n\t\t\t}\n\n\t\t\tlet shouldSendBeat = false;\n\n\t\t\tswitch (sendClockPerBeat) {\n\t\t\t\tcase "24ppqn":\n\t\t\t\t\tshouldSendBeat = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "quarter note":\n\t\t\t\t\tshouldSendBeat = this.clock % 24 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "bar":\n\t\t\t\t\tshouldSendBeat = this.clock % 96 === 0;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase "4 bars":\n\t\t\t\t\tshouldSendBeat = this.clock === 0;\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tif (shouldSendBeat) this.send("clock", data);\n\t\t\tthis.clock = (this.clock + 1) % 384; //24ppqn * 4 quarter notes * 4 bars\n\t\t} // Channel messages:\n\n\n\t\tif (channel === 0 || channel === (data[0] & 0x0f) + 1) {\n\t\t\tlet type = data[0] >> 4;\n\n\t\t\tif (type === 0x9 && data[2] === 0 && transformNoteOnVelocityZeroAsNoteOff) {\n\t\t\t\ttype = 0x8;\n\t\t\t}\n\n\t\t\tif (type === 0x9 && allowNoteOn) return this.send("note-on", data);\n\t\t\tif (type === 0x8 && allowNoteOff) return this.send("note-off", data);\n\t\t\tif (type === 0xb && allowCC) return this.send("cc", data);\n\t\t}\n\t}\n\n\tonMIDISuccess(midiAccess) {\n\t\tthis.inputs = midiAccess.inputs;\n\t\tlet select = this.root.getElementById("select");\n\t\tlet option = document.createElement("option");\n\t\toption.innerText = "Select device...";\n\t\toption.value = "";\n\t\tselect.appendChild(option);\n\n\t\tfor (let input of this.inputs.values()) {\n\t\t\toption = document.createElement("option");\n\t\t\toption.innerText = input.manufacturer + " " + input.name;\n\t\t\toption.value = input.id;\n\t\t\tselect.appendChild(option);\n\t\t}\n\n\t\tselect.addEventListener("change", event => {\n\t\t\tthis.setAttribute("device-id", event.target.value);\n\t\t}); // Force listener to listen:\n\n\t\tthis.setInput(this.getAttribute("device-id"));\n\t}\n\n\tonMIDIFailure() {\n\t\talert("Unable to obtain MIDI access!");\n\t}\n\n\tonReady() {\n\t\tthis.boundOnMIDIMessage = this.onMIDIMessage.bind(this);\n\t\tnavigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this));\n\t}\n\n\tonDestroy() {\n\t\tthis.removeMIDIListeners();\n\t}\n\n}',
				templateHTML: '<div>\n\t<select id="select"></select>\n</div>',
				templateCSS: null,
				transforms: {}
			},
			n16: {
				id: 'n16',
				rev: 4,
				text:
					'class LazerGrid extends N {\n\tstatic get type() {\n\t\treturn N.SCREEN;\n\t}\n\n\tstatic get inputs() {\n\t\treturn [{\n\t\t\tname: "selector",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: "",\n\t\t\trestrict: String\n\t\t}, {\n\t\t\tname: "speed",\n\t\t\tobserve: false,\n\t\t\tdefaultValue: 1,\n\t\t\trestrict: Number,\n\t\t\tcontrol: N.range({\n\t\t\t\tmin: 0,\n\t\t\t\tmax: 10,\n\t\t\t\tstep: 0.1\n\t\t\t})\n\t\t}, {\n\t\t\tname: "left-wall",\n\t\t\tobserve: true,\n\t\t\tcontrol: N.button()\n\t\t}, {\n\t\t\tname: "right-wall",\n\t\t\tobserve: true,\n\t\t\tcontrol: N.button()\n\t\t}, {\n\t\t\tname: "tween-bg",\n\t\t\tobserve: true,\n\t\t\tcontrol: N.button()\n\t\t}, {\n\t\t\tname: "tween-light",\n\t\t\tobserve: true,\n\t\t\tcontrol: N.button()\n\t\t}, {\n\t\t\tname: "invert-bg",\n\t\t\tobserve: true,\n\t\t\tdefaultValue: false,\n\t\t\trestrict: Boolean\n\t\t}];\n\t}\n\n\tonSelectorUpdated() {\n\t\tlet sel = this.getAttribute("selector");\n\t\tif (!this.renderer || !this.renderer.domElement) return;\n\n\t\ttry {\n\t\t\tlet el = this.screen.querySelector(sel);\n\n\t\t\tif (el) {\n\t\t\t\tel.appendChild(this.renderer.domElement);\n\t\t\t} else {\n\t\t\t\tthis.root.getElementById("container").appendChild(this.renderer.domElement);\n\t\t\t}\n\t\t} catch (e) {\n\t\t\tthis.root.getElementById("container").appendChild(this.renderer.domElement);\n\t\t}\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t\tswitch (name) {\n\t\t\tcase "selector":\n\t\t\t\tthis.onSelectorUpdated();\n\t\t\t\tbreak;\n\n\t\t\tcase "left-wall":\n\t\t\t\tthis.drawLeftWall();\n\t\t\t\tbreak;\n\n\t\t\tcase "right-wall":\n\t\t\t\tthis.drawRightWall();\n\t\t\t\tbreak;\n\n\t\t\tcase "tween-bg":\n\t\t\t\tthis.tweenBackground();\n\t\t\t\tbreak;\n\n\t\t\tcase "tween-light":\n\t\t\t\tthis.tweenLight();\n\t\t\t\tbreak;\n\n\t\t\tcase "invert-bg":\n\t\t\t\tthis.setBg(this.getAttribute("invert-bg"));\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tonReady() {\n\t\tthis.boundResize = this.onResize.bind(this);\n\t\twindow.addEventListener("resize", this.boundResize);\n\t\tthis.onScreenDestroy();\n\t\tthis.TWEEN_TIME = 1000;\n\t\tthis.color1 = 0x0;\n\t\tthis.color2 = 0x4b336b;\n\t\tthis.active = true;\n\t\tthis.boundAnimate = this.animate.bind(this);\n\t\tthis.boundTweenCamera = this.tweenCamera.bind(this);\n\t\tthis.scene = new THREE.Scene();\n\t\tthis.scene.background = new THREE.Color(this.color1);\n\t\tthis.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n\t\tthis.renderer = new THREE.WebGLRenderer();\n\t\tthis.renderer.setSize(window.innerWidth, window.innerHeight);\n\t\tthis.light = new THREE.AmbientLight(0x0000ff, 0.2);\n\t\tthis.scene.add(this.light);\n\t\tthis.lightTarget = new THREE.Object3D();\n\t\tthis.scene.add(this.lightTarget);\n\t\tthis.lines = [];\n\t\tthis.walls = [];\n\t\tthis.drawStars();\n\t\tthis.drawMountains();\n\t\tthis.grids = this.drawGrid();\n\t\tthis.dome = this.drawDome();\n\t\tthis.directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);\n\t\tthis.lightTarget.position.x = this.dome.position.x;\n\t\tthis.lightTarget.position.y = this.dome.position.y;\n\t\tthis.lightTarget.position.z = this.dome.position.z;\n\t\tthis.directionalLight.target = this.lightTarget;\n\t\tthis.scene.add(this.directionalLight);\n\t\tthis.cameraTarget = new THREE.Object3D();\n\t\tthis.scene.add(this.cameraTarget);\n\t\tthis.camera.position.set(0, 2, 200);\n\t\tthis.camera.lookAt(this.lightTarget.position);\n\t\tthis.isColor1 = true;\n\t\tthis.animate();\n\t\tthis.tweenCamera();\n\t\tthis.root.getElementById("container").appendChild(this.renderer.domElement);\n\t}\n\n\ttweenCamera() {\n\t\tlet intervalTime = Math.max(this.TWEEN_TIME * 4, Math.random() * this.TWEEN_TIME * 16);\n\t\tlet cameraTargetPos = {\n\t\t\tx: this.cameraTarget.position.x,\n\t\t\ty: this.cameraTarget.position.y,\n\t\t\tz: this.cameraTarget.position.z\n\t\t};\n\t\tlet cameraTargetTween = new TWEEN.Tween(cameraTargetPos).to({\n\t\t\tx: Math.random() * 200 - 100,\n\t\t\ty: Math.random() * 8 - 4,\n\t\t\tz: this.cameraTarget.position.z\n\t\t}, intervalTime).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(() => {\n\t\t\tthis.cameraTarget.position.x = cameraTargetPos.x;\n\t\t\tthis.cameraTarget.position.y = cameraTargetPos.y;\n\t\t\tthis.cameraTarget.position.z = cameraTargetPos.z;\n\t\t});\n\t\tlet cameraPos = {\n\t\t\tx: this.camera.position.x,\n\t\t\ty: this.camera.position.y,\n\t\t\tz: this.camera.position.z\n\t\t};\n\t\tlet cameraPosTween = new TWEEN.Tween(cameraPos).to({\n\t\t\tx: this.camera.position.x,\n\t\t\ty: Math.floor(Math.random() * 3 + 0),\n\t\t\tz: this.camera.position.z\n\t\t}, intervalTime).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(() => {\n\t\t\tthis.camera.position.x = cameraPos.x;\n\t\t\tthis.camera.position.y = Math.max(0, cameraPos.y);\n\t\t\tthis.camera.position.z = cameraPos.z;\n\t\t});\n\t\tthis.rotation = {\n\t\t\tx: this.scene.rotation.x,\n\t\t\ty: this.scene.rotation.y,\n\t\t\tz: this.scene.rotation.z\n\t\t};\n\t\tlet twoPi = Math.PI * 2;\n\t\tlet sceneRotationTween = new TWEEN.Tween(this.rotation).to({\n\t\t\tx: Math.random() / 80,\n\t\t\ty: this.scene.rotation.y,\n\t\t\tz: Math.random() * (twoPi / 12) - twoPi / 24\n\t\t}, intervalTime).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(() => {\n\t\t\tthis.scene.rotation.x = this.rotation.x;\n\t\t\tthis.scene.rotation.y = this.rotation.y;\n\t\t\tthis.scene.rotation.z = this.rotation.z;\n\t\t});\n\t\tcameraTargetTween.start();\n\t\tcameraPosTween.start();\n\t\tsceneRotationTween.start();\n\t\tsetTimeout(this.boundTweenCamera, intervalTime);\n\t}\n\n\ttweenLight() {\n\t\tif (this.lightTween) this.lightTween.stop();\n\t\tif (this.lightBackTween) this.lightBackTween.stop();\n\t\tlet flashTime = 200;\n\t\tlet origLight = {\n\t\t\tv: 0.2\n\t\t};\n\t\tlet toLight = {\n\t\t\tv: 1\n\t\t};\n\t\tlet light = {\n\t\t\tv: this.light.intensity\n\t\t};\n\t\tthis.lightTween = new TWEEN.Tween(light).to(toLight, flashTime).easing(TWEEN.Easing.Quadratic.Out).onUpdate(() => {\n\t\t\tthis.light.intensity = light.v;\n\t\t});\n\t\tthis.lightBackTween = new TWEEN.Tween(light).to(origLight, flashTime).easing(TWEEN.Easing.Quadratic.Out).onUpdate(() => {\n\t\t\tthis.light.intensity = light.v;\n\t\t});\n\t\tthis.lightTween.chain(this.lightBackTween);\n\t\tthis.lightTween.start();\n\t}\n\n\ttweenBackground() {\n\t\tif (this.colorTween) this.colorTween.stop();\n\t\tif (this.colorBackTween) this.colorBackTween.stop();\n\t\tlet flashTime = 800;\n\t\tlet origColor = new THREE.Color(this.color1);\n\t\tlet toColor = new THREE.Color(this.color2);\n\t\tlet color = {\n\t\t\tr: this.scene.background.r,\n\t\t\tg: this.scene.background.g,\n\t\t\tb: this.scene.background.b\n\t\t};\n\t\tthis.colorTween = new TWEEN.Tween(color).to(toColor, flashTime).easing(TWEEN.Easing.Quadratic.Out).onUpdate(() => {\n\t\t\tthis.scene.background = new THREE.Color(color.r, color.g, color.b);\n\t\t\tthis.cube.material.color = new THREE.Color(color.r, color.g, color.b);\n\t\t});\n\t\tthis.colorBackTween = new TWEEN.Tween(color).to(origColor, flashTime).easing(TWEEN.Easing.Quadratic.Out).onUpdate(() => {\n\t\t\tthis.scene.background = new THREE.Color(color.r, color.g, color.b);\n\t\t\tthis.cube.material.color = new THREE.Color(color.r, color.g, color.b);\n\t\t});\n\t\tthis.colorTween.chain(this.colorBackTween);\n\t\tthis.colorTween.start();\n\t}\n\n\tcreateMountain(w, h, y, z, x, isWireframe) {\n\t\tlet cone = new THREE.Mesh(new THREE.ConeGeometry(w, h, 6), new THREE.MeshPhongMaterial({\n\t\t\tcolor: 0xffffff,\n\t\t\tspecular: 0x666666,\n\t\t\temissive: 0x000000,\n\t\t\tshininess: 10,\n\t\t\topacity: 0.5,\n\t\t\ttransparent: true,\n\t\t\twireframe: isWireframe\n\t\t}));\n\t\tcone.position.x = x;\n\t\tcone.position.y = y;\n\t\tcone.position.z = z;\n\t\tcone.matrixAutoUpdate = false;\n\t\tcone.updateMatrix();\n\t\treturn cone;\n\t}\n\n\tdrawMountains() {\n\t\tthis.scene.add(this.createMountain(400, 400, 199, -200, -500, false));\n\t\tthis.scene.add(this.createMountain(200, 100, 49, -200, 300, false));\n\t\tthis.scene.add(this.createMountain(100, 50, 24, -200, 500, false));\n\t\tthis.scene.add(this.createMountain(100, 50, 24, -200, -500, false));\n\t\tthis.scene.add(this.createMountain(50, 25, 12, -30, -160, false));\n\t\tthis.scene.add(this.createMountain(400, 400, 199, -200, -500, true));\n\t\tthis.scene.add(this.createMountain(200, 100, 49, -200, 300, true));\n\t\tthis.scene.add(this.createMountain(100, 50, 24, -200, 500, true));\n\t\tthis.scene.add(this.createMountain(100, 50, 24, -200, -500, true));\n\t\tthis.scene.add(this.createMountain(50, 25, 12, -30, -160, true));\n\t}\n\n\tdrawStars() {\n\t\tlet starsGeometry = new THREE.Geometry();\n\n\t\tfor (let i = 0; i < 10000; i++) {\n\t\t\tlet star = new THREE.Vector3();\n\t\t\tstar.x = THREE.Math.randFloatSpread(2000);\n\t\t\tstar.y = THREE.Math.randFloat(0, 1000);\n\t\t\tstar.z = THREE.Math.randFloat(-1000, -400);\n\t\t\tstarsGeometry.vertices.push(star);\n\t\t}\n\n\t\tlet starsMaterial = new THREE.PointsMaterial({\n\t\t\tcolor: 0x888888\n\t\t});\n\t\tlet starField = new THREE.Points(starsGeometry, starsMaterial);\n\t\tstarField.matrixAutoUpdate = false;\n\t\tstarField.updateMatrix();\n\t\tthis.scene.add(starField);\n\t}\n\n\tcreateHorizontalGridLine(z) {\n\t\tlet gridMaterial = new THREE.LineBasicMaterial({\n\t\t\tcolor: 0xff00da\n\t\t});\n\t\tlet gridGeo = new THREE.Geometry();\n\t\tgridGeo.vertices.push(new THREE.Vector3(-200, 0, 0));\n\t\tgridGeo.vertices.push(new THREE.Vector3(200, 0, 0));\n\t\tlet grid = new THREE.Line(gridGeo, gridMaterial);\n\t\tgrid.position.z = z;\n\t\treturn grid;\n\t}\n\n\tdrawHorizontalGridLines() {\n\t\tlet gridLines = [];\n\n\t\tfor (let i = -200; i <= 200; i += 10) {\n\t\t\tlet line = this.createHorizontalGridLine(i);\n\t\t\tgridLines.push(line);\n\t\t\tthis.scene.add(line);\n\t\t}\n\n\t\treturn gridLines;\n\t}\n\n\tcreateVerticalGridLine(x) {\n\t\tlet gridMaterial = new THREE.LineBasicMaterial({\n\t\t\tcolor: 0xff00da\n\t\t});\n\t\tlet gridGeo = new THREE.Geometry();\n\t\tgridGeo.vertices.push(new THREE.Vector3(0, 0, -200));\n\t\tgridGeo.vertices.push(new THREE.Vector3(0, 0, 200));\n\t\tlet grid = new THREE.Line(gridGeo, gridMaterial);\n\t\tgrid.position.x = x;\n\t\treturn grid;\n\t}\n\n\tdrawVerticalGridLines() {\n\t\tfor (let i = -200; i <= 200; i += 10) {\n\t\t\tthis.scene.add(this.createVerticalGridLine(i));\n\t\t}\n\t}\n\n\tdrawGrid() {\n\t\tthis.drawVerticalGridLines();\n\t\treturn this.drawHorizontalGridLines();\n\t}\n\n\tcreateWall(x, z) {\n\t\tlet wallGeo = new THREE.BoxGeometry(1, 100, 30);\n\t\tlet wallMat = new THREE.MeshPhongMaterial({\n\t\t\tcolor: 0xfffc00,\n\t\t\tspecular: 0x666666,\n\t\t\temissive: 0x000000,\n\t\t\tshininess: 10,\n\t\t\topacity: 0.7,\n\t\t\ttransparent: true\n\t\t});\n\t\tlet wall = new THREE.Mesh(wallGeo, wallMat);\n\t\twall.position.x = x;\n\t\twall.position.y = 50;\n\t\twall.position.z = z;\n\t\treturn wall;\n\t}\n\n\tdrawLeftWall() {\n\t\tlet wall = this.createWall(-100, 180);\n\t\tthis.walls.push(wall);\n\t\tthis.scene.add(wall);\n\t}\n\n\tdrawRightWall() {\n\t\tlet wall = this.createWall(100, 180);\n\t\tthis.walls.push(wall);\n\t\tthis.scene.add(wall);\n\t}\n\n\tdrawDome() {\n\t\tlet group = new THREE.Group();\n\t\tlet sphereGeo = new THREE.SphereGeometry(50, 32, 32);\n\t\tlet sphereMat = new THREE.MeshBasicMaterial({\n\t\t\tcolor: 0xffffff\n\t\t});\n\t\tthis.sphere = new THREE.Mesh(sphereGeo, sphereMat);\n\t\tlet cubeGeo = new THREE.BoxGeometry(100, 100, 100);\n\t\tlet cubeMat = new THREE.MeshBasicMaterial({\n\t\t\tcolor: 0\n\t\t});\n\t\tthis.cube = new THREE.Mesh(cubeGeo, cubeMat);\n\t\tthis.cube.position.y -= 50.1;\n\t\tgroup.add(this.sphere);\n\t\tgroup.add(this.cube);\n\t\tgroup.position.z = -1000;\n\t\tthis.scene.add(group);\n\t\treturn group;\n\t}\n\n\tanimate() {\n\t\tif (!this.active) return;\n\t\trequestAnimationFrame(this.boundAnimate);\n\t\tTWEEN.update();\n\t\tlet tf = -1 * this.getAttribute("speed");\n\n\t\tfor (let i = this.lines.length - 1; i >= 0; i--) {\n\t\t\tthis.lines[i].position.z += tf;\n\n\t\t\tif (this.lines[i].position.z < -200) {\n\t\t\t\tthis.scene.remove(this.lines[i]);\n\t\t\t\tthis.lines.splice(i, 1);\n\t\t\t}\n\t\t}\n\n\t\tfor (let i = this.grids.length - 1; i >= 0; i--) {\n\t\t\tthis.grids[i].position.z += tf;\n\n\t\t\tif (this.grids[i].position.z < -200) {\n\t\t\t\tthis.grids[i].position.z = 200;\n\t\t\t}\n\t\t}\n\n\t\tfor (let i = this.walls.length - 1; i >= 0; i--) {\n\t\t\tthis.walls[i].position.z += tf * 2;\n\n\t\t\tif (this.walls[i].position.z < -1000) {\n\t\t\t\tthis.scene.remove(this.walls[i]);\n\t\t\t\tthis.lines.splice(i, 1);\n\t\t\t}\n\t\t}\n\n\t\tthis.camera.lookAt(this.cameraTarget.position);\n\t\tthis.dome.position.z += tf;\n\n\t\tif (this.dome.position.z <= -1000) {\n\t\t\tthis.dome.position.z = 150;\n\t\t}\n\n\t\tthis.renderer.render(this.scene, this.camera);\n\t}\n\n\tsetBg(invert) {\n\t\tif (!this.scene) return\n\n\t\tif (invert) {\n\t\t\tthis.scene.background = new THREE.Color(this.color2);\n\t\t\tthis.cube.material.color = new THREE.Color(this.color2);\n\t\t\tthis.sphere.material.color = new THREE.Color(this.color1);\n\t\t} else {\n\t\t\tthis.scene.background = new THREE.Color(this.color1);\n\t\t\tthis.cube.material.color = new THREE.Color(this.color1);\n\t\t\tthis.sphere.material.color = new THREE.Color(this.color2);\n\t\t}\n\n\t\tthis.isColor1 = !this.isColor1;\n\t}\n\n\tonScreenUpdated() {\n\t\tthis.onSelectorUpdated();\n\t}\n\n\tonResize() {\n\t\tif (!this.camera || !this.renderer) return;\n\t\tthis.camera.aspect = window.innerWidth / window.innerHeight;\n\t\tthis.camera.updateProjectionMatrix();\n\t\tthis.renderer.setSize(window.innerWidth, window.innerHeight);\n\t}\n\n\tonDestroy() {\n\t\tthis.active = false;\n\t\tclearInterval(this.intervalId);\n\t\twindow.removeEventListener("resize", this.boundResize);\n\n\t\tif (this.renderer && this.renderer.domElement && this.renderer.domElement.parentElement) {\n\t\t\tthis.renderer.domElement.parentElement.removeChild(this.renderer.domElement);\n\t\t}\n\t}\n\n}',
				templateHTML: '<div id="container"></div>',
				templateCSS:
					'\n#container {\n\tmax-width: 13em !important;\n\tmax-height: 13em !important;\n}\ncanvas {\n\tmax-width: 13em !important;\n\tmax-height: 13em !important;\n}\n',
				transforms: {}
			}
		},
		chainPool: {
			nodeIdToChainId: { n36: 'c5', n23: 'c7' },
			nextChainId: 10,
			pool: {
				c5: { id: 'c5', values: [] },
				c7: { id: 'c7', values: [{ id: 'n23', v: 'hue-rotate(0deg)' }] }
			}
		}
	}
}
