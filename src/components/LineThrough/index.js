import styled from "styled-components";

const DisplayLine = styled.div`
  display: "none";
`;

const DisplayLine1 = styled.div`
  border: 2px solid #0fa;
  height: 2px;
  position: absolute;
  margin-top: 45px;
  margin-left: 14px;
  width: 218px;
  display: "block";
  z-index: 1;
`;

const DisplayLine2 = styled.div`
  border: 1px solid #0fa;
  position: absolute;
  margin-top: 141px;
  margin-left: 14px;
  width: 218px;
  display: "block";
  z-index: 1;
`;
const DisplayLine3 = styled.div`
  border: 1px solid #0fa;
  position: absolute;
  margin-top: 232px;
  margin-left: 14px;
  width: 218px;
  display: "block";
  z-index: 1;
`;

const DisplayLine4 = styled.div`
  border: 1px solid #0fa;
  position: absolute;
  margin-top: 140px;
  margin-left: -94.5px;
  width: 276px;
  z-index: 1;

  transform: rotate(90deg);
`;

const DisplayLine5 = styled.div`
  border: 1px solid #0fa;
  position: absolute;
  margin-top: 140px;
  margin-left: -16px;
  width: 276px;
  display: "block";
  transform: rotate(90deg);
  z-index: 1;
`;
const DisplayLine6 = styled.div`
  border: 1px solid #0fa;
  position: absolute;
  margin-top: 140px;
  margin-left: 56px;
  width: 276px;

  display: "block";
  transform: rotate(90deg);
  z-index: 1;
`;

const DisplayLine7 = styled.div`
  border: 1px solid #0fa;
  position: absolute;
  margin-left: -58px;
  margin-top: 138px;
  width: 362px;
  transform: rotate(50deg);
  z-index: 1;

  /* top: 357px;
    left: 645px;
    width: 362px; */
`;

const DisplayLine8 = styled.div`
  border: 1px solid #0fa;
  position: absolute;
  margin-top: 140px;
  margin-left: -56px;
  width: 359px;
  display: "block";
  transform: rotate(128deg);
  z-index: 1;
`;

export default function LineThrough({ strikeType }) {
  function handleOnStyledLine() {
    switch (strikeType) {
      case 1:
        return <DisplayLine1 data-testid={`strike-${strikeType}`} />;
      case 2:
        return <DisplayLine2 data-testid={`strike-${strikeType}`} />;
      case 3:
        return <DisplayLine3 data-testid={`strike-${strikeType}`} />;
      case 4:
        return <DisplayLine4 data-testid={`strike-${strikeType}`} />;
      case 5:
        return <DisplayLine5 data-testid={`strike-${strikeType}`} />;
      case 6:
        return <DisplayLine6 data-testid={`strike-${strikeType}`} />;
      case 7:
        return <DisplayLine7 data-testid={`strike-${strikeType}`} />;
      case 8:
        return <DisplayLine8 data-testid={`strike-${strikeType}`} />;

      default:
        <DisplayLine />;
    }
  }

  return <>{handleOnStyledLine(strikeType)}</>;
}
