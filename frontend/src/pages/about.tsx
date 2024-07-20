// about.tsx

import React from 'react';
import styles from '../styles/About.module.css'; // Adjust the path as per your project structure

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1>About AI Music Generator</h1>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Main Page</a></li>
        </ul>
      </nav>
      <section className={styles.section}>
        <h2>About This Project</h2>
        <p>The AI Music Generator is a project designed to help users create and manage music tracks using AI technology. Users can generate music by selecting different genres, durations, and BPM. The generated tracks can be saved, managed, and even downloaded (redirecting to a specified URL in this case).</p>
        <p>Features of the AI Music Generator include:</p>
        <ul>
          <li>Music generation based on user inputs</li>
          <li>Track management: saving, editing, deleting, and finding similar tracks</li>
          <li>Simple and user-friendly interface</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
