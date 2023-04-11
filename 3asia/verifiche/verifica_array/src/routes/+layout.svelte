<script lang="ts">
	import { onMount } from 'svelte';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { temaScuroStore } from '$lib/state';

	let darkTheme: boolean | undefined = undefined;
	let topAppBar: TopAppBarComponentDev;

	$: modeLabel = `switch to ${darkTheme ? 'light' : 'dark'} mode`;

	// This icon represents the mode to which the user can switch.
	$: modeIcon = darkTheme ? 'light_mode' : 'dark_mode';

	onMount(() => {
		darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		console.log('Imposto il tema scuro: ', darkTheme);
		temaScuroStore.set(darkTheme);
	});

	const toggleMode = () => {
		darkTheme = !darkTheme;
		console.log('Imposto il tema scuro: ', darkTheme);
		temaScuroStore.set(darkTheme);
	};
</script>

<svelte:head>
	{#if darkTheme === undefined}
		<!-- SMUI Styles -->
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme}
		<link rel="stylesheet" href="/smui.css" media="print" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<!--IconButton class="material-icons">menu</IconButton-->
			<Title>Informatica &mdash; Compito scritto &mdash; 2023-04-17</Title>
		</Section>
		<Section align="end" toolbar>
			<IconButton
				aria-label={modeLabel}
				class="material-icons"
				on:click={toggleMode}
				title={modeLabel}
			>
				{modeIcon}
			</IconButton>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<slot />
</AutoAdjust>
