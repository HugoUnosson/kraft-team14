<script lang="ts">
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    // Components
    import ArrowDown from "../svg/ArrowDown.svelte";

    // Sidebar
    function scrollTo(event: MouseEvent) {
        event.preventDefault(); // Prevent default link behavior
        const target = event.currentTarget as HTMLAnchorElement; 
        const targetId = target.getAttribute('href')?.substring(1); // e.g. section1
        
        if (targetId) { 
            if (targetId == "section3") {
                
            }

            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Navbar
    const tabs: string[] = ["About", "Demo", "References"];
    let selectedTab: string = tabs[0];

    // Scroll Animation
    let scrollY: number;
    $: console.log(scrollY)

    let yOffset: number;
    onMount(() => {
        yOffset = window.innerHeight - 695; // Offset based on screen height. 695 is Hugos screen height.
        console.log(yOffset);
    });

</script>

<!-- Scroll Animation -->
<svelte:window bind:scrollY={scrollY}/>

<div class="bg-dark-300 text-white font-body min-h-screen min-w-screen">
    <nav class="flex items-center fixed top-1/2 left-4 -translate-y-1/2 z-51">
        <ul class="flex flex-col gap-2">
          <li><a href="#section1" on:click={scrollTo}>Our Vision</a></li>
          <li><a href="#section2" on:click={scrollTo}>The Team</a></li>
          <li><a href="#section3" on:click={scrollTo}>About the Project</a></li>
        </ul>
    </nav>

    <div class="max-w-4xl mx-auto">
        <nav class="py-4 flex justify-center w-full fixed top-0 left-0 z-50 drop-shadow-lg">
            <ul class="bg-dark-200 flex w-fit justify-center px-2 py-4 gap-4 rounded drop-shadow-lg">
                {#each tabs as tab}
                    <li>
                        <a href="/{tab.toLowerCase()}" class={`px-6 py-2 rounded border border-light-100 ${selectedTab === tab ? 'bg-light-100 text-black' : ''} hover:bg-white hover:text-black hover:drop-shadow-glow transition duration-300`} 
                        on:click={() => (selectedTab = tab)}>
                            {tab}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
        
        <main class="flex flex-col items-center text-center">
            <h1 class="text-10xl mt-32 font-title tracking-widest font-bold">KRAFT</h1>
            <h2 class="text-dark-400 text-2xl">We're America's Next Kitchens (dsvdv)</h2>
            <div class="flex mt-32 gap-1">
                <p class="text-dark-400">Scroll to explore</p>
                <ArrowDown/>
            </div>

            <!-- The Vision -->
            {#if scrollY >= 240 - yOffset}
                <h3 id="section1" class="mt-64 text-4xl font-title" transition:fly={{ y:20, delay:0}}>Our Vision</h3>
            {:else}
                <div id="section1" class="mt-64 py-32"></div>
            {/if}

            {#if scrollY >= 310 - yOffset}
                <p class="mt-16 text-xl" transition:fly={{ y:20, delay:0}}>Our vision is to simplify the process of creating concept images, using artificial intelligence. With our application we will give our users a product that talks to their aesthetic senses and helps them design a kitchen that they can resonate with. </p>
            {/if}

            <!-- The Team -->
            {#if scrollY >= 660 - yOffset}
                <h3 id="section2" class="mt-64 text-4xl font-title" transition:fly={{ y:20, delay:0}}>The Team</h3>
            {:else}
                <div id="section2" class="mt-64 py-[1160px]"></div>
            {/if}

            <div class="grid grid-cols-2 gap-8 items-start mt-16">
                <!-- Left Column -->
                <div class="flex flex-col gap-8">
                    {#if scrollY >= 860 - yOffset}
                        <div class="flex flex-col bg-light-100 gap-2 pb-4 rounded" transition:fly={{ y:20, delay:0}}>
                            <img src="\ludwig.png" alt="team meber 1" class="m-4 drop-shadow-xl rounded">
                            <p class="text-dark-300 font-bold">Ludwig Alexandersson</p>
                            <p class="text-dark-300">+46 73 441 1218</p>
                            <p class="text-dark-300">ludwigal@chalmers.se</p>
                        </div>
                    {/if}
                    {#if scrollY >= 1435 - yOffset}
                        <div class="flex flex-col bg-light-100 gap-2 pb-4 rounded" transition:fly={{ y:20, delay:0}}>
                            <img src="\herman.png" alt="team meber 1" class="m-4 drop-shadow-xl rounded">
                            <p class="text-dark-300 font-bold">Herman Forsberg</p>
                            <p class="text-dark-300">+46 70 750 0980</p>
                            <p class="text-dark-300">hermanfo@chalmers.se</p>
                        </div>
                    {/if}
                    {#if scrollY >= 2010 - yOffset}
                        <div class="flex flex-col bg-light-100 gap-2 pb-4 rounded" transition:fly={{ y:20, delay:0}}>
                            <img src="\ludwig.png" alt="team meber 1" class="m-4 drop-shadow-xl rounded">
                            <p class="text-dark-300 font-bold">Aron Lundh</p>
                            <p class="text-dark-300">+46 73 814 4080</p>
                            <p class="text-dark-300">aronlu@chalmers.se</p>
                        </div>
                    {/if}
                </div>
              
                <!-- Right Column -->
                <div class="flex flex-col gap-8 mt-64"> <!-- Adjust `mt-8` to lower the column -->
                    {#if scrollY >= 1110 - yOffset}
                        <div class="flex flex-col bg-light-100 gap-2 pb-4 rounded" transition:fly={{ y:20, delay:0}}>
                            <img src="\ludwig.png" alt="team meber 1" class="m-4 drop-shadow-xl rounded">
                            <p class="text-dark-300 font-bold">Oskar Meyer</p>
                            <p class="text-dark-300">+46 70 383 7424</p> 
                            <p class="text-dark-300">ludwigal@chalmers.se</p>
                        </div>
                    {/if}
                    {#if scrollY >= 1685 - yOffset}
                        <div class="flex flex-col bg-light-100 gap-2 pb-4 rounded" transition:fly={{ y:20, delay:0}}>
                            <img src="\ludwig.png" alt="team meber 1" class="m-4 drop-shadow-xl rounded">
                            <p class="text-dark-300 font-bold">Hugo Unosson</p>
                            <p class="text-dark-300">+46 70 828 5135</p>
                            <p class="text-dark-300">hugou@chalmers.se</p>
                        </div>
                    {/if}
                </div>
            </div>

            <!-- About the Course -->
            {#if scrollY >= 2770 - yOffset}
                <h3 id="section3" class="mt-64 text-4xl font-title" transition:fly={{ y:20, delay:0}}>About the Project</h3>
            {:else}
                <div id="section3" class="mt-64 py-64"></div>
            {/if}
            {#if scrollY >= 2860 - yOffset}
                <p class="mt-16 text-xl" transition:fly={{ y:20, delay:0}}>
                    We are studiyng software engineering at Chalmers. At the moment, we are participating a course in
                    <a class="underline" href="https://www.chalmers.se/utbildning/dina-studier/hitta-kurs-och-programplaner/kursplaner/TEK830/?acYear=2024%2F2025">
                        Digitalization and AI in practice - TEK830</a>.
                     <br> <br>The course is taught by Professor Robin Teigland, where we are undertaking a capstone project in collaboration with IKEA. 
                    Our team is tasked with developing a software solution for IKEA, 
                    focusing on leveraging advanced technologies such as AI-driven image generation and 
                    regional data insights to create highly relevant and market-specific images. 
                </p>
            {/if}
        </main>

        <footer class="pt-48 pb-16 text-center">
            <div class="flex justify-center gap-16 items-center max-w-full mx-auto overflow-hidden">
                <img src="/Chalmers_Logo.png" alt="Chalmers Logo" class="w-1/3 max-w-xs h-auto object-contain">
                <img src="/IKEA-Logo.png" alt="IKEA Logo" class="w-1/3 max-w-xs h-auto object-contain">
            </div>
        </footer>
    </div>
</div>
