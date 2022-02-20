<script lang="ts">

</script>


<div>
    <span class="icon"><slot name="icon" /></span>
    <span class="text"><slot /></span>
</div>


<style lang="postcss">
    div {
        @apply flex flex-row items-center my-2;
    }

    .icon {
        @apply flex justify-center items-center mr-2 w-6 h-6 ;
    }

    .text {
        @apply text-lg;
    }
</style>