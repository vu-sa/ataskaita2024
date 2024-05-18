---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VU SA ataskaita"
  text: "už 2023-2024 m."
  tagline: "Vieningai Už Studentų Ateitį!"
  image:
    light:
      src: ./img/logos/vusa-lt-b.png
      alt: VU SA
    dark:
      src: ./img/logos/vusa-lt-w.png
      alt: VU SA
  actions:
    - theme: brand
      text: Sužinok apie šių metų veiklą!
      link: /mvp/strateginiai
    - theme: alt
      text: Praėjusių metų ataskaita
      link: https://vusa.lt/ataskaita-2023
---

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import TestimonialElement from "../components/TestimonialElement1.vue";
import NumberStatistic from "../components/NumberStatistic.vue";
import ElementWithBg from "../components/ElementWithBg.vue";
import PersonAvatar from "../components/PersonAvatar.vue";
import { biuras } from "../data/bendruomene.ts";

</script>

<section class="lg:px-2 px-1.5 isolate mb-8">
  <div class="max-w-5xl mx-auto p-4 relative">
    <figure class="flex flex-col md:flex-row">
      <figcaption class="leading-6 my-8 px-6 text-left md:w-1/2 order-2 md:order-1 flex flex-col">
          <p class="text-md font-medium italic mb-4">Prabėgus dar vieniems VU SA metams džiaugiuosi Organizacijos vieningumu siekiant bendrų tikslų. Kelti klausimai, įgyvendinti tikslai ir pasiektas rezultatas yra kiekvieno ir kiekvienos iš mūsų nuopelnas. Tik dirbdami kartu padaliniuose, inciatyvose ir bendradarbiaudami galime pasiekti pokyčio Vilniaus universiteto studentams ir studentėms. Ačiū Organizacijai už metus, kuriuose drąsiai ir kartu tarėme „Vieningai už studentų (-čių) ateitį!</p>
        <PersonAvatar :src="biuras[0].avatar" size="small">
          <p class="text-sm font-bold">Lijana Savickienė</p>
          <p class="opacity-80 text-sm">VU SA prezidentė</p>
        </PersonAvatar>
      </figcaption>
      <video playsinline autoplay controls muted loop class="md:w-1/2 mx-auto order-1 md:order-2 z-20 shadow-lg object-cover aspect-video">
        <source src="/video/Lijanos_kalba.mp4" type="video/mp4">
      </video>
    </figure>
    <svg class="absolute w-32 h-32 text-[#bd28344a] dark:text-zinc-300/20 left-0 md:-left-8 -top-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M7 4v16l13 -8z"></path>
</svg>
  </div>
</section>

<section class="lg:px-2 px-1.5 isolate my-12">
  <div class="max-w-6xl mx-auto">
    <p class="mx-auto w-fit text-4xl font-bold">VU SA – tai:</p>
    <div class="flex flex-col md:flex-row my-12 mx-auto justify-center gap-8">
      <NumberStatistic :end-number="35">metai Vilniaus Universiteto studentų (-čių atstovavimo)</NumberStatistic>
      <NumberStatistic :end-number="15">VU SA padalinių 3 miestuose</NumberStatistic>
      <NumberStatistic :end-number="21"> VU SA projektų, klubų ir programų </NumberStatistic>
      <NumberStatistic :end-number="1100" > dėl bendro tikslo veikiančių narių</NumberStatistic>
    </div>
  </div>
</section>

<section class="lg:px-2 px-1.5 isolate">
  <div class="max-w-6xl mx-auto">
    <Carousel :transition="700" :autoplay="10000" pause-autoplay-on-hover wrap-around>
      <Slide :index="0">
        <TestimonialElement class="p-4" img-src="/img/sveikinimai/rektorius.jpg" person-name="prof. Rimvydas Petrauskas" person-position="Vilniaus universiteto Rektorius" href="/sveikinimai" button-text="Sveikinimo kalba">
        „Studentų aktyvumo ir įsitraukimo į VU projektus dėka palaikoma dalyvavimo akademiniame gyvenime tradicija ir nauji žmonės įtraukiami į Universiteto aplinką. VU SA kuruoja daugiau nei dvi dešimtis puikių iniciatyvų, tarp kurių ir pagalba jauniems Ukrainos žmonėms, atvykusiems čia saugios aplinkos ir prieglobsčio.
        <br><br>Jūsų balsas girdimas ne tik Universitete, bet ir valdžios įstaigose.“
