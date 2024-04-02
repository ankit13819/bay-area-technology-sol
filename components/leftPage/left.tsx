import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  boardData: any;
}

const Left: React.FC<Props> = ({ boardData }) => {
  return (
    <div className="main-card">
      {boardData.map((item: any) => (
        <Card className="card" key={item.id}>
          <CardHeader>
            <CardTitle>{boardData[0].bcfs[0].name}</CardTitle>
            <CardContent>
              <CardDescription>
                {boardData[0].bcfs[0].bcfBoards[0].name}
              </CardDescription>
              <CardDescription>
                {boardData[0].bcfs[0].bcfBoards[1].name}
              </CardDescription>
            </CardContent>
            <CardTitle>{boardData[0].bcfs[1].name}</CardTitle>
            <CardContent>
              <CardDescription>
                {boardData[0].bcfs[1].bcfBoards[0].name}
              </CardDescription>
            </CardContent>
          </CardHeader>

          <CardFooter className="flex justify-between"></CardFooter>
          <p className="card-text">{item.name}</p>
        </Card>
      ))}
    </div>
  );
};

export default Left;
