<template>
  <div class="page-wrapper">
    <h1 class="home-page-title">{{ appTitle }}</h1>
    <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg" />

    <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="https://www.mayoclinic.org/tests-procedures/cognitive-behavioral-therapy/about/pac-20384610"
      >Documentation →</a
    >

    <div class='exercises-btn'>
      <p class='exercises-btn-text'>Exercises</p>//
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head: function() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
    width: 5rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }

  .exercises-btn {
    display: inline-block;
    margin-top: 5%;
    box-sizing: border-box;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    background-color: #5d6788;
    transform: scale(1);
    transition: all 0.1s ease;
  }

  .exercises-btn:active {
    transform: scale(1.1);
    transition: all 0.1s ease;
  }

  .exercises-btn-text {
    color: #47A1A9;
    font-size: 1.2rem;
  }
}
</style>
