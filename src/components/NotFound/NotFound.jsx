import { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { KNOWN_PATHS, ROUTE_META } from "../../routes";
import { findNearest } from "../../utils/stringUtils";
import "./NotFound.scss";

export default function NotFound() {
  const navigate = useNavigate();

  const location = useLocation();
  // Compute nearest candidate synchronously so we can render context-aware messages.
  const path = location.pathname || "/";
  const { candidate, distance } = findNearest(path, KNOWN_PATHS) || {};
  // threshold: allow small absolute edits or at most ~25% of candidate length
  const maxAllowed = candidate
    ? Math.max(1, Math.floor(candidate.length * 0.25))
    : 1;
  const isSimilar = Boolean(
    candidate && distance <= maxAllowed && candidate !== path
  );

  useEffect(() => {
    // If the path is similar, do NOT auto-redirect — we show a confirmation UI.
    if (isSimilar) return undefined;

    // fallback: redirect to home after a little longer delay
    const t = setTimeout(() => navigate("/", { replace: true }), 100);
    return () => clearTimeout(t);
  }, [navigate, isSimilar]);

  return (
    <main className="notfound-root" role="main">
      <div className="notfound-card">
        <div className="notfound-illustration" aria-hidden>
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7v6c0 5 4 9 10 9s10-4 10-9V7L12 2z"
              fill="#ffd700"
              opacity="0.15"
            />
            <path
              d="M12 7v5"
              stroke="#ffd700"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="16" r="1.2" fill="#ffd700" />
          </svg>
        </div>

        <h1 className="notfound-code" aria-hidden>
          404
        </h1>

        {isSimilar ? (
          <>
            <p className="notfound-message">
              Did you mean <strong>&quot;{candidate}&quot;</strong> ?
            </p>

            {ROUTE_META[candidate] && (
              <div className="notfound-preview">
                <h3 className="notfound-preview-title">
                  {ROUTE_META[candidate].title}
                </h3>
                <p className="notfound-preview-desc">
                  {ROUTE_META[candidate].description}
                </p>
              </div>
            )}

            <div className="notfound-actions">
              <Link
                to={candidate}
                className="notfound-cta"
                aria-label={`Go to ${candidate} now`}
              >
                Yes - take me there
              </Link>
              <button
                className="notfound-link"
                onClick={() => navigate("/", { replace: true })}
                aria-label="Go home instead"
              >
                No - go home
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="notfound-message">
              This link appears to be broken or doesn&apos;t exist. You&apos;ll
              be redirected to the homepage.
            </p>

            <div className="notfound-actions">
              <Link to="/" className="notfound-cta" aria-label="Go to home now">
                Go home
              </Link>
              <button
                className="notfound-link"
                onClick={() => navigate(-1)}
                aria-label="Go back"
              >
                Go back
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
