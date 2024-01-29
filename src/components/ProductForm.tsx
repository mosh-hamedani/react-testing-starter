import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Select, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Product } from "../entities";
import useCategories from "../hooks/useCategories";
import {
  ProductFormData,
  productFormSchema,
} from "../validationSchemas/productSchema";
import ErrorMessage from "./ErrorMessage";

interface Props {
  product?: Product;
  onSubmit: (product: ProductFormData) => Promise<void>;
}

const ProductForm = ({ product, onSubmit }: Props) => {
  const { data: categories, isLoading } = useCategories();
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: product,
    resolver: zodResolver(productFormSchema),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <form
      name="product"
      onSubmit={handleSubmit(async (formData) => {
        try {
          setSubmitting(true);
          await onSubmit(formData);
        } catch (error) {
          toast.error("An unexpected error occurred");
        } finally {
          setSubmitting(false);
        }
      })}
      className="space-y-3"
    >
      <Box>
        <TextField.Root className="max-w-sm">
          <TextField.Input placeholder="Name" {...register("name")} size="3" />
        </TextField.Root>
        <ErrorMessage error={errors.name} />
      </Box>
      <Box>
        <TextField.Root className="w-24">
          <TextField.Slot>$</TextField.Slot>
          <TextField.Input
            placeholder="Price"
            maxLength={5}
            size="3"
            {...register("price", { valueAsNumber: true })}
          />
        </TextField.Root>
        <ErrorMessage error={errors.price} />
      </Box>
      <Box>
        <Controller
          name="categoryId"
          control={control}
          render={({ field }) => (
            <Select.Root
              size="3"
              defaultValue={product?.categoryId.toString() || ""}
              onValueChange={(value) => field.onChange(+value)}
            >
              <Select.Trigger placeholder="Category" />
              <Select.Content>
                <Select.Group>
                  {categories?.map((category) => (
                    <Select.Item
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          )}
        />
        <ErrorMessage error={errors.categoryId} />
      </Box>
      <Button size="3" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default ProductForm;
