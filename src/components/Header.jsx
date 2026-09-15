
const Header = ({ page, onNavigate }) => {
  return (
    <header className="site-header">
      <button className="logo" onClick={() => onNavigate("home")}>
        Doggy Daycare
      </button>
      <nav>
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => onNavigate("home")}
        >
          Home
        </button>
        <button
          className={page === "catalog" || page === "profile" ? "active" : ""}
          onClick={() => onNavigate("catalog")}
        >
          Dog Catalog
        </button>
      </nav>
    </header>
  );
};

export default Header;
