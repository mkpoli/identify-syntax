<script lang="ts">
  import { languages, type Lang, type Trait, TRAITS } from "../lib/languages";

  let conditions: Partial<Trait> = Object.fromEntries(
    Object.entries(TRAITS).map(([trait]) => [trait, []])
  );
  let filtered: Lang[]
  $: filtered = [...Object.entries(languages)].filter(([name, traits]) => {
    return Object.entries(conditions).every(([trait, values]) => {
      return values.length === 0 || traits[trait].some((value) => values.includes(value));
    })
  }).map(([name,]) => name)
  $: console.log(conditions);
</script>

<main>
  <div class="languages">
    <h2>Possible languages</h2>
    {#each filtered as lang}
      <div class="chip">{lang}</div>
    {/each}
  </div>
  
  <div class="traits">
    {#each Object.entries(TRAITS) as [trait, values]}
    <fieldset>
      <legend>{trait}</legend>
      {#each values as value}
      <label>
          <input type="checkbox" value={value} bind:group={conditions[trait]}/>
          {value}
        </label>
      {/each}
      </fieldset>
    {/each}
  </div>
</main>


<svelte:head>
  <title>Which Language</title>
</svelte:head>

<style>
  main {
    display: grid;
    grid-template-columns: minmax(10em, 15em) 1fr;
    gap: 1em;

    max-width: 1024px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    main {
      grid-template-columns: 1fr;
    }
  }

  .chip {
    display: inline-block;
    padding: 0.5em 1em;
    margin: 0.5em;
    border-radius: 0.5em;
    background: #eee;
  }

  .languages {
    min-width: 5em;
  }

  .traits {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8em;
    user-select: none;
  }
</style>