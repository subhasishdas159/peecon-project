<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let hideTextHelper = true
	let input = ""
	let foundItem = {}
	export let rateChart = []
	export let clearInput = false
	let serialInputField
	let foundItemText = ""
	$: {
		if(!input) {
			foundItem = {}
			foundItemText = ""
			dispatch('foundItem', {foundItem: foundItem})
		} else {
			validText = true

			foundItem = rateChart.find(rateItem => rateItem.gsx$serial.$t === input)

			if(!foundItem) {
				validText = false
				foundItemText = "No Item Found"
			} else {
				foundItemText = foundItem.gsx$description1.$t
				dispatch('foundItem', {foundItem: foundItem})
			}

		}
	}

	$: {
		if(clearInput) {
				input = ""
				clearInput = false
			}
	}

	let validText = "undefined"

</script>

<div class="row noprint">
	<div style="color: #999; margin-top: 4rem">Press ctrl + p for print preview after you're done entering the values</div>
  <div class="col s12">
    This is an inline input field:


		    <div class="input-field inline">
		      <input
		      	bind:this={serialInputField}
		      	id="serial_input"
		      	type="text"
		      	class:valid={validText === true}
		      	class:invalid={validText === false}
		      	bind:value={input}
		      	on:focus={() => hideTextHelper=false}
		      	on:blur={() => {if(!input) {hideTextHelper=true; validText = "undefined"}}}
		      	on:keypress={(event) => {if (input && foundItem && event.charCode === 13) dispatch('foundPush')}}
		      	autocomplete="off"
		      >


		      <label for="serial_input">Serial</label>

		      <span class="helper-text" data-error={foundItemText} data-success={foundItemText} class:hidden={hideTextHelper}>Helper text</span>

		    </div>
		    {#if input}
		    	{#if foundItem}
				    <a on:click={() => {dispatch('foundPush'); serialInputField.focus()}} class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons" >add</i></a>
			    {/if}
			  {/if}

	</div>
</div>

<style>
	.hidden {
		display: none;
	}
</style>