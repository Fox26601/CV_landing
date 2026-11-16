const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type Bucket = {
  count: number;
  windowStart: number;
};

const buckets = new Map<string, Bucket>();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "unknown";
}

export function consumeRateLimit(key: string): {
  allowed: boolean;
  remaining: number;
  retryAfterSec: number;
} {
  const now = Date.now();
  let bucket = buckets.get(key);

  if (!bucket || now - bucket.windowStart >= WINDOW_MS) {
    bucket = { count: 0, windowStart: now };
    buckets.set(key, bucket);
  }

  if (bucket.count >= MAX_REQUESTS) {
    const retryAfterMs = bucket.windowStart + WINDOW_MS - now;
    return {
      allowed: false,
      remaining: 0,
      retryAfterSec: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
  }

  bucket.count += 1;
  return {
    allowed: true,
    remaining: MAX_REQUESTS - bucket.count,
    retryAfterSec: 0,
  };
}