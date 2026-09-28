import firebirdLogo from "./District_of_Columbia_Firebirds_logo.png";

const navItems = [
  { label: "Home" },
  { label: "Inventory" },
  { label: "Hours" },
  { label: "Information" },
];

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="logo-flame">
          <img src={firebirdLogo} alt="logo" />
        </div>
        <div>
          <div className="brand-name">Firebird Market</div>
          <div className="brand-subtitle">Fresh Food Program</div>
        </div>
      </div>

      <nav className="nav">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-btn ${activeTab === item.label ? "active" : ""}`}
            onClick={() => setActiveTab(item.label)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="user-info">
        Welcome, User
        <div className="avatar">👤</div>
      </div>
    </header>
  );
}

export default Header;
