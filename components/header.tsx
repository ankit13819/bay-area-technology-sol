import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <div className="header">
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/bay.png"
          alt="bay area"
          width={200}
          height={60}
          style={{
            paddingTop: "30px",
            paddingLeft: "10px",
            cursor: "pointer",
          }}
        />
      </nav>
    </div>
  );
};

export default Header;
