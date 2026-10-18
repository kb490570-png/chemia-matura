const p=require('puppeteer-core');const U=process.argv[2];const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});const g=await b.newPage();await g.setViewport({width:820,height:1180,deviceScaleFactor:2});
await g.evaluateOnNewDocument(()=>{localStorage.setItem('ksSkip','1');localStorage.setItem('ai',JSON.stringify({prov:'gemini',key:'AQ.test',gkey:'AQ.test'}))});
const errs=[];g.on('pageerror',e=>errs.push(e.message));let calls=0,img=0;
await g.setRequestInterception(true);g.on('request',r=>{if(!/googleapis/.test(r.url()))return r.continue();const H={'access-control-allow-origin':'*','access-control-allow-headers':'*'};if(r.method()==='OPTIONS')return r.respond({status:204,headers:H});
 calls++;const body=JSON.parse(r.postData());if(body.contents[0].parts.some(x=>x.inline_data))img++;const pr=body.contents[0].parts[0].text;const k=(pr.match(/^K\d+ \(max/gm)||[]).length;
 const t=JSON.stringify({odczyt:"odczyt testowy",kryteria:Array.from({length:k},(_,i)=>({pkt:i?0:1,uzasadnienie:"uzasadnienie K"+(i+1)})),wskazowki:"wskazówka",czytelne:true});
 r.respond({status:200,contentType:'application/json',headers:H,body:JSON.stringify({candidates:[{content:{parts:[{text:t}]}}]})})});
const R={};
await g.goto(U+'#th',{waitUntil:'networkidle0'});
R.counts=await g.evaluate(()=>({Q:Q.length,afQ:Q.filter(q=>q.af).length,afNum:Q.filter(q=>q.af&&'n' in q).length,OQ:OQ.length,afOQ:OQ.filter(q=>q.af).length,FC:FC.length,afSec:TX.org2.filter(x=>/^af-/.test(x.id)).length}));
await g.evaluate(()=>{document.querySelector('details.th[data-k=org2]').open=true});await sleep(300);
await g.evaluate(()=>{const d=document.querySelector('details.ths[data-id=af-mapa]');d.open=true;d.scrollIntoView()});await sleep(400);await g.screenshot({path:'/workspace/alk_fenol2.png'});
// test mode button
await g.goto(U+'#quiz',{waitUntil:'networkidle0'});await g.select('#qn','999');R.btn=await g.$eval('#qaf',e=>e.innerText);await g.click('#qaf');await sleep(200);
R.mode=await g.evaluate(()=>({n:qz.list.length,allAf:qz.list.every(q=>q.af)}));
// closed auto
await g.evaluate(()=>{qz.list=Q.filter(q=>q.af&&q.o).slice(-3).concat(Q.filter(q=>q.af&&'n' in q).slice(-2));qz.i=0;qz.pts=0;qz.max=0;qz.ok=0;showQ()});await sleep(200);
R.closedSelf=!!await g.$('#self');await g.click('.opt');await sleep(100);R.closed=await g.$eval('#fb',e=>e.innerText.split('\n').slice(0,3).join(' | '));
// skip to numeric
await g.evaluate(()=>{qz.i=3;showQ()});await sleep(200);R.numPre=await g.evaluate(()=>({canvas:!!document.querySelector('#qcv canvas'),sol:document.querySelector('#fb').innerText,self:!!document.querySelector('#self')}));
const cv=await g.$('#qcv canvas');await g.evaluate(()=>document.querySelector('#qcv canvas').scrollIntoView({block:'center'}));const bx=await cv.boundingBox();await g.mouse.move(bx.x+40,bx.y+40);await g.mouse.down();await g.mouse.move(bx.x+180,bx.y+90,{steps:6});await g.mouse.up();
await g.type('#na','7');await g.click('#nb');await g.waitForSelector('#nx',{timeout:20000});R.num=await g.$eval('#fb',e=>e.innerText.slice(0,260));
// open af task
await g.goto(U+'#p100',{waitUntil:'networkidle0'});await g.evaluate(()=>showOpen(OQ.findIndex(q=>q.af&&/CaC₂/.test(q.q))));await sleep(300);
R.openPre=await g.evaluate(()=>({res:document.querySelector('.res').innerText,cb:document.querySelectorAll('.res input[type=checkbox]').length}));
const c2=await g.$('.cvh canvas');await g.evaluate(()=>document.querySelector('.cvh canvas').scrollIntoView({block:'center'}));const b2=await c2.boundingBox();await g.mouse.move(b2.x+40,b2.y+40);await g.mouse.down();await g.mouse.move(b2.x+200,b2.y+100,{steps:6});await g.mouse.up();
await g.click('.chk');await g.waitForFunction(()=>document.querySelector('.res').innerText.includes('pkt'),{timeout:20000});R.open=await g.$eval('.res',e=>e.innerText.slice(0,300));
R.og=await g.evaluate(()=>{const o=JSON.parse(localStorage.og);const k=Object.keys(o)[0];return k+':'+o[k].pts+'/'+o[k].max+' ai='+o[k].ai});
R.calls=calls;R.withImage=img;R.errs=errs;console.log(JSON.stringify(R,null,1));await b.close()})();
