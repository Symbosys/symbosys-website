/*
  Warnings:

  - Changed the type of `resumeUrl` on the `Applicant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "resumeUrl",
ADD COLUMN     "resumeUrl" JSONB NOT NULL;
