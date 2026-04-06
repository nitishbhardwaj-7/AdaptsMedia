
import LogoItem from "./LogoItem";

function PageFive() {
  const logos = [
    "https://res.cloudinary.com/dq4rkqz1l/image/upload/v1694760190/Adaptsmedia%20Tesam/Client%20Logo/Grand-ex-hotel_s9x5as.jpg",
    "https://res.cloudinary.com/dq4rkqz1l/image/upload/v1694760181/Adaptsmedia%20Tesam/Client%20Logo/Braun_uhwh6f.png",
    "https://res.cloudinary.com/dq4rkqz1l/image/upload/v1694760205/Adaptsmedia%20Tesam/Client%20Logo/Redington_wfujoj.png",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLjSxQ2TI0jjDhutyrdIezEpVDmcFdBaAIO5_grfNnZYEZELi339t1to5XglrQx_uFIS_4NcjySNw08HsglCQmJCGLZpFE2jY_Oigla8Gril3qcyc8ow959pE9mROhML9-1RzMIsPNCVm_d_3lTq871X10dJWJ5_xmMUVm_TPmoo6euBXbDgQ9LEGKqj3PniODWbldm2Q8_qhnrN6xZwBjBrWlHGmTkHNq8GW5Av_8MwmbsqvIzq1SBGLX_kY5-d1JTqE4_GKWoi8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_fyxt9EErDSjtep2Ojp3KUgvVDQs-jHzTSNR1Zwh1lsDqQerZNI2Q9sdldffABJabEuamxesjyWZuzLs5L75KyMKBkfPFZIsiB2l_SU6tLA2ur7T8TR_3gpmDuBr2tKOx0hjr5sSzCbaLCcniWjgXMrI6UkZJbuM2A2Pyy0k9Mefug87QlPTgktqHyLzmoeo-YRyPCBjJcQ6bJXq4sRyq8Zk6EzhSeFa4hY5nnWJ556vldw0HL2y-6s4T43xCCoWh9-QJoD5YW2M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCnqoiY_XgERquGEEBL-6h9C6M4aR05_w2F8Eu9mjOUtCiK4XyhIZXEujzDQ1PpTtTyQpbhp9rdzqA1H5HXFVJ7SrO0DFaPU-n2N8nqxIx3CzLb9fMxMA2mJ6rJu_cOl2maXNTdL_nmzp46Ft8uVsqo2Ip07SphD-COaTAW1ofTpxTlxXqPOa7nzPvq1yMP1_vX6Xa2g6NHc6SppEUl0hQqlG8UA4Yrp7UYQVglGK7zJkp8o2wbOYzMCPruAmXYgPKuddB2fB0mSOM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwXiLhCoOGKDFTxj6fQRp3x9trmBz2QnYLpJn5N-VRcYwWDlPvrRPynqwCHFtORA1HAGDqbfPG5M9Ue3sjFvJHRY1o6G0kMgz9Vmv_RIlGHcEUJhzeUgDBFC_LAxgybXLL2Z0h9a8pf7NBzR5uGQOt_ZSFlHqEh49ilnLmDrIeMvG-2eH004Qqd2hVnpAPfnlxcMI7JVCEa-osG8o4f3r1L2jPZOwV5-6y_H6l7fIFpceec77J37tmoCs31fFggLdcRFvHy6sgeD8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDPvzDVfd5PxM9T3bvPI_SUg-7ioHvTKtzoaEU0mUmcVSwNzNV4neSENnh7fIQ_TIXaw-7CAGf0dstsSaCmgTne21JvxJFqJR3Ytr1CROKsV7ixD6RtOabCvEhra8y9lQshoCm5zLBwSbRfGIcvyoQNU5zSzBtaySgi9RodNjv0edXNHceoBvGNpjnEPPgygP9k4VClixyRUGDYDSs8WSm3bIctzNlbK-CbXEHEhEifEA7Ogpk2fdu6cUsz4Pgoq0zRmZleFYrKA10",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBMjO9NGX8Lb6URB2KcugGQDFuzNc6S603jWPZ-3CkNutaVRwj2l_QHJQITXQT1BV8XAD-w-64C3_hTq9wSrkLxW0q5-uKlgOidij_LNKOnL0bG0t6N_zxnE0JMCc7dOrU-HTlZCOVJltI66sOLrLXrYZ8uwA1uoSZyYkbl_F1Hka43xoz1QmdEWuHc4_hM17OVhCBwk2-jBL2MhB1XSuXm1AiiykmPBMrsS1MvOBgWQjJaxqI9yYCCghAiw-jN6ygAw0KkS8RDvLQ",
  ];

  return (

    <div className="max-w-screen-2xl mx-auto mb-24">
<section className="brands-section">

      <h2 className="brands-title">
        Brands We Work <br /> With.
      </h2>

      <div className="marquee-wrapper">
        <div className="marquee-track">

          {/* loop twice for seamless effect */}
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={i} src={logo} />
          ))}

        </div>
      </div>

      {/* Bottom text */}
      <h1 className="font-headline mt-24 text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.03em] text-on-surface">
        Being a <span className="font-extrabold">design studio</span> at the
        forefront of{" "}
        <span className="text-primary font-extrabold italic">
          digital transformation
        </span>{" "}
        and product design, we take it upon ourselves to{" "}
        <span className="font-bold">drop some knowledge</span>, share insights.
      </h1>

    </section>
    </div>
    
  );
}

export default PageFive;