import React from "react";
import type { Blog } from "@/app/blogData";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({
  title,
  description,
  image,
  imageAlt,
  date,
  slug,
}: Blog) {
  return (
    <Link href={`/blog/${slug}`} className={style["blog-card"]}>
      <Image src={image} alt={imageAlt} width={500} height={200} />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
    </Link>
  );
}
