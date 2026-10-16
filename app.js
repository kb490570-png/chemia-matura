const $=s=>document.querySelector(s),app=$("#app");
const LS={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
const VIEWS={start:"🏠 Start",quiz:"📝 Quiz",fc:"🃏 Fiszki",th:"📚 Teoria",pt:"🧪 Układ okresowy",calc:"🧮 Kalkulatory",ai:"🤖 Korepetytor AI"};
$("#nav").innerHTML=Object.entries(VIEWS).map(([k,v])=>`<button data-v="${k}">${v}</button>`).join("");
$("#nav").onclick=e=>{const v=e.target.dataset.v;if(v)go(v)};
function go(v){location.hash=v;document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on",b.dataset.v===v));R[v]();window.scrollTo(0,0)}
const topicOpts=(all=true)=>(all?`<option value="">🔀 Wszystkie działy (mix)</option>`:"")+Object.entries(TOPICS).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
const num=s=>parseFloat(String(s).replace(",",".").replace(/\s/g,""));
const fmt=x=>String(+x.toPrecision(5)).replace(".",",");
const R={};
R.start=()=>{const st=LS.get("stats",{}),tot=Object.values(st).reduce((a,b)=>[a[0]+b[0],a[1]+b[1]],[0,0]);
app.innerHTML=`<div class="card"><h2>Witaj w trenerze maturalnym!</h2><p>Baza: <b>${Q.length}</b> zadań, <b>${FC.length}</b> fiszek, ${Object.keys(TOPICS).length} działów zgodnych z wymaganiami CKE (formuła 2023).</p>
<p>Twoje wyniki: ${tot[1]?`<b>${tot[0]}/${tot[1]}</b> poprawnych (${Math.round(100*tot[0]/tot[1])}%)`:"jeszcze brak – zacznij quiz!"}</p>
<div class="row"><button class="pri" onclick="go('quiz')">Rozpocznij quiz</button><button onclick="go('fc')">Fiszki</button></div></div>
<div class="card"><h3>Postęp w działach</h3>${Object.entries(TOPICS).map(([k,v])=>{const s=st[k]||[0,0],p=s[1]?Math.round(100*s[0]/s[1]):0;return`<div style="margin:8px 0"><div class="row" style="justify-content:space-between"><span>${v}</span><span class="muted">${s[0]}/${s[1]}</span></div><div class="bar"><i style="width:${p}%"></i></div></div>`}).join("")}
<button onclick="if(confirm('Wyzerować statystyki?')){localStorage.removeItem('stats');go('start')}">Wyzeruj statystyki</button></div>`};
// QUIZ
let qz;
R.quiz=()=>{app.innerHTML=`<div class="card"><h2>Quiz</h2><label>Dział</label><select id="qt">${topicOpts()}</select>
<label>Liczba pytań</label><select id="qn"><option>10</option><option>20</option><option>40</option><option value="999">wszystkie</option></select>
<label>Typ</label><select id="qy"><option value="">wszystkie</option><option value="c">tylko zamknięte</option><option value="n">tylko obliczeniowe</option></select>
<p><button class="pri" id="qs">Start</button></p></div>`;
$("#qs").onclick=()=>{const t=$("#qt").value,y=$("#qy").value;let pool=Q.filter(q=>(!t||q.t===t)&&(!y||(y==="n")===("n" in q)));
pool.sort(()=>Math.random()-.5);qz={list:pool.slice(0,+$("#qn").value),i:0,ok:0};showQ()}};
function stat(t,ok){const s=LS.get("stats",{});s[t]=s[t]||[0,0];s[t][1]++;if(ok)s[t][0]++;LS.set("stats",s)}
function showQ(){if(qz.i>=qz.list.length){app.innerHTML=`<div class="card"><h2>Koniec! 🎉</h2><p>Poprawne: <b>${qz.ok}/${qz.list.length}</b><br>Punkty: <b>${qz.pts||0}/${qz.max||0} pkt</b> (${Math.round(100*(qz.pts||0)/(qz.max||1))}%)</p><p class="muted">Zadania zamknięte: 1 pkt; obliczeniowe: 2 pkt (metoda + obliczenia/wynik z jednostką).</p><button class="pri" onclick="go('quiz')">Nowy quiz</button></div>`;return}
const q=qz.list[qz.i],o=q.o?q.o.map((x,i)=>[x,i]).sort(()=>Math.random()-.5):null;
app.innerHTML=`<div class="card"><div class="row" style="justify-content:space-between"><span class="muted">${TOPICS[q.t]}</span><span class="muted">${qz.i+1}/${qz.list.length} · ${qz.pts||0}/${qz.max||0} pkt</span></div>
<div class="bar"><i style="width:${100*qz.i/qz.list.length}%"></i></div><h3>${q.q} <span class="muted">(${q.n!==undefined?2:1} pkt)</span></h3>
${o?o.map(([x,i])=>`<button class="opt" data-i="${i}">${x}</button>`).join(""):`<textarea id="sol" rows="3" style="width:100%;margin-bottom:6px" placeholder="(opcjonalnie) Twój tok rozumowania – do samooceny lub oceny przez AI"></textarea><div class="row"><input id="na" inputmode="decimal" placeholder="Twój wynik" style="flex:1"><span>${q.u||""}</span><button class="pri" id="nb">Sprawdź</button></div>`}
<div id="fb"></div></div>`;
const done=(ok,pts,max,why,v)=>{stat(q.t,ok);qz.ok+=ok?1:0;qz.pts=(qz.pts||0)+pts;qz.max=(qz.max||0)+max;
$("#fb").innerHTML=`<div class="fb"><b style="color:${ok?"var(--ok)":"var(--bad)"}">${ok?"✅ Dobrze!":"❌ Źle."}</b> <span style="float:right;font-weight:700" id="ptsb">${pts}/${max} pkt</span>${q.n!==undefined?`<br>Poprawna odpowiedź: <b>${fmt(q.n)} ${q.u||""}</b>`:""}
<div style="margin-top:8px;padding:8px;border-left:3px solid var(--acc)"><b>Punktacja wg kryteriów CKE:</b><br><span id="why">${why}</span></div><p><b>Rozwiązanie:</b> ${q.e}</p>
${q.n!==undefined&&!ok?`<div class="row"><button id="self">Samoocena: moja metoda była poprawna (+1 pkt)</button></div>`:""}
${q.n!==undefined&&LS.get("ai",{}).key?`<button id="aig">🤖 Oceń mój tok rozumowania z AI</button><div id="aio" class="muted"></div>`:""}
<button class="pri" id="nx">Dalej →</button></div>`;
$("#nx").onclick=()=>{qz.i++;showQ()};
const sb=$("#self");if(sb)sb.onclick=()=>{if(pts<1){pts=1;qz.pts++;$("#ptsb").textContent=`1/${max} pkt`;$("#why").innerHTML+=`<br>🔁 <b>Samoocena:</b> 1 pkt przyznany za zastosowanie poprawnej metody (poprawny tok obliczeń, np. właściwa zależność między danymi a szukaną). 0 pkt za wynik, bo błąd rachunkowy lub zły wynik końcowy.`;sb.remove()}};
const ab=$("#aig");if(ab)ab.onclick=async()=>{const sol=$("#sol").value.trim();if(!sol){$("#aio").textContent="Najpierw wpisz swój tok rozumowania w polu nad wynikiem.";return}$("#aio").textContent="Oceniam…";
try{const o=await askAI(`Oceń rozwiązanie zadania maturalnego wg kryteriów CKE (max ${max} pkt: 1 pkt za poprawną metodę – zastosowanie poprawnej metody łączącej dane z szukaną; 1 pkt za poprawne obliczenia i wynik z poprawną jednostką i zaokrągleniem). Na początku podaj „Punkty: X/${max}”, potem uzasadnij każdy przyznany lub nieprzyznany punkt.\nZadanie: ${q.q}\nPoprawny wynik: ${q.n} ${q.u||""}\nRozwiązanie modelowe: ${q.e}\nRozwiązanie ucznia: ${sol}\nWynik ucznia: ${v} ${q.u||""}`,true);$("#aio").style.whiteSpace="pre-wrap";$("#aio").textContent=o;const m=o.match(/Punkty:\s*(\d)/);if(m){qz.pts+=+m[1]-pts;pts=+m[1];$("#ptsb").textContent=`${pts}/${max} pkt (AI)`}}catch(e){$("#aio").textContent="⚠️ "+e}};
$("#nx").focus()};
if(o)app.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if($("#nx"))return;const i=+b.dataset.i;app.querySelectorAll(".opt").forEach(x=>{if(+x.dataset.i===q.a)x.classList.add("ok")});if(i!==q.a)b.classList.add("bad");const ok=i===q.a;done(ok,ok?1:0,1,ok?`1/1 pkt – wybrano poprawną odpowiedź („${q.o[q.a]}”). W zadaniu zamkniętym punkt przyznaje się wyłącznie za poprawny wybór.`:`0/1 pkt – wybrano „${q.o[i]}”, a poprawna jest „${q.o[q.a]}”. W zadaniu zamkniętym CKE nie przyznaje punktów częściowych.`)});
else{const chk=()=>{if($("#nx"))return;const v=num($("#na").value);if(isNaN(v))return;const tol=Math.max(q.tol,Math.abs(q.n)*0.005);const ok=Math.abs(v-q.n)<=tol+1e-9,near=!ok&&Math.abs(v-q.n)<=Math.max(tol*5,Math.abs(q.n)*0.03);
done(ok,ok?2:near?1:0,2,ok?"1 pkt – zastosowanie poprawnej metody (wynik świadczy o poprawnym powiązaniu danych z szukaną).<br>1 pkt – poprawne obliczenia, wynik w dopuszczalnym zakresie"+(q.u?` (jednostka: ${q.u})`:"")+".":near?"1 pkt – metoda poprawna (wynik bliski prawidłowemu).<br>0 pkt – błąd rachunkowy lub niewłaściwe zaokrąglenie: wynik "+fmt(v)+" poza tolerancją (±"+fmt(tol)+")." :"0 pkt za metodę – wynik "+fmt(v)+" wskazuje na błędną metodę lub błąd merytoryczny (np. zła proporcja/wzór).<br>0 pkt za obliczenia – wynik niepoprawny. Jeśli Twoja metoda była dobra, a pomyliłeś się rachunkowo – użyj samooceny poniżej.",v)};$("#nb").onclick=chk;$("#na").onkeydown=e=>e.key==="Enter"&&chk();$("#na").focus()}}
// FLASHCARDS – Leitner boxes 0..5, interval days
const IV=[0,1,2,4,8,16];
R.fc=()=>{app.innerHTML=`<div class="card"><h2>Fiszki (powtórki rozłożone w czasie)</h2><label>Dział</label><select id="ft">${topicOpts()}</select><div id="fa"></div></div>`;$("#ft").onchange=fcNext;fcNext()};
function fcNext(){const t=$("#ft").value,box=LS.get("fc",{}),now=Date.now();
const cards=FC.map((c,i)=>({c,i,b:box[i]||{l:0,d:0}})).filter(x=>!t||x.c[0]===t);const due=cards.filter(x=>x.b.d<=now).sort(()=>Math.random()-.5);
const learned=cards.filter(x=>x.b.l>=3).length;
const head=`<p class="muted">Do powtórki: ${due.length} · opanowane: ${learned}/${cards.length}</p>`;
if(!due.length){$("#fa").innerHTML=head+`<p>🎉 Brak fiszek do powtórki w tym dziale. Wróć później!</p><button onclick="if(confirm('Zresetować postęp fiszek?')){localStorage.removeItem('fc');fcNext()}">Reset postępu</button>`;return}
const x=due[0];let flipped=false;
$("#fa").innerHTML=head+`<div class="card flash" id="fl" style="background:#0f172a">${x.c[1]}</div><p class="muted" style="text-align:center">Dotknij karty, aby odwrócić</p>
<div class="row" style="justify-content:center"><button id="no" style="background:#7f1d1d">❌ Nie wiem</button><button id="yes" style="background:#14532d">✅ Wiem</button></div>`;
$("#fl").onclick=()=>{flipped=!flipped;$("#fl").innerHTML=flipped?`<div><div class="muted">${x.c[1]}</div><b>${x.c[2]}</b></div>`:x.c[1]};
const ans=k=>{const b=LS.get("fc",{});let l=k?Math.min(5,x.b.l+1):0;b[x.i]={l,d:Date.now()+(k?IV[l]*864e5:60e3)};LS.set("fc",b);fcNext()};
$("#yes").onclick=()=>ans(1);$("#no").onclick=()=>ans(0)}
// THEORY
R.th=()=>{app.innerHTML=Object.entries(TOPICS).map(([k,v])=>`<details class="card th"><summary><b>${v}</b></summary>${TH[k]}<button onclick="qz=null;go('quiz');setTimeout(()=>{$('#qt').value='${k}'},0)">Ćwicz ten dział →</button></details>`).join("")};
// PERIODIC TABLE
function blk(z){const c=config(z);const last=c.trim().split(" ").pop();if(z===2)return"s";return last.match(/[spdf]/)[0]}
R.pt=()=>{let cells="";EL.forEach(e=>{const[c,r]=pos2(e.z);cells+=`<button class="el ${blk(e.z)}" style="grid-column:${c};grid-row:${r+(r>=9?0:0)}" data-z="${e.z}"><small>${e.z}</small>${e.s}</button>`});
app.innerHTML=`<div class="card"><h2>Interaktywny układ okresowy</h2><p class="muted">Kliknij pierwiastek. Kolory: <span class="s" style="color:#000;padding:0 4px">s</span> <span class="p" style="color:#000;padding:0 4px">p</span> <span class="d" style="color:#000;padding:0 4px">d</span> <span class="f" style="color:#000;padding:0 4px">f</span></p>
<div class="ptw"><div id="pt">${cells}<div style="grid-row:8;grid-column:1/19;height:8px"></div></div></div><div id="pi" class="fb">Wybierz pierwiastek…</div></div>`;
$("#pt").onclick=ev=>{const b=ev.target.closest(".el");if(!b)return;const e=EL[b.dataset.z-1],[c,r]=pos2(e.z);const per=r>=9?r-3:r;
$("#pi").innerHTML=`<h3>${e.s} – ${e.n} (Z = ${e.z})</h3><p>Masa molowa: <b>${String(e.m).replace(".",",")} g/mol</b><br>Elektroujemność (Pauling): <b>${e.e?String(e.e).replace(".",","):"brak danych"}</b><br>Konfiguracja: <b>${config(e.z)}</b><br>Okres: ${per}${r>=9?"":`, grupa: ${c}`} · blok ${blk(e.z)}</p>`}};
// CALCULATORS
function molar(f){f=f.replace(/[·*.]/g,"*").replace(/\s/g,"");const parts=f.split("*");let tot=0;const comp={};
for(let p of parts){let mult=1;const m=p.match(/^(\d+)(.*)$/);if(m){mult=+m[1];p=m[2]}const c=parseF(p);for(const k in c)comp[k]=(comp[k]||0)+c[k]*mult}
for(const k in comp){const e=EL.find(x=>x.s===k);if(!e)throw"Nieznany symbol: "+k;tot+=e.m*comp[k]}return{tot,comp}}
function parseF(s){let i=0;function grp(){const c={};while(i<s.length){const ch=s[i];if(ch==="("||ch==="["){i++;const g=grp();const n=cnt();for(const k in g)c[k]=(c[k]||0)+g[k]*n}else if(ch===")"||ch==="]"){i++;return c}else{const m=s.slice(i).match(/^[A-Z][a-z]?/);if(!m)throw"Błąd we wzorze przy: "+s.slice(i);i+=m[0].length;const n=cnt();c[m[0]]=(c[m[0]]||0)+n}}return c}
function cnt(){const m=s.slice(i).match(/^\d+/);if(m){i+=m[0].length;return+m[0]}return 1}const r=grp();return r}
R.calc=()=>{app.innerHTML=`<div class="card"><h3>Masa molowa</h3><label>Wzór (np. Ca(OH)2, CuSO4*5H2O, K4[Fe(CN)6])</label><input id="mf" value="H2SO4"><div id="mo" class="fb"></div></div>
<div class="card"><h3>Przeliczanie stężeń Cp ⇄ Cm</h3><label>Masa molowa M [g/mol]</label><input id="cM" value="36.5" inputmode="decimal"><label>Gęstość d [g/cm³]</label><input id="cd" value="1.18" inputmode="decimal">
<label>Cp [%]</label><input id="cp" value="36" inputmode="decimal"><label>Cm [mol/dm³]</label><input id="cm" inputmode="decimal"><p class="muted">Wpisz Cp albo Cm – drugie policzy się samo. Cm = Cp·d·1000/(100·M)</p></div>
<div class="card"><h3>pH</h3><label>Typ</label><select id="pt2"><option value="sa">mocny kwas</option><option value="sb">mocna zasada</option><option value="wa">słaby kwas (Ka)</option><option value="wb">słaba zasada (Kb)</option></select>
<label>Stężenie C [mol/dm³]</label><input id="pc" value="0.1" inputmode="decimal"><label>Liczba H⁺/OH⁻ (np. 2 dla Ba(OH)₂)</label><input id="pz" value="1" inputmode="decimal"><label>Ka / Kb (dla słabych, np. 1.8e-5)</label><input id="pk" value="1.8e-5"><div id="po" class="fb"></div></div>`;
const mo=()=>{try{const r=molar($("#mf").value);$("#mo").innerHTML=`<b>M = ${fmt(r.tot)} g/mol</b><br><span class="muted">${Object.entries(r.comp).map(([k,v])=>{const e=EL.find(x=>x.s===k);return`${k}: ${v} × ${e.m} = ${fmt(v*e.m)} (${fmt(100*v*e.m/r.tot)}%)`}).join("<br>")}</span>`}catch(e){$("#mo").textContent=e}};$("#mf").oninput=mo;mo();
const fromCp=()=>{const M=num($("#cM").value),d=num($("#cd").value),cp=num($("#cp").value);if(M&&d&&!isNaN(cp))$("#cm").value=fmt(cp*d*1000/(100*M))};
const fromCm=()=>{const M=num($("#cM").value),d=num($("#cd").value),cm=num($("#cm").value);if(M&&d&&!isNaN(cm))$("#cp").value=fmt(cm*M*100/(d*1000))};
$("#cp").oninput=fromCp;$("#cm").oninput=fromCm;$("#cM").oninput=fromCp;$("#cd").oninput=fromCp;fromCp();
const ph=()=>{const t=$("#pt2").value,C=num($("#pc").value)*(t[0]==="s"?num($("#pz").value)||1:1),K=num($("#pk").value);let x,o;
if(t[0]==="s")x=C;else{x=(-K+Math.sqrt(K*K+4*K*C))/2}// exact quadratic
if(!(x>0)){$("#po").textContent="Podaj poprawne dane";return}
const p=-Math.log10(x),pH=t[1]==="a"?p:14-p;$("#po").innerHTML=`<b>pH = ${fmt(+pH.toFixed(2))}</b> · pOH = ${fmt(+(14-pH).toFixed(2))}<br><span class="muted">[${t[1]==="a"?"H⁺":"OH⁻"}] = ${x.toExponential(3)} mol/dm³${t[0]==="w"?` · α = ${fmt(100*x/C)}% (dokładne rozwiązanie równania kwadratowego)`:""}</span>`};
["#pt2","#pc","#pz","#pk"].forEach(s=>$(s).oninput=ph);ph()};
// AI TUTOR (opcjonalny, własny darmowy klucz)
const SYS="Jesteś cierpliwym korepetytorem chemii przygotowującym Kacpra do matury rozszerzonej z chemii (CKE, formuła 2023). Odpowiadaj po polsku, zwięźle, krok po kroku, z poprawnymi wzorami i jednostkami. Gdy rozwiązujesz zadanie obliczeniowe, pokaż tok rozumowania jak w kluczu CKE. Gdy uczeń przesyła swoje rozwiązanie lub odpowiedź do oceny, ZAWSZE zacznij od „Punkty: X/Y” (wg zasad CKE: zadania zamknięte 1 pkt, obliczeniowe zwykle 2 pkt – metoda i obliczenia z wynikiem i jednostką) i uzasadnij każdy przyznany lub nieprzyznany punkt.";
let hist=[];
async function askAI(text,once){const cfg=LS.get("ai",{prov:"gemini",key:"",model:""});if(!cfg.key)throw"Najpierw wklej darmowy klucz API w ustawieniach poniżej.";
const saved=hist;if(once)hist=[];hist.push({r:"user",t:text});try{
if(cfg.prov==="gemini"){const model=cfg.model||"gemini-2.5-flash";
 const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":cfg.key},body:JSON.stringify({systemInstruction:{parts:[{text:SYS}]},contents:hist.map(m=>({role:m.r==="user"?"user":"model",parts:[{text:m.t}]}))})});
 const j=await r.json();if(!r.ok)throw(j.error?.message||r.status);const out=j.candidates?.[0]?.content?.parts?.map(p=>p.text).join("")||"(brak odpowiedzi)";hist.push({r:"ai",t:out});return out}
const model=cfg.model||"llama-3.3-70b-versatile";
const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+cfg.key},body:JSON.stringify({model,messages:[{role:"system",content:SYS},...hist.map(m=>({role:m.r==="user"?"user":"assistant",content:m.t}))]})});
const j=await r.json();if(!r.ok)throw(j.error?.message||r.status);const out=j.choices[0].message.content;hist.push({r:"ai",t:out});return out}finally{if(once)hist=saved}}
function speak(t){if(!("speechSynthesis"in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t.replace(/[*#_`]/g,""));u.lang="pl-PL";const v=speechSynthesis.getVoices().find(v=>v.lang.startsWith("pl"));if(v)u.voice=v;speechSynthesis.speak(u)}
R.ai=()=>{const cfg=LS.get("ai",{prov:"gemini",key:"",model:""});const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
app.innerHTML=`<div class="card"><h2>🤖 Korepetytor AI</h2><p class="muted">Opcjonalnie: działa z Twoim <b>darmowym</b> kluczem (bez karty). Klucz jest zapisany tylko w tej przeglądarce. Głos: darmowe Web Speech API przeglądarki.</p>
<div id="chat" class="chat"></div><textarea id="ain" rows="3" style="width:100%" placeholder="Zadaj pytanie albo wklej zadanie + swoje rozwiązanie do oceny (dostaniesz punkty X/Y z uzasadnieniem)"></textarea>
<div class="row"><button class="pri" id="asend">Wyślij</button>${SR?`<button id="amic">🎤 Mów</button>`:""}<label style="display:flex;gap:6px;align-items:center;margin:0"><input type="checkbox" id="atts" style="width:auto" ${LS.get("tts",false)?"checked":""}> czytaj odpowiedzi na głos</label></div></div>
<details class="card"><summary><b>⚙️ Ustawienia klucza API</b></summary>
<label>Dostawca</label><select id="aprov"><option value="gemini">Google Gemini (zalecany, darmowy)</option><option value="groq">Groq (zapasowy, darmowy)</option></select>
<label>Klucz API</label><input id="akey" type="password" value="${cfg.key}"><label>Model (puste = domyślny: gemini-2.5-flash / llama-3.3-70b-versatile)</label><input id="amodel" value="${cfg.model}">
<p class="muted">Gemini: wejdź na <a style="color:var(--acc)" href="https://aistudio.google.com/apikey" target="_blank">aistudio.google.com/apikey</a> → „Create API key”. Groq: <a style="color:var(--acc)" href="https://console.groq.com/keys" target="_blank">console.groq.com/keys</a>.</p><button id="asave">Zapisz</button></details>`;
$("#aprov").value=cfg.prov;$("#asave").onclick=()=>{LS.set("ai",{prov:$("#aprov").value,key:$("#akey").value.trim(),model:$("#amodel").value.trim()});alert("Zapisano")};
$("#atts").onchange=e=>LS.set("tts",e.target.checked);
const add=(c,t)=>{const d=document.createElement("div");d.className="msg "+c;d.textContent=t;$("#chat").appendChild(d);$("#chat").scrollTop=1e9;return d};
hist.forEach(m=>add(m.r==="user"?"me":"ai",m.t));
const send=async()=>{const t=$("#ain").value.trim();if(!t)return;$("#ain").value="";add("me",t);const d=add("ai","…");try{const o=await askAI(t);d.textContent=o;if($("#atts").checked)speak(o)}catch(e){hist.pop();d.textContent="⚠️ "+e}};
$("#asend").onclick=send;
if(SR)$("#amic").onclick=()=>{const r=new SR();r.lang="pl-PL";r.onresult=e=>{$("#ain").value=e.results[0][0].transcript;send()};r.onerror=e=>alert("Mikrofon: "+e.error);r.start();$("#amic").textContent="🎙️ Słucham…";r.onend=()=>$("#amic").textContent="🎤 Mów"}};
go(VIEWS[location.hash.slice(1)]?location.hash.slice(1):"start");
