document.write(
  "<script type='text/javascript' src='src/js/language.js'></script>"
);

function iEsc() {
  return false;
}
function iRec() {
  return true;
}
function DisableKeys() {
  if (event.ctrlKey || event.shiftKey || event.altKey) {
    window.event.returnValue = false;
    iEsc();
  }
}
document.ondragstart = iEsc;
document.onkeydown = DisableKeys;
document.oncontextmenu = iEsc;
if (typeof document.onselectstart != "undefined") document.onselectstart = iEsc;
else {
  document.onmousedown = iEsc;
  document.onmouseup = iRec;
}
function DisableRightClick(qsyzDOTnet) {
  if (window.Event) {
    if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3) iEsc();
  } else if (event.button == 2 || event.button == 3) {
    event.cancelBubble = true;
    event.returnValue = false;
    iEsc();
  }
}

function onScroll() {
  window.scrollY === 0
    ? (document.getElementsByClassName("header")[0].style.opacity = 0)
    : (document.getElementsByClassName("header")[0].style.opacity = 0.8);
  window.innerHeight + window.scrollY + 20 >= document.body.offsetHeight
    ? (document.getElementsByClassName("iconGodown")[0].style.opacity = 0)
    : (document.getElementsByClassName("iconGodown")[0].style.opacity = 0.5);
}

function showBOx(box) {
  const display = document.getElementsByClassName(box)[0];
  display.style.display === "none"
    ? (display.style.display = "block")
    : (display.style.display = "none");
}
