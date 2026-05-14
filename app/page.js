import Image from "next/image";

export default function Home() {
  return (
    <main className="app">
      {/* HEADER */}
      <div className="header">
        <div className="logoWrap">
          <img
            src="https://i.imgur.com/6IUbEMM.png"
            className="logo"
          />

          <div>
            <h1>NEXORA</h1>
            <p>SERVICES</p>
          </div>
        </div>

        <div className="headerIcons">
          <div className="circle">☾</div>
          <div className="circle">◯</div>
        </div>
      </div>

      {/* WELCOME */}
      <div className="welcome">
        <div className="userIcon">👤</div>

        <div>
          <span>Selamat datang kembali,</span>
          <h2>Nexora User</h2>
        </div>
      </div>

      {/* PROMO */}
      <div className="sectionTitle">
        <div>📢 Promosi</div>
        <span>Lihat Semua ›</span>
      </div>

      <div className="promoCard">
        <img
          src="https://i.imgur.com/T7sQqQp.jpeg"
          className="banner"
        />

        <div className="sliderDots">
          <div className="activeDot"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* SALDO */}
      <div className="saldoCard">
        <div className="saldoLeft">
          <div className="saldoIcon">👛</div>

          <div>
            <span>Saldo Anda</span>
            <h2>Rp 6.734.556</h2>
            <p>Saldo dapat digunakan untuk layanan</p>
          </div>
        </div>

        <div className="arrow">›</div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="statCard">
          <div className="statIcon">🚀</div>
          <h3>3.765.417</h3>
          <p>Order Selesai</p>
        </div>

        <div className="statCard">
          <div className="statIcon">⏳</div>
          <h3>1.915</h3>
          <p>Order Sedang Dikerjakan</p>
        </div>
      </div>

      {/* BERITA */}
      <div className="sectionTitle">
        <div>📰 Berita Terbaru</div>
        <span>Lihat Semua ›</span>
      </div>

      <div className="newsCard">
        <img
          src="https://i.imgur.com/6IUbEMM.png"
          className="newsImage"
        />

        <div>
          <h4>Nexora Services Hadir dengan Layanan Terbaik</h4>

          <p>
            Kami terus berkomitmen memberikan layanan digital terbaik untuk
            pertumbuhan bisnis anda.
          </p>

          <small>2 hari yang lalu</small>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="active">⌂<span>Beranda</span></div>
        <div>☰<span>Pesanan</span></div>
        <div>♡<span>Layanan</span></div>
        <div>◷<span>Riwayat</span></div>
        <div>◉<span>Akun</span></div>
      </div>
    </main>
  );
}
