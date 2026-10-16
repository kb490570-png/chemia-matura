// ===== Błędy =====
function markErr(id,bad){const e=LS.get("errs",{});if(bad)e[id]=Date.now();else delete e[id];LS.set("errs",e)}
(()=>{const og=LS.get("og",{});let ch=0;for(const k in og)if(!og[k].ai){delete og[k];ch=1}if(ch)LS.set("og",og)})();
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
// ===== Ocena AI (oficjalna) =====
const gKey=()=>{const c=LS.get("ai",{});return c.gkey||((c.prov||"gemini")==="gemini"?c.key:"")||""};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function keySetup(onDone){if($("#ks"))return;const d=document.createElement("div");d.id="ks";d.style.cssText="position:fixed;inset:0;background:#0b1220;z-index:99;overflow:auto;padding:24px";
 d.innerHTML=`<div class="card" style="max-width:640px;margin:0 auto"><h2>🔑 Witaj Maja! Jeden krok przed startem</h2><p>Twoje rozwiązania ocenia <b>sztuczna inteligencja Google Gemini</b> według kryteriów CKE – zupełnie <b>za darmo</b>. Potrzebny jest tylko darmowy klucz:</p>
 <ol style="line-height:1.8"><li>Otwórz <a href="https://aistudio.google.com/apikey" target="_blank" style="color:var(--acc);font-weight:700">aistudio.google.com/apikey</a> i zaloguj się kontem Google.</li><li>Kliknij <b>„Create API key”</b> (Utwórz klucz API).</li><li>Skopiuj klucz (zaczyna się od <code>AIza…</code>) i wklej poniżej.</li></ol>
 <input id="ksk" placeholder="Wklej tutaj klucz AIza…" autocomplete="off" style="width:100%;font-size:1.3em;padding:16px;margin:8px 0"><div class="row"><button class="pri" id="kss" style="font-size:1.15em;padding:12px 22px">Zapisz i sprawdź klucz</button><button id="ksl">Później</button></div><p id="ksm" class="muted"></p>
 <p class="muted">Klucz zapisuje się tylko w tej przeglądarce (localStorage). Darmowy limit Gemini wystarcza na codzienną naukę; przy chwilowym limicie aplikacja sama ponowi próbę.</p></div>`;
 document.body.appendChild(d);const k=d.querySelector("#ksk");k.value=gKey();k.focus();
 d.querySelector("#ksl").onclick=()=>{LS.set("ksSkip",1);d.remove()};
 d.querySelector("#kss").onclick=async()=>{const v=k.value.trim(),m=d.querySelector("#ksm");if(!/^AIza[\w-]{20,}$/.test(v)){m.textContent="⚠️ To nie wygląda na klucz Gemini – powinien zaczynać się od „AIza”.";return}m.textContent="Sprawdzam klucz…";
  try{const r=await fetch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=1",{headers:{"x-goog-api-key":v}});if(r.status===400||r.status===403||r.status===401){m.textContent="⚠️ Google odrzucił ten klucz. Skopiuj go ponownie z aistudio.google.com/apikey.";return}}catch(e){/* offline – zapisz mimo to */}
  const c=LS.get("ai",{prov:"gemini",key:"",model:""});c.gkey=v;if(!c.key||(c.prov||"gemini")==="gemini"){c.prov="gemini";c.key=v}LS.set("ai",c);m.textContent="✅ Zapisano!";setTimeout(()=>{d.remove();onDone&&onDone()},500)}}
async function gemini(parts,status){const key=gKey();if(!key)throw{nokey:1};const cfg=LS.get("ai",{});
 const models=[...new Set([(cfg.prov||"gemini")==="gemini"&&cfg.model?cfg.model:"gemini-2.5-flash","gemini-2.5-flash","gemini-2.0-flash"])];let last="";
 for(let att=0;att<6;att++){const model=models[Math.min(Math.floor(att/2),models.length-1)];
  try{const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":key},
    body:JSON.stringify({contents:[{role:"user",parts}],generationConfig:{temperature:0.1,responseMimeType:"application/json"}})});
   const j=await r.json().catch(()=>({}));
   if(r.ok){const t=j.candidates?.[0]?.content?.parts?.map(p=>p.text||"").join("")||"";if(t)return t;last="pusta odpowiedź modelu"}
   else{last=j.error?.message||("HTTP "+r.status);if(r.status===400&&/API key/i.test(last)||r.status===401||r.status===403)throw{badkey:1,msg:last};if(r.status===400)throw{msg:last};
    if(r.status===429||r.status>=500){const rd=(j.error?.details||[]).find(x=>x.retryDelay);let w=rd?parseFloat(rd.retryDelay)*1000:2000*2**att;w=Math.min(w,30000);
     for(let s=Math.ceil(w/1000);s>0;s--){status&&status(`⏳ Limit/obciążenie Gemini (${r.status}) – ponawiam za ${s} s (próba ${att+2}/6)…`);await sleep(1000)}continue}}}
  catch(e){if(e.badkey||e.msg&&!e.net)throw e;last="brak połączenia z internetem";status&&status("⏳ Problem z siecią – ponawiam…");await sleep(2000*2**att)}}
 throw{msg:last||"nieznany błąd"}}
