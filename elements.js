// symbol,name,mass,EN(Pauling or null),group,period
const EL=`H,Wodór,1.008,2.20
He,Hel,4.003,
Li,Lit,6.94,0.98
Be,Beryl,9.012,1.57
B,Bor,10.81,2.04
C,Węgiel,12.011,2.55
N,Azot,14.007,3.04
O,Tlen,15.999,3.44
F,Fluor,18.998,3.98
Ne,Neon,20.180,
Na,Sód,22.990,0.93
Mg,Magnez,24.305,1.31
Al,Glin,26.982,1.61
Si,Krzem,28.085,1.90
P,Fosfor,30.974,2.19
S,Siarka,32.06,2.58
Cl,Chlor,35.45,3.16
Ar,Argon,39.95,
K,Potas,39.098,0.82
Ca,Wapń,40.078,1.00
Sc,Skand,44.956,1.36
Ti,Tytan,47.867,1.54
V,Wanad,50.942,1.63
Cr,Chrom,51.996,1.66
Mn,Mangan,54.938,1.55
Fe,Żelazo,55.845,1.83
Co,Kobalt,58.933,1.88
Ni,Nikiel,58.693,1.91
Cu,Miedź,63.546,1.90
Zn,Cynk,65.38,1.65
Ga,Gal,69.723,1.81
Ge,German,72.630,2.01
As,Arsen,74.922,2.18
Se,Selen,78.971,2.55
Br,Brom,79.904,2.96
Kr,Krypton,83.798,3.00
Rb,Rubid,85.468,0.82
Sr,Stront,87.62,0.95
Y,Itr,88.906,1.22
Zr,Cyrkon,91.224,1.33
Nb,Niob,92.906,1.6
Mo,Molibden,95.95,2.16
Tc,Technet,98,1.9
Ru,Ruten,101.07,2.2
Rh,Rod,102.91,2.28
Pd,Pallad,106.42,2.20
Ag,Srebro,107.87,1.93
Cd,Kadm,112.41,1.69
In,Ind,114.82,1.78
Sn,Cyna,118.71,1.96
Sb,Antymon,121.76,2.05
Te,Tellur,127.60,2.1
I,Jod,126.90,2.66
Xe,Ksenon,131.29,2.6
Cs,Cez,132.91,0.79
Ba,Bar,137.33,0.89
La,Lantan,138.91,1.10
Ce,Cer,140.12,1.12
Pr,Prazeodym,140.91,1.13
Nd,Neodym,144.24,1.14
Pm,Promet,145,1.13
Sm,Samar,150.36,1.17
Eu,Europ,151.96,1.2
Gd,Gadolin,157.25,1.20
Tb,Terb,158.93,1.1
Dy,Dysproz,162.50,1.22
Ho,Holm,164.93,1.23
Er,Erb,167.26,1.24
Tm,Tul,168.93,1.25
Yb,Iterb,173.05,1.1
Lu,Lutet,174.97,1.27
Hf,Hafn,178.49,1.3
Ta,Tantal,180.95,1.5
W,Wolfram,183.84,2.36
Re,Ren,186.21,1.9
Os,Osm,190.23,2.2
Ir,Iryd,192.22,2.20
Pt,Platyna,195.08,2.28
Au,Złoto,196.97,2.54
Hg,Rtęć,200.59,2.00
Tl,Tal,204.38,1.62
Pb,Ołów,207.2,2.33
Bi,Bizmut,208.98,2.02
Po,Polon,209,2.0
At,Astat,210,2.2
Rn,Radon,222,2.2
Fr,Frans,223,0.7
Ra,Rad,226,0.9
Ac,Aktyn,227,1.1
Th,Tor,232.04,1.3
Pa,Protaktyn,231.04,1.5
U,Uran,238.03,1.38
Np,Neptun,237,1.36
Pu,Pluton,244,1.28
Am,Ameryk,243,1.13
Cm,Kiur,247,1.28
Bk,Berkel,247,1.3
Cf,Kaliforn,251,1.3
Es,Einstein,252,1.3
Fm,Ferm,257,1.3
Md,Mendelew,258,1.3
No,Nobel,259,1.3
Lr,Lorens,266,
Rf,Rutherford,267,
Db,Dubn,268,
Sg,Seaborg,269,
Bh,Bohr,270,
Hs,Has,269,
Mt,Meitner,278,
Ds,Darmsztadt,281,
Rg,Roentgen,282,
Cn,Kopernik,285,
Nh,Nihon,286,
Fl,Flerow,289,
Mc,Moskow,290,
Lv,Liwermor,293,
Ts,Tenes,294,
Og,Oganeson,294,`.split("\n").map((l,i)=>{const[s,n,m,e]=l.split(",");return{z:i+1,s,n,m:+m,e:e?+e:null}});
const SUB=["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"];
const CAP={s:2,p:6,d:10,f:14};
const EXC={24:"[Ar] 4s¹ 3d⁵",29:"[Ar] 4s¹ 3d¹⁰",41:"[Kr] 5s¹ 4d⁴",42:"[Kr] 5s¹ 4d⁵",44:"[Kr] 5s¹ 4d⁷",45:"[Kr] 5s¹ 4d⁸",46:"[Kr] 4d¹⁰",47:"[Kr] 5s¹ 4d¹⁰",57:"[Xe] 6s² 5d¹",58:"[Xe] 6s² 4f¹ 5d¹",64:"[Xe] 6s² 4f⁷ 5d¹",78:"[Xe] 6s¹ 4f¹⁴ 5d⁹",79:"[Xe] 6s¹ 4f¹⁴ 5d¹⁰",89:"[Rn] 7s² 6d¹",90:"[Rn] 7s² 6d²",91:"[Rn] 7s² 5f² 6d¹",92:"[Rn] 7s² 5f³ 6d¹",93:"[Rn] 7s² 5f⁴ 6d¹",96:"[Rn] 7s² 5f⁷ 6d¹"};
const SUP=n=>String(n).split("").map(d=>"⁰¹²³⁴⁵⁶⁷⁸⁹"[d]).join("");
const NOBLE=[[86,"Rn"],[54,"Xe"],[36,"Kr"],[18,"Ar"],[10,"Ne"],[2,"He"]];
function config(z){if(EXC[z])return EXC[z];let left=z,parts=[];for(const s of SUB){if(!left)break;const k=Math.min(CAP[s[1]],left);parts.push([s,k]);left-=k}
 let core=NOBLE.find(([nz])=>nz<z);let start=0,acc=0;if(core){for(let i=0;i<parts.length;i++){acc+=parts[i][1];if(acc===core[0]){start=i+1;break}}}
 return (core?"["+core[1]+"] ":"")+parts.slice(start).map(([s,k])=>s+SUP(k)).join(" ")}
function pos(z){if(z===1)return[1,1];if(z===2)return[18,1];const P=[[3,10,2],[11,18,3],[19,36,4],[37,54,5],[55,86,6],[87,118,7]];
 for(const[a,b,p]of P)if(z>=a&&z<=b){let i=z-a;if(p<=3){return[i<2?i+1:i+11,p]}
 if(p<=5)return[i+1,p];if(i<2)return[i+1,p];if(i<17)return[i-2+3,p+3];/*lanth/act row*/return[i-14+1+0,p]}}
// fix f-block: z 57-71 / 89-103 go to rows 9/10 cols 3..17; others normal
function pos2(z){const f=(z>=57&&z<=71)||(z>=89&&z<=103);if(f)return[z-(z<80?57:89)+3,z<80?9:10];
 if(z>71&&z<87)return[z-72+4,6];if(z>103)return[z-104+4,7];return pos(z)}
