const e=document.querySelector("#controls input"),t=document.querySelector("[data-create]"),n=document.querySelector("[data-destroy]"),o=document.querySelector("#boxes");function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>function(e){let t=30;const n=[];for(let o=0;o<e;o+=1){const e=document.createElement("div");e.style.width=`${t}px`,e.style.height=`${t}px`,e.style.backgroundColor=r(),n.push(e),t+=10}o.append(...n)}(e.value))),n.addEventListener("click",(function(){o.innerHTML=""}));
//# sourceMappingURL=task-10.05771775.js.map