</TestimonialElement>
</Slide>
<Slide :index="1">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/senato-pirmininke.jpg" person-name="prof. Eglė Lastauskienė" person-position="VU Senato pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
„Tarpdalykinių studijų koncepcija, 2023 startavęs studijų individualizavimas leis studentams lanksčiau rinktis savo kelią ir pasiruošti ateities iššūkiams.<br>Ačiū Jums už šiuos bendro darbo, sėkmingos komunikacijos ir nuoširdžios draugystės metus. Ačiū, kad Jums rūpi. Ačiū, kad skauda. Ačiū, kad parodote mums Alma Mater veidą studentų akimis. Ačiū už pasitikėjimą.“
</TestimonialElement>
</Slide>
<Slide :index="2">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/MP.jpg" person-name="Ingrida Šimonytė" person-position="Lietuvos Respublikos Ministrė Pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
„While congratulating you and reiterating the importance of the University for the European tradition, I would like to stress that this also obliges you to take responsibility for ensuring that critical thinking, the spirit of respectful dialogue, and the authority of the law are strengthened and that all the challenges are successfully overcome.“
</TestimonialElement>
</Slide>
<Slide :index="3">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/speakerofseimas.jpg" person-name="Viktorija Čmilytė-Nielsen" person-position="Lietuvos Respublikos Seimo Pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
„Augdamas VU beveik penkis šimtus metų brandino laisvas asmenybes, tikrus profesionalus ir aktyvius piliečius. Geriausias to pavyzdys – Studentų atstovybės veikla. Jūsų užmojai, idėjos ir veiklos rezultatai įrodo, jog esate brandūs žmonės, pasiruošę įgyvendinti mokslo, visuomenės, valstybės ir pasaulio pokyčius.“
</TestimonialElement>
</Slide>
<Slide :index="4">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/zukauskas.jpg" person-name="prof. Artūras Žukauskas" person-position="LR Seimo Švietimo ir mokslo komiteto pirmininkas" href="/sveikinimai" button-text="Sveikinimo kalba">
„Linkiu drąsiai ir sėkmingai kurti visuomenei reikšmingas socialines inovacijas, taikydami ir integruodami modernias technologijas socialinių mokslų studijose, moksliniuose tyrimuose ir praktinėse veiklose. Siekite tobulėjimo ir saviraiškos!“
</TestimonialElement>
</Slide>
<Slide :index="5">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/radzeviciene.jpg" person-name="dr. Eglė Radzevičienė" person-position="Vilniaus universiteto Tarybos pirmininkė" href="/sveikinimai" button-text="Sveikinimo kalba">
„Man visuomet džiugu matyti didžiulį VUSA darbą ir indėlį formuojant naują mūsų Universiteto viziją, pasiūlant naują požiūrį akademinei bendruomenei, skatinant transformaciją. Visos VU Tarybos vardu linkiu ir toliau kurti savo universitetą.“
</TestimonialElement>
</Slide>
<Slide :index="6">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/benetis.jpg" person-name="Rimantas Benetis" person-position="Lietuvos universitetų rektorių konferencijos prezidentas" href="/sveikinimai" button-text="Sveikinimo kalba">
„Studentiją matome ir vertiname kaip mūsų šalies ateitį, kuriai bus perduota atsakomybė už ją. Universitetai nėra vien ta vieta, kur žinios ir patirtis teka viena kryptimi. Tai vieta, kur ir vyresnė dėstytojų, mokytojų karta mokosi iš studentų. “
</TestimonialElement>
</Slide>
<Slide :index="7">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/R.Cimmperman.jpg" person-name="Reda Cimmperman" person-position="Akademinės etikos ir procedūrų kontrolierė" href="/sveikinimai" button-text="Sveikinimo kalba">
„Nors šiandieniniame pasaulyje gausu iššūkių, Jūs, kupini energijos ir naujų idėjų, tvirtu žingsniu žengiate pirmyn. Žavi Jūsų nuveikti darbai ir siekiai! Jūs darote didelį įdirbį ne tik savo Universiteto, bet ir nacionaliniu bei tarptautiniu lygmenimis. Puoselėjate aplinką, kad joje visiems būtų gera.“
</TestimonialElement>
</Slide>
<Slide :index="8">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/serpatauskas.jpg" person-name="Almantas Šerpatauskas" person-position="Studijų kokybės ir vertinimo centro direktorius" href="/sveikinimai" button-text="Sveikinimo kalba">
„Džiaugiuosi Vilniaus universiteto studentų ilgalaikiu bendradarbiavimu su Studijų kokybės vertinimo centru įsitraukiant į bendras aktualias veiklas ir prisidedant prie aukštojo mokslo kokybės gerinimo. Vertiname Jūsų įžvalgumą, geranoriškumą ir konstruktyvumą dalyvaujant studijų kokybės vertinimo veiklose, darbo grupėse sprendžiant aktualius klausimus ir dalinantis patirtimi.“
</TestimonialElement>
</Slide>
<Slide :index="9">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/mitkus.png" person-name="Vidmantas Mitkus" person-position="Vilniaus miesto savivaldybės administracijos Jaunimo reikalų ir neformalaus užimtumo skyriaus vedėjas" href="/sveikinimai" button-text="Sveikinimo kalba">
„Džiaugiuosi Vilniaus universiteto studentų ilgalaikiu bendradarbiavimu su Studijų kokybės vertinimo centru įsitraukiant į bendras aktualias veiklas ir prisidedant prie aukštojo mokslo kokybės gerinimo. Vertiname Jūsų įžvalgumą, geranoriškumą ir konstruktyvumą dalyvaujant studijų kokybės vertinimo veiklose, darbo grupėse sprendžiant aktualius klausimus ir dalinantis patirtimi.“
</TestimonialElement>
</Slide>
<Slide :index="10">
<TestimonialElement class="p-4" img-src="/img/sveikinimai/jim.png" person-name="Jim Dickinson" person-position="Wonkhe SUs atstovas" href="/sveikinimai" button-text="Sveikinimo kalba">
„Your progress on individual studies is inspirational in a context of rigid subject specialism in the UK - and your work on both scholarships and the adjustments that disabled students need to succeed is something that many students’ unions in the UK have been learning from. Your national work on the introduction of paid internships in Lithuania has sparked many initiatives in the UK on securing something similar.“
</TestimonialElement>
</Slide>
<template #addons>
<Navigation />
<Pagination />
</template>
</Carousel>

  </div>
