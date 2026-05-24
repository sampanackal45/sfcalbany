import { useEffect } from "react";
import { setPageMetadata } from "../utils/seoHelpers";

function usePageMeta(page) {
  useEffect(() => {
    setPageMetadata(page);
  }, [page]);
}

export default usePageMeta;
