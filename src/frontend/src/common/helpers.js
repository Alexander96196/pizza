const getDoughType = (name) => {
  switch (name) {
    case "Толстое":
      return "large";
    default:
      return "light";
  }
};

export const formatDough = (arr) => {
  return arr.map((item) => ({
    ...item,
    type: getDoughType(item.name),
  }));
};

const getSizesType = (name) => {
  switch (name) {
    case "32 см":
      return "normal";
    case "45 см":
      return "big";
    default:
      return "small";
  }
};

export const formatSizes = (arr) => {
  return arr.map((item) => ({
    ...item,
    type: getSizesType(item.name),
  }));
};

const getSaucesType = (name) => {
  switch (name) {
    case "Томатный":
      return "tomato";
    default:
      return "creamy";
  }
};

export const formatSauces = (arr) => {
  return arr.map((item) => ({
    ...item,
    type: getSaucesType(item.name),
  }));
};

const getIngredientsType = (name) => {
  switch (name) {
    case "Чеддер":
      return "cheddar";
    case "Салями":
      return "salami";
    case "Ветчина":
      return "ham";
    case "Ананас":
      return "ananas";
    case "Бекон":
      return "bacon";
    case "Лук":
      return "onion";
    case "Чили":
      return "chile";
    case "Халапеньо":
      return "jalapeno";
    case "Маслины":
      return "olives";
    case "Томаты":
      return "tomatoes";
    case "Лосось":
      return "salmon";
    case "Моцарелла":
      return "mozzarella";
    case "Пармезан":
      return "parmesan";
    case "Блю чиз":
      return "blue_cheese";
    default:
      return "mushrooms";
  }
};

export const formatIngredients = (arr) => {
  return arr.map((item) => ({
    ...item,
    type: getIngredientsType(item.name),
  }));
};
