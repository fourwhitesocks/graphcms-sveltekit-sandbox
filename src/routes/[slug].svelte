<!--First, we tell Svelte that we need this JS to run first hand when we call the route, therefore the context="module" part. Then, we create an async function load which gets the page from our requests - this holds the url params which we assign to a constant in the next line and use it to fetch the data from our API.

Once we've awaited the result we need to transform the resulting promise to json with .json() and return it as props for our Svelte component which then shows the post name in its headline. https://dev.to/sschuchlenz/how-the-page-load-function-works-in-svelte-sveltekit-328h -->
<script context="module">
  export async function load({ params, fetch }) {
    const { slug } = params
    //res is response and it will await the response and then return the props which are the page
    const res = await fetch(`/pages/${slug}.json`)
    if (res.ok) {
      const { page } = await res.json()
      return {
        props: { page },
      }
    }
  }
</script>

<script>
  export let page
</script>

<svelte:head>
  <title>Amy Blog</title>
</svelte:head>

<h1 class="text-xl font-semibold mb-5">{page.title}</h1>

<article class="prose">
  {@html page.content.html}
</article>
