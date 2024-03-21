<template>
  <div>
    <header class="page__header header">
      <div class="container">
        <div class="header__inner">
          <div class="heaeder__col header__col--logo">
            <div class="logo logo--header">
              <router-link to="/" href="#" class="logo__link">
                <img
                  src="../assets/images/icons/header-logo.svg"
                  alt="logo"
                  class="logo__pic logo__pic--header"
                />
              </router-link>
            </div>
          </div>
          <div class="header__col header__col--search">
            <form action="#" class="form">
              <div class="form__field">
                <div class="form__field-block form__field-block--search">
                  <button class="btn btn--search">
                    <!-- <svg class="btn--search-icon icon">
                      <use
                        xlink:href="../public/images/icons/sprite.svg#icon-search"
                      ></use>
                    </svg> -->
                  </button>
                </div>
                <div class="form__field-block">
                  <div class="input">
                    <input
                      type="text"
                      placeholder="найти..."
                      class="input__control input__control--search"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="header__col header__col--profile">
            <div class="profile profile--hidden">
              <router-link
                to="/profile"
                href="#"
                class="profile__link"
              ></router-link>
              <div class="profile__block">
                <div class="profile__name">Константин</div>
                <div class="profile__avatar">
                  <img src="" class="profile__avatar-pic" />
                </div>
              </div>
              <div class="profile__icon">
                <!-- <svg class="profile__icon-pic icon">
                  <use
                    xlink:href="../public/images/icons/sprite.svg#icon-profile-mobile"
                  ></use>
                </svg> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">

@import "../assets/scss/style.scss"
</style>
