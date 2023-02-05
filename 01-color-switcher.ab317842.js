//! Завдання 1 - перемикач кольорів
const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.toggleAttribute("disabled")})),e.addEventListener("click",(()=>{clearInterval(r),alert("Демонстрція кольорів зупинена!"),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.ab317842.js.map
