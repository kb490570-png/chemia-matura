var TX={};
TX.atom=[
{id:"atom-skladniki",t:"Składniki atomu, nuklidy, izotopy",pp:"I.1, I.3",h:`
<p><b>Atom</b> składa się z dodatnio naładowanego <b>jądra</b> (protony p⁺ i neutrony n⁰ – wspólnie <b>nukleony</b>) oraz z <b>elektronów</b> e⁻ tworzących chmurę elektronową. Prawie cała masa atomu skupiona jest w jądrze (masa protonu ≈ masa neutronu ≈ 1 u, masa elektronu ≈ 1/1836 u).</p>
<ul><li><b>Liczba atomowa Z</b> – liczba protonów w jądrze (= liczba elektronów w obojętnym atomie); wyznacza miejsce pierwiastka w układzie okresowym.</li>
<li><b>Liczba masowa A</b> – liczba nukleonów (A = Z + N, gdzie N – liczba neutronów). Zapis nuklidu: <sup>A</sup><sub>Z</sub>E, np. <sup>35</sup><sub>17</sub>Cl.</li>
<li><b>Nuklid</b> – zbiór atomów o określonej liczbie protonów i neutronów (określonym Z i A).</li>
<li><b>Izotopy</b> – nuklidy tego samego pierwiastka (to samo Z), różniące się liczbą neutronów (różne A). Mają praktycznie jednakowe właściwości chemiczne, różnią się właściwościami fizycznymi (masa, gęstość, trwałość jądra). Przykłady: <sup>1</sup>H (prot), <sup>2</sup>H (deuter, D), <sup>3</sup>H (tryt, T); <sup>12</sup>C, <sup>13</sup>C, <sup>14</sup>C.</li>
<li><b>Izobary</b> – nuklidy o tej samej liczbie masowej, a różnej liczbie atomowej (np. <sup>40</sup>Ar i <sup>40</sup>Ca).</li></ul>
<h4>Masa atomowa (średnia)</h4><p>Masa atomowa pierwiastka podana w układzie okresowym to <b>średnia ważona</b> mas jego izotopów z uwzględnieniem ich zawartości procentowej (rozpowszechnienia w przyrodzie):</p>
<p class="f">m<sub>at</sub> = (A₁·x₁ + A₂·x₂ + …)/100%</p>
<div class="ex"><b>Przykład.</b> Miedź: 69,2% <sup>63</sup>Cu (62,93 u) i 30,8% <sup>65</sup>Cu (64,93 u). m = 0,692·62,93 + 0,308·64,93 = 43,55 + 20,00 = 63,55 u ✔ (zgodnie z kartą CKE).</div>
<div class="ex"><b>Zadanie odwrotne.</b> Gal ma masę 69,72 u i izotopy <sup>69</sup>Ga (68,93 u) i <sup>71</sup>Ga (70,92 u). x·68,93 + (1−x)·70,92 = 69,72 → 70,92 − 1,99x = 69,72 → x = 0,603 → 60,3% <sup>69</sup>Ga, 39,7% <sup>71</sup>Ga.</div>
<p><b>Jednostka masy atomowej</b> 1 u = 1/12 masy atomu <sup>12</sup>C ≈ 1,66·10⁻²⁴ g.</p>`,
sq:[["Ile protonów, neutronów i elektronów zawiera jon ⁵⁶Fe³⁺?","26 p⁺, 30 n⁰, 23 e⁻."],["Czy ⁴⁰K i ⁴⁰Ca to izotopy?","Nie – to izobary (różne Z, to samo A)."]]},
{id:"atom-mol",t:"Mol, stała Avogadra, masa molowa",pp:"I.1, I.2",h:`
<p><b>Mol</b> – jednostka liczności materii; 1 mol zawiera <b>N<sub>A</sub> = 6,02·10²³</b> drobin (atomów, cząsteczek, jonów, elektronów). <b>Masa molowa M</b> [g/mol] liczbowo równa jest masie atomowej/cząsteczkowej w u.</p>
<p class="f">n = m/M = N/N<sub>A</sub> = V/V<sub>m</sub> (gazy, warunki normalne: V<sub>m</sub> = 22,4 dm³/mol)</p>
<div class="ex"><b>Przykład.</b> M(Ca₃(PO₄)₂) = 3·40,08 + 2·30,97 + 8·16,00 = 120,24 + 61,94 + 128,00 = 310,18 g/mol. Ile atomów tlenu jest w 3,10 g? n = 0,0100 mol → atomów O = 8·0,0100·6,02·10²³ = 4,82·10²² .</div>
<p><b>Uwaga CKE:</b> masy molowe odczytuj z karty „Wybrane wzory i stałe” (dokładność 0,01) – używaj tych wartości, chyba że polecenie każe zaokrąglić do liczb całkowitych.</p>`,
sq:[["Ile cząsteczek zawiera 11,2 dm³ CO₂ (war. normalne)?","0,5 mol → 3,01·10²³ cząsteczek."]]},
{id:"atom-jadrowe",t:"Promieniotwórczość i reakcje jądrowe",pp:"I.4 (oraz okres półtrwania)",h:`
<p>Jądra nietrwałe ulegają samorzutnym przemianom promieniotwórczym. W każdym równaniu jądrowym obowiązuje <b>zasada zachowania liczby masowej i ładunku</b> (suma A i suma Z po obu stronach są równe).</p>
<table><tr><th>Przemiana</th><th>Cząstka</th><th>Zmiana A</th><th>Zmiana Z</th><th>Przykład</th></tr>
<tr><td>α</td><td>⁴₂He</td><td>−4</td><td>−2</td><td>²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He</td></tr>
<tr><td>β⁻</td><td>⁰₋₁e (n → p + e⁻ + antyneutrino)</td><td>0</td><td>+1</td><td>¹⁴₆C → ¹⁴₇N + ⁰₋₁e</td></tr>
<tr><td>β⁺</td><td>⁰₊₁e (p → n + e⁺ + neutrino)</td><td>0</td><td>−1</td><td>¹¹₆C → ¹¹₅B + ⁰₊₁e</td></tr>
<tr><td>γ</td><td>foton</td><td>0</td><td>0</td><td>towarzyszy α/β</td></tr></table>
<p><b>Sztuczne reakcje jądrowe</b> – bombardowanie jąder cząstkami: Rutherford (1919): ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H; Joliot-Curie: ²⁷₁₃Al + ⁴₂He → ³⁰₁₅P + ¹₀n; rozszczepienie: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n.</p>
<h4>Okres półtrwania</h4><p><b>T<sub>½</sub></b> – czas, po którym rozpada się połowa początkowej liczby jąder danego nuklidu. m = m₀·(½)<sup>t/T½</sup>. Po n okresach pozostaje (½)ⁿ masy.</p>
<div class="ex"><b>Przykład.</b> T<sub>½</sub>(¹³¹I) = 8 dni. Po 32 dniach z 80 mg pozostaje 80·(½)⁴ = 5 mg. <b>Seria rozpadów</b>: ²³⁸U → ²⁰⁶Pb: ΔA = 32 → 8 α (ΔZ = −16), Z: 92 − 16 = 76, a Pb ma 82 → 6 β⁻.</div>
<p><b>Pułapka:</b> rozpad nie jest liniowy – po 2T<sub>½</sub> zostaje 25%, nie 0%.</p>`,
sq:[["Uzupełnij: ²³⁹₉₄Pu → ? + ⁴₂He","²³⁵₉₂U"],["Ile % nuklidu rozpadnie się po 3 okresach półtrwania?","87,5% (zostaje 12,5%)."]]},
{id:"atom-kwant",t:"Liczby kwantowe, orbitale, spin",pp:"II.1",h:`
<p>Stan elektronu w atomie opisują cztery liczby kwantowe:</p>
<table><tr><th>Liczba</th><th>Symbol</th><th>Wartości</th><th>Opisuje</th></tr>
<tr><td>główna</td><td>n</td><td>1, 2, 3, …</td><td>powłokę (K, L, M, N…), energię i rozmiar orbitalu</td></tr>
<tr><td>poboczna</td><td>l</td><td>0 … n−1</td><td>podpowłokę i kształt orbitalu: l=0 s (kula), 1 p (ósemka), 2 d, 3 f</td></tr>
<tr><td>magnetyczna</td><td>m (m<sub>l</sub>)</td><td>−l … 0 … +l</td><td>orientację orbitalu; liczba orbitali w podpowłoce = 2l+1</td></tr>
<tr><td>magnetyczna spinowa</td><td>m<sub>s</sub></td><td>+½, −½</td><td>spin elektronu</td></tr></table>
<ul><li><b>Powłoka</b> – zbiór stanów o tym samym n; mieści 2n² elektronów (K 2, L 8, M 18, N 32).</li><li><b>Podpowłoka</b> – stany o tych samych n i l; s – 1 orbital (2 e⁻), p – 3 (6 e⁻), d – 5 (10 e⁻), f – 7 (14 e⁻).</li><li><b>Stan orbitalny (orbital)</b> – określony trójką n, l, m.</li></ul>
<div class="ex"><b>Przykład.</b> Elektron 3p może mieć: n = 3, l = 1, m ∈ {−1, 0, 1}, m<sub>s</sub> = ±½ → 6 możliwych zestawów. Orbital 4d: n=4, l=2.</div>`,
sq:[["Ile orbitali ma podpowłoka o l = 3?","7 (podpowłoka f)."],["Czy możliwy jest zestaw n=2, l=2?","Nie – l ≤ n−1, więc dla n=2 l ∈ {0,1}."]]},
{id:"atom-konfig",t:"Konfiguracje elektronowe (do Z = 38) i jonów",pp:"II.2, II.3",h:`
<p><b>Zakaz Pauliego:</b> w atomie nie mogą istnieć dwa elektrony o identycznych wszystkich czterech liczbach kwantowych (na orbitalu max 2 e⁻ o przeciwnych spinach). <b>Reguła Hunda:</b> elektrony obsadzają orbitale tej samej podpowłoki najpierw pojedynczo, z równoległymi spinami. <b>Reguła minimum energii (Madelunga n+l):</b> 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p…</p>
<table><tr><th>Pierwiastek</th><th>pełna</th><th>skrócona</th></tr>
<tr><td>₈O</td><td>1s²2s²2p⁴</td><td>[He]2s²2p⁴</td></tr><tr><td>₁₆S</td><td>1s²2s²2p⁶3s²3p⁴</td><td>[Ne]3s²3p⁴</td></tr>
<tr><td>₂₄Cr ★</td><td>1s²2s²2p⁶3s²3p⁶4s¹3d⁵</td><td>[Ar]4s¹3d⁵</td></tr><tr><td>₂₆Fe</td><td>…4s²3d⁶</td><td>[Ar]4s²3d⁶</td></tr>
<tr><td>₂₉Cu ★</td><td>…4s¹3d¹⁰</td><td>[Ar]4s¹3d¹⁰</td></tr><tr><td>₃₅Br</td><td>…4s²3d¹⁰4p⁵</td><td>[Ar]4s²3d¹⁰4p⁵</td></tr><tr><td>₃₈Sr</td><td>…5s²</td><td>[Kr]5s²</td></tr></table>
<p>★ promocja elektronu – półzapełniona (d⁵) lub całkowicie zapełniona (d¹⁰) podpowłoka jest energetycznie korzystna. CKE dopuszcza zapis podpowłok w kolejności zapełniania (4s²3d⁶) lub wg n (3d⁶4s²).</p>
<p><b>Schemat klatkowy</b> (np. N): 1s [↑↓] 2s [↑↓] 2p [↑][↑][↑] – trzy niesparowane elektrony.</p>
<h4>Jony</h4><ul><li>Aniony: dodajemy elektrony: Cl⁻ [Ne]3s²3p⁶ = [Ar]; S²⁻ = [Ar].</li><li>Kationy bloku s/p: usuwamy z ostatniej powłoki: Al³⁺ [Ne].</li><li><b>Kationy metali przejściowych: najpierw usuwamy elektrony 4s, potem 3d!</b> Fe²⁺ [Ar]3d⁶, Fe³⁺ [Ar]3d⁵, Cu⁺ [Ar]3d¹⁰, Cu²⁺ [Ar]3d⁹, Mn²⁺ [Ar]3d⁵, Zn²⁺ [Ar]3d¹⁰, Cr³⁺ [Ar]3d³.</li></ul>
<p><b>Elektrony walencyjne:</b> blok s, p – elektrony ostatniej powłoki (ns, np); blok d – ns + (n−1)d (np. Mn: 4s²3d⁵ – 7 e⁻ walencyjnych). <b>Drobiny izoelektronowe</b> – ta sama liczba elektronów (Na⁺, Mg²⁺, F⁻, O²⁻, Ne).</p>
<p><b>Paramagnetyzm</b> – drobina z niesparowanymi elektronami (O₂, Fe³⁺); diamagnetyzm – wszystkie sparowane (Zn²⁺).</p>`,
sq:[["Konfiguracja Mn²⁺ i liczba niesparowanych elektronów?","[Ar]3d⁵, 5 niesparowanych."],["Który jon: Fe²⁺ czy Fe³⁺ ma trwalszą konfigurację i dlaczego?","Fe³⁺ – półzapełniona podpowłoka 3d⁵."]]},
{id:"atom-bloki",t:"Bloki s, p, d a położenie w układzie i właściwości",pp:"II.4",h:`
<ul><li><b>Numer okresu</b> = liczba powłok elektronowych (największe n).</li><li><b>Grupa:</b> blok s – grupa 1–2 (liczba e⁻ walencyjnych); blok p – grupa = 10 + liczba e⁻ walencyjnych (ns+np), np. S: 6 → grupa 16; blok d – grupa = liczba elektronów ns + (n−1)d (Mn: 7 → grupa 7).</li><li><b>Blok</b> – podpowłoka, na którą trafia ostatni elektron (wg reguły zapełniania).</li></ul>
<div class="ex"><b>Przykład.</b> [Ar]4s²3d¹⁰4p³ → okres 4, blok p, 5 e⁻ walencyjnych → grupa 15 → arsen.</div>
<p>Związek budowy z właściwościami – patrz dział „Układ okresowy” (promień, energia jonizacji, elektroujemność, charakter metaliczny).</p>`,
sq:[["Pierwiastek ma konfigurację [Kr]5s². Okres, grupa, blok?","Okres 5, grupa 2, blok s – stront."]]},
{id:"atom-bledy",t:"⚠️ Typowe błędy (budowa atomu)",pp:"–",h:`<ul><li>Usuwanie elektronów 3d przed 4s przy tworzeniu kationów (Fe²⁺ to [Ar]3d⁶, nie [Ar]4s²3d⁴).</li><li>Pomijanie wyjątków Cr, Cu.</li><li>Mylenie liczby masowej (całkowita) z masą atomową (średnia, ułamkowa).</li><li>Niezgodność sumy A lub Z w równaniu jądrowym.</li><li>W schemacie klatkowym: sparowanie elektronów p zanim każdy orbital ma jeden elektron (łamanie reguły Hunda).</li><li>Liczba neutronów z masy atomowej zamiast z liczby masowej.</li></ul>`,sq:[]}
];

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

TX.kin=[
{id:"kn-szybkosc",t:"Szybkość reakcji i czynniki",pp:"IV.1, IV.2",h:`
<p><b>Szybkość reakcji</b> – zmiana stężenia substratu lub produktu w jednostce czasu: v = −Δc<sub>substratu</sub>/Δt = Δc<sub>produktu</sub>/Δt [mol·dm⁻³·s⁻¹]. Dla aA + bB → cC: v = −(1/a)Δ[A]/Δt = (1/c)Δ[C]/Δt.</p>
<p><b>Teoria zderzeń:</b> reakcja zachodzi przy zderzeniu efektywnym – cząsteczki mają energię ≥ E<sub>a</sub> i właściwą orientację.</p>
<table><tr><th>Czynnik</th><th>Wpływ</th><th>Wyjaśnienie</th></tr>
<tr><td>stężenie (ciśnienie gazów)</td><td>↑</td><td>więcej zderzeń w jednostce czasu</td></tr><tr><td>temperatura</td><td>↑ (reguła van't Hoffa: ~2–4× na 10 K)</td><td>więcej cząsteczek o energii ≥ E<sub>a</sub>, częstsze zderzenia</td></tr>
<tr><td>rozdrobnienie</td><td>↑</td><td>większa powierzchnia kontaktu (reakcje heterogeniczne)</td></tr><tr><td>katalizator</td><td>↑</td><td>inna droga reakcji o niższej E<sub>a</sub></td></tr><tr><td>inhibitor</td><td>↓</td><td>spowalnia (np. przeciwutleniacze)</td></tr></table>
<div class="ex"><b>Doświadczenia:</b> Zn (granulki vs pył) + HCl – pył reaguje szybciej (szybsze wydzielanie gazu); Na₂S₂O₃ + HCl w różnych stężeniach/temperaturach – czas pojawienia się zmętnienia siarką (S₂O₃²⁻ + 2H⁺ → S↓ + SO₂ + H₂O); H₂O₂ z MnO₂ i bez – szybkie wydzielanie O₂ (tląca się łuczywo zapala się).</div>
<div class="ex"><b>Przykład.</b> W reakcji 2SO₂ + O₂ → 2SO₃ stężenie O₂ zmalało o 0,030 mol/dm³ w 60 s: v(O₂) = 5,0·10⁻⁴; v(SO₂) = 1,0·10⁻³; v(SO₃) = 1,0·10⁻³ mol·dm⁻³·s⁻¹.</div>`,
sq:[["Wzrost T o 30 K przy γ = 3 – ile razy wzrośnie v?","3³ = 27 razy."]]},
{id:"kn-rownanie",t:"Równanie kinetyczne i rząd reakcji",pp:"IV.3 (+ okres półtrwania)",h:`
<p>Dla aA + bB → produkty: <b>v = k·[A]ˣ·[B]ʸ</b>; x, y – rzędy względem A i B (wyznaczane doświadczalnie, nie muszą być równe współczynnikom!); x + y – rząd całkowity; k – stała szybkości (zależy od T i katalizatora, nie od stężeń).</p>
<div class="ex"><b>Wyznaczanie rzędu z danych:</b> porównaj doświadczenia, w których zmienia się stężenie tylko jednego substratu. Jeśli 2× [A] → v ×2 – rząd 1; ×4 – rząd 2; bez zmian – rząd 0. Ogólnie: (v₂/v₁) = (c₂/c₁)ˣ.</div>
<div class="ex"><b>Przykład.</b> [NO] 0,1→0,2 przy stałym [O₂]: v ×4 → rząd 2; [O₂] 0,1→0,2 przy stałym [NO]: v ×2 → rząd 1. v = k[NO]²[O₂]; rząd całkowity 3. Jeśli [NO] = [O₂] = 0,1 mol/dm³ i v = 7,0·10⁻³, to k = 7,0·10⁻³/(0,01·0,1) = 7,0 dm⁶·mol⁻²·s⁻¹. Dwukrotne zmniejszenie objętości (stężenia ×2) → v ×8.</div>
<p>Jednostki k: rząd 1 – s⁻¹; rząd 2 – dm³·mol⁻¹·s⁻¹; rząd 3 – dm⁶·mol⁻²·s⁻¹.</p>
<p><b>Reakcje I rzędu</b>: stężenie maleje wykładniczo, okres półtrwania T<sub>½</sub> nie zależy od stężenia początkowego (jak rozpad promieniotwórczy). Wykres v(t) – szybkość maleje z czasem, bo maleje stężenie substratów.</p>`,
sq:[["v = k[A][B]². Jak zmieni się v, gdy [B] wzrośnie 3×?","9 razy."]]},
{id:"kn-energetyka",t:"Energetyka: ΔH, energia aktywacji, katalizator",pp:"IV.4, IV.5, IV.9",h:`
<ul><li><b>Reakcja egzoenergetyczna (egzotermiczna)</b> – układ oddaje energię do otoczenia; ΔH &lt; 0; produkty mają niższą entalpię niż substraty (spalanie, zobojętnianie, gaszenie wapna).</li><li><b>Endoenergetyczna (endotermiczna)</b> – pochłania energię; ΔH &gt; 0 (rozkład CaCO₃, fotosynteza, rozpuszczanie NH₄NO₃).</li>
<li><b>Energia aktywacji E<sub>a</sub></b> – minimalna energia, jaką muszą mieć zderzające się cząsteczki, by reakcja zaszła; na wykresie – różnica między energią kompleksu aktywnego (maksimum) a energią substratów.</li><li>E<sub>a(odwrotnej)</sub> = E<sub>a(wprost)</sub> − ΔH.</li>
<li><b>Katalizator</b> – substancja zwiększająca szybkość, sama nie zużywa się; tworzy przejściowe połączenia z reagentami → inna droga reakcji, niższa E<sub>a</sub>. Nie zmienia ΔH, nie zmienia K ani wydajności równowagowej – skraca czas osiągnięcia równowagi. Kataliza homogeniczna (ta sama faza) i heterogeniczna (np. Pt, Ni, Fe, V₂O₅ – kataliza kontaktowa); enzymy – biokatalizatory.</li></ul>
<p><b>Standardowa entalpia reakcji ΔH°</b> – efekt cieplny w warunkach standardowych (p = 1000 hPa, zwykle 298 K), na mole określone równaniem. Zapis: N₂(g) + 3H₂(g) ⇄ 2NH₃(g) ΔH° = −92 kJ. Przy odwróceniu równania – zmiana znaku; przy podwojeniu współczynników – podwojenie ΔH.</p>
<div class="ex"><b>Przykład.</b> C(s) + O₂(g) → CO₂(g), ΔH = −394 kJ. Ile ciepła wydzieli spalenie 6,0 g węgla? 0,50 mol → 197 kJ.</div>
<div class="ex"><b>Prawo Hessa</b> (wymaganie dawnej podstawy): ΔH reakcji = suma ΔH etapów. ΔH° = ΣΔH°<sub>tw</sub>(produkty) − ΣΔH°<sub>tw</sub>(substraty).</div>`,
sq:[["E_a reakcji wprost = 80 kJ, ΔH = +30 kJ. E_a odwrotnej?","50 kJ."]]},
{id:"kn-rownowaga",t:"Równowaga chemiczna i stała równowagi",pp:"IV.6, IV.7",h:`
<p><b>Stan równowagi dynamicznej</b> – szybkości reakcji w prawo i w lewo są równe, stężenia reagentów nie zmieniają się (ale reakcje nadal zachodzą). Równowaga ustala się w układzie zamkniętym.</p>
<p><b>Prawo działania mas</b>: dla aA + bB ⇄ cC + dD: <b>K = [C]ᶜ[D]ᵈ/([A]ᵃ[B]ᵇ)</b> (stężenia równowagowe). W wyrażeniu nie uwzględnia się ciał stałych ani rozpuszczalnika (wody w roztworach rozcieńczonych). K zależy wyłącznie od temperatury.</p>
<p>K ≫ 1 – równowaga przesunięta w stronę produktów; K ≪ 1 – w stronę substratów. Dla reakcji odwrotnej K' = 1/K.</p>
<div class="ex"><b>Tabelka (ICE).</b> N₂O₄ ⇄ 2NO₂; c₀(N₂O₄) = 0,100 mol/dm³, K = 0,36. Równowaga: [N₂O₄] = 0,1 − x, [NO₂] = 2x; 4x²/(0,1 − x) = 0,36 → 4x² + 0,36x − 0,036 = 0 → x = (−0,36 + √(0,1296 + 0,576))/8 = (−0,36 + 0,840)/8 = 0,060 → [N₂O₄] = 0,040, [NO₂] = 0,120 mol/dm³.</div>
<div class="ex"><b>Stężenia początkowe.</b> A ⇄ 2B, w równowadze [A] = 0,20, [B] = 0,40 mol/dm³, na początku był tylko A. Przereagowało 0,20 mol/dm³ A → c₀(A) = 0,40 mol/dm³; K = 0,16/0,20 = 0,80.</div>
<p><b>Iloraz reakcji Q</b> (te same wyrażenie dla stężeń bieżących): Q &lt; K – reakcja w prawo; Q &gt; K – w lewo; Q = K – równowaga.</p>`,
sq:[["Zapisz K dla C(s) + H₂O(g) ⇄ CO(g) + H₂(g).","K = [CO][H₂]/[H₂O] (bez C(s))."]]},
{id:"kn-lechatelier",t:"Reguła Le Chateliera–Brauna",pp:"IV.8",h:`
<p><b>Reguła przekory:</b> jeżeli na układ w stanie równowagi zadziała czynnik zewnętrzny, to w układzie zachodzą przemiany zmniejszające działanie tego czynnika.</p>
<table><tr><th>Zmiana</th><th>Przesunięcie</th><th>K</th></tr><tr><td>↑ stężenia substratu / usunięcie produktu</td><td>w prawo</td><td>bez zmian</td></tr><tr><td>↑ ciśnienia (↓ objętości)</td><td>w stronę mniejszej liczby moli gazów</td><td>bez zmian</td></tr>
<tr><td>↑ temperatury</td><td>w stronę reakcji endotermicznej</td><td>rośnie dla ΔH&gt;0, maleje dla ΔH&lt;0</td></tr><tr><td>katalizator</td><td>brak (szybciej osiąga równowagę)</td><td>bez zmian</td></tr><tr><td>gaz obojętny przy stałej V</td><td>brak</td><td>bez zmian</td></tr></table>
<div class="ex"><b>Synteza amoniaku</b> N₂ + 3H₂ ⇄ 2NH₃, ΔH &lt; 0: wysoka wydajność przy wysokim ciśnieniu i niskiej temperaturze; w praktyce ~450°C (kompromis z szybkością), 20–30 MPa, katalizator Fe, usuwanie NH₃ przez skraplanie. <b>Kontaktowa metoda H₂SO₄</b>: 2SO₂ + O₂ ⇄ 2SO₃ (V₂O₅, ~450°C).</div>
<div class="ex"><b>Barwne układy:</b> 2NO₂ (brunatny) ⇄ N₂O₄ (bezbarwny), ΔH &lt; 0 – ogrzanie → ciemnieje; 2CrO₄²⁻ (żółty) + 2H⁺ ⇄ Cr₂O₇²⁻ (pomarańczowy) + H₂O – zakwaszenie → pomarańczowy, alkalizowanie → żółty.</div>`,
sq:[["Jak wpłynie wzrost ciśnienia na H₂(g) + I₂(g) ⇄ 2HI(g)?","Nie wpłynie (2 mol gazów po obu stronach)."]]},
{id:"kn-bledy",t:"⚠️ Typowe błędy (kinetyka, równowaga)",pp:"–",h:`<ul><li>„Katalizator zwiększa wydajność” – nie, tylko szybkość.</li><li>Ciała stałe/ciekła woda w wyrażeniu na K.</li><li>Zmiana K przy zmianie stężenia lub ciśnienia.</li><li>Rzędy reakcji = współczynniki stechiometryczne (bez danych doświadczalnych – błąd).</li><li>Mylenie Q z K przy ustalaniu kierunku reakcji.</li><li>Brak potęg w wyrażeniu na K; brak jednostek k.</li></ul>`,sq:[]}
];

