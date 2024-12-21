# OpenTelemetry Example in Next.js
This repository demonstrates a minimal setup for distributed tracing using OpenTelemetry
https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry

# Running the Application with Jaeger Tracing
1. Start the application with the following command:
```sh
npm run dev
```
2. Run Jaeger using Docker by executing this command:
```sh
docker run --rm \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 9411:9411 \
  jaegertracing/all-in-one:latest
```
3. Open Jaeger UI at http://localhost:16686/search to view the traces.