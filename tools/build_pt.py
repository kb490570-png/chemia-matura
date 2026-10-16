# Buduje elements.js z danych karty CKE (EM2023, s.15) + konfiguracje z PubChem; porównuje ze starą wersją.
import json,re,math
# --- dane CKE (przepisane z cke15.txt) ---
names="Wodór Hel Lit Beryl Bor Węgiel Azot Tlen Fluor Neon Sód Magnez Glin Krzem Fosfor Siarka Chlor Argon Potas Wapń Skand Tytan Wanad Chrom Mangan Żelazo Kobalt Nikiel Miedź Cynk Gal German Arsen Selen Brom Krypton Rubid Stront Itr Cyrkon Niob Molibden Technet Ruten Rod Pallad Srebro Kadm Ind Cyna Antymon Tellur Jod Ksenon Cez Bar Lantan Cer Prazeodym Neodym Promet Samar Europ Gadolin Terb Dysproz Holm Erb Tul Iterb Lutet Hafn Tantal Wolfram Ren Osm Iryd Platyna Złoto Rtęć Tal Ołów Bizmut Polon Astat Radon Frans Rad Aktyn Tor Protaktyn Uran Neptun Pluton Ameryk Kiur Berkel Kaliforn Einstein Ferm Mendelew Nobel Lorens Rutherford Dubn Seaborg Bohr Has Meitner Darmsztadt Roentgen Kopernik Nihon Flerow Moskow Liwermor Tenes Oganeson".split()
mass="""1,008 4,00 6,94 9,01 10,81 12,01 14,01 16,00 19,00 20,18 22,99 24,31 26,98 28,09 30,97 32,06 35,45 39,95
39,10 40,08 44,96 47,87 50,94 52,00 54,94 55,85 58,93 58,69 63,55 65,38 69,72 72,63 74,92 78,97 79,90 83,80
85,47 87,62 88,91 91,22 92,91 95,95 [97,91] 101,07 102,91 106,42 107,87 112,41 114,82 118,71 121,76 127,60 126,90 131,29
132,91 137,33 138,91 140,12 140,91 144,24 [144,91] 150,36 151,96 157,25 158,93 162,50 164,93 167,26 168,93 173,05 174,97
178,49 180,95 183,84 186,21 190,23 192,22 195,08 196,97 200,59 204,38 207,2 208,98 [208,98] [209,99] [222,02]
[223,02] [226,03] [227,03] 232,04 231,04 238,03 [237,05] [244,06] [243,06] [247,07] [247,07] [251,08] [252,08] [257,10] [258,10] [259,10] [262,11]
[267,12] [268,13] [271,13] [272,14] [270,13] [276,15] [281,16] [280,17] [285,18] [284,18] [289,19] [288,19] [293,20] [292,21] [294,21]""".split()
assert len(names)==118 and len(mass)==118,(len(names),len(mass))
EN={}
def put(zs,vals):
  for z,v in zip(zs,vals.split()):EN[z]=v
put([1],"2,2");put([3,4,5,6,7,8,9],"1,0 1,6 2,0 2,6 3,0 3,4 4,0");put(range(11,18),"0,9 1,3 1,6 1,9 2,2 2,6 3,2")
put(range(19,36),"0,8 1,0 1,4 1,5 1,6 1,7 1,6 1,8 1,9 1,9 1,9 1,7 1,8 2,0 2,2 2,6 3,0")
put(range(37,54),"0,8 1,0 1,2 1,3 1,6 2,2 2,1 2,2 2,3 2,2 1,9 1,7 1,8 2,0 2,1 2,1 2,7")
put([55,56,57]+list(range(72,86)),"0,8 0,9 1,1 1,3 1,5 1,7 1,9 2,2 2,2 2,2 2,4 1,9 1,8 1,8 1,9 2,0 2,2");put([87,88],"0,7 0,9")
SEMI={5,14,32,33,51,52,85};NON={1,6,7,8,9,15,16,17,34,35,53};NOBLE={2,10,18,36,54,86}
def cat(z):
  if z in SEMI:return"pm"
  if z in NON:return"nm"
  if z in NOBLE:return"gs"
  if z>=110:return"bp"
  return"m"
def pos(z):
  if 58<=z<=71:return(z-58+4,9)   # wiersz lantanowców (kolumny 4-17), La w gr. 3 jak na karcie CKE
  if 90<=z<=103:return(z-90+4,10)
  P=[(1,1),(3,2),(11,3),(19,4),(37,5),(55,6),(87,7),(119,8)]
  for i in range(7):
    a,p=P[i];b=P[i+1][0]-1
    if a<=z<=b:
      k=z-a;n=b-a+1
      if n==2:return((1,18)[k],1)
      if n==8:return(k+1 if k<2 else k+11,p)
      if n==18:return(k+1,p)
      # n==32: s2, La/Ac (gr3), f(14) osobno, potem gr 4..18
      if k<3:return(k+1,p)
      return(k-14+1,p)   # k>=17 -> gr 4..
sup=str.maketrans("0123456789","⁰¹²³⁴⁵⁶⁷⁸⁹")
pc={int(r['Cell'][0]):r['Cell'] for r in json.load(open('pubchem_pt.json'))['Table']['Row']}
order="1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p".split()
def conf(z):
  raw=re.sub(r"\(.*?\)","",pc[z][5]).strip()
  m=re.match(r"(\[\w+\])?\s*(.*)",raw);core=m.group(1)or"";parts=re.findall(r"(\d[spdf])(\d+)",m.group(2))
  parts.sort(key=lambda x:order.index(x[0]))
  return(core+" " if core else "")+" ".join(s+n.translate(sup) for s,n in parts)
out=[];rows=[]
for z in range(1,119):
  sym=pc[z][1];g,p=pos(z)
  m=mass[z-1];rad=m.startswith("[");mv=float(m.strip("[]").replace(",","."))
  pm=float(pc[z][3]);
  rows.append(dict(z=z,s=sym,n=names[z-1],m=m.strip("[]"),r=rad,mv=mv,e=EN.get(z),g=g,p=p,c=cat(z),cf=conf(z),pubm=pm))
# --- weryfikacje ---
from collections import Counter
cells=Counter((r['g'],r['p']) for r in rows);assert max(cells.values())==1,"kolizja pozycji"
for r in rows:
  if not r['r'] and abs(r['mv']-r['pubm'])>0.02:print("UWAGA masa CKE vs PubChem",r['s'],r['mv'],r['pubm'])
  pe=pc[r['z']][6]
  if r['e'] and pe and abs(float(r['e'].replace(',','.'))-float(pe))>0.06:print("EN CKE vs PubChem",r['s'],r['e'],pe)
# główne grupy – kontrola
for s,g,p in[("H",1,1),("He",18,1),("B",13,2),("Al",13,3),("Sc",3,4),("La",3,6),("Ac",3,7),("Hf",4,6),("Rf",4,7),("Ce",4,9),("Lu",17,9),("Th",4,10),("Lr",17,10),("Og",18,7),("Hg",12,6),("Rn",18,6)]:
  r=next(x for x in rows if x['s']==s);assert(r['g'],r['p'])==(g,p),(s,r['g'],r['p'])
json.dump([{k:r[k] for k in("z","s","n","m","r","e","g","p","c","cf")} for r in rows],open('pt.json','w'),ensure_ascii=False)
print("OK",len(rows))