TX.kw=[
{id:"kw-dysocjacja",t:"Dysocjacja elektrolityczna (stopniowa)",pp:"VI.1, VI.2",h:`
<p><b>Dysocjacja elektrolityczna</b> – rozpad substancji na jony pod wpływem rozpuszczalnika polarnego (wody). Elektrolity: kwasy, zasady, sole; nieelektrolity: cukry, alkohole, większość związków organicznych.</p>
<p>Kwasy: HCl → H⁺ + Cl⁻ (zapis Brønsteda: HCl + H₂O → H₃O⁺ + Cl⁻); HNO₃ → H⁺ + NO₃⁻. <b>Dysocjacja stopniowa</b> kwasów wieloprotonowych:<br>H₂SO₄ → H⁺ + HSO₄⁻ (całkowicie); HSO₄⁻ ⇄ H⁺ + SO₄²⁻<br>H₃PO₄ ⇄ H⁺ + H₂PO₄⁻; H₂PO₄⁻ ⇄ H⁺ + HPO₄²⁻; HPO₄²⁻ ⇄ H⁺ + PO₄³⁻ (K₁ ≫ K₂ ≫ K₃)<br>H₂CO₃ ⇄ H⁺ + HCO₃⁻; HCO₃⁻ ⇄ H⁺ + CO₃²⁻; H₂S ⇄ H⁺ + HS⁻; HS⁻ ⇄ H⁺ + S²⁻</p>
<p>Zasady: NaOH → Na⁺ + OH⁻; Ba(OH)₂ → Ba²⁺ + 2OH⁻; Ca(OH)₂ (część rozpuszczona) → Ca²⁺ + 2OH⁻. Sole: Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻; NaHCO₃ → Na⁺ + HCO₃⁻. Organiczne: CH₃COOH ⇄ CH₃COO⁻ + H⁺ (jon etanianowy/octanowy); HCOOH ⇄ HCOO⁻ + H⁺ (metanianowy).</p>
<p><b>Stopień dysocjacji α</b> = liczba moli (stężenie) cząsteczek zdysocjowanych / całkowita liczba moli (stężenie) wprowadzonych; mocne elektrolity α ≈ 1 (100%), słabe α &lt; 5% (zwykle). α rośnie przy rozcieńczaniu i ze wzrostem temperatury.</p>`,
sq:[["Zapisz dysocjację stopniową H₂SO₃.","H₂SO₃ ⇄ H⁺ + HSO₃⁻; HSO₃⁻ ⇄ H⁺ + SO₃²⁻."]]},
{id:"kw-bronsted",t:"Teoria Brønsteda–Lowry'ego, pary sprzężone",pp:"VI.7, VI.8",h:`
<p><b>Kwas</b> – donor protonu (H⁺); <b>zasada</b> – akceptor protonu. Reakcja kwas–zasada to przeniesienie protonu; tworzą się pary sprzężone: kwas₁/zasada₁ i kwas₂/zasada₂.</p>
<p>HCl + H₂O → H₃O⁺ + Cl⁻ &nbsp;(pary: HCl/Cl⁻, H₃O⁺/H₂O)<br>NH₃ + H₂O ⇄ NH₄⁺ + OH⁻ &nbsp;(NH₄⁺/NH₃, H₂O/OH⁻) – przyczyna zasadowego odczynu amoniaku<br>CH₃COOH + H₂O ⇄ CH₃COO⁻ + H₃O⁺<br>CO₃²⁻ + H₂O ⇄ HCO₃⁻ + OH⁻</p>
<p><b>Amfolity (amfiprotyczne):</b> H₂O, HCO₃⁻, HSO₄⁻ (głównie kwas), H₂PO₄⁻, HPO₄²⁻, HS⁻, aminokwasy. Im mocniejszy kwas, tym słabsza sprzężona z nim zasada (Cl⁻ – praktycznie żadna zasada; CN⁻ – wyraźnie zasadowy). Ka·Kb = Kw.</p>
<p><b>Odczyn kwasowy</b> roztworów kwasów – obecność H₃O⁺; <b>zasadowy</b> roztworów wodorotlenków – OH⁻ z dysocjacji; amoniaku i amin – OH⁻ z reakcji z wodą.</p>`,
sq:[["Wskaż pary sprzężone: HCO₃⁻ + OH⁻ → CO₃²⁻ + H₂O.","HCO₃⁻/CO₃²⁻ oraz H₂O/OH⁻."]]},
{id:"kw-ph",t:"pH, Kw, obliczenia dla mocnych elektrolitów",pp:"VI.3, VI.4",h:`
<p class="f">H₂O ⇄ H⁺ + OH⁻; Kw = [H⁺][OH⁻] = 1,0·10⁻¹⁴ (25°C); pKw = 14<br>pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14; [H⁺] = 10⁻ᵖᴴ</p>
<p>Odczyn: pH &lt; 7 kwasowy, = 7 obojętny, &gt; 7 zasadowy (w 25°C).</p>
<div class="ex"><b>Przykłady.</b> H₂SO₄ 0,005 mol/dm³ (zakładamy pełną dysocjację dwustopniową): [H⁺] = 0,010 → pH = 2. Ba(OH)₂ 0,0050 mol/dm³: [OH⁻] = 0,010 → pOH 2 → pH 12. HCl 0,02 mol/dm³: pH = 1,70. Roztwór o pH 3,5: [H⁺] = 3,16·10⁻⁴ mol/dm³.</div>
<div class="ex"><b>Mieszanie (zobojętnianie niestechiometryczne).</b> 40 cm³ NaOH 0,10 + 60 cm³ HCl 0,10: n(OH⁻) = 0,0040, n(H⁺) = 0,0060 → nadmiar H⁺ 0,0020 mol w 0,100 dm³ → 0,020 mol/dm³ → pH = 1,70.</div>
<div class="ex"><b>Rozcieńczanie.</b> Rozcieńczenie mocnego kwasu 10× → pH rośnie o 1 (do granicy ~7; kwas nie staje się zasadą!).</div>`,
sq:[["pH roztworu KOH 0,05 mol/dm³?","pOH = 1,30 → pH = 12,70."]]},
{id:"kw-slabe",t:"Słabe kwasy i zasady: Ka, Kb, prawo Ostwalda",pp:"VI.3–VI.5",h:`
<p class="f">HA ⇄ H⁺ + A⁻: Ka = [H⁺][A⁻]/[HA]; B + H₂O ⇄ BH⁺ + OH⁻: Kb = [BH⁺][OH⁻]/[B]<br>Prawo rozcieńczeń Ostwalda: K = α²c/(1 − α); gdy c/K ≥ 400 (α ≤ 5%): K ≈ α²c, α ≈ √(K/c), [H⁺] = αc ≈ √(Ka·c)</p>
<p>Moc elektrolitu porównujemy wartościami stałych (lub pK = −log K): im większa Ka (mniejsze pKa), tym mocniejszy kwas. Przykłady (karta CKE): HCOOH 1,8·10⁻⁴; CH₃COOH 1,8·10⁻⁵; HNO₂ ~10⁻⁴; HF ~10⁻⁴; H₂CO₃ K₁ 4,5·10⁻⁷; HCN ~10⁻¹⁰; NH₃ Kb 1,8·10⁻⁵.</p>
<div class="ex"><b>Przykład 1.</b> CH₃COOH 0,20 mol/dm³: c/Ka = 11 000 → [H⁺] = √(1,8·10⁻⁵·0,20) = 1,9·10⁻³ → pH = 2,72; α = 0,95%.</div>
<div class="ex"><b>Przykład 2 (pełny wzór).</b> HNO₂ 0,010 mol/dm³, Ka = 5,1·10⁻⁴ (c/Ka = 20): x²/(0,010 − x) = 5,1·10⁻⁴ → x² + 5,1·10⁻⁴x − 5,1·10⁻⁶ = 0 → x = 2,0·10⁻³ → pH = 2,70; α = 20%.</div>
<div class="ex"><b>Przykład 3 (Ka z pH).</b> Kwas HA 0,10 mol/dm³ ma pH 2,9: [H⁺] = 1,26·10⁻³ → α = 1,26% → Ka ≈ (1,26·10⁻³)²/0,0987 = 1,6·10⁻⁵.</div>
<div class="ex"><b>Przykład 4 (zasada).</b> NH₃ 0,050 mol/dm³: [OH⁻] = √(1,8·10⁻⁵·0,05) = 9,5·10⁻⁴ → pOH 3,02 → pH 10,98.</div>`,
sq:[["Jak zmieni się α kwasu octowego po 100-krotnym rozcieńczeniu?","Wzrośnie ok. 10× (α ≈ √(K/c))."]]},
{id:"kw-hydroliza",t:"Odczyn roztworów soli (hydroliza)",pp:"VI.6, VI.8, VI.9",h:`
<table><tr><th>Sól</th><th>Przykład</th><th>Reakcja z wodą (jonowo skrócona)</th><th>Odczyn</th></tr>
<tr><td>mocny kwas + mocna zasada</td><td>NaCl, KNO₃, Na₂SO₄</td><td>brak hydrolizy</td><td>obojętny</td></tr>
<tr><td>słaby kwas + mocna zasada</td><td>CH₃COONa, Na₂CO₃, K₂S, NaNO₂</td><td>CH₃COO⁻ + H₂O ⇄ CH₃COOH + OH⁻; CO₃²⁻ + H₂O ⇄ HCO₃⁻ + OH⁻</td><td>zasadowy</td></tr>
<tr><td>mocny kwas + słaba zasada</td><td>NH₄Cl, (NH₄)₂SO₄, AlCl₃, ZnSO₄, FeCl₃</td><td>NH₄⁺ + H₂O ⇄ NH₃ + H₃O⁺; [Al(H₂O)₆]³⁺ ⇄ … uproszczenie: Al³⁺ + 3H₂O ⇄ Al(OH)₃ + 3H⁺ (I etap: Al³⁺ + H₂O ⇄ AlOH²⁺ + H⁺)</td><td>kwasowy</td></tr>
<tr><td>słaby kwas + słaba zasada</td><td>CH₃COONH₄</td><td>hydrolizują oba jony</td><td>zależy od Ka i Kb (≈ obojętny)</td></tr></table>
<p><b>Wodorosole:</b> NaHCO₃ – słabo zasadowy (Kb(HCO₃⁻) &gt; Ka(HCO₃⁻)); NaHSO₄ – kwasowy (HSO₄⁻ ⇄ H⁺ + SO₄²⁻); NaH₂PO₄ – słabo kwasowy; Na₂HPO₄ – słabo zasadowy.</p>
<h4>Odczyn po zmieszaniu reagentów</h4><p>Stechiometrycznie: HCl + NaOH → obojętny; CH₃COOH + NaOH → zasadowy (CH₃COONa); NH₃ + HCl → kwasowy (NH₄Cl). Niestechiometrycznie – decyduje nadmiar mocnego reagenta lub powstaje bufor (np. nadmiar CH₃COOH obok CH₃COONa).</p>
<p><b>Bufory</b> (słaby kwas + jego sól z mocną zasadą lub słaba zasada + jej sól z mocnym kwasem) utrzymują w przybliżeniu stałe pH przy dodaniu niewielkich ilości kwasu/zasady: CH₃COO⁻ + H⁺ → CH₃COOH; CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O. [H⁺] = Ka·c<sub>kw</sub>/c<sub>soli</sub>. Bufor wodorowęglanowy krwi (pH ≈ 7,4), fosforanowy.</p>`,
sq:[["Odczyn roztworu K₂CO₃ i równanie?","Zasadowy: CO₃²⁻ + H₂O ⇄ HCO₃⁻ + OH⁻."],["Jaki odczyn po zmieszaniu równomolowych ilości NH₃ i HCl?","Kwasowy (NH₄Cl – hydroliza kationu)."]]},
{id:"kw-reakcje",t:"Zobojętnianie i wytrącanie osadów – zapis jonowy",pp:"VI.9, VI.4 (Ks)",h:`
<p><b>Zapis cząsteczkowy → jonowy pełny → jonowy skrócony.</b> W formie jonów zapisujemy mocne elektrolity rozpuszczalne; w formie cząsteczkowej: osady, gazy, słabe elektrolity, wodę, tlenki.</p>
<div class="ex">Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O<br>Ba²⁺ + 2OH⁻ + 2H⁺ + 2Cl⁻ → Ba²⁺ + 2Cl⁻ + 2H₂O<br>H⁺ + OH⁻ → H₂O</div>
<div class="ex">Cu(OH)₂ + 2HNO₃ → Cu(NO₃)₂ + 2H₂O &nbsp; jonowo skrócone: Cu(OH)₂ + 2H⁺ → Cu²⁺ + 2H₂O (osad nie rozpisany!)</div>
<div class="ex">CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O (słaby kwas cząsteczkowo)</div>
<h4>Wytrącanie osadów (tabela rozpuszczalności na karcie CKE)</h4>
<table><tr><th>Jon badany</th><th>Odczynnik</th><th>Osad / obserwacja</th></tr>
<tr><td>Cl⁻, Br⁻, I⁻</td><td>AgNO₃</td><td>AgCl biały (ciemnieje na świetle), AgBr jasnożółty, AgI żółty</td></tr><tr><td>SO₄²⁻</td><td>BaCl₂</td><td>BaSO₄ biały, nierozpuszczalny w kwasach</td></tr>
<tr><td>CO₃²⁻</td><td>HCl / Ca²⁺</td><td>bezbarwny bezwonny gaz (CO₂) / CaCO₃ biały</td></tr><tr><td>PO₄³⁻</td><td>AgNO₃</td><td>Ag₃PO₄ żółty</td></tr>
<tr><td>Cu²⁺</td><td>NaOH</td><td>Cu(OH)₂ niebieski galaretowaty</td></tr><tr><td>Fe³⁺</td><td>NaOH</td><td>Fe(OH)₃ brunatnoczerwony (rdzawy)</td></tr><tr><td>Fe²⁺</td><td>NaOH</td><td>Fe(OH)₂ zielonkawy, brunatnieje na powietrzu</td></tr>
<tr><td>Mg²⁺, Al³⁺, Zn²⁺</td><td>NaOH</td><td>białe osady (Al(OH)₃, Zn(OH)₂ roztwarzają się w nadmiarze)</td></tr><tr><td>S²⁻</td><td>Pb²⁺/Cu²⁺</td><td>PbS / CuS czarny</td></tr><tr><td>Pb²⁺</td><td>KI</td><td>PbI₂ żółty</td></tr></table>
<p>Ag⁺ + Cl⁻ → AgCl↓; Ba²⁺ + SO₄²⁻ → BaSO₄↓; Fe³⁺ + 3OH⁻ → Fe(OH)₃↓; 3Ca²⁺ + 2PO₄³⁻ → Ca₃(PO₄)₂↓.</p>
<p><b>Iloczyn rozpuszczalności</b> Ks: dla AgCl ⇄ Ag⁺ + Cl⁻: Ks = [Ag⁺][Cl⁻]. Osad wytrąca się, gdy iloczyn stężeń jonów &gt; Ks. Dla AgCl (Ks = 1,8·10⁻¹⁰) rozpuszczalność molowa s = √Ks = 1,3·10⁻⁵ mol/dm³; dla Ag₂CrO₄: Ks = 4s³.</p>`,
sq:[["Zapisz jonowo skrócone: Na₂CO₃ + 2HCl.","CO₃²⁻ + 2H⁺ → CO₂↑ + H₂O."],["Czy wytrąci się AgCl po zmieszaniu równych objętości Ag⁺ 2·10⁻⁵ i Cl⁻ 2·10⁻⁵ mol/dm³ (Ks = 1,8·10⁻¹⁰)?","Po zmieszaniu po 1·10⁻⁵: iloczyn 1·10⁻¹⁰ < Ks → nie."]]},
{id:"kw-wskazniki",t:"Wskaźniki i miareczkowanie",pp:"VI.3, praktyczne",h:`
<table><tr><th>Wskaźnik</th><th>kwasowy</th><th>obojętny</th><th>zasadowy</th></tr><tr><td>oranż metylowy</td><td>czerwony (pH &lt; 3,1)</td><td>żółty/pomarańczowy</td><td>żółty</td></tr><tr><td>fenoloftaleina</td><td>bezbarwna</td><td>bezbarwna</td><td>malinowa (pH &gt; 8,2–10)</td></tr><tr><td>błękit bromotymolowy</td><td>żółty</td><td>zielony</td><td>niebieski</td></tr><tr><td>uniwersalny papierek</td><td>czerwony</td><td>żółtozielony</td><td>niebieski/granatowy</td></tr><tr><td>wywar z czerwonej kapusty</td><td>czerwony</td><td>fioletowy</td><td>zielony/żółty</td></tr></table>
<div class="ex"><b>Miareczkowanie alkacymetryczne:</b> roztwór o znanym stężeniu (titrant) z biurety dodaje się do analitu z wskaźnikiem do zmiany barwy (punkt końcowy). n(H⁺) = n(OH⁻). Przykład: 25,0 cm³ HCl zobojętniono 18,0 cm³ NaOH 0,120 mol/dm³ → c(HCl) = 0,0864 mol/dm³.</div>`,
sq:[["Jaki kolor ma oranż metylowy w roztworze NaOH?","Żółty."]]},
{id:"kw-bledy",t:"⚠️ Typowe błędy (kwasy i zasady)",pp:"–",h:`<ul><li>pH zasady obliczone jako −log[OH⁻] (to pOH).</li><li>Pominięcie liczby H⁺/OH⁻ (H₂SO₄, Ba(OH)₂).</li><li>Wzór uproszczony przy c/K &lt; 400.</li><li>Hydroliza soli mocnego kwasu i mocnej zasady (np. NaCl) – nie zachodzi.</li><li>Rozpisywanie osadów, słabych kwasów i gazów na jony w zapisie jonowym.</li><li>Odczyn CH₃COONa: „obojętny, bo to sól” – zasadowy!</li><li>Brak strzałek ⇄ przy dysocjacji słabych elektrolitów i hydrolizie.</li></ul>`,sq:[]}
];

