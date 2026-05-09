import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { roles } from "../_data/careers";
import CareerRoleClient from "./CareerRoleClient";

export async function generateStaticParams() {
  return roles.map((role) => ({ role: role.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ role: string }> }
): Promise<Metadata> {
  const { role: slug } = await props.params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) return {};

  return {
    title: `${role.title} | Careers`,
    description: role.teaser,
    openGraph: {
      title: `${role.title} — Careers at X Freight Group`,
      description: role.teaser,
      url: `/careers/${role.slug}`,
    },
    alternates: {
      canonical: `/careers/${role.slug}`,
    },
  };
}

export default async function CareerRolePage(
  props: { params: Promise<{ role: string }> }
) {
  const { role: slug } = await props.params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) notFound();

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.overview.join(" "),
    employmentType: "FULL_TIME",
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
    hiringOrganization: {
      "@type": "Organization",
      name: "X Freight Group Inc.",
      sameAs: "https://www.xfreight.ca",
      logo: "https://www.xfreight.ca/image.png",
    },
    datePosted: "2026-05-01",
    validThrough: "2026-12-31",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <CareerRoleClient role={role} />
    </>
  );
}
