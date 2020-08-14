<script>
	import numWords from 'num-words'
	import {onMount} from 'svelte'
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let foundArray = []

	let modal1
	let modal1Instance
	let modalBtn
	let modalIndex

	onMount(() => {
		M.Modal.init(modal1)
	})

	let modalItem = {
		gsx$description1: {
			$t: ""
		},
		gsx$description2: {
			$t: ""
		},
		gsx$rate440: {
			$t: ""
		},
		gsx$rate440: {
			$t: ""
		}
	}

	let modalPass = (passedItem, index) => {
		modalIndex = index
		modalItem = passedItem
		modalBtn.click()
	}
	
</script>

<button data-target="modal1" class="btn modal-trigger hidden" bind:this={modalBtn}>Modal</button>

<div id="modal1" class="modal" bind:this={modal1} class:hidden={true}>
  <div class="modal-content">
    <h4>{modalItem.gsx$description1.$t}</h4>
    <p>{modalItem.gsx$description2.$t}</p>    

		

  </div>
  <div class="modal-footer">
		
		<a class="modal-close btn waves-effect waves-light red" on:click={() => dispatch('foundDelete', {foundDelete: modalItem})}><i class="material-icons left">delete</i>Delete</a>

		{#if modalItem.gsx$rate440.$t}
		  
		  <a class="modal-close btn waves-effect waves-light red" on:click={() => foundArray[modalIndex].rateFlip = !foundArray[modalIndex].rateFlip}><i class="material-icons left">flip</i>Flip</a>
		{/if}

  </div>
</div>


<div class="noscreen">
	<h4>Peecon ELectricals</h4>

	<p>45/2 TARKASIDDHANTA LANE, BALLY, HOWRAH-711201</p>
	<p><b>QUOTATION NO. </b></p>
	<p>DATE: </p>

	<p><b>Maintenance Job under Engg. Dept. at Brad Mill from </b></p>

	<p>M/S Berger Paints India Limited, 14 & 15 Swarnamoyee Road, P.O. B. Garden, Dist. Howrah-3</p>

	<p>Dear Sir,</p>
	<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are pleased to submit our labour chargefor necessary jobs done are as follows.</p>
</div>


{#if foundArray.length}
	<table>
	  <thead>
	    <tr>
	      <th>SL. No</th>
	      <th>Description</th>
	      <th>Rate Code</th>
	      <th>QNTY.</th>
	      <th>Unit</th>
	      <th>Rate</th>
	      <th>Amount</th>
	    </tr>
	  </thead>

	  <tbody>
	    
			{#each foundArray as item, index (item.gsx$serial.$t)}
				<tr on:click={() => modalPass(item, index)}>

				  <td class="text-right">{index + 1}</td>
		      <td>{item.gsx$description1.$t} {item.gsx$description2.$t}</td>
		      <td class="text-right">{item.gsx$serial.$t}</td>
		      <td class="text-right">{1}</td>
		      <td>{item.gsx$unit.$t}</td>
		      <td class="text-right">
		      	{#if !item.rateFlip}
		      		{#if item.gsx$rate440.$t}
				      	{item.gsx$rate220.$t} <span class="noprint">(220V)</span>
				      {:else}
				      	{item.gsx$rate220.$t} <span class="noprint"></span>
				      {/if}
		      	{:else}
			      	{item.gsx$rate440.$t} <span class="noprint">(440V)</span>
			      {/if}
		      </td>
		      <td class="text-right">Amount</td>
		      
		      <!-- <td class="noprint">
		      	<a class="btn-floating btn-small waves-effect waves-light red" on:click={() => dispatch('foundDelete', {foundDelete: item})}><i class="material-icons" >delete</i></a>
		      </td>

		      <td class="noprint">
		      	{#if item.gsx$rate440.$t}
			      	<a class="btn-floating btn-small waves-effect waves-light red" on:click={() => item.rateFlip = !item.rateFlip}><i class="material-icons">flip</i></a>
		      	{/if}
		      </td> -->
		    </tr>

			{/each}

	  </tbody>
  	<tfoot class="table-footer">
	    <tr class="table-footer">
	      <td colspan="5" class="table-footer"><b>Total</b></td>
	      <td colspan="2" class="text-right table-footer">45465445200</td>
	    </tr>
  	</tfoot>
	</table>
{/if}

<div class="noscreen">
	<p>Rupees {numWords(12345)} only</p>
	<p class="text-right">Thanking you,</p>
	<p class="text-right">For Peecon Electricals</p>
</div>