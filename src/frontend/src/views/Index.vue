<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  v-for="(item, index) in dough"
                  :key="item.id"
                  class="dough__input"
                  :class="`dough__input--${item.type}`"
                >
                  <input
                    type="radio"
                    name="dought"
                    :value="item.type"
                    class="visually-hidden"
                    :checked="index === 0"
                  />
                  <b>{{ item.name }}</b>
                  <span>{{ item.description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="(item, index) in sizes"
                  :key="item.id"
                  class="diameter__input"
                  :class="`diameter__input--${item.type}`"
                >
                  <input
                    type="radio"
                    name="diameter"
                    value="small"
                    class="visually-hidden"
                    :checked="index === 1"
                  />
                  <span>{{ item.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="(item, index) in souces"
                    :key="item.id"
                    class="radio ingredients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      value="tomato"
                      :checked="index === 0"
                    />
                    <span>{{ item.name }}</span>
                  </label>
                </div>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="item in ingredients"
                      :key="item.id"
                      class="ingredients__item"
                    >
                      <span class="filling" :class="`filling--${item.type}`">{{
                        item.name
                      }}</span>

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>
<script>
import pizza from "@/static/pizza.json";
import {
  formatDough,
  formatSizes,
  formatSauces,
  formatIngredients,
} from "@/common/helpers";
export default {
  name: "IndexPage",
  data() {
    return {
      pizza,
    };
  },
  computed: {
    dough() {
      return formatDough(this.pizza.dough);
    },
    sizes() {
      return formatSizes(this.pizza.sizes);
    },
    souces() {
      return formatSauces(this.pizza.sauces);
    },
    ingredients() {
      return formatIngredients(this.pizza.ingredients);
    },
  },
};
</script>
