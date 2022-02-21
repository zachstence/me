# ------------
# Build image
# ------------
FROM mhart/alpine-node:16

# Install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy over all files
COPY . .

RUN npm run build

# ------------
# Run image
# ------------
FROM mhart/alpine-node:slim-16

WORKDIR /app
COPY --from=0 /app .

EXPOSE 3000

CMD ["node", "./build"]
