// Tema (persistencia localStorage)
(function(){
  const root = document.documentElement;
  const key = "ms-theme";
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem(key) || "dark";
  root.setAttribute("data-theme", saved);
  btn && btn.addEventListener("click", ()=>{
    const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", cur);
    localStorage.setItem(key, cur);
  });
})();

// Tabs
(function(){
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");
  if(!tabs.length) return;
  tabs.forEach(t=>{
    t.addEventListener("click", ()=>{
      const id = t.dataset.tab;
      tabs.forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      panels.forEach(p=>p.classList.toggle("active", p.id===id));
    });
  });
})();

// Conteo KPIs + sparkline
(function(){
  // Count-up
  document.querySelectorAll("[data-kpi]").forEach(card=>{
    const numEl = card.querySelector(".kpi-num");
    const target = parseInt(card.dataset.target || "0", 10);
    if(!numEl) return;
    let cur = 0;
    const duration = 900; // ms
    const start = performance.now();
    function easeOutBack(t){ const c1=1.70158; const c3=c1+1; return 1 + c3*Math.pow(t-1,3) + c1*Math.pow(t-1,2); }
    function step(now){
      const p = Math.min(1,(now-start)/duration);
      const eased = easeOutBack(p);
      cur = Math.round(target*eased);
      numEl.textContent = cur.toLocaleString("nl-NL");
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  // Sparks (vanilla)
  function drawSpark(canvas){
    const ctx = canvas.getContext("2d");
    const w = canvas.width = canvas.clientWidth * devicePixelRatio;
    const h = canvas.height = 60 * devicePixelRatio;
    const raw = (canvas.dataset.points || "1,2,3,2,4,3,5").split(",").map(x=>parseFloat(x));
    const max = Math.max(...raw);
    const min = Math.min(...raw);
    const pad = 6 * devicePixelRatio;
    ctx.clearRect(0,0,w,h);
    ctx.lineWidth = 2 * devicePixelRatio;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || "#6ee7b7";
    ctx.beginPath();
    raw.forEach((v,i)=>{
      const x = pad + i * ((w - pad*2) / (raw.length-1));
      const y = h - pad - ((v - min)/(max - min || 1)) * (h - pad*2);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();
  }
  document.querySelectorAll("canvas.spark").forEach(drawSpark);
  window.addEventListener("resize", ()=>document.querySelectorAll("canvas.spark").forEach(drawSpark));
})();

// Animaciones de entrada (stagger/rise)
(function(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const type = el.dataset.animate || "rise";
        el.classList.add("in", type);
        obs.unobserve(el);
        // hijos (stagger)
        if(type==="stagger"){
          Array.from(el.children).forEach((child, idx)=>{
            child.style.setProperty("--d", `${idx*60}ms`);
            child.classList.add("stagger-item");
          });
        }
      }
    });
  }, {threshold:.1});
  document.querySelectorAll("[data-animate]").forEach(el=>obs.observe(el));
})();

// Count-up hero
(function(){
  const el = document.querySelector(".count-up");
  if(!el) return;
  const target = parseInt(el.dataset.target || "0", 10);
  let cur = 0;
  const duration = 1200;
  const start = performance.now();
  function easeOutExpo(t){return t===1?1:1-Math.pow(2,-10*t);}
  function step(now){
    const p = Math.min(1,(now-start)/duration);
    cur = Math.round(target*easeOutExpo(p));
    el.textContent = cur.toLocaleString("nl-NL");
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();
