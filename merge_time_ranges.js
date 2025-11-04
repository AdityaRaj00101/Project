const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) {
    return [];
  }
  
  if (ranges.length === 1) {
    return [[ranges[0][0], ranges[0][1]]];
  }
  
  const sortedRanges = ranges.slice().sort((a, b) => a[0] - b[0]);
  
  const merged = [];
  let currentRange = [sortedRanges[0][0], sortedRanges[0][1]];
  
  for (let i = 1; i < sortedRanges.length; i++) {
    const [nextStart, nextEnd] = sortedRanges[i];
    const [currentStart, currentEnd] = currentRange;
    const gap = nextStart - currentEnd;
    
    if (gap <= threshold) {
      currentRange[1] = Math.max(currentEnd, nextEnd);
    } else {
      merged.push(currentRange);
      currentRange = [nextStart, nextEnd];
    }
  }
  
  merged.push(currentRange);
  
  return merged;
};

module.exports = {
  mergeTimeRanges
};
