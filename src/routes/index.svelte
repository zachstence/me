<script lang="ts">
    import BioItem from "$lib/BioItem.svelte";
    import IconLink from "$lib/IconLink.svelte";

    import FaGithub from "svelte-icons/fa/FaGithub.svelte";
    import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
    import IoMdMail from "svelte-icons/io/IoMdMail.svelte";

    import ZencastrIcon from "$lib/icons/Zencastr.icon.svelte";
    import FaServer from "svelte-icons/fa/FaServer.svelte";
    import FaKeyboard from "svelte-icons/fa/FaKeyboard.svelte";
    import IoMdPlanet from "svelte-icons/io/IoMdPlanet.svelte";
</script>

<main class="bg-base-200">
    <div class="card lg:card-side bg-base-100">
        <figure><img src="me.jpg" alt="Me" /></figure>
        
        <div class="card-body">
            <div class="bio">
                <div class="header">
                    <h1>Zach Stence</h1>
                    <span class="text-sm">he/him</span>
                </div>

                <BioItem>
                    <ZencastrIcon slot="icon" />
                    Full-Stack Javascript Engineer at Zencastr
                </BioItem>
                <BioItem>
                    <FaServer slot="icon" />
                    Homelabber
                </BioItem>
                <BioItem>
                    <FaKeyboard slot="icon" />
                    Custom keyboard builder
                </BioItem>
                <BioItem>
                    <IoMdPlanet slot="icon" />
                    Amateur astrophotographer
                </BioItem>
            </div>

            <div class="social">
                <IconLink href="https://github.com/zachstence" label="My GitHub">
                    <span id="github"><FaGithub /></span>
                </IconLink>
                <IconLink href="https://linkedin.com/in/zachary-stence" label="My LinkedIn">
                    <span id="linkedin"><FaLinkedin /></span>
                </IconLink>
                <IconLink href="mailto:zachstence@gmail.com" label="Email me: zachstence@gmail.com">
                    <span id="email"><IoMdMail /></span>
                </IconLink>
            </div>
        </div>
    </div>
</main>

<style lang="postcss">
    main {
        @apply h-full flex justify-center items-center;
    }

    img {
        height: 400px;
        width: 400px;
        object-fit: cover;

        @screen lg {
            & {
                height: 500px;
                object-position: bottom;
            }
        }
    }

    .header {
        @apply flex flex-row items-end mb-6;
        h1 { @apply text-4xl font-bold; }
        span { @apply text-sm font-thin italic ml-2; }
    }

    #github:hover {
        @apply text-github-primary;
    }
    #linkedin:hover {
        @apply text-linkedin-primary;
    }
    #email:hover {
        @apply text-gmail-primary;
    }

    .card-body {
        @apply flex flex-col justify-between;
    }
</style>
