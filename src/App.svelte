<script>

	import page from "page";
	import Fallback from './pages/Fallback'
	import Challan from './pages/Challan'
	import RateChart from './pages/RateChart'

	import Nav from './comps/nav.svelte'

	let route = null
	let params = null
	let active = "challan"

	page('/challan', () => {route = Challan; active = "challan"})
	page('/ratechart', () => {route = RateChart; active = "ratechart"})
	page('/*', () => route = Fallback)
	page()
</script>

<Nav {active} />

<svelte:component this={route} {params}/>
