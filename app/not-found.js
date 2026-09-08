import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "4rem 1rem",
      }}
    >
      <p style={{ fontFamily: "Roboto", fontSize: 80, margin: 0, color: "darkslategray" }}>404</p>
      <h1 style={{ fontFamily: "Heebo", fontSize: 28, marginTop: "0.5rem" }}>Page Not Found</h1>
      <p style={{ maxWidth: 480, marginTop: "1rem" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "1.5rem",
          backgroundColor: "darkslategray",
          color: "white",
          padding: "0.75rem 2rem",
          borderRadius: 4,
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
