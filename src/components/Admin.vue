<template>
    <form>
        <input id="inputText" type="text" size="10">
        <StylaxButton : showText='Transfert'></StylaxButton>
    </form>
</template>

<script>
import StylaxButton from "./components/StylaxButton";
import Modal from "./Modal.vue";
export default {
    name : Admin,
    components: {
        StylaxButton
    },
    mounted () {
        reset();
    },
    data () {
        return {
            
        };
    },
    reset : function(){
        document.getElementsByClassName("stylaxBtn").onclick = document.getElementById("inputText").reset ;
    },
}
</script>

<style>

</style>