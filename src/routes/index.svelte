<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import GetKeys from '$lib/GetKeys.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<GetKeys />
</section>
