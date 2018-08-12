export default {
	"editingNodeId": null,
	"editingPage": false,
	"selectedConnection": null,
	"connecting": null,
	"pageHTML":
		"<body>\n    <div id=\"circle-1\" class=\"circle\"></div>\n    <div id=\"circle-2\" class=\"circle\"></div>\n    <div id=\"circle-3\" class=\"circle\"></div>\n    <div id=\"circle-4\" class=\"circle\"></div>\n</body>",
	"pageCSS":
		"body {\n\tbackground: black;\n\tpadding: 0;\n\tmargin: 0;\n\tcolor: white;\n\ttransition: transform 1s;\n}\n\n.circle {\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\twidth: 400px;\n\theight: 400px;\n\tborder-radius: 400px;\n\tbackground: red;\n\ttransition: transform .2s;\n\topacity:.9;\n\tbackground-blend-mode: multiply;\n\ttransform-origin: center center;\n}\n\n#circle-1 {\n\tbackground: white;\n}\n\n#circle-2 {\n\tbackground: magenta;\n}\n\n#circle-3 {\n\tbackground: cyan;\n}\n\n#circle-4 {\n\tbackground: yellow;\n}",
	"nodeUIMap": {
		"n0": { "pos": [1108, 29] },
		"n1": { "pos": [59, 47], "control": { "value": true } },
		"n2": { "pos": [397, 177], "control": { "selector": true } },
		"n3": { "pos": [404, 252], "control": { "selector": true } },
		"n4": { "pos": [315, 628], "control": { "selector": true } },
		"n5": { "pos": [403, 111] },
		"n6": { "pos": [309, 14] },
		"n7": { "pos": [317, 127] },
		"n8": { "pos": [316, 236] },
		"n9": { "pos": [651, 349] },
		"n10": { "pos": [654, 471] },
		"n11": { "pos": [655, 595] },
		"n12": { "pos": [1138, 280] },
		"n13": { "pos": [138, 387] },
		"n14": { "pos": [137, 506] },
		"n15": { "pos": [138, 621] },
		"n16": { "pos": [1161, 420] },
		"n17": { "pos": [1027, 64] },
		"n18": { "pos": [1027, 176] },
		"n19": { "pos": [1025, 288] },
		"n20": { "pos": [1125, 153] },
		"n21": { "pos": [-86, 221] },
		"n22": { "pos": [810, 456] },
		"n23": { "pos": [461, 629] },
		"n24": { "pos": [778, 71] },
		"n25": { "pos": [787, 195] },
		"n26": { "pos": [780, 319] },
		"n27": { "pos": [212, 323], "control": { "note-on": true } },
		"n28": { "pos": [364, 268] },
		"n29": { "pos": [1145, 173] }
	},
	"fullscreen": false,
	"nodeMap": {
		"nodeMap": {
			"n5": { "n22": 1, "n24": 1, "n25": 1, "n26": 1 },
			"n24": { "n0": 3 },
			"n26": { "n12": 3 },
			"n22": { "n16": 3 },
			"n25": { "n20": 3 }
		},
		"portMap": {
			"n5.trigger": { "n22.in": true, "n24.in": true, "n25.in": true, "n26.in": true },
			"n24.out": { "n0.x": true, "n0.y": true, "n0.scale": true },
			"n26.out": { "n12.x": true, "n12.y": true, "n12.scale": true },
			"n22.out": { "n16.x": true, "n16.y": true, "n16.scale": true },
			"n25.out": { "n20.x": true, "n20.y": true, "n20.scale": true }
		},
		"inputsMap": {
			"n22.in": { "n5.trigger": true },
			"n24.in": { "n5.trigger": true },
			"n25.in": { "n5.trigger": true },
			"n26.in": { "n5.trigger": true },
			"n0.x": { "n24.out": true },
			"n0.y": { "n24.out": true },
			"n0.scale": { "n24.out": true },
			"n12.x": { "n26.out": true },
			"n12.y": { "n26.out": true },
			"n12.scale": { "n26.out": true },
			"n16.x": { "n22.out": true },
			"n16.y": { "n22.out": true },
			"n16.scale": { "n22.out": true },
			"n20.x": { "n25.out": true },
			"n20.y": { "n25.out": true },
			"n20.scale": { "n25.out": true }
		},
		"nextId": 30,
		"nodeOrder": ["n22", "n24", "n25", "n26", "n0", "n20", "n12", "n16", "n27", "n5"],
		"values": {
			"n22": { "in": 1 },
			"n24": { "in": 1 },
			"n25": { "in": 1 },
			"n26": { "in": 1 },
			"n27": {
				"device-id": "-486371328",
				"channel": 0,
				"message": false,
				"realtime": false,
				"beat": "quarter note",
				"note-on": true,
				"note-off": false,
				"cc": false,
				"zero-as-off": true
			},
			"n0": {
				"selector": "#circle-1",
				"x": 59.839255151470326,
				"y": 17.967981013778687,
				"scale": 0.01
			},
			"n20": {
				"selector": "#circle-4",
				"x": 43.012360926514305,
				"y": 29.952551856038845,
				"scale": 1.7560199714474316
			},
			"n12": {
				"selector": "#circle-2",
				"x": 32.665003627785374,
				"y": 28.993876000047457,
				"scale": 2.8928825858851006
			},
			"n16": {
				"selector": "#circle-3",
				"x": 21.374833679922723,
				"y": 61.97279213994295,
				"scale": 2.308573158881866
			}
		},
		"byId": {
			"n5": {
				"id": "n5",
				"rev": 0,
				"text":
					"class Button extends N {\n  static get type() {\n    return N.HARDWARE;\n  }\n\n  static get outputs() {\n    return [\"trigger\"];\n  }\n\n  onClick() {\n    this.send(\"trigger\", true);\n  }\n\n  onReady() {\n    this.boundOnClick = this.onClick.bind(this);\n    this.root.getElementById(\"button\").addEventListener(\"click\", this.boundOnClick);\n  }\n\n  onDestroy() {\n    this.root.getElementById(\"button\").removeEventListener(\"click\", this.boundOnClick);\n  }\n\n}",
				"templateHTML": "<button id=\"button\">Click</button>",
				"templateCSS":
					"button {\n\tfont-size: 13pt;\n\twidth: 100%;\n\tborder-radius: 4px;\n\tborder: none;\n\tcursor: pointer;\n\topacity: 0.8;\n}\n\nbutton:hover {\n\topacity: 1;\n}",
				"transforms": {}
			},
			"n22": {
				"id": "n22",
				"rev": 2,
				"text":
					"class Passthru extends N {\n  static get inputs() {\n    return [{\n      name: \"in\",\n      observe: true,\n      restrict: Number\n    }];\n  }\n\n  static get outputs() {\n    return [\"out\"];\n  }\n\n  onAttrChanged(name, oldValue, newValue) {\n    switch (name) {\n      case \"in\":\n        this.send(\"out\", newValue);\n        break;\n    }\n  }\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n24": {
				"id": "n24",
				"rev": 0,
				"text":
					"class Passthru extends N {\n  static get inputs() {\n    return [{\n      name: \"in\",\n      observe: true,\n      restrict: Number\n    }];\n  }\n\n  static get outputs() {\n    return [\"out\"];\n  }\n\n  onAttrChanged(name, oldValue, newValue) {\n    switch (name) {\n      case \"in\":\n        this.send(\"out\", newValue);\n        break;\n    }\n  }\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n25": {
				"id": "n25",
				"rev": 0,
				"text":
					"class Passthru extends N {\n  static get inputs() {\n    return [{\n      name: \"in\",\n      observe: true,\n      restrict: Number\n    }];\n  }\n\n  static get outputs() {\n    return [\"out\"];\n  }\n\n  onAttrChanged(name, oldValue, newValue) {\n    switch (name) {\n      case \"in\":\n        this.send(\"out\", newValue);\n        break;\n    }\n  }\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n26": {
				"id": "n26",
				"rev": 0,
				"text":
					"class Passthru extends N {\n  static get inputs() {\n    return [{\n      name: \"in\",\n      observe: true,\n      restrict: Number\n    }];\n  }\n\n  static get outputs() {\n    return [\"out\"];\n  }\n\n  onAttrChanged(name, oldValue, newValue) {\n    switch (name) {\n      case \"in\":\n        this.send(\"out\", newValue);\n        break;\n    }\n  }\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n27": {
				"id": "n27",
				"rev": 0,
				"text":
					"class MIDIDevice extends N {\n  static get type() {\n    return N.HARDWARE;\n  }\n\n  static get inputs() {\n    return [{\n      name: \"device-id\",\n      observe: true,\n      defaultValue: \"\",\n      restrict: String,\n      visible: false\n    }, {\n      name: \"channel\",\n      observe: false,\n      defaultValue: 0,\n      restrict: N.int(0, 16),\n      control: N.range()\n    }, {\n      name: \"message\",\n      observe: false,\n      defaultValue: false,\n      restrict: Boolean\n    }, {\n      name: \"realtime\",\n      observe: false,\n      defaultValue: false,\n      restrict: Boolean\n    }, {\n      name: \"beat\",\n      observe: false,\n      defaultValue: \"quarter note\",\n      restrict: N.set([\"24ppqn\", \"quarter note\", \"bar\", \"4 bars\"])\n    }, {\n      name: \"note-on\",\n      observe: false,\n      defaultValue: false,\n      restrict: Boolean\n    }, {\n      name: \"note-off\",\n      observe: false,\n      defaultValue: false,\n      restrict: Boolean\n    }, {\n      name: \"cc\",\n      observe: false,\n      defaultValue: false,\n      restrict: Boolean\n    }, {\n      name: \"zero-as-off\",\n      observe: false,\n      defaultValue: true,\n      restrict: Boolean\n    }];\n  }\n\n  static get outputs() {\n    return [\"message\", \"start\", \"stop\", \"continue\", \"clock\", \"note-on\", \"note-off\", \"cc\", \"bpm\"];\n  }\n\n  constructor() {\n    super();\n  }\n\n  setInput(id) {\n    if (!this.inputs) return;\n    this.removeMIDIListeners();\n\n    if (id !== \"\") {\n      let input = this.inputs.get(id);\n\n      if (input) {\n        input.addEventListener(\"midimessage\", this.boundOnMIDIMessage);\n      }\n    }\n\n    this.root.getElementById(\"select\").value = id;\n  }\n\n  onAttrChanged(name, oldValue, newValue) {\n    this.setInput(newValue);\n  }\n\n  removeMIDIListeners() {\n    if (!this.inputs) return;\n\n    for (let input of this.inputs.values()) {\n      input.removeEventListener(\"midimessage\", this.boundOnMIDIMessage);\n    }\n  }\n\n  onMIDIMessage(event) {\n    let data = Array.from(event.data);\n    let channel = this.getAttribute(\"channel\");\n    let allowMessage = this.getAttribute(\"message\");\n    let allowRealTime = this.getAttribute(\"realtime\");\n    let allowNoteOn = this.getAttribute(\"note-on\");\n    let allowNoteOff = this.getAttribute(\"note-off\");\n    let allowCC = this.getAttribute(\"cc\");\n    let transformNoteOnVelocityZeroAsNoteOff = this.getAttribute(\"zero-as-off\");\n    let sendClockPerBeat = this.getAttribute(\"beat\");\n    if (allowMessage) this.send(\"message\", data); // Clock:\n\n    if (data[0] === 0xfa && allowRealTime) {\n      //start\n      this.sendClock = true;\n      this.clock = 0;\n      return this.send(\"start\", data);\n    }\n\n    if (data[0] === 0xfc && allowRealTime) {\n      //stop\n      this.sendClock = false;\n      this.clock = 0;\n      return this.send(\"stop\", data);\n    }\n\n    if (data[0] === 0xfb && allowRealTime) {\n      //continue\n      return this.send(\"continue\", data);\n    }\n\n    if (data[0] === 0xf8 && allowRealTime && this.sendClock) {\n      if (this.clock % 24 === 0) {\n        let now = Date.now();\n        if (this.lastClock) this.send(\"bpm\", 60000 / (now - this.lastClock));\n        this.lastClock = now;\n      }\n\n      let shouldSendBeat = false;\n\n      switch (sendClockPerBeat) {\n        case \"24ppqn\":\n          shouldSendBeat = true;\n          break;\n\n        case \"quarter note\":\n          shouldSendBeat = this.clock % 24 === 0;\n          break;\n\n        case \"bar\":\n          shouldSendBeat = this.clock % 96 === 0;\n          break;\n\n        case \"4 bars\":\n          shouldSendBeat = this.clock === 0;\n          break;\n      }\n\n      if (shouldSendBeat) this.send(\"clock\", data);\n      this.clock = (this.clock + 1) % 384; //24ppqn * 4 quarter notes * 4 bars\n    } // Channel messages:\n\n\n    if (channel === 0 || channel === (data[0] & 0x0f) + 1) {\n      let type = data[0] >> 4;\n\n      if (type === 0x9 && data[2] === 0 && transformNoteOnVelocityZeroAsNoteOff) {\n        type = 0x8;\n      }\n\n      if (type === 0x9 && allowNoteOn) return this.send(\"note-on\", data);\n      if (type === 0x8 && allowNoteOff) return this.send(\"note-off\", data);\n      if (type === 0xb && allowCC) return this.send(\"cc\", data);\n    }\n  }\n\n  onMIDISuccess(midiAccess) {\n    this.inputs = midiAccess.inputs;\n    let select = this.root.getElementById(\"select\");\n    let option = document.createElement(\"option\");\n    option.innerText = \"Select device...\";\n    option.value = \"\";\n    select.appendChild(option);\n\n    for (let input of this.inputs.values()) {\n      option = document.createElement(\"option\");\n      option.innerText = input.manufacturer + \" \" + input.name;\n      option.value = input.id;\n      select.appendChild(option);\n    }\n\n    select.addEventListener(\"change\", event => {\n      this.setAttribute(\"device-id\", event.target.value);\n    }); // Force listener to listen:\n\n    this.setInput(this.getAttribute(\"device-id\"));\n  }\n\n  onMIDIFailure() {\n    alert(\"Unable to obtain MIDI access!\");\n  }\n\n  onReady() {\n    this.boundOnMIDIMessage = this.onMIDIMessage.bind(this);\n    navigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this));\n  }\n\n  onDestroy() {\n    this.removeMIDIListeners();\n  }\n\n}",
				"templateHTML": "<div>\n\t<select id=\"select\"></select>\n</div>",
				"templateCSS": null,
				"transforms": {}
			},
			"n0": {
				"id": "n0",
				"rev": 18,
				"text":
					"class Circle extends N {\n    static get type() { return N.SCREEN }\n    \n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'x',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'y',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'scale',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 1,\n\t\t\t    restrict: N.float(0.01)\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    let el = this.getEl();\n        if(!el) return;\n        \n        let x = this.getAttribute('x');\n        let y = this.getAttribute('y');\n        let scale = this.getAttribute('scale');\n        \n        el.style.transform = `translate(${x}vw, ${y}vh) scale(${scale})`\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {
					"x": "100 * Math.random()",
					"y": "80 * Math.random()",
					"scale": "3 * Math.random()"
				}
			},
			"n20": {
				"id": "n20",
				"rev": 2,
				"text":
					"class Circle extends N {\n    static get type() { return N.SCREEN }\n    \n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'x',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'y',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'scale',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 1,\n\t\t\t    restrict: N.float(0.01)\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    let el = this.getEl();\n        if(!el) return;\n        \n        let x = this.getAttribute('x');\n        let y = this.getAttribute('y');\n        let scale = this.getAttribute('scale');\n        \n        el.style.transform = `translate(${x}vw, ${y}vh) scale(${scale})`\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {
					"x": "100 * Math.random()",
					"y": "100 * Math.random()",
					"scale": "3 * Math.random()"
				}
			},
			"n12": {
				"id": "n12",
				"rev": 2,
				"text":
					"class Circle extends N {\n    static get type() { return N.SCREEN }\n    \n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'x',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'y',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'scale',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 1,\n\t\t\t    restrict: N.float(0.01)\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    let el = this.getEl();\n        if(!el) return;\n        \n        let x = this.getAttribute('x');\n        let y = this.getAttribute('y');\n        let scale = this.getAttribute('scale');\n        \n        el.style.transform = `translate(${x}vw, ${y}vh) scale(${scale})`\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {
					"x": "100 * Math.random()",
					"y": "100 * Math.random()",
					"scale": "3 * Math.random()"
				}
			},
			"n16": {
				"id": "n16",
				"rev": 2,
				"text":
					"class Circle extends N {\n    static get type() { return N.SCREEN }\n    \n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'selector',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: '',\n\t\t\t\trestrict: String,\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'x',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'y',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 0,\n\t\t\t    restrict: Number\n\t\t\t},\n\t\t\t{\n\t\t\t    name: 'scale',\n\t\t\t    observe: true,\n\t\t\t    defaultValue: 1,\n\t\t\t    restrict: N.float(0.01)\n\t\t\t}\n\t\t]\n\t}\n\t\n\tgetEl() {\n\t    try {\n\t        let el = this.screen.querySelector(this.getAttribute('selector'))\n\t        if(el) return el;\n\t    } catch(e) {\n\t        return null;\n\t    }\n\t}\n\n\t// oldValue and newValue are always strings as these are\n\t// attributes on the component. Use this.getAttribute\n\t// to get the typed value\n\tonAttrChanged(name, oldValue, newValue) {\n\t    let el = this.getEl();\n        if(!el) return;\n        \n        let x = this.getAttribute('x');\n        let y = this.getAttribute('y');\n        let scale = this.getAttribute('scale');\n        \n        el.style.transform = `translate(${x}vw, ${y}vh) scale(${scale})`\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {
					"x": "100 * Math.random()",
					"y": "100 * Math.random()",
					"scale": "3 * Math.random()"
				}
			}
		},
		"chainPool": { "nodeIdToChainId": {}, "nextChainId": 0, "pool": {} }
	}
}
