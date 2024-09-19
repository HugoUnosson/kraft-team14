<script lang="ts">
    const tabs: string[] = ["About", "Demo"];
    let selectedTab: string = tabs[0]
</script>

<div class="bg-slate-950 text-blue-50 min-h-screen">
    <div class="max-w-xl mx-auto">
        <nav class="">
            <ul class="flex pt-12 text-xl justify-evenly">
                {#each tabs as tab}
                    <li>
                        <a href="/{tab.toLowerCase()}" class={`px-6 py-2 rounded-xl border border-slate-500 ${selectedTab === tab ? 'bg-blue-50 text-slate-950 drop-shadow-glow' : ''} hover:bg-blue-50 hover:text-slate-950 transition duration-300`} 
                        on:click={() => (selectedTab = tab)}>
                            {tab}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
        
        <main class="text-center">
            <h1 class="text-10xl pt-24">KRAFT</h1>
            <h2 class="text-slate-500 pt-4">We're America's Next Kitchens (dsvdv)</h2>
            <p class="pt-32">scroll to explore...</p>
        </main>

        <footer class="pt-64 text-center">KRAFT x IKEA</footer>
    </div>
</div>
