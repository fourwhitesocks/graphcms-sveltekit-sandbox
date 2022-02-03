<script context="module">
  //export async function load({ fetch }) {
  //res is response and it will await the response and then return the props which are the posts
  //const res = await fetch('/tags.json')
  /*  if (res.ok) {
      const { tags } = await res.json()
      return {
        props: { tags },
      }
    }
  } */

  export async function load({ fetch }) {
    //res is response and it will await the response and then return the props which are the posts
    const res = await fetch('/tags.json')

    if (res.ok) {
      const { posts } = await res.json()
      return {
        props: { posts },
      }
    }
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Tag Archive</title>
</svelte:head>

<h1 class="text-4xl mb-10 font-extrabold text-red-600">TAGS!</h1>
<h4 class="text-2xl mb-10 font-extrabold">
  Look at the home page module and formulate like that!
</h4>

<h2 class="text-3xl mb-10 font-extrabold text-red-600">GraphQL</h2>

{#each posts as { title, slug }}
  <!-- <h2 class="title">{title}</h2> -->

  <a href="/posts/{slug}" class="underline">{title}</a>
  <!-- <h3>{slug}</h3> -->
{/each}
