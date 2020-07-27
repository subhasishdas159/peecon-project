<script>
	import {onMount} from 'svelte'
	import {getRates} from '../utils/ratesFetch.js'
	import TextInput from '../comps/textInput'
	import Spinner from '../comps/spinner'
	
	let rateChart = []
	let loading = false

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

	 
	  	{#each rates as rate (rate.gsx$serial.$t)}
	        {rate.gsx$serial.$t}
	        {rate.gsx$name.$t}
	        {rate.gsx$rate.$t}<br>
	     {/each}

		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	{/if}

		<TextInput {rateChart} on:foundItem={(event) => foundItem = event.detail.foundItem}/>
		
		{#if Object.keys(foundItem).length}
			<span>{foundItem.gsx$name.$t}</span>
			<a class="btn-floating btn-small waves-effect waves-light red" on:click={foundPush}><i class="material-icons" >add</i></a>
		{/if}
			
    {#each foundArray as item (item.gsx$serial.$t)}
    	{item.gsx$name.$t}<a class="btn-floating btn-small waves-effect waves-light red" on:click={foundDetele(item)}><i class="material-icons" >delete</i></a>
    {/each}

</div>         

