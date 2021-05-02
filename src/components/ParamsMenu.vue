<template>
  <transition name="topSlider">
    <section
      v-show="show"
      v-on:click.self="$emit('Close')"
      :style="cssVars"
      class="params-menu"
    >
      <section class="params-menu-body">
        <div class="params-menu-el">
          <button
            v-on:click="
              askLogin = !askLogin;
              askMail = false;
              askResetActivity = false;
            "
          >
            <span>Admin</span>
            <img
              v-if="askLogin"
              src="../assets/img/arrow_up.png"
              alt="Déplié"
            />
            <img v-else src="../assets/img/arrow_down.png" alt="Replié" />
          </button>
          <transition name="buttonSlider">
            <form
              v-if="askLogin"
              v-on:submit.prevent
              class="params-menu-sub-el"
            >
              <div class="fields-div">
                <label for="code">Code de connexion</label>
                <input id="code" type="text" v-model="connexionCode" />
              </div>
              <button>Connexion</button>
            </form>
          </transition>
        </div>
        <div class="params-menu-el">
          <button
            v-on:click="
              askLogin = false;
              askMail = !askMail;
              askResetActivity = false;
            "
          >
            <span>Mail</span>
            <img v-if="askMail" src="../assets/img/arrow_up.png" alt="Déplié" />
            <img v-else src="../assets/img/arrow_down.png" alt="Replié" />
          </button>
          <transition name="buttonSlider">
            <form v-if="askMail" v-on:submit.prevent class="params-menu-sub-el">
              <div class="fields-div">
                <label for="email">Email</label>
                <input id="email" type="text" />
              </div>
              <button>Envoyer données</button>
            </form>
          </transition>
        </div>
        <div class="params-menu-el">
          <button
            v-on:click="
              askLogin = false;
              askMail = false;
              askResetActivity = !askResetActivity;
            "
          >
            <span>Réinitialiser l'activité</span>
            <img
              v-if="askResetActivity"
              src="../assets/img/arrow_up.png"
              alt="Déplié"
            />
            <img v-else src="../assets/img/arrow_down.png" alt="Replié" />
          </button>
          <transition name="buttonSlider">
            <div v-if="askResetActivity" class="params-menu-sub-el">
              <button v-on:click="askResetActivity = false">Annuler</button>
              <button v-on:click="ResetActivity">Réinitialiser</button>
            </div>
          </transition>
        </div>
        <div class="params-menu-el"><button>Crédits</button></div>
      </section>
    </section>
  </transition>
</template>

<script>
import StorageService from "../services/StorageService.js";

export default {
  emits: ["Close"],
  data() {
    return {
      askLogin: false,
      askMail: false,
      askResetActivity: false,
      connexionCode: "",
    };
  },
  props: {
    show: Boolean,
    transitionTime: {
      type: String,
      default: "0.5s",
    },
  },
  computed: {
    cssVars() {
      return {
        "--transition-time": this.transitionTime,
      };
    },
  },
  methods: {
    ResetActivity() {
      StorageService.reset();
      document.location.reload();
    },
  },
};
</script>

<style>
.params-menu {
  overflow: hidden;
  position: absolute;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 50px);
}

.params-menu-body {
  background-color: white;
  overflow: hidden;
  margin-left: auto;
  width: 80%;
}

.params-menu-el {
  width: 100%;
}

.params-menu-el > button {
  width: 100%;
}

.params-menu-el button {
  background: linear-gradient(
      to right,
      rgba(121, 103, 9, 0.2),
      rgba(121, 103, 9, 0.8)
    ),
    linear-gradient(white, white);
  height: 60px;
  font-size: 1em;
  border: none;
  cursor: pointer;
}

.params-menu-el > button > span {
  margin-right: 1em;
  margin-left: 1em;
}

.params-menu-sub-el {
  overflow: hidden;
  width: 100%;
  display: flex;
}

.params-menu-sub-el > * {
  width: 50%;
}

.fields-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fields-div > input {
  width: 90%;
}

/* Transitions (vueJS) */

.topSlider-enter-active {
  animation: grow var(--transition-time) ease-in;
}
.topSlider-leave-active {
  animation: grow var(--transition-time) ease-in reverse;
}
@keyframes grow {
  0% {
    height: 0;
  }
  100% {
    height: calc(100vh - 50px);
  }
}

.buttonSlider-enter-active {
  animation: grow-button 0.2s linear;
}
.buttonSlider-leave-active {
  animation: grow-button 0.2s linear reverse;
}
@keyframes grow-button {
  0% {
    height: 0;
  }
  100% {
    height: 60px;
  }
}
</style>
