import { useEffect, useState } from "react";
import useAxios from "axios-hooks";

import { UserBids } from "../../../../Interface";

export const useGetUserBids = () => {
  /**
   * assumes current user is user 2
   */
  const initialData = {
    active: 0,
    winning: 0,
    outbid: 0,
  };
  const [userBids, setUserBids] = useState<UserBids>(initialData);

  const [{ data }] = useAxios("http://127.0.0.1:8000/api/v1/users/2/bids");

  useEffect(() => {
    if (data) {
      setUserBids(data.bids);
    }
  }, [data]);

  return {
    userBids,
  };
};
