const wrapSpan = (text: string, key: string) => {
  // ** 로 감싸진 텍스트를 찾기 위한 정규식
  const parts = text.split(/(\*\*.*?\*\*)/);

  return parts.map((part, partIndex) => {
    // ** 로 감싸진 텍스트인지 확인
    if (part.startsWith('**') && part.endsWith('**')) {
      // ** 제거하고 글자별로 b 태그로 감싸기
      const innerText = part.slice(2, -2);
      return innerText.split('').map((char, charIndex) => (
        <span
          className={`${key}-inner-text`}
          key={`${key}-bold-${partIndex}-${charIndex}`}
        >
          <b>{char}</b>
        </span>
      ));
    }

    // 일반 텍스트는 기존처럼 span으로 감싸기
    return part.split('').map((char, charIndex) => {
      return (
        <span
          className={`${key}-inner-text`}
          key={`${key}-${partIndex}-${charIndex}`}
        >
          {char}
        </span>
      );
    });
  });
};

export default wrapSpan;
