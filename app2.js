// ===== Błędy =====
function markErr(id,bad){const e=LS.get("errs",{});if(bad)e[id]=Date.now();else delete e[id];LS.set("errs",e)}
const OPTS=q=>q.cr.reduce((a,c)=>a+c[0],0);
// ===== Kanwa (Apple Pencil) =====
const COLORS=["#111827","#1d4ed8","#dc2626","#059669","#9333ea"];
function makeCanvas(host,key,h=520){
 const st=LS.get("cvset",{penOnly:false});let strokes=LS.get(key,[]),redo=[],tool="pen",color=COLORS[0],size=3;
 host.innerHTML=`<div class="cvbar row"><button data-t="pen" class="on">✏️ Pióro</button><button data-t="er">🧽 Gumka</button>
 ${COLORS.map(c=>`<button data-c="${c}" class="sw" style="background:${c};width:30px;height:30px;padding:0"></button>`).join("")}
 <select class="sz"><option value="2">cienko</option><option value="3" selected>średnio</option><option value="6">grubo</option></select>
 <button data-a="undo">↶ Cofnij</button><button data-a="redo">↷</button><button data-a="clr">🗑️ Wyczyść</button>
 <label style="display:flex;gap:4px;align-items:center;margin:0"><input type="checkbox" class="po" style="width:auto" ${st.penOnly?"checked":""}> tylko rysik (Apple Pencil)</label></div>
 <canvas class="cv" style="width:100%;height:${h}px;background:#fff;border-radius:10px;touch-action:none;display:block"></canvas>`;
 const cv=host.querySelector("canvas"),ctx=cv.getContext("2d");
 const W=()=>cv.clientWidth;
 function fit(){const r=window.devicePixelRatio||1;cv.width=cv.clientWidth*r;cv.height=h*r;ctx.setTransform(r,0,0,r,0,0);draw()}
 function seg(s,a,b){const w=W();ctx.globalCompositeOperation=s.er?"destination-out":"source-over";ctx.strokeStyle=s.c;ctx.lineCap=ctx.lineJoin="round";
  ctx.lineWidth=s.er?s.w*6:s.w*(0.35+1.3*(b[2]||0.5));ctx.beginPath();ctx.moveTo(a[0]*w,a[1]*w);ctx.lineTo(b[0]*w,b[1]*w);ctx.stroke()}
 function draw(){ctx.clearRect(0,0,cv.width,cv.height);for(const s of strokes){for(let i=1;i<s.p.length;i++)seg(s,s.p[i-1],s.p[i]);if(s.p.length===1)seg(s,s.p[0],[s.p[0][0]+0.0005,s.p[0][1],s.p[0][2]])}ctx.globalCompositeOperation="source-over"}
 const save=()=>{try{LS.set(key,strokes)}catch(e){alert("Brak miejsca w pamięci przeglądarki – wyczyść część rysunków.")}};
 let cur=null;
 const pt=e=>{const r=cv.getBoundingClientRect(),w=W();return[+((e.clientX-r.left)/w).toFixed(4),+((e.clientY-r.top)/w).toFixed(4),e.pointerType==="pen"?+(e.pressure||0.5).toFixed(2):0.5]};
 cv.addEventListener("pointerdown",e=>{if(host.querySelector(".po").checked&&e.pointerType!=="pen")return;e.preventDefault();try{cv.setPointerCapture(e.pointerId)}catch(_){}cur={c:color,w:size,er:tool==="er",p:[pt(e)]};strokes.push(cur);redo=[];draw()});
 cv.addEventListener("pointermove",e=>{if(!cur)return;e.preventDefault();let evs=e.getCoalescedEvents?e.getCoalescedEvents():[];if(!evs.length)evs=[e];for(const ev of evs){const p=pt(ev);seg(cur,cur.p[cur.p.length-1],p);cur.p.push(p)}ctx.globalCompositeOperation="source-over"});
 const end=()=>{if(cur){cur=null;save()}};cv.addEventListener("pointerup",end);cv.addEventListener("pointercancel",end);cv.addEventListener("pointerleave",end);
 host.querySelector(".cvbar").onclick=e=>{const b=e.target.closest("button");if(!b)return;
  if(b.dataset.t){tool=b.dataset.t;host.querySelectorAll("[data-t]").forEach(x=>x.classList.toggle("on",x===b))}
  if(b.dataset.c){color=b.dataset.c;tool="pen";host.querySelectorAll("[data-t]").forEach(x=>x.classList.toggle("on",x.dataset.t==="pen"))}
  if(b.dataset.a==="undo"&&strokes.length){redo.push(strokes.pop());draw();save()}
  if(b.dataset.a==="redo"&&redo.length){strokes.push(redo.pop());draw();save()}
  if(b.dataset.a==="clr"&&strokes.length&&confirm("Wyczyścić całą kartkę?")){strokes=[];redo=[];draw();save()}};
 host.querySelector(".sz").onchange=e=>size=+e.target.value;
 host.querySelector(".po").onchange=e=>LS.set("cvset",{penOnly:e.target.checked});
 new ResizeObserver(fit).observe(cv);fit();
 return{png(){const t=document.createElement("canvas");t.width=cv.width;t.height=cv.height;const c=t.getContext("2d");c.fillStyle="#fff";c.fillRect(0,0,t.width,t.height);c.drawImage(cv,0,0);return t.toDataURL("image/png")},empty:()=>!strokes.length}}
