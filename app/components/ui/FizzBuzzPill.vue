<script setup lang="ts">

interface Props {
    text: string;
}

const props = defineProps<Props>();

const getColorByText = ( text : string ): string => {
    switch(text){
        case 'Fizz' : return 'bg-emerald-500';
        case 'Buzz' : return 'bg-cyan-500';
        case 'FizzBuzz' : return 'bg-purple-500';
        default : return 'bg-gray-500'
    }
}

defineExpose({getColorByText})

</script>

<template>
    <div class="flex items-center justify-center rounded-3xl p-2 m-2" :class="getColorByText(text)">
        <span >{{text}}</span>
    </div>
</template>

<style lang="css" scoped></style>