export default {
	"editingNodeId": null,
	"editingPage": false,
	"selectedConnection": null,
	"connecting": null,
	"pageHTML":
		"<body>\n    <div>\n        <span id=\"x\"> x </span>&times;<span id=\"y\"> y </span>\n    </div>\n</body>",
	"pageCSS":
		"body {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 14pt;\n\tfont-family: Helvetica, sans-serif;\n\tfont-weight: bold;\n\tcolor: white;\n\tbackground: black;\n\tfont-size: 18vw;\n}\n\ndiv {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}",
	"nodeUIMap": {
		"n0": { "pos": [480, 202] },
		"n1": { "pos": [52, 42] },
		"n2": { "pos": [54, 53] },
		"n3": { "pos": [375, 39] },
		"n4": { "pos": [378, 104] },
		"n5": { "pos": [84, 37] }
	},
	"fullscreen": false,
	"nodeMap": {
		"nodeMap": { "n5": { "n3": 1, "n4": 1 } },
		"portMap": { "n5.x": { "n3.x": true }, "n5.y": { "n4.y": true } },
		"inputsMap": { "n3.x": { "n5.x": true }, "n4.y": { "n5.y": true } },
		"nextId": 6,
		"nodeOrder": ["n4", "n5", "n3"],
		"values": { "n3": { "x": "1130" }, "n4": { "y": "20" }, "n5": { "x": 1130, "y": 20 } },
		"byId": {
			"n3": {
				"id": "n3",
				"rev": 3,
				"text":
					"class X extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'x',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 'x',\n\t\t\t\trestrict: String\n\t\t\t}\n\t\t]\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t  this.screen.getElementById('x').innerText = newValue\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n4": {
				"id": "n4",
				"rev": 3,
				"text":
					"class Y extends N {\n\tstatic get inputs() {\n\t  return [\n\t\t\t{\n\t\t\t\tname: 'y',\n\t\t\t\tobserve: true,\n\t\t\t\tdefaultValue: 'y',\n\t\t\t\trestrict: String\n\t\t\t}\n\t\t]\n\t}\n\n\tonAttrChanged(name, oldValue, newValue) {\n\t  this.screen.getElementById('y').innerText = newValue\n\t}\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			},
			"n5": {
				"id": "n5",
				"rev": 0,
				"text":
					"class Mouse extends N {\n  static get type() {\n    return N.HARDWARE;\n  }\n\n  static get inputs() {\n    return [{\n      name: \"x\",\n      observe: true,\n      defaultValue: 0,\n      restrict: Number,\n      visible: false\n    }, {\n      name: \"y\",\n      observe: true,\n      defaultValue: 0,\n      restrict: Number,\n      visible: false\n    }];\n  }\n\n  static get outputs() {\n    return [\"x\", \"y\", \"x%\", \"y%\", \"dx\", \"dy\"];\n  }\n\n  onMouseMove(event) {\n    this.setAttribute(\"x\", event.clientX);\n    this.setAttribute(\"y\", event.clientY);\n  }\n\n  onAttrChanged(name, oldValue, newValue) {\n    switch (name) {\n      case \"x\":\n        this.send(\"x\", newValue);\n        this.send(\"x%\", newValue / window.innerWidth);\n        this.send(\"dx\", parseInt(newValue, 10) - (parseInt(oldValue, 10) || 0));\n        break;\n\n      case \"y\":\n        this.send(\"y\", newValue);\n        this.send(\"y%\", newValue / window.innerHeight);\n        this.send(\"dy\", parseInt(newValue, 10) - (parseInt(oldValue, 10) || 0));\n        break;\n    }\n  }\n\n  connectedCallback() {\n    this.boundOnMouseMove = this.onMouseMove.bind(this);\n    document.addEventListener(\"mousemove\", this.boundOnMouseMove);\n  }\n\n  disconnectedCallback() {\n    document.removeEventListener(\"mousemove\", this.boundOnMouseMove);\n  }\n\n}",
				"templateHTML": null,
				"templateCSS": null,
				"transforms": {}
			}
		},
		"chainPool": { "nodeIdToChainId": {}, "nextChainId": 0, "pool": {} }
	}
}