TX.nieorg=[
{id:"ni-system",t:"Klasyfikacja i nazewnictwo związków nieorganicznych",pp:"VII.1, VII.2",h:`
<table><tr><th>Klasa</th><th>Przykłady wzór – nazwa</th></tr>
<tr><td>tlenki</td><td>Fe₂O₃ – tlenek żelaza(III); N₂O₅ – tlenek azotu(V); Mn₂O₇ – tlenek manganu(VII)</td></tr>
<tr><td>nadtlenki</td><td>H₂O₂ – nadtlenek wodoru; Na₂O₂ – nadtlenek sodu</td></tr>
<tr><td>wodorki</td><td>NaH – wodorek sodu; NH₃ – amoniak; H₂S – siarkowodór</td></tr>
<tr><td>wodorotlenki</td><td>Fe(OH)₃ – wodorotlenek żelaza(III); Ca(OH)₂</td></tr>
<tr><td>kwasy tlenowe</td><td>HNO₂ kwas azotowy(III); HNO₃ azotowy(V); H₂SO₃ siarkowy(IV); H₂SO₄ siarkowy(VI); H₃PO₄ fosforowy(V); HClO chlorowy(I); HClO₄ chlorowy(VII); H₂CO₃ węglowy; H₂SiO₃ krzemowy</td></tr>
<tr><td>kwasy beztlenowe</td><td>HCl chlorowodorowy (solny); HBr bromowodorowy; H₂S siarkowodorowy</td></tr>
<tr><td>sole obojętne</td><td>K₂Cr₂O₇ dichromian(VI) potasu; KMnO₄ manganian(VII) potasu; Na₂S₂O₃ tiosiarczan sodu</td></tr>
<tr><td>wodorosole</td><td>NaHCO₃ wodorowęglan sodu; KHSO₄ wodorosiarczan(VI) potasu; NaH₂PO₄ diwodorofosforan(V) sodu</td></tr>
<tr><td>hydroksosole</td><td>Mg(OH)Cl chlorek hydroksomagnezu; (CuOH)₂CO₃ węglan hydroksomiedzi(II) (patyna, malachit)</td></tr>
<tr><td>hydraty</td><td>CuSO₄·5H₂O pentahydrat siarczanu(VI) miedzi(II); CaSO₄·2H₂O dihydrat siarczanu(VI) wapnia</td></tr>
<tr><td>związki kompleksowe</td><td>Na[Al(OH)₄] tetrahydroksoglinian sodu; Na₂[Zn(OH)₄] tetrahydroksocynkan sodu; [Cu(NH₃)₄]SO₄</td></tr></table>`,
sq:[["Podaj wzór: siarczan(IV) żelaza(II).","FeSO₃"],["Nazwij Ca(H₂PO₄)₂.","Diwodorofosforan(V) wapnia."]]},
{id:"ni-tlenki",t:"Tlenki: otrzymywanie i charakter chemiczny",pp:"VII.3–VII.5",h:`
<p><b>Otrzymywanie:</b> synteza z tlenem (2Mg + O₂ → 2MgO; S + O₂ → SO₂; 4P + 5O₂ → P₄O₁₀; 3Fe + 2O₂ → Fe₃O₄; 2Cu + O₂ → 2CuO); rozkład termiczny węglanów (CaCO₃ → CaO + CO₂), wodorotlenków (Cu(OH)₂ → CuO + H₂O; 2Fe(OH)₃ → Fe₂O₃ + 3H₂O), azotanów (2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂); spalanie związków (CH₄ + 2O₂ → CO₂ + 2H₂O; 2H₂S + 3O₂ → 2SO₂ + 2H₂O).</p>
<table><tr><th>Charakter</th><th>Przykłady</th><th>Reakcje</th></tr>
<tr><td>zasadowe</td><td>Na₂O, K₂O, CaO, MgO, CuO, FeO, MnO, CrO</td><td>Na₂O + H₂O → 2NaOH; CaO + 2HCl → CaCl₂ + H₂O; CuO + 2H⁺ → Cu²⁺ + H₂O (CuO nie reaguje z wodą)</td></tr>
<tr><td>kwasowe</td><td>CO₂, SO₂, SO₃, N₂O₅, P₄O₁₀, SiO₂, Cl₂O₇, CrO₃, Mn₂O₇</td><td>SO₃ + H₂O → H₂SO₄; CO₂ + 2NaOH → Na₂CO₃ + H₂O; SiO₂ + 2NaOH → Na₂SiO₃ + H₂O (stop.); SiO₂ nie reaguje z wodą</td></tr>
<tr><td>amfoteryczne</td><td>ZnO, Al₂O₃, Cr₂O₃, BeO, PbO, SnO, MnO₂</td><td>ZnO + 2H⁺ → Zn²⁺ + H₂O; ZnO + 2OH⁻ + H₂O → [Zn(OH)₄]²⁻; Al₂O₃ + 2OH⁻ + 3H₂O → 2[Al(OH)₄]⁻</td></tr>
<tr><td>obojętne</td><td>CO, NO, N₂O, SiO</td><td>nie reagują z wodą, kwasami ani zasadami</td></tr></table>
<div class="ex"><b>Doświadczenie – charakter tlenku:</b> do dwóch probówek z badanym tlenkiem dodaj HCl(aq) i NaOH(aq). Roztworzenie tylko w kwasie → zasadowy; tylko w zasadzie → kwasowy; w obu → amfoteryczny; w żadnej → obojętny (lub nierozpuszczalny). Tlenek reagujący z wodą: sprawdź odczyn wskaźnikiem.</div>`,
sq:[["Jaki charakter ma Cr₂O₃? Napisz reakcję z NaOH.","Amfoteryczny: Cr₂O₃ + 2OH⁻ + 3H₂O → 2[Cr(OH)₄]⁻."]]},
{id:"ni-wodorotlenki",t:"Wodorotlenki – otrzymywanie, amfoteryczność, kompleksy",pp:"VII.7, VII.8",h:`
<p><b>Otrzymywanie:</b> metal aktywny + woda (2Na + 2H₂O → 2NaOH + H₂); tlenek zasadowy + woda (CaO + H₂O → Ca(OH)₂ – gaszenie wapna, egzotermiczne); sól + zasada (wytrącanie nierozpuszczalnych: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄).</p>
<p><b>Zasady</b> – wodorotlenki rozpuszczalne (NaOH, KOH, Ba(OH)₂, Ca(OH)₂ słabo). <b>Amfoteryczne</b>: Zn(OH)₂, Al(OH)₃, Cr(OH)₃, Pb(OH)₂, Sn(OH)₂, Be(OH)₂.</p>
<div class="ex">Zn(OH)₂ + 2H⁺ → Zn²⁺ + 2H₂O; Zn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻<br>Al(OH)₃ + 3H⁺ → Al³⁺ + 3H₂O; Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻<br>Cr(OH)₃ + OH⁻ → [Cr(OH)₄]⁻ (lub [Cr(OH)₆]³⁻)</div>
<p><b>Kompleks amoniakalny:</b> Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄]²⁺ + 2OH⁻ (ciemnoszafirowy roztwór). <b>Rozkład termiczny:</b> Cu(OH)₂ → CuO (czarny) + H₂O.</p>`,
sq:[["Jak doświadczalnie wykazać amfoteryczność Al(OH)₃?","Strącić Al(OH)₃ (Al³⁺ + NaOH), podzielić; osad roztwarza się w HCl i w nadmiarze NaOH."]]},
{id:"ni-kwasy",t:"Kwasy – otrzymywanie, właściwości, moc",pp:"VII.7, VII.9, VII.10",h:`
<p><b>Otrzymywanie:</b> tlenek kwasowy + woda (P₄O₁₀ + 6H₂O → 4H₃PO₄); synteza wodorków + rozpuszczenie (H₂ + Cl₂ → 2HCl); mocny kwas + sól słabszego/lotnego kwasu (2NaCl + H₂SO₄(stęż.) → Na₂SO₄ + 2HCl↑; Na₂SiO₃ + 2HCl → H₂SiO₃↓ + 2NaCl – galaretowaty osad).</p>
<p><b>Właściwości:</b> z metalami (przed wodorem) → sól + H₂; z tlenkami metali i wodorotlenkami → sól + woda; z solami słabszych kwasów: CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O; Na₂S + 2HCl → 2NaCl + H₂S↑ (zapach zgniłych jaj); Na₂SO₃ + 2HCl → 2NaCl + SO₂↑ + H₂O; CH₃COONa + HCl → CH₃COOH + NaCl.</p>
<table><tr><th>Moc</th><th>Kwasy</th></tr><tr><td>mocne</td><td>HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄, HClO₃</td></tr><tr><td>średnie</td><td>H₃PO₄, H₂SO₃, HNO₂, HF</td></tr><tr><td>słabe</td><td>H₂CO₃, H₂S, HClO, HCN, H₂SiO₃, kwasy karboksylowe</td></tr></table>
<p>Kwasy tlenowe tego samego pierwiastka – moc rośnie ze stopniem utlenienia: HClO &lt; HClO₂ &lt; HClO₃ &lt; HClO₄; H₂SO₃ &lt; H₂SO₄. <b>Kwasy utleniające:</b> HNO₃ (każde stężenie), stęż. H₂SO₄ – reagują z Cu, Ag bez wydzielania H₂. <b>Nietrwałe:</b> H₂CO₃ → CO₂ + H₂O; H₂SO₃ → SO₂ + H₂O. <b>Lotne:</b> HCl, HNO₃, H₂S.</p>
<p>Stężony H₂SO₄ – higroskopijny i odwadniający (zwęgla cukier: C₁₂H₂₂O₁₁ → 12C + 11H₂O).</p>`,
sq:[["Który kwas wyprze drugi: H₂SO₄ z NaCl czy HCl z Na₂SO₄?","Stężony H₂SO₄ (nielotny) wypiera lotny HCl z NaCl."]]},
{id:"ni-sole",t:"Sole – metody otrzymywania i reakcje",pp:"VII.7, VII.11",h:`
<ol><li>metal + kwas: Zn + H₂SO₄ → ZnSO₄ + H₂↑</li><li>tlenek metalu + kwas: CuO + 2HNO₃ → Cu(NO₃)₂ + H₂O</li><li>wodorotlenek + kwas (zobojętnianie): KOH + HCl → KCl + H₂O</li><li>tlenek niemetalu + zasada: SO₂ + 2NaOH → Na₂SO₃ + H₂O</li><li>tlenek metalu + tlenek niemetalu: CaO + CO₂ → CaCO₃</li><li>metal + niemetal: 2Fe + 3Cl₂ → 2FeCl₃</li><li>sól + kwas: CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O</li><li>sól + zasada: FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl; NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O (wykrywanie NH₄⁺ – zapach, zwilżony papierek uniwersalny niebieszczeje)</li><li>sól + sól (wytrącanie): Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃</li><li>metal + sól (wypieranie): Zn + CuSO₄ → ZnSO₄ + Cu</li><li>metal amfoteryczny + zasada: Zn + 2NaOH + 2H₂O → Na₂[Zn(OH)₄] + H₂↑</li></ol>
<p><b>Wodorosole i hydroksosole:</b> NaOH + H₂SO₄ → NaHSO₄ + H₂O (niedomiar zasady); CO₂ (nadmiar) + NaOH → NaHCO₃; Mg(OH)₂ + HCl → Mg(OH)Cl + H₂O.</p>`,
sq:[["Zaproponuj 3 metody otrzymania MgCl₂.","Mg + 2HCl; MgO + 2HCl; Mg(OH)₂ + 2HCl (też Mg + Cl₂, MgCO₃ + 2HCl)."]]},
{id:"ni-wodorki",t:"Charakter chemiczny wodorków",pp:"VII.6",h:`
<table><tr><th>Wodorek</th><th>Charakter</th><th>Równanie potwierdzające</th></tr>
<tr><td>LiH (jonowy)</td><td>zasadowy</td><td>LiH + H₂O → LiOH + H₂↑</td></tr><tr><td>CH₄</td><td>obojętny</td><td>nie reaguje z wodą, kwasami, zasadami</td></tr>
<tr><td>NH₃</td><td>zasadowy</td><td>NH₃ + H₂O ⇄ NH₄⁺ + OH⁻; NH₃ + HCl → NH₄Cl (biały dym)</td></tr><tr><td>H₂O</td><td>obojętny (amfiprotyczny)</td><td>2H₂O ⇄ H₃O⁺ + OH⁻</td></tr>
<tr><td>HF, HCl, HBr, HI, H₂S</td><td>kwasowy</td><td>HCl + H₂O → H₃O⁺ + Cl⁻; H₂S + 2NaOH → Na₂S + 2H₂O</td></tr></table>
<div class="ex"><b>Doświadczenie:</b> wodorek wprowadzony do wody z wywarem z czerwonej kapusty/uniwersalnym wskaźnikiem: NH₃ – zielony/niebieski (zasadowy), HCl – czerwony (kwasowy), CH₄ – brak zmian.</div>`,
sq:[["Charakter H₂S i reakcja z KOH (nadmiar).","Kwasowy: H₂S + 2KOH → K₂S + 2H₂O."]]},
{id:"ni-zastos",t:"Krzemionka, szkło, skały wapienne, gips, twardość wody, nawozy",pp:"XI.1–XI.6",h:`
<ul><li><b>SiO₂</b> – kryształ kowalencyjny: twardy, wysoka t.t. (~1700°C), nierozpuszczalny w wodzie i kwasach (oprócz HF: SiO₂ + 4HF → SiF₄ + 2H₂O – trawienie szkła), reaguje ze stopionymi zasadami i węglanami. Odmiany: kwarc, kryształ górski, ametyst, agat, krzemień, piasek. Zastosowania: szkło, światłowody, ceramika.</li>
<li><b>Szkło</b> – produkcja: stapianie piasku (SiO₂) z sodą (Na₂CO₃) i wapieniem (CaCO₃): Na₂CO₃ + SiO₂ → Na₂SiO₃ + CO₂; CaCO₃ + SiO₂ → CaSiO₃ + CO₂. Substancja bezpostaciowa (amorficzna). Rodzaje: sodowe (okienne), potasowe (trudnotopliwe), ołowiowe (kryształowe), borokrzemianowe (żaroodporne, laboratoryjne – „Pyrex”), kwarcowe (przepuszcza UV), barwne (tlenki metali: Co – niebieskie, Cr – zielone).</li>
<li><b>Skały wapienne</b> (wapień, marmur, kreda – CaCO₃): odróżnianie od innych skał – z HCl burzą się (CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O), gaz mętni wodę wapienną (Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O). Zastosowania: budownictwo, produkcja wapna (CaCO₃ → CaO + CO₂; CaO + H₂O → Ca(OH)₂), zaprawa wapienna twardnieje: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O. Kras: CaCO₃ + CO₂ + H₂O ⇄ Ca(HCO₃)₂ (jaskinie, stalaktyty).</li>
<li><b>Twardość wody</b> – jony Ca²⁺ i Mg²⁺. Przemijająca (wodorowęglany) – usuwana gotowaniem: Ca(HCO₃)₂ → CaCO₃↓ + CO₂ + H₂O (kamień kotłowy); trwała (siarczany, chlorki) – usuwana np. sodą: Ca²⁺ + CO₃²⁻ → CaCO₃↓, fosforanami lub jonitami.</li>
<li><b>Gips:</b> CaSO₄·2H₂O (gips krystaliczny) → ogrzewanie ~150°C → (CaSO₄)₂·H₂O (gips palony, półwodny) + 3H₂O; twardnienie zaprawy gipsowej: (CaSO₄)₂·H₂O + 3H₂O → 2(CaSO₄·2H₂O) (zwiększa objętość – odlewy, opatrunki); CaSO₄ bezwodny – anhydryt. Zastosowania: budownictwo, medycyna, sztukateria.</li>
<li><b>Nawozy:</b> naturalne (obornik, kompost, gnojowica) i sztuczne: azotowe (saletry NH₄NO₃, NaNO₃, Ca(NO₃)₂, mocznik (NH₂)₂CO, siarczan amonu), fosforowe (superfosfat Ca(H₂PO₄)₂ + CaSO₄, fosforany amonu), potasowe (KCl, K₂SO₄), wieloskładnikowe (NPK, saletrzak). Nadmiar – eutrofizacja wód.</li></ul>`,
sq:[["Jak odróżnić marmur od granitu?","Kwas solny – marmur burzy się (CO₂ mętni wodę wapienną), granit nie."],["Równanie twardnienia gipsu palonego.","(CaSO₄)₂·H₂O + 3H₂O → 2CaSO₄·2H₂O"]]},
{id:"ni-identyf",t:"Tabela wykrywania jonów i gazów",pp:"VI.9, VII, X",h:`
<table><tr><th>Substancja</th><th>Test</th><th>Obserwacja</th></tr>
<tr><td>H₂</td><td>płomień</td><td>charakterystyczny trzask („szczeknięcie”)</td></tr><tr><td>O₂</td><td>tląca się łuczywo</td><td>rozżarza się/zapala</td></tr>
<tr><td>CO₂</td><td>woda wapienna</td><td>zmętnienie</td></tr><tr><td>NH₃</td><td>wilgotny papierek uniwersalny; HCl(g)</td><td>niebieszczeje; biały dym NH₄Cl</td></tr>
<tr><td>SO₂</td><td>KMnO₄/H⁺ lub woda bromowa</td><td>odbarwienie; ostry zapach</td></tr><tr><td>H₂S</td><td>bibuła z Pb(NO₃)₂</td><td>czernieje (PbS); zapach zgniłych jaj</td></tr>
<tr><td>Cl₂</td><td>wilgotny papierek jodoskrobiowy</td><td>granatowienie; odbarwia wilgotny papierek wskaźnikowy</td></tr><tr><td>NO₂</td><td>–</td><td>brunatny gaz</td></tr>
<tr><td>NH₄⁺</td><td>NaOH + ogrzanie</td><td>NH₃ (zapach, papierek niebieszczeje)</td></tr><tr><td>Fe³⁺</td><td>KSCN</td><td>krwistoczerwone zabarwienie</td></tr>
<tr><td>I₂</td><td>skrobia</td><td>granatowe zabarwienie</td></tr></table>`,
sq:[["Jak wykryć jon amonowy?","Ogrzać z NaOH – wydziela się NH₃ (zapach, zwilżony papierek uniwersalny niebieszczeje)."]]},
{id:"ni-chemia",t:"Chemia wokół nas i ochrona środowiska",pp:"XXI, XXII",h:`
<ul><li><b>Leki:</b> węgiel aktywny (adsorpcja toksyn), kwas acetylosalicylowy (aspiryna – przeciwbólowy, przeciwzapalny, przeciwzakrzepowy; ester kwasu salicylowego i kwasu octowego), środki zobojętniające (NaHCO₃, Mg(OH)₂, Al(OH)₃: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O; NaHCO₃ + HCl → NaCl + CO₂ + H₂O). Toksyczność zależy od dawki, rozpuszczalności, drogi wnikania (nikotyna, etanol – metabolizm do etanalu).</li>
<li><b>Napoje:</b> kofeina (kawa, herbata, cola – pobudza), kwas fosforowy(V) w coli, garbniki w herbacie, laktoza i kazeina w mleku, Ca²⁺/Mg²⁺/HCO₃⁻ w wodzie mineralnej.</li>
<li><b>Żywność:</b> pieczenie – fermentacja drożdży (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂), proszek do pieczenia (2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O); wino – fermentacja alkoholowa; kwaśne mleko, jogurty – fermentacja mlekowa (C₆H₁₂O₆ → 2CH₃CH(OH)COOH), denaturacja kazeiny; sery – podpuszczka (enzymy).</li>
<li><b>Środki czystości:</b> do szkła – roztwór amoniaku/alkohole; do przetykania rur – NaOH (stały, często z Al – wydziela się H₂, ciepło); do metali i biżuterii – kwasy (cytrynowy), pasty ścierne; zasady bezpieczeństwa: rękawice, okulary, nie mieszać środków z chlorem (NaClO) z kwasami (wydziela się Cl₂): NaClO + 2HCl → NaCl + Cl₂ + H₂O.</li>
<li><b>Gleba:</b> właściwości sorpcyjne (kompleks sorpcyjny – iły, próchnica zatrzymują jony, np. NH₄⁺, K⁺); kwasowość gleby – badanie: zawiesina gleby w wodzie (lub KCl) + wskaźnik uniwersalny; wapnowanie gleb kwaśnych (CaCO₃, CaO).</li>
<li><b>Zanieczyszczenia:</b> powietrza – SO₂, NOₓ (kwaśne deszcze: SO₂ + H₂O → H₂SO₃; 2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄; 4NO₂ + O₂ + 2H₂O → 4HNO₃), CO, pyły (smog), freony (dziura ozonowa), CO₂ i CH₄ (efekt cieplarniany, klimat); wody – azotany(V) i fosforany(V) (eutrofizacja), metale ciężkie (Hg, Pb, Cd), ropopochodne; gleby – metale ciężkie, pestycydy. Ochrona: odsiarczanie spalin (CaCO₃ + SO₂ → CaSO₃ + CO₂; 2CaSO₃ + O₂ → 2CaSO₄), katalizatory samochodowe (2CO + 2NO → 2CO₂ + N₂), oczyszczalnie ścieków, OZE, recykling.</li>
<li><b>Zielona chemia</b> – projektowanie procesów ograniczających lub eliminujących substancje niebezpieczne: zapobieganie odpadom, atomowa efektywność, bezpieczniejsze rozpuszczalniki (woda, scCO₂), kataliza zamiast reagentów stechiometrycznych, surowce odnawialne, energooszczędność, biodegradowalność produktów.</li></ul>`,
sq:[["Zapisz reakcję zobojętniania kwasu żołądkowego wodorotlenkiem magnezu.","Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O."]]},
{id:"ni-bledy",t:"⚠️ Typowe błędy (chemia nieorganiczna)",pp:"–",h:`<ul><li>Wodór z Cu + HCl (reakcja nie zachodzi) lub z metalem + HNO₃.</li><li>Fe + HCl → FeCl₃ (prawidłowo FeCl₂).</li><li>Mylenie obserwacji z wnioskiem („wydziela się CO₂” – to wniosek; obserwacja: „wydziela się bezbarwny, bezwonny gaz”).</li><li>Zapis [Al(OH)₄]⁻ bez ładunku lub Al(OH)₄.</li><li>Uznanie SiO₂ za reagujący z wodą.</li><li>Gips palony zapisany jako CaSO₄·H₂O zamiast (CaSO₄)₂·H₂O.</li></ul>`,sq:[]}
];

