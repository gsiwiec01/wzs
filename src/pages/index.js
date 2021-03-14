import React from "react";
import { Link } from 'gatsby';
import MainTemplate from '../components/MainTemplate';
import SectionTemplate from '../components/SectionTemplate';
import Chart from '../components/Chart';
import Item from '../components/Item';

const IndexPage = () => (
  <>
    <MainTemplate>
      <main class="h-screen flex justify-center items-center px-4 bg-main bg-cover bg-top">
        <div class="flex flex-col items-center">
          <h1 class="text-7xl tracking-tight font-extrabold text-gray-900">
            <span class="block xl:inline">Fundusze Norweskie i </span>
            <span class="block text-red-600 xl:inline">EOG</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 max-w-4xl text-center">
            czyli Norweski Mechanizm Finansowy oraz Mechanizm Finansowy Europejskiego Obszaru Gospodarczego  są formą bezzwrotnej pomocy zagranicznej przyznanej przez Norwegię, Islandię i Liechtenstein nowym członkom UE. Fundusze te są związane z przystąpieniem Polski do Unii Europejskiej oraz z jednoczesnym wejściem naszego kraju do Europejskiego Obszaru Gospodarczego (UE + Islandia, Liechtenstein, Norwegia).
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="flex space-x-4 rounded-md shadow">
              <a href="#creators" class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                Dowiedz się więcej!
              </a>
            </div>
          </div>
        </div>
      </main>

      <SectionTemplate className="bg-gray-100" title="Inicjatorzy projektu" id="creators">
        <div class="mt-10 max-w-5xl mx-auto space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div class="relative flex flex-col items-center">
            <img src={`norway.jpg`} class="h-40 inline-block ring-2 ring-white" />
            <div class="text-2xl">
              Norwegia
            </div>
          </div>

          <div class="relative flex flex-col items-center">
            <img src={`liechtenstein.jpg`} class="h-40 inline-block ring-2 ring-white" />
            <div class="text-2xl">
              Liechtenstein
            </div>
          </div>

          <div class="relative flex flex-col items-center">
            <img src={`iceland.png`} class="h-40 inline-block ring-2 ring-white" />
            <div class="text-2xl">
              Islandia
            </div>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate title="Jak zdobyć granty?">  
        <p class="mt-4 text-center text-xl text-gray-500 lg:mx-auto">
          Beneficjentami projektu są małe i średnie miasta zakwalifikowane przez Strategię na Rzecz Odpowiedzialnego Rozwoju do grona 255 miast z najtrudniejszą sytuacją społeczno-gospodarczą oraz pracownicy miejskiej administracji publicznej i podległych jednostek.
          <br />Dofinansowanie w wysokości od 3 do 10 mln € zostanie przeznaczone na ok. 15 kompleksowych projektów uwzględniających poniższe aspekty.
        </p>

        
        <dl class="mt-10 space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div class="relative">
            <dt class="text-center text-lg leading-6 font-medium text-gray-900">
              Aspekty środowiskowe
            </dt>
            <dd class="mt-2 text-base text-justify text-gray-500">
              Aspekty środowiskowe jak poprawa jakości powietrza poprzez ograniczenie emisji szkodliwych gazów, pyłu i niskiej emisji, przejście na odnawialne źródła energii, niskoemisyjny transport publiczny, itp.;
            </dd>
          </div>

          <div class="relative">
            <dt class="text-center text-lg leading-6 font-medium text-gray-900">
              Aspekty społeczne
            </dt>
            <dd class="mt-2 text-base text-justify text-gray-500">
              Aspekty społeczne jak skuteczna polityka mieszkaniowa i mieszkaniowa ze szczególnym uwzględnieniem zmarginalizowanych obszarów miasta, redukcja bezrobocia i stopa ubóstwa, wdrażanie standardów dostępności zgodnie z programem dostępność Plus 2018 - 2025;  redukcja migracji zarobkowej z małych i średnich miast do dużych ośrodków, stawianie czoła wyzwaniom starzejącego się społeczeństwa;
            </dd>
          </div>

          <div class="relative">
            <dt class="text-center text-lg leading-6 font-medium text-gray-900">
              Aspekty gospodarcze
            </dt>
            <dd class="mt-2 text-base text-justify text-gray-500">
              Aspekty gospodarcze (np. wspieranie przedsiębiorczości i lokalnej gospodarki, wzmacnianie lokalnego rynku pracy, zwłaszcza w odniesieniu do osób wchodzących / dostosowujących się do rynku pracy)
            </dd>
          </div>
        </dl>
      </SectionTemplate>

      <SectionTemplate className="bg-gray-100" title="Informacje dodatkowe">
        <div class="mt-10 space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="relative">
            <Chart />
          </div>

          <div class="relative space-y-10">
            <Item
              icon={
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="W nowym okresie finansowania (2014-2021) kwota 2,8 mld euro zostanie udostępniona 15 państwom członkowskim Unii Europejskiej w celu zmniejszenia różnic społecznych i ekonomicznych oraz wzmocnienia stosunków dwustronnych z trzema krajami-darczyńcami."
              content="3 maja 2016 r. podpisano porozumienia pomiędzy Islandią, Liechtensteinem i Norwegią a Unią Europejską w sprawie funduszy norweskich i funduszy EOG na okres od 1 maja 2014 r. do 30 kwietnia 2021 r."
            />

            <Item
              icon={
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="W nowym okresie finansowania na lata 2014- 2021 Polska pozostanie największym beneficjentem środków norweskich i EOG – alokacja przewidziana dla naszego kraju to 809,3 mln euro."
              content="Wspierane będą przede wszystkim inicjatywy w dziedzinie innowacji, badań i edukacji. Wśród kluczowych obszarów tematycznych znajdą się również: bezpieczeństwo energetyczne, zmiany klimatyczne i zwiększona współpraca pomiędzy Polską a krajami-darczyńcami w zakresie wymiaru sprawiedliwości i spraw wewnętrznych."
            />

            <Item
              icon={
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="Cele Funduszy Norweskich to"
              content="przyczynianie się do zmniejszania różnic ekonomicznych i społecznych w obrębie Europejskiego Obszaru Gospodarczego oraz
              wzmacnianie stosunków dwustronnych pomiędzy państwami-darczyńcami a państwem-beneficjentem."
            />

            <Item
              icon={
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="Wnioskodawcami mogą być podmioty prywatne czy też publiczne, komercyjne bądź niekomercyjne, oraz organizacje pozarządowe ustanowione jako podmiot prawny w Polsce, jak również organizacje międzyrządowe działające w Polsce. Dla każdego z programów zostanie ustalony katalog podmiotów, które będą mogły ubiegać się o dofinansowanie."
              content="Polska podpisała umowy międzyrządowe (Memoranda of Understanding) w sprawie III edycji funduszy norweskich i EOG (2014-2021) 20 grudnia 2017 r., otrzymując na ich mocy 809,3 mln EUR (z łącznej puli ponad 2,8 mld EUR), co czyni ją podobnie jak w poprzednich edycjach, największym beneficjentem."
            />
          </div>
        </div>
      </SectionTemplate>
    </MainTemplate>
  </>
)

export default IndexPage;
