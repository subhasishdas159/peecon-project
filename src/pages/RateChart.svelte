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

<div class="container">
		<table class="highlight">
	    <thead>
	      <tr>
          <th>Serial</th>
          <th>Name</th>
          <th>Rate</th>
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
			        <td>{rate.gsx$name.$t}</td>
			        <td>{rate.gsx$rate.$t}</td>
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