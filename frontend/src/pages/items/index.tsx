
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Items.module.css'; // Import CSS Module

// Define interface for Track
interface Track {
    id: string; // Assuming 'id' is a string, adjust as per your API response
    title: string;
    artist: string; // Example, adjust as per your API response
    // Add more fields if needed
  }
  
  const TrackList = () => {
    const [tracks, setTracks] = useState<Track[]>([]); // Initialize as an array of Track
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/get_track_list')
        .then(response => response.json())
        .then(data => {
          // Assuming API response has a structure like { tracks: [...] }
          setTracks(data.tracks); // Update state with fetched tracks
        })
        .catch(error => {
          console.error('Error fetching track list:', error);
        });
    }, []);
  
    return (
      <div className={styles['track-list-container']}>
        <h1 className={styles['track-list-title']}>List of Tracks</h1>
        <ul>
          {tracks.map(track => (
            <li key={track.id} className={styles['track-item']}>
              {track.title} - {track.artist}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TrackList;