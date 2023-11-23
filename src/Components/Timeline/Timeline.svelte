<script>
  import Auteur from "../Auteur/Auteur.svelte";
  import Hero from "../Hero/Hero.svelte";
  import Scroller from "@sveltejs/svelte-scroller";
  import { fade } from "svelte/transition";
  import Box from "../Box/Box.svelte";
  import Image from "../Image/Image.svelte";
  import Video from "../Video/Video.svelte";
  import TimeAndLocation from "../TimeAndLocation/TimeAndLocation.svelte";
  import Layout from "../Layout/Layout.svelte";

  let count;
  let index;
  let offset;
  let progress;
  let top = 0;
  let threshold = 0.08;
  let bottom = 0;
</script>

<div class="scrollerDiv">
  <Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
    <div slot="foreground">
      <section>
        <h2 class:fixed={index + 1 == 1}>Voor de aanval</h2>
        <div>
          <TimeAndLocation iconTime time="12.21u" location="Dansaertstraat" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Image url="https://markup.standaard.be/extra/assets/extra/dslive/anti/2023/reconstructie-aanslag-bxl/assets/bxl-1.png" width="maxi" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section>
        <h2 class:fixed={index + 1 == 2}>Start van de aanval</h2>
        <div>
          <TimeAndLocation iconTime time="12.21u" location="Dansaertstraat" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Video url="https://markup.standaard.be/extra/assets/extra/dslive/anti/2023/noodweer/assets/vid/noorwegen.mp4?1" width="maxi" />
          <Video url="https://markup.standaard.be/extra/assets/extra/dslive/anti/2023/noodweer/assets/vid/canada-brand.mp4?1" width="maxi" />
        </div>
      </section>
      <section>
        <h2 class:fixed={index + 1 == 3}>30 minuten na de aanval</h2>
        <div>
          <TimeAndLocation iconTime time="12.21u" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Box width="normal">
            <blockquote class="twitter-tweet" data-theme="dark">
              <p lang="fr" dir="ltr">
                LIVE. Persconferentie naar aanleiding van Nationale Veiligheidsraad - Conférence de presse à la suite du Conseil national de sécurité<br /> <a href="https://t.co/HRKJqxzCIw">https://t.co/HRKJqxzCIw</a>
              </p>
              &mdash; Alexander De Croo 🇧🇪🇪🇺 (@alexanderdecroo)<a href="https://twitter.com/alexanderdecroo/status/1714297145170288864?ref_src=twsrc%5Etfw">October 17, 2023</a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </Box>
        </div>
      </section>
      <section>
        <h2 class:fixed={index + 1 == 4}>1 dag na de aanval</h2>
        <div>
          <TimeAndLocation time="12.21u" location="Ieperlaan richting Handelskaai" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Box width="450px" widthMobile="60%">
            <Image url="https://markup.standaard.be/extra/assets/extra/dslive/anti/2023/reconstructie-aanslag-bxl/assets/bxl-2.png" width="maxi" />
          </Box>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <hr style="margin-top: 3em; margin-bottom: 3em; opacity:0.3" />
          <TimeAndLocation iconTime time="12.21u" />
          <Image url="https://markup.standaard.be/extra/assets/extra/dslive/anti/2023/reconstructie-aanslag-bxl/assets/bxl-9.png" width="normal" />
          <hr style="margin-top: 3em; margin-bottom: 3em; opacity:0.3" />
          <TimeAndLocation time="17.21u" location="Sanliurfa" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section>
        <h2 class:fixed={index + 1 == 5}>3 dagen na de aanval</h2>
        <div>
          <TimeAndLocation iconLocation={true} location="Sanliurfa" />
          <Layout width="normal" flex={false} caption="Appartementsgebouw stort neer in Sanliurfa, een stad ten oosten van Gaziantep." credit="De Standaard">
            <Video url="https://markup.standaard.be/extra/assets/extra/dslive/anti/2023/reconstructie-aanslag-bxl/assets/video/VIDEO2.mp4" width="maxi" />
            <Video url="https://markup.standaard.be/extra/assets/extra/dslive/anti/2023/reconstructie-aanslag-bxl/assets/video/VIDEO2.mp4" width="maxi" />
          </Layout>
        </div>
      </section>
      <!-- START AFBLIJVEN -->
      <section id="AFBLIJVEN" />
      <!-- EINDE AFBLIJVEN -->
    </div>
  </Scroller>
</div>

<style>
  .scrollerDiv {
    position: relative;
    margin-top: 3em;
    margin-bottom: 25px;
  }
  .fixed {
    position: sticky;
    top: 2.5rem;
    z-index: 999;
  }

  .fixed:last-child {
    position: relative !important;
  }

  [slot="foreground"] {
    max-width: 600px;
    margin: auto;
  }

  section {
    height: fit-content;
    margin-bottom: 4em;
    color: rgb(0, 0, 0);
    position: relative;
    border-left: 2px solid var(--text-color);
    padding-left: 1.2em;
  }

  section h2 {
    margin: 0;
    max-width: 600px;
    padding: 10px;
    font-size: 1.6em !important;
    margin-bottom: 15px;
    padding-left: 15px;
    background-color: var(--bg-color);
  }

  section div {
    padding: 1em;
    padding-top: 0;
    padding-bottom: 0;
  }
  section div p {
    margin: 0;
    font-size: 20px !important;
    line-height: 30px !important;
  }

  @media only screen and (min-width: 1100px) {
    section h2 {
      margin-bottom: -40px;
      width: 200px;
      transform: translate(-270px, 0px);
      text-align: right;
      background-color: none;
    }
  }
  @media only screen and (max-width: 650px) {
    section {
      margin-left: 3%;
    }
    section h2 {
      margin-bottom: 5px;
      padding-left: 0px;
    }
    section div {
      padding: 0;
      width: 95%;
    }

    .fixed {
      position: sticky;
      top: 2.5rem;
      z-index: 999;
    }
  }
</style>
