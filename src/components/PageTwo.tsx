import React from 'react'
import Avatar from './Avatar'
import ArticleItem from './ArticleItem'
import FeaturedArticle from './FeaturedArticle'

const PageTwo = () => {
  return (
    <div className="relative overflow-hidden mb-32">

      {/* Background Blurs */}
      <div className="absolute top-40 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px]" />

      <div className="max-w-[1440px] mx-auto">

        {/* Top Label */}
        <div className="flex items-center gap-4 mb-8 mt-20">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-surface-container-highest text-primary font-label text-[10px] tracking-widest uppercase font-bold">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
            Knowledge Hub
          </span>

          <span className="text-outline text-xs font-label tracking-widest uppercase">
            Volume 04
          </span>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="lg:col-span-6 sticky top-40">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.03em] text-on-surface">
              Being a <span className="font-extrabold">design studio</span> at
              the forefront of{" "}
              <span className="text-primary font-extrabold italic">
                digital transformation
              </span>{" "}
              and product design, we take it upon ourselves to{" "}
              <span className="font-bold">drop some knowledge</span>, share
              insights, let out insider tips, and put our work on full display.
            </h1>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
            

                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsCHfsEIVeqLNXTushUP2f2hnpt0y4cm2SVrP7-NZ7OAheo97hcEsrY2mWc5ESJyfgIiMcvY4HSg-w1Fh2WXBl2UxS7SWr_4E4MZG8Moun-bPgy6FnyXZhSJKRFcwY18azoVrrbCZTu9k7QZR663rm8EpvH2ji_GToSQmt-OQn4QRDCRSq1lmfun1B4Q0svE397jhp3kLlKbcHZnKNkLgjt4lUNnnunYpVImGv11X4R6hvKwcv7TPqb_TVc84Krlgjohs7_qgv2AI" />

                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjYuEe8Gaiwcf7WMKTUBsbywo8q045XS06KlSZcisUdR146GyFhebwG9kXHkYjiROu-aDiEAx6lUbX4R29voENQjbWXtovm7HS68D92n3eJx9pTjQ4UdIM0wSzYDSq7Zb5NvAeQowyxMmeAvxhViKyoqCfZ7vZBC5C7dd8YUnqsCwoApsnTCdRL4SnNj7pjFdd42JuKYGQ4TqZY99uVCC3YuRtr1jv-z6ygLynunEB9_VBhf7LXJ5czd92KPOZc9w_Hwppkk-78-E" />

                <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary text-on-primary flex items-center justify-center text-xs font-bold">
                  +12
                </div>

              </div>

              <p className="text-on-surface-variant font-label text-sm leading-relaxed max-w-[200px]">
                Curated by our multidisciplinary team of specialists.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            
            <ArticleItem
              category="Future Tech"
              date="04.12.2024"
              title="How to Design An AI Interface Users will Trust in 2026?"
            />

            <FeaturedArticle />

            <ArticleItem
              category="Industry News"
              date="03.15.2024"
              title="Beyond the Screen: Multi-modal experiences in high-end retail."
            />

            {/* <ArticleItem
              category="Visual Culture"
              date="02.22.2024"
              title="Typography as Architecture: Structural font usage in modern UI."
              noBorder
            /> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwo