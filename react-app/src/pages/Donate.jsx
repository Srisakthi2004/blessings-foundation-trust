import React, { useState } from 'react';

export default function Donate() {
  const [selectedTier, setSelectedTier] = useState(500);
  const [customAmount, setCustomAmount] = useState(500);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [preferredProgram, setPreferredProgram] = useState('General Community Welfare');
  const [alert, setAlert] = useState(null);

  const tiers = [
    { amount: 500, label: '₹500', desc: 'Student Books & Bag' },
    { amount: 1000, label: '₹1,000', desc: 'Health Camp Checkup' },
    { amount: 2500, label: '₹2,500', desc: 'Family Ration & Relief' },
    { amount: 5000, label: '₹5,000', desc: 'Vocational Sewing Kit' }
  ];

  const handleSelectTier = (amount) => {
    setSelectedTier(amount);
    setCustomAmount(amount);
  };

  const handlePledge = (e) => {
    e.preventDefault();
    setAlert({
      type: 'success',
      text: `Thank you, ${donorName || 'Valued Supporter'}! Your pledge for ₹${customAmount} towards ${preferredProgram} has been noted. Please find official organization transfer details below.`
    });
  };

  return (
    <div>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #15304f 100%)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(245,130,32,0.2)', color: '#fed7aa', border: '1px solid rgba(245,130,32,0.4)' }}>
            SUPPORT OUR MISSION
          </span>
          <h1 style={{ color: '#ffffff', fontSize: '2.75rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Your Generosity Changes Lives
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '720px' }}>
            Donations can help support critical community initiatives including child schooling, free medical diagnosis, and emergency family relief.
          </p>
        </div>
      </section>

      {/* Donation Form & Information */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left: Donation Tiers & Pledge Form */}
            <div>
              <div className="form-card">
                <h2 style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>Select Support Amount</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Choose a contribution tier or enter a custom amount below to register your support pledge.
                </p>

                <div className="donate-tiers">
                  {tiers.map(t => (
                    <div
                      key={t.amount}
                      className={`tier-card ${selectedTier === t.amount ? 'selected' : ''}`}
                      onClick={() => handleSelectTier(t.amount)}
                    >
                      <div className="tier-amount">{t.label}</div>
                      <div className="tier-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>

                {alert && (
                  <div className={`form-alert ${alert.type}`} style={{ display: 'flex' }}>
                    <svg style={{ width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span>{alert.text}</span>
                  </div>
                )}

                <form onSubmit={handlePledge}>
                  <div className="form-group">
                    <label htmlFor="customAmount" className="form-label">Amount (INR ₹)</label>
                    <input
                      type="number"
                      id="customAmount"
                      className="form-control"
                      value={customAmount}
                      min="100"
                      step="50"
                      onChange={(e) => {
                        setCustomAmount(Number(e.target.value));
                        setSelectedTier(null);
                      }}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="donorName" className="form-label">Your Name</label>
                      <input
                        type="text"
                        id="donorName"
                        className="form-control"
                        placeholder="Full name"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="donorEmail" className="form-label">Your Email</label>
                      <input
                        type="email"
                        id="donorEmail"
                        className="form-control"
                        placeholder="name@example.com"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredProgram" className="form-label">Direct My Support Towards</label>
                    <select
                      id="preferredProgram"
                      className="form-control"
                      value={preferredProgram}
                      onChange={(e) => setPreferredProgram(e.target.value)}
                    >
                      <option value="General Community Welfare">General Community Welfare</option>
                      <option value="Education Support">Education Support &amp; Books</option>
                      <option value="Healthcare Camps">Healthcare &amp; Medicine Camp</option>
                      <option value="Women Empowerment">Women Vocational Training</option>
                      <option value="Child Nutrition">Child Nutrition &amp; Welfare</option>
                      <option value="Tree Plantation">Green Plantation &amp; Cleanliness</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Proceed with Support Pledge
                  </button>
                </form>

                <div className="placeholder-box">
                  <strong>Notice regarding actual organization payment details:</strong><br />
                  In accordance with strict security and transparency guidelines, online payment credentials, live UPI gateways, and official bank accounts must be configured by authorized trustees upon legal verification. See editable transfer details on the right.
                </div>
              </div>
            </div>

            {/* Right: Bank & UPI Placeholders */}
            <div>
              <span className="section-tag">Direct Bank / UPI Transfer</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Organization Transfer Details</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                For direct transfers via NEFT, RTGS, IMPS, or UPI, please replace these clearly marked placeholders with official Trust account information.
              </p>

              <div className="form-card" style={{ backgroundColor: 'var(--bg-white)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--secondary)' }}>
                  Bank Account Details (Placeholder)
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-muted)', width: '40%' }}>Account Name:</td>
                      <td style={{ padding: '0.75rem 0', fontWeight: 700, color: 'var(--secondary)' }}>Blessings Foundation Trust</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-muted)' }}>Account Number:</td>
                      <td style={{ padding: '0.75rem 0', fontFamily: 'monospace', color: 'var(--primary)', fontWeight: 700 }}>[ACCOUNT_NUMBER_PLACEHOLDER]</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-muted)' }}>Bank Name:</td>
                      <td style={{ padding: '0.75rem 0' }}>[BANK_NAME_PLACEHOLDER]</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-muted)' }}>IFSC Code:</td>
                      <td style={{ padding: '0.75rem 0', fontFamily: 'monospace', fontWeight: 600 }}>[IFSC_CODE_PLACEHOLDER]</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem 0', fontWeight: 600, color: 'var(--text-muted)' }}>Branch:</td>
                      <td style={{ padding: '0.75rem 0' }}>[BRANCH_NAME_PLACEHOLDER]</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="form-card" style={{ backgroundColor: 'var(--bg-white)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--secondary)' }}>
                  Project Link
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '0.5rem' }}>
                  Visit our project page:
                </p>
                <a
                  href="https://chatgpt.com/c/6ab25541-b580-83ee-a378-94c1ec1a46e3"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--primary)', fontWeight: 700, wordBreak: 'break-word' }}
                >
                  https://chatgpt.com/c/6ab25541-b580-83ee-a378-94c1ec1a46e3
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