// ===== Ocena AI z obrazu (Gemini multimodal) =====
async function gradeImage(q,png){const cfg=LS.get("ai",{});if(!cfg.key)throw"Brak klucza API – dodaj darmowy klucz Gemini w zakładce 🤖 Korepetytor AI → Ustawienia.";
 if(cfg.prov!=="gemini")throw"Ocena zdjęcia odręcznego wymaga dostawcy Google Gemini (multimodalny). Zmień dostawcę w ustawieniach.";
 const max=OPTS(q),model=cfg.model||"gemini-2.5-flash";
 const prompt=`Jesteś egzaminatorem CKE oceniającym maturę rozszerzoną z chemii. Na obrazie jest odręczne rozwiązanie uczennicy (Mai). Oceń je ŚCIŚLE według kryteriów.\nZadanie: ${q.q}\nRozwiązanie modelowe: ${q.sol}\nKryteria (łącznie ${max} pkt):\n${q.cr.map((c,i)=>`K${i+1} (${c[0]} pkt): ${c[1]}`).join("\n")}\nOdpowiedz po polsku w formacie:\nPunkty: X/${max}\nK1: przyznano/nie przyznano – uzasadnienie\n... (dla każdego kryterium)\nCo poprawić: ...\nJeśli pismo jest nieczytelne, napisz to i oceń tylko czytelne fragmenty. Zwracaj się do Mai w formach żeńskich.`;
 const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":cfg.key},
  body:JSON.stringify({contents:[{role:"user",parts:[{text:prompt},{inline_data:{mime_type:"image/png",data:png.split(",")[1]}}]}]})});
 const j=await r.json();if(!r.ok)throw(j.error?.message||r.status);return j.candidates?.[0]?.content?.parts?.map(p=>p.text).join("")||"(brak odpowiedzi)"}
// ===== Widok zadania otwartego =====
function openTask(host,q,id,{num,canvasH=520,onScore,hideCheck}={}){
 const max=OPTS(q),saved=LS.get("og",{})[id];
 host.innerHTML=`<div class="row" style="justify-content:space-between"><span class="muted">${num?num+" · ":""}${TOPICS[q.t]}</span><b>${max} pkt</b></div><h3 style="margin:.4em 0">${q.q}</h3>
 <div class="cvh"></div>${hideCheck?"":`<p><button class="pri chk">Sprawdź – pokaż rozwiązanie i kryteria</button></p>`}<div class="res"></div>`;
 const cvs=makeCanvas(host.querySelector(".cvh"),"cv_"+id,canvasH);
 const show=()=>{const g=LS.get("og",{})[id]||{c:q.cr.map(()=>false)};
  host.querySelector(".res").innerHTML=`<div class="fb"><b>Rozwiązanie modelowe:</b><p>${q.sol}</p><b>Kryteria oceniania (CKE) – zaznacz spełnione:</b>
  ${q.cr.map((c,i)=>`<label style="display:flex;gap:8px;align-items:flex-start;margin:6px 0"><input type="checkbox" data-i="${i}" style="width:auto;margin-top:4px" ${g.c[i]?"checked":""}><span><b>${c[0]} pkt</b> – ${c[1]}</span></label>`).join("")}
  <div class="score" style="margin-top:8px;padding:8px;border-left:3px solid var(--acc)"></div>
  <p><button class="aib">🤖 Sprawdź AI (zdjęcie kartki → Gemini)</button></p><div class="aio muted" style="white-space:pre-wrap"></div></div>`;
  const upd=()=>{const c=[...host.querySelectorAll(".res input[type=checkbox]")].map(x=>x.checked);const pts=q.cr.reduce((a,cr,i)=>a+(c[i]?cr[0]:0),0);
   const og=LS.get("og",{});og[id]={c,pts,max};LS.set("og",og);markErr("o"+id.replace(/^o/,""),pts<max);
   host.querySelector(".score").innerHTML=`<b style="font-size:1.15em">${pts}/${max} pkt</b><br>`+q.cr.map((cr,i)=>c[i]?`✅ Przyznano ${cr[0]} pkt: ${cr[1]}`:`❌ Nie przyznano ${cr[0]} pkt – w rozwiązaniu brakuje: ${cr[1]}`).join("<br>");onScore&&onScore(pts,max)};
  host.querySelectorAll(".res input[type=checkbox]").forEach(x=>x.onchange=upd);upd();
  host.querySelector(".aib").onclick=async()=>{const o=host.querySelector(".aio");if(cvs.empty()){o.textContent="Kartka jest pusta – najpierw napisz rozwiązanie.";return}o.textContent="Wysyłam rysunek do Gemini…";
   try{const t=await gradeImage(q,cvs.png());o.textContent=t;const m=t.match(/Punkty:\s*(\d+)\s*\/\s*(\d+)/);if(m){o.textContent+=`\n\n➡️ AI przyznało ${m[1]}/${max} pkt. Porównaj z kryteriami i zaznacz pola zgodnie z oceną.`;const og=LS.get("og",{});og[id]={...(og[id]||{c:q.cr.map(()=>false)}),ai:+m[1]};LS.set("og",og)}}catch(e){o.textContent="⚠️ "+e}}};
 if(!hideCheck)host.querySelector(".chk").onclick=e=>{e.target.remove();show()};
 if(saved&&!hideCheck){host.querySelector(".chk")?.remove();show()}
 return{show,cvs}}
