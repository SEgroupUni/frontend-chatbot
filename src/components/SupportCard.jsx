export default function SupportCard() {
  return (
    <div className="support-card">
        <h2>Your support is vital and helps the Museum to share the collection with the world.</h2>
    <p>The British Museum relies on support from a wide range of sources and there are many ways that you can donate to help care for and preserve the collection for future generations. You can donate as an individual, or through a foundation, trust or company. Your support helps us to do the following:</p>
    <p> - Create world-class exhibitions and gallery displays </p>
    <p> - Care for, study and share the collection </p>
    <p> - Engage local and global communities with what we do </p>
    <p>Read our supporter case studies to discover just a few of the fantastic collaborations already in place.</p>
    <button className="donate-button" onClick={() => window.open(
      "https://www.britishmuseum.org/support-us/donate-now",
      "_blank",
      "noopener,noreferrer"
    )
  }
> Donate Now</button>
    </div>
    );
}