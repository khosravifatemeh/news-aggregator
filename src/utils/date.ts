export function convertDateFormat(dateString: string): string {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1].padStart(2, '0');
      const day = parts[2].padStart(2, '0');
      return `${year}${month}${day}`;
    }
    return '';
  }

  interface SortableItem<T> {
    publishedAt: string;
  }
  
  export const sortItemsByDate = <T extends SortableItem<T>>(items: T[]) =>
    items.sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));

  export const getPastHourDates = (): { startDate: string; endDate: string } => {
    const startDate = new Date(new Date().getTime() - 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const endDate = new Date().toISOString().split("T")[0];
  
    return { startDate, endDate };
  };
  
  export const getPast24HoursDates = (): { startDate: string; endDate: string } => {
    const startDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const endDate = new Date().toISOString().split("T")[0];
  
    return { startDate, endDate };
  };
  
  export const getPastWeekDates = (): { startDate: string; endDate: string } => {
    const startDate = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const endDate = new Date().toISOString().split("T")[0];
  
    return { startDate, endDate };
  };
  
  export const getPastYearDates = (): { startDate: string; endDate: string } => {
    const startDate = new Date(new Date().getTime() - 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const endDate = new Date().toISOString().split("T")[0];
  
    return { startDate, endDate };
  };
  