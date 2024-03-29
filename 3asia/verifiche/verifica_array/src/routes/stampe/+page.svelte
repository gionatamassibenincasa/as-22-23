<script lang="ts">
	import Highlight from 'svelte-highlight';
	import cpp from 'svelte-highlight/languages/cpp';
	import github from 'svelte-highlight/styles/github';
	//import githubDark from 'svelte-highlight/styles/github-dark';

	import Handlebars from 'handlebars';

	import hljs from 'highlight.js/lib/core';
	import cppLang from 'highlight.js/lib/languages/cpp';
	hljs.registerLanguage('cpp', cppLang);

	import List, { Item, Text, PrimaryText, SecondaryText, Separator } from '@smui/list';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Textfield from '@smui/textfield';
	import Card, { Content } from '@smui/card';

	import { type Studente, elencoStudenti } from '$lib/studente';
	import { type Esercizio, elencoEsercizi, generaElencoDomande } from '$lib/esercizio';
	import type Verifica from '$lib/verifica';

	const codeTemplate = `/* Compito di: {{studente.cognome}} {{studente.nome}} */
#include <iostream>
using namespace std;

{{#each esercizi}}
/* {{{commento}}} */
{{{prototipo}}}
{
{{#if restituzionePredefinita}}
    {{{restituzionePredefinita}}}
{{/if}}
}

{{/each}}
`;

	let renderTemplate = Handlebars.compile(codeTemplate);

	let compiti: Array<Verifica> = [];

	elencoStudenti.forEach((s) => {
		const e = generaElencoDomande(10);
		const c = renderTemplate({ studente: s, esercizi: e });
		compiti = [...compiti, { studente: s, esercizi: e, bozza: c }];
	});
	const numeroStudenti = elencoStudenti.length;
</script>

<svelte:head>
	{@html github}
</svelte:head>
<main>
	<div class="margins">
		{#if numeroStudenti == compiti.length}
			{#each compiti as c, k}
				<div>
					<h2>
						Elaborato di {c.studente.cognome}
						{c.studente.nome} (pos. {k + 1}), 3 A SIA, Firma: <Textfield
							variant="filled"
							style="min-width: 250px;"
						/>
					</h2>

					<p class="bordatoRosso">
						<strong>L'uso dello smartphone è vietato.</strong><br />
						<strong>L'uso del libro, cartaceo o elettronico, è vietato.</strong><br />
						<strong>L'uso degli appunti, cartacei o elettronici, è vietato.</strong><br />
						<strong
							>La copiatura, da compagni o da altre risorse, e l'uso di sistemi elettronici non
							autorizzati comportano l'annullamento del compito con valutazione 2/10 ponderata al
							100 %.</strong
						>
					</p>

					<div>
						<List twoLine>
							{#each c.esercizi as e, i}
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

					<div class="card-display">
						<div class="card-container">
							<Card variant="outlined" padded>
								<Content>
									<DataTable table$aria-label="Griglia di valutazione" style="max-width: 100%;">
										<caption>Griglia di valutazione</caption>
										<Head
											><Row>
												<Cell>Correttezza</Cell>
												<Cell>Completezza</Cell>
												<Cell>Pertinenza</Cell>
												<Cell>Minimalità</Cell>
												<Cell>Intelligibilità</Cell>
												<Cell>Lessico</Cell>
											</Row>
										</Head>
										<Body>
											<Row>
												<Cell>Corretto &mdash; 6</Cell>
												<Cell>Completo &mdash; 6</Cell>
												<Cell>Pertinente &mdash; 2</Cell>
												<Cell>Minimale &mdash; 2</Cell>
												<Cell>Intelligibile &mdash; 2</Cell>
												<Cell>Appropriato &mdash; 2</Cell>
											</Row>
											<Row>
												<Cell>Parzialmente<br />corretto &mdash; 4</Cell>
												<Cell>Quasi<br />completo &mdash; 4</Cell>
												<Cell>Poco<br />pertinente &mdash; 1</Cell>
												<Cell>Poco<br />ridondante &mdash; 1</Cell>
												<Cell>Poco<br />intelligibile &mdash; 1</Cell>
												<Cell>Poco<br />appropriato &mdash; 1</Cell>
											</Row>
											<Row>
												<Cell>Scarsamente<br />corretto &mdash; 2</Cell>
												<Cell>Poco<br />completo &mdash; 2</Cell>
												<Cell>Non pertinente &mdash; 0</Cell>
												<Cell>Ridondante &mdash; 0</Cell>
												<Cell>Non intelligibile &mdash; 0</Cell>
												<Cell>Non appropriato &mdash; 0</Cell>
											</Row>
											<Row>
												<Cell>Non corretto &mdash; 0</Cell>
												<Cell>Incompleto &mdash; 0</Cell>
											</Row>
										</Body>
									</DataTable>
								</Content>
							</Card>
						</div>
					</div>
					<div class="pagebreak" />

					<h2>Codice scheletro</h2>
					<Highlight language={cpp} code={c.bozza} />
					<div class="pagebreak" />
				</div>
			{/each}
		{/if}
	</div>
</main>

<style>
	.bordatoRosso {
		border: 1px solid red;
		font-size: small;
	}
	@media print {
		.pagebreak {
			clear: both;
			page-break-after: always;
		}
	}
</style>
