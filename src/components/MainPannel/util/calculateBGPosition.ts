interface BGPositionProps {
  imageDimension: {
    width: number;
    height: number;
  };
  imageRatio: number;
  gridRow: number;
  gridColumn: number;
  index: number;
}

// 우선 이미지 비율(너비/높이)를 설정한다.
// div의 높이와 너비를 가져온다.
// div의 비율(너비/높이)가 이미지 비율보다 크면 높이를 auto로 설정한다.
// 반대로 너비가 높이보다 크면 너비를 auto로 설정한다.

// 현재 이미지 비율보다 div의 비율이 크다면 왼쪽 여백을 준다.
// 반대로 이미지 비율보다 div의 비율이 작다면 위쪽 여백을 준다.
// 여백의 계산은 다음과 같다.
// left margin = div의 너비 / 2 - 이미지 너비 / 이미지 비율 / 2
// top margin = div의 높이 / 2 - 이미지 높이 * 이미지 비율 / 2

const calculateBackgroundPosition = ({
  imageDimension,
  imageRatio,
  gridRow,
  gridColumn,
  index,
}: BGPositionProps) => {
  const { width, height } = imageDimension;
  const dimensionRatio = width / height;

  const bgSize =
    dimensionRatio > imageRatio ? `auto ${height}px` : `${width}px auto`;

  const topMargin =
    dimensionRatio > imageRatio ? 0 : height / 2 - width / imageRatio / 2;
  const leftMargin =
    dimensionRatio > imageRatio ? width / 2 - (height * imageRatio) / 2 : 0;

  const itemWidth = imageDimension.width / gridColumn;
  const itemHeight = imageDimension.height / gridRow;
  const row = Math.floor(index / gridColumn);
  const col = index % gridRow;
  const left = -col * itemWidth;
  const top = -row * itemHeight;

  const bgPosition = `left ${leftMargin + left}px top ${topMargin + top}px`;

  return { bgPosition, bgSize };
};

export default calculateBackgroundPosition;
