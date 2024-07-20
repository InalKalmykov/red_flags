// pages/items/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Item.module.css';

const ItemDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Item Details - Your Website</title>
        <meta name="description" content={`Details for item ${id}`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Item Details</h1>
        <p className={styles.description}>Details for item {id}</p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ItemDetailsPage;
