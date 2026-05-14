export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg,#04010a,#090014,#04010a)',
      color: 'white',
      fontFamily: 'Arial',
      padding: '18px'
    }}>

      <div style={{ maxWidth: '430px', margin: '0 auto' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '22px'
        }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '18px',
              background: 'linear-gradient(180deg,#7c3aed,#a855f7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '28px',
              boxShadow: '0 0 25px rgba(168,85,247,0.6)'
            }}>
              N
            </div>

            <div>
              <h1 style={{
                margin: 0,
                fontSize: '30px',
                color: '#d8b4fe',
                letterSpacing: '1px'
              }}>
                NEXORA
              </h1>

              <p style={{
                margin: 0,
                color: '#888',
                letterSpacing: '3px'
              }}>
                SERVICES
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={topIcon}>🌙</div>
            <div style={topIcon}>👤</div>
          </div>
        </div>

        <div style={welcomeCard}>
          <div style={{
            width: '62px',
            height: '62px',
            borderRadius: '18px',
            background: 'linear-gradient(180deg,#7c3aed,#9333ea)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '28px',
            boxShadow: '0 0 20px rgba(168,85,247,0.5)'
          }}>
            👤
          </div>

          <div>
            <p style={{ color: '#aaa', marginBottom: '6px' }}>
              Selamat datang kembali,
            </p>

            <h2 style={{
              margin: 0,
              color: '#c084fc',
              fontSize: '30px'
            }}>
              Nexora User
            </h2>
          </div>
        </div>

        <div style={sectionTitleWrap}>
          <h3 style={sectionTitle}>📢 Promosi</h3>
          <span style={seeAll}>Lihat Semua ›</span>
        </div>

        <div style={bannerCard}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top right,rgba(168,85,247,0.4),transparent 35%)'
          }} />

          <h1 style={{
            fontSize: '22px',
            marginBottom: '8px',
            zIndex: 2
          }}>
            MENGAPA MEMILIH
            <span style={{ color: '#a855f7' }}> NEXORA SERVICES?</span>
          </h1>

          <p style={{ color: '#ccc', zIndex: 2 }}>
            Solusi Digital Terbaik Untuk Anda
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '10px',
            marginTop: '24px',
            zIndex: 2,
            width: '100%'
          }}>

            <div style={featureCard}>
              <div style={featureIcon}>✔️</div>
              <h4>Aman & Terpercaya</h4>
              <p>Keamanan data anda adalah prioritas utama kami.</p>
            </div>

            <div style={featureCard}>
              <div style={featureIcon}>⚡</div>
              <h4>Proses Cepat</h4>
              <p>Layanan dikerjakan dengan cepat dan tepat waktu.</p>
            </div>

            <div style={featureCard}>
              <div style={featureIcon}>🎧</div>
              <h4>Support 24/7</h4>
              <p>Tim kami siap membantu anda kapan saja.</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '18px'
          }}>
            <div style={dotActive}></div>
            <div style={dot}></div>
            <div style={dot}></div>
            <div style={dot}></div>
          </div>
        </div>

        <div style={walletCard}>
          <div style={walletIcon}>💳</div>

          <div style={{ flex: 1 }}>
            <p style={{ color: '#bbb', marginBottom: '6px' }}>Saldo Anda</p>

            <h1 style={{
              margin: 0,
              color: '#a855f7',
              fontSize: '42px'
            }}>
              Rp 6.734.556
            </h1>

            <p style={{ color: '#888' }}>
              Saldo dapat digunakan untuk layanan di Nexora Services
            </p>
          </div>

          <div style={{ color: '#a855f7', fontSize: '30px' }}>›</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          marginTop: '16px'
        }}>

          <div style={statsCard}>
            <div style={statsIcon}>🚀</div>
            <div>
              <h2 style={statsNumber}>3.765.417</h2>
              <p style={statsText}>Order Selesai</p>
            </div>
          </div>

          <div style={statsCard}>
            <div style={statsIcon}>⏳</div>
            <div>
              <h2 style={statsNumber}>1.915</h2>
              <p style={statsText}>Order Diproses</p>
            </div>
          </div>
        </div>

        <div style={sectionTitleWrap}>
          <h3 style={sectionTitle}>📰 Berita Terbaru</h3>
          <span style={seeAll}>Lihat Semua ›</span>
        </div>

        <div style={newsCard}>
          <div style={newsImage}>N</div>

          <div>
            <h3 style={{ marginTop: 0 }}>
              Nexora Services Hadir dengan Layanan Terbaik
            </h3>

            <p style={{ color: '#999' }}>
              Kami terus berkomitmen memberikan layanan digital terbaik untuk pertumbuhan bisnis anda.
            </p>

            <p style={{ color: '#777', fontSize: '13px' }}>
              2 hari yang lalu
            </p>
          </div>
        </div>

        <div style={bottomNav}>
          <div style={navItemActive}>🏠<span>Beranda</span></div>
          <div style={navItem}>📋<span>Pesanan</span></div>
          <div style={navItem}>❤️<span>Layanan</span></div>
          <div style={navItem}>🕓<span>Riwayat</span></div>
          <div style={navItem}>👤<span>Akun</span></div>
        </div>

      </div>
    </main>
  )
}

