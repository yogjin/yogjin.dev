import { parseISO, format } from 'date-fns';

interface DataProps {
  dateString: string;
}
export default function Date({ dateString }: DataProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
