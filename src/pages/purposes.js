import React from 'react';
import MainTemplate from '../components/MainTemplate';
import SectionTemplate from '../components/SectionTemplate';
import Purpose from '../components/Purpose';

const Purposes = () => (
  <>
    <MainTemplate>
      <main class="h-96 flex justify-center items-center px-4 bg-main bg-cover bg-top">
        <div class="flex flex-col items-center">
          <h1 class="text-7xl tracking-tight font-extrabold text-gray-900">
            <span class="block xl:inline">Cele </span>
            <span class="block text-red-600 xl:inline">projektu</span>
          </h1>
        </div>
      </main>

      <SectionTemplate>
        <div class="grid grid-cols-3 gap-x-4">
          <div class="space-y-4">
            <Purpose
              img="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Środowisko, energia, zmiany klimatu"
              operators="Ministerstwo Klimatu i Środowiska przy wsparciu Narodowego Funduszu Ochrony Środowiska i Gospodarki Wodnej"
            >
              <div class="text-md mt-5">
                Celem programu jest złagodzenie zmian klimatycznych i zmniejszenie wrażliwości na zmianę klimatu.
                Obszary objęte wspraciem to: Energia Odnawialna, Efektywność Energetyczna, Bezpieczeństwo Energetyczne
                Łagodzenie Zmian Klimatu i Adaptacja
                Środowisko i Ekosystemy
              </div>

              <div class="text-md mt-5">
                Budżet 164,7 mln euro, a w tym:
                <ol>
                  <li>140 mln euro z Mechanizmu Finansowego EOG</li>
                  <li>24,7 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Zdrowie"
              operators="Ministerstwo Zdrowia (MZ)"
            >
              <div class="text-md mt-5">
              Celem programu jest zmniejszanie społecznych nierówności w zdrowiu poprzez realizację działań związanych z telemedycyną i polityką e-zdrowia, zdrowym stylem życia dzieci i młodzieży, środowiskowym modelem opieki psychiatrycznej.
              Obszary objęte wsparcie to: Telemedycyna i polityka e-zdrowia (Projekt predefiniowany nr 1), Zdrowy styl życia dzieci i młodzieży, z uwzględnieniem opieki psychiatrycznej (Projekt predefiniowany nr 2).

              </div>

              <div class="text-md mt-5">
                Budżet 23,5 mln euro, a w tym:
                <ol>
                  <li>20 mln euro z Norweskiego Mechanizmu Finansowego</li>
                  <li>3,5 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Rozwój lokalny"
              operators="Ministerstwo Funduszy i Polityki Regionalnej (wcześniej Ministerstwo Inwestycji i Rozwoju)"
            >
              <div class="text-md mt-5">
                Celem programu jest wzmocnienie spójności społecznej i gospodarczej poprzez podniesienie jakości środowiska, przedsiębiorczości, efektywności administracji publicznej i standardów życia dla wszystkich mieszkańców (w tym grup defaworyzowanych) średnich i małych miast.
                Obszary objęte wsparciem to: Rozwój lokalny i zmniejszenie ubóstwa, Dobrze zarządzanie, Odpowiedzialne instytucje, Przejrzystość
              </div>

              <div class="text-md mt-5">
                Budżet 117,6 mln euro, a w tym:
                <ol>
                  <li>100 mln euro z Mechanizmu Finansowego EOG i Norweskiego Mechanizmu Finansowego</li>
                  <li>17,6 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/6238119/pexels-photo-6238119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Społeczeństwo obywatelskie"
              operators="Biuro Mechanizmów Finansowych (BMF) w Brukseli,  Fundacja im. Stefana Batorego, w konsorcjum z Fundacją STOCZNIA i Fundacją Akademia Organizacji Obywatelskich, Fundacja Rozwoju Demokracji Lokalnej, w konsorcjum z Fundacją Rozwoju Społeczeństwa Informacyjnego i Fundacją Edukacja dla Demokracji"
            >
              <div class="text-md mt-5">
                Celem programu jest wsparcie społeczeństwa obywatelskiego i aktywności obywatelskiej oraz wzmocnienie najsłabszych grup społecznych.

              </div>

              <div class="text-md mt-5">
                Kwota dofinansowania 53 mln euro z funduszu EOG.
                
              </div>
            </Purpose>
          </div>

          <div class="space-y-4">
            <Purpose
              img="https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Kultura"
              operators="Ministerstwo Kultury i Dziedzictwa Narodowego (MKiDN)"
            >
              <div class="text-md mt-5">
                Celem programu jest rozwój współpracy kulturalnej, przedsiębiorczości w sektorze kultury i zarządzania dziedzictwem kulturowym.
                Obszary objęte wsparciem to: Zarządzanie dziedzictwem kulturowym, Dostęp do kultury i sztuki, Rozpowszechnienie koncepcji rozwoju widowni, Wzrost wiedzy na temat żydowskiego dziedzictwa kulturowego, Poprawa współpracy między instytucjami / organizacjami z Polski oraz Norwegii, Islandii i Liechtensteinu.
              </div>

              <div class="text-md mt-5">
                Budżet 88 mln euro, a w tym:
                <ol>
                  <li>75 mln euro z Mechanizmu Finansowego EOG</li>
                  <li>13 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Edukacja"
              operators="Fundacja Rozwoju Systemu Edukacji (FRSE)"
            >
              <div class="text-md mt-5">
                Celem programu jest zmniejszanie różnic ekonomicznych i społecznych w obrębie Europejskiego Obszaru Gospodarczego
                Wzmacnianie stosunków dwustronnych pomiędzy Polską a Państwami-Darczyńcami (Islandia, Liechtenstein, Norwegia) w obszarze edukacji
                Wzmacnianie potencjału ludzkiego oraz poszerzanie wiedzy poprzez edukację.
                Obszary objęte wsparciem to: Rozwój zawodowy pracowników instytucji edukacyjnych, Mobilność w edukacji wyższej – dla studentów i pracowników, Wzmocnienie jakości i adekwatności nauczania zawodowego i ustawicznego, Wzmocnienie jakości i adekwatności nauczania na wszystkich szczeblach edukacji (z wyłączeniem kształcenia zawodowego i ustawicznego) poprzez współpracę instytucjonalną.
              </div>

              <div class="text-md mt-5">
                Budżet 23,53 mln euro, a w tym:
                <ol>
                  <li>20 mln euro z Mechanizmu Finansowego EOG</li>
                  <li>3,53 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/6077861/pexels-photo-6077861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Sprawiedliwość"
              operators="Ministerstwo Sprawiedliwości"
            >
              <div class="text-md mt-5">
                Celem programu jest wzmocnienie praworządności. 
                Obszary objęte wsparciem to: Służby więzienne i areszt przedprocesowy, Przeciwdziałanie przemocy w rodzinie i przemocy ze względu na płeć.
              </div>

              <div class="text-md mt-5">
                Budżet 68,5 mln euro, a w tym:
                <ol>
                  <li>58,2 mln euro z Norweskiego Mechanizmu Finansowego</li>
                  <li>10,3 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/6141084/pexels-photo-6141084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Dialog i godna praca"
              operators="Biuro Mechanizmów Finansowych w Brukseli "
            >
              <div class="text-md mt-5">
                Celem programu jest wzmocnienie współpracy trójstronnej pomiędzy organizacjami pracodawców, związkami zawodowymi i władzami publicznymi oraz promocja godnej pracy.
              </div>

              <div class="text-md mt-5">
                Kwota dofinansowania 6,2 mln euro z funduszu Norwerskiego.
                
              </div>
            </Purpose>
          </div>

          <div class="space-y-4">  
            <Purpose
              img="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Badania Naukowe"
              operators="Narodowe Centrum Nauki (NCN), Narodowe Centrum Badań i Rozwoju (NCBR). "
            >
              <div class="text-md mt-5">
              Celem programu jest poprawa wyników polskich badań naukowych, zarówno podstawowych, jak i stosowanych, jako narzędzi służących rozwojowi społeczeństwa i gospodarki opartej na wiedzy. Obszar wsparcia to: Badania podstawowe, Badania stosowane.


              </div>

              <div class="text-md mt-5">
                Budżet 129,4 mln euro, a w tym:
                <ol>
                  <li>100 mln euro z Norweskiego Mechanizmu Finansowego</li>
                  <li>10 mln euro z Mechanizmu Finansowego EOG</li>
                  <li>19,4 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Przedsiębiorczość i innowacje"
              operators="Polska Agencja Rozwoju Przedsiębiorczości"
            >
              <div class="text-md mt-5">
            Celem programu jest wzmocnienie konkurencyjności polskich przedsiębiorstw, przede wszystkim poprzez wsparcie w opracowaniu i wdrażaniu innowacyjnych technologii, rozwiązań, procesów, produktów i usług.
            Obszary objęte wsparciem to: Innowacje w zakresie zielonych technologii, Innowacyjne technologie w obszarze wód morskich i śródlądowych, Wsparcie technologii w zakresie poprawy jakości życia, Rozwój innowacyjności przedsiębiorstw zarządzanych przez kobiety (schemat małych grantów).
              </div>

              <div class="text-md mt-5">
                Budżet 100 mln euro, a w tym:
                <ol>
                  <li>85 mln euro z Norweskiego Mechanizmu Finansowego</li>
                  <li>15 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/70573/fireman-firefighter-rubble-9-11-70573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Sprawy wewnętrzne"
              operators="Ministerstwo Spraw Wewnętrznych i Administracji (MSWiA) we współpracy z Centrum Obsługi Projektów Europejskich (COPE)
              "
            >
              <div class="text-md mt-5">
            Celem programu jest wzmocnienie praworządności. Obszary objęte wsparciem to: Azyl i migracja, Międzynarodowa współpraca policyjna i zwalczanie przestępczości, Zapobieganie klęskom żywiołowym i gotowość na wypadek takich klęsk.
              </div>

              <div class="text-md mt-5">
                Budżet 23,5 mln euro, a w tym:
                <ol>
                  <li>20 mln euro z Norweskiego Mechanizmu Finansowego</li>
                  <li>3,5 mln euro – wkład krajowy</li>
                </ol>
              </div>
            </Purpose>

            <Purpose
              img="https://images.pexels.com/photos/5668430/pexels-photo-5668430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title=" Współpraca dwustronna z Norwegią, Islandią i Lichtensteinem
              "
              operators="Ministerstwo Funduszy i Polityki Regionalnej* – Krajowy Punkt Kontaktowy"
            >
              <div class="text-md mt-5">
            Celem programu jest wzmacnianie współpracy i pogłębianie wzajemnej wiedzy oraz zrozumienia między Państwami-Darczyńcami a Państwami-Beneficjentami.

            </div>

              <div class="text-md mt-5">
                Kwota dofinansowania  16,2 mln euro z Funduszu Nowerskiego i EOG.
                
              </div>
            </Purpose>
          </div>
        </div>
      </SectionTemplate>
    </MainTemplate>
  </>
)

export default Purposes;
