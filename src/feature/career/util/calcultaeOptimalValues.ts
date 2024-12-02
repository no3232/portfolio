'use client';

const calculateOptimalValues = () =>
  {
 const viewportWidth = window.innerWidth;
 const panelWidth = viewportWidth * 0.5; // 50vw를 픽셀로 변환

 // radius를 패널 너비에 비례하여 계산
 // 패널이 더 평평하게 보이도록 패널 너비의 약 4배로 설정
 const radius = panelWidth * 4;

 // 패널이 화면 밖으로 나가는 각도 계산
 // 아크탄젠트를 사용하여 패널 너비의 절반이 만드는 각도 계산
 const angleInRadians = Math.atan(panelWidth / 2 / radius);
 const angleInDegrees = (angleInRadians * 180) / Math.PI;

 // 시작과 끝 각도를 계산된 각도의 약 1.2배로 설정
 const startAngle = -angleInDegrees * 4;
 const endAngle = angleInDegrees * 4;

  return { radius, startAngle, endAngle };
};

export default calculateOptimalValues;
