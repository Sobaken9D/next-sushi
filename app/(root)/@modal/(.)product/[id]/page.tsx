import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {ProductModal} from "@/shared/components/shared/modals";

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
    <ProductModal product={product}/>
  );
}