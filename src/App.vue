<template>
  <div>
    <h1> Please wait </h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  methods:{
    checkNFC(){
      let status = false;
      if(!("NDEFReader" in window)){
        console.log("NAN pas de NFC");
      }
      else{
        console.log("YEP NFC dispo");
        status = true;
      }
      return status;
    }
  },
  mounted(){
    this.checkNFC();
  }

};
</script>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items : center;
  }

  h1 {
    text-align: center; 
  }
</style>
