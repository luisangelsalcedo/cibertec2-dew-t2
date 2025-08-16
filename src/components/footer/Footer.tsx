import { GhIcon, InIcon } from "@/assets/svgs";
import "./footer.scss";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div>Luis Angel Salcedo Gavidia | 2025</div>
        <div className="redes">
          <a
            href="https://www.linkedin.com/in/luisangelsalcedo "
            target="_blank"
            /* onmouseover="resizeIcon(event, 1.2)"
            onmouseout="resizeIcon(event, 1)" */
          >
            <InIcon />
          </a>
          <a
            href="https://github.com/luisangelsalcedo"
            target="_blank"
            /* onmouseover="resizeIcon(event, 1.2)"
            onmouseout="resizeIcon(event, 1)" */
          >
            <GhIcon />
          </a>
        </div>
      </Container>
    </footer>
  );
}
