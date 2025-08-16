// Simple insights engine for last 7 days
export default function generateInsights(entries) {
  // Dummy: count entries per day
  const insights = [];
  for (let i = 0; i < 7; i++) {
    insights.push(`Day ${i + 1}: ${entries[i] ? 'Entry added' : 'No entry'}`);
  }
  return insights;
}
