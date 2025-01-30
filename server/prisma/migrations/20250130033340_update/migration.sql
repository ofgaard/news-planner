-- CreateEnum
CREATE TYPE "Role" AS ENUM ('EDITOR', 'JOURNALIST');

-- DropForeignKey
ALTER TABLE "StoryOnUser" DROP CONSTRAINT "StoryOnUser_storyId_fkey";

-- DropForeignKey
ALTER TABLE "StoryOnUser" DROP CONSTRAINT "StoryOnUser_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'JOURNALIST';

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "storyId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Story_publishBy_idx" ON "Story"("publishBy");

-- CreateIndex
CREATE INDEX "Story_updatedAt_idx" ON "Story"("updatedAt");

-- AddForeignKey
ALTER TABLE "StoryOnUser" ADD CONSTRAINT "StoryOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryOnUser" ADD CONSTRAINT "StoryOnUser_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;
