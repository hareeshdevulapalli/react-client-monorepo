export function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#2563eb', fontSize: '2.5rem' }}>Welcome to hareeshd.dev</h1>
      </header>
      <main>
        <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2 style={{ color: '#4b5563', fontSize: '1.8rem' }}>Software Engineer</h2>
          <p style={{ color: '#6b7280', fontSize: '1.2rem', lineHeight: 1.6 }}>
            I'm passionate about building modern web applications using React, TypeScript, and cutting-edge technologies.
            Currently working on exciting projects and always eager to learn new things.
          </p>
        </section>
        <section style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: '#6b7280' }}>
            <span role="img" aria-label="Construction sign">🚧</span>
            {' Portfolio under construction - Check back soon for more updates! '}
            <span role="img" aria-label="Construction sign">🚧</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
