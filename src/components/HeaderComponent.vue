<script setup lang="ts">
</script>
<template>
    <div class="header">
        <img src="../assets/images/sandwich-icon.svg" class="sandwich-icon">
        <div class="header-left">
            <ul>
                <li>Chassis</li>
                <li>Motorização</li>
                <li>Tecnologia</li>
                <li>Home</li>
                <li>Carrinho</li>
            </ul>
        </div>
        <img src="../assets/vuelogo.png" class="logo">
    </div>
</template>
<style lang="scss">
.header {
    background-color: white;
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
}

.sandwich-icon {
    width: 3rem;
}

.header-left {
    display: none;
}

@media (min-width: 1024px) {
    .header-left{
        display: block;
    }

    .sandwich-icon {
        display: none;
    }
}
</style>