import {Container} from "@/shared/components/shared/container";
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import ProductForm from "@/shared/components/shared/product-form";

export default async function ProductPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;

  const product = await prisma.product.findFirst({
    where: {id},
    include: {
      ingredients: true,
      nutrition: true,
      setItems: {
        include: {
          ingredients: true
        }
      }
    }
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product}/>
    </Container>
  );
}