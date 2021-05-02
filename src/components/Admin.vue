<template>
    <section class="center">
        <form class="border form">
            <label>Nom</label>
            <input id="inputText" type="text" size="10">
            <label>Lien</label>
            <input id="inputText" type="text" size="40">
            <button>OK</button>
        </form>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
}

.border{
    padding: 20px 100px 18px 100px;
    background: rgba(185, 180, 180, 0.842);
    border-radius: 10px;
    border-width : 2px;
}
</style>