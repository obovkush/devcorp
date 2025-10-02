const TrustedBrands = () => {
  const brands = [
    { name: "TechCorp", width: "w-32" },
    { name: "InnovateLab", width: "w-36" },
    { name: "FutureWorks", width: "w-28" },
    { name: "DataTech", width: "w-32" },
    { name: "CloudSoft", width: "w-30" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl font-roboto-medium text-muted-foreground">
            Нам доверяют ведущие мировые бренды
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`${brand.width} h-12 bg-muted-foreground/20 rounded-lg flex items-center justify-center`}
            >
              <span className="text-muted-foreground font-semibold text-sm">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;