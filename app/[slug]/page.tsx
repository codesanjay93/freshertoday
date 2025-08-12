import { notFound } from "next/navigation";
import React from "react";
import JobListingLayout from "../components/jobListingLayout/JobListingLayout";

type Params = Promise<{ slug: string }>;

const staticSlugs = [
  "fresher-jobs-in-bengaluru",
  "fresher-jobs-in-delhi",
];

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return staticSlugs.map((slug) => ({ slug }));
}

export default async function JobListingPage(props: { params: Params }) {
  // Await the Promise to get actual params
  const params = await props.params;
  const slug = params.slug;

  if (!slug || !staticSlugs.includes(slug)) {
    return notFound();
  }

  return <JobListingLayout />;
}
