const assignGlobal = name => (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];

if (!self.__WB_pmw) { 
  self.__WB_pmw = obj => { 
    this.__WB_source = obj; 
    return this; 
  } 
}

const window = assignGlobal("window");
const self = assignGlobal("self");
const document = assignGlobal("document");
const location = assignGlobal("location");
const top = assignGlobal("top");
const parent = assignGlobal("parent");
const frames = assignGlobal("frames");
const opener = assignGlobal("opener");

const metas = document.getElementsByTagName('meta');
const isiPhone = navigator.userAgent.match(/iPhone/i);

if (isiPhone) {
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}

function gestureStart() {
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}