TX.org1=[
{id:"o1-wstep",t:"Wzory, hybrydyzacja, rzędowość",pp:"XII.1–XII.4",h:`
<p>Wzory: sumaryczny (C₂H₆O), strukturalny (pełny), półstrukturalny (grupowy CH₃–CH₂–OH), szkieletowy (kreskowy). Wzór empiryczny = najprostszy stosunek atomów.</p>
<p><b>Hybrydyzacja węgla:</b> sp³ – 4 wiązania σ, tetraedr, 109,5° (alkany); sp² – 3σ + 1π, płaska trygonalna, 120° (alkeny, benzen, C=O); sp – 2σ + 2π, liniowa, 180° (alkiny, CO₂).</p>
<p><b>Rzędowość atomu C</b> – liczba atomów węgla, z którymi jest połączony (I°, II°, III°, IV°). Rzędowość alkoholi i halogenków – według atomu C z grupą funkcyjną; amin – liczba podstawników przy N.</p>
<p><b>Szereg homologiczny</b> – związki o tej samej grupie funkcyjnej, różniące się o –CH₂–; ze wzrostem łańcucha rośnie t.wrz. (siły van der Waalsa), maleje rozpuszczalność w wodzie. Rozgałęzienie obniża t.wrz.</p>`,
sq:[["Hybrydyzacja atomów C w propenie?","CH₂= i =CH– : sp²; CH₃: sp³."]]},
{id:"o1-izomeria",t:"Izomeria konstytucyjna i stereoizomeria",pp:"XII.5, XII.6",h:`
<ul><li><b>Konstytucyjna:</b> łańcuchowa (butan/2-metylopropan), położenia (but-1-en/but-2-en; propan-1-ol/propan-2-ol), grup funkcyjnych (etanol/eter dimetylowy; propanal/propanon; kwas propanowy/octan metylu; alkeny/cykloalkany).</li>
<li><b>Geometryczna cis–trans:</b> wymaga C=C (lub pierścienia) i dwóch różnych podstawników na każdym atomie C wiązania podwójnego: but-2-en ma, but-1-en i 2-metylopropen – nie.</li>
<li><b>Optyczna:</b> asymetryczny (stereogeniczny) atom C – cztery różne podstawniki. Enancjomery – nienakładalne odbicia lustrzane, skręcają płaszczyznę światła spolaryzowanego o ten sam kąt w przeciwne strony; mieszanina racemiczna 1:1 – optycznie nieczynna. Diastereoizomery – stereoizomery niebędące enancjomerami (≥2 centra). Związek mezo – ma centra stereogeniczne, ale płaszczyznę symetrii (kwas mezo-winowy) – nieczynny optycznie. Maksymalna liczba stereoizomerów = 2ⁿ.</li></ul>
<div class="ex">Kwas mlekowy CH₃–C*H(OH)–COOH – 1 centrum → 2 enancjomery. Butan-2-ol – chiralny; propan-2-ol – nie.</div>`,
sq:[["Czy pent-2-en ma izomery cis–trans?","Tak – C2 (H, CH₃) i C3 (H, C₂H₅)."],["Ile stereoizomerów ma kwas winowy?","3: para enancjomerów + forma mezo."]]},
{id:"o1-mech",t:"Typy reakcji i mechanizmy",pp:"XII.7, XII.8",h:`
<p>Typy: substytucja, addycja, eliminacja, polimeryzacja, kondensacja. Rozerwanie wiązania: <b>homolityczne</b> (rodniki) i <b>heterolityczne</b> (jony). Reagenty: <b>elektrofilowe</b> (ubogie w elektrony: H⁺, Br⁺, NO₂⁺, karbokationy) i <b>nukleofilowe</b> (pary elektronowe: OH⁻, H₂O, NH₃, Cl⁻).</p>
<table><tr><th>Mechanizm</th><th>Przykład</th></tr>
<tr><td>S<sub>R</sub> rodnikowa</td><td>CH₄ + Cl₂ —hν→ CH₃Cl + HCl (inicjacja Cl₂ → 2Cl•, propagacja, terminacja)</td></tr>
<tr><td>A<sub>E</sub> addycja elektrofilowa</td><td>CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br</td></tr>
<tr><td>S<sub>E</sub> substytucja elektrofilowa</td><td>C₆H₆ + Br₂ —FeBr₃→ C₆H₅Br + HBr</td></tr>
<tr><td>S<sub>N</sub> nukleofilowa</td><td>CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻ (wodny NaOH)</td></tr>
<tr><td>E eliminacja</td><td>CH₃CH₂Br + KOH —etanol, T→ CH₂=CH₂ + KBr + H₂O</td></tr></table>
<p><b>Reguła Zajcewa:</b> przy eliminacji powstaje głównie alken bardziej podstawiony (H odchodzi od atomu C uboższego w wodór): 2-bromobutan → głównie but-2-en.</p>`,
sq:[["Jaki mechanizm ma chlorowanie metanu w świetle?","Substytucja rodnikowa S_R."]]},
{id:"o1-alkany",t:"Alkany i cykloalkany",pp:"XIII.1–XIII.3",h:`
<p>CₙH₂ₙ₊₂, sp³, nazewnictwo: najdłuższy łańcuch, najniższe lokanty, podstawniki alfabetycznie (2,3-dimetylopentan). Właściwości: niepolarne, nierozpuszczalne w wodzie, mało reaktywne. Reakcje: spalanie całkowite (C₃H₈ + 5O₂ → 3CO₂ + 4H₂O), półspalanie (2C₃H₈ + 7O₂ → 6CO + 8H₂O), niecałkowite (C₃H₈ + 2O₂ → 3C + 4H₂O); substytucja rodnikowa z Cl₂/Br₂ (światło). Bromowanie preferuje III° &gt; II° &gt; I° atom C. Cykloalkany CₙH₂ₙ – izomery alkenów, nie odbarwiają wody bromowej ani KMnO₄.</p>
<p><b>Otrzymywanie:</b> uwodornienie alkenów (CH₂=CH₂ + H₂ —Ni→ CH₃CH₃); reakcja Wurtza (2CH₃Cl + 2Na → C₂H₆ + 2NaCl); CH₄ z Al₄C₃ + 12H₂O → 4Al(OH)₃ + 3CH₄.</p>`,
sq:[["Spalanie całkowite oktanu.","2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O"]]},
{id:"o1-alkeny",t:"Alkeny – addycja, Markownikow, utlenianie",pp:"XIII.4–XIII.6",h:`
<p>CₙH₂ₙ, wiązanie C=C (σ+π). <b>Otrzymywanie:</b> eliminacja z halogenoalkanów (KOH/etanol), dehydratacja alkoholi (CH₃CH₂OH —Al₂O₃ lub stęż. H₂SO₄, T→ CH₂=CH₂ + H₂O), kraking.</p>
<p><b>Addycja:</b> H₂ (Ni) → alkan; X₂ → dihalogenoalkan; HX → halogenoalkan; H₂O (H⁺) → alkohol.</p>
<p><b>Reguła Markownikowa:</b> przy addycji HX/H₂O do niesymetrycznego alkenu H przyłącza się do atomu C bogatszego w wodór: CH₂=CH–CH₃ + HBr → CH₃–CHBr–CH₃ (2-bromopropan, główny); CH₂=CH–CH₃ + H₂O —H⁺→ CH₃CH(OH)CH₃.</p>
<p><b>Odbarwianie wody bromowej</b> (addycja, A<sub>E</sub>) i <b>roztworu KMnO₄</b>: 3CH₂=CH₂ + 2KMnO₄ + 4H₂O → 3CH₂OH–CH₂OH + 2MnO₂↓ + 2KOH (środowisko obojętne – fioletowy roztwór odbarwia się, brunatny osad). Testy odróżniają alkeny od alkanów.</p>
<p><b>Polimeryzacja:</b> n CH₂=CH₂ → (–CH₂–CH₂–)ₙ polietylen PE; propen → PP; chloroeten (chlorek winylu) → PVC (–CH₂–CHCl–)ₙ; tetrafluoroeten → teflon PTFE; styren → polistyren PS. Mer, monomer, stopień polimeryzacji.</p>
<p><b>Dieny:</b> buta-1,3-dien → kauczuk syntetyczny (polibutadien); izopren (2-metylobuta-1,3-dien) → kauczuk naturalny; wulkanizacja – sieciowanie siarką (guma).</p>`,
sq:[["Produkt główny: 2-metylopropen + HCl.","2-chloro-2-metylopropan."],["Jak odróżnić heksan od heks-1-enu?","Woda bromowa/KMnO₄ – heks-1-en odbarwia, heksan nie."]]},
{id:"o1-alkiny",t:"Alkiny – etyn",pp:"XIII.4–XIII.6",h:`
<p>CₙH₂ₙ₋₂, C≡C (σ+2π), sp. Etyn (acetylen) – otrzymywanie z karbidu: CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂ (ew. z metanu w 1500°C: 2CH₄ → C₂H₂ + 3H₂). Addycja stopniowa: HC≡CH + Br₂ → CHBr=CHBr; + Br₂ → CHBr₂–CHBr₂. HC≡CH + HCl → CH₂=CHCl (chlorek winylu, do PVC). Addycja wody (Kuczerow, HgSO₄/H₂SO₄): HC≡CH + H₂O → [CH₂=CHOH] → CH₃CHO (etanal; enol nietrwały – tautomeria). Trimeryzacja: 3C₂H₂ → C₆H₆ (C, 600°C). Spalanie – palnik acetylenowo-tlenowy (spawanie): 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O.</p>`,
sq:[["Produkt addycji wody do propynu (Kuczerow)?","Propanon (aceton) – zgodnie z Markownikowem."]]},
{id:"o1-arom",t:"Węglowodory aromatyczne, kierowanie podstawników",pp:"XIII.7, XIII.8",h:`
<p><b>Benzen</b> C₆H₆ – płaski pierścień, sp², zdelokalizowany sekstet elektronów π, wszystkie wiązania C–C równej długości (pośredniej). Aromatyczność: płaski, cykliczny, (4n+2) elektronów π. Nie odbarwia wody bromowej ani KMnO₄ – ulega <b>substytucji elektrofilowej</b>:</p>
<div class="ex">bromowanie: C₆H₆ + Br₂ —FeBr₃→ C₆H₅Br + HBr<br>nitrowanie: C₆H₆ + HNO₃ —stęż. H₂SO₄→ C₆H₅NO₂ + H₂O (H₂SO₄ wytwarza NO₂⁺)<br>sulfonowanie: C₆H₆ + H₂SO₄ → C₆H₅SO₃H + H₂O<br>alkilowanie Friedla-Craftsa: C₆H₆ + CH₃Cl —AlCl₃→ C₆H₅CH₃ + HCl<br>addycja (warunki drastyczne): C₆H₆ + 3H₂ —Ni, T, p→ C₆H₁₂; C₆H₆ + 3Cl₂ —hν→ C₆H₆Cl₆</div>
<p><b>Toluen:</b> w świetle (hν) – substytucja rodnikowa w łańcuchu bocznym: C₆H₅CH₃ + Cl₂ → C₆H₅CH₂Cl + HCl; z katalizatorem FeCl₃ – w pierścieniu (orto i para). Utlenianie KMnO₄ (H⁺, T) → kwas benzoesowy C₆H₅COOH (odbarwia, w odróżnieniu od benzenu).</p>
<table><tr><th>Podstawniki I rodzaju (orto, para)</th><th>II rodzaju (meta)</th></tr><tr><td>–CH₃ i alkile, –OH, –NH₂, –OR, halogeny (dezaktywujące)</td><td>–NO₂, –COOH, –CHO, –SO₃H, –CN, –COR</td></tr></table>
<p>Nitrowanie toluenu → 2- i 4-nitrotoluen; nitrowanie nitrobenzenu → 1,3-dinitrobenzen. Trotyl (TNT) = 2,4,6-trinitrotoluen. Areny wielopierścieniowe: naftalen C₁₀H₈, antracen.</p>`,
sq:[["Główne produkty monobromowania toluenu z FeBr₃?","2-bromotoluen i 4-bromotoluen."],["Produkt nitrowania kwasu benzoesowego?","Kwas 3-nitrobenzoesowy (–COOH kieruje w meta)."]]},
{id:"o1-halo",t:"Halogenopochodne",pp:"XIII.9",h:`
<p>Otrzymywanie: S<sub>R</sub> alkanów, addycja HX/X₂ do alkenów/alkinów, alkohol + HX. Reakcje: <b>substytucja nukleofilowa</b> z wodnym NaOH/KOH → alkohol (CH₃CH₂Cl + NaOH → CH₃CH₂OH + NaCl); <b>eliminacja</b> z KOH w etanolu (T) → alken; z NH₃ → aminy; z Na → reakcja Wurtza. Zastosowania i zagrożenia: freony CFC (niszczą ozon), PVC, teflon, DDT, rozpuszczalniki (CHCl₃, CCl₄).</p>`,
sq:[["Odróżnij warunki S_N i E dla bromoetanu.","Wodny roztwór NaOH → etanol (S_N); alkoholowy KOH na gorąco → eten (E)."]]},
{id:"o1-ropa",t:"Ropa naftowa, gaz ziemny, węgiel, paliwa",pp:"XIII.10, XIII.11",h:`
<ul><li><b>Destylacja frakcyjna ropy</b> (wg temperatur wrzenia): gaz rafineryjny (C1–C4), benzyna (C5–C11), nafta (C10–C15), olej napędowy (C14–C20), mazut → (destylacja pod zmniejszonym ciśnieniem) oleje smarowe, parafina, wazelina; pozostałość – asfalt/gudron.</li>
<li><b>Kraking</b> – rozpad długich łańcuchów na krótsze (alkany + alkeny), zwiększa wydajność benzyny: C₁₆H₃₄ → C₈H₁₈ + C₈H₁₆. Termiczny i katalityczny.</li>
<li><b>Reforming</b> – przekształcenie węglowodorów prostołańcuchowych w rozgałęzione, cykliczne i aromatyczne (izomeryzacja, cyklizacja, aromatyzacja: C₆H₁₄ → C₆H₆ + 4H₂) – podwyższa LO.</li>
<li><b>Liczba oktanowa (LO)</b> – odporność benzyny na spalanie stukowe: izooktan (2,2,4-trimetylopentan) LO = 100, heptan LO = 0. Wyższa LO – rozgałęzione, aromatyczne, alkeny. Dodatki: etanol, MTBE (dawniej czteroetylek ołowiu – zakazany).</li>
<li><b>Gaz ziemny</b> – głównie CH₄; <b>LPG</b> – propan-butan. <b>Węgiel kamienny</b> – sucha destylacja (pirogenizacja, bez powietrza): koks, smoła węglowa (areny), woda pogazowa (NH₃), gaz koksowniczy (H₂, CH₄, CO).</li>
<li>Paliwa alternatywne: biogaz, bioetanol, biodiesel (estry metylowe kwasów tłuszczowych), wodór.</li></ul>`,
sq:[["Czym różni się kraking od reformingu?","Kraking skraca łańcuchy; reforming zmienia budowę (rozgałęzianie, aromatyzacja) bez istotnej zmiany liczby C, podnosi LO."]]},
{id:"o1-bledy",t:"⚠️ Typowe błędy",pp:"–",h:`<ul><li>Benzen „odbarwia wodę bromową” – nie, zachodzi substytucja tylko z katalizatorem.</li><li>Nazywanie 2-etylobutanu (prawidłowo 3-metylopentan).</li><li>Izomeria cis-trans przy but-1-enie.</li><li>Brak warunków (hν, FeBr₃, Ni) nad strzałką – CKE często wymaga.</li><li>Pomylenie produktu S_R toluenu (łańcuch) z S_E (pierścień).</li></ul>`,sq:[]}
];

TX.org2=[
{id:"o2-alk",t:"Alkohole monohydroksylowe",pp:"XIV.1–XIV.4",h:`
<p>R–OH, nazwy: propan-2-ol, 2-metylopropan-2-ol. Rzędowość: I° (etanol), II° (propan-2-ol), III° (2-metylopropan-2-ol). Wiązania wodorowe → wysokie t.wrz. w porównaniu z alkanami i eterami o podobnej masie; niższe alkohole mieszają się z wodą. Roztwory wodne – odczyn obojętny (nie dysocjują).</p>
<p><b>Otrzymywanie:</b> hydratacja alkenów (H⁺), hydroliza halogenoalkanów (NaOH aq), redukcja aldehydów/ketonów (H₂, Ni), fermentacja alkoholowa: C₆H₁₂O₆ —drożdże→ 2C₂H₅OH + 2CO₂; metanol: CO + 2H₂ → CH₃OH.</p>
<div class="ex"><b>Reakcje:</b><br>z sodem: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑ (etanolan sodu – roztwór zasadowy po dodaniu wody: C₂H₅O⁻ + H₂O → C₂H₅OH + OH⁻)<br>z HX: C₂H₅OH + HBr → C₂H₅Br + H₂O<br>spalanie: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O<br>dehydratacja wewnątrzcząsteczkowa (Al₂O₃ lub H₂SO₄, ~170°C) → alken; międzycząsteczkowa (~140°C) → eter: 2C₂H₅OH → C₂H₅–O–C₂H₅ + H₂O<br>estryfikacja z kwasami (zob. estry)</div>
<p><b>Utlenianie:</b> I° → aldehyd → kwas; II° → keton; III° – nie utlenia się łagodnie.</p>
<div class="ex">CH₃CH₂OH + CuO —T→ CH₃CHO + Cu + H₂O (czarny drucik miedziany staje się czerwonobrunatny)<br>3CH₃CH₂OH + Cr₂O₇²⁻ + 8H⁺ → 3CH₃CHO + 2Cr³⁺ + 7H₂O (pomarańczowy → zielony/zielononiebieski; zasada alkomatu)<br>5C₂H₅OH + 4MnO₄⁻ + 12H⁺ → 5CH₃COOH + 4Mn²⁺ + 11H₂O (odbarwienie fioletu)<br>CH₃CH(OH)CH₃ + CuO → CH₃COCH₃ + Cu + H₂O</div>
<p>Metanol – silnie toksyczny (ślepota, śmierć); etanol – uzależnia, metabolizowany do etanalu.</p>`,
sq:[["Bilans: utlenianie propan-1-olu dichromianem do aldehydu.","3C₃H₇OH + Cr₂O₇²⁻ + 8H⁺ → 3C₂H₅CHO + 2Cr³⁺ + 7H₂O"]]},
{id:"o2-poliol",t:"Alkohole polihydroksylowe – glikol, glicerol",pp:"XIV.5, XIV.6",h:`
<p>Etano-1,2-diol (glikol etylenowy) – płyny do chłodnic, toksyczny; propano-1,2,3-triol (glicerol) – kosmetyki, nitrogliceryna. Gęste, słodkawe, dobrze rozpuszczalne.</p>
<p><b>Próba z Cu(OH)₂</b> (świeżo strącony, środowisko zasadowe, bez ogrzewania): alkohole z grupami –OH przy sąsiednich atomach C tworzą <b>szafirowy (ciemnoniebieski) roztwór</b> związku kompleksowego; etanol – brak zmian (niebieski osad pozostaje). Odróżnia glicerol od etanolu.</p>
<p>Utlenianie glikolu: 5C₂H₄(OH)₂ + 8MnO₄⁻ + 24H⁺ → 5(COOH)₂ + 8Mn²⁺ + 22H₂O. Glicerol + 3HNO₃ → triazotan(V) glicerolu (nitrogliceryna) + 3H₂O (estryfikacja, H₂SO₄).</p>`,
sq:[["Jak odróżnić etanol od glicerolu?","Świeży Cu(OH)₂: glicerol – szafirowy roztwór, etanol – osad bez zmian."]]},
{id:"o2-fenol",t:"Fenole",pp:"XIV.7–XIV.9",h:`
<p>Fenol C₆H₅OH – grupa –OH przy pierścieniu. Słaby kwas (mocniejszy od alkoholi i wody, słabszy od H₂CO₃): C₆H₅OH + H₂O ⇄ C₆H₅O⁻ + H₃O⁺.</p>
<div class="ex">z Na: 2C₆H₅OH + 2Na → 2C₆H₅ONa + H₂<br>z NaOH: C₆H₅OH + NaOH → C₆H₅ONa + H₂O (alkohole nie reagują!)<br>wypieranie przez CO₂: C₆H₅ONa + CO₂ + H₂O → C₆H₅OH + NaHCO₃ (zmętnienie – dowód, że fenol słabszy od kwasu węglowego)<br>bromowanie (woda bromowa, bez katalizatora): C₆H₅OH + 3Br₂ → 2,4,6-tribromofenol↓ (biały osad) + 3HBr<br>nitrowanie: → 2- i 4-nitrofenol; nadmiar → 2,4,6-trinitrofenol (kwas pikrynowy)<br>z FeCl₃: fioletowe zabarwienie (wykrywanie fenoli)</div>
<p>–OH aktywuje pierścień i kieruje w orto/para. Fenol – toksyczny, żrący, dezynfekujący; żywice fenolowo-formaldehydowe (polikondensacja).</p>`,
sq:[["Jak wykazać, że fenol jest słabszym kwasem niż H₂CO₃?","Wprowadzić CO₂ do roztworu fenolanu sodu – wydziela się fenol (zmętnienie)."]]},
{id:"o2-ald",t:"Aldehydy i ketony – próby Tollensa i Trommera",pp:"XV.1–XV.4",h:`
<p>Aldehydy R–CHO (metanal, etanal, propanal), ketony R–CO–R′ (propanon, butanon). Brak wiązań wodorowych między cząsteczkami → t.wrz. niższe niż alkoholi. Metanal (formaldehyd; 40% roztwór – formalina) – konserwowanie, denaturacja białek, toksyczny. Aceton – rozpuszczalnik.</p>
<p><b>Otrzymywanie:</b> utlenianie alkoholi I° (aldehydy) i II° (ketony), addycja wody do etynu (etanal).</p>
<div class="ex"><b>Próba Tollensa</b> (lustra srebrnego) – amoniakalny roztwór Ag₂O, ogrzewanie w łaźni wodnej: srebrny nalot na ściankach.<br>R–CHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ → R–COO⁻ + NH₄⁺ + 2Ag↓ + 3NH₃ + H₂O<br>(zapis uproszczony: R–CHO + Ag₂O → R–COOH + 2Ag)<br><b>Próba Trommera</b> – świeży Cu(OH)₂ + NaOH, ogrzewanie: niebieski osad → ceglastoczerwony osad Cu₂O.<br>R–CHO + 2Cu(OH)₂ + OH⁻ → R–COO⁻ + Cu₂O↓ + 3H₂O<br>(uproszczony: R–CHO + 2Cu(OH)₂ → R–COOH + Cu₂O + 2H₂O)</div>
<p>Metanal w próbie Tollensa redukuje 4 Ag⁺ (HCHO → HCOOH → CO₂). Ketony nie dają prób (wyjątek – fruktoza w środowisku zasadowym). Aldehydy redukuje się do alkoholi I°, ketony do II°.</p>`,
sq:[["Jak odróżnić propanal od propanonu?","Próba Tollensa/Trommera – pozytywna tylko dla propanalu."],["Obserwacja w próbie Trommera?","Niebieski osad zmienia się w ceglastoczerwony."]]},
{id:"o2-kwasy",t:"Kwasy karboksylowe",pp:"XVI.1–XVI.6",h:`
<p>R–COOH: metanowy (mrówkowy), etanowy (octowy), propanowy, butanowy (masłowy), benzoesowy, szczawiowy (etanodiowy), wyższe: palmitynowy C₁₅H₃₁COOH, stearynowy C₁₇H₃₅COOH, oleinowy C₁₇H₃₃COOH (1 C=C, nienasycony), linolowy. Dimery przez wiązania wodorowe → wysokie t.wrz.</p>
<p><b>Moc:</b> słabe; moc maleje ze wzrostem łańcucha (HCOOH Ka≈1,8·10⁻⁴ &gt; CH₃COOH 1,8·10⁻⁵); podstawniki elektroujemne (Cl) zwiększają moc: CCl₃COOH &gt; CHCl₂COOH &gt; CH₂ClCOOH &gt; CH₃COOH. Kwas octowy mocniejszy od węglowego: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂↑ + H₂O.</p>
<div class="ex">z metalem: 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂<br>z tlenkiem: 2HCOOH + CaO → (HCOO)₂Ca + H₂O<br>z zasadą: CH₃COOH + NaOH → CH₃COONa + H₂O<br>hydroliza soli: CH₃COO⁻ + H₂O ⇄ CH₃COOH + OH⁻ (odczyn zasadowy)<br>wypieranie silniejszym kwasem: CH₃COONa + HCl → CH₃COOH + NaCl (zapach octu)</div>
<p><b>Kwas mrówkowy</b> ma grupę aldehydową – daje próbę Tollensa i Trommera oraz odbarwia KMnO₄. Wyższe kwasy nienasycone odbarwiają wodę bromową (oleinowy), nasycone nie. Mydła – sole sodowe/potasowe wyższych kwasów. Kwas szczawiowy redukuje MnO₄⁻: 5H₂C₂O₄ + 2MnO₄⁻ + 6H⁺ → 10CO₂ + 2Mn²⁺ + 8H₂O.</p>
<p><b>Amidy:</b> CH₃COOH + NH₃ → CH₃COONH₄ —T→ CH₃CONH₂ + H₂O; mocznik (NH₂)₂CO – diamid kwasu węglowego, hydroliza: (NH₂)₂CO + H₂O → CO₂ + 2NH₃; ogrzewany tworzy biuret.</p>`,
sq:[["Uszereguj wg mocy: CH₃COOH, HCOOH, ClCH₂COOH.","CH₃COOH < HCOOH < ClCH₂COOH."]]},
{id:"o2-hydroksy",t:"Hydroksykwasy, laktydy, laktony",pp:"XVI.7, XVI.8",h:`
<p>Kwas mlekowy (2-hydroksypropanowy) – chiralny, fermentacja mlekowa; kwas salicylowy (2-hydroksybenzoesowy) – fenolokwas (daje fioletowe zabarwienie z FeCl₃); kwas cytrynowy, winowy, jabłkowy. Mają właściwości alkoholi i kwasów.</p>
<p><b>Laktyd</b> – cykliczny diester z dwóch cząsteczek α-hydroksykwasu: 2CH₃CH(OH)COOH → laktyd + 2H₂O; polilaktyd PLA – biodegradowalny polimer. <b>Lakton</b> – cykliczny ester wewnątrzcząsteczkowy (γ- i δ-hydroksykwasy, pierścienie 5- i 6-członowe): kwas 4-hydroksybutanowy → γ-butyrolakton + H₂O.</p>
<p>Aspiryna: kwas salicylowy + bezwodnik octowy → kwas acetylosalicylowy + CH₃COOH (estryfikacja fenolowej –OH).</p>`,
sq:[["Czym różni się laktyd od laktonu?","Laktyd – z dwóch cząsteczek (diester międzycząsteczkowy); lakton – z jednej (wewnątrzcząsteczkowy)."]]},
{id:"o2-estry",t:"Estry – estryfikacja i hydroliza",pp:"XVII.1–XVII.3",h:`
<p>R–COO–R′; nazwa: etanian (octan) etylu, metanian metylu. Lotne, przyjemny zapach (aromaty: octan pentylu – gruszkowy, maślan etylu – ananasowy), słabo rozpuszczalne w wodzie (brak wiązań wodorowych między cząsteczkami estru).</p>
<div class="ex"><b>Estryfikacja</b> (odwracalna): CH₃COOH + C₂H₅OH ⇄ CH₃COOC₂H₅ + H₂O (stęż. H₂SO₄, T). Rola H₂SO₄: katalizator oraz czynnik wiążący wodę – przesuwa równowagę w prawo (reguła przekory). Atom O mostka estrowego pochodzi z alkoholu (badania izotopowe ¹⁸O).<br><b>Hydroliza kwasowa</b> (odwracalna): CH₃COOC₂H₅ + H₂O ⇄ CH₃COOH + C₂H₅OH (H⁺)<br><b>Hydroliza zasadowa</b> (nieodwracalna, zmydlanie): CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH</div>
<p>Estry kwasów nieorganicznych: triazotan(V) glicerolu, fosforany w DNA. Izomeria estrów i kwasów: C₃H₆O₂ – kwas propanowy, octan metylu, mrówczan etylu (ten ostatni daje próbę Tollensa!).</p>`,
sq:[["Dlaczego stosuje się nadmiar alkoholu w estryfikacji?","Przesuwa równowagę w stronę estru (reguła przekory), zwiększa wydajność."]]},
{id:"o2-tluszcze",t:"Tłuszcze i mydła",pp:"XVII.4–XVII.7",h:`
<p>Tłuszcze – triestry glicerolu i wyższych kwasów tłuszczowych (triacyloglicerole). Stałe (zwierzęce, przewaga reszt nasyconych – palmitynowy, stearynowy) i ciekłe (oleje roślinne, reszty nienasycone – oleinowy, linolowy; wyjątek: tran ciekły zwierzęcy, olej kokosowy stały).</p>
<div class="ex">Utwardzanie (uwodornienie, Ni): tristearynian z trioleinianu: (C₁₇H₃₃COO)₃C₃H₅ + 3H₂ → (C₁₇H₃₅COO)₃C₃H₅ (margaryna)<br>Odróżnianie: woda bromowa/KMnO₄ – olej odbarwia, tłuszcz nasycony nie.<br>Zmydlanie: (C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₅COONa + C₃H₅(OH)₃</div>
<p><b>Mydła</b> – sodowe (stałe), potasowe (maziste). Cząsteczka: łańcuch węglowodorowy – część <b>hydrofobowa</b> (lipofilowa), grupa –COO⁻ – część <b>hydrofilowa</b>. Mechanizm mycia: obniżenie napięcia powierzchniowego, tworzenie micel (ogony do brudu), emulgowanie tłuszczu. Roztwór mydła – odczyn zasadowy: C₁₇H₃₅COO⁻ + H₂O ⇄ C₁₇H₃₅COOH + OH⁻. W wodzie twardej mydło się wytrąca: 2C₁₇H₃₅COO⁻ + Ca²⁺ → (C₁₇H₃₅COO)₂Ca↓ (nie pieni się); w kwaśnym – wytrąca się kwas tłuszczowy. Detergenty syntetyczne (np. alkilobenzenosulfoniany) działają też w wodzie twardej.</p>`,
sq:[["Dlaczego mydło słabo pieni się w wodzie twardej?","Tworzy nierozpuszczalne sole wapnia/magnezu (osad)."],["Wskaż część hydrofobową stearynianu sodu.","Łańcuch C₁₇H₃₅–."]]},
{id:"o2-bledy",t:"⚠️ Typowe błędy",pp:"–",h:`<ul><li>„Etanol ma odczyn zasadowy, bo ma OH” – odczyn obojętny.</li><li>Fenol + NaHCO₃ – nie reaguje (fenol słabszy od H₂CO₃).</li><li>Brak informacji o ogrzewaniu w próbach Tollensa/Trommera.</li><li>Hydroliza zasadowa estru zapisana jako odwracalna.</li><li>Ketony – „dają próbę Tollensa”.</li><li>Mylenie Cu(OH)₂ na zimno (poliole) i na gorąco (aldehydy).</li></ul>`,sq:[]}
];

