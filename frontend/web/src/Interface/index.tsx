export interface Property {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  market_value: number;
  reserve_price: number;
  last_bid: number;
  winning_bid: number;
  current_user_bid: {
    active: number;
    outbid: number;
  };
}

export interface UserBids {
  active: number;
  winning: number;
  outbid: number;
}
