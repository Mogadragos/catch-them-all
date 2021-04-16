<template>
  <div>
    <h1> Please wait {{ checkNFC() }}</h1>
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
        console.log("NDEFReader" in window);
      }
      else{
        console.log("NDEFReader" in window);
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
