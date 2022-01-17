import FullPost from "../../components/FullPost";
import { MainLayout } from "../../layouts/MainLayout";
import { PostComments } from "../../components/PostComments";

export default function Post() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