TX.org3=[
{id:"o3-aminy",t:"Aminy i anilina",pp:"XVIII.1–XVIII.4",h:`
<p>Pochodne amoniaku: I° CH₃NH₂ (metyloamina), II° (CH₃)₂NH, III° (CH₃)₃N; aromatyczna – anilina (fenyloamina) C₆H₅NH₂. Wolna para elektronowa na N → właściwości zasadowe.</p>
<div class="ex">CH₃NH₂ + H₂O ⇄ CH₃NH₃⁺ + OH⁻ (odczyn zasadowy)<br>CH₃NH₂ + HCl → CH₃NH₃⁺Cl⁻ (chlorek metyloamoniowy)<br>C₆H₅NH₂ + HCl → C₆H₅NH₃⁺Cl⁻ (anilina rozpuszcza się w HCl); C₆H₅NH₃Cl + NaOH → C₆H₅NH₂ + NaCl + H₂O (wypieranie słabej zasady)<br>bromowanie aniliny wodą bromową: C₆H₅NH₂ + 3Br₂ → 2,4,6-tribromoanilina↓ (biały osad) + 3HBr</div>
<p><b>Moc zasad:</b> aminy alifatyczne &gt; NH₃ &gt; anilina (para elektronowa N sprzężona z pierścieniem). Anilina – roztwór praktycznie obojętny wobec wskaźników, słabo rozpuszczalna w wodzie. Otrzymywanie aniliny: redukcja nitrobenzenu: C₆H₅NO₂ + 3H₂ —kat.→ C₆H₅NH₂ + 2H₂O (lub Fe/HCl). Aminy alifatyczne: halogenoalkan + NH₃.</p>
<p><b>Amidy</b> R–CONH₂ – praktycznie obojętne; hydroliza: kwasowa CH₃CONH₂ + H₂O + H⁺ → CH₃COOH + NH₄⁺; zasadowa CH₃CONH₂ + OH⁻ → CH₃COO⁻ + NH₃↑.</p>`,
sq:[["Uszereguj wg mocy zasad: NH₃, anilina, etyloamina.","anilina < NH₃ < etyloamina."]]},
{id:"o3-aa",t:"Aminokwasy – jon obojnaczy, punkt izoelektryczny",pp:"XVIII.5–XVIII.7",h:`
<p>α-Aminokwasy białkowe: H₂N–CHR–COOH. Glicyna (R=H, jedyna achiralna), alanina (CH₃), seryna (CH₂OH), cysteina (CH₂SH), fenyloalanina, tyrozyna (zawiera pierścień fenolowy), kwas glutaminowy i asparaginowy (kwasowe, dodatkowa –COOH), lizyna (zasadowa, dodatkowa –NH₂). Naturalne – szereg <b>L</b> (grupa –NH₂ po lewej w projekcji Fischera, –COOH u góry).</p>
<p><b>Jon obojnaczy (amfijon):</b> H₃N⁺–CHR–COO⁻ – w ciele stałym i w roztworze; stąd wysokie t.t., dobra rozpuszczalność w wodzie, brak lotności. <b>Amfoteryczność:</b></p>
<div class="ex">H₃N⁺–CH₂–COO⁻ + H₃O⁺ → H₃N⁺–CH₂–COOH + H₂O (kation w środowisku kwasowym)<br>H₃N⁺–CH₂–COO⁻ + OH⁻ → H₂N–CH₂–COO⁻ + H₂O (anion w zasadowym)</div>
<p><b>Punkt izoelektryczny pI</b> – pH, przy którym przeważa jon obojnaczy (ładunek wypadkowy 0, brak migracji w polu elektrycznym, najmniejsza rozpuszczalność). W pH &lt; pI aminokwas jest kationem (wędruje do katody), w pH &gt; pI – anionem (do anody). Elektroforeza rozdziela aminokwasy wg pI.</p>`,
sq:[["Jaką postać ma alanina w pH = 1?","Kation H₃N⁺–CH(CH₃)–COOH."],["Dlaczego glicyna nie jest czynna optycznie?","Nie ma asymetrycznego atomu C (dwa atomy H przy C-α)."]]},
{id:"o3-peptydy",t:"Peptydy i reakcja biuretowa",pp:"XVIII.8–XVIII.10",h:`
<p><b>Wiązanie peptydowe</b> –CO–NH– powstaje w kondensacji grupy –COOH jednego aminokwasu z –NH₂ drugiego: H₂N–CH₂–COOH + H₂N–CH(CH₃)–COOH → H₂N–CH₂–CO–NH–CH(CH₃)–COOH + H₂O (Gly-Ala). Zapis od N-końca do C-końca. Z dwóch różnych aminokwasów – 4 dipeptydy (Gly-Gly, Ala-Ala, Gly-Ala, Ala-Gly); liczba tripeptydów z 3 różnych bez powtórzeń – 3! = 6.</p>
<p><b>Hydroliza</b> peptydu (H⁺ lub OH⁻ lub enzymy) – rozkład do aminokwasów.</p>
<div class="ex"><b>Reakcja biuretowa:</b> białko/peptyd (≥2 wiązania peptydowe, czyli od tripeptydu) + NaOH + CuSO₄(aq) → <b>fioletowe</b> zabarwienie (kompleks Cu²⁺). Dipeptydy i aminokwasy – barwa niebieska (wynik ujemny). Nazwa od biuretu H₂N–CO–NH–CO–NH₂ (z ogrzewania mocznika: 2(NH₂)₂CO → biuret + NH₃).</div>`,
sq:[["Czy Gly-Ala daje reakcję biuretową?","Nie – ma tylko jedno wiązanie peptydowe."]]},
{id:"o3-bialka",t:"Białka – struktura, denaturacja, wysalanie",pp:"XIX.1–XIX.4",h:`
<ul><li><b>Struktura I-rzędowa</b> – sekwencja aminokwasów (wiązania peptydowe); <b>II-rzędowa</b> – α-helisa, β-harmonijka (wiązania wodorowe między grupami C=O i N–H łańcucha głównego); <b>III-rzędowa</b> – przestrzenne pofałdowanie łańcucha (mostki disiarczkowe –S–S–, wiązania wodorowe, jonowe, oddziaływania hydrofobowe między łańcuchami bocznymi); <b>IV-rzędowa</b> – układ kilku podjednostek (hemoglobina).</li>
<li>Białka proste i złożone; fibrylarne (keratyna, kolagen – nierozpuszczalne) i globularne (albuminy, enzymy). Roztwory białek – <b>koloidy</b> (efekt Tyndalla).</li>
<li><b>Wysalanie</b> (koagulacja odwracalna) – sole metali lekkich (NaCl, (NH₄)₂SO₄) w dużym stężeniu; po dodaniu wody osad się rozpuszcza, białko zachowuje funkcje.</li>
<li><b>Denaturacja</b> (nieodwracalna) – zniszczenie struktury II–IV-rzędowej (bez rozerwania wiązań peptydowych): temperatura, sole metali ciężkich (CuSO₄, Pb(NO₃)₂, HgCl₂), stężone kwasy i zasady, etanol, formalina, aceton, promieniowanie UV. Białko traci aktywność biologiczną. Białko jaja + CuSO₄ → osad, który nie rozpuszcza się w wodzie.</li></ul>
<div class="ex"><b>Reakcja ksantoproteinowa:</b> białko + stęż. HNO₃ → <b>żółte</b> zabarwienie (nitrowanie pierścieni aromatycznych tyrozyny, fenyloalaniny); po dodaniu NH₃ – pomarańczowe. Żółte plamy na skórze po HNO₃. <b>Wykrywanie siarki</b>: ogrzewanie z NaOH + Pb(CH₃COO)₂ → czarny osad PbS (cysteina).</div>`,
sq:[["Czym różni się wysalanie od denaturacji?","Wysalanie odwracalne (lekkie sole), denaturacja nieodwracalna, niszczy strukturę II–IV."],["Jakie wiązania stabilizują strukturę II-rzędową?","Wiązania wodorowe między C=O i N–H wiązań peptydowych."]]},
{id:"o3-mono",t:"Monosacharydy – glukoza, fruktoza, projekcje",pp:"XX.1–XX.5",h:`
<p>Cukry proste: aldozy i ketozy; triozy (aldehyd glicerynowy, dihydroksyaceton), pentozy (ryboza, deoksyryboza), heksozy (glukoza, galaktoza – aldoheksozy; fruktoza – ketoheksoza). C₆H₁₂O₆ – glukoza i fruktoza są izomerami.</p>
<p><b>Szereg D/L</b> – według położenia –OH przy asymetrycznym atomie C najbardziej oddalonym od grupy karbonylowej w projekcji Fischera (po prawej – D). Naturalne cukry – szereg D. Glukoza ma 4 centra stereogeniczne (2⁴ = 16 aldoheksoz).</p>
<p><b>Formy pierścieniowe (Haworth):</b> grupa –OH przy C5 atakuje C=O → hemiacetal; glukoza – pierścień 6-członowy (piranoza), fruktoza – 5-członowy (furanoza). Anomery α (–OH półacetalowe pod płaszczyzną, po przeciwnej stronie niż –CH₂OH) i β (nad). <b>Mutarotacja</b> – przechodzenie α ⇄ forma łańcuchowa ⇄ β w roztworze.</p>
<table><tr><th>Próba</th><th>Glukoza</th><th>Fruktoza</th></tr><tr><td>Tollens, Trommer</td><td>+ (grupa aldehydowa)</td><td>+ (w środowisku zasadowym izomeryzuje do aldozy – przemiana przez enodiol)</td></tr><tr><td>Cu(OH)₂ na zimno</td><td>szafirowy roztwór (poliol)</td><td>szafirowy roztwór</td></tr><tr><td>woda bromowa (pH obojętne/słabo kwasowe)</td><td>odbarwia (→ kwas glukonowy)</td><td>nie odbarwia</td></tr></table>
<p>Odróżnianie glukozy od fruktozy – <b>woda bromowa</b>. Fermentacja alkoholowa glukozy; fotosynteza: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.</p>`,
sq:[["Jak odróżnić glukozę od fruktozy?","Woda bromowa – glukoza ją odbarwia, fruktoza nie."]]},
{id:"o3-di",t:"Disacharydy – wiązanie glikozydowe",pp:"XX.6, XX.7",h:`
<p><b>Wiązanie O-glikozydowe</b> – powstaje w kondensacji grupy –OH półacetalowej jednego cukru z grupą –OH drugiego.</p>
<ul><li><b>Sacharoza</b> (glukoza + fruktoza, α-1,2-β) – <b>nieredukująca</b> (obie –OH półacetalowe zaangażowane), nie daje prób Tollensa/Trommera; daje szafirowy roztwór z Cu(OH)₂ na zimno. Hydroliza (H⁺, inwertaza): C₁₂H₂₂O₁₁ + H₂O → glukoza + fruktoza (cukier inwertowany) – produkty już redukują.</li>
<li><b>Maltoza</b> (2 × α-glukoza, α-1,4) – <b>redukująca</b>, wolna –OH półacetalowa; <b>laktoza</b> (galaktoza + glukoza, β-1,4) – redukująca; celobioza (β-1,4) – redukująca.</li></ul>
<div class="ex"><b>Doświadczenie:</b> roztwór sacharozy – Trommer ujemny (powstaje czarny CuO z rozkładu Cu(OH)₂). Po ogrzaniu z HCl i zobojętnieniu NaOH – Trommer dodatni (ceglasty Cu₂O).</div>`,
sq:[["Dlaczego sacharoza jest nieredukująca?","Wiązanie glikozydowe łączy oba anomeryczne atomy C – brak wolnej grupy półacetalowej."]]},
{id:"o3-poli",t:"Polisacharydy – skrobia i celuloza",pp:"XX.8, XX.9",h:`
<table><tr><th></th><th>Skrobia</th><th>Celuloza</th></tr>
<tr><td>mer</td><td>α-glukoza</td><td>β-glukoza</td></tr><tr><td>wiązania</td><td>α-1,4 (amyloza – helisa) + α-1,6 (amylopektyna – rozgałęzienia)</td><td>β-1,4, łańcuchy liniowe, liczne wiązania wodorowe → włókna</td></tr>
<tr><td>rozpuszczalność</td><td>w gorącej wodzie – kleik (koloid)</td><td>nierozpuszczalna</td></tr><tr><td>funkcja</td><td>zapasowa (rośliny); glikogen – u zwierząt</td><td>budulcowa (ściany komórkowe)</td></tr>
<tr><td>z I₂ (płyn Lugola)</td><td><b>granatowe</b> zabarwienie (znika po ogrzaniu, wraca po ochłodzeniu)</td><td>brak</td></tr><tr><td>Tollens/Trommer</td><td>ujemne</td><td>ujemne</td></tr></table>
<p>Hydroliza: (C₆H₁₀O₅)ₙ + nH₂O → nC₆H₁₂O₆ (H⁺, T lub enzymy); stopniowo skrobia → dekstryny → maltoza → glukoza. Człowiek nie trawi celulozy (brak enzymu – celulazy). Zastosowania celulozy: papier, włókna (wiskoza), octan celulozy, nitroceluloza.</p>`,
sq:[["Jak wykryć skrobię w ziemniaku?","Płyn Lugola (I₂ w KI) – granatowe zabarwienie."]]},
{id:"o3-ident",t:"🔬 Zbiorcza tabela prób identyfikacyjnych w chemii organicznej",pp:"XIII–XX",h:`
<table><tr><th>Odczynnik</th><th>Wynik dodatni</th><th>Wykrywa</th></tr>
<tr><td>woda bromowa</td><td>odbarwienie</td><td>C=C, C≡C (addycja); fenol, anilina (biały osad); glukoza (utlenianie)</td></tr>
<tr><td>KMnO₄(aq)</td><td>odbarwienie (brunatny MnO₂ w obojętnym)</td><td>alkeny, alkiny, alkohole I°/II°, aldehydy, HCOOH, toluen (T)</td></tr>
<tr><td>Tollens [Ag(NH₃)₂]⁺, T</td><td>lustro srebrne</td><td>–CHO: aldehydy, HCOOH, mrówczany, glukoza, fruktoza, maltoza, laktoza</td></tr>
<tr><td>Trommer Cu(OH)₂/NaOH, T</td><td>ceglasty Cu₂O</td><td>jw. (cukry redukujące)</td></tr>
<tr><td>Cu(OH)₂ na zimno</td><td>szafirowy roztwór</td><td>poliole (sąsiednie –OH): glikol, glicerol, cukry</td></tr>
<tr><td>Cu²⁺/OH⁻ (biuret)</td><td>fioletowe</td><td>≥2 wiązania peptydowe (białka)</td></tr>
<tr><td>stęż. HNO₃</td><td>żółte (ksantoproteinowa)</td><td>białka z pierścieniami aromatycznymi</td></tr>
<tr><td>I₂/skrobia</td><td>granatowe</td><td>skrobia (lub I₂ przy użyciu skrobi)</td></tr>
<tr><td>FeCl₃(aq)</td><td>fioletowe</td><td>fenole, kwas salicylowy</td></tr>
<tr><td>Na metaliczny</td><td>wydziela się H₂</td><td>–OH (alkohole, fenole), –COOH</td></tr>
<tr><td>NaHCO₃(aq)</td><td>wydziela się CO₂</td><td>kwasy karboksylowe (nie fenole)</td></tr>
<tr><td>CuO, T</td><td>czarny → czerwonobrunatny Cu</td><td>alkohole I° i II°</td></tr>
<tr><td>K₂Cr₂O₇/H⁺</td><td>pomarańczowy → zielony</td><td>alkohole I°, II°, aldehydy</td></tr></table>`,
sq:[["Odczynnik odróżniający etanal, etanol i kwas etanowy jednocześnie?","Np. świeży Cu(OH)₂: kwas – roztworzenie osadu (niebieski roztwór), etanal – po ogrzaniu ceglasty osad, etanol – czarny CuO po ogrzaniu."]]},
{id:"o3-bledy",t:"⚠️ Typowe błędy",pp:"–",h:`<ul><li>Reakcja biuretowa „wykrywa aminokwasy” – nie, minimum tripeptyd.</li><li>Wysalanie mylone z denaturacją.</li><li>Fruktoza jako nieredukująca.</li><li>Rysowanie α/β odwrotnie w Haworthcie.</li><li>Zapis wiązania peptydowego jako –CO–O–.</li><li>Skrobia z I₂ „fioletowa” – CKE akceptuje „granatowe/ciemnoniebieskie”.</li></ul>`,sq:[]}
];

TX.redoks=[
{id:"rd-pojecia",t:"Pojęcia: stopień utlenienia, utleniacz, reduktor",pp:"VIII.1, VIII.2",h:`
<p><b>Stopień utlenienia</b> – liczba ładunków elementarnych, jaką miałby atom, gdyby wszystkie wiązania w drobinie były jonowe (wspólne pary przypisujemy atomowi bardziej elektroujemnemu).</p>
<ul><li><b>Utlenianie</b> – oddawanie elektronów (wzrost stopnia utlenienia); <b>redukcja</b> – przyjmowanie elektronów (spadek).</li><li><b>Utleniacz</b> – drobina przyjmująca elektrony (sama ulega redukcji); <b>reduktor</b> – oddająca elektrony (sama się utlenia).</li><li>Oba procesy zachodzą równocześnie: liczba elektronów oddanych = przyjętych.</li></ul>
<div class="ex">2Fe³⁺ + Sn²⁺ → 2Fe²⁺ + Sn⁴⁺: utleniacz Fe³⁺ (redukcja Fe³⁺ + e⁻ → Fe²⁺), reduktor Sn²⁺ (utlenianie Sn²⁺ → Sn⁴⁺ + 2e⁻).</div>
<p><b>Reakcje szczególne:</b> dysproporcjonowanie – ten sam pierwiastek jednocześnie utlenia się i redukuje (Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O; 2H₂O₂ → 2H₂O + O₂; 3NO₂ + H₂O → 2HNO₃ + NO); synproporcjonowanie (komproporcjonowanie) – atomy tego samego pierwiastka na różnych stopniach dają stopień pośredni (2H₂S + SO₂ → 3S + 2H₂O; IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O).</p>`,
sq:[["Wskaż utleniacz w: Zn + 2Ag⁺ → Zn²⁺ + 2Ag.","Ag⁺ (redukuje się do Ag)."]]},
{id:"rd-stopnie",t:"Obliczanie stopni utlenienia (nieorganiczne i organiczne)",pp:"VIII.3, VIII.4",h:`
<ul><li>Pierwiastek w stanie wolnym: 0 (Na, O₂, S₈, P₄).</li><li>Fluor zawsze −I; tlen zwykle −II (nadtlenki −I: H₂O₂, Na₂O₂, BaO₂; ponadtlenki −½: KO₂; OF₂ +II).</li><li>Wodór +I (wodorki metali −I: NaH, CaH₂).</li><li>Litowce +I, berylowce +II, glin +III.</li><li>Suma stopni utlenienia w cząsteczce = 0, w jonie = ładunek jonu.</li></ul>
<div class="ex"><b>Przykłady:</b> K₂Cr₂O₇: 2(+1) + 2x + 7(−2) = 0 → x = +VI. MnO₄²⁻: x − 8 = −2 → +VI. S₂O₃²⁻: 2x − 6 = −2 → +II (średnio). NH₄⁺: N −III. Fe₃O₄: +8/3 (FeO·Fe₂O₃: Fe(II) i Fe(III)). K₄[Fe(CN)₆]: Fe +II.</div>
<p><b>Typowe stopnie z konfiguracji:</b> pierwiastki bloku s/p – od −(8 − liczba e⁻ wal.) do +liczba e⁻ wal. (S: −II … +VI; N: −III … +V; Cl: −I … +VII); Mn: +II … +VII (4s²3d⁵ → max +VII); Cr: +II, +III, +VI.</p>
<p><b>Związki organiczne</b> – liczymy dla każdego atomu C osobno: wiązanie C–H: −1 dla C; C–O, C–N, C–Cl: +1 dla C (za każde wiązanie; wiązanie podwójne C=O liczy się 2×); C–C: 0. CH₄: −IV; CH₃OH: −II; HCHO: 0; HCOOH: +II; CO₂: +IV. W etanolu: C(H₃) −III, C(H₂OH) −I; w etanalu: CH₃ −III, CHO +I; w kwasie octowym: CH₃ −III, COOH +III.</p>`,
sq:[["Stopień utlenienia C w CH₃Cl?","−II."],["Stopień utlenienia P w H₂PO₄⁻?","+V."]]},
{id:"rd-bilans",t:"Bilans elektronowo-jonowy – metoda krok po kroku",pp:"VIII.5",h:`
<div class="ex"><b>Algorytm (środowisko kwasowe):</b> 1) wyznacz stopnie utlenienia, wskaż utleniacz i reduktor; 2) zapisz równania połówkowe; 3) zbilansuj atomy inne niż O i H; 4) brakujące O uzupełnij H₂O; 5) brakujące H uzupełnij H⁺; 6) ładunki uzupełnij elektronami; 7) pomnóż tak, by liczba e⁻ była równa; 8) dodaj, skróć; 9) sprawdź atomy i ładunek. <b>Środowisko zasadowe:</b> jak wyżej, a potem do obu stron dodaj tyle OH⁻, ile jest H⁺ (H⁺ + OH⁻ → H₂O) – albo bezpośrednio: brakujący O po stronie → 2OH⁻ tam i H₂O po drugiej stronie.</div>
<div class="ex"><b>Przykład 1 (kwasowe):</b> Cr₂O₇²⁻ + SO₃²⁻ + H⁺ → Cr³⁺ + SO₄²⁻<br>Redukcja: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O<br>Utlenianie: SO₃²⁻ + H₂O → SO₄²⁻ + 2H⁺ + 2e⁻ /·3<br>Suma: Cr₂O₇²⁻ + 3SO₃²⁻ + 8H⁺ → 2Cr³⁺ + 3SO₄²⁻ + 4H₂O &nbsp;(ładunek: −2 −6 +8 = 0; +6 −6 = 0 ✔)</div>
<div class="ex"><b>Przykład 2 (zasadowe):</b> CrO₂⁻ (lub [Cr(OH)₄]⁻) + H₂O₂ + OH⁻ → CrO₄²⁻ + H₂O<br>[Cr(OH)₄]⁻ + 4OH⁻ → CrO₄²⁻ + 4H₂O + 3e⁻ /·2<br>H₂O₂ + 2e⁻ → 2OH⁻ /·3<br>Suma: 2[Cr(OH)₄]⁻ + 3H₂O₂ + 2OH⁻ → 2CrO₄²⁻ + 8H₂O (zielony → żółty)</div>
<div class="ex"><b>Przykład 3 (cząsteczkowo):</b> 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + 5Fe₂(SO₄)₃ + K₂SO₄ + 8H₂O.</div>
<div class="ex"><b>Przykład 4 (organiczny):</b> 5CH₃CH₂OH + 4MnO₄⁻ + 12H⁺ → 5CH₃COOH + 4Mn²⁺ + 11H₂O (C: −I → +III, 4e⁻; Mn: +VII → +II, 5e⁻). Glikol: 5HOCH₂CH₂OH + 8MnO₄⁻ + 24H⁺ → 5(COOH)₂ + 8Mn²⁺ + 22H₂O.</div>`,
sq:[["Uzgodnij: MnO₄⁻ + I⁻ + H⁺ → Mn²⁺ + I₂ + H₂O.","2MnO₄⁻ + 10I⁻ + 16H⁺ → 2Mn²⁺ + 5I₂ + 8H₂O."]]},
{id:"rd-utleniacze",t:"Najważniejsze utleniacze i reduktory (Mn, Cr, HNO₃, H₂SO₄)",pp:"VIII, X.5, X.6",h:`
<table><tr><th>Utleniacz</th><th>Środowisko</th><th>Produkt redukcji</th><th>Obserwacja</th></tr>
<tr><td>MnO₄⁻ (fioletowy)</td><td>kwasowe</td><td>Mn²⁺: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</td><td>odbarwienie</td></tr>
<tr><td>MnO₄⁻</td><td>obojętne / słabo zasadowe</td><td>MnO₂: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻</td><td>brunatny osad</td></tr>
<tr><td>MnO₄⁻</td><td>silnie zasadowe</td><td>MnO₄²⁻: MnO₄⁻ + e⁻ → MnO₄²⁻</td><td>zielony roztwór</td></tr>
<tr><td>Cr₂O₇²⁻ (pomarańczowy)</td><td>kwasowe</td><td>Cr³⁺: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</td><td>zielony/zielonofioletowy</td></tr>
<tr><td>HNO₃ stężony</td><td>–</td><td>NO₂ (brunatny gaz)</td><td>Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O</td></tr>
<tr><td>HNO₃ rozcieńczony</td><td>–</td><td>NO (bezbarwny, brunatnieje w powietrzu)</td><td>3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O</td></tr>
<tr><td>H₂SO₄ stężony (gorący)</td><td>–</td><td>SO₂</td><td>Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O</td></tr>
<tr><td>H₂O₂</td><td>kwasowe</td><td>H₂O: H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O</td><td>np. 2I⁻ → I₂ (brunatnienie)</td></tr>
<tr><td>Cl₂, Br₂</td><td>–</td><td>Cl⁻, Br⁻</td><td>odbarwienie wody bromowej</td></tr></table>
<p>Reduktory: metale aktywne, C, CO, H₂, H₂S (→ S, żółty osad), SO₂/SO₃²⁻ (→ SO₄²⁻), Fe²⁺, I⁻, Sn²⁺, H₂O₂ (wobec MnO₄⁻), aldehydy, HCOOH, (COOH)₂.</p>
<p><b>Metale z HNO₃:</b> Ag + 2HNO₃(stęż.) → AgNO₃ + NO₂ + H₂O; 3Ag + 4HNO₃(rozc.) → 3AgNO₃ + NO + 2H₂O; Al i Fe – pasywacja w stężonym HNO₃; z rozcieńczonym: Al + 4HNO₃ → Al(NO₃)₃ + NO + 2H₂O; Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O.</p>`,
sq:[["Jaki produkt redukcji KMnO₄ w roztworze obojętnym?","MnO₂ – brunatny osad."]]},
{id:"rd-kierunek",t:"Kierunek reakcji redoks z potencjałów",pp:"VIII.6",h:`
<p>Utleniona forma pary o <b>wyższym</b> potencjale standardowym utlenia zredukowaną formę pary o <b>niższym</b> potencjale. Reakcja zachodzi samorzutnie, gdy E°<sub>utleniacza</sub> &gt; E°<sub>reduktora</sub> (SEM &gt; 0).</p>
<div class="ex"><b>Przykład.</b> Czy Fe³⁺ utleni I⁻? E°(Fe³⁺/Fe²⁺) = 0,77 V &gt; E°(I₂/I⁻) = 0,54 V → tak: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂. Czy Fe³⁺ utleni Br⁻ (E°(Br₂/Br⁻) = 1,07 V)? Nie.</div>
<p>Metale o E° &lt; 0 wypierają wodór z kwasów nieutleniających (Zn, Fe, Mg, Al); Cu, Ag, Au – nie. Metal o niższym potencjale wypiera metal o wyższym z roztworu jego soli: Fe + CuSO₄ → FeSO₄ + Cu (czerwony nalot na żelazie, roztwór blednie); Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag (szary nalot, roztwór niebieszczeje); Ag + CuSO₄ – brak reakcji.</p>`,
sq:[["Czy Zn wyprze Pb z Pb(NO₃)₂? (E° Zn −0,76, Pb −0,13 V)","Tak: Zn + Pb²⁺ → Zn²⁺ + Pb."]]},
{id:"rd-bledy",t:"⚠️ Typowe błędy (redoks)",pp:"–",h:`<ul><li>„Utleniacz ulega utlenieniu” – utleniacz się redukuje!</li><li>Niezbilansowany ładunek w równaniu jonowym.</li><li>H⁺ w środowisku zasadowym lub OH⁻ w kwasowym.</li><li>Wodór jako produkt reakcji metalu z HNO₃.</li><li>Fe + HCl → FeCl₃ (powstaje FeCl₂).</li><li>Zapominanie, że w reakcji dysproporcjonowania utleniacz i reduktor to ta sama substancja.</li><li>Stopień utlenienia O w nadtlenkach jako −II.</li></ul>`,sq:[]}
];

