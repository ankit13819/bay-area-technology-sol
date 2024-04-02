import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  promptData: any;
}
const Right: React.FC<Props> = ({ promptData }) => {
  return (
    <div className="main-card">
      {promptData.map((item: any) => (
        <Card className="card" key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default Right;