async function gradeAI(q,png,text,status){const max=q.cr.reduce((a,c)=>a+c[0],0);
 const prompt=`Jesteś egzaminatorem CKE oceniającym maturę rozszerzoną z chemii (formuła 2023). ${png?"Na obrazie jest odręczne rozwiązanie uczennicy (Mai) – najpierw dokładnie je odczytaj.":""}${text?`\nTekst wpisany przez uczennicę: """${text}"""`:""}
Oceń ŚCIŚLE według kryteriów CKE; punkt przyznaj tylko, gdy kryterium jest w pełni spełnione w rozwiązaniu uczennicy (nie domyślaj się brakujących kroków; błąd rachunkowy, brak jednostki lub złe zaokrąglenie traktuj jak CKE). Nie oceniaj rozwiązania modelowego – służy tylko jako wzorzec.
Zadanie: ${q.q}
Rozwiązanie modelowe: ${q.sol}
Kryteria (łącznie ${max} pkt):
${q.cr.map((c,i)=>`K${i+1} (max ${c[0]} pkt): ${c[1]}`).join("\n")}
Zwróć WYŁĄCZNIE JSON: {"odczyt":"co odczytałeś z kartki (krótko)","kryteria":[{"pkt":liczba 0..max_kryterium,"uzasadnienie":"..."}...dokładnie ${q.cr.length} pozycji w kolejności K1..],"wskazowki":"co poprawić, zwracając się do Mai w formach żeńskich","czytelne":true/false}. Jeśli rozwiązanie jest puste lub nieczytelne, przyznaj 0 i napisz to.`;
 const parts=[{text:prompt}];if(png)parts.push({inline_data:{mime_type:"image/png",data:png.split(",")[1]}});
 let raw=await gemini(parts,status),j;try{j=JSON.parse(raw.replace(/^```(json)?|```$/g,"").trim())}catch(e){const m=raw.match(/\{[\s\S]*\}/);try{j=JSON.parse(m[0])}catch(e2){throw{msg:"AI zwróciło nieczytelną odpowiedź – spróbuj ponownie."}}}
 const per=q.cr.map((c,i)=>{const k=(j.kryteria||[])[i]||{};const p=Math.max(0,Math.min(c[0],Math.round(+k.pkt||0)));return{p,max:c[0],why:k.uzasadnienie||"(brak uzasadnienia)"}});
 return{pts:per.reduce((a,x)=>a+x.p,0),max,per,read:j.odczyt||"",tips:j.wskazowki||"",legible:j.czytelne!==false,ai:true,d:Date.now()}}
const errTxt=e=>e&&e.nokey?"Brak klucza Gemini.":e&&e.badkey?"Klucz Gemini jest nieprawidłowy lub zablokowany: "+e.msg:"⚠️ Nie udało się ocenić: "+(e&&e.msg||e)+". Twoje rozwiązanie jest zapisane – kliknij „Sprawdź” ponownie.";
function gradeHTML(q,g){return`<div class="fb"><div style="padding:8px;border-left:3px solid var(--acc)"><b style="font-size:1.25em">${g.pts}/${g.max} pkt</b> <span class="muted">· oficjalna ocena AI (Gemini) wg kryteriów CKE</span>${g.read?`<p class="muted">📝 Odczytano: ${esc(g.read)}</p>`:""}
 ${g.per.map((x,i)=>`<p>${x.p===x.max?"✅":x.p?"🟡":"❌"} <b>K${i+1}: ${x.p}/${x.max} pkt</b> – <i>${q.cr[i][1]}</i><br>${esc(x.why)}</p>`).join("")}${g.tips?`<p>💡 <b>Wskazówki:</b> ${esc(g.tips)}</p>`:""}</div><p><b>Rozwiązanie modelowe:</b></p><p>${q.sol}</p></div>`}
