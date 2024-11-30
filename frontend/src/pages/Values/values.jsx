import { 
    Layout, 
  } from "../../components";
  
  function Values() {
    return (
      <Layout>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Our Values</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
          At PCEA, we are guided by the following core values:
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><strong>Faith:</strong> We place our trust in God and follow Christ’s teachings.</li>
            <li><strong>Love:</strong> We are committed to loving our neighbors as ourselves.</li>
            <li><strong>Service:</strong> We serve others in humility and compassion.</li>
            <li><strong>Compassion:</strong> We are dedicated to showing empathy and care for others.</li>
          </ul>
        </p>
      </div>  
      </Layout>
  );
};

export default Values;
