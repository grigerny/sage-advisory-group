import Link from "next/link";
import { solutions } from "@/content/site";

export function SolutionGrid() {
  return (
    <div className="solution-grid">
      {solutions.map((solution) => (
        <article className="solution-card" key={solution.slug}>
          <div className="solution-visual">
            <img src={solution.image} alt={solution.title} />
          </div>
          <div className="solution-card-body">
            <h3>{solution.title}</h3>
            <p>{solution.summary}</p>
            <Link className="text-link" href={`/solutions/detail/${solution.slug}/`}>
              Read More <span>→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
