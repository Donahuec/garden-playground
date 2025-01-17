import styles from "./colors.module.css";

export function Colors() {
  return (
    <main>
      <header className={styles.hero}>
        <h1 style={{ color: "var(--lightShade)" }}>
          This is Not a Real Website
        </h1>
        <h1 style={{ color: "var(--primary)" }}>This is Not a Real Website</h1>
        <h1 style={{ color: "var(--lightAccent)" }}>
          This is Not a Real Website
        </h1>
        <div>
          <div className={styles.colorSamples}>
            <div
              className={styles.colorBlock}
              style={{
                backgroundColor: "var(--lightShade)",
                color: "var(--darkShade)",
              }}>
              <span style={{ color: "var(--primary)" }}>Text</span>
              <span style={{ color: "var(--darkAccent)" }}>Text</span>
              <span style={{ color: "var(--darkShade)" }}>Text</span>
            </div>
            <div
              className={styles.colorBlock}
              style={{
                backgroundColor: "var(--primary)",
              }}>
              <span style={{ color: "var(--lightShade)" }}>Text</span>
            </div>
            <div
              className={styles.colorBlock}
              style={{
                backgroundColor: "var(--lightAccent)",
              }}>
              <span style={{ color: "var(--darkAccent)" }}>Text</span>
              <span style={{ color: "var(--darkShade)" }}>Text</span>
            </div>
            <div
              className={styles.colorBlock}
              style={{
                backgroundColor: "var(--darkAccent)",
              }}>
              <span style={{ color: "var(--lightShade)" }}>Text</span>
              <span style={{ color: "var(--lightAccent)" }}>Text</span>
            </div>

            <div
              className={styles.colorBlock}
              style={{
                backgroundColor: "var(--darkShade)",
                border: "1px solid var(--lightShade)",
              }}>
              <span style={{ color: "var(--lightShade)" }}>Text</span>
              <span style={{ color: "var(--lightAccent)" }}>Text</span>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
