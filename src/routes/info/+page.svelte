
<script lang="ts">
	import AppBounds from '$lib/components/AppBounds.svelte';
	import { Button } from '$lib/shadcn/ui/button';
	import H1 from "$lib/components/H1.svelte";
	import Dock from "$lib/components/Dock.svelte";
	import Meta from '$lib/components/Meta.svelte';
	
	const links = [
		{ name: 'Typescript', url: 'https://www.typescriptlang.org/' },
		{ name: 'Sveltekit', url: 'https://kit.svelte.dev/' },
		{ name: 'Postgres', url: 'https://www.postgresql.org/' },
		{ name: 'Actix', url: 'https://actix.rs/' },
		{ name: 'Sqlx', url: 'https://github.com/launchbadge/sqlx' },
		{ name: 'Ts-rs', url: 'https://docs.rs/ts-rs/latest/ts_rs/' },
		{ name: 'Tailwind', url: 'https://tailwindcss.com/' },
		{ name: 'Zod', url: 'https://github.com/colinhacks/zod' },
		{ name: 'Shadcn-svelte', url: 'https://www.shadcn-svelte.com/docs/components' },
	];
</script>

<Meta pageTitle="Info"/>

<AppBounds>
	<Dock>
		<H1>This tech stack has been built with:</H1>
		<div class="grid sm:grid-cols-3 gap-4 mb-16">
			{#each links as {url, name}, i}
				<Button class="rounded-xl data-[accented=true]:bg-accent-foreground data-[accented=true]:hover:bg-accent-foreground/80"
						data-accented={i % 2 === 0? 'true' : 'false'}
						href={url}>{name}</Button>
			{/each}
		</div>
		<H1>... And many more!</H1>
	</Dock>
</AppBounds>