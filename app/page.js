export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1a0033 0%, #05010b 45%, #020204 100%)",
        color: "white",
        fontFamily: "Arial",
        padding: "18px",
        maxWidth: "430px",
        margin: "0 auto",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="https://files.catbox.moe/7l8m6p.png"
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 0 20px #8b2cff",
            }}
          />

          <div>
            <div
              style={{
                fontSize: "42px",
                fontWeight: "bold",
                lineHeight: "38px",
                color: "#c56fff",
              }}
            >
              NEXORA
            </div>

            <div
              style={{
                letterSpacing: "5px",
                fontSize: "15px",
                opacity: 0.7,
              }}
            >
              SERVICES
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid #8f35ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              boxShadow: "0 0 15px #651fff",
            }}
          >
            🌙
          </div>

          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid #8f35ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              boxShadow: "0 0 15px #651fff",
            }}
          >
            👤
          </div>
        </div>
      </div>

      {/* WELCOME */}
      <div
        style={{
          background: "rgba(10,10,20,0.9)",
          borderRadius: "24px",
          padding: "18px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "20px",
          border: "1px solid rgba(170,70,255,0.25)",
          boxShadow: "0 0 35px rgba(128,0,255,0.15)",
        }}
      >
        <div
          style={{
            width: "78px",
            height: "78px",
            borderRadius: "22px",
            background: "linear-gradient(180deg,#b155ff,#6e1cff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "42px",
            boxShadow: "0 0 25px #7b2dff",
          }}
        >
          👤
        </div>

        <div>
          <div style={{ opacity: 0.7, fontSize: "20px" }}>
            Selamat datang kembali,
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "#b95fff",
              fontWeight: "bold",
              marginTop: "6px",
            }}
          >
            Nexora User
          </div>
        </div>
      </div>

      {/* PROMOSI */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "14px",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          📢 Promosi
        </div>

        <div style={{ color: "#b95fff", fontSize: "20px" }}>
          Lihat Semua ›
        </div>
      </div>

      {/* BANNER */}
      <div
        style={{
          background:
            "linear-gradient(145deg,#090011,#180028,#090011,#2a0052)",
          borderRadius: "28px",
          padding: "24px",
          marginBottom: "22px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(160,60,255,0.3)",
          boxShadow: "0 0 35px rgba(120,0,255,0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-20px",
            width: "200px",
            height: "200px",
            background: "rgba(170,70,255,0.18)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          MENGAPA MEMILIH{" "}
          <span style={{ color: "#b95fff" }}>NEXORA SERVICES?</span>
        </div>

        <div
          style={{
            opacity: 0.75,
            marginBottom: "24px",
            fontSize: "17px",
          }}
        >
          Solusi Digital Terbaik Untuk Anda
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "14px",
          }}
        >
          {[
            ["🛡️", "Aman & Terpercaya"],
            ["⚡", "Proses Cepat"],
            ["🎧", "Support 24/7"],
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(0,0,0,0.35)",
                borderRadius: "22px",
                padding: "20px 14px",
                textAlign: "center",
                border: "1px solid rgba(170,70,255,0.2)",
              }}
            >
              <div style={{ fontSize: "38px", marginBottom: "12px" }}>
                {item[0]}
              </div>

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                {item[1]}
              </div>

              <div style={{ opacity: 0.7, fontSize: "14px" }}>
                Layanan terbaik dengan kualitas premium.
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "18px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "10px",
              borderRadius: "999px",
              background: "#b95fff",
            }}
          />

          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#555",
            }}
          />

          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#555",
            }}
          />

          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#555",
            }}
          />
        </div>
      </div>

      {/* SALDO */}
      <div
        style={{
          background: "rgba(10,10,20,0.92)",
          borderRadius: "26px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "18px",
          border: "1px solid rgba(160,60,255,0.2)",
        }}
      >
        <div style={{ display: "flex", gap: "14px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "linear-gradient(180deg,#b155ff,#7422ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
            }}
          >
            👛
          </div>

          <div>
            <div style={{ opacity: 0.7, fontSize: "18px" }}>
              Saldo Anda
            </div>

            <div
              style={{
                color: "#b95fff",
                fontSize: "42px",
                fontWeight: "bold",
                marginTop: "6px",
              }}
            >
              Rp 6.734.556
            </div>

            <div style={{ opacity: 0.6, marginTop: "6px" }}>
              Saldo dapat digunakan untuk layanan
            </div>
          </div>
        </div>

        <div style={{ fontSize: "38px", color: "#b95fff" }}>›</div>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        {[
          ["🚀", "3.765.417", "Order Selesai"],
          ["⏳", "1.915", "Order Sedang Dikerjakan"],
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(10,10,20,0.92)",
              borderRadius: "24px",
              padding: "20px",
              border: "1px solid rgba(160,60,255,0.2)",
            }}
          >
            <div style={{ fontSize: "38px", marginBottom: "12px" }}>
              {item[0]}
            </div>

            <div
              style={{
                color: "#b95fff",
                fontSize: "34px",
                fontWeight: "bold",
              }}
            >
              {item[1]}
            </div>

            <div style={{ opacity: 0.65, marginTop: "6px" }}>{item[2]}</div>
          </div>
        ))}
      </div>

      {/* BERITA */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "14px",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          📰 Berita Terbaru
        </div>

        <div style={{ color: "#b95fff", fontSize: "20px" }}>
          Lihat Semua ›
        </div>
      </div>

      <div
        style={{
          background: "rgba(10,10,20,0.92)",
          borderRadius: "24px",
          padding: "16px",
          display: "flex",
          gap: "14px",
          border: "1px solid rgba(160,60,255,0.2)",
          marginBottom: "100px",
        }}
      >
        <img
          src="https://files.catbox.moe/7l8m6p.png"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "18px",
            objectFit: "cover",
          }}
        />

        <div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "8px",
            }}
          >
            Nexora Services Hadir dengan Layanan Terbaik
          </div>

          <div style={{ opacity: 0.7, lineHeight: "24px" }}>
            Kami terus berkomitmen memberikan layanan digital terbaik untuk
            pertumbuhan bisnis anda.
          </div>

          <div style={{ opacity: 0.5, marginTop: "12px" }}>
            2 hari yang lalu
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "430px",
          background: "rgba(5,5,10,0.97)",
          borderTop: "1px solid rgba(160,60,255,0.2)",
          display: "flex",
          justifyContent: "space-around",
          padding: "14px 0",
          backdropFilter: "blur(20px)",
        }}
      >
        {[
          ["🏠", "Beranda"],
          ["📋", "Pesanan"],
          ["❤️", "Layanan"],
          ["🕘", "Riwayat"],
          ["👤", "Akun"],
        ].map((item, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              color: i === 0 ? "#b95fff" : "#ddd",
            }}
          >
            <div style={{ fontSize: "26px" }}>{item[0]}</div>

            <div style={{ marginTop: "6px", fontSize: "14px" }}>
              {item[1]}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
              }
