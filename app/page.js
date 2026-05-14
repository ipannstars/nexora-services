export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#05010d',
      padding: '18px',
      fontFamily: 'Arial',
      color: 'white'
    }}>

      <div style={{ maxWidth: '430px', margin: '0 auto' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>

          <div>
            <h1 style={{
              fontSize: '34px',
              fontWeight: 'bold',
              color: '#a855f7',
              margin: 0
            }}>
              NEXORA
            </h1>
            <p style={{ color: '#777', margin: 0 }}>
              SERVICES
            </p>
          </div>

          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1px solid #9333ea',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            👤
          </div>

        </div>

        <div style={cardStyle}>
          <p style={{ color: '#999' }}>Selamat datang kembali,</p>
          <h2 style={{ color: '#a855f7' }}>Nexora User</h2>
        </div>

        <div style={promoStyle}>
          <h2 style={{
            fontSize: '30px',
            marginBottom: '10px'
          }}>
            MENGAPA MEMILIH
            <span style={{ color: '#a855f7' }}> NEXORA SERVICES?</span>
          </h2>

          <p style={{ color: '#bbb' }}>
            Solusi Digital Terbaik Untuk Anda
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '10px',
            marginTop: '20px'
          }}>

            <div style={miniCard}>
              <h3>✔️</h3>
              <p>Aman & Terpercaya</p>
            </div>

            <div style={miniCard}>
              <h3>⚡</h3>
              <p>Proses Cepat</p>
            </div>

            <div style={miniCard}>
              <h3>🎧</h3>
              <p>Support 24/7</p>
            </div>

          </div>
        </div>

        <div style={cardStyle}>
          <p style={{ color: '#aaa' }}>Saldo Anda</p>
          <h1 style={{
            color: '#a855f7',
            fontSize: '40px'
          }}>
            Rp 6.734.556
          </h1>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          marginTop: '16px'
        }}>

          <div style={cardStyle}>
            <h3 style={{ color: '#a855f7' }}>3.765.417</h3>
            <p>Total Dikerjakan</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: '#a855f7' }}>1.915</h3>
            <p>Dalam Proses</p>
          </div>

        </div>

        <div style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '16px',
          borderRadius: '22px',
          background: '#0d0618',
          border: '1px solid #24103b'
        }}>
          <span>🏠</span>
          <span>📋</span>
          <span>❤️</span>
          <span>🕓</span>
          <span>👤</span>
        </div>

      </div>

    </main>
  )
}

const cardStyle = {
  background: '#0c0617',
  border: '1px solid #24103b',
  borderRadius: '22px',
  padding: '20px',
  marginTop: '16px',
  boxShadow: '0 0 30px rgba(168,85,247,0.15)'
}

const promoStyle = {
  background: 'linear-gradient(180deg,#12051f,#0c0617)',
  border: '1px solid #351058',
  borderRadius: '24px',
  padding: '24px',
  marginTop: '20px'
}

const miniCard = {
  background: '#12091f',
  border: '1px solid #341255',
  borderRadius: '18px',
  padding: '14px',
  textAlign: 'center',
  fontSize: '12px'
}
