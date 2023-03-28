<script lang="ts">
	import { type Studente, elencoStudenti } from '$lib/studente';
	import { type Esercizio, elencoEsercizi, generaElencoDomande } from '$lib/esercizio';
	import { studenteStore, quesitiStore, generatoStore } from '$lib/state';

	export const prerender = true;

	let studente: string = '';
	studenteStore.subscribe((s) => (studente = s));

	let eserciziCausali: Array<Esercizio> = [];
	quesitiStore.subscribe((qs) => (eserciziCausali = qs));

	let compitoGenerato: boolean = false;
	generatoStore.subscribe((s) => (compitoGenerato = s));

	function generaCompito() {
		studenteStore.set(studente);
		if (!compitoGenerato) eserciziCausali = generaElencoDomande(10);
		quesitiStore.set(eserciziCausali);
		compitoGenerato = true;
		generatoStore.set(true);
	}
</script>

<h1>Compito di Informatica</h1>
<h2>3A SIA &mdash; 2023-03-31</h2>

<form>
	<label for="studente">
		Studente :
		<select id="studente" name="studente" bind:value={studente} disabled={compitoGenerato}>
			{#each elencoStudenti as s}
				<option value={s.cognome + '\t' + s.nome}>{s.cognome + ' ' + s.nome}</option>
			{/each}
		</select>
	</label>
	<button on:click={generaCompito} disabled={compitoGenerato || studente == ''}
		>Genera compito</button
	>
</form>
<ol>
	{#each eserciziCausali as e}
		<li>{@html e.testo}</li>
	{/each}
</ol>
