import { useParams, Navigate } from "react-router";

import { getArticleBySlug } from "@/data/articles";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { PurchaseForm } from "@/components/PurchaseForm/PurchaseForm";

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  const article = id ? getArticleBySlug(id) : undefined;

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const handleScrollToBuy = () => {
    document.getElementById("purchase-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              {article.category}
            </div>

            <h1
              className="mt-5 text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              {article.title}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-600">
              {article.description}
            </p>

            <button
              onClick={handleScrollToBuy}
              className="mt-8 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg"
            >
              Получить продукт
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 mt-12 pb-20 space-y-16">
        {/* Video / Hero Image */}
        {article.type === "VSL" && article.video ? (
          <VideoPlayer
            type={article.video.type}
            url={article.video.url}
            poster={article.video.poster}
          />
        ) : (
          article.heroImage && (
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )
        )}

        {/* Article Content */}
        <div className="space-y-8">
          {(article.content ?? []).map((block, index) => {
            /*
             * Проверяем предыдущий блок.
             *
             * Если текущий и предыдущий блоки являются диалогом
             * и у них один и тот же speaker, имя спикера второй
             * раз не показываем.
             */
            const previousBlock = article.content?.[index - 1];

            const isSameSpeaker =
              block.type === "dialogue" &&
              previousBlock?.type === "dialogue" &&
              previousBlock.speaker === block.speaker;

            {
              /* Dialogue */
            }
            if (block.type === "dialogue") {
              return (
                <div key={index} className="space-y-2">
                  {!isSameSpeaker && block.speaker && (
                    <div className="font-bold text-gray-900">
                      {block.speaker}
                    </div>
                  )}

                  <p className="text-base md:text-lg leading-8 text-gray-700">
                    {block.text}
                  </p>
                </div>
              );
            }

            {
              /* Heading */
            }
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl md:text-3xl font-bold text-gray-900"
                >
                  {block.text}
                </h2>
              );
            }

            {
              /* Text */
            }
            if (block.type === "text") {
              return (
                <p
                  key={index}
                  className="text-base md:text-lg leading-8 text-gray-700"
                >
                  {block.text}
                </p>
              );
            }

            {
              /* Image */
            }
            if (block.type === "image" && block.src) {
              return (
                <figure key={index} className="my-8">
                  <img
                    src={block.src}
                    alt={block.alt ?? ""}
                    className="w-full rounded-2xl"
                  />
                </figure>
              );
            }

            return null;
          })}
        </div>

        {/* Benefits */}
        {article.benefits.length > 0 && (
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Что вы получите:
            </h3>

            <ul className="space-y-4">
              {article.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start text-lg text-gray-800"
                >
                  <span className="text-blue-600 mr-4 font-bold text-2xl">
                    ✓
                  </span>

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Image Gallery */}
        {article.images.length > 0 && <ImageGallery images={article.images} />}

        {/* CTA */}
        <div className="text-center py-8">
          <button
            onClick={handleScrollToBuy}
            className="bg-gray-900 text-white px-10 py-5 rounded-full font-extrabold text-xl hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1"
          >
            Купить сейчас
          </button>
        </div>
      </div>

      {/* Purchase Form */}
      <section id="purchase-form" className="mt-20">
        <PurchaseForm />
      </section>
    </article>
  );
}
