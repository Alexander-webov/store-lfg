"use server";

import { redirect } from "next/navigation";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

export const fetchFeaturedProducts = async () => {
  const products = db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return await db.product.findMany({
    where: {
      OR: [
        {
          name: { contains: search, mode: "insensitive" },
        },
        {
          company: { contains: search, mode: "insensitive" },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};

export const createProductAction = async (
  prevStat: string,
  fromDate: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const name = fromDate.get("name") as string;
    const company = fromDate.get("company") as string;
    const price = Number(fromDate.get("price") as string);
    const description = fromDate.get("description") as string;
    const featured = Boolean(fromDate.get("featured") as string);

    await db.product.create({
      data: {
        name,
        company,
        price,
        image: "/images/1.webp",
        description,
        featured,
        clerkId: user.id,
      },
    });

    return { message: "roduct created" };
  } catch {
    return { message: "there was an error" };
  }
};
