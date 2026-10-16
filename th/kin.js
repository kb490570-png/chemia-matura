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
