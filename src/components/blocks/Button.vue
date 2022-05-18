<template>
    <button class="btn__action" :disabled="disabled">
        <span>{{ text }}</span>
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: {
                type: String,
                default: 'Button',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>

<style>
    button.btn__action {
        border: none;
        padding: 0.5rem 1rem;
        position: relative;
        outline: none;
        border-radius: 15px;
    }

    button.btn__action:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
        outline: none
    }

    button.btn__action:focus .icon{
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid var(--red);
        width: 50px;
        height: 50px;
    }
</style>