const topIcon = {
  width: '46px',
  height: '46px',
  borderRadius: '50%',
  border: '1px solid #6b21a8',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#0b0615',
  boxShadow: '0 0 18px rgba(168,85,247,0.25)'
}

const welcomeCard = {
  background: '#0b0615',
  border: '1px solid #26113b',
  borderRadius: '24px',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  boxShadow: '0 0 30px rgba(168,85,247,0.12)'
}

const sectionTitleWrap = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '26px',
  marginBottom: '14px'
}

const sectionTitle = {
  margin: 0,
  fontSize: '22px'
}

const seeAll = {
  color: '#a855f7'
}

const bannerCard = {
  background: 'linear-gradient(180deg,#10051d,#0a0513)',
  border: '1px solid #341255',
  borderRadius: '28px',
  padding: '24px',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 0 40px rgba(168,85,247,0.2)'
}

const featureCard = {
  background: 'rgba(15,7,25,0.95)',
  border: '1px solid #351058',
  borderRadius: '18px',
  padding: '14px',
  textAlign: 'center'
}

const featureIcon = {
  fontSize: '28px',
  marginBottom: '8px'
}

const dotActive = {
  width: '22px',
  height: '8px',
  borderRadius: '20px',
  background: '#a855f7'
}

const dot = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: '#444'
}

const walletCard = {
  marginTop: '20px',
  background: '#0b0615',
  border: '1px solid #26113b',
  borderRadius: '24px',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  boxShadow: '0 0 35px rgba(168,85,247,0.14)'
}

const walletIcon = {
  width: '78px',
  height: '78px',
  borderRadius: '20px',
  background: 'linear-gradient(180deg,#7c3aed,#9333ea)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '34px'
}

const statsCard = {
  background: '#0b0615',
  border: '1px solid #26113b',
  borderRadius: '22px',
  padding: '18px',
  display: 'flex',
  gap: '14px',
  alignItems: 'center'
}

const statsIcon = {
  width: '52px',
  height: '52px',
  borderRadius: '16px',
  background: 'linear-gradient(180deg,#7c3aed,#9333ea)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px'
}

const statsNumber = {
  margin: 0,
  color: '#a855f7'
}

const statsText = {
  color: '#999',
  marginBottom: 0
}

const newsCard = {
  background: '#0b0615',
  border: '1px solid #26113b',
  borderRadius: '24px',
  padding: '18px',
  display: 'flex',
  gap: '16px',
  marginBottom: '120px'
}

const newsImage = {
  minWidth: '110px',
  height: '110px',
  borderRadius: '20px',
  background: 'linear-gradient(180deg,#7c3aed,#4c1d95)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '54px',
  fontWeight: 'bold'
}

const bottomNav = {
  position: 'fixed',
  bottom: '12px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '92%',
  maxWidth: '430px',
  background: '#0a0612',
  border: '1px solid #26113b',
  borderRadius: '28px',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '14px 10px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 0 30px rgba(168,85,247,0.18)'
}

const navItem = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  color: '#888',
  fontSize: '13px'
}

const navItemActive = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  color: '#a855f7',
  fontSize: '13px'
            }
