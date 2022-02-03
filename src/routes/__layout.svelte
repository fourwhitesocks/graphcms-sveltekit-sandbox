<script context="module">
  export const load = async ({ fetch }) => {
    //res is response and it will await the response and then return the props which are the pages
    const res = await fetch('/pages.json')

    if (res.ok) {
      const { pages } = await res.json()
      return {
        props: { pages },
      }
    }
    // I added below from the docs
    /*
    return {
      status: res.status,
      error: new Error(`Could not load ${pages}`),
    } */
  }
</script>

<script>
  import Nav from '$lib/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'
  // let the fetched 'pages from above be exported to rest of site in below export'

  onMount(async () => {
    themeChange(false)
  })

  export let pages
</script>

<!--think of slot as a wrapper for the project root-->

<Nav {pages} />

<main class="container max-w-xl mx-auto px-4">
  <slot />
</main>
