FROM node:18.12-alpine

ARG VERSION=0.0.0

LABEL maintainer="Team Architecture <architecture@infosis.tech>" \
      org.label-schema.vcs-url="https://gitlab.infosisglobal.com/zeus-admin/zeus-admin-messages-webapp" \
      org.label-schema.version=$VERSION \
      org.label-schema.schema-version="1.0"

ENV TZ=America/Argentina/Buenos_Aires

ENV BASE_DEPS \
    bash \
    curl \
    tzdata \
    ca-certificates

WORKDIR /app

COPY . ./

COPY package.json ./package.json

# Install dependencies
RUN apk add --update --no-cache ${BASE_DEPS} \
    && yarn install \
    && yarn cache clean \
    && yarn build \
    # Cleanup
    && rm -rf /var/cache/apk/*

EXPOSE 8080

CMD ["yarn", "start"]

