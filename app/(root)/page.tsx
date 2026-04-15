import {Container} from "@/shared/components/shared/container";
import {Title} from "@/shared/components/shared/title";
import {prisma} from "@/prisma/prisma-client";
import {findProducts} from "@/shared/lib";
import {TopBar} from "@/shared/components/shared/top-bar";

export default async function Home() {
  const categories = await findProducts();

  console.log(categories);
  return (
    <>
      <Container>
        <Title text="Все товары" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar categories={categories}/>
    </>
  );
}