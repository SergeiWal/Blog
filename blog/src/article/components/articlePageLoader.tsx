import { Stack, Skeleton } from "@mui/material";

export default function ArticlePageLoader() {
  return (
    <div className="articleContent">
      <Stack spacing={2}>
        <Skeleton variant="rectangular" width={880} height={20} />
        <Skeleton variant="rectangular" width={880} height={20} />
        <Skeleton variant="rectangular" width={880} height={800} />
        <Skeleton variant="rectangular" width={880} height={20} />
      </Stack>
    </div>
  );
}