// ===== Poziom 100% =====
R.p100=()=>{const og=LS.get("og",{});let done=0,pts=0,max=0;OQ.forEach((q,i)=>{const g=og["o"+i];if(g){done++;pts+=g.pts;max+=g.max}});
 app.innerHTML=`<div class="card"><h2>🏆 Poziom 100% – zadania otwarte</h2><p>${OQ.length} trudnych zadań otwartych w stylu CKE (łącznie ${OQ.reduce((a,q)=>a+OPTS(q),0)} pkt). Rozwiązuj odręcznie na kartce (Apple Pencil), potem porównaj z rozwiązaniem modelowym i zaznacz spełnione kryteria albo oddaj do oceny AI.</p>
 <p>Rozwiązane: <b>${done}/${OQ.length}</b>${max?` · wynik: <b>${pts}/${max} pkt (${Math.round(100*pts/max)}%)</b>`:""}</p>
 <label>Dział</label><select id="pt3">${topicOpts()}</select><label>Pokaż</label><select id="pf"><option value="">wszystkie</option><option value="todo">nierozwiązane</option><option value="bad">niepełna punktacja</option></select><div id="pl" style="margin-top:10px"></div></div><div id="ptask"></div>`;
 const list=()=>{const t=$("#pt3").value,f=$("#pf").value,og=LS.get("og",{});
  $("#pl").innerHTML=OQ.map((q,i)=>[q,i]).filter(([q,i])=>(!t||q.t===t)&&(!f||(f==="todo"?!og["o"+i]:og["o"+i]&&og["o"+i].pts<og["o"+i].max))).map(([q,i])=>{const g=og["o"+i];
   return`<button class="opt" data-i="${i}"><span class="muted">#${i+1} · ${TOPICS[q.t]} · ${OPTS(q)} pkt ${g?`· ${g.pts}/${g.max} ${g.pts===g.max?"✅":"🔁"}`:""}</span><br>${q.q.slice(0,110)}…</button>`}).join("")||"<p>Brak zadań.</p>"};
 $("#pt3").onchange=list;$("#pf").onchange=list;list();
 $("#pl").onclick=e=>{const b=e.target.closest("[data-i]");if(!b)return;showOpen(+b.dataset.i)}};
