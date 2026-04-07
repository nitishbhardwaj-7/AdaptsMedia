import Avatar from './Avatar'
import ArticleItem from './ArticleItem'
import FeaturedArticle from './FeaturedArticle'

const PageTwo = () => {
  return (
    <div className="relative overflow-hidden mb-0 sm:mb-16 md:mb-24 lg:mb-32 px-8 sm:px-6 md:px-8 lg:p-10">

      {/* Background Blurs */}
      <div className="absolute top-20 sm:top-32 md:top-40 -right-10 sm:-right-16 md:-right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-[80px] sm:blur-[90px] md:blur-[100px]" />
      <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 -left-10 sm:-left-16 md:-left-20 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary-container/5 rounded-full blur-[90px] sm:blur-[100px] md:blur-[120px]" />

      <div className="max-w-[1440px] mx-auto">

        {/* Top Label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 mt-12 sm:mt-16 md:mt-20 flex-wrap">
          <span className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-surface-container-highest text-primary font-label text-[9px] sm:text-[10px] tracking-widest uppercase font-bold">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
            Knowledge Hub
          </span>

          <span className="text-outline text-[10px] sm:text-xs font-label tracking-widest uppercase">
            Volume 04
          </span>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 xl:top-40">
            <h1 className="font-headline text-xl sm:text-2xl md:text-4xl lg:text-[3.5rem] leading-[1.2] md:leading-[1.1] tracking-[-0.02em] md:tracking-[-0.03em] text-on-surface">
              Being a <span className="font-extrabold">design studio</span> at
              the forefront of{" "}
              <span className="text-primary font-extrabold italic">
                digital transformation
              </span>{" "}
              and product design, we take it upon ourselves to{" "}
              <span className="font-bold">drop some knowledge</span>, share
              insights, let out insider tips, and put our work on full display.
            </h1>

            <div className="mt-6 sm:mt-8 md:mt-12 flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
              <div className="flex -space-x-3 sm:-space-x-4">

                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsCHfsEIVeqLNXTushUP2f2hnpt0y4cm2SVrP7-NZ7OAheo97hcEsrY2mWc5ESJyfgIiMcvY4HSg-w1Fh2WXBl2UxS7SWr_4E4MZG8Moun-bPgy6FnyXZhSJKRFcwY18azoVrrbCZTu9k7QZR663rm8EpvH2ji_GToSQmt-OQn4QRDCRSq1lmfun1B4Q0svE397jhp3kLlKbcHZnKNkLgjt4lUNnnunYpVImGv11X4R6hvKwcv7TPqb_TVc84Krlgjohs7_qgv2AI" />

                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjYuEe8Gaiwcf7WMKTUBsbywo8q045XS06KlSZcisUdR146GyFhebwG9kXHkYjiROu-aDiEAx6lUbX4R29voENQjbWXtovm7HS68D92n3eJx9pTjQ4UdIM0wSzYDSq7Zb5NvAeQowyxMmeAvxhViKyoqCfZ7vZBC5C7dd8YUnqsCwoApsnTCdRL4SnNj7pjFdd42JuKYGQ4TqZY99uVCC3YuRtr1jv-z6ygLynunEB9_VBhf7LXJ5czd92KPOZc9w_Hwppkk-78-E" />

                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-4 border-surface bg-primary text-on-primary flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  +12
                </div>

              </div>

              <p className="text-on-surface-variant font-label text-xs sm:text-sm leading-relaxed max-w-[160px] sm:max-w-[200px]">
                Curated by our multidisciplinary team of specialists.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 md:space-y-10">
            
            <ArticleItem
              category="Future Tech"
              date="04.12.2024"
              title="How to Design An AI Interface Users will Trust in 2026?"
              noBorder
            />

            <FeaturedArticle />

            <ArticleItem
              category="Industry News"
              date="03.15.2024"
              title="Beyond the Screen: Multi-modal experiences in high-end retail."
              noBorder
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwo;