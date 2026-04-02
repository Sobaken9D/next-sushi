import {prisma} from "@/prisma/prisma-client";

export async function productsSeed() {
  const category_new = await prisma.category.findFirst({
    where: {name: 'Новинки'}
  });
  const category_sets = await prisma.category.findFirst({
    where: {name: 'Наборы'}
  });
  const category_rolls_and_sushi = await prisma.category.findFirst({
    where: {name: 'Роллы и Суши'}
  });
  const category_luchs = await prisma.category.findFirst({
    where: {name: 'Обеды'}
  });
  const category_drinks_and_deserts = await prisma.category.findFirst({
    where: {name: 'Напитки и десерты'}
  });
  const category_sauces = await prisma.category.findFirst({
    where: {name: 'Соусы'}
  });
  const category_hot_and_salats = await prisma.category.findFirst({
    where: {name: 'Горячее и салаты'}
  });

  const productsToIngredientsIdMap = new Map();

  productsToIngredientsIdMap.set("Креветка с авокадо", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Креветка темпура", "Авокадо", "Сыр сливочный", "Икра масаго", "Огурец", "Соус спайс", "Соус унаги", "Нори", "Рис"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Филадельфия с огурцом", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Лосось", "Сыр сливочный", "Огурец", "Рис", "Нори"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Филадельфия уайт", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Эсколар", "Икра масаго красная", "Сыр сливочный", "Такуан", "Кунжут", "Нори", "Рис"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Лосось чили-майо с кунжутом", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Такуан", "Огурец", "Кунжут белый", "Соус чили-майо", "Нори", "Рис", "Паста с лососем"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Филадельфия Эсколар", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Лосось", "Эсколар", "Сыр сливочный", "Огурец", "Нори", "Рис"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Лосось с тобико", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Лосось жареный", "Сыр сливочный", "Тобико", "Рис", "Нори"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Соус Лава", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Креветка", "Тобико", "Майонез", "Сыр сливочный"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Соус Ореховый", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Соус кунжутный"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Соус Спайс", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Майонез", "Паста кимчи"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Соус Терияки", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Соус Терияки"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Соус Унаги", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Соус Унаги"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Соус Сырный", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Соус Сырный"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Домашний", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Вакаме", "Огурец", "Морковь", "Помидоры черри", "Филе куриное", "Корень имбиря", "Чеснок", "Перец чили", "Лук красный", "Укроп", "Мирин", "Соевый соус"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Хиругохан", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Рис", "Филе куриное", "Перец болгарский", "Лук зелёный", "Шампиньоны", "Соус пад тай", "Помидоры черри", "Кунжут белый"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Цезарь", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Рис", "Нори", "Салат", "Майонез", "Чеснок", "Соевый соус", "Огурец консервированный", "Филе куриное", "Помидор"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Тори Пасута", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Лапша удон", "Филе куриное", "Лук зелёный", "Шампиньоны", "Перец болгарский", "Соус пад тай", "Кунжут чёрный", "Помидоры черри"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Цезарь с курицей", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Салат", "Майонез", "Чеснок", "Соевый соус", "Огурец консервированный", "Помидоры черри", "Филе куриное", "Яйцо", "Сыр пармезан", "Гренки"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Мисо суп с креветкой", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Мисо паста", "Соевый соус", "Вакаме", "Сыр фетакса", "Креветка", "Лук зелёный"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Лава эби", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Нори", "Рис", "Креветка отварная", "Салат", "Огурец", "Сыр сливочный", "Соус лава с креветкой"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Моти манго-маракуйя", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Крем творожный", "Шоколад белый", "Пюре манго", "Крахмал тапиоковый", "Пюре маракуйи", "Мука рисовая клейкая"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Моти шоколад", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Крем творожный", "Мука рисовая клейкая", "Горький шоколад", "Сливки 33%", "Какао-порошок", "Крахмал кукурузный"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Суши тако с беконом", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Бекон", "Сыр чеддер", "Огурец", "Сырный соус", "Соус унаги", "Сухари панко", "Кляр", "Пабиран", "Рис", "Нори"]
      }
    }
  }));

  productsToIngredientsIdMap.set("Суши тако с лососем", await prisma.ingredient.findMany({
    where: {
      name: {
        in: ["Паста с лососем", "Салат", "Огурец", "Соус том ям", "Соус унаги", "Кляр", "Сухари панко", "Пабиран", "Рис", "Нори"]
      }
    }
  }));

  await prisma.product.create({
    data:
      {
        name: "Креветка с авокадо",
        categoryId: `${category_rolls_and_sushi.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/290f5619-a8cc-498b-b67f-5c11303d415f/488bfe93-80a5-4ffd-b498-6013b17e2ca7.webp",
        price: 419,
        weight: 250,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Креветка с авокадо").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 181.3,
            proteins: 5.1,
            fats: 6.1,
            carbs: 26.6,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Филадельфия с огурцом",
        categoryId: `${category_rolls_and_sushi.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/81c8ca42-a187-464d-807e-fb97c966aff4/2487bee2-e8bb-495b-8e42-911e04792c5b.webp",
        price: 899,
        weight: 295,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Филадельфия с огурцом").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 211.9,
            proteins: 8.9,
            fats: 11.2,
            carbs: 18.9,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Филадельфия уайт",
        categoryId: `${category_rolls_and_sushi.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/6708c6cb-9648-49f7-b0bb-48828e538253/eec92ad4-0690-49a3-a00c-d883ef62ee6d.webp",
        price: 574,
        weight: 230,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Филадельфия уайт").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 6.6,
            proteins: 8.9,
            fats: 23.7,
            carbs: 201.5,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Лосось чили-майо с кунжутом",
        categoryId: `${category_rolls_and_sushi.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/11e7daaa-8c35-471e-8c68-a45e659da435/7290ecf8-d910-42db-a82e-695404b1406b.webp",
        price: 488,
        weight: 220,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Лосось чили-майо с кунжутом").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 207.7,
            proteins: 3.8,
            fats: 9.6,
            carbs: 26.4,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Филадельфия Эсколар",
        categoryId: `${category_rolls_and_sushi.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/ed8d3ee1-0d32-4d6f-b1fa-1fd712c2832b/a5fdfb27-752c-45a0-8b41-d296d6f5e6c1.webp",
        price: 519,
        weight: 205,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Филадельфия Эсколар").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 182.7,
            proteins: 5.1,
            fats: 5.5,
            carbs: 25.4,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Лосось с тобико",
        categoryId: `${category_rolls_and_sushi.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/876e92f5-a050-46f6-b2fd-4d890b24a38a/7b5d0158-024a-468b-a2d5-9c609bd1b188.webp",
        price: 689,
        weight: 185,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Лосось с тобико").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 262.7,
            proteins: 14.8,
            fats: 9,
            carbs: 30.4,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Цезарь",
        categoryId: `${category_rolls_and_sushi.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/89a6cb6a-c731-4925-8b56-e170c36135e5/b3571415-e1e7-4e11-8c24-1e505f1a1285.webp",
        price: 300,
        weight: 210,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Цезарь").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 195.1,
            proteins: 4.4,
            fats: 8.1,
            carbs: 26.2,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Лава эби",
        categoryId: `${category_hot_and_salats.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/2559a7d8-5885-433b-ae54-c56465ac11e8/847a4d53-a198-45f7-8a42-c1430cc96cea.webp",
        price: 599,
        weight: 245,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Лава эби").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 198.2,
            proteins: 5.1,
            fats: 9.7,
            carbs: 22.1,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Соус Лава",
        categoryId: `${category_sauces.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/f186f54b-cc6b-4fa2-96d6-ae52f8c9bfe4/76260fbb-f61a-493b-b242-b5ccb6897977.webp",
        price: 90,
        weight: 30,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Соус Лава").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 356.6,
            proteins: 5.4,
            fats: 34.6,
            carbs: 2.4,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Соус Ореховый",
        categoryId: `${category_sauces.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/431c99b7-d1b0-47ad-8b74-bce33adfa61c/383b956c-7653-4850-b6cb-c73ec2f4a611.webp",
        price: 80,
        weight: 30,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Соус Ореховый").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 356.7,
            proteins: 1.8,
            fats: 36.7,
            carbs: 4.8,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Соус Спайс",
        categoryId: `${category_sauces.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/106ef7f5-136e-4513-a179-29c35cdb66c3/33646d51-5877-43a6-b964-a449ae640341.webp",
        price: 80,
        weight: 30,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Соус Спайс").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 302.9,
            proteins: 1.4,
            fats: 30.9,
            carbs: 4.9,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Соус Терияки",
        categoryId: `${category_sauces.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/a10c02f5-4f8f-481b-bd0e-a95188ef153b/7cab8cd7-ff6e-4110-81a8-02967c491fa3.webp",
        price: 80,
        weight: 30,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Соус Терияки").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 324.6,
            proteins: 7.4,
            fats: 24.5,
            carbs: 3.2,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Соус Унаги",
        categoryId: `${category_sauces.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/31b56f4e-acf9-4b91-a150-91a9f640a6ea/00fc8bd3-d5d4-4c42-95b4-ea3edf1a036f.webp",
        price: 80,
        weight: 30,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Соус Унаги").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 154.4,
            proteins: 3.3,
            fats: 0.2,
            carbs: 35.6,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Соус Сырный",
        categoryId: `${category_sauces.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/f84073aa-4a02-46bc-bba7-e04d519c85f8/0e429e98-8f6d-4661-8e17-90f0f768fe7f.webp",
        price: 80,
        weight: 30,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Соус Сырный").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 390,
            proteins: 1.5,
            fats: 40,
            carbs: 4,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Домашний",
        categoryId: `${category_hot_and_salats.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/24a68283-e083-4cbb-afa0-029842cacecd/9443dd61-fb87-4b53-a594-0f03fe3c4da9.webp",
        price: 399,
        weight: 210,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Домашний").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 94.8,
            proteins: 7.5,
            fats: 2.8,
            carbs: 10,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Хиругохан",
        categoryId: `${category_hot_and_salats.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/925746bf-6dc0-4ee2-b9b9-766195b25838/222697f2-0bac-4493-b63f-88760c8334fd.webp.webp",
        price: 539,
        weight: 295,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Хиругохан").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 162.9,
            proteins: 7.1,
            fats: 7.1,
            carbs: 17.7,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Тори Пасута",
        categoryId: `${category_hot_and_salats.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/9b04c21d-3614-4695-8b9d-8114e8ed15e2/214a4ff7-97fe-47a8-b745-4481a37eac3c.webp",
        price: 579,
        weight: 295,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Тори Пасута").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 177.4,
            proteins: 7.7,
            fats: 7.3,
            carbs: 20.3,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Цезарь с курицей",
        categoryId: `${category_hot_and_salats.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/ef12960b-a576-4a4e-bbdb-415b3d18c07c/7a36d3dc-71e8-43ce-86e5-2b9a09779a13.webp",
        price: 429,
        weight: 160,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Цезарь с курицей").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 152.9,
            proteins: 10.7,
            fats: 11.5,
            carbs: 1.7,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Мисо суп с креветкой",
        categoryId: `${category_hot_and_salats.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/4fdc3b1e-9d9b-4031-af93-d98bf2516e94/ea7a71fc-e760-4db5-b08e-fd550501d078.webp",
        price: 469,
        weight: 310,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Мисо суп с креветкой").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 61.2,
            proteins: 5,
            fats: 2.6,
            carbs: 4.4,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Моти манго-маракуйя",
        categoryId: `${category_drinks_and_deserts.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/570b8290-dfc6-43f4-a1a3-b08985451084/14fc8ca0-0469-4918-8e1d-1b69f333fc27.webp",
        price: 310,
        weight: 40,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Моти манго-маракуйя").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 227,
            proteins: 2.3,
            fats: 4,
            carbs: 46.1,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Моти шоколад",
        categoryId: `${category_drinks_and_deserts.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/320ebc7c-3de0-4649-9a70-ff4ce99f8adf/23a6032a-0a6f-424e-9c1b-6fbede8f9121.webp",
        price: 310,
        weight: 40,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Моти шоколад").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 359,
            proteins: 6,
            fats: 19,
            carbs: 41,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Энергетический напиток Burn Оригинальный 0,449",
        categoryId: `${category_drinks_and_deserts.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/ffef1ac6-2a37-4f67-bb52-7041fca6b904/fb282beb-fb83-4449-ab46-3da5afbb8850.webp",
        price: 220,
        weight: 499,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 49,
            proteins: 0,
            fats: 0,
            carbs: 11.6,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Энергетический напиток Burn Gold Rush 0,449",
        categoryId: `${category_drinks_and_deserts.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/65dbe0df-3bd9-4d93-923f-23d6ffaa7d01/4906003d-0440-4517-ada8-970416ab6a68.webp",
        price: 220,
        weight: 499,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 49,
            proteins: 0,
            fats: 0,
            carbs: 11.6,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Суши тако с беконом",
        categoryId: `${category_new.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/53c754e0-02bd-4951-ae4f-35885023c011/7d780214-c3ab-483e-a14b-426cb66612d4.webp",
        price: 379,
        weight: 315,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Суши тако с беконом").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 242.2,
            proteins: 7.1,
            fats: 10.1,
            carbs: 30.1,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Суши тако с лососем",
        categoryId: `${category_new.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/ed4cdf65-a7c3-4e92-baf1-32e58bcd1eb9/cb0a3791-a8bd-4dbe-b0e4-a1251bdf64e6.webp",
        price: 329,
        weight: 310,
        ingredients: {
          connect: productsToIngredientsIdMap.get("Суши тако с лососем").map(el => ({id: el.id})),
        },
        nutrition: {
          create: {
            calories: 214.7,
            proteins: 5,
            fats: 7.6,
            carbs: 31.5,
          }
        }
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Ланч №1",
        categoryId: `${category_luchs.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/f1376d11-705a-4a86-acc8-42f0b2e3ac15/06073802-0f7b-4183-a122-cfe1f47cccc8.webp",
        price: 799,
        weight: 715,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 152.4,
            proteins: 6.4,
            fats: 6.1,
            carbs: 17.9,
          }
        },
        setItems: {
          connect: [
            {name: "Хиругохан"},
            {name: "Домашний"},
            {name: "Цезарь"},
          ],
        },
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Ланч №2",
        categoryId: `${category_luchs.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/40cc56ee-08d0-4f61-96fa-ea1c4e39e638/f07909f3-6162-4493-b513-ab050b3db2af.webp",
        price: 599,
        weight: 645,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 176.6,
            proteins: 7.4,
            fats: 9.6,
            carbs: 15.2,
          }
        },
        setItems: {
          connect: [
            {name: "Филадельфия с огурцом"},
            {name: "Цезарь с курицей"},
            {name: "Тори Пасута"},
          ],
        },
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Ланч №3",
        categoryId: `${category_luchs.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/40cc56ee-08d0-4f61-96fa-ea1c4e39e638/f07909f3-6162-4493-b513-ab050b3db2af.webp",
        price: 799,
        weight: 735,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 147.6,
            proteins: 5.3,
            fats: 6.7,
            carbs: 16.7,
          }
        },
        setItems: {
          connect: [
            {name: "Мисо суп с креветкой"},
            {name: "Цезарь"},
            {name: "Лава эби"},
          ],
        },
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Два лосося",
        categoryId: `${category_sets.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/da3361aa-bd2c-43e0-8cd0-af07078f468d/b991a64d-6531-4d0f-adcb-075a33138cdb.webp",
        price: 2390,
        weight: 1265,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 194.9,
            proteins: 6.4,
            fats: 8.3,
            carbs: 23.7,
          }
        },
        setItems: {
          connect: [
            {name: "Филадельфия с огурцом"},
            {name: "Филадельфия уайт"},
            {name: "Лосось чили-майо с кунжутом"},
          ],
        },
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Сю Ки",
        categoryId: `${category_sets.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/d34bc20e-9b99-4172-a657-44ff9f1b092a/45168383-dc58-41e4-9723-b9301f7ebd24.webp",
        price: 1429,
        weight: 875,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 220.4,
            proteins: 5.4,
            fats: 10.4,
            carbs: 26,
          }
        },
        setItems: {
          connect: [
            {name: "Цезарь"},
            {name: "Креветка с авокадо"},
            {name: "Лава эби"},
          ],
        },
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Чикуби",
        categoryId: `${category_sets.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/8ade5f37-ed4a-4d8d-a25d-e35043b44576/ebf19716-d2cd-4e45-9406-10e557ae0ab1.webp",
        price: 2429,
        weight: 1320,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 230.7,
            proteins: 7.3,
            fats: 11.4,
            carbs: 24.8,
          }
        },
        setItems: {
          connect: [
            {name: "Лосось с тобико"},
            {name: "Цезарь"},
            {name: "Лава эби"},
          ],
        },
      },
  });

  await prisma.product.create({
    data:
      {
        name: "Чикуби",
        categoryId: `${category_sets.id}`,
        imageUrl: "https://imgr.yobidoyobi.com/web/menu/0d28820b-f169-4b24-b14a-24e2d2cfee8a/1bf2b3e1-7082-4acc-b472-1f9d61f2f8e7.webp",
        price: 3555,
        weight: 2635,
        ingredients: {
          connect: [],
        },
        nutrition: {
          create: {
            calories: 191.9,
            proteins: 5.5,
            fats: 6.1,
            carbs: 28.6,
          }
        },
        setItems: {
          connect: [
            {name: "Креветка с авокадо"},
            {name: "Филадельфия уайт"},
            {name: "Филадельфия Эсколар"},
            {name: "Лосось с тобико"},
            {name: "Цезарь"},
            {name: "Лава эби"},
          ],
        },
      },
  });
  
}