TX.roztw=[
{id:"rz-uklady",t:"Mieszaniny, roztwory, koloidy, emulsje",pp:"V.1",h:`
<ul><li><b>Układ homogeniczny (jednorodny)</b> – składniki nierozróżnialne gołym okiem ani pod mikroskopem (roztwór właściwy: NaCl w wodzie, powietrze, stopy). Cząstki &lt; 1 nm.</li>
<li><b>Koloid</b> – cząstki 1–100 nm (białko w wodzie, mgła, mleko, żelatyna); efekt Tyndalla (rozpraszanie światła – widoczna smuga), koagulacja pod wpływem elektrolitów lub ogrzewania; peptyzacja – proces odwrotny. Zol ↔ żel.</li>
<li><b>Układ heterogeniczny (niejednorodny)</b> – zawiesina (kreda w wodzie), emulsja (olej w wodzie).</li>
<li><b>Emulsja</b> – układ dwóch niemieszających się cieczy (jedna rozproszona w postaci kropelek w drugiej); trwałość zwiększają <b>emulgatory</b> (np. lecytyna w żółtku, mydła) – cząsteczki z częścią hydrofilową i hydrofobową. Przykłady: mleko, majonez, kremy.</li></ul>
<p><b>Roztwór nasycony</b> – w danej temperaturze nie rozpuści się w nim więcej substancji; <b>nienasycony</b> – można rozpuścić więcej; <b>przesycony</b> – nietrwały, zawiera więcej substancji niż nasycony.</p>`,
sq:[["Jak odróżnić roztwór koloidalny od właściwego?","Efekt Tyndalla – w koloidzie widać smugę światła."]]},
{id:"rz-rozp",t:"Rozpuszczalność i krzywe rozpuszczalności",pp:"V.2",h:`
<p><b>Rozpuszczalność</b> – maksymalna masa substancji (g), którą można rozpuścić w 100 g rozpuszczalnika w danej temperaturze, otrzymując roztwór nasycony.</p>
<p class="f">Cp(nasycony) = R/(100 + R)·100%</p>
<ul><li>Rozpuszczalność większości ciał stałych rośnie z temperaturą (KNO₃ silnie); NaCl – prawie stała; Ca(OH)₂, Li₂CO₃ – maleje (rozpuszczanie egzotermiczne).</li><li>Gazy: rozpuszczalność maleje ze wzrostem temperatury, rośnie ze wzrostem ciśnienia.</li><li>Szybkość rozpuszczania (nie rozpuszczalność!) zwiększa mieszanie, rozdrobnienie, ogrzewanie.</li></ul>
<div class="ex"><b>Krystalizacja.</b> 300 g wody nasycono KNO₃ w 50°C (R = 85 g/100 g) i ochłodzono do 20°C (R = 32). Masa soli: 3·85 = 255 g; w 20°C pozostaje 3·32 = 96 g; wykrystalizuje 159 g.</div>`,
sq:[["Cp roztworu nasyconego przy R = 25 g/100 g wody?","25/125·100% = 20%."]]},
{id:"rz-stez",t:"Stężenie procentowe i molowe, przeliczanie",pp:"V.2",h:`
<p class="f">Cp = m<sub>s</sub>/m<sub>r</sub>·100%; m<sub>r</sub> = m<sub>s</sub> + m<sub>rozp</sub>; m<sub>r</sub> = d·V<br>Cm = n/V<sub>r</sub> [mol/dm³]; Cm = Cp·d/(100%·M) (d w g/dm³)</p>
<div class="ex"><b>Przykład 1.</b> Kwas azotowy(V) 63%, d = 1,40 g/cm³ = 1400 g/dm³: Cm = 63·1400/(100·63,02) = 14,0 mol/dm³.</div>
<div class="ex"><b>Przykład 2.</b> Roztwór NaOH 2,00 mol/dm³, d = 1,08 g/cm³: Cp = Cm·M·100%/d = 2,00·40,00·100/1080 = 7,41%.</div>
<div class="ex"><b>Przykład 3 (hydrat).</b> Ile gramów FeSO₄·7H₂O (278,05 g/mol) potrzeba na 500 cm³ roztworu 0,200 mol/dm³? n = 0,100 mol → 27,8 g.</div>
<p><b>Stężenie jonów:</b> w roztworze Al₂(SO₄)₃ o c = 0,1 mol/dm³: [Al³⁺] = 0,2, [SO₄²⁻] = 0,3 mol/dm³ (pełna dysocjacja).</p>`,
sq:[["Cm roztworu zawierającego 4,9 g H₂SO₄ w 250 cm³?","0,050 mol / 0,250 dm³ = 0,200 mol/dm³."]]},
{id:"rz-rozc",t:"Rozcieńczanie, zatężanie, mieszanie",pp:"V.2",h:`
<ul><li><b>Rozcieńczanie</b> (dodanie wody): masa/liczba moli substancji bez zmian: m<sub>s</sub> = Cp₁·m₁ = Cp₂·m₂; C₁V₁ = C₂V₂.</li><li><b>Zatężanie</b>: odparowanie wody lub dodanie substancji.</li><li><b>Mieszanie</b> roztworów tej samej substancji: m<sub>s</sub> = m<sub>s1</sub> + m<sub>s2</sub>, m<sub>r</sub> = m<sub>r1</sub> + m<sub>r2</sub>; lub <b>reguła krzyżowa</b>: m₁/m₂ = (Cp₂ − Cp)/(Cp − Cp₁). Wodę traktujemy jako roztwór 0%, czystą substancję jako 100%.</li></ul>
<div class="ex"><b>Przykład 1.</b> Ile wody dodać do 150 g roztworu 20%, aby otrzymać 12%? m<sub>s</sub> = 30 g → m<sub>r</sub> = 250 g → 100 g wody.</div>
<div class="ex"><b>Przykład 2.</b> Ile gramów soli dosypać do 200 g roztworu 10%, aby otrzymać 20%? (20 + x)/(200 + x) = 0,2 → 20 + x = 40 + 0,2x → x = 25 g.</div>
<div class="ex"><b>Przykład 3.</b> Zmieszano 200 cm³ HCl 0,50 mol/dm³ z 300 cm³ HCl 0,20 mol/dm³: n = 0,10 + 0,06 = 0,16 mol; V = 0,50 dm³ → 0,32 mol/dm³ (addytywność objętości).</div>
<p>Objętości roztworów nie są ściśle addytywne (np. woda + etanol) – addytywność przyjmujemy, gdy pozwala na to polecenie.</p>`,
sq:[["W jakim stosunku masowym zmieszać roztwór 30% z wodą, by otrzymać 10%?","1 : 2 (reguła krzyżowa: 10 : 20)."]]},
{id:"rz-lab",t:"Przygotowanie roztworu – doświadczenie",pp:"V.3",h:`
<div class="ex"><b>Cp:</b> 200 g roztworu NaCl 5%: odważ 10,0 g NaCl na wadze, odmierz 190 cm³ (≈190 g) wody cylindrem miarowym, wsyp sól do zlewki, wlej wodę, mieszaj bagietką do rozpuszczenia.</div>
<div class="ex"><b>Cm:</b> 250 cm³ roztworu NaOH 0,100 mol/dm³: oblicz m = 0,025·40,00 = 1,00 g; odważ, rozpuść w małej ilości wody w zlewce, przenieś ilościowo do <b>kolby miarowej</b> 250 cm³ (przepłucz zlewkę), uzupełnij wodą do kreski, wymieszaj.</div>
<p><b>Bezpieczeństwo:</b> rozcieńczając stężone kwasy (szczególnie H₂SO₄) – <b>zawsze kwas do wody</b>, powoli, mieszając (silnie egzotermiczne).</p>`,
sq:[["Dlaczego roztwór o stężeniu molowym przygotowuje się w kolbie miarowej?","Bo Cm odnosi się do objętości roztworu, a nie rozpuszczalnika – kolba pozwala dokładnie odmierzyć V roztworu."]]},
{id:"rz-rozdz",t:"Rozdzielanie mieszanin",pp:"V.4, V.5",h:`
<table><tr><th>Metoda</th><th>Zasada</th><th>Przykład</th></tr>
<tr><td>sączenie (filtracja)</td><td>zatrzymanie ciała stałego na sączku</td><td>piasek + woda, osad BaSO₄</td></tr><tr><td>sedymentacja, dekantacja</td><td>opadanie osadu, zlanie cieczy</td><td>muł w wodzie</td></tr>
<tr><td>odparowanie, krystalizacja</td><td>usunięcie rozpuszczalnika</td><td>sól z wody morskiej</td></tr><tr><td>destylacja</td><td>różnica temperatur wrzenia</td><td>woda destylowana, etanol z nastawu, ropa naftowa (frakcyjna)</td></tr>
<tr><td>ekstrakcja</td><td>różna rozpuszczalność w dwóch niemieszających się cieczach (rozdzielacz)</td><td>jod z wody do heksanu; kofeina</td></tr><tr><td>chromatografia</td><td>różna adsorpcja na fazie stacjonarnej i rozpuszczalność w fazie ruchomej</td><td>barwniki atramentu, chlorofile</td></tr>
<tr><td>elektroforeza</td><td>różna szybkość wędrówki naładowanych cząstek w polu elektrycznym</td><td>aminokwasy, białka, DNA</td></tr><tr><td>rozdzielacz</td><td>ciecze niemieszające się</td><td>woda + olej</td></tr></table>
<div class="ex"><b>Projekt:</b> rozdzielenie mieszaniny piasku, soli kuchennej i opiłków żelaza: magnes → opiłki; woda (rozpuszcza sól) → sączenie (piasek na sączku) → odparowanie przesączu (sól).</div>`,
sq:[["Jaką metodą wyodrębnisz jod z wodnego roztworu?","Ekstrakcją heksanem (w rozdzielaczu)."]]},
{id:"rz-bledy",t:"⚠️ Typowe błędy (roztwory)",pp:"–",h:`<ul><li>Hydrat: masa całego hydratu jako masa substancji rozpuszczonej.</li><li>Sumowanie stężeń przy mieszaniu.</li><li>Gęstość w g/cm³ bez przeliczenia na g/dm³ we wzorze Cm = Cp·d/(100M).</li><li>Mylenie rozpuszczalności (na 100 g wody) ze stężeniem procentowym (na 100 g roztworu).</li><li>Woda do stężonego kwasu.</li><li>Mylenie szybkości rozpuszczania z rozpuszczalnością.</li></ul>`,sq:[]}
];

TX.stech=[
{id:"st-prawa",t:"Podstawowe prawa chemiczne i interpretacja równania",pp:"I.6",h:`
<ul><li><b>Prawo zachowania masy</b> – w układzie zamkniętym masa substratów = masa produktów.</li><li><b>Prawo stałości składu</b> – związek chemiczny ma stały skład jakościowy i ilościowy, niezależnie od sposobu otrzymania.</li><li><b>Prawo Avogadra</b> – w jednakowych warunkach p i T równe objętości gazów zawierają jednakowe liczby cząsteczek → stosunek objętości gazów = stosunek liczby moli.</li></ul>
<h4>Interpretacja równania 2H₂ + O₂ → 2H₂O</h4>
<table><tr><th>ujęcie</th><th>2H₂</th><th>O₂</th><th>2H₂O</th></tr><tr><td>cząsteczkowe</td><td>2 cząsteczki</td><td>1 cząsteczka</td><td>2 cząsteczki</td></tr><tr><td>molowe</td><td>2 mol</td><td>1 mol</td><td>2 mol</td></tr><tr><td>masowe</td><td>4,03 g</td><td>32,00 g</td><td>36,03 g</td></tr><tr><td>objętościowe (war. norm.)</td><td>44,8 dm³</td><td>22,4 dm³</td><td>(woda – ciecz!)</td></tr></table>
<p>W ujęciu objętościowym uwzględniamy tylko gazy (w warunkach normalnych woda jest cieczą).</p>`,
sq:[["Ile dm³ O₂ (war. norm.) potrzeba do spalenia 11,2 dm³ CH₄?","CH₄ + 2O₂ → CO₂ + 2H₂O: 22,4 dm³ O₂."]]},
{id:"st-wzory",t:"Wzór empiryczny i rzeczywisty",pp:"I.5",h:`
<p><b>Wzór empiryczny (elementarny)</b> – najprostszy stosunek liczb atomów; <b>rzeczywisty (sumaryczny)</b> – faktyczna liczba atomów w cząsteczce (wielokrotność empirycznego).</p>
<div class="ex"><b>Algorytm:</b> 1) % masowe (lub masy) → przyjmij 100 g związku; 2) podziel masę każdego pierwiastka przez jego masę molową; 3) podziel przez najmniejszą liczbę moli; 4) doprowadź do liczb całkowitych (×2, ×3); 5) k = M/M<sub>emp</sub>.</div>
<div class="ex"><b>Przykład 1.</b> 85,7% C i 14,3% H, M = 56 g/mol. C: 85,7/12,01 = 7,14; H: 14,3/1,008 = 14,2 → 1 : 2 → CH₂ (14 g/mol); k = 56/14 = 4 → C₄H₈.</div>
<div class="ex"><b>Przykład 2 (analiza spalania).</b> 0,880 g związku C,H,O daje 1,76 g CO₂ i 0,720 g H₂O; M = 88 g/mol. n(C) = 1,76/44,01 = 0,0400 mol (0,480 g); n(H) = 2·0,720/18,02 = 0,0799 mol (0,0806 g); m(O) = 0,880 − 0,480 − 0,081 = 0,319 g → 0,0200 mol. C:H:O = 2:4:1 → C₂H₄O (44) → k = 2 → C₄H₈O₂.</div>
<div class="ex"><b>Przykład 3 (gaz).</b> Gęstość gazu w war. norm. d = 2,59 g/dm³ → M = 2,59·22,4 = 58 g/mol; gęstość względna względem H₂ = 29 → M = 58 g/mol.</div>
<p><b>Hydraty:</b> CuSO₄·xH₂O – z ubytku masy przy prażeniu: x = n(H₂O)/n(soli bezwodnej).</p>`,
sq:[["Związek zawiera 27,3% C i 72,7% O. Wzór?","C: 2,27; O: 4,54 → CO₂."]]},
{id:"st-obliczenia",t:"Obliczenia stechiometryczne, niedomiar, wydajność",pp:"I.7",h:`
<div class="ex"><b>Schemat:</b> dane → mole → stosunek molowy z równania → mole szukanej → masa/objętość. Przy dwóch danych substratach – <b>najpierw ustal niedomiar</b>.</div>
<div class="ex"><b>Przykład 1 (niedomiar).</b> 10,0 g H₂ i 64,0 g O₂ → woda. n(H₂) = 4,96 mol; n(O₂) = 2,00 mol; potrzeba H₂ : O₂ = 2 : 1 → na 2,00 mol O₂ trzeba 4,00 mol H₂ – H₂ w nadmiarze (0,96 mol), O₂ w niedomiarze. m(H₂O) = 4,00·18,02 = 72,1 g.</div>
<div class="ex"><b>Przykład 2 (wydajność).</b> Z 23,0 g etanolu otrzymano 26,4 g octanu etylu. Teoretycznie: 0,499 mol → 0,499·88,11 = 44,0 g; W = 26,4/44,0·100% = 60,0%.</div>
<div class="ex"><b>Przykład 3 (czystość).</b> Ile dm³ CO₂ (war. norm.) da 200 g wapienia o 80% CaCO₃ (CaCO₃ → CaO + CO₂)? m = 160 g → 1,60 mol → 35,8 dm³.</div>
<div class="ex"><b>Przykład 4 (mieszanina).</b> 5,00 g mieszaniny Na₂CO₃ i NaHCO₃ prażono; ubytek masy 0,620 g (2NaHCO₃ → Na₂CO₃ + H₂O + CO₂; ubytek 62,02 g na 2 mol NaHCO₃). n(NaHCO₃) = 2·0,620/62,02 = 0,0200 mol → 1,68 g (33,6%).</div>
<p><b>Wydajność w procesach wieloetapowych:</b> W całk. = W₁·W₂·… (np. 0,8·0,9 = 72%).</p>`,
sq:[["Ile gramów Fe otrzymamy z 16,0 g Fe₂O₃ (Fe₂O₃ + 3CO → 2Fe + 3CO₂) przy wydajności 75%?","0,100 mol Fe₂O₃ → 0,200 mol Fe → 11,17 g; ·0,75 = 8,38 g."]]},
{id:"st-gazy",t:"Gazy: warunki normalne i równanie Clapeyrona",pp:"I.7, I.8",h:`
<p><b>Warunki normalne</b> (CKE): T = 273 K (0°C), p = 1013 hPa → V<sub>m</sub> = 22,4 dm³/mol. W innych warunkach – <b>równanie Clapeyrona</b>:</p>
<p class="f">pV = nRT; R = 83,14 hPa·dm³·mol⁻¹·K⁻¹ (p w hPa, V w dm³, T w K!)</p>
<div class="ex"><b>Przykład 1.</b> Objętość 8,80 g CO₂ w 27°C i 1000 hPa: n = 0,200 mol; V = 0,200·83,14·300/1000 = 4,99 dm³.</div>
<div class="ex"><b>Przykład 2 (masa molowa z danych gazowych).</b> 1,00 g gazu w 2,00 dm³ w 300 K wywiera 415,7 hPa → n = pV/RT = 415,7·2,00/(83,14·300) = 0,0333 mol → M = 30,0 g/mol (np. NO, C₂H₆).</div>
<div class="ex"><b>Przykład 3 (ciśnienie cząstkowe).</b> p<sub>i</sub> = x<sub>i</sub>·p<sub>całk</sub>, x<sub>i</sub> – ułamek molowy. Powietrze: x(O₂) ≈ 0,21 → przy 1013 hPa p(O₂) ≈ 213 hPa.</div>
<p>Przeliczenia: 1 atm = 1013 hPa; T[K] = t[°C] + 273; 1 m³ = 1000 dm³; 1 dm³ = 1000 cm³.</p>`,
sq:[["Ile moli gazu jest w 10,0 dm³ w 0°C i 2026 hPa?","n = 2026·10/(83,14·273) = 0,893 mol (lub 2·10/22,4 = 0,893)."]]},
{id:"st-masy",t:"Skład procentowy, masa molowa, gęstość",pp:"I.2, I.6",h:`
<p>%E = (liczba atomów E · M<sub>E</sub>)/M<sub>związku</sub> · 100%.</p>
<div class="ex"><b>Przykład.</b> %N w NH₄NO₃: 2·14,01/80,05 = 35,0%; w (NH₂)₂CO (mocznik): 28,02/60,06 = 46,7% – mocznik bogatszy w azot (nawozy).</div>
<p><b>Średnia masa molowa mieszaniny gazów:</b> M<sub>śr</sub> = Σ x<sub>i</sub>M<sub>i</sub>; powietrze ≈ 29 g/mol → gazy o M &lt; 29 (H₂, He, NH₃, CH₄) są lżejsze od powietrza – zbiera się je w naczyniu odwróconym do góry dnem.</p>
<div class="ex"><b>Przykład.</b> Mieszanina 20% obj. H₂ i 80% obj. N₂: M = 0,2·2,016 + 0,8·28,02 = 22,8 g/mol.</div>`,
sq:[["Który nawóz zawiera więcej azotu: NH₄Cl czy (NH₄)₂SO₄?","NH₄Cl: 26,2%; (NH₄)₂SO₄: 21,2% → NH₄Cl."]]},
{id:"st-zaokr",t:"Zasady zapisu wyników wg CKE",pp:"I.7",h:`
<ul><li>Wynik końcowy podaj z dokładnością wskazaną w poleceniu (np. „do dwóch miejsc po przecinku”, „do jednego miejsca”). Gdy brak wskazówki – rozsądna dokładność (zwykle 3 cyfry znaczące).</li><li>Nie zaokrąglaj zbyt wcześnie wyników pośrednich – zaokrągla się wynik końcowy.</li><li>Wynik musi mieć jednostkę (brak jednostki lub zła jednostka = utrata punktu za wynik).</li><li>Za metodę punkt otrzymujesz za poprawne powiązanie danych z szukaną (np. poprawna proporcja/stosunek molowy), nawet przy błędzie rachunkowym.</li><li>Pamiętaj o zgodności stosunku molowego z równaniem reakcji – błąd w równaniu zwykle oznacza 0 pkt za metodę.</li></ul>`,sq:[]},
{id:"st-bledy",t:"⚠️ Typowe błędy (stechiometria)",pp:"–",h:`<ul><li>22,4 dm³/mol poza warunkami normalnymi.</li><li>Temperatura w °C w pV = nRT.</li><li>Liczenie produktu z substratu w nadmiarze.</li><li>Pominięcie wydajności lub czystości.</li><li>Zapominanie o współczynnikach (np. 2 atomy H w H₂O przy analizie spalania).</li><li>Objętość wody (ciecz) liczona jak gaz w war. normalnych.</li></ul>`,sq:[]}
];

