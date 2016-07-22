var keyCodes = module.exports = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  25: "Lang2",
  27: "Escape",
  32: "Space",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: "Semicolon",
  61: "Equal",
  91: "MetaLeft",
  92: "MetaRight",
  96: "Numpad0",
  97: "Numpad1",
  98: "Numpad2",
  99: "Numpad3",
  100: "Numpad4",
  101: "Numpad5",
  102: "Numpad6",
  103: "Numpad7",
  104: "Numpad8",
  105: "Numpad9",
  106: "NumpadMultiply",
  107: "NumpadAdd",
  108: "NumpadComma",
  109: "NumpadSubtract",
  110: "NumpadDecimal",
  111: "NumpadDivide",
  144: "NumLock",
  145: "ScrollLock",
  160: "ShiftLeft",
  161: "ShiftRight",
  162: "ControlLeft",
  163: "ControlRight",
  164: "AltLeft",
  165: "AltRight",
  173: "Minus",
  186: "Semicolon",
  187: "Equal",
  188: "Comma",
  189: "Minus",
  190: "Period",
  191: "Slash",
  192: "Backquote",
  219: "BracketLeft",
  220: "Backslash",
  221: "BracketRight",
  222: "Quote",
  229: "KeyQ"
}

for (var i = 48; i <= 57; i++) keyCodes[i] = "Digit" + String.fromCharCode(i)
for (var i = 1; i <= 24; i++) keyCodes[i + 111] = "F" + i
for (var i = 65; i <= 90; i++) keyCodes[i] = "Key" + String.fromCharCode(i)