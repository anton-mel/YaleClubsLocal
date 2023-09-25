
import { useParams } from "next/navigation";
import { useMemo } from "react";

const useGroup = () => {
  const params = useParams();

  const groupId = useMemo(() => {
    if (!params?.groupId) {
      return '';
    }

    return params.groupId as string;
  }, [params?.groupId]);

  return useMemo(() => ({
    groupId
  }), [groupId]);
  
};

export default useGroup;
