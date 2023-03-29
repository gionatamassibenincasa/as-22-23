<script lang="ts">
	import Tab, { Icon, Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import IconButton from '@smui/icon-button';
	import List, { Item, Text, PrimaryText, SecondaryText, Separator } from '@smui/list';
	import Select, { Option } from '@smui/select';
	import Button from '@smui/button';
	
	import Highlight from 'svelte-highlight';
	import cpp from 'svelte-highlight/languages/cpp';
	import github from 'svelte-highlight/styles/github';
	
	import Clipboard from 'svelte-clipboard';
	
	import Handlebars from 'handlebars';

	import hljs from 'highlight.js/lib/core';
	import cppLang from 'highlight.js/lib/languages/cpp';
	hljs.registerLanguage('cpp', cppLang);

	import { type Studente, elencoStudenti } from '$lib/studente';
	import { type Esercizio, elencoEsercizi, generaElencoDomande } from '$lib/esercizio';
	import { studenteStore, quesitiStore, generatoStore } from '$lib/state';

	type TabEntry = {
		k: number;
		icon: string;
		label: string;
	};
	const key = (tab: TabEntry) => tab.k;

	let tabs: TabEntry[] = [
		{
			k: 1,
			icon: 'info',
			label: 'Istruzioni'
		},
		{
			k: 2,
			icon: 'assignment',
			label: 'Compito'
		},
		{
			k: 3,
			icon: 'code',
			label: 'Codice'
		}
	];
	let active = tabs[0];

	let studente: string = '';
	studenteStore.subscribe((s) => (studente = s));

	export let eserciziCasuali: Array<Esercizio> = [];
	quesitiStore.subscribe((qs) => (eserciziCasuali = qs));

	export let compitoGenerato: boolean = false;
	generatoStore.subscribe((s) => (compitoGenerato = s));

	function generaCompito() {
		studenteStore.set(studente);
		if (!compitoGenerato) eserciziCasuali = generaElencoDomande(10);
		quesitiStore.set(eserciziCasuali);
		compitoGenerato = true;
		generatoStore.set(true);
	}

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
	export let code = '';
	$: code = renderTemplate({
		studente: $studenteStore,
		esercizi: eserciziCasuali
	});
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div>
	<TabBar {tabs} let:tab {key} bind:active>
		<Tab {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition="fade">
			<Icon class="material-icons">{tab.icon}</Icon>
			<Label>{tab.label}</Label>
		</Tab>
	</TabBar>

	{#if active.k == 1}
		<h2>Istruzioni</h2>

		<ol>
			<li>
				In una nuova scheda, apri un nuovo progetto su <a href="https://replit.com" target="_blank"
					>Replit.com</a
				>
			</li>
			<li>Effettua il login, se richiesto</li>
			<li>Crea un nuovo REPL (bottone + Create new Repl)</li>
			<li>
				Alla voce <tt>Template</tt> scegli <tt>C++</tt> e a quella <tt>title</tt> scrivi il tuo cognome
				suguito da - e dalla data di oggi nel formato ISO
			</li>
			<li>
				In questa scheda del browser, vai alla scheda <IconButton class="material-icons"
					>assignment</IconButton
				> Compito, seleziona il tuo nome e clicca sul bottone
				<tt>Genera compito</tt>
			</li>
			<li>
				Vai alla scheda <IconButton class="material-icons">code</IconButton> Codice, spostati in fondo
				e clicca sul bottone
				<tt>Copia</tt>
			</li>
			<li>
				Torna su Replit, apri <tt>main.cpp</tt> se non aperto, e sostituisci il codice sorgente con quello
				presente negli appunti
			</li>
			<li>Scrivi le funzioni richieste dal compito</li>
			<li>Al termine, scarica <tt>main.cpp</tt> e consegnalo come allegato su Classroom</li>
			<li>Sempre su Classroom, aggiungi il link al tuo Repl</li>
		</ol>

		<p>Buon lavoro!</p>
	{:else if active.k == 2}
		<h2>Genera</h2>

		<div class="columns margins">
			<div>
				<Label>Studente:</Label>
				<Select
					id="studente"
					name="studente"
					bind:value={studente}
					disabled={compitoGenerato}
					variant="outlined"
				>
					{#each elencoStudenti as s}
						<Option value={s.cognome + '\t' + s.nome}>{s.cognome + ' ' + s.nome}</Option>
					{/each}
				</Select>
				<Button
					variant="raised"
					on:click={generaCompito}
					disabled={compitoGenerato || studente == ''}>Genera compito</Button
				>
			</div>
		</div>

		<div>
			<List twoLine>
				{#each eserciziCasuali as e, i}
					<Item>
						<Text>
							<PrimaryText
								>{i + 1} &mdash; {@html hljs.highlight(e.prototipo, { language: 'cpp' })
									.value}</PrimaryText
							>
							<SecondaryText>{@html e.testo}</SecondaryText>
						</Text>
					</Item>
					<Separator />
				{/each}
			</List>
		</div>
	{:else}
		<h2>Codice scheletro</h2>

		{#if $generatoStore}
			<Highlight language={cpp} {code} />
			<Clipboard
				text={code}
				let:copy
				on:copy={() => {
					console.log('Codice copiato!');
				}}
			>
				<Button variant="raised" on:click={copy}>Copia</Button>
			</Clipboard>
		{:else}
			<h2>Devi generare il compito!</h2>
		{/if}
	{/if}
</div>
