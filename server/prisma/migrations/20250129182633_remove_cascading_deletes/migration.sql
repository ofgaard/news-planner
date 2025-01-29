-- DropForeignKey
ALTER TABLE "StoryOnUser" DROP CONSTRAINT "StoryOnUser_storyId_fkey";

-- DropForeignKey
ALTER TABLE "StoryOnUser" DROP CONSTRAINT "StoryOnUser_userId_fkey";

-- AddForeignKey
ALTER TABLE "StoryOnUser" ADD CONSTRAINT "StoryOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryOnUser" ADD CONSTRAINT "StoryOnUser_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
