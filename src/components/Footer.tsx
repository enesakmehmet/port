export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        background: "#f1f1f1",
        marginTop: "3rem",
      }}
    >
      © {new Date().getFullYear()} Enes Akmehmet | All Rights Reserved
    </footer>
  );
}