function esc(s){return String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}
// kolejka – jedna ocena naraz (limity darmowego API)
let gq=Promise.resolve();const queued=f=>{const p=gq.then(f,f);gq=p.catch(()=>{});return p};
// ===== Widok zadania otwartego =====
function openTask(host,q,id,{num,canvasH=520,onScore,hideCheck}={}){
 const max=OPTS(q);
 host.innerHTML=`<div class="row" style="justify-content:space-between"><span class="muted">${num?num+" · ":""}${TOPICS[q.t]}</span><b>${max} pkt</b></div><h3 style="margin:.4em 0">${q.q}</h3>
 <div class="cvh"></div><textarea class="otx" rows="2" style="width:100%;margin-top:6px" placeholder="(opcjonalnie) wpisz tu część odpowiedzi z klawiatury – AI oceni ją razem z rysunkiem"></textarea>
 <p class="chkp" ${hideCheck?'style="display:none"':""}><button class="pri chk">✅ Sprawdź (ocena AI wg CKE)</button></p><div class="st muted"></div><div class="res"></div>`;
 const cvs=makeCanvas(host.querySelector(".cvh"),"cv_"+id,canvasH),tx=host.querySelector(".otx"),st=host.querySelector(".st"),btn=host.querySelector(".chk");
 tx.value=LS.get("tx_"+id,"");tx.oninput=()=>LS.set("tx_"+id,tx.value);
 const render=()=>{const g=LS.get("og",{})[id];if(g&&g.ai&&g.per){host.querySelector(".res").innerHTML=gradeHTML(q,g);btn.textContent="🔁 Sprawdź ponownie (po poprawkach)"}};
 const grade=()=>{if(!gKey()){keySetup(grade);st.textContent="Dodaj darmowy klucz Gemini, aby AI mogło ocenić rozwiązanie.";return Promise.resolve()}
  if(cvs.empty()&&!tx.value.trim()){st.textContent="Kartka jest pusta – najpierw napisz rozwiązanie.";return Promise.resolve()}
  btn.disabled=true;st.textContent="⏳ W kolejce do oceny…";
  return queued(async()=>{st.textContent="🤖 Gemini czyta Twoje rozwiązanie i ocenia wg kryteriów CKE…";
   try{const g=await gradeAI(q,cvs.empty()?null:cvs.png(),tx.value.trim(),m=>st.textContent=m);const og=LS.get("og",{});og[id]=g;LS.set("og",og);markErr("o"+id.replace(/^o/,""),g.pts<g.max);st.textContent="";render();onScore&&onScore(g.pts,g.max)}
   catch(e){st.textContent=errTxt(e);if(e&&e.badkey)keySetup()}finally{btn.disabled=false}})};
 btn.onclick=grade;render();
 return{show:()=>{host.querySelector(".chkp").style.display="";const g=LS.get("og",{})[id];if(g&&g.ai)return Promise.resolve();
  if(cvs.empty()&&!tx.value.trim()){const og=LS.get("og",{});og[id]={pts:0,max,ai:true,per:q.cr.map(c=>({p:0,max:c[0],why:"Brak rozwiązania – kartka pusta."})),read:"",tips:"",d:Date.now()};LS.set("og",og);markErr("o"+id.replace(/^o/,""),true);render();onScore&&onScore(0,max);return Promise.resolve()}
  return grade()},cvs,grade}}
