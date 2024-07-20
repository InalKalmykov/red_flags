import { useState } from 'react';

const NewTrackPage = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleCreateTrack = async () => {
    try {
      const response = await fetch(`http://localhost:8000/create_track/?name=${encodeURIComponent(name)}&text=${encodeURIComponent(text)}`);
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const data = await response.json();
      console.log('Track creation successful:', data.message);
      setError('');
    } catch (error) {
      console.error('Error creating track:', error);
    }
  };

  return (
    <div>
      <h1>Create New Track</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateTrack(); }}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} required />
        <button type="submit">Create Track</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default NewTrackPage;
