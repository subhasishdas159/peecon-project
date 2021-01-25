<script>
  import { onMount } from "svelte";

  export let active;

  let sidenav1;
  onMount(() => {
    M.Sidenav.init(sidenav1);
  });
  $: console.log(active);
</script>

<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper container">
      <a href="#!" class="brand-logo padded">Peecon</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
      <ul class="right hide-on-med-and-down padded">
        <li class:active={active === "challan"}>
          <a href="/challan">Challan</a>
        </li>
        <li class:active={active === "ratechart"}>
          <a href="/ratechart">ratechart</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

<ul class="sidenav" id="mobile-demo" bind:this={sidenav1}>
  <!-- Sidebar header -->
  <div
    style="background-image: url(https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg);"
  >
    <!-- Sidebar brand image -->
    <div>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg"
      />
    </div>
    <!-- Sidebar brand name -->
    <p>Peecon Electricals</p>
  </div>
  <li class:active={active === "challan"}>
    <a href="/challan" class="sidenav-close">Challan</a>
  </li>
  <li class:active={active === "ratechart"}>
    <a href="/ratechart" class="sidenav-close">ratechart</a>
  </li>
</ul>

<style>
  .active {
    background-color: rgba(white, 0.5);
  }
  .padded {
    padding-left: 2rem;
    padding-right: 2rem;
  }
</style>
