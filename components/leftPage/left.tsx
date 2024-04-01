import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Left: React.FC = () => {
  const [boardData, setBoardData] = useState<any[]>([]);
  useEffect(() => {
    //fetching boards data
    fetch("https://demo6396395.mockable.io/bcf-boards")
      .then((response) => response.json())
      .then((data) => setBoardData(data.boards))
      .catch((error) => console.log("Error Fetching Data from Board", error));
  }, []);
  return (
    <div className="main-card">
      {boardData.map((item) => (
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
