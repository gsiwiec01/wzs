import React from "react";
import MainTemplate from '../components/MainTemplate';
import SectionTemplate from '../components/SectionTemplate';
import Item from '../components/Item';

const Implemention = () => (
  <>
    <MainTemplate>
      <main class="h-96 flex justify-center items-center px-4 bg-main bg-cover bg-top">
        <div class="flex flex-col items-center">
          <h1 class="text-7xl tracking-tight font-extrabold text-gray-900 text-center">
            <span class="block">Schemat przygotowania, wyboru i </span>
            <span class="block text-red-600">wdrażania projektów</span>
          </h1>
        </div>
      </main>

      <SectionTemplate>
        <div class="flex">
          <div class="w-1/2 space-y-5 p-3">
            <Item 
              icon={
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="ETAP I"
              content="Nabór adresowany do 255 miast z SOR. Miasta składają Zarysy projektów w odpowiedzi na ogłoszenie o naborze. Wybór ok. 50 miast."
            />

            <Item 
              icon={
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="ETAP II"
              content="
                Faza I – ok. 50 wybranych miast przygotowuje Plany Rozwoju Lokalnego i Plany rozwoju instytucjonalnego jako elementy Kompletnych Propozycji Projektów. Szerokie wsparcie doradczo-eksperckie w ramach projektu predefiniowanego ze strony Związku Miast Polskich oraz Krajowego Instytutu Polityki Przestrzennej i Mieszkalnictwa we współpracy z KS i OEC
                \n\n
                Faza II – wybór ok. 15 projektów (Kompletnych Propozycji Projektów) do finansowania
              "
            />

            <Item       
              icon={
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="ETAP III"
              content="
                Wdrażanie ok 15 projektów. Szerokie wsparcie doradczo-eksperckie w ramach projektu predefiniowanego w celu skutecznej realizacji przygotowanych Planów poprzez stałych doradców miast i doradców sektorowych, rekrutowanych w miarę potrzeby. Nadzór nad utrzymywaniem głównego kierunku projektu i czuwanie nad jego poprawnością merytoryczną. Projekty muszą zostać zrealizowane do 30 kwietnia 2024 roku.
              "
            />
          </div>

          <div class="w-1/2 p-3 text-lg text-gray-500 text-justify">
            <p class="ml-16 text-2xl leading-6 font-medium text-gray-900 mb-2">
              Fundusze Norweskie i EOG - wspólne wartości
            </p>
            Wszystkie programy i działania finansowane w ramach Funduszy norweskich i EOG opierają się na wspólnych wartościach, takich jak poszanowanie godności ludzkiej, wolność, demokracja, równość, praworządność i poszanowanie praw człowieka, w tym praw osób należących do mniejszości.
            Działania Krajowego Punktu Kontaktowego oraz Operatorów Programów i Beneficjentów podejmowane są w duchu hasła „Wspólnie działamy na rzecz Europy zielonej, konkurencyjnej i sprzyjającej integracji społecznej”, w zgodzie z zasadami niedyskryminacji zawartymi w „Blue Book” (Priority sectors and  programme areas 2014-2021).
            Uczestnicy procesu wdrażania Funduszy norweskich i EOG są związani szeregiem przepisów prawa międzynarodowego oraz krajowego, zobowiązującego do przestrzegania zakazu dyskryminacji ze względu na jakąkolwiek przesłankę – płeć, rasę, kolor skóry, pochodzenie etniczne lub społeczne, cechy genetyczne, język, religię lub przekonania, poglądy polityczne lub wszelkie inne poglądy, przynależność do mniejszości narodowej, majątek, urodzenie, niepełnosprawność, wiek lub orientację seksualną.
          </div>
        </div>
      </SectionTemplate>
    </MainTemplate>
  </>
)

export default Implemention;

