-- CreateTable
CREATE TABLE "AirPort" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iata" VARCHAR(3) NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    CONSTRAINT "AirPort_pkey" PRIMARY KEY ("id")
);
