import Card from "./CardMid";

const Trends = () => {
  const articles = [
    {
      image: "https://source.unsplash.com/300x400/?fashion,woman",
      date: "01 Maret 2025",
      title: "10 Effortless Outfit Ideas for Any Occasion",
    },
    {
      image: "https://source.unsplash.com/300x400/?style,woman",
      date: "01 Maret 2025",
      title: "10 Effortless Outfit Ideas for Any Occasion",
    },
    {
      image: "https://source.unsplash.com/300x400/?clothing,woman",
      date: "01 Maret 2025",
      title: "10 Effortless Outfit Ideas for Any Occasion",
    },
    {
      image: "https://source.unsplash.com/300x400/?clothing,woman",
      date: "01 Maret 2025",
      title: "10 Effortless Outfit Ideas for Any Occasion",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl my-24">
      <h2 className="text-center max-w-2xs mx-auto text-4xl sm:text-5xl sm:max-w-md md:text-6xl font-bold mb-12 text-[#263238]">
        FASHION NEW TRENDS
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-between gap-8 mx-auto sm:max-w-2xl md:max-w-3xl lg:sm:max-w-5xl xl:sm:max-w-7xl">
        {articles.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Trends;
