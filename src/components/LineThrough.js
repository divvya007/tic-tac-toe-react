import styled from "styled-components";

const DisplayLine = styled.div`
  display: "none";
`;

const DisplayLine1 = styled.div`
  border: 1px solid #0fa;
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
  margin-left: -88px;
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
  margin-top: 140px;
  margin-left: -56px;
  width: 359px;
  transform: rotate(51deg);
  z-index: 1;
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
  console.log(strikeType);

  function handleOnStyledLine() {
    switch (strikeType) {
      case 1:
        return <DisplayLine1 />;
      case 2:
        return <DisplayLine2 />;
      case 3:
        return <DisplayLine3 />;
      case 4:
        return <DisplayLine4 />;
      case 5:
        return <DisplayLine5 />;
      case 6:
        return <DisplayLine6 />;
      case 7:
        return <DisplayLine7 />;
      case 8:
        return <DisplayLine8 />;

      default:
        <DisplayLine />;
    }
  }

  return <>{handleOnStyledLine(strikeType)}</>;
}
