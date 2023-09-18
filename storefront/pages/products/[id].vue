<template>
    <div>
        <p>product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repudiandae aliquam culpa. Reprehenderit eveniet obcaecati incidunt velit delectus accusantium et iste, soluta, laudantium voluptas, consectetur modi repellendus deserunt at vero.
        </p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>