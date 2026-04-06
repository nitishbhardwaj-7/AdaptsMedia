import React from "react";

const logos = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDvR4FGvXIGkgj44opuPes9yj-KFdTaAu5zaFxTu3BT-V1O0kCmaIoIuY9n9_8XxHOxHDpyT-YhZexbWiZ5OpotF_G32zjAHC7JWTJDByJ395QGbhHb9lQCsbL2u7n8FxxBo_n1xsYYmWMxliJ2RQDs4JN9itxxQDhF35c94I2kaaxvGX2u9gPGlxmsdYKwwCfRI0c_KMeYP4d-n7Rk3E59P-sZXNeX8Xs-ToaU43OQZK8U5M6XasrruOemxR-NKnoguz4Mmr3EFn0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDteBDA0u13kLoOz7xnStVpbznf66HFQit9bkSDx4K-NTq7iikxJqH2XcaitOkd-BigHDqfAuNTb6uP5LT8fotBOttEa-eBhH-42y0iDUSBUo4Nq_rjzL_fYPxqh7Kctg-J8TkaeBv4Tvivubq3PhpNHneNs2B-PGjO2Eq-TxOJRVRCOrocneKoMGomb02R3RPYndwdUT_WJaQzg6gFxqGANVYqlmVIeMtZ0EKpLy0wu9deFP_7Ph5YEwvW5LqYMh68eA-rh37SVuU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBz8dZokebxtHxKVJ_F-5z3v-WgdjTQ-k0plmxvHYXaYQKioW6GMTd-0IJtGgDObRw-irMpkl_w_EsS7WegbxR6qUOBHoEj0Bf9ZayS6W5AdRZnIjcRbXgV94vXgC5_a7uowka90z7ObIY7BWf-hyL8LSzZnSb75fhuQV_vn3uVuqgQ561i0RWPZ-KdKhs13OoD-3e71p-aKluu3xWSNJ0YaMtxVvXTO9ayMjFH0WiRFF9leyytBpjBXQ5_UHzIw7HYyzbtmFpxI1o",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_3GT5EzSU4Rsxx8gfg_bfJDsVrZD8ux80k37pE7he6ymufKZUGRMYL8ipsy6-Br_gRZ_XLk3gclE9vy3iZYkTQuwxr4fPv1MEtIlTbf1ycvsu_qOwhVos05FEUYuJX9sqsaI5ipO_cwQqstx7QQf8FhJu0DD1rhLy8WwZ5dGT5C1Sxo18I4Q_GMqj8iDApSXXJuf3feRvhtZiIsWhrAFU-hvpC_MIPGU3Xno25y3mCxfDeFImhH-UWVC2DIYdOelOXk-FHZrrC0U",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCacZj_Se67vpIF1jaXYE4eR8vMWViw86O8SJTof7atrtKLBUONT_LkXGlnaI9ZsmLuKIKA-qFEhSsWwGj4I0-F0ZhlVqCmAOgNjsZzOFcv4p5c0l25fpgX_Qm0evkBgZpZcyElGiNzZdsh01gi_Z6IqspnVDaI2g_XiJicwRGpMwagN7bEiOXlaLZimk5JvMmUiEiA-8uicK_nVaKLlIwotu23_LS3tWCyOVlHQpVQxzyFxjyra8hy4gL5uMKPWHDcCSil7j3s4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4C6ANN6O6EU79ZQzp2ekdwzwd1C9OXkDkvhwq_T90vcqSUeh7qRmCNXeZL6AxouDRn6Erz-QGBBxQsoKe4TRwYePBJMRQUXlfCls-mzVfby3tk8EyR0csL6MxBXOQwyB1Wk-3VMryBwZdaDD-dZqbDHtJT73GBfpM-KClkUNBSPDKS-xyeEKtwydbvta1EqZ_alhpYdtp_JOTQK_1wDYy-RoxwOGpa9PR_avpOKyTKzUrLUaSAqi7zH98ti9kjm85Ggtabjkyz7g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3vVuVp-JCLmfkP4NY4WMoWyYYdMh3HejuL6HTT1KIgrXLHvoBMK44ooHbMK_d_czlOsoNMQz9K8Wzs1S6Dt9rr59hnBL8TYN0oc5Oci-lvm3NaWbUWs5NrKjCekolR87APN_2H1HqU22O_Vd-MB9jFME6SxFywwVG8yFgEnQls5N2l22E5ts-FhrisW_26KaS2qkr6UEFAR_zn272KRRXjli4pA1RN_NniWuXE72qO3FcuMK2UJFf-b2g-BVSCdCEKiae40XCUAs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBC5Fuy4dYjjctINMMy8Rz-Lt5YKzRZHzpsmeFDGR379ceA0xGOB9xYRdDDsaEEO669XkXBebz9dUOXgk22wsavnrh2yIDWj-bw7Ru-omUT_3QOUSUU7YeHzuyLDwJDdn-N35VwCtC7sgWkcnbkc2T_yCgiOlfR5U_QsJYXXcW-58Mj8hmJFtMf9JSJC0X1kIO3d3TWmZ0NmpILDNw7ptsKT7rtA6Sco-GGvJuKJbEdc_jQZ3qoIDFhiFFP4EXfAphr9kVTSmni9Kk",
];

const MeasurementAnalytics = () => {
  return (
    <section className="mb-32">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <h2 className="font-bold text-5xl tracking-tighter">
          MEASUREMENT <span className="text-primary">&</span> ANALYTICS
        </h2>

        <p className="text-sm uppercase tracking-[0.3em] opacity-40">
          Precision Engineering
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-outline-variant/20 rounded-2xl overflow-hidden shadow-2xl shadow-on-surface/5">
        {logos.map((src, i) => (
          <div
            key={i}
            className="bg-surface hover:bg-primary/5 transition-colors p-12 flex items-center justify-center border border-outline-variant/20"
          >
            <img
              src={src}
              alt="logo"
              className="h-8 object-contain"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default MeasurementAnalytics;