<script lang="ts">
	import Highlight from 'svelte-highlight';
	import cpp from 'svelte-highlight/languages/cpp';
	import github from 'svelte-highlight/styles/github';
	import Clipboard from 'svelte-clipboard';
	import Handlebars from 'handlebars';
	import { studenteStore, quesitiStore, generatoStore } from '$lib/state';

	const codeTemplate = `/**
  * Compito di: {{studente}}
  */
#include <iostream>
using namespace std;

{{#each esercizi}}
// {{{commento}}}
{{{prototipo}}}
{
{{#if restituzionePredefinita}}
    {{{restituzionePredefinita}}}
{{/if}}
}
{{/each}}

int main() {
    // Scrivi qui i tuoi test!

    return 0;
}`;

	let renderTemplate = Handlebars.compile(codeTemplate);
	let esercizi = [];
	let code = renderTemplate({ studente: $studenteStore, esercizi: $quesitiStore });
</script>

<svelte:head>
	{@html github}
</svelte:head>

{#if $generatoStore}
	<Highlight language={cpp} {code} />
	<Clipboard
		text={code}
		let:copy
		on:copy={() => {
			console.log('Has Copied');
		}}
	>
		<button on:click={copy}>Copia</button>
	</Clipboard>
{:else}
	<h2>Devi generare il compito!</h2>
{/if}
