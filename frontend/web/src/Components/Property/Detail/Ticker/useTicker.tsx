import { useEffect, useState } from "react";
import useAxios from "axios-hooks";

import { Property } from "../../../../Interface";

export const useTicker = (currentId: number) => {
  /**
   * assumes current user is user 2
   */
  const [properties, setProperties] = useState<Property[]>([]);

  const [{ data, loading }, refetch] = useAxios(
    `http://127.0.0.1:8000/api/v1/property/?exclude=${currentId}`
  );

  useEffect(() => {
    if (data) {
      setProperties(data.results);
    }
  }, [data]);

  return {
    properties,
    setProperties,
    loading,
    refetch,
  };
};
