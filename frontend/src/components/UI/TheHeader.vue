<template>
    <div>
        <h1>Product Surveys</h1>
        <the-links></the-links>
    </div>    
</template>

<script>
import TheLinks from './TheLinks.vue';

export default {
    components: {
        TheLinks
    }
};
</script>

<style scoped>
div {
    width: 100%;
    height: 60px;
    background-color: #197BBD;
    color: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    float: left;
}

h1 {    
    font-size: 30px;
    padding: 15px;
    margin: 0;
    height: inherit;
    font-style: italic;
    width: 50%;
    float: left;
}
</style>