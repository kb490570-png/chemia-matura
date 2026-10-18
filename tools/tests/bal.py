import re
from collections import Counter
def parse(f):
    f=f.replace('–','').replace('=','').replace('≡','')
    def grp(s,i):
        c=Counter()
        while i<len(s):
            ch=s[i]
            if ch in '([':
                sub,i=grp(s,i+1);m=re.match(r'\d+',s[i:]);k=1
                if m:k=int(m.group());i+=len(m.group())
                for e in sub:c[e]+=sub[e]*k
            elif ch in ')]':return c,i+1
            else:
                m=re.match(r'([A-Z][a-z]?)(\d*)',s[i:])
                if not m:i+=1;continue
                c[m.group(1)]+=int(m.group(2) or 1);i+=len(m.group())
        return c,i
    return grp(f,0)[0]
def side(s):
    T=Counter();q=0
    for t in s.split(' + '):
        t=t.strip();m=re.match(r'^(\d+)\s*(.*)$',t);k=int(m.group(1)) if m else 1;f=m.group(2) if m else t
        ch=re.search(r'\^(\d*)([+-])$',f)
        if ch:q+=k*int(ch.group(1) or 1)*(1 if ch.group(2)=='+' else -1);f=f[:ch.start()]
        if f=='e':T['e']+=k;q-=k;continue
        for e,v in parse(f).items():T[e]+=v*k
    return T,q
E="""C2H5OH + 3O2 > 2CO2 + 3H2O
C2H5OH + 2O2 > 2CO + 3H2O
C2H5OH + O2 > 2C + 3H2O
2CH3OH + 3O2 > 2CO2 + 4H2O
2C3H7OH + 9O2 > 6CO2 + 8H2O
C3H7OH + 3O2 > 3CO + 4H2O
2C3H7OH + 3O2 > 6C + 8H2O
2C3H5(OH)3 + 6Na > 2C3H5(ONa)3 + 3H2
CH3CH2OH + CuO > CH3CHO + Cu + H2O
3CH3CH2OH + Cr2O7^2- + 8H^+ > 3CH3CHO + 2Cr^3+ + 7H2O
3C2H5OH + K2Cr2O7 + 4H2SO4 > 3CH3CHO + Cr2(SO4)3 + K2SO4 + 7H2O
3CH3CH2OH + 2Cr2O7^2- + 16H^+ > 3CH3COOH + 4Cr^3+ + 11H2O
3CH3CH(OH)CH3 + Cr2O7^2- + 8H^+ > 3CH3COCH3 + 2Cr^3+ + 7H2O
5CH3CH2OH + 2MnO4^- + 6H^+ > 5CH3CHO + 2Mn^2+ + 8H2O
5CH3CH2OH + 4MnO4^- + 12H^+ > 5CH3COOH + 4Mn^2+ + 11H2O
5C2H5OH + 4KMnO4 + 6H2SO4 > 5CH3COOH + 4MnSO4 + 2K2SO4 + 11H2O
C2H5OH + H2O > CH3COOH + 4H^+ + 4e
MnO4^- + 8H^+ + 5e > Mn^2+ + 4H2O
Cr2O7^2- + 14H^+ + 6e > 2Cr^3+ + 7H2O
5HOCH2CH2OH + 8MnO4^- + 24H^+ > 5HOOCCOOH + 8Mn^2+ + 22H2O
2CH3OH + O2 > 2HCHO + 2H2O
C2H5OH + O2 > CH3COOH + H2O
C3H5(OH)3 + 3HNO3 > C3H5(ONO2)3 + 3H2O
4C3H5(ONO2)3 > 12CO2 + 10H2O + 6N2 + O2
2C3H5(OH)3 + Cu(OH)2 > (C3H5(OH)2O)2Cu + 2H2O
C2H5OH + 4I2 + 6NaOH > CHI3 + HCOONa + 5NaI + 5H2O
C6H6 + CH2CHCH3 > C6H5CH(CH3)2
C6H5CH(CH3)2 + O2 > C6H5C(CH3)2OOH
C6H5C(CH3)2OOH > C6H5OH + CH3COCH3
C6H5Cl + 2NaOH > C6H5ONa + NaCl + H2O
C6H5SO3Na + 2NaOH > C6H5ONa + Na2SO3 + H2O
C6H5ONa + CO2 + H2O > C6H5OH + NaHCO3
C6H5O^- + CO2 + H2O > C6H5OH + HCO3^-
C6H5OH + 3Br2 > C6H2Br3OH + 3HBr
C6H5OH + 3HNO3 > C6H2(NO2)3OH + 3H2O
C6H5OH + HCHO > C6H3(OH)CH2 + H2O
C6H5OH + 3H2 > C6H11OH
C6H5OH + 7O2 > 6CO2 + 3H2O
C6H5OH + CH3COCl > CH3COOC6H5 + HCl
C6H5OH + (CH3CO)2O > CH3COOC6H5 + CH3COOH
C6H12O6 > 2C2H5OH + 2CO2
CO + 2H2 > CH3OH
CH3MgBr + HCHO > CH3CH2OMgBr
CH3CH2OMgBr + H2O > CH3CH2OH + Mg(OH)Br
2CH3CH2OH > C2H5OC2H5 + H2O
CH3CH2OH + H2SO4 > CH3CH2OSO3H + H2O
C6H5OH + Na2CO3 > C6H5ONa + NaHCO3
2CH3COOH + Na2CO3 > 2CH3COONa + CO2 + H2O"""
bad=0
for l in E.split('\n'):
    a,b=l.split(' > ');A,qa=side(a);B,qb=side(b);A.pop('e',0);B.pop('e',0)
    if A!=B or qa!=qb:bad+=1;print('BAD',l,dict(A-B),dict(B-A),qa,qb)
print(len(E.split('\n')),'checked, bad',bad)
