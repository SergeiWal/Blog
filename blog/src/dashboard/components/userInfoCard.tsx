import { Box, Button, Card, CardContent, Container } from "@mui/material";
import { cardButtonStyle, cardStyle } from "../../styles/styles";
import { User } from "../../authorization/types/userTypes";
import { Fragment } from "react";
import { BaseButton } from "../../shared/button/styled";
import {
  ActionBtn,
  UserInfoBtnContainer,
  UserInfoContainer,
  UserInfoLabel,
} from "./styled";

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
        <UserInfoContainer>
          <Container style={{ minWidth: 300, padding: 0 }}>
            <UserInfoLabel>{user.name}</UserInfoLabel>
            <UserInfoLabel>Roles: {user.roles.join(", ")}</UserInfoLabel>
            <UserInfoLabel>
              Status: {user.activate ? "Active" : "Blocked"}
            </UserInfoLabel>
          </Container>
          <UserInfoBtnContainer>
            {!user.roles.includes("ADMIN") && (
              <Fragment>
                <ActionBtn
                  sx={cardButtonStyle}
                  size="small"
                  variant="contained"
                  color="inherit"
                  onClick={() => deleteHandler(user)}
                >
                  Delete
                </ActionBtn>
                <ActionBtn
                  sx={cardButtonStyle}
                  size="small"
                  variant="contained"
                  color="inherit"
                  onClick={blockedHandler}
                >
                  {blockButtonValue}
                </ActionBtn>
              </Fragment>
            )}
          </UserInfoBtnContainer>
        </UserInfoContainer>
      </CardContent>
    </Card>
  );
}
