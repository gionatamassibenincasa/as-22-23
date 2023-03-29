<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	//import IconButton from '@smui/icon-button';
</script>

<TopAppBar variant="static" color="primary">
	<Row>
		<Section>
			<!--IconButton class="material-icons">menu</IconButton-->
			<Title>Informatica &mdash; 3A SIA &mdash; 2023-03-31</Title>
		</Section>
		<!--Section align="end" toolbar>
			<a href="/compito"
				><IconButton class="material-icons" aria-label="Genera">assignment</IconButton></a
			>
			<a href="/modello"
				><IconButton class="material-icons" aria-label="Modello">code</IconButton></a
			>
			<a href="/"><IconButton class="material-icons">info</IconButton></a>
		</Section-->
	</Row>
</TopAppBar>

<slot />
