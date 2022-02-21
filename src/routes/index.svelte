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

    document.title = "Zach Stence"
</script>


<svelte:head>
    <meta property="og:title" content="Zach Stence" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/me.jpg" />
    <meta property="og:url" content="https://stence.me" />

    <meta property="og:description" content="Zach Stence's bio and social links" />
</svelte:head>


<main class="bg-base-200">
    <div class="me bg-base-100">
        <figure><img src="me.jpg" alt="Me" /></figure>
        
        <div class="body">
            <div class="header">
                <h1>Zach Stence</h1>
                <span>he/him</span>
            </div>

            <div class="bio">
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

    .me {
        @apply w-full h-full flex flex-col items-center p-6;

        figure {
            @apply mt-6;
            img {
                @apply w-48 h-48 object-cover rounded-full;
                object-position: center 35%;
            }
        }

        .header {
            @apply flex flex-row items-end justify-center mt-6;
            h1 { @apply text-4xl font-bold w-fit leading-9; }
            span { @apply text-sm font-thin italic leading-snug ml-2; }
        }

        .bio {
            @apply mt-6;
        }

        .social {
            @apply flex flex-row justify-center mt-6;
            span {
                @apply w-12 h-12;

                &#github:hover { @apply text-github-primary; }
                &#linkedin:hover { @apply text-linkedin-primary; }
                &#email:hover { @apply text-gmail-primary; }
            }
        }
    }

    @screen md {
        .me {
            @apply w-auto h-auto card p-0;

            .body { @apply card-body pt-0; }

            figure {
                @apply w-full h-96 m-0;
                img { @apply w-full h-full rounded-none; }
            }
            
            .header { @apply justify-start; }
        }
    }

    @screen lg {
        .me {
            @apply card-side;

            figure { @apply w-96 h-full; }

            .body {
                .bio { @apply flex-grow; }
                .social { @apply justify-start; }
            }
        }
    }
</style>