TX.uklad=[
{id:"uk-budowa",t:"Budowa układu okresowego i prawo okresowości",pp:"II.4, X.1",h:`
<p><b>Prawo okresowości:</b> właściwości pierwiastków chemicznych, uporządkowanych według wzrastającej liczby atomowej, zmieniają się okresowo. Przyczyną jest okresowe powtarzanie się podobnych konfiguracji elektronów walencyjnych.</p>
<ul><li>7 okresów (poziome rzędy) i 18 grup (pionowe kolumny). Lantanowce (Ce–Lu) i aktynowce (Th–Lr) – osobne szeregi bloku f (na karcie CKE La i Ac w grupie 3).</li>
<li>Nazwy grup: 1 – litowce (metale alkaliczne, bez H), 2 – berylowce (ziem alkalicznych), 13 – borowce, 14 – węglowce, 15 – azotowce, 16 – tlenowce, 17 – fluorowce (halogeny), 18 – helowce (gazy szlachetne). Grupy 3–12 – metale przejściowe (blok d).</li>
<li>Podział na metale, półmetale (B, Si, Ge, As, Sb, Te, At – wg karty CKE) i niemetale; granica przebiega ukośnie od B do At.</li></ul>`,
sq:[["Do jakiej grupy i bloku należy pierwiastek o konfiguracji [Ne]3s²3p⁵?","Grupa 17 (fluorowce), blok p – chlor."]]},
{id:"uk-trendy",t:"Zmienność właściwości w grupach i okresach",pp:"II.4, X.1",h:`
<table><tr><th>Właściwość</th><th>W okresie (→)</th><th>W grupie (↓)</th><th>Przyczyna</th></tr>
<tr><td>promień atomowy</td><td>maleje</td><td>rośnie</td><td>→ rośnie ładunek jądra przy tej samej liczbie powłok; ↓ przybywa powłok</td></tr>
<tr><td>energia jonizacji</td><td>rośnie (z odstępstwami)</td><td>maleje</td><td>elektrony walencyjne silniej/słabiej przyciągane</td></tr>
<tr><td>elektroujemność</td><td>rośnie</td><td>maleje</td><td>jw.; F – 4,0 (największa)</td></tr>
<tr><td>charakter metaliczny, aktywność metali</td><td>maleje</td><td>rośnie</td><td>łatwość oddawania elektronów</td></tr>
<tr><td>aktywność niemetali (utleniająca)</td><td>rośnie</td><td>maleje</td><td>łatwość przyłączania elektronów (F₂ > Cl₂ > Br₂ > I₂)</td></tr></table>
<p><b>Energia jonizacji (pierwsza)</b> – minimalna energia potrzebna do oderwania najsłabiej związanego elektronu od atomu w stanie gazowym: X(g) → X⁺(g) + e⁻. Kolejne energie jonizacji rosną; duży skok wskazuje oderwanie elektronu z zamkniętej powłoki (np. dla Mg skok między E₂ a E₃).</p>
<p><b>Odstępstwa:</b> Be > B (2s² zapełniona vs elektron 2p), N > O (2p³ półzapełniona vs sparowane elektrony w 2p⁴); analogicznie Mg > Al, P > S.</p>
<p><b>Promienie jonów:</b> kation mniejszy od atomu (mniej e⁻, często o jedną powłokę mniej), anion większy. W szeregu izoelektronowym promień maleje ze wzrostem Z: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺.</p>`,
sq:[["Uszereguj według rosnącego promienia: K⁺, Cl⁻, S²⁻, Ca²⁺.","Ca²⁺ < K⁺ < Cl⁻ < S²⁻ (izoelektronowe, 18 e⁻)."],["Dlaczego E₁(O) < E₁(N)?","W O elektron usuwany jest z orbitalu z parą elektronów – odpychanie ułatwia jonizację; N ma trwałą półzapełnioną 2p³."]]},
{id:"uk-metale12",t:"Metale grup 1 i 2",pp:"X.2, X.3, X.5",h:`
<ul><li>Litowce: miękkie, niska gęstość i temperatura topnienia, przechowywane pod naftą. Stopień utlenienia +I. Aktywność rośnie od Li do Cs.</li>
<li>Berylowce: twardsze, wyższe t. topnienia, stopień utlenienia +II.</li></ul>
<h4>Reakcje z wodą</h4>
<p>2Na + 2H₂O → 2NaOH + H₂↑ (gwałtownie, kulka sodu „pływa” i topi się; fenoloftaleina → malinowa)<br>2K + 2H₂O → 2KOH + H₂↑ (zapala się, fioletowy płomień)<br>Ca + 2H₂O → Ca(OH)₂ + H₂↑ (zmętnienie – słabo rozpuszczalny Ca(OH)₂)<br>Mg + 2H₂O → Mg(OH)₂ + H₂↑ (dopiero w gorącej wodzie; z parą wodną: Mg + H₂O → MgO + H₂)</p>
<h4>Reakcje z tlenem i niemetalami</h4><p>4Li + O₂ → 2Li₂O; 2Na + O₂ → Na₂O₂ (nadtlenek, w nadmiarze tlenu); 2Mg + O₂ → 2MgO (oślepiające światło); 2Na + Cl₂ → 2NaCl; Ca + S → CaS; 3Mg + N₂ → Mg₃N₂.</p>
<h4>Reakcje z kwasami nieutleniającymi</h4><p>Mg + 2HCl → MgCl₂ + H₂↑; jonowo: Mg + 2H⁺ → Mg²⁺ + H₂↑.</p>
<p><b>Barwienie płomienia:</b> Li – karminowy, Na – żółty, K – fioletowy, Ca – ceglastoczerwony, Sr – karminowy, Ba – zielony (żółtozielony).</p>
<h4>Wiązanie metaliczne a właściwości</h4><p>Sieć kationów metalu zanurzona w „gazie” zdelokalizowanych elektronów walencyjnych → przewodnictwo elektryczne i cieplne, połysk, kowalność i ciągliwość (warstwy kationów mogą się przesuwać bez zrywania wiązania).</p>`,
sq:[["Zapisz jonowo reakcję potasu z wodą.","2K + 2H₂O → 2K⁺ + 2OH⁻ + H₂↑"],["Dlaczego sód przechowuje się pod naftą?","Reaguje z tlenem i parą wodną z powietrza; nafta izoluje go."]]},
{id:"uk-glin",t:"Glin – właściwości i pasywacja",pp:"X.4, X.5",h:`
<p>Glin – lekki, srebrzystobiały metal, dobry przewodnik, kowalny. Na powietrzu pokrywa się cienką, szczelną warstwą Al₂O₃, która chroni go przed dalszym utlenianiem (<b>pasywacja</b>). Stężony HNO₃ (i stężony H₂SO₄ na zimno) pasywuje glin – zastosowanie: cysterny do przewozu stężonego HNO₃.</p>
<p>2Al + 6HCl → 2AlCl₃ + 3H₂↑ &nbsp; 2Al + 6H⁺ → 2Al³⁺ + 3H₂↑<br>
2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂↑ (glin roztwarza się w zasadach – charakter amfoteryczny)<br>
4Al + 3O₂ → 2Al₂O₃; 2Al + 3Cl₂ → 2AlCl₃; <b>aluminotermia:</b> 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (silnie egzotermiczna).</p>
<p>Zastosowania: przemysł lotniczy i motoryzacyjny (stopy – duraluminium), folie, przewody, opakowania.</p>`,
sq:[["Dlaczego glin, mimo ujemnego potencjału, nie reaguje z wodą?","Pokryty jest szczelną warstwą Al₂O₃ (pasywacja)."]]},
{id:"uk-fluorowce",t:"Fluorowce i niemetale",pp:"X.9, X.10",h:`
<table><tr><th></th><th>F₂</th><th>Cl₂</th><th>Br₂</th><th>I₂</th></tr><tr><td>stan (war. normalne)</td><td>gaz, jasnożółty</td><td>gaz, żółtozielony</td><td>ciecz, czerwonobrunatna</td><td>ciało stałe, fioletowoczarne, sublimuje</td></tr><tr><td>EN</td><td>4,0</td><td>3,2</td><td>3,0</td><td>2,7</td></tr></table>
<p>Aktywność utleniająca: F₂ > Cl₂ > Br₂ > I₂ – halogen bardziej aktywny wypiera mniej aktywny z jego soli: Cl₂ + 2KBr → 2KCl + Br₂; Cl₂ + 2I⁻ → 2Cl⁻ + I₂; Br₂ + 2I⁻ → 2Br⁻ + I₂. Br₂ + KCl – brak reakcji. Wykrywanie: warstwa organiczna (heksan) – Br₂ pomarańczowobrunatna, I₂ fioletowa.</p>
<p>Fluor ma wyłącznie stopień −I (najbardziej elektroujemny); pozostałe halogeny −I, +I, +III, +V, +VII (HClO, HClO₂, HClO₃, HClO₄).</p>
<h4>Wodór z niemetalami</h4><p>H₂ + Cl₂ → 2HCl (w świetle – wybuchowo); H₂ + Br₂ → 2HBr; 2H₂ + O₂ → 2H₂O; 3H₂ + N₂ ⇄ 2NH₃ (Fe, T, p – synteza Habera); H₂ + S → H₂S.</p>
<h4>Halogeny i siarka z metalami</h4><p>2Fe + 3Cl₂ → 2FeCl₃ (chlor utlenia Fe do +III); Fe + S → FeS (siarka tylko do +II); Cu + Cl₂ → CuCl₂; 2Cu + S → Cu₂S; Mg + Br₂ → MgBr₂; 2K + Br₂ → 2KBr.</p>
<h4>Otrzymywanie tlenu i chloru w laboratorium</h4><p>2H₂O₂ → 2H₂O + O₂↑ (katalizator MnO₂); 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂↑ (ogrzewanie); 2KClO₃ → 2KCl + 3O₂ (MnO₂, T).<br>MnO₂ + 4HCl → MnCl₂ + Cl₂↑ + 2H₂O; 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O.</p>
<h4>Otrzymywanie wodoru</h4><p>Zn + 2HCl → ZnCl₂ + H₂↑ (aparat Kippa); Ca + 2H₂O → Ca(OH)₂ + H₂↑. Wykrywanie: „szczeknięcie” przy zbliżeniu do płomienia (mieszanina piorunująca).</p>`,
sq:[["Czy brom wyprze jod z KI? Zapisz równanie.","Tak: Br₂ + 2KI → 2KBr + I₂."],["Do jakiego stopnia utlenienia chlor utlenia żelazo, a do jakiego siarka?","Cl₂ → Fe(III) (FeCl₃); S → Fe(II) (FeS)."]]},
{id:"uk-tlenki-okres",t:"Charakter tlenków i wodorków w okresie",pp:"VII.4–6, X.1",h:`
<p>Okres 3: Na₂O, MgO – zasadowe; Al₂O₃ – amfoteryczny; SiO₂, P₄O₁₀, SO₂/SO₃, Cl₂O₇ – kwasowe. Charakter kwasowy tlenków rośnie w okresie i ze wzrostem stopnia utlenienia (MnO zasadowy, MnO₂ amfoteryczny, Mn₂O₇ kwasowy; CrO zasadowy, Cr₂O₃ amfoteryczny, CrO₃ kwasowy).</p>
<p><b>Wodorki:</b> LiH, NaH, CaH₂ – jonowe (H⁻), reagują z wodą: LiH + H₂O → LiOH + H₂↑ (odczyn zasadowy). CH₄ – obojętny. NH₃ – zasadowy: NH₃ + H₂O ⇄ NH₄⁺ + OH⁻. H₂O – amfiprotyczny. HF, HCl, HBr, HI, H₂S – kwasowe (moc: HF słaby, HCl < HBr < HI mocne; H₂S słaby, dwuprotonowy).</p>
<p><b>Moc kwasów beztlenowych</b> w grupie rośnie ze wzrostem promienia atomu niemetalu (słabsze, dłuższe wiązanie H–X), w okresie rośnie ze wzrostem elektroujemności (CH₄ < NH₃ < H₂O < HF).</p>`,
sq:[["Jaki charakter ma wodorek LiH? Równanie z wodą.","Zasadowy: LiH + H₂O → LiOH + H₂↑."]]},
{id:"uk-bledy",t:"⚠️ Typowe błędy (układ okresowy)",pp:"–",h:`<ul><li>„Elektroujemność rośnie w dół grupy” – odwrotnie.</li><li>Mylenie mocy kwasu HF (słaby) z reaktywnością fluoru.</li><li>Zapisanie Fe + Cl₂ → FeCl₂ (chlor daje FeCl₃).</li><li>Zapominanie, że Mg reaguje z zimną wodą bardzo wolno – potrzebna gorąca woda.</li><li>Pominięcie odstępstw energii jonizacji (Be/B, N/O).</li><li>Nadtlenek sodu Na₂O₂ zapisany jako Na₂O przy spalaniu sodu w nadmiarze tlenu.</li></ul>`,sq:[]}
];

TX.wiaz=[
{id:"wz-rodzaje",t:"Rodzaje wiązań i elektroujemność",pp:"III.1",h:`
<p><b>Wiązanie chemiczne</b> powstaje w wyniku uwspólnienia lub przekazania elektronów walencyjnych; atomy dążą do trwałej konfiguracji (najczęściej oktetu, dla H – dubletu).</p>
<table><tr><th>Wiązanie</th><th>Opis</th><th>ΔEN (orientacyjnie)</th><th>Przykłady</th></tr>
<tr><td>kowalencyjne niespolaryzowane (atomowe)</td><td>wspólna para elektronowa rozłożona symetrycznie</td><td>0 – 0,4</td><td>H₂, Cl₂, O₂, N₂, CH₄ (C–H 0,4)</td></tr>
<tr><td>kowalencyjne spolaryzowane</td><td>wspólna para przesunięta w stronę atomu bardziej elektroujemnego (cząstkowe ładunki δ+/δ−)</td><td>0,4 – 1,7</td><td>HCl, H₂O, NH₃</td></tr>
<tr><td>jonowe</td><td>przekazanie elektronów, przyciąganie elektrostatyczne kationów i anionów</td><td>&gt; 1,7</td><td>NaCl, CaO, KF</td></tr>
<tr><td>koordynacyjne (donorowo-akceptorowe)</td><td>para elektronowa pochodzi od jednego atomu (donor), drugi (akceptor) ma lukę elektronową</td><td>–</td><td>NH₄⁺, H₃O⁺, [Cu(NH₃)₄]²⁺, CO, SO₄²⁻ (w modelu oktetowym)</td></tr>
<tr><td>metaliczne</td><td>kationy metali + zdelokalizowane elektrony</td><td>–</td><td>Na, Fe, Cu</td></tr></table>
<p>Granica 1,7 jest umowna – CKE w zadaniach podaje kryterium w treści. Polaryzację wiązania zaznacza się δ+ i δ−, np. <sup>δ+</sup>H–Cl<sup>δ−</sup>.</p>`,
sq:[["Jakie wiązanie jest w HCl (EN: H 2,2; Cl 3,2) i w KCl (K 0,8)?","HCl: ΔEN = 1,0 – kowalencyjne spolaryzowane; KCl: ΔEN = 2,4 – jonowe."]]},
{id:"wz-lewis",t:"Wzory elektronowe (Lewisa) cząsteczek i jonów",pp:"III.2",h:`
<p>We wzorze elektronowym zaznaczamy wszystkie elektrony walencyjne: pary wiążące (kreski) i wolne pary (kreski/kropki przy atomie).</p>
<ul><li>H₂O: H–Ö–H (O: 2 pary wiążące + 2 wolne pary)</li><li>NH₃: N z trzema wiązaniami N–H i jedną wolną parą</li><li>CO₂: O=C=O, każdy O ma 2 wolne pary</li><li>N₂: :N≡N: (wiązanie potrójne, po jednej wolnej parze)</li><li>HCN: H–C≡N: </li><li>NH₄⁺: [H–N(H)(H)–H]⁺ – 4 wiązania, jedno koordynacyjne (zapis: strzałka od N do H⁺ lub zwykła kreska)</li><li>H₃O⁺: O z trzema wiązaniami i jedną wolną parą</li><li>CO: :C≡O: (jedno z trzech wiązań koordynacyjne)</li><li>SO₂, SO₃, SO₄²⁻, CO₃²⁻, NO₃⁻ – zapisuj tak, aby każdy atom miał oktet; ładunek jonu w nawiasie kwadratowym.</li></ul>
<p><b>CKE:</b> elektrony mogą być kropkami, pary – kreskami; liczba elektronów musi być poprawna, a wolne pary – zaznaczone.</p>`,
sq:[["Ile wolnych par elektronowych ma cząsteczka CO₂?","4 (po 2 na każdym atomie tlenu)."]]},
{id:"wz-hybryd",t:"Hybrydyzacja i VSEPR – kształt drobin",pp:"III.3, III.4",h:`
<p><b>Hybrydyzacja</b> – „wymieszanie” orbitali walencyjnych atomu (s i p) z utworzeniem równocennych orbitali zhybrydyzowanych, ułożonych w przestrzeni jak najdalej od siebie. <b>Liczba przestrzenna</b> (liczba orbitali zhybrydyzowanych) = liczba atomów przyłączonych (wiązań σ) + liczba wolnych par atomu centralnego.</p>
<table><tr><th>LP</th><th>Hybrydyzacja</th><th>Kąt</th><th>wolne pary 0</th><th>1</th><th>2</th></tr>
<tr><td>2</td><td>sp</td><td>180°</td><td>liniowa (digonalna): BeCl₂, CO₂, C₂H₂, HCN</td><td>–</td><td>–</td></tr>
<tr><td>3</td><td>sp²</td><td>120°</td><td>trygonalna płaska: BF₃, SO₃, CO₃²⁻, NO₃⁻, C₂H₄, HCHO</td><td>V-kształtna (kątowa): SO₂, NO₂⁻</td><td>–</td></tr>
<tr><td>4</td><td>sp³</td><td>109,5°</td><td>tetraedryczna: CH₄, CCl₄, NH₄⁺, SO₄²⁻, SiO₄⁴⁻</td><td>piramidalna (trygonalna): NH₃, H₃O⁺, PCl₃ (~107°)</td><td>V-kształtna: H₂O (104,5°), H₂S, OF₂</td></tr></table>
<p>Wolne pary odpychają silniej niż pary wiążące → kąty maleją: CH₄ 109,5° > NH₃ 107° > H₂O 104,5°.</p>
<div class="ex"><b>Procedura:</b> 1) atom centralny; 2) liczba przyłączonych atomów; 3) wolne pary = (e⁻ walencyjne atomu centralnego − e⁻ użyte do wiązań ± ładunek)/2; 4) LP → hybrydyzacja → kształt (bez wolnych par w nazwie kształtu). <b>NO₃⁻:</b> N, 3 atomy O, 0 wolnych par → sp², płaski trójkąt. <b>SO₂:</b> S, 2 atomy O, 1 wolna para → sp², kątowa.</div>
<p>W związkach organicznych: C z czterema wiązaniami pojedynczymi – sp³; C przy wiązaniu podwójnym – sp²; C przy potrójnym (lub =C= w allenach, CO₂) – sp; atomy C w benzenie – sp²; O w alkoholach – sp³; C grupy karbonylowej – sp².</p>`,
sq:[["Hybrydyzacja i kształt H₃O⁺?","sp³, piramida trygonalna."],["Kształt jonu CO₃²⁻?","Płaski trójkąt (sp²)."]]},
{id:"wz-sigmapi",t:"Wiązania σ i π",pp:"III.5",h:`
<p><b>Wiązanie σ</b> – nakładanie czołowe orbitali (wzdłuż osi łączącej jądra; s–s, s–p, p–p, orbitale zhybrydyzowane). <b>Wiązanie π</b> – nakładanie boczne niezhybrydyzowanych orbitali p (nad i pod osią). Wiązanie pojedyncze = 1σ; podwójne = 1σ + 1π; potrójne = 1σ + 2π. Wiązanie π jest słabsze od σ i uniemożliwia rotację wokół wiązania (izomeria cis-trans).</p>
<div class="ex"><b>Przykład.</b> Kwas akrylowy CH₂=CH–COOH: wiązania σ: 3×C–H, C=C (1), C–C (1), C=O (1), C–O (1), O–H (1) = 8σ; π: C=C, C=O = 2π.</div>
<p>Długość wiązania C–C: pojedyncze 154 pm > w benzenie 139 pm > podwójne 134 pm > potrójne 120 pm; energia rośnie w odwrotnej kolejności.</p>`,
sq:[["Ile wiązań σ i π ma cząsteczka HCN?","2σ i 2π."]]},
{id:"wz-oddz",t:"Oddziaływania międzycząsteczkowe i polarność",pp:"III.6",h:`
<ul><li><b>Wiązanie wodorowe</b> – oddziaływanie atomu H związanego z silnie elektroujemnym atomem (F, O, N) z wolną parą elektronową innego atomu F, O lub N: O–H···O. Odpowiada za wysokie t. wrzenia H₂O, HF, NH₃, alkoholi, kwasów karboksylowych (dimery), za strukturę II-rzędową białek i DNA, za rozpuszczalność alkoholi i cukrów w wodzie.</li>
<li><b>Siły van der Waalsa</b> – słabe oddziaływania dipol–dipol i dyspersyjne (rosną z masą i powierzchnią cząsteczki): t. wrzenia alkanów rośnie z długością łańcucha, a maleje z rozgałęzieniem (n-pentan 36°C > 2,2-dimetylopropan 9,5°C).</li></ul>
<p><b>Polarność cząsteczki</b> zależy od polarności wiązań i geometrii. Niepolarne mimo polarnych wiązań: CO₂, BF₃, CCl₄, SO₃, CH₄ (symetria). Polarne: H₂O, NH₃, SO₂, HCl, CHCl₃, CH₃OH. „Podobne rozpuszcza podobne”: substancje polarne/jonowe rozpuszczają się w wodzie, niepolarne – w heksanie, benzynie.</p>
<p>Fragmenty polarne (hydrofilowe): –OH, –COOH, –NH₂, –COO⁻; niepolarne (hydrofobowe): łańcuchy węglowodorowe, pierścienie aromatyczne.</p>`,
sq:[["Dlaczego t. wrzenia H₂O (100°C) jest dużo wyższa niż H₂S (−60°C)?","Między cząsteczkami H₂O tworzą się wiązania wodorowe; H₂S – tylko słabe siły van der Waalsa."]]},
{id:"wz-krysztaly",t:"Kryształy i alotropia",pp:"III.7, III.8",h:`
<table><tr><th>Kryształ</th><th>Węzły sieci</th><th>Siły</th><th>Właściwości</th><th>Przykłady</th></tr>
<tr><td>jonowy</td><td>kationy i aniony</td><td>elektrostatyczne</td><td>wysoka t.t., twarde, kruche; przewodzą w stopie i roztworze</td><td>NaCl, CaF₂, MgO</td></tr>
<tr><td>kowalencyjny</td><td>atomy</td><td>wiązania kowalencyjne</td><td>bardzo wysoka t.t., bardzo twarde, nierozpuszczalne, zwykle nie przewodzą</td><td>diament, SiO₂ (kwarc), SiC</td></tr>
<tr><td>molekularny (cząsteczkowy)</td><td>cząsteczki</td><td>van der Waalsa, wodorowe</td><td>niska t.t., miękkie, lotne, nie przewodzą</td><td>lód, I₂, CO₂(s), cukier</td></tr>
<tr><td>metaliczny</td><td>kationy metalu</td><td>wiązanie metaliczne</td><td>przewodzą prąd i ciepło, kowalne, połysk</td><td>Cu, Fe, Al</td></tr></table>
<p><b>Alotropia</b> – występowanie pierwiastka w kilku odmianach różniących się budową (a więc właściwościami fizycznymi): węgiel (diament, grafit, grafen, fulereny), tlen (O₂, O₃), siarka (rombowa, jednoskośna), fosfor (biały, czerwony).</p>
<ul><li><b>Diament</b> – każdy C sp³ połączony z 4 innymi (tetraedry) – najtwardszy, nie przewodzi prądu; narzędzia tnące, jubilerstwo.</li><li><b>Grafit</b> – warstwy C sp² (sześciokąty), zdelokalizowane elektrony π → przewodzi prąd; warstwy połączone słabo (van der Waals) → miękki, śliski; elektrody, smary, ołówki.</li><li><b>Grafen</b> – pojedyncza warstwa grafitu; bardzo wytrzymały, przewodzący, przezroczysty – elektronika, czujniki.</li><li><b>Fulereny</b> (np. C₆₀ – „piłka”) – cząsteczki kuliste; kryształ molekularny, rozpuszczalne w rozpuszczalnikach organicznych; nanotechnologia, nośniki leków.</li></ul>`,
sq:[["Dlaczego grafit przewodzi prąd, a diament nie?","W graficie każdy C (sp²) ma zdelokalizowany elektron π; w diamencie wszystkie elektrony tworzą zlokalizowane wiązania σ (sp³)."]]},
{id:"wz-bledy",t:"⚠️ Typowe błędy (wiązania)",pp:"–",h:`<ul><li>Liczenie wiązania podwójnego jako dwóch σ.</li><li>Ocena polarności cząsteczki tylko na podstawie polarności wiązań (CO₂ jest niepolarny!).</li><li>Pomijanie wolnych par w VSEPR (NH₃ to piramida, nie płaski trójkąt).</li><li>Nazwa kształtu z uwzględnieniem wolnych par (H₂O nie jest „tetraedryczna” – jest V-kształtna, choć O ma hybrydyzację sp³).</li><li>Wiązanie wodorowe „wewnątrz cząsteczki H₂O” – to oddziaływanie MIĘDZY cząsteczkami.</li><li>Brak ładunku i nawiasu we wzorze elektronowym jonu.</li></ul>`,sq:[]}
];

