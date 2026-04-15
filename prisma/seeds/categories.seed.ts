import {prisma} from "@/prisma/prisma-client";

export async function categoriesSeed() {
  await prisma.category.createMany({
    data: [
      {name: "Новинки"},
      {name: "Наборы"},
      {name: "Обеды"},
      {name: "Роллы и Суши"},
      {name: "Горячее и салаты"},
      {name: "Напитки и десерты"},
      {name: "Соусы"},
    ]
  });
}