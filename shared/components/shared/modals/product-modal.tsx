'use client';

import {Product} from "@/generated/prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/shared/components/ui/dialog";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {useRouter} from "next/navigation";
import {cn} from "@/shared/lib/utils";
import ProductForm from "@/shared/components/shared/product-form";

interface Props {
  product: Product;
  className?: string;
}

export function ProductModal({product, className}: Props) {
  const router = useRouter();

  return (
    <Dialog
      open={Boolean(product)}
      onOpenChange={() => router.back()}
    >
      {/*выдает ошибку без DialogTitle*/}
      <VisuallyHidden>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
      </VisuallyHidden>

      <DialogContent
        className={cn(
          'p-0 max-w-[900px] bg-white overflow-hidden',
          className,
        )}
      >
        <ProductForm product={product}/>
      </DialogContent>
    </Dialog>
  );
}