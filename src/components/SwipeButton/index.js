import React from 'react';

export default function SwipeButton() {
  return (
    <div className="mouse_scroll">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div>
        <a href="#custom-carousel">
          <span class="m_scroll_arrows one"></span>
          <span class="m_scroll_arrows two"></span>
          <span class="m_scroll_arrows three"></span>
        </a>
      </div>
    </div>
  );
}
