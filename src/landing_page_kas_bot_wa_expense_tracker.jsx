import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  Upload,
  PieChart,
  Shield,
  Zap,
  ArrowRight,
  FileSpreadsheet,
  Users,
  Wallet,
} from "lucide-react";

export default function KasBotLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-emerald-500 grid place-items-center text-white font-bold">K</div>
            <span className="font-semibold tracking-tight">KasBot</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fitur" className="hover:text-emerald-600">Fitur</a>
            <a href="#cara" className="hover:text-emerald-600">Cara Pakai</a>
            <a href="#harga" className="hover:text-emerald-600">Harga</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          </nav>
          <a href="#mulai" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-emerald-700">
            Coba Gratis <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Catat Pengeluaran via <span className="text-emerald-600">WhatsApp</span>.
              <br />Tanpa ribet. Tanpa rumus.
            </motion.h1>
            <p className="mt-5 text-slate-600 text-base md:text-lg">
              Cukup chat: <span className="font-semibold">"makan siang 37k di warteg"</span>. KasBot otomatis rekam, kategorikan, dan bikin laporan. Cocok untuk personal dan UMKM yang maunya simpel.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#mulai" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 text-sm md:text-base font-semibold shadow-sm hover:bg-emerald-700">
                Chat di WhatsApp <MessageCircle size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-700 px-5 py-3 text-sm md:text-base font-semibold shadow border border-emerald-200 hover:bg-emerald-50">
                Lihat Demo <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2"><Shield size={14}/> Data dienkripsi</div>
              <div className="flex items-center gap-2"><Zap size={14}/> Respon cepat</div>
              <div className="flex items-center gap-2"><FileSpreadsheet size={14}/> Export Excel/CSV</div>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.5, delay:0.1}} className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              {/* Mock WA chat card */}
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-800 text-white text-sm px-4 py-2">WhatsApp • KasBot</div>
                <div className="bg-slate-50 p-4 space-y-3 text-sm">
                  <div className="max-w-[80%] bg-white border border-slate-200 rounded-2xl px-3 py-2 shadow-sm">makan siang 37k di warteg kemarin</div>
                  <div className="max-w-[85%] ml-auto bg-emerald-600 text-white rounded-2xl px-3 py-2 shadow-sm">
                    Tercatat: Rp37.000 | Food | 21 Sep | Catatan: warteg
                  </div>
                  <div className="max-w-[90%] ml-auto bg-white border border-slate-200 rounded-2xl px-3 py-2 shadow-sm">
                    Saldo minggu ini?
                  </div>
                  <div className="max-w-[85%] bg-white border border-slate-200 rounded-2xl px-3 py-2 shadow-sm">
                    Ringkasan 15–21 Sep: Pengeluaran Rp420.000, Pemasukan Rp2.500.000, Netto Rp2.080.000.
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm w-60">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 grid place-items-center text-emerald-700"><PieChart size={20}/></div>
                  <div>
                    <div className="text-sm font-semibold">Dashboard</div>
                    <div className="text-xs text-slate-500">Grafik kategori & cashflow</div>
                  </div>
                </div>
                <div className="mt-3 h-16 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-xl"/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FITUR */}
      <section id="fitur" className="py-16 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Fitur yang bikin hidup lebih simpel</h2>
          <p className="mt-2 text-slate-600">Dirancang untuk pengguna awam: chat → tercatat. Tidak perlu belajar akuntansi.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Feature icon={<MessageCircle size={18}/>} title="Chat-First">
              Catat via WhatsApp dengan bahasa sehari-hari. Bot paham angka, tanggal, dan kategori.
            </Feature>
            <Feature icon={<Upload size={18}/>} title="Scan Struk">
              Foto struk atau tulisan tangan. Sistem bantu ekstrak totalnya.
            </Feature>
            <Feature icon={<PieChart size={18}/>} title="Laporan Otomatis">
              Grafik kategori, tren mingguan, dan saldo. Bisa export ke Excel/CSV.
            </Feature>
            <Feature icon={<Users size={18}/>} title="Multi-User (UMKM)">
              Banyak nomor WA, satu buku kas perusahaan. Aman dan tertata.
            </Feature>
            <Feature icon={<Wallet size={18}/>} title="Limit & Kontrol Biaya">
              Kuota transaksi & percakapan jelas. Tidak ada biaya tersembunyi.
            </Feature>
            <Feature icon={<Shield size={18}/>} title="Privasi & Keamanan">
              Data terenkripsi. Kamu pegang kendali penuh atas ekspor data.
            </Feature>
          </div>
        </div>
      </section>

      {/* CARA PAKAI */}
      <section id="cara" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Cara pakai (3 langkah)</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Step number={1} title="Daftar & Verifikasi">
              Masukkan nomor WA kamu, pilih paket. Bot aktif otomatis dalam hitungan menit.
            </Step>
            <Step number={2} title="Chat & Catat">
              Kirim pesan: <span className="font-semibold">#rekap -37k food warteg</span> atau kalimat bebas. Bot mencatat.
            </Step>
            <Step number={3} title="Lihat Laporan">
              Buka dashboard untuk grafik & ekspor. Ringkasan mingguan dikirim via WA.
            </Step>
          </div>
        </div>
      </section>

      {/* HARGA */}
      <section id="harga" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Harga sederhana, tanpa drama</h2>
          <p className="mt-2 text-slate-600">Pilih sesuai kebutuhan. Upgrade kapan saja.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PricingCard
              name="Personal"
              price="Rp40.000"
              period="/bulan"
              badge="Hemat"
              features={[
                "1 akun WhatsApp",
                "200 transaksi/bulan",
                "30 percakapan WA/bulan",
                "Export CSV/Excel",
                "Ringkasan mingguan via WA",
              ]}
              cta="Mulai Personal"
            />
            <PricingCard
              name="UMKM"
              price="Rp119.000"
              period="/bulan"
              badge="Paling Populer"
              highlighted
              features={[
                "5 akun WhatsApp",
                "1.500 transaksi/bulan",
                "120 percakapan WA/bulan",
                "Export CSV/Excel",
                "Dashboard multi-user",
                "Mode grup (prefix)",
              ]}
              cta="Pilih UMKM"
            />
            <PricingCard
              name="Pro"
              price="Rp349.000"
              period="/bulan"
              features={[
                "15 akun WhatsApp",
                "5.000 transaksi/bulan",
                "300 percakapan WA/bulan",
                "Integrasi (CSV ke Jurnal)",
                "Backup & audit log",
                "Support prioritas",
              ]}
              cta="Naik ke Pro"
            />
          </div>
          <div className="mt-6 text-center text-sm text-slate-500">
            Butuh Enterprise? Hubungi kami untuk harga kontrak & integrasi khusus.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pertanyaan yang sering ditanyakan</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FAQ q="Apakah harus install aplikasi?" a="Tidak. Cukup pakai WhatsApp yang sudah ada. Semua pencatatan dilakukan lewat chat." />
            <FAQ q="Bagaimana kalau dipakai beberapa orang?" a="Paket UMKM dan Pro mendukung multi-user. Semua transaksi masuk ke satu buku kas perusahaan." />
            <FAQ q="Bagaimana cara hemat biaya?" a="Di grup, gunakan prefix #rekap. Sistem hanya proses pesan ber-prefix, sisanya diabaikan sehingga kuota AI & WA lebih hemat." />
            <FAQ q="Apakah data saya aman?" a="Ya. Data disimpan terenkripsi, bisa diunduh (export) kapan saja. Kamu tetap pemilik data." />
            <FAQ q="Apakah bisa ekspor ke akuntansi?" a="Bisa export CSV dan template siap impor ke software akuntansi populer. Integrasi penuh tersedia di paket Pro." />
            <FAQ q="Bisakah ganti paket kapan saja?" a="Bisa. Upgrade/downgrade kapan pun lewat dashboard." />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="mulai" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Siap catat keuangan tanpa pusing?</h3>
          <p className="mt-3 text-slate-600">Mulai sekarang. Gratis uji coba 7 hari. Tidak perlu kartu kredit.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 text-base font-semibold shadow-sm hover:bg-emerald-700">
              Chat di WhatsApp <MessageCircle size={18} />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-white text-emerald-700 px-5 py-3 text-base font-semibold shadow border border-emerald-200 hover:bg-emerald-50">
              Lihat Demo <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} KasBot. Semua hak dilindungi.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-emerald-700" href="#">Kebijakan Privasi</a>
            <a className="hover:text-emerald-700" href="#">Syarat Layanan</a>
            <a className="hover:text-emerald-700" href="#">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-emerald-100 grid place-items-center text-emerald-700">{icon}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-slate-600">{children}</p>
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white grid place-items-center font-bold">{number}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-slate-600">{children}</p>
    </div>
  );
}

function PricingCard({ name, price, period, features = [], highlighted = false, badge, cta }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm bg-white ${highlighted ? "border-emerald-300 ring-2 ring-emerald-100" : "border-slate-200"}`}>
      {badge && (
        <div className="text-xs inline-flex px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{badge}</div>
      )}
      <div className="mt-2 text-lg font-semibold">{name}</div>
      <div className="mt-1 flex items-end gap-1">
        <div className="text-3xl font-extrabold">{price}</div>
        <div className="text-slate-500 text-sm">{period}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2"><Check size={16} className="text-emerald-600 mt-0.5"/> <span>{f}</span></li>
        ))}
      </ul>
      <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-emerald-700">
        {cta} <ArrowRight size={16} />
      </a>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="font-semibold">{q}</div>
      <p className="mt-2 text-sm text-slate-600">{a}</p>
    </div>
  );
}
