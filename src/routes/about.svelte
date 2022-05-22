<script context="module">
	import { browser, dev } from '$app/env'

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	// export const hydrate = true

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	// export const router = browser

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	// export const prerender = true
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div >
  # About Me

  My name is Do Hong Son

  I'm software engineer focusing on the front-end development, currently living in 📍 Hanoi, Vietnam

  I specialize in creating UI components that include advanced logic, beautiful designs, and transitions that can help startups develop quality applications efficiently.

  I'm enthusiastic about self-teaching, exploring and updating the latest trends in the webdev industry and the open-source community.

  I'm looking for a job with friendly and motivated partners to improve my self and the company.

  Good:

  - I am constantly improving my self
  - strong experience and knowledge of frontend framework such as vue and react
  - Experiences work with monorepo for sharing code and interfaces:
      - Github | Gitlab Action (CI/CD)
  - Able to research do resolve complexity problem.
  - Experimental in build Design System wit (from scratch)
  - Experiences in build micro frontend architecture

  Bad:

  - Some time, take a lot of time to find new approach  even current solution work

  ## **What do I do in my free time?**

  - I love to cook (and eat).
  - I like gaming and esports.
  - I worship the Internet and like to watch Youtube channel about technology. **[Check out this boi.](https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw)**
  - I'm listening to any kind of music from pop, vpop, rap, kpop,...
  - I'm also looking for gym.

  ****Some of my Technical Skills****

  ## **My stacks**

  **[React + Typescript + GraphQL + NextJs + Hasura](https://github.com/sondh0127/nextjs-hasura-fullstack)**

  ## **Check my works !**

  **[Send me an email](mailto:sondh017@gmail.com)**

  [https://docs.google.com/spreadsheets/d/14SdVZrv5SS-ej7d-hCSsCVnOp9lYdSD2czgWsV4t3_g/edit?usp=sharing](https://docs.google.com/spreadsheets/d/14SdVZrv5SS-ej7d-hCSsCVnOp9lYdSD2czgWsV4t3_g/edit?usp=sharing)
</div>