(function(){var A=function(k,o){TX[k].push(o)};
A("atom",{id:"at-zad",t:"✍️ Zadania rozwiązane krok po kroku",pp:"II",h:`
<div class="ex"><b>1. Konfiguracja jonu Fe³⁺.</b> Fe (Z=26): [Ar] 4s² 3d⁶. Jon tworzy się przez oderwanie najpierw elektronów 4s, potem 3d: Fe²⁺ [Ar] 3d⁶, Fe³⁺ [Ar] 3d⁵ – podpowłoka zapełniona w połowie (5 niesparowanych elektronów), stąd duża trwałość Fe³⁺. Pułapka: nie zapisuj [Ar] 4s² 3d³.</div>
<div class="ex"><b>2. Liczby kwantowe.</b> Elektron 3p: n = 3, l = 1, m ∈ {−1, 0, 1}, mₛ = ±½. Na podpowłoce 3p mieści się 6 elektronów, na powłoce n = 3 – 2n² = 18.</div>
<div class="ex"><b>3. Średnia masa atomowa.</b> Chlor: 75,8% ³⁵Cl (34,97 u) i 24,2% ³⁷Cl (36,97 u). m = 0,758·34,97 + 0,242·36,97 = 26,51 + 8,95 = 35,46 u. Zawsze sprawdź, czy wynik leży między masami izotopów i bliżej izotopu o większej zawartości.</div>
<div class="ex"><b>4. Okres półtrwania.</b> Z 80 mg izotopu o T½ = 8 dni po 24 dniach zostaje 80 · (½)³ = 10 mg (3 okresy półtrwania). Rozpad α ²²⁶Ra → ²²²Rn + ⁴He; rozpad β⁻ ¹⁴C → ¹⁴N + e⁻ (liczba atomowa rośnie o 1, liczba masowa bez zmian).</div>
<div class="ex"><b>5. Cr i Cu – promocja elektronu.</b> Cr: [Ar] 4s¹ 3d⁵, Cu: [Ar] 4s¹ 3d¹⁰ – wyjątki ze względu na trwałość podpowłoki d zapełnionej w połowie lub całkowicie.</div>`,sq:[["Ile niesparowanych elektronów ma Mn²⁺?","5 ([Ar] 3d⁵)."]]});
A("uklad",{id:"uk-zad",t:"✍️ Zadania rozwiązane",pp:"II, VII",h:`
<div class="ex"><b>1.</b> Uszereguj Na, Mg, K według rosnącego promienia: Mg &lt; Na &lt; K (w okresie promień maleje w prawo, w grupie rośnie w dół). Energia jonizacji – odwrotnie: K &lt; Na &lt; Mg.</div>
<div class="ex"><b>2.</b> Pierwiastek X: konfiguracja walencyjna 3s² 3p⁴ → okres 3 (n = 3), grupa 16 (2 + 4 + 10), blok p, siarka. Najwyższy stopień utlenienia +VI (SO₃, H₂SO₄), najniższy −II (H₂S).</div>
<div class="ex"><b>3.</b> Dlaczego charakter tlenków w okresie 3 zmienia się od zasadowego (Na₂O, MgO), przez amfoteryczny (Al₂O₃), do kwasowego (SiO₂, P₄O₁₀, SO₃, Cl₂O₇)? Bo rośnie elektroujemność pierwiastka i wiązanie E–O staje się kowalencyjne.</div>`,sq:[]});
A("wiaz",{id:"wi-zad",t:"✍️ Zadania rozwiązane",pp:"III",h:`
<div class="ex"><b>1.</b> Wiązanie w HCl: ΔE = 3,0 − 2,1 = 0,9 → kowalencyjne spolaryzowane; w KCl: 3,0 − 0,8 = 2,2 → jonowe (umownie ΔE ≥ 1,7).</div>
<div class="ex"><b>2.</b> Kształt i polarność: CO₂ – liniowa, wiązania polarne, cząsteczka niepolarna (momenty się znoszą); H₂O – kątowa, polarna; NH₃ – piramida trygonalna (sp³, wolna para), polarna; CH₄ – tetraedr, niepolarna; BF₃ – płaska trójkątna (sp²), niepolarna.</div>
<div class="ex"><b>3.</b> Dlaczego H₂O wrze w 100°C, a H₂S w −60°C? Między cząsteczkami wody występują wiązania wodorowe (silnie elektroujemny O), w H₂S praktycznie ich brak.</div>`,sq:[]});
A("stech",{id:"st-zad2",t:"✍️ Zadanie z wydajnością i nadmiarem",pp:"I",h:`
<div class="ex">Zmieszano 5,4 g Al z 7,1 g Cl₂ (2Al + 3Cl₂ → 2AlCl₃). n(Al) = 0,2 mol, n(Cl₂) = 0,1 mol. Na 0,2 mol Al potrzeba 0,3 mol Cl₂ → Cl₂ w niedomiarze. n(AlCl₃) = ⅔ · 0,1 = 0,0667 mol; m = 0,0667 · 133,5 = 8,9 g. Przy wydajności 80%: 7,12 g. Nadmiar Al: 0,2 − 0,0667 = 0,133 mol (3,6 g).</div>`,sq:[]});
A("roztw",{id:"ro-zad",t:"✍️ Zadania rozwiązane krok po kroku",pp:"V",h:`
<div class="ex"><b>1. Przeliczanie Cp → Cm.</b> 36% HCl, d = 1,18 g/cm³. Cm = Cp·d·10/M = 36 · 1,18 · 10 / 36,5 = 11,6 mol/dm³ (d w g/cm³).</div>
<div class="ex"><b>2. Rozcieńczanie.</b> Ile wody dodać do 200 g roztworu 20%, by otrzymać 5%? Substancja: 40 g; masa nowego roztworu 40/0,05 = 800 g → 600 g wody.</div>
<div class="ex"><b>3. Mieszanie.</b> 100 g 10% + 300 g 30%: (10 + 90)/400 = 25%.</div>
<div class="ex"><b>4. Rozpuszczalność.</b> Rozpuszczalność KNO₃ w 20°C wynosi 31,6 g/100 g wody; Cp roztworu nasyconego = 31,6/131,6 = 24,0%. Ochłodzenie nasyconego roztworu z 60°C (110 g/100 g wody) do 20°C wytrąca 110 − 31,6 = 78,4 g kryształów na każde 100 g wody.</div>`,sq:[["Ile gramów NaOH potrzeba na 250 cm³ roztworu 0,2 M?","0,05 mol · 40 = 2 g."]]});
A("kin",{id:"ki-zad",t:"✍️ Zadania rozwiązane krok po kroku",pp:"IV",h:`
<div class="ex"><b>1. Stała równowagi.</b> H₂ + I₂ ⇄ 2HI; w stanie równowagi [H₂] = [I₂] = 0,2, [HI] = 1,6 mol/dm³. K = 1,6² / (0,2 · 0,2) = 64.</div>
<div class="ex"><b>2. Stężenia równowagowe.</b> Dla K = 64 i stężeń początkowych 1 mol/dm³ H₂ i I₂: (2x)²/(1−x)² = 64 → 2x/(1−x) = 8 → x = 0,8. [HI] = 1,6, [H₂] = [I₂] = 0,2 mol/dm³.</div>
<div class="ex"><b>3. Szybkość reakcji.</b> v = k[A]²[B]. Dwukrotny wzrost [A] → v rośnie 4 razy; trzykrotne zmniejszenie objętości (wszystkie stężenia ×3) → v rośnie 3³ = 27 razy.</div>
<div class="ex"><b>4. Reguła van ’t Hoffa.</b> Współczynnik temperaturowy 2, wzrost o 30°C → szybkość rośnie 2³ = 8 razy.</div>
<div class="ex"><b>5. Prawo Hessa.</b> ΔH reakcji = Σ ΔH tworzenia produktów − Σ ΔH tworzenia substratów; dla reakcji odwrotnej zmień znak, dla podwojonych współczynników pomnóż ΔH przez 2.</div>`,sq:[]});
A("kw",{id:"kw-zad",t:"✍️ pH – szybkie przykłady",pp:"VI",h:`<div class="ex">0,01 M HCl: pH = 2. 0,001 M NaOH: pOH = 3, pH = 11. 0,1 M CH₃COOH (Ka = 1,8·10⁻⁵): [H⁺] = √(Ka·c) = 1,34·10⁻³, pH ≈ 2,87, α ≈ 1,3%.</div>`,sq:[]});
A("redoks",{id:"rd-zad",t:"✍️ Zadania rozwiązane – bilansowanie krok po kroku",pp:"VIII",h:`
<div class="ex"><b>1. Metoda jonowo-elektronowa (środowisko kwasowe).</b> MnO₄⁻ + SO₃²⁻ → Mn²⁺ + SO₄²⁻.<br>Redukcja: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O | ·2<br>Utlenianie: SO₃²⁻ + H₂O → SO₄²⁻ + 2H⁺ + 2e⁻ | ·5<br>Suma: 2MnO₄⁻ + 5SO₃²⁻ + 6H⁺ → 2Mn²⁺ + 5SO₄²⁻ + 3H₂O. Sprawdzenie ładunku: −2 − 10 + 6 = −6; +4 − 10 = −6 ✓.</div>
<div class="ex"><b>2. Środowisko obojętne.</b> 2MnO₄⁻ + 3SO₃²⁻ + H₂O → 2MnO₂ + 3SO₄²⁻ + 2OH⁻ (brunatny osad). <b>Zasadowe:</b> 2MnO₄⁻ + SO₃²⁻ + 2OH⁻ → 2MnO₄²⁻ + SO₄²⁻ + H₂O (zielony roztwór).</div>
<div class="ex"><b>3. Dysproporcjonowanie.</b> Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O (na zimno); 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O (na gorąco). Ten sam pierwiastek jest utleniaczem i reduktorem.</div>
<div class="ex"><b>4. Dichromian w środowisku kwasowym.</b> Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O (pomarańczowy → zielony). Bilans e⁻: 2 Cr(+VI→+III) = 6e⁻ = 6 Fe²⁺.</div>
<div class="ex"><b>5. Synproporcjonowanie.</b> 2H₂S + SO₂ → 3S + 2H₂O (S−II i S+IV → S0).</div>
<div class="ex"><b>6. Miareczkowanie redoks.</b> Na zmiareczkowanie 25 cm³ roztworu FeSO₄ zużyto 20 cm³ 0,02 M KMnO₄. n(MnO₄⁻) = 4·10⁻⁴ mol; n(Fe²⁺) = 5 · 4·10⁻⁴ = 2·10⁻³ mol; c(Fe²⁺) = 0,08 mol/dm³. KMnO₄ jest własnym wskaźnikiem (pierwsza trwała różowa barwa).</div>
<p><b>Pułapki:</b> H₂O₂ bywa utleniaczem (z I⁻, Fe²⁺) i reduktorem (z MnO₄⁻: 2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O). W środowisku zasadowym nie zapisuj H⁺ po żadnej stronie.</p>`,sq:[["Bilansuj: Cr₂O₇²⁻ + I⁻ (H⁺).","Cr₂O₇²⁻ + 6I⁻ + 14H⁺ → 2Cr³⁺ + 3I₂ + 7H₂O"]]});
A("elchem",{id:"el-zad",t:"✍️ Zadania rozwiązane krok po kroku",pp:"IX",h:`
<div class="ex"><b>1. Ogniwo Daniella</b> Zn|Zn²⁺||Cu²⁺|Cu. Anoda (−): Zn → Zn²⁺ + 2e⁻ (utlenianie); katoda (+): Cu²⁺ + 2e⁻ → Cu (redukcja). SEM = 0,34 − (−0,76) = 1,10 V. Elektrony płyną zewnętrznym przewodnikiem od Zn do Cu; jony w kluczu elektrolitycznym: aniony do anody, kationy do katody.</div>
<div class="ex"><b>2. Elektroliza wodnego roztworu NaCl</b> (elektrody grafitowe). K(−): 2H₂O + 2e⁻ → H₂ + 2OH⁻ (Na⁺ się nie redukuje); A(+): 2Cl⁻ → Cl₂ + 2e⁻. Roztwór przy katodzie zasadowy (fenoloftaleina malinowa). Stopiony NaCl: K: Na⁺ + e⁻ → Na.</div>
<div class="ex"><b>3. Elektroliza CuSO₄(aq)</b> – elektrody grafitowe: K: Cu²⁺ + 2e⁻ → Cu; A: 2H₂O → O₂ + 4H⁺ + 4e⁻ (jony SO₄²⁻ się nie utleniają); roztwór zakwasza się i odbarwia. Anoda miedziana: Cu → Cu²⁺ + 2e⁻ (rafinacja miedzi).</div>
<div class="ex"><b>4. Prawo Faradaya.</b> Ile minut prądem 2 A osadza się 0,635 g Cu? n = 0,01 mol, Q = 0,01 · 2 · 96500 = 1930 C, t = 965 s ≈ 16,1 min.</div>
<div class="ex"><b>5. Korozja.</b> Żelazo w kontakcie z Cu koroduje szybciej (Fe – anoda ogniwa lokalnego); powłoka Zn (ocynk) chroni Fe nawet po uszkodzeniu (ochrona protektorowa – Zn utlenia się zamiast Fe), powłoka Sn (blacha biała) – tylko gdy szczelna. Rdza: Fe₂O₃·xH₂O; 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O.</div>
<p><b>Pułapki:</b> w ogniwie anoda jest ujemna, w elektrolizerze dodatnia – ale zawsze na anodzie zachodzi utlenianie. Przy obliczaniu SEM nie mnoży się potencjałów przez współczynniki.</p>`,sq:[["Produkty elektrolizy wodnego roztworu KNO₃?","K: H₂, A: O₂ – rozkład wody."]]});
A("org2",{id:"o2-zad",t:"✍️ Zadanie – ciąg przemian",pp:"XIV–XVII",h:`<div class="ex">eten → (H₂O, H⁺) etanol → (CuO, T) etanal → (Tollens) kwas octowy → (C₂H₅OH, H₂SO₄) octan etylu → (NaOH) octan sodu + etanol. Przy każdej strzałce podaj odczynnik i warunki – CKE punktuje kompletny zapis.</div>`,sq:[]});
})();
(function(){var A=function(k,o){TX[k].push(o)};
A("wiaz",{id:"wi-zad2",t:"✍️ Wiązanie koordynacyjne",pp:"III",h:`<div class="ex">W jonie NH₄⁺ jedno z czterech wiązań N–H jest koordynacyjne (donor: wolna para N, akceptor: H⁺), ale po utworzeniu wszystkie cztery są równocenne. Podobnie H₃O⁺ i [Cu(NH₃)₄]²⁺ (ligandy NH₃ – donory par elektronowych, Cu²⁺ – akceptor).</div>`,sq:[]});
A("stech",{id:"st-zad3",t:"✍️ Wzór rzeczywisty ze składu",pp:"I",h:`<div class="ex">Związek: 40,0% C, 6,7% H, 53,3% O, M = 180 g/mol. C : H : O = 3,33 : 6,7 : 3,33 = 1 : 2 : 1 → CH₂O (30 g/mol); 180/30 = 6 → C₆H₁₂O₆.</div>`,sq:[]});
A("roztw",{id:"ro-zad2",t:"✍️ Rozdzielanie mieszanin",pp:"V",h:`<div class="ex">Sączenie (zawiesina piasku), dekantacja, destylacja (woda z solą, etanol z wodą), krystalizacja, chromatografia (barwniki), ekstrakcja (jod z wody do heksanu), rozdzielacz (olej i woda – emulsja nietrwała). Emulgatory (mydło, lecytyna) stabilizują emulsje, np. majonez.</div>`,sq:[]});
A("kin",{id:"ki-zad2",t:"✍️ Reguła przekory – przykłady",pp:"IV",h:`<div class="ex">N₂ + 3H₂ ⇄ 2NH₃, ΔH &lt; 0. Wydajność NH₃ zwiększa: wzrost ciśnienia (mniej moli gazu po prawej), obniżenie temperatury (reakcja egzotermiczna), usuwanie NH₃. Katalizator (Fe) nie przesuwa równowagi – tylko skraca czas jej ustalenia. Dla H₂ + I₂ ⇄ 2HI zmiana ciśnienia nie wpływa na położenie równowagi (jednakowa liczba moli gazów). Wzrost temperatury dla reakcji endotermicznej zwiększa K.</div>`,sq:[["Jak ciśnienie wpływa na 2SO₂ + O₂ ⇄ 2SO₃?","Wzrost ciśnienia przesuwa równowagę w prawo (3 mole gazu → 2)."]]});
A("redoks",{id:"rd-tab",t:"📋 Typowe utleniacze i reduktory – produkty",pp:"VIII",h:`<table><tr><th>Utleniacz</th><th>Środowisko</th><th>Produkt redukcji (obserwacja)</th></tr>
<tr><td>MnO₄⁻</td><td>kwasowe</td><td>Mn²⁺ (fiolet → bezbarwny/bladoróżowy)</td></tr><tr><td>MnO₄⁻</td><td>obojętne</td><td>MnO₂ (brunatny osad)</td></tr><tr><td>MnO₄⁻</td><td>silnie zasadowe</td><td>MnO₄²⁻ (zielony)</td></tr>
<tr><td>Cr₂O₇²⁻</td><td>kwasowe</td><td>Cr³⁺ (pomarańczowy → zielony)</td></tr><tr><td>HNO₃ stęż.</td><td>–</td><td>NO₂ (brunatny gaz)</td></tr><tr><td>HNO₃ rozc.</td><td>–</td><td>NO (bezbarwny, brunatnieje na powietrzu)</td></tr>
<tr><td>H₂SO₄ stęż.</td><td>T</td><td>SO₂</td></tr><tr><td>H₂O₂</td><td>kwasowe</td><td>H₂O</td></tr><tr><td>Cl₂, Br₂</td><td>–</td><td>Cl⁻, Br⁻</td></tr></table>
<p>Reduktory: metale aktywne, H₂, C, CO, H₂S (→ S, żółty osad), SO₂/SO₃²⁻ (→ SO₄²⁻), Fe²⁺ (→ Fe³⁺), I⁻ (→ I₂, brunatny; ze skrobią granatowy), C₂O₄²⁻ (→ CO₂). Chrom(VI) w środowisku: 2CrO₄²⁻ + 2H⁺ ⇄ Cr₂O₇²⁻ + H₂O (żółty ⇄ pomarańczowy) – to NIE jest reakcja redoks.</p>
<div class="ex">Cu + 2H₂SO₄(stęż.) → CuSO₄ + SO₂ + 2H₂O; Cu + 4HNO₃(stęż.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O; 3Cu + 8HNO₃(rozc.) → 3Cu(NO₃)₂ + 2NO + 4H₂O. Glin i żelazo pasywują się w stężonym HNO₃ (na zimno).</div>`,sq:[["Czy przejście CrO₄²⁻ → Cr₂O₇²⁻ jest redoks?","Nie – stopień utlenienia Cr pozostaje +VI."]]});
A("elchem",{id:"el-szereg",t:"📋 Szereg napięciowy – wnioski",pp:"IX",h:`<p>Im niższy potencjał standardowy, tym silniejszy reduktor (metal łatwiej się utlenia). Metal o niższym E° wypiera z roztworu soli metal o wyższym E°: Fe + CuSO₄ → FeSO₄ + Cu (czerwony nalot, roztwór traci niebieską barwę); Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag (roztwór niebieszczeje). Metale o E° &lt; 0 wypierają H₂ z kwasów nieutleniających; Cu, Ag, Au – nie. Metale bardzo aktywne (Na, K, Ca) reagują z wodą, zamiast wypierać inne metale z roztworu. Wybierając elektrodę do ogniwa: anodą jest półogniwo o niższym potencjale.</p>`,sq:[["Czy Zn wyprze Pb z Pb(NO₃)₂?","Tak (E°Zn = −0,76 V < E°Pb = −0,13 V) – „drzewko ołowiowe”."]]});
})();
TX.redoks.push({id:"rd-sto",t:"✍️ Stopnie utlenienia w związkach organicznych",pp:"VIII",h:`<div class="ex">W etanolu CH₃–CH₂OH: C w CH₃ = −III, C przy OH = −I; w etanalu C(HO) = +I; w kwasie octowym C(OOH) = +III; w CO₂ +IV. Utlenianie alkohol → aldehyd → kwas oznacza wzrost stopnia utlenienia atomu C grupy funkcyjnej o 2 na każdym etapie, czyli oddanie 2 elektronów.</div>`,sq:[]});

