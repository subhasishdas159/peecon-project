<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let hideTextHelper = true
	let input = ""
	let foundItem = {}
	export let rateChart = []

	$: {
		if(!input) {
			validText = false
			invalidText = false
			foundItem = ""
			dispatch('foundItem', {foundItem: foundItem})
		} else {
			validText = true
			invalidText = false

			foundItem = rateChart.find(rateItem => rateItem.gsx$serial.$t === input)
			dispatch('foundItem', {foundItem: foundItem})
		}
	}

	let validText = false
	let invalidText = false
</script>

<div class="row">
  <div class="col s12">
    This is an inline input field:
    <div class="input-field inline">

      <input id="email_inline" type="email" class:valid={validText} class:invalid={invalidText} bind:value={input} on:focus={() => hideTextHelper=false} on:blur={() => {if(!input) hideTextHelper=true}} autocomplete="off">

      <label for="email_inline">Serial</label>

      <span class="helper-text" data-error="wrong" data-success="right" class:hidden={hideTextHelper}>Helper text</span>

    </div>
  </div>
</div>

<style>
	.hidden {
		display: none;
	}
</style>