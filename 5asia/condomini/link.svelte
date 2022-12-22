<script>
	let name = 'world';
	async function getCondomini() {
		const res = await fetch(`https://api.mockaroo.com/api/3f0b23d0?count=20&key=f3465050`);
		const data = await res.text();

		if (res.ok) {
			return JSON.parse(data);
		} else {
			throw new Error(data);
		}
	}

	let promise = getCondomini();

	function handleClick() {
		promise = getCondomini();
	}
</script>

<h1>Hello {name}!</h1>


<table>
	<thead>
		<tr>
			<th>codiceCondominio</th>
			<th>nCC</th>
			<th>Indirizzo</th>
		</tr>
	</thead>
	<tbody>
		{#await promise}
		<tr>Attesa da dati</tr>
		{:then data}
		{#each data as d}
		<tr>
			<th>{d.codice}</th>
			<td>{d.ncc}</td>
			<td>{d.indirizzo}</td>
		</tr>
		{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</tbody>
</table>