</section>

<section class="lg:px-2 px-4 isolate mt-16">
    <p class="mx-auto w-fit text-4xl font-bold my-8">Metų <span class="italic">pasidžiaugimai</span></p>
  <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">
    <ElementWithBg class="h-[36rem]" img-src="/img/renginiai/biblioteka/FC0BE34F-EA5F-43D7-A5C4-4BDB81CFD4D1.jpg" :color-classes="['bg-[rgba(60,12,6,0.95)] dark:bg-zinc-900/90']">
      <template #title>Doktorantų (-čių) poreikių atliepimas</template>
      <p class="mb-4">Atsižvelgdama į jau kelis metus doktorantų (-čių) išreiškiamą norą siekti pokyčio doktorantų (-čių) ir vadovų (-ių) santykyje, poreikį platesniam integracijos procesui ir matymą, kad Universitete nėra skiriama pakankamai dėmesio III pakopos studentų (-čių) bendruomenei, VU SA aktyviai veikė siekdama spręsti šiuos ir kitus klausimus. </p>
      <p class="mb-4">Džiaugiamės, kad ataskaitiniu laikotarpiu buvo įsitraukta į Vilniaus universiteto III pakopos integracijos proceso organizavimą bei teikti pasiūlymai jo tobulinimui. Universitete įvyko pirmieji doktorantų (-čių) vadovų (-ių) mokymai, pritraukę kelias dešimtis akademinių darbuotojų, kurių metu pristatytos daugiamečių pokalbių su doktorantais (-ėmis) išvados, aptarti pasiūlymai, kaip valdyti rizikas vadovaujant III pakopos studentams (-ėms), refleksijos, darbo susitarimai bei atviros aplinkos doktoranto (-ės) tobulėjimui kūrimas. Įvertindami bendruomenės būrimo svarbą parengėme doktorantų (-čių) mentorystės sistemą, kuri, plėtojama ateityje, apims visus akademinius Vilniaus universiteto padalinius. </p>
    </ElementWithBg>
    <ElementWithBg class="h-[36rem]" img-src="/img/renginiai/tvarumo-festivalis/_DSC0255.jpg" :color-classes="['bg-[rgba(60,45,17,0.98)] dark:bg-zinc-900/90']">
      <template #title>Studentų (-čių) skatinimas kurti savo iniciatyvas</template>
      <p class="mb-4">„Savarankiškas studento (-ės) tobulėjimas“ – tai, ties kuo Organizacija dirba jau kelis metus. Džiugiu, kad Universitete ir toliau aktyviai kuriasi naujos studentiškos iniciatyvos – meno klubai, komitetai, reaguojantys į Lietuvos Respublikos padėtį ir nacionaliniu mastu svarstomus klausimus, studentų (-čių) mokslinės inciatyvos, jaunų žmonių bendruomenės grupės, kuriose augti ir prisidėti prie kuriamo pokyčio gali kiekvienas (-a) Vilniaus universiteto studentas (-ė).</p>
      <p class="mb-4">Plėtojama VU SA paramos sistema iniciatyvų kūrimuisi ir Universiteto pagalba ugdant iniciatyvius studentus, siekiant infrastruktūrinių pokyčių atsispindi idėjose, planuose ir rezultatuose, kuriais šiandien galime didžiuotis. </p>
    </ElementWithBg>
    <ElementWithBg class="h-[36rem]" img-src="/img/renginiai/gimtadienis/Gabija_Matkutė_VUSA_(95).jpg" :color-classes="['bg-[rgba(38,25,17,0.95)] dark:bg-zinc-400/80']">
      <template #title>Tarptautinės patirtys</template>
      <p class="mb-4">Siekdami visapusės VU SA narių galimybių plėtros šiemet užmezgėme ryšį su keliomis tarptautinėmis studentus atstovaujančiomis organizacijomis – Europos studentų sąjunga (European Student Union), Pasaulio studentų forumu (Global Student Forum) ir Wonkhe studentų atstovybių tinklu (Wonkhe SU's). </p>
      <p class="mb-4">Bendri tikslai, duomenų bazės, dokumentai ir patirtys – tai, kuo gali remtis kiekvienas (-a) Organizacijos narys (-ė), siekdamas (-a) atstovavimo žinių gylio, tarptautinių patirčių ir požiūrio plėtros. Bendradarbiaudami sukūrėme sutarimus, kurie leidžia ir leis Organizacijai augti už nacionalinio masto ribų, įsitraukiant į tarptautines darbo grupes, kartu kuriant projektus ir atstovaujant. </p>
    </ElementWithBg>
    <ElementWithBg class="h-[36rem]" img-src="/img/renginiai/gimtadienis/Gabija_Matkutė_VUSA_(193).jpg" :color-classes="['bg-[rgba(24,39,17,0.95)] dark:bg-neutral-900/90']">
      <template #title>Individualios studijos ir akademinio konsultavimo kokybė </template>
      <p class="mb-4">Parengta akademinio konsultavimo schema individualiųjų studijų klausimais, suburtas akademinių darbuotojų mentorių tinklas, susitarimai dėl individualiųjų studijų konsultavimo proceso, aktyvus pirmo kurso studentų (-čių) pažindinimas siekiant, kad kiekvienas ir kiekviena galėtų kokybiškai įsitraukti į individualiųjų studijų procesą. </p>
      <p class="mb-4">Padalinių darbas, siekiant kurti kokybišką studijų aplinką ir bendradarbiavimas su Universitetu leidžia tikėti, kad šiemet pradėtas individualiųjų studijų procesas bus įgalintas be didesnių trikdžių. Kartu siekdami tobulėjimo užtikriname, kad vienas pagrindinių individualiųjų studijų siekinių – įgalinti studentą (-ę) tobulėti įvaldžius platų žinių spektrą – taptų realus.</p>
    </ElementWithBg>
  </div>
</section>
