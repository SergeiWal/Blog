import { Button, Card, CardContent } from "@mui/material";
import { cardButtonStyle, cardStyle } from "../../styles/styles";
import { User } from "../../authorization/types/userTypes";
import { Fragment } from "react";

export type UserInfoCardProps = {
  blockButtonValue: string;
  user: User;
  deleteHandler: (user: User) => void;
  blockedHandler: () => void;
};

export default function UserInfoCard({
  user,
  blockButtonValue,
  deleteHandler,
  blockedHandler,
}: UserInfoCardProps) {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <div className="cardContent">
          <div className="cardInfo ">
            <div>
              <div>{user.name}</div>
              <div>Role: {user.role}</div>
              <div>Status: {user.activate ? "Active" : "Blocked"}</div>
              <div>Articles: {user.posts.length}</div>
            </div>
            <div>
              <div>
                {user.role === "ADMIN" && (
                  <Fragment>
                    <Button
                      sx={cardButtonStyle}
                      size="small"
                      variant="contained"
                      color="inherit"
                      onClick={() => deleteHandler(user)}
                    >
                      Delete
                    </Button>
                    <Button
                      sx={cardButtonStyle}
                      size="small"
                      variant="contained"
                      color="inherit"
                      onClick={blockedHandler}
                    >
                      {blockButtonValue}
                    </Button>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
          <div className="userCardImg">
            <img src={user.photo} alt={`User ${1}`}></img>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
