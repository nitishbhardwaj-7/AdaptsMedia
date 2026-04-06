import React from "react";

const logos = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC1QwoYKl3ot7YKKVJWGjljzronqyhCoDMnZaBoQ4_3fzsNzfxNKjtS8wtVAO1MDlJnTA9elaPASF0ScoxZZ1xW9RkRfww1REGJAVRyIfxgR73ZLh54YQ8I0m27eC_NQUf72kaGUrKsQ9y2JxlLB6jGf0ORPAScEa_0ER7Wh5FcT21zAXJ74Fr3EZatGJIfWVvtDj3nMcjy-A6lJGIStiUzD2bMHWbfufEjEhfy8kC9CmIxJ5d0TyH6LVCJrzHicjDLrdj_ecEQFZs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAdwNstgxSxdF5TzekuQHpoGwQdhik_NYEbUQdC4DnG4b6vSeFHsWgI1rJ5IGt3oHdirMabwQQrjI0YljUsww9BLBQK5uKZZsjwqvTDr3QAHE2YssNygMLzpttVE88Fk2vgToZ7Kc7akfh3wOkyjKwyiZmHi5es6RuquyuLfVN_3ylmUnrTc97JaHOhhktXWg7m3zTw6y-FQ_mfnQNSoEf-XOzuICRCUxUUCsB-_90ARPacOfXBKLA6LpnP1bEHicrR-mpjXbFB2pI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpEAd8QV-Cu04e1yUCd8SpajY_wwvSHy8CrzlWkvyoGhudeEtAb4AkY32bjQ5FHKcGifGxLDewTnOkctxXX5_XpOIlvEoqYPMQkCD-k2fbw3qcrwRVIegY12qUasLLY8ccVFB5t8x4n7PReco05zUFenFKz3HMUbdczgBUEY-XGX5t1lbO2Dr_GvquUEL0wWWTpwhK3pigZ_x2RFn1mq6RpDKwvsKUUmZi270fOre0bslD6bb21e34ryXf907WtoikELEn5uY_IC8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmjshCswPDI-N6pPff3kM5kDxz4TLtcq9SwBuR_nmF2wo6gPDfEKI4W668799QV9lYTAlK6Mc4n8GIYZvGyya2LY7uD9JozJUCbU7_0UfxglaOKbxJBztDpAuccV4Y6p3YdIUM4MdJ3R6_3XYh7M7WpEKBPSlPexC7RZyaHyj4QEHgauolmtQEvmJjFFwOojhE_AeZRjawIY-r8wCcbpVEd2Z_qS2oJ_2oVmMGmoTVlF5c0TKObQjZtY0lu03FUeLpziaI-PNzrvA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcXtIHVJ0huT5WzP1u8Utt6DEegsBqePv0KCJdys3LikK5USwf6qOY4x9NTsrWhQl6c5BXz2tto8q8fc0ATF14ztTI5g70r4xacTw9hU29SEkF4f1uOHdjyZ3-NVLgIIFCHp6Dw8SNGsWqvSctTwF19bNIenS3_hxMfkMO-eAtCDQlWXQOEEit77B2pxM43kpOz-tB8l5tmvmsFsqA07Vo645IQEmE4xArrIaCnPxR7mklDKEb55r_Fy_1yF1VEtVfVF5jydbGSpc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZyMcPtLA_lglctFwRPRa9IM_7LKOM8orl3DTFm1VvdD7YHuik357UgF9fkKLDU8lAMgpKkDAlPt_pkLd-RfWnHaWssJTdCREgMUvvtGq1G30kT7NRscYAEARnriVPTU-WP0K1PYda-H8WaAtJr6LKavp8e7-Go_vyah5oIqEoli8OQiH6c5Xfp-VKPr579PhYVMfUls6t8Y_YhEbgAatvLOapPN2XhVmFG_9q9me8oXq-GxhZtx8zwbBSVxP_YKxL_n4H9Pjoo3Q",
];

const TalentNetwork = () => {
  return (
    <section className="mb-32">
      
      {/* Title */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[1px] flex-grow bg-surface-container-highest"></div>
        <h2 className="font-bold text-2xl tracking-tight px-4">
          TALENT NETWORK
        </h2>
        <div className="h-[1px] w-12 bg-primary"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {logos.map((src, i) => (
          <div
            key={i}
            className="glass-card h-32 flex items-center justify-center p-6 rounded-xl border border-outline-variant/10 hover:scale-105 transition"
          >
            <img
              src={src}
              alt="brand logo"
              className="max-h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default TalentNetwork;