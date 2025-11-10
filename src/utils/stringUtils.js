/**
 * Compute Levenshtein distance between two strings.
 * Simple dynamic programming implementation.
 */
export function levenshtein(a, b) {
  const al = a.length;
  const bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;

  const dp = Array.from({ length: al + 1 }, () => new Array(bl + 1));
  for (let i = 0; i <= al; i++) dp[i][0] = i;
  for (let j = 0; j <= bl; j++) dp[0][j] = j;

  for (let i = 1; i <= al; i++) {
    for (let j = 1; j <= bl; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[al][bl];
}

/**
 * Given a target string and an array of candidate strings,
 * return the closest candidate and its distance.
 */
export function findNearest(target, candidates) {
  if (!target) return null;
  let best = { candidate: null, distance: Infinity };
  for (const c of candidates) {
    // simple compare directly
    const d = levenshtein(target, c);
    if (d < best.distance) {
      best = { candidate: c, distance: d };
    }
  }
  return best;
}
