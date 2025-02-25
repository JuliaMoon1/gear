FROM paritytech/ci-linux:staging as builder
LABEL description="This is the build stage for Gear. Here we create the binary."

ARG PROFILE=release
WORKDIR /gear

COPY . /gear
RUN apt-get update && apt-get install -y libsecp256k1-dev openssl
RUN rustup update
RUN cargo build -p gear-node --$PROFILE

# ===== SECOND STAGE ======

FROM debian:stable-slim
LABEL description="This is the 2nd stage: a very small image where we copy the Gear binary."
ARG PROFILE=release
COPY --from=builder /gear/target/$PROFILE/gear-node /usr/local/bin
RUN apt-get update && apt-get install -y openssl
RUN useradd -m -u 1000 -U -s /bin/sh -d /gear gear && \
	mkdir -p /gear/.local/share && \
	mkdir /data && \
	chown -R gear:gear /data && \
	ln -s /data /gear/.local/share/gear

USER root

CMD ["/usr/local/bin/gear-node"]
