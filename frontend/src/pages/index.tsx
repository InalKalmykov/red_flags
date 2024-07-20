// index.tsx
import styles from '../styles/Index.module.css';

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to the AI Music Generator</h1>
        <p className={styles.tagline}>Your gateway to creating and managing music tracks with AI technology.</p>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/items/new">Generate Music</a></li>
          <li><a href="/items">List of tracks</a></li>
          <li><a href="about">About</a></li>
        </ul>
      </nav>
      <section className={styles.section}>
        <h2>Introduction</h2>
        <p>Discover the power of AI in music creation. Whether you're a musician, producer, or enthusiast, our platform allows you to generate, manage, and explore music tracks effortlessly.</p>
      </section>
      {/* Other sections as needed */}
    </div>
  );
}

export default IndexPage;
