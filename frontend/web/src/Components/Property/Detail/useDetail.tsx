import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "axios-hooks";

import { Property } from "../../../Interface";
import { ROUTES } from "../../../Router";

export const useDetail = (id: string | undefined) => {
  const navigate = useNavigate();
  const initialData = {
    id: 0,
    address: "string",
    city: "string",
    state: "string",
    zip: "string",
    market_value: 0,
    reserve_price: 0,
    last_bid: 0,
    winning_bid: 0,
    current_user_bid: {
      active: 0,
      outbid: 0,
    },
  };

  const [{ data, loading, error }, refetch] = useAxios(
    `http://127.0.0.1:8000/api/v1/property/${id}`
  );

  const [property, setProperty] = useState<Property>(initialData);

  useEffect(() => {
    if (data) setProperty(data);
  }, [data]);

  useEffect(() => {
    if (error) navigate(ROUTES.NOT_FOUND);
  }, [error, navigate]);

  return {
    property,
    setProperty,
    loading,
    refetch,
  };
};
