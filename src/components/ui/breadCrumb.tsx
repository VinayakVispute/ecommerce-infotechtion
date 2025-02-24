import { Link } from "react-router";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm mb-8">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index}>
            {index > 0 && <span className="text-muted-foreground mx-2">/</span>}
            {item.href ? (
              <Link
                to={item.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
