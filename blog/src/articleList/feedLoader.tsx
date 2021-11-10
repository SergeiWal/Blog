import { Skeleton, Stack } from "@mui/material";

export default function FeedLoader() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
      <Skeleton variant="rectangular" width={700} height={250}></Skeleton>
    </Stack>
  );
}
