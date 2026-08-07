import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { ROUTES } from "@/constants/routes";
import styles from "./SearchBar.module.css";

const PREVIEW_LIMIT = 3;

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { services, blogs } = useSearch(query);
  const hasResults = services.length > 0 || blogs.length > 0;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
  };

  const goToResultsPage = () => {
    if (!query.trim()) {
      return;
    }
    navigate(`${ROUTES.SEARCH}?q=${encodeURIComponent(query.trim())}`);
    closeSearch();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      goToResultsPage();
    }
    if (event.key === "Escape") {
      closeSearch();
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    closeSearch();
  };

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {isOpen ? (
        <div className={styles.inputBox}>
          <Search size={16} className={styles.inputIcon} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className={styles.input}
          />
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close search"
            onClick={closeSearch}
          >
            <X size={16} />
          </button>

          {query.trim() && (
            <div className={styles.dropdown}>
              {hasResults ? (
                <>
                  {services.slice(0, PREVIEW_LIMIT).map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      className={styles.resultItem}
                      onClick={() =>
                        handleResultClick(`/services/${service.id}`)
                      }
                    >
                      <span className={styles.resultTag}>Service</span>
                      {service.label}
                    </button>
                  ))}

                  {blogs.slice(0, PREVIEW_LIMIT).map((post) => (
                    <button
                      key={post.id}
                      type="button"
                      className={styles.resultItem}
                      onClick={() => handleResultClick(`/blog/${post.id}`)}
                    >
                      <span className={styles.resultTag}>Blog</span>
                      {post.title}
                    </button>
                  ))}

                  <button
                    type="button"
                    className={styles.viewAll}
                    onClick={goToResultsPage}
                  >
                    View all results
                  </button>
                </>
              ) : (
                <p className={styles.noResults}>No results found</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Search"
          onClick={() => setIsOpen(true)}
        >
          <Search size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;