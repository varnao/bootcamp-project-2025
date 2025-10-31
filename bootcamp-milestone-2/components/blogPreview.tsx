import React from "react";
import type { Blog } from "@/app/blogData";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";


// component that will display preview card for a blog post
// takes in blog data as props and renders clickable card
export default function BlogPreview({
  title,
  description,
  image,
  imageAlt,
  date,
  slug,
}: Blog) {
  return (
    // uses the slug to create a dynamic route
    <Link href={`/blog/${slug}`} className={style["blog-card"]}>
      <Image src={image} alt={imageAlt} width={500} height={200} />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
    </Link>
  );
}
