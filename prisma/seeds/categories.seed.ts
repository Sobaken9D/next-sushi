import {prisma} from "@/prisma/prisma-client";

export async function categoriesSeed() {
  await prisma.category.createMany({
    data: [
      {name: "Новинки"},
      {name: "Наборы"},
      {name: "Роллы и Суши"},
      {name: "Обеды"},
      {name: "Напитки и десерты"},
      {name: "Соусы"},
      {name: "Горячее и салаты"},
    ]
  });
}