// ===== Poziom 100% =====
R.p100=()=>{const og=LS.get("og",{});let done=0,pts=0,max=0;OQ.forEach((q,i)=>{const g=og["o"+i];if(g){done++;pts+=g.pts;max+=g.max}});
 app.innerHTML=`<div class="card"><h2>🏆 Poziom 100% – zadania otwarte</h2><p>${OQ.length} trudnych zadań otwartych w stylu CKE (łącznie ${OQ.reduce((a,q)=>a+OPTS(q),0)} pkt). Rozwiązuj odręcznie na kartce (Apple Pencil), i kliknij „Sprawdź” – AI Gemini odczyta Twoje pismo i przyzna punkty wg kryteriów CKE (oficjalny wynik). Rozwiązanie modelowe pojawi się po ocenie.</p>
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
 if(!a){const hist=LS.get("arkHist",[]);app.innerHTML=`<div class="card"><h2>⏱️ Arkusz próbny</h2><p>Symulacja egzaminu: <b>180 minut</b>, ok. 60 pkt – 10 zadań zamkniętych (1 pkt) i zadania otwarte z „Poziomu 100%” z każdego działu. Timer działa także po odświeżeniu strony. Po zakończeniu: automatyczna ocena zamkniętych, a zadania otwarte (Twoje odręczne rozwiązania) ocenia AI Gemini wg kryteriów CKE – to oficjalny wynik w %.</p>
  <button class="pri" id="as">Rozpocznij arkusz</button>${hist.length?`<h3>Poprzednie arkusze</h3>${hist.map(h=>`<div>${new Date(h.d).toLocaleString("pl-PL")}: <b>${h.p}/${h.m} pkt (${Math.round(100*h.p/h.m)}%)</b></div>`).join("")}`:""}</div>`;
  $("#as").onclick=()=>{const closed=pick(Q.map((q,i)=>i).filter(i=>Q[i].o),10);let open=[],sum=10;
   const byT=Object.keys(TOPICS).map(t=>pick(OQ.map((q,i)=>i).filter(i=>OQ[i].t===t),4));let r=0;
   while(sum<60){const t=byT[r%byT.length];r++;if(!t.length){if(byT.every(x=>!x.length))break;continue}const i=t.shift();open.push(i);sum+=OPTS(OQ[i])}
   {const og=LS.get("og",{});open.forEach(i=>{delete og["o"+i];localStorage.removeItem("cv_o"+i);localStorage.removeItem("tx_o"+i)});LS.set("og",og)}LS.set("ark",{start:Date.now(),closed,open,ans:{},done:false});R.ark()};return}
 const max=a.closed.length+a.open.reduce((s,i)=>s+OPTS(OQ[i]),0);
 app.innerHTML=`<div class="card" style="position:sticky;top:96px;z-index:4"><div class="row" style="justify-content:space-between"><b id="tm"></b><span id="asc"></span>${a.done?`<button id="anew">Nowy arkusz</button>`:`<button class="pri" id="aend">Zakończ i oceń</button>`}</div></div>
 ${a.closed.map((qi,n)=>{const q=Q[qi];return`<div class="card"><div class="row" style="justify-content:space-between"><span class="muted">Zadanie ${n+1} · ${TOPICS[q.t]}</span><b>1 pkt</b></div><h3>${q.q}</h3>${q.o.map((o,k)=>`<label class="opt ${a.done?(k===q.a?"ok":a.ans[qi]===k?"bad":""):""}" style="display:flex;gap:8px"><input type="radio" name="c${qi}" value="${k}" style="width:auto" ${a.ans[qi]===k?"checked":""} ${a.done?"disabled":""}>${o}</label>`).join("")}
  ${a.done?`<div class="fb"><b>${a.ans[qi]===q.a?"1/1 pkt – poprawna odpowiedź.":"0/1 pkt – "+(a.ans[qi]===undefined?"brak odpowiedzi":"wybrano „"+q.o[a.ans[qi]]+"”")+"; poprawna: „"+q.o[q.a]+"”. Brak punktów częściowych w zadaniu zamkniętym."}</b><p>${q.e}</p></div>`:""}</div>`}).join("")}
 ${a.open.map((oi,n)=>`<div class="card" id="ao${oi}"></div>`).join("")}`;
 a.open.forEach((oi,n)=>{const h=$("#ao"+oi);const t=openTask(h,OQ[oi],"o"+oi,{num:"Zadanie "+(a.closed.length+n+1),canvasH:420,hideCheck:!a.done,onScore:()=>score()});if(a.done)t.show()});
 app.querySelectorAll("input[type=radio]").forEach(r=>r.onchange=()=>{const A=LS.get("ark");A.ans[r.name.slice(1)]=+r.value;LS.set("ark",A)});
 function score(){if(!a.done){$("#asc").textContent=`max ${max} pkt`;return}const og=LS.get("og",{});let p=a.closed.filter(qi=>a.ans[qi]===Q[qi].a).length;let pend=0;a.open.forEach(oi=>{const g=og["o"+oi];if(g&&g.ai)p+=g.pts;else pend++});
  $("#asc").innerHTML=`Wynik: <b>${p}/${max} pkt (${Math.round(100*p/max)}%)</b>${pend?` · ⏳ ocena AI: ${pend} zad.`:""}`;const A=LS.get("ark");A.p=p;A.m=max;LS.set("ark",A)}
 const finish=()=>{const A=LS.get("ark");A.done=true;A.end=Date.now();A.closed.forEach(qi=>markErr("q"+qi,A.ans[qi]!==Q[qi].a));LS.set("ark",A);R.ark();window.scrollTo(0,0)};
 if(!a.done){$("#aend").onclick=()=>{if(confirm("Zakończyć arkusz i przejść do oceny?"))finish()};
  const tick=()=>{if(!document.getElementById("tm"))return clearInterval(iv);const left=Math.max(0,a.start+180*60e3-Date.now());const m=Math.floor(left/60e3),s=Math.floor(left/1e3)%60;
   $("#tm").textContent=`⏱️ ${String(Math.floor(m/60))}:${String(m%60).padStart(2,"0")}:${String(s).padStart(2,"0")}`;$("#tm").style.color=left<10*60e3?"var(--bad)":"";if(!left){clearInterval(iv);alert("Koniec czasu!");finish()}};const iv=setInterval(tick,1000);tick()}
 else{$("#tm").textContent=`✅ Zakończono (czas: ${Math.round((a.end-a.start)/60e3)} min)`;$("#anew").onclick=()=>{const A=LS.get("ark");const h=LS.get("arkHist",[]);h.unshift({d:A.end,p:A.p||0,m:A.m||max});LS.set("arkHist",h.slice(0,20));
   A.open.forEach(oi=>{localStorage.removeItem("cv_o"+oi);localStorage.removeItem("tx_o"+oi);const og=LS.get("og",{});delete og["o"+oi];LS.set("og",og)});localStorage.removeItem("ark");R.ark()}}
 score()};
// ===== Teoria rozszerzona + wzory =====
const thTxt=h=>h.replace(/<[^>]+>/g," ").replace(/\s+/g," ");
const thSec=(k,x)=>{const rd=LS.get("read",{});return`<details class="card ths" data-k="${k}" data-id="${x.id}"><summary><span class="rk">${rd[x.id]?"✅":"⬜"}</span> ${x.t} <span class="muted">${x.pp&&x.pp!=="–"?"PP "+x.pp:""}</span></summary><div class="thb"></div></details>`};
function thFill(d){const b=d.querySelector(".thb");if(b.dataset.ok)return;const k=d.dataset.k,x=TX[k].find(s=>s.id===d.dataset.id);const rd=LS.get("read",{});
 b.innerHTML=x.h+(x.sq.length?`<h4>🧠 Sprawdź się</h4>`+x.sq.map(([q,a])=>`<div class="sq"><p>${q}</p><details><summary>Pokaż odpowiedź</summary><p>${a}</p></details></div>`).join(""):"")+
 `<div class="row"><label style="display:flex;gap:6px;align-items:center"><input type="checkbox" class="rdc" ${rd[x.id]?"checked":""}> przeczytane</label><button onclick="go('quiz');setTimeout(()=>{$('#qt').value='${k}'},0)">Quiz z działu →</button><button onclick="go('p100');setTimeout(()=>{$('#pt3').value='${k}';$('#pt3').onchange()},0)">Zadania 100% →</button></div>`;
 b.dataset.ok=1;b.querySelector(".rdc").onchange=e=>{const r=LS.get("read",{});if(e.target.checked)r[x.id]=1;else delete r[x.id];LS.set("read",r);d.querySelector(".rk").textContent=e.target.checked?"✅":"⬜";thCount()}}
function thCount(){const r=LS.get("read",{});document.querySelectorAll(".tht").forEach(e=>{const k=e.dataset.k;e.textContent=`${TX[k].filter(s=>r[s.id]).length}/${TX[k].length}`});const n=Object.values(TX).flat().length,m=Object.values(TX).flat().filter(s=>r[s.id]).length;const t=$("#thall");if(t)t.textContent=`Przeczytane: ${m}/${n} podrozdziałów`}
function thBind(root){root.querySelectorAll("details.ths").forEach(d=>d.addEventListener("toggle",()=>{if(d.open)thFill(d)}))}
R.th=()=>{app.innerHTML=`<div class="card"><h2>📚 Teoria – matura rozszerzona</h2><input id="ths" type="search" placeholder="Szukaj w całej teorii (np. Tollens, Markownikow, pH)…" style="width:100%"><p class="muted" id="thall"></p></div><div id="thr"></div><div id="thl">`+
 Object.entries(TOPICS).map(([k,v])=>`<details class="card th" data-k="${k}"><summary><b>${v}</b> <span class="muted tht" data-k="${k}"></span></summary><div class="toc"></div></details>`).join("")+`<details class="card"><summary><b>Skrót + typowe błędy (stara wersja)</b></summary>${Object.keys(TOPICS).map(k=>`<h4>${TOPICS[k]}</h4>${TH[k]}<ul>${TH_EXTRA[k].err.map(x=>`<li>${x}</li>`).join("")}</ul>`).join("")}</details></div>`;
 app.querySelectorAll("details.th").forEach(d=>d.addEventListener("toggle",()=>{const t=d.querySelector(".toc");if(d.open&&!t.innerHTML){t.innerHTML=TX[d.dataset.k].map(x=>thSec(d.dataset.k,x)).join("");thBind(t)}}));
 thCount();let tm;$("#ths").oninput=e=>{clearTimeout(tm);tm=setTimeout(()=>{const q=e.target.value.trim().toLowerCase();const r=$("#thr"),l=$("#thl");if(q.length<2){r.innerHTML="";l.style.display="";return}l.style.display="none";
  const hits=[];for(const k in TX)TX[k].forEach(x=>{const s=(x.t+" "+thTxt(x.h)+" "+x.sq.flat().join(" ")).toLowerCase();if(s.includes(q))hits.push([k,x])});
  r.innerHTML=`<p class="muted card">Wyniki: ${hits.length}</p>`+hits.slice(0,40).map(([k,x])=>thSec(k,x).replace("</summary>",` · ${TOPICS[k]}</summary>`)).join("");thBind(r)},200)}};
R.wz=()=>{app.innerHTML=`<div class="card wz">${WZORY}</div>`};
// start: extra info
const _start=R.start;R.start=()=>{_start();const og=LS.get("og",{}),e=Object.keys(LS.get("errs",{})).length;let p=0,m=0;Object.values(og).forEach(g=>{p+=g.pts;m+=g.max});
 app.insertAdjacentHTML("beforeend",`<div class="card"><h3>🏆 Droga do 100%</h3><p>Zadania otwarte: ${Object.keys(og).length}/${OQ.length}${m?` · ${p}/${m} pkt (${Math.round(100*p/m)}%)`:""} · do poprawy: ${e}</p><div class="row"><button class="pri" onclick="go('p100')">Poziom 100%</button><button onclick="go('ark')">Arkusz próbny</button><button onclick="go('err')">Błędy</button></div></div>`)};
if(!gKey()&&!LS.get("ksSkip"))setTimeout(()=>keySetup(),300);
go(VIEWS[location.hash.slice(1)]?location.hash.slice(1):"start");

// ===== Pływające panele: układ okresowy i wzory (nie przerysowują widoku – kanwa i timer zostają) =====
(function(){let mode=null,zoom=1;const ov=$("#ov"),z=$("#ovz"),d=$("#ovd");
 function open(m){if(mode===m&&ov.classList.contains("open")){close();return}mode=m;zoom=1;z.style.transform="";d.style.display="none";
  $("#ovt").textContent=m==="pt"?"🧪 Układ okresowy (karta CKE)":"📐 Wybrane wzory i stałe";z.innerHTML=m==="pt"?ptHTML():`<div class="wz" style="max-width:900px">${WZORY}</div>`;ov.classList.add("open")}
 function close(){ov.classList.remove("open")}
 $("#fabPt").onclick=()=>open("pt");$("#fabWz").onclick=()=>open("wz");$("#ovx").onclick=close;
 const zz=f=>{zoom=Math.min(3,Math.max(0.5,zoom*f));z.style.transform=`scale(${zoom})`;z.style.width=(100/zoom)+"%"};$("#ovp").onclick=()=>zz(1.25);$("#ovm").onclick=()=>zz(0.8);
 z.addEventListener("click",ev=>{const b=ev.target.closest(".pc");if(!b)return;d.style.display="block";d.innerHTML=elDetails(+b.dataset.z)+`<button onclick="this.parentNode.style.display='none'">Ukryj</button>`});
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});})();
