import React from "react";
import { useEffect, useRef } from "react";

function useTitle({ title }) {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previusTitle = prevTitle.current;
    document.title = `Parchapp ${title}`;
    return () => (document.title = previusTitle);
  }, [title]);
}

export default useTitle;
