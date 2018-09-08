import * as React from 'react';

export default function ButtonBuy(props: any) {
  return (
    <button className="button-buy" onClick={() => props.addToCard(props.item)}>
      Add to card
    </button>
  );
}
