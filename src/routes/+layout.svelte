<script lang="ts">
    import "../app.css";

    // Navbar
    const tabs: string[] = ["About", "Demo", "Discussion", "References"];
    let selectedTab: string = tabs[0];
</script>
  
<div class="bg-dark-300 text-white font-body min-h-screen min-w-screen">
  <nav class="py-4 flex justify-center w-full fixed top-0 left-0 z-50 drop-shadow-lg">
    <ul class="bg-dark-200 flex w-fit justify-center px-2 py-4 gap-4 rounded drop-shadow-lg">
      {#each tabs as tab}
        <li>
          <!-- Handle the "About" tab separately by routing it to "/" -->
          <a href={tab === "About" ? "/" : `/${tab.toLowerCase()}`} 
             class={`px-6 py-2 rounded border border-light-100 ${selectedTab === tab ? 'bg-light-100 text-black' : ''} hover:bg-white hover:text-black hover:drop-shadow-glow transition duration-300`} 
             on:click={() => (selectedTab = tab)}>
            {tab}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <slot></slot>
</div>