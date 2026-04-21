import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage: string;
  breadcrumbItems: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  backgroundImage,
  breadcrumbItems,
  children,
  className = "",
}: PageHeroProps) => {
  return (
    <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          {eyebrow && (
            <span
              className="hero-fade-in text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block"
              style={{ animationDelay: "0.1s" }}
            >
              {eyebrow}
            </span>
          )}
          <h1
            className="hero-fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
            style={{ animationDelay: "0.2s" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="hero-fade-in text-white/80 text-lg leading-relaxed max-w-lg"
              style={{ animationDelay: "0.35s" }}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
