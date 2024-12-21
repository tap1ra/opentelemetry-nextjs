import { registerOTel } from '@vercel/otel'

// Next.js 15+ではnext.config.jsへの記入も不要
// @see https://github.com/vercel/otel/blob/2f43edbd2fa926582b45afb6c0e35c3fbb2d8e1f/packages/otel/src/exporters/trace-config.ts#L4
// デフォルトではlocalhost:4318に飛ぶ
export function register() {
  registerOTel({ serviceName: 'next-app' })
}