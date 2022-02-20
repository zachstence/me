<script lang="ts">
    export let href: string;
    export let label: string;
</script>


<a href={href} class="btn btn-ghost">
    <span class="sr-only">{label}</span>
    <span aria-hidden="true" ><slot /></span>
</a>

<style lang="postcss">
    a {
        @apply w-fit h-fit p-2;
    
        &:hover {
            @apply bg-transparent;
        }
    }

    span {
        @apply flex justify-center items-center;
    }
</style>