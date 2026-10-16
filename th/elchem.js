TX.elchem=[
{id:"el-pojecia",t:"Półogniwo, potencjał standardowy, szereg elektrochemiczny",pp:"IX.1",h:`
<p><b>Półogniwo</b> – układ elektroda (przewodnik elektronowy) + elektrolit, np. Zn | Zn²⁺. <b>Potencjał standardowy półogniwa E°</b> – SEM ogniwa zbudowanego z danego półogniwa i standardowej elektrody wodorowej (E° = 0 V) w warunkach standardowych (c = 1 mol/dm³, 298 K, 1013 hPa).</p>
<p><b>Szereg elektrochemiczny (napięciowy) metali:</b> Li −3,04; K −2,93; Ca −2,87; Na −2,71; Mg −2,37; Al −1,66; Zn −0,76; Cr −0,74; Fe −0,44; Ni −0,26; Sn −0,14; Pb −0,13; H 0,00; Cu +0,34; Ag +0,80; Hg +0,85; Au +1,50 V.</p>
<ul><li>Im niższy E°, tym silniejszy reduktor (metal łatwiej się utlenia); im wyższy – tym silniejszy utleniacz forma utleniona (Ag⁺, Au³⁺).</li><li>Metale szlachetne – E° &gt; 0 (Cu, Ag, Au, Pt); nieszlachetne – E° &lt; 0.</li></ul>`,
sq:[["Który metal jest silniejszym reduktorem: Zn czy Fe?","Zn (niższy potencjał)."]]},
{id:"el-ogniwa",t:"Ogniwo galwaniczne: schemat, reakcje, SEM",pp:"IX.1–IX.4",h:`
<p><b>Ogniwo galwaniczne</b> – urządzenie, w którym energia reakcji redoks zamienia się w energię elektryczną. <b>Anoda</b> – elektroda, na której zachodzi utlenianie (w ogniwie biegun ujemny −); <b>katoda</b> – redukcja (biegun dodatni +). <b>Klucz elektrolityczny</b> (np. KNO₃, KCl w żelu) zamyka obwód wewnętrzny i zapewnia elektroobojętność roztworów (aniony wędrują do anody, kationy do katody). Elektrony płyną w obwodzie zewnętrznym od anody do katody.</p>
<p class="f">Schemat: (−) Zn | Zn²⁺ || Cu²⁺ | Cu (+) &nbsp;&nbsp; SEM = E°<sub>katody</sub> − E°<sub>anody</sub></p>
<div class="ex"><b>Ogniwo Daniella:</b> A(−): Zn → Zn²⁺ + 2e⁻; K(+): Cu²⁺ + 2e⁻ → Cu; sumarycznie Zn + Cu²⁺ → Zn²⁺ + Cu; SEM = 0,34 − (−0,76) = 1,10 V. Masa anody maleje, katody rośnie; roztwór CuSO₄ blednie.</div>
<div class="ex"><b>Projektowanie ogniwa dla reakcji</b> 2Ag⁺ + Ni → 2Ag + Ni²⁺: anoda Ni | Ni²⁺, katoda Ag | Ag⁺; schemat (−) Ni | Ni²⁺ || Ag⁺ | Ag (+); SEM = 0,80 − (−0,26) = 1,06 V.</div>
<div class="ex"><b>Półogniwo redoks</b> (elektroda obojętna Pt): Pt | Fe³⁺, Fe²⁺ (E° = 0,77 V). Ogniwo (−) Zn | Zn²⁺ || Fe³⁺, Fe²⁺ | Pt (+): Zn + 2Fe³⁺ → Zn²⁺ + 2Fe²⁺, SEM = 1,53 V.</div>
<p><b>Ogniwa odwracalne</b> (akumulatory – można je ładować, reakcja elektrodowa odwracalna: kwasowy akumulator ołowiowy, litowo-jonowy, Ni-MH) i <b>nieodwracalne</b> (np. Leclanchégo – „bateria” cynkowo-węglowa, ogniwo alkaliczne).</p>
<p>Akumulator ołowiowy (rozładowanie): A: Pb + SO₄²⁻ → PbSO₄ + 2e⁻; K: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O. Ogniwa paliwowe (wodorowo-tlenowe): 2H₂ + O₂ → 2H₂O – źródło energii bez emisji CO₂.</p>`,
sq:[["Zapisz schemat i SEM ogniwa Mg–Ag.","(−) Mg | Mg²⁺ || Ag⁺ | Ag (+), SEM = 0,80 + 2,37 = 3,17 V."]]},
{id:"el-elektroliza",t:"Elektroliza – reguły i prawa Faradaya",pp:"IX (elektroliza)",h:`
<p><b>Elektroliza</b> – procesy redoks wymuszone przepływem prądu stałego przez stopiony elektrolit lub roztwór. W elektrolizerze <b>katoda (−) – redukcja</b>, <b>anoda (+) – utlenianie</b>.</p>
<table><tr><th>Elektroda</th><th>Proces w roztworze wodnym</th></tr>
<tr><td>katoda</td><td>kationy metali o E° &gt; ok. −0,8 V (Cu²⁺, Ag⁺, Zn²⁺, Ni²⁺, Pb²⁺) redukują się do metalu; dla K⁺, Na⁺, Ca²⁺, Mg²⁺, Al³⁺ redukuje się woda: 2H₂O + 2e⁻ → H₂ + 2OH⁻; w kwasach: 2H⁺ + 2e⁻ → H₂</td></tr>
<tr><td>anoda obojętna (Pt, C)</td><td>Cl⁻, Br⁻, I⁻, S²⁻ utleniają się (2Cl⁻ → Cl₂ + 2e⁻); aniony tlenowe (SO₄²⁻, NO₃⁻, PO₄³⁻) i F⁻ – nie, utlenia się woda: 2H₂O → O₂ + 4H⁺ + 4e⁻ (w zasadach: 4OH⁻ → O₂ + 2H₂O + 4e⁻)</td></tr>
<tr><td>anoda aktywna (Cu, Ni)</td><td>roztwarza się metal: Cu → Cu²⁺ + 2e⁻ (rafinacja miedzi)</td></tr></table>
<div class="ex"><b>Przykłady:</b> NaCl(stop): K: Na⁺ + e⁻ → Na; A: 2Cl⁻ → Cl₂ + 2e⁻. NaCl(aq): K: H₂, A: Cl₂, w roztworze NaOH (metoda przemysłowa). CuSO₄(aq, Pt): Cu i O₂, roztwór zakwasza się. H₂SO₄(aq), NaOH(aq), Na₂SO₄(aq): elektroliza wody, H₂ : O₂ = 2 : 1. Al₂O₃ w stopionym kriolicie – otrzymywanie glinu.</div>
<p class="f">Prawa Faradaya: m = k·I·t = M·I·t/(z·F); Q = I·t; F = 96 500 C/mol; n(e⁻) = Q/F</p>
<div class="ex"><b>Przykład.</b> Ile minut trzeba prowadzić elektrolizę AgNO₃ prądem 0,50 A, by wydzielić 1,08 g Ag? n = 0,0100 mol e⁻ → Q = 965 C → t = 1930 s = 32,2 min. Ile cm³ O₂ (war. norm.) wydzieli się wtedy na anodzie? n(O₂) = 0,0100/4 = 0,0025 mol → 56 cm³.</div>`,
sq:[["Produkty elektrolizy wodnego roztworu KI (elektrody grafitowe)?","Katoda: H₂ (+OH⁻); anoda: I₂ (brunatnienie)."]]},
{id:"el-korozja",t:"Korozja i ochrona metali",pp:"IX.5a",h:`
<p><b>Korozja elektrochemiczna</b> – niszczenie metalu w wyniku działania mikroogniw powstających na jego powierzchni w obecności elektrolitu (wilgoć + rozpuszczone sole, CO₂, SO₂). Stal i żeliwo (Fe z domieszką C) – ziarna węgla/cementytu są katodami, żelazo anodą.</p>
<p>Anoda: Fe → Fe²⁺ + 2e⁻<br>Katoda (obojętne, natlenione): O₂ + 2H₂O + 4e⁻ → 4OH⁻; (kwasowe): 2H⁺ + 2e⁻ → H₂<br>Dalej: Fe²⁺ + 2OH⁻ → Fe(OH)₂; 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃ → rdza (Fe₂O₃·xH₂O).</p>
<p><b>Ochrona:</b> powłoki niemetaliczne (farby, lakiery, emalie, smary); powłoki metaliczne – <b>anodowe</b> (z metalu aktywniejszego, np. Zn na Fe – po uszkodzeniu dalej chronią, bo Zn koroduje) i <b>katodowe</b> (z metalu szlachetniejszego, np. Sn, Ni, Cr na Fe – po uszkodzeniu przyspieszają korozję Fe); <b>ochrona protektorowa</b> (połączenie z Mg/Zn – kadłuby statków, rurociągi); ochrona katodowa (podłączenie do ujemnego bieguna źródła prądu); inhibitory; pasywacja; stopy (stal nierdzewna – Cr, Ni).</p>`,
sq:[["Dlaczego zarysowana puszka z blachy ocynowanej szybko rdzewieje?","Sn ma wyższy potencjał niż Fe – w mikroogniwie Fe jest anodą i koroduje."]]},
{id:"el-zrodla",t:"Współczesne źródła prądu",pp:"IX.5b",h:`
<ul><li><b>Ogniwo Leclanchégo</b> (cynkowo-węglowe): anoda Zn, katoda C otoczona MnO₂, elektrolit NH₄Cl – nieodwracalne, ~1,5 V.</li><li><b>Ogniwo alkaliczne</b>: Zn | KOH | MnO₂ – większa pojemność.</li><li><b>Akumulator ołowiowy</b> – samochody, ~2 V na ogniwo (6 ogniw = 12 V).</li><li><b>Akumulatory litowo-jonowe</b> – telefony, laptopy, samochody elektryczne; wysoka gęstość energii, brak efektu pamięci.</li><li><b>Ni-MH</b> – zastąpiły Ni-Cd (toksyczny kadm).</li><li><b>Ogniwa paliwowe</b> (H₂/O₂) – produkt: woda.</li><li><b>Ogniwa fotowoltaiczne</b> (krzem) – energia słoneczna.</li></ul>
<p>Zużyte baterie zawierają metale ciężkie (Hg, Cd, Pb) – należy je oddawać do punktów zbiórki.</p>`,
sq:[["Które ogniwo jest odwracalne: Leclanchégo czy ołowiowe?","Ołowiowe (akumulator)."]]},
{id:"el-bledy",t:"⚠️ Typowe błędy (elektrochemia)",pp:"–",h:`<ul><li>„W ogniwie anoda jest dodatnia” – w ogniwie anoda (−), w elektrolizerze anoda (+); zawsze: anoda = utlenianie.</li><li>Wydzielanie Na/K na katodzie przy elektrolizie roztworu wodnego.</li><li>SEM = E°anody − E°katody (wynik ujemny).</li><li>Brak z w prawie Faradaya.</li><li>Utlenianie SO₄²⁻ na anodzie.</li><li>Kierunek elektronów w kluczu elektrolitycznym (w kluczu płyną jony, nie elektrony).</li></ul>`,sq:[]}
];