function showOpen(i){app.innerHTML=`<div class="card" id="ot"></div><div class="row"><button onclick="go('p100')">← Lista</button>${i>0?`<button onclick="showOpen(${i-1})">← Poprzednie</button>`:""}${i<OQ.length-1?`<button class="pri" onclick="showOpen(${i+1})">Następne →</button>`:""}</div>`;openTask($("#ot"),OQ[i],"o"+i,{num:"#"+(i+1)});window.scrollTo(0,0)}
// ===== Błędy =====
R.err=()=>{const e=LS.get("errs",{}),ids=Object.keys(e).sort((a,b)=>e[b]-e[a]);
 app.innerHTML=`<div class="card"><h2>❗ Moje błędy</h2><p>Zadania, w których nie zdobyłaś kompletu punktów: <b>${ids.length}</b>. Rozwiąż je ponownie – po poprawnej odpowiedzi znikną z listy.</p>
 ${ids.filter(x=>x[0]==="q").length?`<button class="pri" id="eq">Powtórz błędne zadania zamknięte/obliczeniowe (${ids.filter(x=>x[0]==="q").length})</button>`:""}
 <div id="el" style="margin-top:10px">${ids.map(id=>{if(id[0]==="q"){const q=Q[+id.slice(1)];return q?`<div class="opt"><span class="muted">Quiz · ${TOPICS[q.t]}</span><br>${q.q}<br><small class="muted">✔ ${q.o?q.o[q.a]:fmt(q.n)+" "+(q.u||"")} – ${q.e}</small></div>`:""}
  const k=+id.slice(1),q=OQ[k];if(!q)return"";const g=LS.get("og",{})["o"+k];return`<button class="opt" data-o="${k}"><span class="muted">Poziom 100% #${k+1} · ${TOPICS[q.t]} · ${g?g.pts+"/"+g.max+" pkt":""}</span><br>${q.q.slice(0,120)}…</button>`}).join("")||"<p>🎉 Brak błędów!</p>"}</div></div>`;
 $("#el").onclick=ev=>{const b=ev.target.closest("[data-o]");if(b)showOpen(+b.dataset.o)};
 const eq=$("#eq");if(eq)eq.onclick=()=>{qz={list:ids.filter(x=>x[0]==="q").map(x=>Q[+x.slice(1)]).filter(Boolean),i:0,ok:0};showQ()}};
// ===== Arkusz próbny 180 min =====
function pick(arr,n){return arr.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).slice(0,n).map(x=>x[1])}
R.ark=()=>{const a=LS.get("ark",null);
 if(!a){const hist=LS.get("arkHist",[]);app.innerHTML=`<div class="card"><h2>⏱️ Arkusz próbny</h2><p>Symulacja egzaminu: <b>180 minut</b>, ok. 60 pkt – 10 zadań zamkniętych (1 pkt) i zadania otwarte z „Poziomu 100%” z każdego działu. Timer działa także po odświeżeniu strony. Po zakończeniu: automatyczna ocena zamkniętych, samoocena (lub AI) otwartych i wynik w %.</p>
  <button class="pri" id="as">Rozpocznij arkusz</button>${hist.length?`<h3>Poprzednie arkusze</h3>${hist.map(h=>`<div>${new Date(h.d).toLocaleString("pl-PL")}: <b>${h.p}/${h.m} pkt (${Math.round(100*h.p/h.m)}%)</b></div>`).join("")}`:""}</div>`;
  $("#as").onclick=()=>{const closed=pick(Q.map((q,i)=>i).filter(i=>Q[i].o),10);let open=[],sum=10;
   const byT=Object.keys(TOPICS).map(t=>pick(OQ.map((q,i)=>i).filter(i=>OQ[i].t===t),4));let r=0;
   while(sum<60){const t=byT[r%byT.length];r++;if(!t.length){if(byT.every(x=>!x.length))break;continue}const i=t.shift();open.push(i);sum+=OPTS(OQ[i])}
   LS.set("ark",{start:Date.now(),closed,open,ans:{},done:false});R.ark()};return}
 const max=a.closed.length+a.open.reduce((s,i)=>s+OPTS(OQ[i]),0);
 app.innerHTML=`<div class="card" style="position:sticky;top:96px;z-index:4"><div class="row" style="justify-content:space-between"><b id="tm"></b><span id="asc"></span>${a.done?`<button id="anew">Nowy arkusz</button>`:`<button class="pri" id="aend">Zakończ i oceń</button>`}</div></div>
 ${a.closed.map((qi,n)=>{const q=Q[qi];return`<div class="card"><div class="row" style="justify-content:space-between"><span class="muted">Zadanie ${n+1} · ${TOPICS[q.t]}</span><b>1 pkt</b></div><h3>${q.q}</h3>${q.o.map((o,k)=>`<label class="opt ${a.done?(k===q.a?"ok":a.ans[qi]===k?"bad":""):""}" style="display:flex;gap:8px"><input type="radio" name="c${qi}" value="${k}" style="width:auto" ${a.ans[qi]===k?"checked":""} ${a.done?"disabled":""}>${o}</label>`).join("")}
  ${a.done?`<div class="fb"><b>${a.ans[qi]===q.a?"1/1 pkt – poprawna odpowiedź.":"0/1 pkt – "+(a.ans[qi]===undefined?"brak odpowiedzi":"wybrano „"+q.o[a.ans[qi]]+"”")+"; poprawna: „"+q.o[q.a]+"”. Brak punktów częściowych w zadaniu zamkniętym."}</b><p>${q.e}</p></div>`:""}</div>`}).join("")}
 ${a.open.map((oi,n)=>`<div class="card" id="ao${oi}"></div>`).join("")}`;
 a.open.forEach((oi,n)=>{const h=$("#ao"+oi);const t=openTask(h,OQ[oi],"o"+oi,{num:"Zadanie "+(a.closed.length+n+1),canvasH:420,hideCheck:!a.done,onScore:()=>score()});if(a.done)t.show()});
 app.querySelectorAll("input[type=radio]").forEach(r=>r.onchange=()=>{const A=LS.get("ark");A.ans[r.name.slice(1)]=+r.value;LS.set("ark",A)});
 function score(){if(!a.done){$("#asc").textContent=`max ${max} pkt`;return}const og=LS.get("og",{});let p=a.closed.filter(qi=>a.ans[qi]===Q[qi].a).length;a.open.forEach(oi=>p+=(og["o"+oi]?.pts||0));
  $("#asc").innerHTML=`Wynik: <b>${p}/${max} pkt (${Math.round(100*p/max)}%)</b>`;const A=LS.get("ark");A.p=p;A.m=max;LS.set("ark",A)}
 const finish=()=>{const A=LS.get("ark");A.done=true;A.end=Date.now();A.closed.forEach(qi=>markErr("q"+qi,A.ans[qi]!==Q[qi].a));LS.set("ark",A);R.ark();window.scrollTo(0,0)};
 if(!a.done){$("#aend").onclick=()=>{if(confirm("Zakończyć arkusz i przejść do oceny?"))finish()};
  const tick=()=>{if(!document.getElementById("tm"))return clearInterval(iv);const left=Math.max(0,a.start+180*60e3-Date.now());const m=Math.floor(left/60e3),s=Math.floor(left/1e3)%60;
   $("#tm").textContent=`⏱️ ${String(Math.floor(m/60))}:${String(m%60).padStart(2,"0")}:${String(s).padStart(2,"0")}`;$("#tm").style.color=left<10*60e3?"var(--bad)":"";if(!left){clearInterval(iv);alert("Koniec czasu!");finish()}};const iv=setInterval(tick,1000);tick()}
 else{$("#tm").textContent=`✅ Zakończono (czas: ${Math.round((a.end-a.start)/60e3)} min)`;$("#anew").onclick=()=>{const A=LS.get("ark");const h=LS.get("arkHist",[]);h.unshift({d:A.end,p:A.p||0,m:A.m||max});LS.set("arkHist",h.slice(0,20));
   A.open.forEach(oi=>{localStorage.removeItem("cv_o"+oi);const og=LS.get("og",{});delete og["o"+oi];LS.set("og",og)});localStorage.removeItem("ark");R.ark()}}
 score()};
