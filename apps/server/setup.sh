#!/bin/bash

RED='\033[0;31m' # Red color

# Check if either 'prisma' directory or '.env' file exists
if [ -d "prisma" ] || [ -d "db-data" ] || [ -d "pgadmin-data" ] || [ -f ".env" ]; then
    echo "\n${RED}Error: \"setup-prisma\" has already been called.\n"
    exit 1
fi

# setting up docker
docker-compose down
docker-compose up -d

# creation of .env with DATABASE_URL
echo 'DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"' >> .env

# init prisma directory
npx prisma init

# sleep for 3 seconds to prvent prisma from instant pull from database (without it, prisma throws error)
sleep 3

# pulling schema from database
npx prisma db pull 

# generation of schema.prisma
npx prisma generate
 
# first migration
mkdir -p prisma/migrations/0_init 
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
npx prisma migrate resolve --applied 0_init