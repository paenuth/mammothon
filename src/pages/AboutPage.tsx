// src/pages/AboutPage.tsx
import styles from "../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About the Game</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Game Mechanics</h2>
        <div className={styles.description}>
          <p>
            A hypercasual arcade game where the player will defend their
            platform against enemies that try to push the player off and drag
            the platform down.
          </p>
          <p>
            The player has to shoot the enemies and avoid their projectiles.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Game Progression</h2>
        <div className={styles.description}>
          <p>The game consists only of players, enemies, and the platform.</p>
          <p>
            Over time, the challenges become harder and enemies become more
            aggressive.
          </p>
          <p>
            The player can collect coins by killing enemies, which increases
            the player's EXP and score.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>NFT Integration and Para Wallet</h2>
        <div className={styles.description}>
          <p>
            The player has a set of achievements to be earned, which will be
            minted as NFT badges and added to their pre-generated wallets on
            Para, integrating with EVM L2 Blockchain (L2 is optional).
          </p>
        </div>
      </section>
    </div>
  );
}