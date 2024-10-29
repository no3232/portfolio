"use client";

import { useEffect, useRef, useState } from "react";
import imagesLoaded from "imagesloaded";

const useImagesLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(0);

  const current = useRef(0);
  const imgLoaded = useRef(0);
  const imgTotal = useRef(1);

  const animationFrameId = useRef<number>();

  const updateProgress = () => {
    const target = (imgLoaded.current / imgTotal.current) * 100;
    current.current += (target - current.current) * 0.1;

    
    if (current.current >= 99) {
      setLoadingCount(100);
      setIsLoading(false);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    } else {
      setLoadingCount(Math.floor(current.current));
      animationFrameId.current = requestAnimationFrame(updateProgress);
    }
  };

  const handleUpdateProgress = () => {
    imgLoaded.current++;
  };

  useEffect(() => {
    // 모든 요소에 대해 이미지 로딩 체크
    const imgLoad = imagesLoaded(document.querySelectorAll("*"), {
      background: true,
    });
    imgLoad.on("always", (instance) => {
      imgTotal.current = instance.images.length;
      console.log("총 이미지 개수:", imgTotal.current);
    });

    imgLoad.on("progress", handleUpdateProgress);

    animationFrameId.current = requestAnimationFrame(updateProgress);

    return () => {
      imgLoad.off("progress", handleUpdateProgress);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return { isLoading, loadingCount };
};

export default useImagesLoading;
