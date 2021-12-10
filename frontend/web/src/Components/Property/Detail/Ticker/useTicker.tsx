import { useEffect, useState } from "react";
import useAxios from "axios-hooks";

import { Config } from "../../../../Config";
import { Property } from "../../../../Interface";

export const useTicker = (currentId: number) => {
  /**
   * assumes current user is user 2
   */
  const [properties, setProperties] = useState<Property[]>([]);

  const [{ data, loading }, refetch] = useAxios(
    `${Config.API_URL}/property/?exclude=${currentId}`
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
