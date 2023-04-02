var myNamespace={init:function(){var e=document.querySelectorAll("[data-homework-link]");e.forEach((function(n){n.addEventListener("click",(function(t){t.preventDefault(),e.forEach((function(e){e!==n&&setTimeout((function(){e.style.display="none"}),500)})),setTimeout((function(){window.location.href=n.href}),1500)}))}))}};myNamespace.init();
//# sourceMappingURL=index.d569bd84.js.map
