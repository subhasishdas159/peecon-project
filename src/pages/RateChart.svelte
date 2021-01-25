<script>
	import {onMount} from 'svelte'
	import {getRates} from '../utils/ratesFetch.js'
	import Spinner from '../comps/spinner'

	let rateChart = []
	let loading = false

	onMount(async () => {
		loading = true
		rateChart = await getRates()
		loading = false
	})

</script>

 <div class="container" style="margin-top: 2rem">
		<table class="highlight">
	    <thead>
	      <tr>
          <th>Serial</th>
          <th>Description1</th>
          <th>Description2</th>
          <th>Unit</th>
          <th>Rate220</th>
          <th>Rate440</th>
	      </tr>
	    </thead>

	    {#if loading}
	    	<Spinner />

	    {:else}
				{#await rateChart}
				{:then rates}

		    <tbody>
		    	{#each rates as rate (rate.gsx$serial.$t)}
			      <tr>
			        <td>{rate.gsx$serial.$t}</td>
			        <td>{rate.gsx$description1.$t}</td>
			        <td>{rate.gsx$description2.$t}</td>
			        <td>{rate.gsx$unit.$t}</td>
			        <td>{rate.gsx$rate220.$t}</td>
			        <td>{rate.gsx$rate440.$t}</td>
			      </tr>
			     {/each}
		    </tbody>

				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			{/if}

 </table>
</div>

<style>
	.loading{
		position: fixed;
		left: 45%;
		top: 50%;
	}
</style>