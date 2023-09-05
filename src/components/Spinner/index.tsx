import { SpinnerProps } from "./interface";

import { StyledSpinner } from "./styles";

export function Spinner(props: SpinnerProps) {

  const { width, height } = props;
  return (
    <StyledSpinner
      style={{
        width: width,
        height: height
      }}
    />
  );
}