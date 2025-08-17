import { GhIcon, InIcon } from "@/assets/svgs";
import { Container } from "../Container";
import "./footer.scss";

export function Footer() {
  const resizeIcon = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    scale: number
  ) => {
    const element = e.currentTarget;
    element.style.transform = `scale(${scale})`;
    element.style.transition = "transform 0.3s ease";
  };

  return (
    <footer className="footer">
      <Container>
        <div>Luis Angel Salcedo Gavidia | 2025</div>
        <div className="redes">
          <a
            href="https://www.linkedin.com/in/luisangelsalcedo "
            target="_blank"
            onMouseEnter={(e) => resizeIcon(e, 1.2)}
            onMouseLeave={(e) => resizeIcon(e, 1)}
          >
            <InIcon />
          </a>
          <a
            href="https://github.com/luisangelsalcedo"
            target="_blank"
            onMouseEnter={(e) => resizeIcon(e, 1.2)}
            onMouseLeave={(e) => resizeIcon(e, 1)}
          >
            <GhIcon />
          </a>
        </div>
      </Container>
    </footer>
  );
}
