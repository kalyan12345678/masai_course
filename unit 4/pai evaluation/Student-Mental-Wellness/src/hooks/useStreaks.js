import { useMemo } from 'react';
// entries: [{date: '2025-08-16', habit: '...', reflection: '...'}]
export default function useStreaks(entries) {
  return useMemo(() => {
    // Dummy: last 7 days, 1 for entry, 0 for none
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      return entries.some(e => e.date === dateStr) ? 1 : 0;
    }).reverse();
  }, [entries]);
}