// ===== Teoria rozszerzona + wzory =====
R.th=()=>{app.innerHTML=Object.entries(TOPICS).map(([k,v])=>`<details class="card th"><summary><b>${v}</b></summary>${TH[k]}<h4>Rozszerzenie</h4>${TH_EXTRA[k].more}<h4>⚠️ Typowe błędy na maturze</h4><ul>${TH_EXTRA[k].err.map(x=>`<li>${x}</li>`).join("")}</ul>
 <div class="row"><button onclick="go('quiz');setTimeout(()=>{$('#qt').value='${k}'},0)">Quiz z działu →</button><button onclick="go('p100');setTimeout(()=>{$('#pt3').value='${k}';$('#pt3').onchange()},0)">Zadania otwarte →</button></div></details>`).join("")};
R.wz=()=>{app.innerHTML=`<div class="card wz">${WZORY}</div>`};
// start: extra info
const _start=R.start;R.start=()=>{_start();const og=LS.get("og",{}),e=Object.keys(LS.get("errs",{})).length;let p=0,m=0;Object.values(og).forEach(g=>{p+=g.pts;m+=g.max});
 app.insertAdjacentHTML("beforeend",`<div class="card"><h3>🏆 Droga do 100%</h3><p>Zadania otwarte: ${Object.keys(og).length}/${OQ.length}${m?` · ${p}/${m} pkt (${Math.round(100*p/m)}%)`:""} · do poprawy: ${e}</p><div class="row"><button class="pri" onclick="go('p100')">Poziom 100%</button><button onclick="go('ark')">Arkusz próbny</button><button onclick="go('err')">Błędy</button></div></div>`)};
go(VIEWS[location.hash.slice(1)]?location.hash.slice(1):"start");
