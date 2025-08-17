import { memo } from "react";
import { Container } from "../Container";
import { LimitSelect } from "../LimitSelect";
import { Clock } from "../Clock";

export const HeaderBottom = memo(() => {
  return (
    <div className="header-bottom">
      <Container>
        <LimitSelect />
        <Clock />
      </Container>
    </div>
  );
});
