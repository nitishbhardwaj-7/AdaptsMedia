import React from 'react'
import StatCard from './Cards/StatCard'
import Avatar from './Avatar'

const PageFour = () => {
  return (
    <main className="relative pt-32 overflow-hidden mx-auto">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="font-label text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
              Performance Audit 2024
            </span>

            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-on-surface mb-8">
              Quantifying the <span className="text-primary italic">Kinetic</span> Advantage
            </h1>
          </div>

          <div className="max-w-sm pb-2">
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Driving exponential growth through Data-Driven Scale and Global Market Reach.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Big Card */}
          <div className="md:col-span-7">
            <div className="glass-card h-full p-12 flex flex-col justify-between border">

              <div className="flex justify-between">
                <span className="material-symbols-outlined text-primary text-4xl">
                  trending_up
                </span>

                <span className="px-4 py-1 text-[10px] bg-primary/5 border border-primary/10 text-primary rounded-full font-bold uppercase">
                  Benchmark Leader
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-[120px] md:text-[160px] font-extrabold text-primary leading-none">
                  3<span className="text-on-surface">x</span>
                </h3>

                <p className="text-3xl font-bold">Average ROI</p>

                <p className="text-on-surface-variant mt-4 max-w-sm">
                  We consistently outperform market averages using kinetic strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Right small cards */}
          <div className="md:col-span-5 grid gap-6">

            <StatCard icon="rocket_launch" value="1500+" label="Projects Executed" />
            <StatCard icon="public" value="25+" label="Global Markets" />

          </div>

          {/* Clients */}
          <div className="md:col-span-4">
            <div className="p-10">

              <h4 className="text-5xl font-extrabold mb-2">70+</h4>
              <p className="text-sm font-bold uppercase mb-6">Active Clients</p>

              <div className="flex -space-x-4">

                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHvSlYn9WuPyLMy0Wqpf1aQXGe4Ul7GFRb_h-1SopV2zU7MW71H_UcJ3rTB_NHB-g6C3tykG_fNfZxrHcSCcUbM5lxWiI8qfQ_ptoRo6-onurFuFM7skEkcU8WzUe9oJpdIOKcot7RNFSJ1-Ng5C0g4_7Ur74CL1_vZCwAVDliCJjJTdZ_sQ-HLJzWgH5euuAG5PqOS0lez5fSrI4Ic_GfdhrrIv3OH_JULBNqv1k1tK0Bwp6T0Ru5DWx-m7MdHVQMMu4MPyMOMh8" />
                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuAETxZpCv2akEiufcM4jb7xPO66XkOhhqrgKDJTsPO6KiYsq9ryYslA96TEtKaBbBLFiRKa87oc3fz_ayBmGlgGis67KI4U-pFW8xsdliNIEX-gGRs4WEODUOddqG9GH9kXpduiFXcpcrgeIGrVGpA4G2Sas3XhybTWV3SAvxvgF122psEsA-AuV3fc5R6dW-QyXbEhtVvRUTqPkeGgB5LJ0_SrFnpjN3ijCQf5wC4cbxHjAFD4imj3AVhUyPiK87j4FUZ_Q0uQb4I" />
                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrmcEnB-fkGSkyFoPMdOSaHfr9wBWRJ_GGtVnAT0X_s-ysXFdPwgJZtm50-OdmCtg5f1FEx27jt0k1TuOCp6bTkI2woLcauNlsn77hocOKE7gXOYEEzHJXICV7_MF1CBpnwXOGW_jZyiTDIsE-1kqGoFJDk1bREm_QcJS7gaosH6PyoG-PDYt4Df6iXnb3REMwmSb0uDU87DeK0sEkQyCAY7eIzMNLkINL_kYkUEPR4JGvt6cyS5U8KGSFCfTqZRybV98Y9thN-lI" />

                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full text-xs font-bold">
                  +67
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-8 rounded-xl overflow-hidden relative group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLDBFRD6OIu0qI2AMB9BdVBjf76mcMDvXhtEzwPHt7OgW5RrARY9I_NCjPgKxvukpZCCKMyS-vA7NYVEF6fX13d2O8cJnNgO10bUulJzRA5hdzM4RV-jI1tk82y1WeTAJLl5K5E1uti9Wc3BZFDJot987OhaYz1kJ9Kik32BU55_k-IGrhZPZ2cxLxV-MZey9QLvdIBk20MXbHd8Rpi-fDH02dIkm4R3g0Qm72ltRyDXPDx3RLOxBUikmVNMVglcE4hqU-I3OangA"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />

            <div className="absolute bottom-0 p-10 bg-gradient-to-t from-black/80 text-white">
              <h5 className="text-2xl font-bold">Architecting the Future</h5>
              <p className="text-sm opacity-70">
                We define trends through data & creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageFour