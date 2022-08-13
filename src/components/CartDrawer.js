import React, { useState } from 'react';

export default function CartDrawer() {
  const [visible, setVisible] = useState(false);
  
  return (
    <div className="drawer-container">Your cart is empty.</div>
  );
};
