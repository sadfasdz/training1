<template>
  <div>
    <div>
      <div class="page__content content">
        <div class="container">
          <section class="section section--tabs">
            <div class="tabs tabs--default" data-tabs>
              <nav class="tabs__items">
                <ul class="tabs__list">
                  <li class="tabs__item tabs__item--active" data-tab="news2">
                    Новости
                  </li>
                  <li class="tabs__item" data-tab="sale2">Акции</li>
                </ul>
              </nav>

              <div class="tabs__body">
                <div
                  class="tabs__block tabs__block--active"
                  data-tab-section="news2"
                >
                  <div class="cards">
                    <ul class="cards__list">
                      <li class="cards__item">
                        <article class="card">
                          <button
                            class="card__favorites"
                            data-tippy-favorite="Добавить в избранное"
                          >
                            <div class="card__favorites-icon">
                              <!-- <svg class="icon card__favorites-pic">
                                <use
                                  xlink:href="../public/images/icons/sprite.svg#icon-star"
                                ></use>
                              </svg> -->
                              <!-- <svg
                                class="icon card__favorites-pic card__favorites-pic--active"
                              >
                                <use
                                  xlink:href="../public/images/icons/sprite.svg#icon-star-active"
                                ></use>
                              </svg> -->
                            </div>
                          </button>
                          <router-link
                            to="/details"
                            href=""
                            class="card__link"
                          ></router-link>
                          <div class="card__image">
                            <div class="card__box">
                              <img
                                src="../assets/images/news-img.jpg"
                                alt=""
                                class="card__image-pic"
                              />
                            </div>
                          </div>
                          <div class="card__body">
                            <div class="card__content">
                              <h3 class="card__title title title--card">
                                Результаты за 3-й квартал и 9 месяцев 2019 года
                              </h3>
                              <p class="card__text">
                                Не усложasdasdasdasdasdasdddddddddddняйте себе
                                жизн
                              </p>
                            </div>
                            <div class="card__info">
                              <div class="card__info-date">
                                <span class="card__date">04.02.2020</span>
                              </div>
                              <div class="statistics">
                                <ul class="statistics__list">
                                  <li class="statistics__item">
                                    <span class="statistics__icon">
                                      <!-- <svg class="icon statistics__pic">
                                        <use
                                          xlink:href="../public/images/icons/sprite.svg#icon-heart"
                                        ></use>
                                      </svg> -->
                                    </span>
                                    <span class="card__info-text">123</span>
                                  </li>
                                  <li class="statistics__item">
                                    <span class="statistics__icon">
                                      <!-- <svg class="icon statistics__pic">
                                        <use
                                          xlink:href="../public/images/icons/sprite.svg#icon-comment"
                                        ></use>
                                      </svg> -->
                                    </span>
                                    <span class="card__info-text">78</span>
                                  </li>

                                  <li class="statistics__item">
                                    <span class="statistics__icon">
                                      <!-- <svg class="icon statistics__pic">
                                        <use
                                          xlink:href="../public/images/icons/sprite.svg#icon-eye"
                                        ></use>
                                      </svg> -->
                                    </span>
                                    <span class="card__info-text">67</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    </ul>
                    <div class="cards__btn">
                      <button class="btn btn--arrow">
                        Кнопка со стрелкой
                        <!-- <svg class="btn--arrow-icon icon">
                          <use
                            xlink:href="../public/images/icons/sprite.svg#icon-arrow"
                          ></use>
                        </svg> -->
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainView",
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
