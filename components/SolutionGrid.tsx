import Link from "next/link";
import { solutions } from "@/content/site";

export function SolutionGrid() {
  return (
    <div className="solution-grid">
      {solutions.map((solution, index) => (
        <article className="solution-card" key={solution.slug}>
          <div className={`solution-visual visual-${index + 1}`}>
            <span>0{index + 1}</span>
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
