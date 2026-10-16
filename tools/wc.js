const fs=require('fs');global.TX={};for(const f of fs.readdirSync(__dirname+'/../th'))eval(fs.readFileSync(__dirname+'/../th/'+f,'utf8'));
const w=s=>s.replace(/<[^>]+>/g,' ').split(/\s+/).filter(x=>/[\wąęółśżźćń]/i.test(x)).length;
const old={atom:160,uklad:135,wiaz:135,stech:113,roztw:114,kin:132,kw:136,redoks:151,elchem:141,nieorg:141,org1:131,org2:137,org3:135};let T=0;
for(const k in old){const s=TX[k]||[];const n=s.reduce((a,x)=>a+w(x.t+' '+x.h+' '+x.sq.map(q=>q.join(' ')).join(' ')),0);T+=n;console.log(k.padEnd(7),old[k],'→',n,(n/old[k]).toFixed(1)+'x',s.length+' sekcji')}console.log('TOTAL 1761 →',T,(T/1761).toFixed(1)+'x');
