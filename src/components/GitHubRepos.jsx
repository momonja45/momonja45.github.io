import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const GITHUB_USERNAME = "momonja45";

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not load GitHub repositories.");
        }

        const data = await response.json();

        setRepos(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadRepos();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="section" id="github">
      <SectionHeading
        eyebrow="Latest code"
        title="GitHub Repositories"
      />

      {isLoading && <p>Loading repositories...</p>}

      {error && <p className="fetch-error">{error}</p>}

      {!isLoading && !error && repos.length === 0 && (
        <p>No public repositories found.</p>
      )}

      {!isLoading && !error && repos.length > 0 && (
        <div className="repos-grid">
          {repos.map((repo) => (
            <article className="repo-card" key={repo.id}>
              <h3>{repo.name}</h3>

              <p>
                {repo.description || "No description provided."}
              </p>

              <div className="repo-meta">
                <span>{repo.language || "Various"}</span>
                <span>Stars: {repo.stargazers_count}</span>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View repository &rarr;
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default GitHubRepos;