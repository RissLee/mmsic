// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.a = 22343;

global.electron = require('electron');

Object.defineProperty(global, electron, require('electron'));
