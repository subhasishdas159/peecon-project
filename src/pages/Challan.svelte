<script>
	import {onMount} from 'svelte'
	import {getRates} from '../utils/ratesFetch.js'
	import SerialInput from '../comps/serialInput'
	import Spinner from '../comps/spinner'
	import ChallanTable from '../comps/challanTable'

	let rateChart = []
	let loading = false
	let clearInput = false

	onMount(async () => {
		loading = true
		rateChart = await getRates()
		loading = false
	})
	
	let foundArray = []
	let foundItem = {}

	const foundPush = () => {
		if(foundArray.includes(foundItem)) {
			alert("already added")
		} else {
			foundArray = [...foundArray, foundItem]
		}
		clearInput = true
	}

	const foundDetele = (itemToDelete) => {
		foundArray.splice(foundArray.indexOf(itemToDelete), 1)
		foundArray = foundArray
	}
	
</script>

<div class="container">

	{#if loading}
		<Spinner />

	{:else}
		{#await rateChart}
		{:then rates}

	 
	  	<!-- {#each rates as rate (rate.gsx$serial.$t)}
	        {rate.gsx$serial.$t}
	        {rate.gsx$name.$t}
	        {rate.gsx$rate.$t}<br>
	     {/each} -->

		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}

		<SerialInput {rateChart} on:foundPush={foundPush} on:foundItem={(event) => foundItem = event.detail.foundItem} bind:clearInput={clearInput}/>
			
    <ChallanTable {foundArray} on:foundDelete={(event) => foundDetele(event.detail.foundDelete)}/>
	{/if}

</div>         

